import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "Delicious dining experiences in a beautiful garden setting in Kampala.",
      },
      { property: "og:title", content: "Dining — The Emin Pasha" },
      {
        property: "og:description",
        content: "Dining experiences in Kampala's garden sanctuary.",
      },
    ],
  }),
  component: DiningPage,
});

function DiningPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="CULINARY JOURNEY"
        title="Equatoria Restaurant"
        intro="Everyday breakfast and dinner, Sunday lunch too."
        image="/images/dining/dining-moment.jpg"
      />

      {/* CULINARY JOURNEY */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">CULINARY JOURNEY</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                Three open-studio kitchens. One exceptional experience.
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                At Equatoria Restaurant, it's intimate. Our open-studio kitchens allow you to watch
                our chefs craft every dish, with a menu that's best described as 'modern
                international'.
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                Start your day with our breakfast buffet, enjoy international dishes à la carte for
                dinner or join us for Sunday lunch – a weekly feast of local and continental
                delicacies.
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                For celebrations, our garden and private dining areas set the scene for truly
                memorable occasions.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm font-light text-muted-foreground">
                <p>Breakfast: 7:00 AM – 10:30 AM</p>
                <p>Dinner: 7:00 PM – 10:00 PM</p>
                <p>Sunday Lunch: 12:30 PM – 3:30 PM</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Equatoria Restaurant interior"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE MENU */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p className="eyebrow text-accent">THE MENU</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Highlights from the Kitchen
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
              A small selection of signature dishes from our kitchen; full menu available at the
              hotel!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Menu Item 1 */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <h3 className="font-display text-2xl text-forest">Nakasonero Tilapia</h3>
                <span className="text-accent font-medium">$18</span>
              </div>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Pan-fried local tilapia, served with grilled plantains, a lime and herb butter
                sauce, and kachumbari salad.
              </p>
            </div>

            {/* Menu Item 2 */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <h3 className="font-display text-2xl text-forest">Katogo Kitovu</h3>
                <span className="text-accent font-medium">$14</span>
              </div>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Slow-simmered beef or greens in groundnut sauce, served with matoke and fresh
                avocado.
              </p>
            </div>

            {/* Menu Item 3 */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <h3 className="font-display text-2xl text-forest">Tropical Avocado Salad</h3>
                <span className="text-accent font-medium">$12</span>
              </div>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Chunky avocado, red onion, tomatoes, cashews, feta cheese, fresh herbs and a zesty
                citrus dressing.
              </p>
            </div>

            {/* Menu Item 4 */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <h3 className="font-display text-2xl text-forest">Kampala-style Chicken Skewers</h3>
                <span className="text-accent font-medium">$16</span>
              </div>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Marinated in local spices, grilled over charcoal and served with sweet potato chips
                and a side of peanut sauce.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
              Would you like to see the full à la carte and breakfast menus?
            </p>
            <a href="mailto:restaurant@eminpasha.com" className="btn-outline">
              Download Menus PDF
            </a>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p className="eyebrow text-accent">ATMOSPHERE</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Moments from the Veranda
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Restaurant atmosphere 1"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Restaurant atmosphere 2"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section className="py-24 md:py-32 bg-[var(--color-forest)]">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-[1.05] mb-4">
            Reserve a Table
          </h2>
          <p className="text-lg font-light leading-relaxed text-cream/80 mb-10">
            Due to popular demand, especially for Sunday lunch, we recommend booking in advance to
            secure your preferred table or terrace spot.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:restaurant@eminpasha.com"
              className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-background)] font-medium hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Book a Table
            </a>
            <a
              href="tel:+256312264712"
              className="px-8 py-3 border border-cream text-cream font-medium hover:bg-cream hover:text-[var(--color-forest)] transition-colors"
            >
              Call Restaurant
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
