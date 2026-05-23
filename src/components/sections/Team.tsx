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
  return (
    <section
      id="team"
      className="relative py-32 lg:py-44 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="04 · Partners"
          title={t.team.title}
          lede={t.team.lede}
          align="center"
        />

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
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
              className="group text-center space-y-6"
            >
              <div className="relative mx-auto h-28 w-28 rounded-full overflow-hidden border border-line-strong group-hover:border-fuchsia-neon/50 transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-neon/40 to-violet-neon/20 group-hover:from-fuchsia-neon/55 group-hover:to-violet-neon/30 transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]" />
                <div className="absolute inset-0 grid place-items-center font-mono text-3xl font-medium text-white">
                  {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon">
                  {p.role[locale]}
                </p>
              </div>
              <p className="text-text-muted leading-relaxed text-pretty text-[15px] max-w-md mx-auto">
                {p.bio[locale]}
              </p>
              <div className="flex items-center justify-center gap-2">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
