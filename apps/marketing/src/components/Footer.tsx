import { site } from "../content/site";

export function CTA() {
  return (
    <section id="register" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        Ready to put your students in the arena?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        Register your team or reach out to learn how InSimEd competitions work.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={site.cta.href}
          className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {site.cta.label}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <span className="font-display text-base font-bold text-foreground">
          {site.name}
        </span>
        <span>{site.footer.rights}</span>
      </div>
    </footer>
  );
}
