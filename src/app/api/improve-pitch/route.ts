import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const PROMPT_EN = `You are the in-house pitch editor for Botto Capital, an operator-led family office based in Latin America that backs and co-founds category-defining tech companies.

A founder just dropped a rough idea below. Reshape it into a tight pitch in their own voice using exactly this structure (in English), no preamble, no closing line:

PROBLEM — One sharp paragraph naming who hurts and how badly. Concrete, not abstract.
INSIGHT — The non-obvious observation that makes this the right time to build it.
WEDGE — What you build first, for whom, and why it pulls people in.
WHY BOTTO — One honest sentence on what specifically you want from Botto Capital (capital, co-founding, distribution, operator help).
ASK — What you want to happen next.

Rules:
- Keep their voice. Do not invent metrics, dates or partnerships they did not mention.
- If something is missing, leave a short "[gap: ...]" placeholder instead of inventing.
- Total length under 220 words.`;

const PROMPT_ES = `Eres el editor interno de pitches de Botto Capital, un family office liderado por operadores en Latinoamérica que respalda y co-funda compañías de base tecnológica.

Un fundador acaba de dejar una idea cruda abajo. Reescríbela como un pitch afilado en su misma voz, usando exactamente esta estructura (en español), sin preámbulo ni cierre:

PROBLEMA — Un párrafo cortante diciendo quién sufre y cuánto. Concreto, no abstracto.
INSIGHT — La observación no obvia que hace que sea el momento de construirlo.
WEDGE — Qué construyes primero, para quién, y por qué los atrae.
POR QUÉ BOTTO — Una frase honesta sobre qué quieres exactamente de Botto Capital (capital, co-fundación, distribución, ayuda operativa).
PETICIÓN — Qué quieres que pase a continuación.

Reglas:
- Mantén su voz. No inventes métricas, fechas ni alianzas que no haya mencionado.
- Si falta algo, deja un placeholder corto "[gap: ...]" en vez de inventar.
- Largo total bajo 220 palabras.`;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 500 },
    );
  }

  let body: { idea?: string; locale?: "en" | "es" };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const idea = (body.idea ?? "").trim();
  const locale = body.locale === "es" ? "es" : "en";
  if (idea.length < 20 || idea.length > 5000) {
    return NextResponse.json({ error: "idea length out of range" }, { status: 400 });
  }

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 800,
      system: locale === "es" ? PROMPT_ES : PROMPT_EN,
      messages: [{ role: "user", content: idea }],
    });

    const improved = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    if (!improved) {
      return NextResponse.json({ error: "Empty response" }, { status: 502 });
    }

    return NextResponse.json({ improved });
  } catch (err) {
    console.error("improve-pitch error", err);
    return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  }
}
