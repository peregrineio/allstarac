import { NextResponse } from "next/server";
import type { ChatTranscriptPayload, ChatMessage } from "@/lib/chat/types";

// TODO: Uncomment and configure when Resend is ready
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

function formatTranscriptHtml(
  payload: ChatTranscriptPayload
): string {
  const startDate = new Date(payload.startedAt);
  const endDate =
    payload.messages.length > 0
      ? new Date(payload.messages[payload.messages.length - 1].timestamp)
      : startDate;

  const duration = Math.round(
    (endDate.getTime() - startDate.getTime()) / 1000 / 60
  );
  const durationText = duration < 1 ? "Less than 1 minute" : `${duration} minute(s)`;

  const formatTime = (date: Date | string) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Chicago", // CST
    });
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Chicago",
    });
  };

  const messagesHtml = payload.messages
    .map((msg: ChatMessage) => {
      const isBot = msg.role === "bot";
      const bgColor = isBot ? "#f3f4f6" : "#0B2545";
      const textColor = isBot ? "#374151" : "#ffffff";
      const label = isBot ? "🤖 Bot" : "👤 Visitor";

      return `
        <div style="margin-bottom: 12px;">
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">
            ${label} • ${formatTime(msg.timestamp)}
          </div>
          <div style="background-color: ${bgColor}; color: ${textColor}; padding: 12px 16px; border-radius: 8px; font-size: 14px; line-height: 1.5;">
            ${msg.text.replace(/\n/g, "<br>")}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Chat Transcript</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #0B2545, #0D2F5E); color: white; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">💬 Website Chat Transcript</h1>
        <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">Allstar AC & Heating</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Date:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${formatDate(startDate)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Time:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${formatTime(startDate)} CST</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Duration:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${durationText}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Messages:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${payload.messages.length}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Page:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${payload.page}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Device:</strong></td>
            <td style="padding: 8px 0;">${payload.device === "mobile" ? "📱 Mobile" : "💻 Desktop"}</td>
          </tr>
        </table>

        <h2 style="font-size: 18px; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 2px solid #E8630A;">Conversation</h2>

        ${messagesHtml}
      </div>

      <div style="text-align: center; margin-top: 24px; font-size: 12px; color: #9ca3af;">
        <p>This transcript was automatically generated from the website chatbot.</p>
        <p>© ${new Date().getFullYear()} Allstar AC & Heating</p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const payload: ChatTranscriptPayload = await request.json();

    // Validate payload
    if (!payload.messages || payload.messages.length === 0) {
      return NextResponse.json(
        { error: "No messages in transcript" },
        { status: 400 }
      );
    }

    // Get first user message for subject line preview
    const firstUserMessage = payload.messages.find((m) => m.role === "user");
    const preview = firstUserMessage
      ? firstUserMessage.text.slice(0, 50) + (firstUserMessage.text.length > 50 ? "..." : "")
      : "New conversation";

    const dateStr = new Date(payload.startedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "America/Chicago",
    });

    const subject = `💬 Website Chat — ${preview} — ${dateStr}`;
    const html = formatTranscriptHtml(payload);

    // Check if Resend is configured
    if (process.env.RESEND_API_KEY) {
      // TODO: Uncomment when Resend is configured
      // const { data, error } = await resend.emails.send({
      //   from: 'noreply@allstaractx.com',
      //   to: 'allstar.ac.heat@gmail.com',
      //   subject,
      //   html,
      // });
      //
      // if (error) {
      //   console.error('Failed to send transcript email:', error);
      //   return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      // }
      //
      // return NextResponse.json({ success: true, messageId: data?.id });

      // Placeholder until Resend is configured
      console.log("📧 [Resend Ready] Would send email:", {
        to: "allstar.ac.heat@gmail.com",
        subject,
      });
    } else {
      // Log transcript to console when Resend is not configured
      console.log("\n========================================");
      console.log("📧 CHAT TRANSCRIPT (Resend not configured)");
      console.log("========================================");
      console.log("Subject:", subject);
      console.log("Page:", payload.page);
      console.log("Device:", payload.device);
      console.log("Started:", payload.startedAt);
      console.log("Messages:", payload.messages.length);
      console.log("----------------------------------------");
      payload.messages.forEach((msg, i) => {
        const role = msg.role === "bot" ? "🤖 Bot" : "👤 User";
        console.log(`${i + 1}. [${role}]: ${msg.text.slice(0, 100)}${msg.text.length > 100 ? "..." : ""}`);
      });
      console.log("========================================\n");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chat transcript error:", error);
    return NextResponse.json(
      { error: "Failed to process transcript" },
      { status: 500 }
    );
  }
}
