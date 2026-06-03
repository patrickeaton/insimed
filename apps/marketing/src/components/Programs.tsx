import { site } from "../content/site";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{site.whatWeDo.title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {site.whatWeDo.body}
      </p>
    </section>
  );
}

export function Programs() {
  return (
    <section id="programs" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Our Programs
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {site.programs.map((program) => (
            <article
              key={program.level}
              className="flex flex-col rounded-[var(--radius)] border border-border bg-background p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {program.level}
                </span>
                {program.status === "coming-soon" && (
                  <span className="rounded-full bg-accent/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground">
                    Coming Soon
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-xl font-bold">{program.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {program.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
