import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [{ title: "Equatoria Restaurant — Dining" }, { name: "description", content: "European, Mediterranean, and African cuisine, cooked in the open, using Uganda's own ingredients." }],
  }),
  component: DiningPage,
});

const galleryImages = [
  "/images/dining/dining-moment.jpg",
  "/images/dining/dining-moment.jpg",
  "/images/dining/dining-moment.jpg",
  "/images/dining/dining-moment.jpg",
];

function DiningPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="DINING"
        title="A journey through Emin Pasha's own travels, one course at a time"
        image="/images/dining/dining-moment.jpg"
      />

      {/* Concept Story */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow text-accent mb-6">THE CONCEPT</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                A menu that travels the way he did
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                Equatoria takes its name and its story from Mehmed Emin Pasha himself — a journey that carried him from Poland through the Ottoman Empire, the Middle East, and Cairo, before he became governor of Sudan's Equatoria province. The menu follows the same route, one course at a time, fusing European, Mediterranean, and African cuisine — prepared by Ugandan chefs, using ingredients sourced close to home.
              </p>
              <div className="mt-10 p-6 border border-border rounded-xl bg-background">
                <p className="eyebrow text-accent mb-4">A DETAIL WORTH KNOWING</p>
                <p className="text-muted-foreground">
                  The starter menu includes a pierogi — a direct nod to Emin Pasha's Polish roots, and one of the dishes guests ask for by name.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-xl">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Equatoria Restaurant dining room"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Kitchens Feature */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="overflow-hidden rounded-xl mb-10">
            <img
              src="/images/dining/dining-moment.jpg"
              alt="Open studio kitchens at Equatoria Restaurant"
              className="w-full object-cover aspect-[16/9]"
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Cooked where you can see it
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
              The dining room is built around three open studio kitchens — you're not just served a meal here, you watch it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Hours and Reservations */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05] mb-10">
                Hours & reservations
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="eyebrow text-accent mb-2">RESTAURANT</p>
                  <p className="text-lg text-forest">Open daily, 8:00 AM – 10:00 PM</p>
                </div>
                <div>
                  <p className="eyebrow text-accent mb-2">BREAKFAST</p>
                  <p className="text-lg text-forest">Served daily, 7:00 AM – 10:00 AM</p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-xl p-8 bg-secondary/20">
              <p className="eyebrow text-accent mb-6">GET IN TOUCH</p>
              <div className="space-y-6">
                <a href="tel:+256312264712" className="block text-lg font-light text-foreground hover:text-accent transition-colors">
                  +256 312 264 712
                </a>
                <a href="mailto:restaurant@eminpasha.com" className="block text-lg font-light text-foreground hover:text-accent transition-colors">
                  restaurant@eminpasha.com
                </a>
              </div>
              <div className="mt-10">
                <a href="mailto:reservations@eminpasha.com" className="btn-primary w-full text-center">
                  Reserve a table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Venue Teaser (Lima) */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="border border-border rounded-xl p-8 bg-background">
            <div className="flex items-center gap-3 mb-4">
              <p className="eyebrow text-accent">COMING SOON</p>
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Lima Ceviche & Cocktails Bar
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground max-w-2xl">
              A rooftop South American concept — ceviche, cocktails, and small bites.
            </p>
            <p className="mt-6 text-sm text-muted-foreground italic">
              * Opening status pending confirmation from hotel management
            </p>
          </div>
        </div>
      </section>

      {/* Private Dining & Events Tie-in */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12 text-center">
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
            Private dining and events
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            Equatoria's kitchens can also host private groups and celebrations, alongside the hotel's conference and event spaces.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-outline">
              View event spaces
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Inside Equatoria
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`Inside Equatoria Restaurant - ${i + 1}`}
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
            Reserve your table at Equatoria
          </h2>
          <a href="mailto:reservations@eminpasha.com" className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest">
            Reserve now
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
