import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/pool")({
  head: () => ({
    meta: [
      { title: "Swimming Pool — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "An outdoor pool surrounded by tropical gardens, open daily from morning until evening.",
      },
    ],
  }),
  component: PoolPage,
});

const galleryImages = [
  "/images/swimming/swimming.jpg",
  "/images/swimming/swimming-2.jpg",
  "/images/swimming/swimming-3.jpg",
  "/images/swimming/swimming-4.jpg",
  "/images/swimming/swimming-5.jpg",
  "/images/swimming/swimming-6.jpg",
];

function PoolPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="SWIMMING POOL"
        title="A quiet blue, framed by green"
        intro="An outdoor pool surrounded by tropical gardens, open daily from morning until evening."
        image="/images/swimming/swimming.jpg"
      />

      {/* Description Block */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-1 lg:order-1 overflow-hidden rounded-xl">
              <img
                src="/images/swimming/swimming-2.jpg"
                alt="Outdoor pool at Emin Pasha Hotel"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                Ten minutes from the city, a world away from it
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                Framed by the same tropical gardens that surround the rest of the property, the pool is one of the quietest spots at Emin Pasha — sun loungers and umbrellas around the water, a poolside bar close at hand, and nothing but birdsong for company.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Gallery Strip */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              By the water
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`By the pool - ${i + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-24 md:py-32 bg-forest">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-10">
            Reserve your stay
          </h2>
          <a href="mailto:reservations@eminpasha.com" className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest">
            Check availability
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
