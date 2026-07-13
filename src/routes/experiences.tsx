import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import experience from "@/assets/experience.jpg";
import garden from "@/assets/garden.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "Gorilla trekking in Bwindi, private safaris to Murchison Falls, and curated tours of Kampala.",
      },
      { property: "og:title", content: "Experiences — The Emin Pasha" },
      {
        property: "og:description",
        content: "Curated journeys from The Emin Pasha — gorillas, safaris, and Kampala by heart.",
      },
    ],
  }),
  component: ExperiencesPage,
});

const experiences = [
  {
    img: experience,
    name: "Gorillas of Bwindi",
    duration: "3 nights",
    copy: "A private journey to the Impenetrable Forest — a morning trek among the mountain gorillas, and two evenings in a mist-veiled lodge.",
  },
  {
    img: garden,
    name: "Murchison Falls Safari",
    duration: "4 nights",
    copy: "The Nile at its most theatrical. Game drives, a boat cruise to the base of the falls, and sundowners on the escarpment.",
  },
  {
    img: pool,
    name: "Kampala by Heart",
    duration: "1 day",
    copy: "A curated tour led by our concierge — the craft markets of Buganda Road, the Kabaka's palace, and lunch in a local home.",
  },
];

function ExperiencesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Experiences"
        title="Kampala — and beyond the horizon."
        intro="Every journey is arranged privately by our concierge, in vehicles and hands we trust as our own."
        image={experience}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-28">
          {experiences.map((e, i) => (
            <article
              key={e.name}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                />
              </div>
              <div className="max-w-md md:px-6">
                <p className="eyebrow">{e.duration}</p>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                  {e.name}
                </h2>
                <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
                  {e.copy}
                </p>
                <a
                  href="mailto:concierge@eminpasha.com"
                  className="mt-10 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
                >
                  Arrange with our concierge
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
