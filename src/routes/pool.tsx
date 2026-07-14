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
  "/images/gallery/gallery-image.jpg",
  "/images/gallery/gallery-image.jpg",
  "/images/gallery/gallery-image.jpg",
  "/images/gallery/gallery-image.jpg",
];

function PoolPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="SWIMMING POOL"
        title="A quiet blue, framed by green"
        intro="An outdoor pool surrounded by tropical gardens, open daily from morning until evening."
        image="/images/gallery/gallery-image.jpg"
      />

      {/* Description Block */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-1 lg:order-1 overflow-hidden rounded-xl">
              <img
                src="/images/gallery/gallery-image.jpg"
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

      {/* Hours & Amenities */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="eyebrow text-accent mb-6">HOURS & AMENITIES</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Everything you need to relax
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-border rounded-xl p-8 bg-background">
              <h3 className="font-display text-2xl text-forest mb-6">Hours</h3>
              <p className="text-lg text-muted-foreground">Open daily, 7:00 AM – 7:00 PM</p>
            </div>
            <div className="border border-border rounded-xl p-8 bg-background">
              <h3 className="font-display text-2xl text-forest mb-6">Amenities</h3>
              <ul className="text-lg text-muted-foreground space-y-3">
                {["Sun loungers", "Pool umbrellas", "Poolside bar service"].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Golf Tie-in */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="border border-border rounded-xl p-10 bg-background">
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05] mb-6">
              Nine holes, then a swim
            </h2>
            <p className="text-lg text-muted-foreground">
              The pool sits right next to the adjoining golf course — a round in the morning, a swim in the afternoon.
            </p>
            <p className="mt-6 text-sm text-muted-foreground italic">
              * Golf access process pending confirmation from hotel management
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="eyebrow text-accent mb-6">GOOD TO KNOW</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              A few things to note
            </h2>
          </div>
          <div className="border border-border rounded-xl p-8 bg-background">
            <ul className="text-lg text-muted-foreground space-y-4">
              <li>• [CONFIRM] Children's pool policy and supervision requirements</li>
              <li>• [CONFIRM] Whether pool towels are provided</li>
              <li>• [CONFIRM] Whether the pool is heated</li>
            </ul>
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
