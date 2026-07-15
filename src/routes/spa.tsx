import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

const galleryImages = [
  "/images/spa/spa-moment.jpg",
  "/images/spa/spa-moment2.jpg",
  "/images/spa/spa-moment3.jpg",
  "/images/spa/spa-moment4.jpg",
  "/images/spa/spa-moment5.jpg",
  "/images/spa/spa-moment6.jpg",
];

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: "Spa & Wellness — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "Botanical treatments drawn from Ugandan tradition, in three sunlit suites bordered by fern gardens.",
      },
      { property: "og:title", content: "Spa & Wellness — The Emin Pasha" },
      {
        property: "og:description",
        content: "Botanical spa treatments in a garden sanctuary in Kampala.",
      },
    ],
  }),
  component: SpaPage,
});

function SpaPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="SPA & WELLNESS"
        title="Spa & Wellness"
        intro="A perfect sanctuary to unwind and refresh your senses."
        image="/images/spa/spa-moment.jpg"
      />

      {/* THE SPA AT EMIN PASHA */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">THE SPA AT EMIN PASHA</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                Holistic therapies. Botanical ingredients.
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                Descend from the manicured garden of Kampala and step into a sanctuary of calm.
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                Our treatments embrace ancient Eastern techniques and local botanicals to bring you
                back to balance.
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                We use essential oils made from organic, local botanicals, to craft powerful,
                personal rituals to give you a true sense of renewal. In addition to our treatment
                rooms, you’ll find a sauna, a steam room and, for post-treatment relaxation,
                comfortable spaces in which to unwind.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/spa/spa-moment2.jpg"
                alt="The spa at Emin Pasha"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT ROOMS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden">
              <img
                src="/images/spa/spa-moment3.jpg"
                alt="Garden-side treatment room"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <p className="eyebrow">TREATMENT ROOMS</p>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                Our purpose-built spa is centred on wellness, with four luxuriously appointed
                treatment rooms, a relaxation lounge, and serene botanical gardens.
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                Each room opens out to private gardens allowing you to experience the calm in unison
                with nature.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm font-light text-muted-foreground">
                <p>Mon – Sun: 10AM – 7PM (Daily)</p>
                <p>Spa: +256 781 250 500 / 702 548 046</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT MENU */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="eyebrow text-accent">TREATMENT MENU</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Signature Spa Rituals
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
              A selection of spa experiences specially designed to refuel and restore balance.
            </p>
          </div>

          <div className="space-y-8">
            {/* Treatment 1 */}
            <div className="border-b border-border pb-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-display text-2xl text-forest">Deep Tissue Therapy</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>60 - 120 min</span>
                  <span>•</span>
                  <span>from $110</span>
                </div>
              </div>
              <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                Designed to release tension, focusing on releasing knotted muscles and connective
                tissue.
              </p>
              <a
                href="mailto:spa@eminpasha.com"
                className="mt-4 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
              >
                Book Now
              </a>
            </div>

            {/* Treatment 2 */}
            <div className="border-b border-border pb-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-display text-2xl text-forest">Aromatherapy Garden Ritual</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>75 - 105 min</span>
                  <span>•</span>
                  <span>from $145</span>
                </div>
              </div>
              <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                An immersive treatment to reconnect you to yourself, to nature, and to Kampala's
                garden soul.
              </p>
              <a
                href="mailto:spa@eminpasha.com"
                className="mt-4 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
              >
                Book Now
              </a>
            </div>

            {/* Treatment 3 */}
            <div className="pb-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-display text-2xl text-forest">Ayurvedic Balancing Treatment</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>60 - 90 min</span>
                  <span>•</span>
                  <span>from $125</span>
                </div>
              </div>
              <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                A holistic and harmonising treatment that addresses the body, mind, and spirit,
                designed to bring the body and soul back into balance.
              </p>
              <a
                href="mailto:spa@eminpasha.com"
                className="mt-4 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p className="eyebrow text-accent">THE SPA</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Our sanctuary
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`Spa space - ${i + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Booking Section */}
      <section className="py-24 md:py-32 bg-[var(--color-forest)]">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-[1.05] mb-4">
            Schedule Your Sanctuary Time
          </h2>
          <p className="text-lg font-light leading-relaxed text-cream/80 mb-10">
            We recommend booking treatments at least 48 hours in advance to guarantee your preferred time.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:spa@eminpasha.com"
              className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-background)] font-medium hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Enquire Now
            </a>
            <a
              href="tel:+256781250500"
              className="px-8 py-3 border border-cream text-cream font-medium hover:bg-cream hover:text-[var(--color-forest)] transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
