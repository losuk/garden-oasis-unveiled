import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: "Spa & Wellness — The Emin Pasha Hotel & Spa" },
      { name: "description", content: "Botanical treatments drawn from Ugandan tradition, in three sunlit suites bordered by fern gardens." },
      { property: "og:title", content: "Spa & Wellness — The Emin Pasha" },
      { property: "og:description", content: "Botanical spa treatments in a garden sanctuary in Kampala." },
    ],
  }),
  component: SpaPage,
});

const treatments = [
  { name: "The Nakasero Ritual", time: "90 min", price: "$180", copy: "A full-body massage with warm coconut oil and shea, closed with a scalp treatment." },
  { name: "Garden Facial", time: "60 min", price: "$140", copy: "A gentle facial using cold-pressed avocado and passion fruit from our own trees." },
  { name: "Explorer's Recovery", time: "75 min", price: "$160", copy: "A deep-tissue massage for those returning from safari or the mountains." },
  { name: "Two-hour Retreat", time: "120 min", price: "$260", copy: "Body scrub, massage, and a botanical bath — the complete afternoon." },
];

function SpaPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Spa & Wellness"
        title="A stillness the city forgets."
        intro="Three treatment suites, sunlit and bordered by fern gardens. Rituals built on Ugandan botanicals and slow, generous time."
        image="/images/spa/spa-moment.jpg"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <p className="eyebrow text-center">Treatments</p>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {treatments.map((t) => (
              <div key={t.name} className="border-t border-border pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl md:text-3xl text-forest">{t.name}</h3>
                  <span className="eyebrow text-gold whitespace-nowrap">{t.price}</span>
                </div>
                <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{t.time}</p>
                <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
                  {t.copy}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <a href="mailto:spa@eminpasha.com" className="btn-outline">Book a treatment</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
