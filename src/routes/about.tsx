import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Emin Pasha Hotel — Heritage Boutique Hotel in Kampala" },
      { name: "description", content: "Discover the heritage of The Emin Pasha Hotel. A lush garden sanctuary in Nakasero, Kampala offering an unparalleled boutique luxury experience close to the city center and embassies." }
    ]
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="Heritage & Tranquility"
        intro="The Emin Pasha Hotel is Kampala’s first boutique hotel, an oasis of calm right in the center of the city."
        image="/images/gallery/gallery-image.jpg"
      />
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl text-forest mb-6">A Garden Sanctuary in Nakasero</h2>
            <p className="text-muted-foreground mb-4">
              Set in two acres of lush tropical gardens, The Emin Pasha Hotel provides a serene hideaway from the bustle of Kampala. Our historic property seamlessly blends classical architecture with modern luxury, creating an atmosphere of refined elegance.
            </p>
            <p className="text-muted-foreground mb-4">
              Located in the prestigious Nakasero neighborhood, we are just steps away from foreign embassies, the golf course, and the central business district. Whether you are traveling for diplomacy, business, or leisure, our boutique approach ensures personalized service that caters to your every need.
            </p>
            <p className="text-muted-foreground">
              Our gardens are home to diverse birdlife and ancient trees, providing the perfect backdrop for morning coffee, afternoon tea, or evening cocktails at our renowned wine bar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/swimming/swimming.jpg" alt="Emin Pasha Swimming Pool" className="rounded-xl w-full h-80 object-cover" />
            <img src="/images/spa/spa-moment.jpg" alt="Emin Pasha Spa" className="rounded-xl w-full h-80 object-cover mt-8" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
