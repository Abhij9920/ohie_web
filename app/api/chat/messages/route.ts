import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const conversationId = url.searchParams.get('conversationId');
    const lastMessageId = url.searchParams.get('lastMessageId') || '';
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !conversationId) {
      return NextResponse.json({ error: 'Missing authorization or conversationId' }, { status: 400 });
    }

    const targetUrl = `https://services.leadconnectorhq.com/conversations/providers/live-chat/messages/search?conversationId=${conversationId}&locationId=El3PC7NTu7WhxD7cFm30&lastMessageId=${lastMessageId}&pageLimit=20`;

    const res = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'content-type': 'application/json',
        'origin': 'https://ozford.edu.au',
        'authorization': authHeader,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Messages API error:', res.status, text);
      return NextResponse.json({ error: `API returned ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Chat Messages Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch messages' }, { status: 500 });
  }
}
