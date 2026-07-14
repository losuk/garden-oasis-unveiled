import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
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
                  className="bg-primary hover:bg-primary/90 text-cream flex items-center justify-center gap-2 px-6 py-4 md:py-5 font-semibold tracking-wide transition-all duration-300 group-hover:translate-y-0.5 group-active:translate-y-1"
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
                className="flex-1 bg-primary hover:bg-[var(--color-primary-hover)] text-cream flex items-center justify-center gap-2 px-6 py-3 font-semibold tracking-wide transition-all"
              >
                <span>Check availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AWARDS & RECOGNITION */}
      <section id="awards-recognition" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
          <div className="text-center mb-10 md:mb-16">
            <p className="eyebrow">
              <span className="rule-gold mr-4" />
              Recognition
              <span className="rule-gold ml-4" />
            </p>
            <h2 className="mt-6 md:mt-8 font-display text-3xl md:text-5xl leading-[1.05] text-forest max-w-3xl mx-auto">
              Recognised by travelers and industry alike
            </h2>
          </div>

          {/* BADGE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Tripadvisor Travellers' Choice */}
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g293841-d602921-Reviews-The_Emin_Pasha_Hotel_Spa-Kampala_Central_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2c-2.21 0-4 1.79-4 4 0 .5.12 1 .34 1.46L4.34 8.2c-.27-.27-.78-.44-1.34-.44-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 .56 0 1.07-.17 1.34-.44l3.96-0.74c.46.22.96.34 1.46.34 2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4z" />
                    <path d="M12 10c-2.21 0-4 1.79-4 4 0 .5.12 1 .34 1.46l-3.96 0.74c-.27.27-.78.44-1.34.44-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 .56 0 1.07-.17 1.34-.44l3.96-0.74c.46.22.96.34 1.46.34 2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4z" />
                    <path d="M12 18c-2.21 0-4 1.79-4 4 0 .5.12 1 .34 1.46L4.34 20.2c-.27-.27-.78-.44-1.34-.44-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 .56 0 1.07-.17 1.34-.44l3.96-0.74c.46.22.96.34 1.46.34 2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-forest leading-tight">
                    Travellers' Choice
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                    Tripadvisor
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recognised among the top 10% of properties worldwide for consistently excellent
                guest reviews.
              </p>
            </a>

            {/* Uganda's First Boutique Hotel */}
            <div className="bg-background border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18v-4H3v4z" />
                    <path d="M4 10l8-6 8 6v4H4v-4z" />
                    <path d="M9 21v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-forest leading-tight">
                    Uganda's First Boutique Hotel
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                    Est. as a private colonial residence, reborn in 2004
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A distinction noted across independent travel guides for two decades.
              </p>
            </div>
          </div>

          {/* OUR STORY CTA */}
          <div className="text-center mt-10 md:mt-12">
            <Link to="/about" className="btn-outline">
              Our story
            </Link>
          </div>
        </div>
      </section>

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
              name="Two-Bedroom Apartment"
              blurb="Perfect for families or groups, with two separate bedrooms and plenty of space."
              price="$180 / night"
              id="two-bedroom-apartment"
              offset
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCES / PILLARS full-bleed */}
      <section>
        <Pillar
          eyebrow="Dining"
          title="Enjoy our delicious dining experience."
          copy="Savor wonderful meals in a beautiful setting."
          cta={{ to: "/dining", label: "Explore dining" }}
          img="/images/dining/dining-moment.jpg"
        />
        <Pillar
          eyebrow="Spa & Wellness"
          title="A stillness the city forgets."
          copy="Botanical treatments drawn from Ugandan tradition, in three sunlit suites bordered by fern gardens."
          cta={{ to: "/spa", label: "Discover the spa" }}
          img="/images/spa/spa-moment.jpg"
          reverse
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
                  alt=""
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

      {/* OFFERS */}
      <section id="book" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">
              <span className="rule-gold mr-4" />
              Currently
            </p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl text-forest leading-[1.05]">
              What's happening around the hotel.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-stretch">
            {/* Featured Room Offer */}
            <div className="bg-forest text-cream p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                  July Special
                </p>
                <h3 className="font-display text-3xl md:text-5xl leading-[1.1] text-cream max-w-md">
                  July at the Pasha.
                </h3>
                <p className="mt-6 text-base md:text-lg font-light leading-relaxed opacity-90 max-w-md">
                  Escape the city heat this July. Stay with us for $125 (single) or $135 (double),
                  including our signature garden breakfast, pool access, and unhurried hospitality.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  Book your stay
                </a>
              </div>
            </div>

            {/* Food & Drink Events Stack */}
            <div className="flex flex-col justify-center gap-8 lg:pl-8">
              <div className="group relative">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                  <h3 className="font-display text-2xl md:text-4xl text-forest">
                    Sunset Happy Hour
                  </h3>
                  <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-sage">
                    Every day (Except Fri) · 3–8PM
                  </span>
                </div>
                <p className="text-sm md:text-base font-light text-muted-foreground max-w-md leading-relaxed">
                  Head down to the Lima or Lower Gardens as the afternoon heat breaks. We're running
                  UGX 60,000 combo deals and pouring house cocktails while the sun drops.
                </p>
              </div>

              <div className="w-full h-px bg-border/50"></div>

              <div className="group relative">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                  <h3 className="font-display text-2xl md:text-4xl text-forest">
                    Friday Night Live
                  </h3>
                  <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-sage">
                    Fridays
                  </span>
                </div>
                <p className="text-sm md:text-base font-light text-muted-foreground max-w-md leading-relaxed">
                  We clear out some space in the courtyard, bring in the bands, and pour the drinks.
                  It gets busy, it gets loud, and it's a genuinely good time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUEST REVIEWS */}
      <section id="guest-reviews" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="eyebrow">
              <span className="rule-gold mr-4" />
              RECOGNITION
              <span className="rule-gold ml-4" />
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-forest leading-[1.05]">
              Trusted by travelers worldwide
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              What guests are saying, straight from the platforms they trust.
            </p>
          </div>

          {/* AGGREGATE SCORE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Tripadvisor */}
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g293841-d602921-Reviews-The_Emin_Pasha_Hotel_Spa-Kampala_Central_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/50"
            >
              <div className="text-3xl md:text-5xl font-display text-forest leading-none mb-2">
                4.0{" "}
                <span className="text-base md:text-lg text-muted-foreground font-normal">/5</span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                TRIPADVISOR
              </p>
              <p className="text-sm text-muted-foreground mb-4">229+ Reviews</p>
              {/* Star Rating */}
              <div className="flex items-center gap-1" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-gold-soft"
                    style={{ color: "var(--gold-soft)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
                <div
                  className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
                  style={{ color: "var(--gold-soft)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <defs>
                      <clipPath id="half-star-tripadvisor">
                        <rect x="0" y="0" width="50%" height="100%" />
                      </clipPath>
                    </defs>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      clipPath="url(#half-star-tripadvisor)"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* Google Reviews */}
            <a
              href="https://www.google.com/maps/place/The+Emin+Pasha+Hotel+%26+Spa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/50"
            >
              <div className="text-3xl md:text-5xl font-display text-forest leading-none mb-2">
                4.3{" "}
                <span className="text-base md:text-lg text-muted-foreground font-normal">/5</span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                GOOGLE REVIEWS
              </p>
              <p className="text-sm text-muted-foreground mb-4">800+ Reviews</p>
              {/* Star Rating */}
              <div className="flex items-center gap-1" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5"
                    style={{ color: "var(--gold-soft)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
                <div
                  className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
                  style={{ color: "var(--gold-soft)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <defs>
                      <clipPath id="half-star-google">
                        <rect x="0" y="0" width="30%" height="100%" />
                      </clipPath>
                    </defs>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      clipPath="url(#half-star-google)"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* Booking.com */}
            <a
              href="https://www.booking.com/reviews/ug/hotel/the-emin-pasha.en-gb.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/50"
            >
              <div className="text-3xl md:text-5xl font-display text-forest leading-none mb-2">
                8.3{" "}
                <span className="text-base md:text-lg text-muted-foreground font-normal">/10</span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                BOOKING.COM
              </p>
              <p className="text-sm text-muted-foreground">88 Verified Reviews</p>
            </a>
          </div>

          {/* INDIVIDUAL REVIEW CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div
              className="bg-background border-l-4 rounded-r-xl p-6 md:p-8"
              style={{ borderLeftColor: "var(--accent)" }}
            >
              <blockquote className="font-display text-base md:text-xl text-forest italic leading-relaxed mb-6">
                "Beautiful, peaceful tropical gardens — the most praised feature. Attentive,
                friendly, and truly helpful staff."
              </blockquote>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                — TRIPADVISOR GUEST
              </p>
            </div>

            <div
              className="bg-background border-l-4 rounded-r-xl p-6 md:p-8"
              style={{ borderLeftColor: "var(--accent)" }}
            >
              <blockquote className="font-display text-base md:text-xl text-forest italic leading-relaxed mb-6">
                "An exceptional base for exploring Kampala. The Equatoria Restaurant made every
                morning memorable."
              </blockquote>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                — GOOGLE GUEST
              </p>
            </div>
          </div>

          {/* SENTIMENT SUMMARY */}
          <div className="text-center mb-10">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Guests consistently highlight the gardens, the staff, and the sense of calm — with
              occasional notes on service speed during busy periods.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/The+Emin+Pasha+Hotel+%26+Spa"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-forest text-[11px] tracking-[0.28em] uppercase"
            >
              Read all reviews
            </a>
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
                <img src={img} alt="" className="w-full h-full object-cover" />
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
        <img src={img} alt="" loading="lazy" className="h-[60vh] md:h-[85vh] w-full object-cover" />
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
