import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  serviceType: z.string().min(1),
  urgency: z.enum(["emergency", "this-week", "planning"]),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = formSchema.parse(body);

    const estimateRequest = {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service_type: data.serviceType,
      urgency: data.urgency,
      notes: data.notes || null,
      source: "get-started",
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
          .from("estimate_requests")
          .insert([estimateRequest]);

        if (dbError) {
          console.error("Supabase insert error:", dbError);
        } else {
          console.log("Estimate request saved to Supabase");
        }
      } catch (supabaseError) {
        console.error("Supabase error:", supabaseError);
      }
    } else {
      console.log("Supabase not configured. Estimate request data:", estimateRequest);
    }

    // Try Resend email
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);

        const urgencyEmoji =
          data.urgency === "emergency"
            ? "🚨"
            : data.urgency === "this-week"
            ? "📅"
            : "🗓️";

        const urgencyLabel =
          data.urgency === "emergency"
            ? "EMERGENCY"
            : data.urgency === "this-week"
            ? "This Week"
            : "Planning Ahead";

        const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0B2545; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #0B2545; }
    .value { margin-top: 4px; }
    .urgent { background: #fee2e2; border-left: 4px solid #ef4444; padding: 10px; margin: 10px 0; }
    .cta { background: #E8630A; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; display: inline-block; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0;">🔥 New Estimate Request</h1>
      <p style="margin:10px 0 0;">${data.name} — ${urgencyEmoji} ${urgencyLabel}</p>
    </div>
    <div class="content">
      ${data.urgency === "emergency" ? '<div class="urgent"><strong>🚨 EMERGENCY REQUEST</strong> — AC/Heat is down NOW!</div>' : ""}

      <div class="field">
        <div class="label">Name</div>
        <div class="value">${data.name}</div>
      </div>

      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>

      ${data.email ? `
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ` : ""}

      <div class="field">
        <div class="label">Service Needed</div>
        <div class="value">${data.serviceType}</div>
      </div>

      <div class="field">
        <div class="label">Urgency</div>
        <div class="value">${urgencyEmoji} ${urgencyLabel}</div>
      </div>

      ${data.notes ? `
      <div class="field">
        <div class="label">Additional Notes</div>
        <div class="value">${data.notes}</div>
      </div>
      ` : ""}

      <div class="field">
        <div class="label">Source</div>
        <div class="value">Get Started Page (Paid Traffic)</div>
      </div>

      <div class="field">
        <div class="label">Submitted</div>
        <div class="value">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}</div>
      </div>

      <a href="tel:${data.phone}" class="cta">📞 Call ${data.name} Now</a>
    </div>
  </div>
</body>
</html>
        `;

        const { error: emailError } = await resend.emails.send({
          from: "Allstar AC Website <notifications@allstaracheat.com>",
          to: "allstar.ac.heat@gmail.com",
          subject: `🔥 New Estimate Request — ${data.name} — ${urgencyLabel}`,
          html: htmlBody,
        });

        if (emailError) {
          console.error("Resend email error:", emailError);
        } else {
          console.log("Email notification sent via Resend");
        }
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    } else {
      console.log("Resend not configured. Would send email for:", data.name, data.phone);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
