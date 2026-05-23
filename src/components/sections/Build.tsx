"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { LoaderCircle, Sparkles, Send, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "improving" | "improved" | "sending" | "sent" | "error";

export function Build() {
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
      setErrorMsg(t.build.error);
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
      setErrorMsg(t.build.error);
      setStatus("error");
    }
  };

  return (
    <section id="build" className="relative py-32 lg:py-48 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag={`05 · ${t.build.eyebrow}`}
          title={t.build.title}
          lede={t.build.lede}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] max-w-6xl mx-auto">
          <div className="relative rounded-xl border border-line bg-ink-2 p-8 lg:p-10">
            <form onSubmit={onSubmit} className="relative space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={t.build.nameLabel}
                  value={name}
                  onChange={setName}
                  required
                />
                <Field
                  label={t.build.emailLabel}
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                />
              </div>
              <Field
                label={t.build.companyLabel}
                value={company}
                onChange={setCompany}
              />

              <div className="space-y-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.22em] text-text-faint">
                  {t.build.ideaLabel}
                </label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder={t.build.placeholder}
                  rows={9}
                  required
                  className="w-full resize-y rounded-md border border-line bg-black/40 px-4 py-3 text-[15px] text-text placeholder:text-text-faint outline-none focus:border-fuchsia-neon/60 focus:ring-2 focus:ring-fuchsia-neon/20 transition-colors leading-relaxed"
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
                      {t.build.improved}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onImprove}
                  disabled={status === "improving" || idea.trim().length < 20}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium text-text hover:border-fuchsia-neon/60 hover:text-fuchsia-neon hover:bg-fuchsia-neon/[0.06] transition-colors disabled:opacity-40 disabled:pointer-events-none"
                >
                  {status === "improving" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      {t.build.improving}
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      {t.build.improve}
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent" || !email || !idea}
                  className="ml-auto inline-flex h-11 items-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-black transition-all hover:bg-fuchsia-neon hover:text-white hover:scale-[1.02] disabled:opacity-40 disabled:pointer-events-none"
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      {t.build.sending}
                    </>
                  ) : status === "sent" ? (
                    <>
                      <Check className="h-4 w-4" />
                      {locale === "es" ? "Enviado" : "Sent"}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.build.send}
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-fuchsia-neon"
                  >
                    {t.build.sent}
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
            <div className="rounded-xl border border-line bg-ink-2 p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon mb-4">
                {t.build.howItWorks}
              </div>
              <ol className="space-y-3 text-[15px] text-text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-mono text-fuchsia-neon shrink-0">01</span>
                  <span>{t.build.step1}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-fuchsia-neon shrink-0">02</span>
                  <span>{t.build.step2}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-fuchsia-neon shrink-0">03</span>
                  <span>{t.build.step3}</span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-line bg-ink-2 p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-md border border-line-strong grid place-items-center text-fuchsia-neon">
                  <Mail className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-medium tracking-tight">
                  {t.build.directTitle}
                </h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {t.build.directBody}
              </p>
              <a
                href="mailto:angel@botto.is"
                className="inline-flex items-center gap-2 font-mono text-sm text-fuchsia-neon hover:underline underline-offset-4"
              >
                {t.build.directCta}
                <span aria-hidden>→</span>
              </a>
              <div className="mt-2 font-mono text-xs text-text-faint">
                angel@botto.is
              </div>
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
      <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-text-faint">
        {label}
        {required && <span className="text-fuchsia-neon"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={cn(
          "w-full h-11 rounded-md border border-line bg-black/40 px-4 text-[15px] text-text placeholder:text-text-faint outline-none transition-colors",
          "focus:border-fuchsia-neon/60 focus:ring-2 focus:ring-fuchsia-neon/20",
        )}
      />
    </label>
  );
}
