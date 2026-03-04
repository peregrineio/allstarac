import { NextRequest, NextResponse } from "next/server";

interface PhoneLeadPayload {
  phone: string;
  source_url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

function normalizePhone(phone: string): string | null {
  // Strip all non-digits
  const digits = phone.replace(/\D/g, "");

  // Validate and normalize
  if (digits.length === 10) {
    return `+1${digits}`;
  } else if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  return null; // Invalid
}

function formatPhoneDisplay(normalizedPhone: string): string {
  // Extract the 10 digits (skip +1)
  const digits = normalizedPhone.replace(/\D/g, "").slice(-10);
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: PhoneLeadPayload = await request.json();

    // Normalize phone
    const normalizedPhone = normalizePhone(body.phone);
    if (!normalizedPhone) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number" },
        { status: 400 }
      );
    }

    const displayPhone = formatPhoneDisplay(normalizedPhone);

    const leadData = {
      phone: normalizedPhone,
      source_url: body.source_url || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      utm_content: body.utm_content || null,
      status: "new",
      created_at: new Date().toISOString(),
    };

    // Try Supabase insert
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { error: dbError } = await supabase
          .from("phone_leads")
          .insert([leadData]);

        if (dbError) {
          console.error("Supabase insert error:", dbError);
        } else {
          console.log("Phone lead saved to Supabase:", displayPhone);
        }
      } catch (supabaseError) {
        console.error("Supabase error:", supabaseError);
      }
    } else {
      console.log("Supabase not configured. Phone lead data:", leadData);
    }

    // Try Resend email
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);

        const timestamp = new Date().toLocaleString("en-US", {
          timeZone: "America/Chicago",
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 500px; margin: 0 auto; padding: 0; }
    .header { background: linear-gradient(135deg, #E8630A 0%, #D4580A 100%); color: white; padding: 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; }
    .content { padding: 24px; background: #fff; }
    .phone-box { background: #f8f9fa; border: 2px solid #0B2545; border-radius: 12px; padding: 20px; text-align: center; margin: 16px 0; }
    .phone-number { font-size: 28px; font-weight: bold; color: #0B2545; letter-spacing: 1px; }
    .phone-link { display: inline-block; margin-top: 12px; background: #E8630A; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; }
    .details { margin: 20px 0; }
    .detail-row { display: flex; padding: 8px 0; border-bottom: 1px solid #eee; }
    .detail-label { font-weight: 600; color: #666; width: 100px; }
    .detail-value { color: #333; }
    .callout { background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0; }
    .callout-text { margin: 0; font-weight: 600; color: #92400E; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>NEW LEAD - Callback Requested</h1>
    </div>
    <div class="content">
      <div class="phone-box">
        <div class="phone-number">${displayPhone}</div>
        <a href="tel:${normalizedPhone}" class="phone-link">Call Now</a>
      </div>

      <div class="details">
        <div class="detail-row">
          <span class="detail-label">Source:</span>
          <span class="detail-value">${body.source_url || "Direct"}</span>
        </div>
        ${body.utm_campaign ? `
        <div class="detail-row">
          <span class="detail-label">Campaign:</span>
          <span class="detail-value">${body.utm_campaign}</span>
        </div>
        ` : ""}
        ${body.utm_source ? `
        <div class="detail-row">
          <span class="detail-label">Source:</span>
          <span class="detail-value">${body.utm_source}${body.utm_medium ? ` / ${body.utm_medium}` : ""}</span>
        </div>
        ` : ""}
        <div class="detail-row">
          <span class="detail-label">Time:</span>
          <span class="detail-value">${timestamp} CST</span>
        </div>
      </div>

      <div class="callout">
        <p class="callout-text">Call them ASAP — they're expecting to hear from you!</p>
      </div>
    </div>
  </div>
</body>
</html>
        `;

        const { error: emailError } = await resend.emails.send({
          from: "Allstar Leads <leads@allstaractx.com>",
          to: "allstar.ac.heat@gmail.com",
          subject: `🔥 NEW LEAD — ${displayPhone} wants a callback`,
          html: htmlBody,
        });

        if (emailError) {
          console.error("Resend email error:", emailError);
        } else {
          console.log("Lead notification email sent for:", displayPhone);
        }
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    } else {
      console.log("Resend not configured. Would send lead notification for:", displayPhone);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Phone lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
