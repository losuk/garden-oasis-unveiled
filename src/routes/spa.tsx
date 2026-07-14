import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

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

const galleryImages = [
  "/images/spa/spa-moment.jpg",
  "/images/spa/spa-moment.jpg",
  "/images/spa/spa-moment.jpg",
  "/images/spa/spa-moment.jpg",
];

function SpaPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="SPA & WELLNESS"
        title="A stillness the city forgets"
        intro="Botanical treatments drawn from Ugandan tradition, in three sunlit suites bordered by fern gardens."
        image="/images/spa/spa-moment.jpg"
      />

      {/* Concept Story */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-1 lg:order-1 overflow-hidden rounded-xl">
              <img
                src="/images/spa/spa-moment.jpg"
                alt="Treatment room at Emin Pasha Spa"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                Treatments drawn from Ugandan tradition
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                Three sunlit treatment suites, bordered by fern gardens, offer a real retreat from the city just outside the gate. Each treatment draws on botanical, Ugandan-rooted tradition alongside familiar international techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="eyebrow text-accent mb-6">FACILITIES</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              For a complete escape
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {["Sauna", "Steam room", "Three private treatment suites"].map((item, i) => (
              <div key={i} className="p-8 border border-border rounded-xl bg-background">
                <h3 className="font-display text-2xl text-forest">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Menu */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="eyebrow text-accent mb-6">TREATMENTS</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              A menu tailored to you
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground italic">
              * Exact treatment names, durations, and prices pending confirmation from hotel management
            </p>
          </div>
          <div className="border border-border rounded-xl overflow-hidden bg-background">
            <div className="grid grid-cols-3 p-4 bg-secondary/20 font-display text-foreground">
              <div>Treatment</div>
              <div>Duration</div>
              <div>Price</div>
            </div>
            <div className="p-6 border-t border-border">
              <div className="grid grid-cols-3 items-center">
                <div className="text-muted-foreground">TBD</div>
                <div className="text-muted-foreground">50 minutes</div>
                <div className="text-accent font-semibold">~180 USD</div>
              </div>
            </div>
            <div className="p-6 border-t border-border">
              <div className="grid grid-cols-3 items-center">
                <div className="text-muted-foreground">TBD</div>
                <div className="text-muted-foreground">1 hour 20 minutes</div>
                <div className="text-accent font-semibold">~250 USD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Guest Access Callout */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12 text-center">
          <div className="border border-border rounded-xl p-10 bg-secondary/20">
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Not staying with us? You're still welcome.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
              Spa treatments are available to non-resident guests as well — book ahead to guarantee your slot.
            </p>
            <p className="mt-6 text-sm text-muted-foreground italic">
              * Non-guest access policy pending confirmation from hotel management
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Inside the spa
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`Inside the spa - ${i + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="border border-border rounded-xl p-8 bg-secondary/20">
            <p className="eyebrow text-accent mb-6">BOOK A TREATMENT</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05] mb-10">
              Ready to book your escape?
            </h2>
            <a href="mailto:spa@eminpasha.com" className="btn-primary">
              Book a treatment
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Or contact us directly at +256 312 264 712
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-24 md:py-32 bg-forest">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-10">
            Book your escape
          </h2>
          <a href="mailto:spa@eminpasha.com" className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest">
            Book a treatment
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
