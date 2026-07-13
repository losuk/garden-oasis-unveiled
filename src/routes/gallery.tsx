import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "A visual journey through the gardens, rooms, and quiet corners of The Emin Pasha.",
      },
      { property: "og:title", content: "Gallery — The Emin Pasha" },
      {
        property: "og:description",
        content: "A visual journey through The Emin Pasha Hotel & Spa in Kampala.",
      },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: "/images/gallery/gallery-image.jpg", tall: true },
  { src: "/images/gallery/gallery-image1.jpg" },
  { src: "/images/gallery/gallery-image2.jpg", tall: true },
  { src: "/images/gallery/gallery-image3.jpg" },
  { src: "/images/gallery/gallery-image4.jpg", tall: true },
  { src: "/images/gallery/gallery-image5.jpg" },
  { src: "/images/gallery/gallery-image6.jpg", tall: true },
  { src: "/images/gallery/gallery-image7.jpg" },
  { src: "/images/gallery/gallery-image8.jpg", tall: true },
  { src: "/images/gallery/gallery-image9.jpg" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="A place best felt in fragments." image={garden} />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
            {images.map((im, i) => (
              <div key={i} className="overflow-hidden break-inside-avoid">
                <img
                  src={im.src}
                  alt=""
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1500ms] hover:scale-105 ${
                    im.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
