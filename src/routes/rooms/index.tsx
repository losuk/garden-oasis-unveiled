import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { rooms } from "../rooms";

export const Route = createFileRoute("/rooms/")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites" },
      { name: "description", content: "Our comfortable rooms and suites for your stay." },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Rooms & Suites"
        title="Our Accommodations"
        intro="Choose from our selection of comfortable rooms and suites."
        image="/images/rooms/delux-suite.jpg"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid gap-x-14 gap-y-28">
            {rooms.map((r, i) => (
              <article
                key={r.id}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <Link to={`/rooms/${r.id}` as any} className="overflow-hidden block">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                  />
                </Link>
                <div className="max-w-md md:px-6">
                  <p className="eyebrow">{r.price}</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                    {r.name}
                  </h2>
                  <div className="mt-6 flex gap-6 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                    <span>{r.size}</span>
                    <span className="w-px bg-border" />
                    <span>{r.view}</span>
                  </div>
                  <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
                    {r.blurb}
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to={`/rooms/${r.id}` as any} className="btn-outline">
                      View Room
                    </Link>
                    <a
                      href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Reserve
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
