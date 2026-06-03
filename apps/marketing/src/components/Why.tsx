import { site } from "../content/site";

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {site.why.title}
      </h2>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {site.why.points.map((point, i) => (
          <div key={point.title}>
            <div className="font-display text-3xl font-bold text-accent">
              0{i + 1}
            </div>
            <h3 className="mt-3 text-lg font-bold">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="bg-contrast py-24 text-contrast-foreground">
      <figure className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="font-display text-2xl font-medium leading-snug md:text-3xl">
          “{site.testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 text-sm uppercase tracking-widest text-accent">
          {site.testimonial.attribution}
        </figcaption>
      </figure>
    </section>
  );
}
