import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import heritage from "@/assets/heritage.jpg";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Emin Pasha Hotel & Spa" },
      { name: "description", content: "The story of Kampala's original boutique hotel — a colonial residence reborn as a garden sanctuary." },
      { property: "og:title", content: "About — The Emin Pasha" },
      { property: "og:description", content: "The story of Kampala's original boutique hotel — a colonial residence reborn as a garden sanctuary." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="A house in a garden, in the heart of Kampala."
        image={heritage}
      />

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12">
          <p className="eyebrow text-center"><span className="rule-gold mr-4" />Since 2007<span className="rule-gold ml-4" /></p>
          <div className="mt-12 space-y-8 text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              The Emin Pasha began as the private residence of a Kampala
              family, set within a walled acre of jacaranda, palm, and
              frangipani on the slopes of Nakasero hill. In 2007 the house
              was quietly reimagined as Uganda's first true boutique hotel —
              twenty rooms, a pool cut into the gardens, and a restaurant
              gathered beneath the mango trees.
            </p>
            <p>
              Nearly two decades later, the house still feels like a home.
              The staff — many with us from the beginning — know guests by
              name and remember what they read at breakfast. There are no
              lifts, no atriums, no anonymity. Only stone floors, muslin
              curtains, the sound of birds, and the peculiar, wonderful
              feeling of being cared for by people who have chosen to care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={garden}
            alt="The gardens at Emin Pasha"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="max-w-md">
            <p className="eyebrow">The Garden</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              An acre of stillness, tended by hand for forty years.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
              Our gardens are the beating heart of the hotel. Mature palms,
              flame trees, and rose beds are cared for by three gardeners
              who have shaped this landscape since long before the house
              opened its doors to guests. It is a garden that does not
              perform — only offers shade, scent, and the possibility of a
              slow afternoon.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
