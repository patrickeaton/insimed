import { site } from "../content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-contrast text-contrast-foreground"
    >
      {/* Subtle radial "space" glow built from theme tokens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 20%, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          {site.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          {site.hero.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-contrast-foreground/80">
          {site.hero.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={site.cta.href}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            {site.cta.label}
          </a>
          <a
            href="#programs"
            className="rounded-full border border-white/25 px-6 py-3 font-semibold text-contrast-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
