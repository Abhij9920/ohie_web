import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://services.leadconnectorhq.com/chat-widget/public/open/El3PC7NTu7WhxD7cFm30?chatType=liveChat&widgetId=6a33b9e9fca726332c0ed2ed',
      {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'content-type': 'application/json',
          'origin': 'https://ozford.edu.au',
          'location-id': 'El3PC7NTu7WhxD7cFm30',
          'source': 'custom-code',
        },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('Open API error:', res.status, text);
      return NextResponse.json({ error: `API returned ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Chat Open Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to open chat' }, { status: 500 });
  }
}
