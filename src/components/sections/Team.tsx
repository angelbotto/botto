"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { partners } from "@/content/team";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.844l-5.36-7.013L4.6 22H1.343l8.06-9.21L1 2h7l4.846 6.404L18.244 2zm-1.2 18h1.838L7.04 4H5.07l11.974 16z" />
  </svg>
);

export function Team() {
  const { locale, t } = useLocale();
  return (
    <section id="team" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionHeading tag="04 — Team" title={t.team.title} lede={t.team.lede} />

        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.05}
              className="group relative overflow-hidden rounded-xl border border-line bg-ink p-8 lg:p-10 hover:border-fuchsia-neon/40 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div
                  className="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-neon/30 to-violet-neon/20 border border-line-strong grid place-items-center font-mono text-2xl font-semibold text-text"
                  aria-hidden
                >
                  {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-fuchsia-neon">
                    {p.role[locale]}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-text-muted leading-relaxed text-pretty">
                {p.bio[locale]}
              </p>

              <div className="mt-6 flex items-center gap-2">
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-line text-text-muted hover:text-fuchsia-neon hover:border-fuchsia-neon/40 transition-colors"
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
                    className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-line text-text-muted hover:text-fuchsia-neon hover:border-fuchsia-neon/40 transition-colors"
                    aria-label="X / Twitter"
                  >
                    <XIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
