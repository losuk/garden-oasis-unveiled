import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { rooms } from "../rooms";

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
                    <div className="mt-6 flex flex-wrap gap-2">
                      {r.amenities.map((amenity, idx) => (
                        <span key={idx} className="px-3 py-1 border border-border rounded text-xs text-muted-foreground bg-[var(--color-parchment-200)]">
                          {amenity}
                        </span>
                      ))}
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

      <section className="py-24 md:py-32 bg-[var(--color-parchment-200)]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-12">Good to know</h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <p className="mb-4">Children of all ages are welcome. Children aged 13 and above are charged as adults.</p>
              <p className="mb-4">Cribs and extra beds are available on request, subject to availability, and charged separately.</p>
            </div>
            <div>
              <p className="mb-4">A valid photo ID and credit card are required at check-in.</p>
              <p className="mb-4">Cancellation terms vary by rate plan — full details are shown before you confirm your booking.</p>
              <p>Check-in / check-out times: [CONFIRM WITH HOTEL]</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
