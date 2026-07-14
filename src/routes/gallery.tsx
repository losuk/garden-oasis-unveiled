import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content: "Every corner of Emin Pasha, in one place.",
      },
      { property: "og:title", content: "Gallery — The Emin Pasha" },
      {
        property: "og:description",
        content: "Every corner of Emin Pasha, in one place.",
      },
    ],
  }),
  component: GalleryPage,
});



// Mock gallery data (replace with real data)
const galleryImages = [
  { src: "/images/gallery/gallery-image.jpg", category: "Rooms & Suites", tall: true },
  { src: "/images/gallery/gallery-image1.jpg", category: "Lobby & Lounge" },
  { src: "/images/gallery/gallery-image2.jpg", category: "Exterior & Gardens", tall: true },
  { src: "/images/gallery/gallery-image3.jpg", category: "Exterior & Gardens" },
  { src: "/images/gallery/gallery-image4.jpg", category: "Spa & Wellness", tall: true },
  { src: "/images/gallery/gallery-image5.jpg", category: "Rooms & Suites" },
  { src: "/images/gallery/gallery-image6.jpg", category: "Swimming Pool", tall: true },
  { src: "/images/gallery/gallery-image7.jpg", category: "Lobby & Lounge" },
  { src: "/images/gallery/gallery-image8.jpg", category: "Equatoria Restaurant", tall: true },
  { src: "/images/gallery/gallery-image9.jpg", category: "Exterior & Gardens" },
];

function GalleryPage() {
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  // Handle lightbox navigation
  const handleLightboxNext = () => {
    setCurrentLightboxIndex(prev => (prev + 1) % galleryImages.length);
  };
  const handleLightboxPrev = () => {
    setCurrentLightboxIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") handleLightboxPrev();
      if (e.key === "ArrowRight") handleLightboxNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="GALLERY"
        title="A place best felt in fragments"
        intro="Every corner of Emin Pasha, in one place."
        image="/images/gallery/gallery-image3.jpg"
      />

      {/* Grid */}
      <section className="py-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="columns-1 md:columns-2 lg:columns-4 gap-2 [&>*]:mb-2">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden break-inside-avoid cursor-pointer group"
                onClick={() => {
                  setCurrentLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-400 group-hover:scale-103 ${
                    img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                {/* Hover overlay removed — images zoom on hover only */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-24 md:py-32 bg-[var(--color-forest)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--cream)] mb-10">
            Come see it for yourself
          </h2>
          <a
            href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-[var(--cream)] text-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--color-forest)]"
          >
            Check availability
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && galleryImages[currentLightboxIndex] && (
        <div className="fixed inset-0 z-[99999] bg-[rgba(42,27,20,0.96)] flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-[var(--cream)] p-2 z-10"
          >
            <X size={28} />
          </button>

          {/* Prev Button */}
          <button
            onClick={handleLightboxPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--cream)] p-2 z-10"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[currentLightboxIndex].src}
            alt={galleryImages[currentLightboxIndex].category}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          {/* Next Button */}
          <button
            onClick={handleLightboxNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--cream)] p-2 z-10"
          >
            <ChevronRight size={32} />
          </button>

          {/* Bottom Info */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[var(--cream)]">
            <p className="text-sm">{galleryImages[currentLightboxIndex].category}</p>
            <p className="text-sm">
              {currentLightboxIndex + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
