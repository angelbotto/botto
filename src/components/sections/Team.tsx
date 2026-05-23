"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { partners } from "@/content/team";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.844l-5.36-7.013L4.6 22H1.343l8.06-9.21L1 2h7l4.846 6.404L18.244 2z" />
  </svg>
);

export function Team() {
  const { locale, t } = useLocale();
  const reduce = useReducedMotion();
  // Grid columns scale with partner count (2 today, ready for 3-4 in the future)
  const cols =
    partners.length >= 4
      ? "lg:grid-cols-4"
      : partners.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2";

  return (
    <section
      id="team"
      className="relative py-32 lg:py-40 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="Partners"
          title={t.team.title}
          lede={t.team.lede}
          icon={<TeamIcon />}
        />

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-px bg-line border border-line rounded-xl overflow-hidden max-w-6xl mx-auto`}>
          {partners.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={reduce ? false : { y: 14 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0, margin: "200px 0px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.21, 1, 0.32, 1],
              }}
              className="group bg-ink p-8 lg:p-10 hover:bg-white/[0.015] transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)] flex flex-col"
            >
              <div className="space-y-1 mb-6">
                <h3 className="text-xl lg:text-[1.4rem] font-medium tracking-tight leading-snug">
                  {p.name}
                </h3>
                <p className="text-[15px] text-text-muted">
                  {p.role[locale]}
                </p>
              </div>

              <p className="text-[15px] text-text-muted leading-relaxed text-pretty flex-1">
                {p.bio[locale]}
              </p>

              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-line/60">
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-line text-text-muted hover:text-fuchsia-neon hover:border-fuchsia-neon/40 transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                )}
                {p.twitter && (
                  <a
                    href={p.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-line text-text-muted hover:text-fuchsia-neon hover:border-fuchsia-neon/40 transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
                    aria-label="X / Twitter"
                  >
                    <XIcon className="h-4 w-4" />
                  </a>
                )}
                {!p.linkedin && !p.twitter && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                    Soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="4" cy="4" r="2" />
      <path d="M1 10 Q 4 7 7 10" />
      <circle cx="9" cy="5" r="1.5" />
      <path d="M7 10.5 Q 9 8.5 11 10.5" />
    </svg>
  );
}
