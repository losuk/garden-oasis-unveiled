import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [{ title: "Dining" }, { name: "description", content: "Enjoy our dining experience." }],
  }),
  component: DiningPage,
});

const menus = [
  {
    name: "Breakfast",
    hours: "7 — 10:30",
    note: "Á la carte, served in the garden or in your room.",
  },
  {
    name: "Lunch",
    hours: "12 — 15:00",
    note: "A lighter menu of salads, grilled fish, and local vegetables.",
  },
  {
    name: "Dinner",
    hours: "18:30 — 22:30",
    note: "A tasting menu of five courses, changing with the season.",
  },
  {
    name: "The Terrace Bar",
    hours: "16 — late",
    note: "Sundowners, sharing plates, and East African wines.",
  },
];

function DiningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Dining"
        title="Dining Experience"
        intro="Enjoy delicious meals in a beautiful setting."
        image="/images/dining/dining-moment.jpg"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12 text-center">
          <p className="eyebrow">
            <span className="rule-gold mr-4" />
            The Kitchen
            <span className="rule-gold ml-4" />
          </p>
          <h2 className="mt-8 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
            Slow food, gathered from very close by.
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            Our chef works exclusively with growers, fishermen, and farmers within a hundred
            kilometres of Kampala. The result is a menu that changes almost daily — bright,
            generous, and unmistakably of this place.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            {menus.map((m) => (
              <div key={m.name} className="border-t border-border pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl text-forest">{m.name}</h3>
                  <span className="eyebrow">{m.hours}</span>
                </div>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {m.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href="mailto:reservations@eminpasha.com" className="btn-primary">
              Reserve a table
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
