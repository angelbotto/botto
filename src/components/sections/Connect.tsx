"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LoaderCircle, Sparkles, Send, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "improving" | "improved" | "sending" | "sent" | "error";

export function Connect() {
  const { locale, t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [idea, setIdea] = useState("");
  const [original, setOriginal] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onImprove = async () => {
    if (idea.trim().length < 20) return;
    setStatus("improving");
    setErrorMsg(null);
    setOriginal(idea);
    try {
      const res = await fetch("/api/improve-pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, locale }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = (await res.json()) as { improved: string };
      setIdea(data.improved);
      setStatus("improved");
    } catch (err) {
      console.error(err);
      setErrorMsg(t.connect.error);
      setStatus("error");
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !idea) return;
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, idea, original, locale }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setErrorMsg(t.connect.error);
      setStatus("error");
    }
  };

  return (
    <section id="connect" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionHeading tag="05 — Connect" title={t.connect.title} lede={t.connect.lede} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative rounded-xl border border-line bg-ink/60 backdrop-blur p-8 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-fuchsia-neon/20 via-transparent to-violet-neon/10 opacity-50 blur-2xl"
            />
            <form onSubmit={onSubmit} className="relative space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={t.connect.nameLabel}
                  value={name}
                  onChange={setName}
                  required
                />
                <Field
                  label={t.connect.emailLabel}
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                />
              </div>
              <Field
                label={t.connect.companyLabel}
                value={company}
                onChange={setCompany}
              />

              <div className="space-y-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-text-faint">
                  {t.connect.ideaLabel}
                </label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder={t.connect.placeholder}
                  rows={8}
                  required
                  className="w-full resize-y rounded-md border border-line bg-ink/80 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none focus:border-fuchsia-neon/60 focus:ring-2 focus:ring-fuchsia-neon/20 transition-colors"
                />
                <AnimatePresence>
                  {status === "improved" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-fuchsia-neon flex items-center gap-1.5"
                    >
                      <Sparkles className="h-3 w-3" />
                      {t.connect.improved}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onImprove}
                  disabled={status === "improving" || idea.trim().length < 20}
                >
                  {status === "improving" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      {t.connect.improving}
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      {t.connect.improve}
                    </>
                  )}
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "sending" || status === "sent" || !email || !idea}
                  className="ml-auto"
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      {t.connect.sending}
                    </>
                  ) : status === "sent" ? (
                    <>
                      <Check className="h-4 w-4" />
                      {locale === "es" ? "Enviado" : "Sent"}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.connect.send}
                    </>
                  )}
                </Button>
              </div>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-fuchsia-neon"
                  >
                    {t.connect.sent}
                  </motion.p>
                )}
                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-line bg-ink p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-md border border-line-strong grid place-items-center text-fuchsia-neon">
                  <Mail className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {t.connect.directTitle}
                </h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {t.connect.directBody}
              </p>
              <a
                href="mailto:hello@botto.is"
                className="inline-flex items-center gap-2 font-mono text-sm text-fuchsia-neon hover:underline underline-offset-4 break-all"
              >
                {t.connect.directCta}
                <span aria-hidden>→</span>
              </a>
              <div className="mt-2 font-mono text-xs text-text-faint">
                hello@botto.is
              </div>
            </div>

            <div className="rounded-xl border border-line bg-gradient-to-br from-fuchsia-neon/[0.04] to-violet-neon/[0.02] p-6 text-sm text-text-muted leading-relaxed">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fuchsia-neon mb-2">
                {locale === "es" ? "Cómo funciona" : "How it works"}
              </div>
              <ol className="space-y-2 list-decimal list-inside marker:text-fuchsia-neon/60">
                <li>
                  {locale === "es"
                    ? "Escribe tu idea, aunque sea en bruto."
                    : "Write your idea, however rough."}
                </li>
                <li>
                  {locale === "es"
                    ? "Nuestra IA la reescribe en formato pitch."
                    : "Our AI rewrites it in pitch format."}
                </li>
                <li>
                  {locale === "es"
                    ? "Editas, apruebas y enviamos a Angel + Stivens."
                    : "Edit, approve, and it lands with Angel + Stivens."}
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block space-y-2">
      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-text-faint">
        {label}
        {required && <span className="text-fuchsia-neon">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={cn(
          "w-full h-11 rounded-md border border-line bg-ink/80 px-4 text-sm text-text placeholder:text-text-faint outline-none transition-colors",
          "focus:border-fuchsia-neon/60 focus:ring-2 focus:ring-fuchsia-neon/20",
        )}
      />
    </label>
  );
}
