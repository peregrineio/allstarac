import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: Add Supabase insert
    // TODO: Add Resend email notification
    // TODO: Add Meta Pixel event tracking

    console.log('Quote form submission:', data);

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
