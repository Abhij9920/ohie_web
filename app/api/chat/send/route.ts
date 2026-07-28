import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('authorization');

    // Build the payload - first message has no conversationId, subsequent ones do
    const payload: Record<string, string> = {
      locationId: 'El3PC7NTu7WhxD7cFm30',
      message: body.message,
      type: 'Live_Chat',
      chatWidgetId: '6a33b9e9fca726332c0ed2ed',
    };

    if (body.conversationId) {
      payload.conversationId = body.conversationId;
    }

    const headers: Record<string, string> = {
      'accept': '*/*',
      'content-type': 'application/json',
      'origin': 'https://ozford.edu.au',
    };

    // Auth token is only available after the first message
    if (authHeader) {
      headers['authorization'] = authHeader;
    }

    const res = await fetch(
      'https://services.leadconnectorhq.com/conversations/providers/live-chat/messages',
      {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('Send API error:', res.status, text);
      return NextResponse.json({ error: `API returned ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Chat Send Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send message' }, { status: 500 });
  }
}
