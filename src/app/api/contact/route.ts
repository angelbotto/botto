import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipients = (process.env.CONTACT_RECIPIENTS ?? "hello@botto.is")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const fromAddress = process.env.CONTACT_FROM ?? "Botto Capital <pitch@botto.is>";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY not configured" },
      { status: 500 },
    );
  }

  let body: {
    name?: string;
    email?: string;
    company?: string;
    idea?: string;
    original?: string | null;
    locale?: "en" | "es";
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const company = (body.company ?? "").trim().slice(0, 200);
  const idea = (body.idea ?? "").trim().slice(0, 8000);
  const original = body.original?.trim().slice(0, 8000) ?? null;
  const locale = body.locale === "es" ? "es" : "en";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !idea) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const subject = `[Botto Pitch] ${name || email}${company ? ` · ${company}` : ""}`;

  const html = `
<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,sans-serif;background:#0A0014;color:#E5E7EB;padding:24px">
  <div style="max-width:640px;margin:0 auto">
    <h2 style="color:#D946EF;margin:0 0 16px;font-weight:600">New pitch · ${locale.toUpperCase()}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;color:#94A3B8">
      <tr><td style="padding:4px 0;width:120px">From</td><td style="color:#E5E7EB">${escape(name) || "—"} &lt;${escape(email)}&gt;</td></tr>
      ${company ? `<tr><td style="padding:4px 0">Company</td><td style="color:#E5E7EB">${escape(company)}</td></tr>` : ""}
    </table>

    <h3 style="color:#A855F7;margin:24px 0 8px;font-size:13px;letter-spacing:0.15em;text-transform:uppercase">Pitch (submitted)</h3>
    <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;background:#120A22;padding:16px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#E5E7EB;font-size:13px;line-height:1.6">${escape(idea)}</pre>

    ${
      original && original !== idea
        ? `<h3 style="color:#A855F7;margin:24px 0 8px;font-size:13px;letter-spacing:0.15em;text-transform:uppercase">Original (before AI)</h3>
           <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;background:#120A22;padding:16px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#94A3B8;font-size:12px;line-height:1.6">${escape(original)}</pre>`
        : ""
    }

    <p style="margin-top:24px;font-size:12px;color:#64748B">Sent via botto.is contact form.</p>
  </div>
</body></html>`;

  const text = [
    `New pitch (${locale})`,
    ``,
    `From: ${name || "—"} <${email}>`,
    company ? `Company: ${company}` : null,
    ``,
    `--- PITCH ---`,
    idea,
    ``,
    original && original !== idea ? `--- ORIGINAL ---\n${original}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      replyTo: email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("resend error", error);
      return NextResponse.json({ error: "Email send failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact error", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 502 });
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
