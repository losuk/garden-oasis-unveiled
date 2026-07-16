import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The Emin Pasha Hotel — Luxury Boutique Hotel in Kampala, Nakasero" },
      { name: "description", content: "Experience Kampala's premier luxury boutique hotel. The Emin Pasha Hotel offers a tranquil garden sanctuary, world-class spa, and exquisite dining in Nakasero." }
    ]
  })
});

function Home() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const words = ["Pasha", "stillness", "garden", "dusk", "heritage", "spice", "retreat"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = window.innerHeight - 100;
      setIsSticky(window.scrollY > heroBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-foreground">
        <video
          src="https://eminpasha.com/wp-content/uploads/2026/06/WhatsApp-Video-2026-05-31-at-22.53.08-2.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(42,27,20,0.24)] via-[rgba(42,33,27,0.12)] to-[rgba(74,20,20,0.58)]" />
        <div className="relative z-10 flex h-full flex-col justify-between pb-8">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-12 mt-40 md:mt-48 text-cream text-center">
            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase mb-4 md:mb-6 opacity-80">
              THE EMIN PASHA HOTEL &amp; SPA • KAMPALA, UGANDA
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-[9rem] leading-[0.9] mb-4 md:mb-6">
              <span className="font-normal">EMIN</span>
              <span
                className={`italic font-light ml-1 md:ml-2 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                {words[currentWordIndex]}
              </span>
            </h1>
            <p className="text-base md:text-lg max-w-md md:max-w-2xl mx-auto opacity-90 font-light">
              Life is what you experience when every moment matters.
            </p>
          </div>

          {/* BOOKING BAR IN HERO */}
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-12 pb-6 md:pb-8">
            <div className="bg-cream/95 backdrop-blur-lg rounded-xl shadow-2xl border border-border/30 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1.2fr_1.2fr_2fr] gap-0 items-stretch">
                {/* Check-in */}
                <div className="group relative p-4 md:p-5 md:border-r border-border/30 hover:bg-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-sage text-[10px] md:text-xs tracking-[0.25em] uppercase mb-2">
                    <Calendar size={14} strokeWidth={1.5} />
                    Check-in
                  </div>
                  <div className="text-forest text-base md:text-lg font-medium">Select Date</div>
                </div>

                {/* Check-out */}
                <div className="group relative p-4 md:p-5 md:border-r border-border/30 hover:bg-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-sage text-[10px] md:text-xs tracking-[0.25em] uppercase mb-2">
                    <Calendar size={14} strokeWidth={1.5} />
                    Check-out
                  </div>
                  <div className="text-forest text-base md:text-lg font-medium">Select Date</div>
                </div>

                {/* Adults */}
                <div className="group relative p-4 md:p-5 md:border-r border-border/30 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-2 text-sage text-[10px] md:text-xs tracking-[0.25em] uppercase mb-2">
                    <Users size={14} strokeWidth={1.5} />
                    Adults
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all duration-200"
                    >
                      <ChevronLeft size={16} strokeWidth={1.5} />
                    </button>
                    <span className="text-forest text-lg md:text-xl font-medium mx-2 md:mx-3">
                      {adults}
                    </span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all duration-200"
                    >
                      <ChevronRight size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="group relative p-4 md:p-5 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-2 text-sage text-[10px] md:text-xs tracking-[0.25em] uppercase mb-2">
                    <Users size={14} strokeWidth={1.5} />
                    Children
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all duration-200"
                    >
                      <ChevronLeft size={16} strokeWidth={1.5} />
                    </button>
                    <span className="text-forest text-lg md:text-xl font-medium mx-2 md:mx-3">
                      {children}
                    </span>
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all duration-200"
                    >
                      <ChevronRight size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4a03c] hover:bg-[#b8882e] text-[#1a1a1a] flex items-center justify-center gap-2 px-6 py-4 md:py-5 font-semibold tracking-wide transition-all duration-300 group-hover:translate-y-0.5 group-active:translate-y-1"
                >
                  <span>Check availability</span>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY BOOKING BAR (when scrolled) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 transform hidden md:block ${
          isSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-0">
          <div className="bg-cream border-t border-border shadow-xl">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Check-in */}
              <div className="flex-1 md:border-r border-border/30 px-4 py-3 cursor-pointer hover:bg-secondary/20 transition-colors">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-sage mb-1">
                  Check-in
                </label>
                <div className="flex items-center gap-2 text-forest text-sm">
                  <Calendar size={14} strokeWidth={1.5} />
                  <span>Select Date</span>
                </div>
              </div>

              {/* Check-out */}
              <div className="flex-1 md:border-r border-border/30 px-4 py-3 cursor-pointer hover:bg-secondary/20 transition-colors">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-sage mb-1">
                  Check-out
                </label>
                <div className="flex items-center gap-2 text-forest text-sm">
                  <Calendar size={14} strokeWidth={1.5} />
                  <span>Select Date</span>
                </div>
              </div>

              {/* Adults */}
              <div className="flex-1 md:border-r border-border/30 px-4 py-3">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-sage mb-1">
                  Adults
                </label>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all"
                  >
                    <ChevronLeft size={14} strokeWidth={1.5} />
                  </button>
                  <span className="text-forest text-sm font-medium mx-2">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all"
                  >
                    <ChevronRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex-1 md:border-r border-border/30 px-4 py-3">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-sage mb-1">
                  Children
                </label>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-7 h-7 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all"
                  >
                    <ChevronLeft size={14} strokeWidth={1.5} />
                  </button>
                  <span className="text-forest text-sm font-medium mx-2">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="w-7 h-7 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:border-accent hover:bg-accent hover:text-cream transition-all"
                  >
                    <ChevronRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#d4a03c] hover:bg-[#b8882e] text-[#1a1a1a] flex items-center justify-center gap-2 px-6 py-3 font-semibold tracking-wide transition-all"
              >
                <span>Check availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED ROOMS — editorial split */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Rooms & Suites</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-forest max-w-2xl leading-[1.05]">
                Comfortable accommodations for every stay.
              </h2>
            </div>
            <Link
              to="/rooms"
              className="link-underline text-forest text-[11px] tracking-[0.28em] uppercase"
            >
              View all rooms
            </Link>
          </div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            <FeaturedRoom
              img="/images/rooms/delux-suite.jpg"
              name="Deluxe Suite"
              blurb="A spacious suite with separate living area, perfect for a relaxing stay."
              price="$145 / night"
              id="deluxe-suite"
            />
            <FeaturedRoom
              img="/images/rooms/two-bedroom-apartment.jpg"
              name="One Bedroom Apartment"
              blurb="Perfect for families or longer stays. Spacious layout with separate living and sleeping areas, overlooking the pool."
              price="$180 / night"
              id="one-bedroom-apartment"
              offset
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCES / PILLARS - Only Spa now */}
      <section>
        <Pillar
          eyebrow="Spa & Wellness"
          title="A stillness the city forgets."
          copy="Botanical treatments drawn from Ugandan tradition, in three sunlit suites bordered by fern gardens."
          cta={{ to: "/spa", label: "Discover the spa" }}
          img="/images/spa/spa-moment.jpg"
        />
      </section>

      {/* GALLERY TEASER */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="eyebrow">Moments</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-forest">
              A place best felt in fragments.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              "/images/gallery/gallery-image.jpg",
              "/images/gallery/gallery-image1.jpg",
              "/images/gallery/gallery-image2.jpg",
              "/images/gallery/gallery-image3.jpg",
              "/images/gallery/gallery-image4.jpg",
              "/images/gallery/gallery-image5.jpg",
              "/images/gallery/gallery-image6.jpg",
              "/images/gallery/gallery-image7.jpg",
            ].map((img, i) => (
              <div key={i} className={`overflow-hidden ${i % 2 === 0 ? "md:mt-10" : ""}`}>
                <img
                  src={img}
                  alt="Aerial view of The Emin Pasha Hotel gardens and architecture in Kampala"
                  loading="lazy"
                  className="h-[180px] md:h-[360px] w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-outline">
              Full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12 mb-10">
          <p className="eyebrow text-accent">INSTAGRAM</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-forest">
            Collecting unique moments
          </h2>
          <a
            href="https://instagram.com/eminpashahotelandspa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-muted-foreground link-underline"
          >
            @eminpashahotelandspa
          </a>
        </div>

        {/* Moving images carousel */}
        <div className="relative overflow-hidden group">
          <div className="flex gap-4 animate-scroll group-hover:[animation-play-state:paused]">
            {[
              "/images/gallery/gallery-image.jpg",
              "/images/gallery/gallery-image1.jpg",
              "/images/gallery/gallery-image2.jpg",
              "/images/gallery/gallery-image3.jpg",
              "/images/gallery/gallery-image4.jpg",
              "/images/gallery/gallery-image5.jpg",
              "/images/gallery/gallery-image6.jpg",
              "/images/gallery/gallery-image7.jpg",
              "/images/gallery/gallery-image8.jpg",
              "/images/gallery/gallery-image9.jpg",
              "/images/gallery/gallery-image.jpg",
              "/images/gallery/gallery-image1.jpg",
              "/images/gallery/gallery-image2.jpg",
              "/images/gallery/gallery-image3.jpg",
              "/images/gallery/gallery-image4.jpg",
              "/images/gallery/gallery-image5.jpg",
              "/images/gallery/gallery-image6.jpg",
              "/images/gallery/gallery-image7.jpg",
              "/images/gallery/gallery-image8.jpg",
              "/images/gallery/gallery-image9.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-56 md:w-72 lg:w-96 h-48 md:h-64 lg:h-80 overflow-hidden"
              >
                <img src={img} alt={`Gallery view of The Emin Pasha Hotel ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for sticky booking bar */}
      <div className="h-24 hidden md:block"></div>
    </SiteLayout>
  );
}

function FeaturedRoom({
  img,
  name,
  blurb,
  price,
  id,
  offset,
}: {
  img: string;
  name: string;
  blurb: string;
  price: string;
  id: string;
  offset?: boolean;
}) {
  return (
    <article className={`group ${offset ? "md:mt-24" : ""}`}>
      <Link to={`/rooms/${id}` as any} className="overflow-hidden block">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
        />
      </Link>
      <div className="mt-6">
        <p className="eyebrow">{price}</p>
        <h3 className="mt-3 font-display text-2xl md:text-4xl text-forest">{name}</h3>
        <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground max-w-md">
          {blurb}
        </p>
        <Link
          to={`/rooms/${id}` as any}
          className="mt-4 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
        >
          Discover
        </Link>
      </div>
    </article>
  );
}

function Pillar({
  eyebrow,
  title,
  copy,
  cta,
  img,
  reverse,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  cta: { to: string; label: string };
  img: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-2 items-stretch">
      <div className={`${reverse ? "md:order-2" : ""} relative overflow-hidden`}>
        <img src={img} alt={`The Emin Pasha Hotel - ${title}`} loading="lazy" className="h-[60vh] md:h-[85vh] w-full object-cover" />
      </div>
      <div className="flex items-center bg-background px-6 md:px-20 py-16 md:py-0">
        <div className="max-w-md">
          <p className="eyebrow">{eyebrow}</p>
          <h3 className="mt-4 font-display text-3xl md:text-5xl leading-[1.05] text-forest">
            {title}
          </h3>
          <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">{copy}</p>
          <Link
            to={cta.to as string}
            className="mt-6 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
