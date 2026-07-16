import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Emin Pasha Hotel & Spa, Kampala" },
      {
        name: "description",
        content: "Explore the beautiful gardens, luxury suites, and tranquil spaces of The Emin Pasha Hotel. The premier boutique hotel experience in Nakasero, Kampala.",
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

const galleryImages = [
  // Exterior & Gardens
  { id: 45, src: "/images/gallery/gallery-image1.jpg", category: "Exterior & Gardens" },
  // Rooms & Suites
  { id: 8, src: "/images/rooms/delux-room.jpg", category: "Rooms & Suites" },
  { id: 9, src: "/images/rooms/delux-room1.jpg", category: "Rooms & Suites" },
  { id: 10, src: "/images/rooms/delux-room2.jpg", category: "Rooms & Suites" },
  { id: 11, src: "/images/rooms/delux-room3.jpg", category: "Rooms & Suites" },
  { id: 12, src: "/images/rooms/delux-room4.jpg", category: "Rooms & Suites" },
  { id: 13, src: "/images/rooms/delux-room5.jpg", category: "Rooms & Suites" },
  { id: 14, src: "/images/rooms/delux-room6.jpg", category: "Rooms & Suites" },
  { id: 15, src: "/images/rooms/delux-room7.jpg", category: "Rooms & Suites" },
  { id: 16, src: "/images/rooms/delux-room8.jpg", category: "Rooms & Suites" },
  { id: 17, src: "/images/rooms/delux-room9.jpg", category: "Rooms & Suites" },
  { id: 18, src: "/images/rooms/delux-suite.jpg", category: "Rooms & Suites" },
  { id: 19, src: "/images/rooms/delux-suite1.jpg", category: "Rooms & Suites" },
  { id: 20, src: "/images/rooms/delux-suite2.jpg", category: "Rooms & Suites" },
  { id: 21, src: "/images/rooms/delux-suite3.jpg", category: "Rooms & Suites" },
  { id: 22, src: "/images/rooms/delux-suite4.jpg", category: "Rooms & Suites" },
  { id: 23, src: "/images/rooms/delux-suite5.jpg", category: "Rooms & Suites" },
  { id: 24, src: "/images/rooms/delux-suite6.jpg", category: "Rooms & Suites" },
  { id: 25, src: "/images/rooms/delux-suite7.jpg", category: "Rooms & Suites" },
  { id: 26, src: "/images/rooms/delux-suite8.jpg", category: "Rooms & Suites" },
  { id: 27, src: "/images/rooms/delux-suite9.jpg", category: "Rooms & Suites" },
  { id: 28, src: "/images/rooms/standard-room.jpg", category: "Rooms & Suites" },
  { id: 29, src: "/images/rooms/standard-room2.jpg", category: "Rooms & Suites" },
  { id: 30, src: "/images/rooms/standard-room3.jpg", category: "Rooms & Suites" },
  { id: 31, src: "/images/rooms/standard-room4.jpg", category: "Rooms & Suites" },
  { id: 32, src: "/images/rooms/standard-room5.jpg", category: "Rooms & Suites" },
  { id: 33, src: "/images/rooms/standard-room6.jpg", category: "Rooms & Suites" },
  { id: 34, src: "/images/rooms/two-bedroom-apartment.jpg", category: "Rooms & Suites" },
  { id: 35, src: "/images/rooms/two-bedroom-apartment1.jpg", category: "Rooms & Suites" },
  { id: 36, src: "/images/rooms/two-bedroom-apartment2.jpg", category: "Rooms & Suites" },
  { id: 37, src: "/images/rooms/two-bedroom-apartment3.jpg", category: "Rooms & Suites" },
  { id: 38, src: "/images/rooms/two-bedroom-apartment4.jpg", category: "Rooms & Suites" },
  { id: 39, src: "/images/rooms/two-bedroom-apartment5.jpg", category: "Rooms & Suites" },
  { id: 40, src: "/images/rooms/two-bedroom-apartment6.jpg", category: "Rooms & Suites" },
  { id: 41, src: "/images/rooms/two-bedroom-apartment7.jpg", category: "Rooms & Suites" },
  { id: 42, src: "/images/rooms/two-bedroom-apartment8.jpg", category: "Rooms & Suites" },
  // Lobby & Lounge
  { id: 46, src: "/images/gallery/gallery-image7.jpg", category: "Lobby & Lounge" },
  { id: 53, src: "/images/gallery/gallery-image8.jpg", category: "Lobby & Lounge" },
  { id: 61, src: "/images/gallery/gallery-image4.jpg", category: "Lobby & Lounge" },
  { id: 69, src: "/images/gallery/gallery-image6.jpg", category: "Lobby & Lounge" },
  { id: 43, src: "/images/gallery/gallery-image5.jpg", category: "Lobby & Lounge" },
  { id: 3, src: "/images/gallery/gallery-image2.jpg", category: "Lobby & Lounge" },
  { id: 4, src: "/images/gallery/gallery-image3.jpg", category: "Lobby & Lounge" },


  // Equatoria Restaurant
  { id: 48, src: "/images/dining/dining-moment.jpg", category: "Equatoria Restaurant" },
  { id: 49, src: "/images/dining/dining-moment4.jpg", category: "Equatoria Restaurant" },
  { id: 50, src: "/images/dining/dining-moment5.jpg", category: "Equatoria Restaurant" },
  { id: 51, src: "/images/dining/dining-moment6.jpg", category: "Equatoria Restaurant" },
  { id: 52, src: "/images/dining/dining-moment7.jpg", category: "Equatoria Restaurant" },
  { id: 54, src: "/images/gallery/gallery-image13.jpg", category: "Equatoria Restaurant" },
  { id: 44, src: "/images/gallery/gallery-image10.jpg", category: "Equatoria Restaurant" },
  { id: 5, src: "/images/gallery/gallery-image9.jpg", category: "Equatoria Restaurant" },
  { id: 6, src: "/images/gallery/gallery-image11.jpg", category: "Equatoria Restaurant" },
  { id: 47, src: "/images/gallery/gallery-image12.jpg", category: "Equatoria Restaurant" },


  // Spa & Wellness
  { id: 55, src: "/images/spa/spa-moment.jpg", category: "Spa & Wellness" },
  { id: 56, src: "/images/spa/spa-moment2.jpg", category: "Spa & Wellness" },
  { id: 57, src: "/images/spa/spa-moment3.jpg", category: "Spa & Wellness" },
  { id: 58, src: "/images/spa/spa-moment4.jpg", category: "Spa & Wellness" },
  { id: 59, src: "/images/spa/spa-moment5.jpg", category: "Spa & Wellness" },
  { id: 60, src: "/images/spa/spa-moment6.jpg", category: "Spa & Wellness" },
  // Swimming Pool
  { id: 63, src: "/images/swimming/swimming.jpg", category: "Swimming Pool" },
  { id: 64, src: "/images/swimming/swimming-2.jpg", category: "Swimming Pool" },
  { id: 65, src: "/images/swimming/swimming-3.jpg", category: "Swimming Pool" },
  { id: 66, src: "/images/swimming/swimming-4.jpg", category: "Swimming Pool" },
  { id: 67, src: "/images/swimming/swimming-5.jpg", category: "Swimming Pool" },
  { id: 68, src: "/images/swimming/swimming-6.jpg", category: "Swimming Pool" },
  { id: 2, src: "/images/gallery/gallery-image.jpg", category: "Swimming Pool" },
  // Conferences & Events
  { id: 70, src: "/images/conference/conference.jpg", category: "Conferences & Events" },
  { id: 71, src: "/images/conference/conference-2.jpg", category: "Conferences & Events" },
  { id: 72, src: "/images/conference/conference-3.jpg", category: "Conferences & Events" },
  { id: 73, src: "/images/conference/conference-4.jpg", category: "Conferences & Events" },
  { id: 7, src: "/images/rooms/conference-room.jpg", category: "Conferences & Events" },
];

const filterCategories = [
  { label: "All Images", value: "all" },
  { label: "Rooms", value: "Rooms & Suites" },
  { label: "Lounge", value: "Lobby & Lounge" },
  { label: "Dining", value: "Equatoria Restaurant" },
  { label: "Spa", value: "Spa & Wellness" },
  { label: "Pool", value: "Swimming Pool" },
  { label: "Gardens", value: "Exterior & Gardens" },
];

function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const handleLightboxNext = () => {
    setCurrentLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };
  const handleLightboxPrev = () => {
    setCurrentLightboxIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") handleLightboxPrev();
      if (e.key === "ArrowRight") handleLightboxNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="VISUAL JOURNEY"
        title="Hotel Gallery"
        intro="Capture the essence of Nakasero's colonial heritage, private wellness spa, and tropical grounds."
        image="/images/gallery/gallery-image1.jpg"
      />

      {/* Filter Buttons */}
      <section className="py-6 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-[#c85a31] text-white"
                    : "bg-white text-[#2d2d2d] hover:bg-[#c85a31]/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-[1600px] px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 [&>*]:mb-2">
            {filteredImages.map((img, i) => (
              <div
                key={img.id}
                className="relative overflow-hidden break-inside-avoid cursor-pointer group"
                onClick={() => {
                  setCurrentLightboxIndex(i);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
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
      {lightboxOpen && filteredImages[currentLightboxIndex] && (
        <div className="fixed inset-0 z-[99999] bg-[rgba(42,27,20,0.96)] flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-[var(--cream)] p-2 z-10"
          >
            <X size={28} />
          </button>

          <button
            onClick={handleLightboxPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--cream)] p-2 z-10"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={filteredImages[currentLightboxIndex].src}
            alt={filteredImages[currentLightboxIndex].category}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          <button
            onClick={handleLightboxNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--cream)] p-2 z-10"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[var(--cream)]">
            <p className="text-sm">
              {filteredImages[currentLightboxIndex].category}
            </p>
            <p className="text-sm">
              {currentLightboxIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
