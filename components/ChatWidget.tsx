'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const LOCATION_ID = 'El3PC7NTu7WhxD7cFm30';
const WIDGET_ID = '6a33b9e9fca726332c0ed2ed';
const API_BASE = 'https://services.leadconnectorhq.com';
const WS_BASE = 'wss://services.leadconnectorhq.com/sockets-live-chat/socket.io/';

type Message = {
  id: string;
  body: string;
  direction: 'inbound' | 'outbound';
  dateAdded: string;
};

type SessionData = {
  token: string;
  conversationId: string;
  visitorId: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [session, _setSession] = useState<SessionData | null>(null);
  const sessionRef = useRef<SessionData | null>(null);
  const setSession = useCallback((s: SessionData | null) => {
    sessionRef.current = s;
    _setSession(s);
  }, []);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isWaitingReply, setIsWaitingReply] = useState(false);
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const ackIdRef = useRef(500000);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Listen for global open event
  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener('open-custom-chat', handler);
    return () => window.removeEventListener('open-custom-chat', handler);
  }, []);

  // Poll for messages as fallback when WebSocket doesn't deliver
  const pollForReply = useCallback(async (sess: SessionData) => {
    if (!sess.conversationId || !sess.token) return;
    try {
      const res = await fetch(`/api/chat/messages?conversationId=${sess.conversationId}`, {
        headers: { authorization: `Bearer ${sess.token}` },
      });
      if (res.ok) {
        const data = await res.json();
        const rawList = data.messages || data.lastMessages || (Array.isArray(data) ? data : []);
        if (Array.isArray(rawList) && rawList.length > 0) {
          const parsed: Message[] = rawList
            .map((m: any): Message => ({
              id: m.id || m._id || `msg-${Math.random()}`,
              body: m.body || m.message || '',
              direction:
                m.direction === 'inbound' || m.direction === 'TYPE_INBOUND' || m.type === 'inbound'
                  ? 'inbound'
                  : 'outbound',
              dateAdded: m.dateAdded || m.createdAt || new Date().toISOString(),
            }))
            .filter((m: Message) => Boolean(m.body));

          if (parsed.length > 0) {
            setMessages(parsed);
            setIsWaitingReply(false);
          }
        }
      }
    } catch (e) {
      console.error('[Poll] Error fetching messages:', e);
    }
  }, []);

  // Connect WebSocket after we have a session
  const connectWebSocket = useCallback((sess: SessionData) => {
    // Keep existing connection if already OPEN
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      console.log('[WS] Socket already active, retaining connection');
      return;
    }

    // Close closed/closing connection if present
    if (wsRef.current) {
      wsRef.current.close();
    }

    const params = new URLSearchParams({
      authorization: `Bearer ${sess.token}`,
      channel: 'CHAT_WIDGET',
      source: 'CHAT_WIDGET_VISITOR',
      authClassId: sess.visitorId,
      locationId: LOCATION_ID,
      visitorId: sess.visitorId,
      widgetId: WIDGET_ID,
      isDummy: 'false',
      version: '2021-07-28',
      path: '/sockets-live-chat/socket.io',
      EIO: '4',
      transport: 'websocket',
    });

    try {
      const ws = new WebSocket(`${WS_BASE}?${params.toString()}`);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('[WS] Connected successfully');
      };

      ws.onmessage = (event) => {
        const raw = event.data as string;

        // Engine.IO open packet: 0{...}
        if (raw.startsWith('0')) {
          try {
            const config = JSON.parse(raw.slice(1));
            if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
            pingIntervalRef.current = setInterval(() => {
              if (ws.readyState === WebSocket.OPEN) {
                ws.send('2'); // Engine.IO ping
              }
            }, config.pingInterval || 25000);
          } catch {}
          // Send Socket.IO connect packet
          ws.send('40');
          return;
        }

        // Engine.IO pong
        if (raw === '3') return;

        // Engine.IO ping from server - respond with pong
        if (raw === '2') {
          ws.send('3');
          return;
        }

        // Socket.IO connected: 40{...}
        if (raw.startsWith('40')) {
          console.log('[WS] Socket.IO connected');
          return;
        }

        // Socket.IO event: 42["event",data] or 42<ackId>["event",data]
        if (raw.startsWith('42')) {
          try {
            const jsonStart = raw.indexOf('[');
            if (jsonStart === -1) return;

            // Extract ack ID if server requested an acknowledgment
            const ackId = raw.slice(2, jsonStart);
            if (ackId) {
              ws.send(`43${ackId}[]`);
            }

            const payload = JSON.parse(raw.slice(jsonStart));
            const eventName = payload[0];
            const data = payload[1];

            console.log('[WS] Event:', eventName, data);

            if (data && typeof data === 'object') {
              // Typing indicators
              if (data.event === 'TYPING_ON') {
                setIsWaitingReply(true);
                return;
              }
              if (data.event === 'TYPING_OFF') {
                setIsWaitingReply(false);
                return;
              }

              // Incoming message payload
              const msgText = data.message || data.body || data.text;
              if (msgText && typeof msgText === 'string') {
                const newMsg: Message = {
                  id: data.messageId || data.id || `ws-${Date.now()}`,
                  body: msgText,
                  direction: 'outbound',
                  dateAdded: new Date().toISOString(),
                };
                setMessages((prev) => {
                  if (prev.some((m) => m.id === newMsg.id)) return prev;
                  return [...prev, newMsg];
                });
                // Cancel polling fallback since WS delivered the reply
                if (pollTimerRef.current) {
                  clearTimeout(pollTimerRef.current);
                  pollTimerRef.current = null;
                }
                setIsWaitingReply(false);
              }
            }
          } catch (e) {
            console.log('[WS] Parse error for:', raw);
          }
          return;
        }
      };

      ws.onerror = (err) => {
        console.error('[WS] Error:', err);
      };

      ws.onclose = () => {
        console.log('[WS] Closed');
        if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
      };
    } catch (err) {
      console.error('[WS] Connection exception:', err);
    }
  }, []);

  // Fetch initial history ONCE when restoring a session
  const loadHistoryOnce = useCallback(async (sess: SessionData) => {
    if (!sess.conversationId || !sess.token) return;
    try {
      const res = await fetch(`/api/chat/messages?conversationId=${sess.conversationId}`, {
        headers: {
          authorization: `Bearer ${sess.token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        const rawList = data.messages || data.lastMessages || (Array.isArray(data) ? data : []);
        if (Array.isArray(rawList) && rawList.length > 0) {
          const parsed: Message[] = rawList
            .map((m: any): Message => ({
              id: m.id || m._id || `msg-${Math.random()}`,
              body: m.body || m.message || '',
              direction:
                m.direction === 'inbound' || m.direction === 'TYPE_INBOUND' || m.type === 'inbound'
                  ? 'inbound'
                  : 'outbound',
              dateAdded: m.dateAdded || m.createdAt || new Date().toISOString(),
            }))
            .filter((m: Message) => Boolean(m.body));

          if (parsed.length > 0) {
            setMessages(parsed);
          }
        }
      }
    } catch (e) {
      console.error('Load history error:', e);
    }
  }, []);

  // Restore session or pre-warm on open
  useEffect(() => {
    const init = async () => {
      try {
        const saved = localStorage.getItem('oihe_chat_session');
        if (saved) {
          const parsed: SessionData = JSON.parse(saved);
          if (parsed.token && parsed.conversationId) {
            setSession(parsed);
            connectWebSocket(parsed);
            loadHistoryOnce(parsed);
            return;
          }
        }
      } catch {}

      try {
        await fetch('/api/chat/open');
      } catch (e) {
        console.error('Init session error:', e);
      }
    };

    if (isOpen && !session) {
      init();
    }
  }, [isOpen, session, connectWebSocket, loadHistoryOnce]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wsRef.current) wsRef.current.close();
      if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
      if (pollTimerRef.current) clearTimeout(pollTimerRef.current);
    };
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || isSending) return;

    setInputText('');
    setIsSending(true);
    setIsWaitingReply(true);

    // Optimistic UI
    const tempMsg: Message = {
      id: `temp-${Date.now()}`,
      body: text,
      direction: 'inbound',
      dateAdded: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, tempMsg]);

    try {
      let currentSession = sessionRef.current;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (currentSession?.token) {
        headers['authorization'] = `Bearer ${currentSession.token}`;
      }

      const sendRes = await fetch('/api/chat/send', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          message: text,
          conversationId: currentSession?.conversationId,
        }),
      });

      if (sendRes.ok) {
        const sendData = await sendRes.json();

        let activeSess = currentSession;
        if (sendData.token && sendData.conversationId) {
          activeSess = {
            token: sendData.token,
            conversationId: sendData.conversationId,
            visitorId: sendData.visitorId || '',
          };
          setSession(activeSess);
          try {
            localStorage.setItem('oihe_chat_session', JSON.stringify(activeSess));
          } catch {}
        }

        // Ensure socket is connected
        if (activeSess) {
          connectWebSocket(activeSess);

          // Start polling fallback - if WS doesn't deliver a reply within 8s, fetch via API
          if (pollTimerRef.current) clearTimeout(pollTimerRef.current);
          pollTimerRef.current = setTimeout(() => {
            pollForReply(activeSess!);
          }, 8000);
        }
      } else {
        console.error('Send API error:', sendRes.status);
        setIsWaitingReply(false);
      }
    } catch (e) {
      console.error('Send error:', e);
      setIsWaitingReply(false);
    }
    setIsSending(false);
  };

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="w-[360px] h-[520px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col mb-4 border border-gray-200">
          {/* Header */}
          <div className="bg-[#0B1F4A] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M4.11323 23.3438C4.22761 22.8242 4.18395 22.2823 3.98789 21.7877C2.62347 18.9568 2.30276 15.7349 3.08234 12.6906C3.86192 9.64622 5.69169 6.97503 8.24881 5.14829C10.8059 3.32154 13.9261 2.45665 17.0588 2.70619C20.1914 2.95573 23.1353 4.30367 25.371 6.51219C27.6067 8.72072 28.9905 11.6479 29.2783 14.7773C29.5661 17.9066 28.7393 21.0371 26.944 23.6163C25.1486 26.1956 22.4999 28.0578 19.4653 28.8745C16.4307 29.6912 13.2051 29.4099 10.3577 28.0802C9.89039 27.9027 9.3826 27.8602 8.89227 27.9575L4.34125 29.2882C4.12171 29.3465 3.89093 29.3477 3.67079 29.2918C3.45066 29.2358 3.24846 29.1246 3.08337 28.9686C2.91829 28.8126 2.79579 28.617 2.72749 28.4004C2.65919 28.1838 2.64736 27.9533 2.69312 27.7308L4.11323 23.3438Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-[16px]">Have a question?</span>
            </div>
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F8F9FA] flex flex-col gap-3">
            {/* Welcome message */}
            <div className="flex justify-start">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F0C75E] flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">
                  O
                </div>
                <div className="flex flex-col max-w-[75%]">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 text-[14px] text-[#333] shadow-sm">
                    Enter your question below and a representative will get right back to you.
                  </div>
                </div>
              </div>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.direction === 'inbound' ? 'justify-end' : 'justify-start'}`}>
                {msg.direction === 'outbound' && (
                  <div className="w-8 h-8 rounded-full bg-[#F0C75E] flex-shrink-0 mr-2 flex items-center justify-center text-xs font-bold text-white">
                    O
                  </div>
                )}
                <div className="flex flex-col max-w-[75%]">
                  <div
                    className={`rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                      msg.direction === 'inbound'
                        ? 'bg-[#0B1F4A] text-white rounded-br-sm'
                        : 'bg-white text-[#333333] border border-gray-100 rounded-bl-sm'
                    }`}
                  >
                    {msg.body}
                  </div>
                  <span
                    className={`text-[11px] text-gray-400 mt-1 ${
                      msg.direction === 'inbound' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {formatTime(msg.dateAdded)}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isWaitingReply && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F0C75E] flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">
                    O
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
            <form onSubmit={handleSend} className="flex gap-2 items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#4D97E6] focus:bg-white transition-colors text-gray-800"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isSending}
                className="w-10 h-10 rounded-full bg-[#0B1F4A] text-white flex items-center justify-center disabled:opacity-40 transition-opacity cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
            <div className="text-center text-[11px] text-gray-400 mt-2">Powered by OIHE</div>
          </div>
        </div>
      )}

      {/* Floating Bubble */}
      {(!isOpen || isMinimized) && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="w-14 h-14 bg-[#0B1F4A] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path
              d="M4.11323 23.3438C4.22761 22.8242 4.18395 22.2823 3.98789 21.7877C2.62347 18.9568 2.30276 15.7349 3.08234 12.6906C3.86192 9.64622 5.69169 6.97503 8.24881 5.14829C10.8059 3.32154 13.9261 2.45665 17.0588 2.70619C20.1914 2.95573 23.1353 4.30367 25.371 6.51219C27.6067 8.72072 28.9905 11.6479 29.2783 14.7773C29.5661 17.9066 28.7393 21.0371 26.944 23.6163C25.1486 26.1956 22.4999 28.0578 19.4653 28.8745C16.4307 29.6912 13.2051 29.4099 10.3577 28.0802C9.89039 27.9027 9.3826 27.8602 8.89227 27.9575L4.34125 29.2882C4.12171 29.3465 3.89093 29.3477 3.67079 29.2918C3.45066 29.2358 3.24846 29.1246 3.08337 28.9686C2.91829 28.8126 2.79579 28.617 2.72749 28.4004C2.65919 28.1838 2.64736 27.9533 2.69312 27.7308L4.11323 23.3438Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
