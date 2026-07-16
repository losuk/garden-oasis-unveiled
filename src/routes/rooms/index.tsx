import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { rooms, amenityIcons } from "../rooms";

export const Route = createFileRoute("/rooms/")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites" },
      { name: "description", content: "Five room types, each individually furnished and finished with quiet, unhurried detail." },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Rooms & Suites"
        title="Comfortable accommodations for every stay."
        intro="Five room types, each individually furnished and finished with quiet, unhurried detail."
        image="/images/rooms/delux-suite.jpg"
      />

      <section className="py-24 md:py-32 bg-[var(--color-parchment-100)]">
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
                    className="aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-103"
                  />
                </Link>
                <div className="max-w-md md:px-6">
                  <p className="eyebrow text-[var(--color-terracotta-500)]">{r.name.toUpperCase()}</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                    {r.blurb.split('.')[0] + '.'}
                  </h2>
                  
                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {r.size && (
                      <div className="flex items-center gap-2">
                        <span>{r.size}</span>
                      </div>
                    )}
                    {r.bedType && (
                      <>
                        <span className="w-px bg-border" />
                        <div className="flex items-center gap-2">
                          <span>{r.bedType}</span>
                        </div>
                      </>
                    )}
                    {r.view && (
                      <>
                        <span className="w-px bg-border" />
                        <div className="flex items-center gap-2">
                          <span>{r.view}</span>
                        </div>
                      </>
                    )}
                    {r.maxOccupancy && (
                      <>
                        <span className="w-px bg-border" />
                        <div className="flex items-center gap-2">
                          <span>Max {r.maxOccupancy} guests</span>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
                    {r.blurb}
                  </p>

                  {r.amenities && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {r.amenities.map((amenity, idx) => {
                        const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                        return (
                          <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                            {Icon && <Icon className="w-4 h-4" />}
                            <span className="text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="text-3xl font-display text-[var(--color-terracotta-500)]">{r.price}</p>
                      <p className="text-xs text-muted-foreground mt-1">Rates shown for selected dates. Taxes and fees calculated at checkout.</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to={`/rooms/${r.id}` as any} className="btn-outline">
                      View details
                    </Link>
                    <a
                      href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book now
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
