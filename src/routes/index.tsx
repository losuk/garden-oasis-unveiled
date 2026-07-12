import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src="/images/hero.png"
          alt="The Emin Pasha at dusk"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/60" />
        <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 text-cream animate-fade-up">
            <p className="eyebrow text-gold-soft">Nakasero · Kampala · Since 2007</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] max-w-5xl">
              A garden hideaway<br />in the heart of the city.
            </h1>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-cream !text-forest !border-cream hover:!bg-transparent hover:!text-cream"
              >
                Reserve your stay
              </a>
              <Link to="/rooms" className="btn-ghost-light">
                Explore the hotel
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-[10px] tracking-[0.4em] uppercase animate-fade-in-slow">
          Scroll
        </div>
      </section>

      {/* INTRO / STORY */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 text-center">
          <p className="eyebrow"><span className="rule-gold mr-4" />The House<span className="rule-gold ml-4" /></p>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] text-forest max-w-3xl mx-auto">
            An intimate residence, gathered around a sunlit garden.
          </h2>
          <p className="mt-10 text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Concealed behind ancient walls in Nakasero, The Emin Pasha is
            Kampala's original boutique hotel — a stately colonial home reborn
            as a private sanctuary of twenty rooms, a candlelit pool, and
            gardens that hush the city into silence.
          </p>
          <div className="mt-12">
            <Link to="/about" className="btn-outline">Our story</Link>
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS — editorial split */}
      <section className="bg-secondary/40 py-32 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Rooms & Suites</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl text-forest max-w-2xl leading-[1.05]">
                Comfortable accommodations for every stay.
              </h2>
            </div>
            <Link to="/rooms" className="link-underline text-forest text-[11px] tracking-[0.28em] uppercase">
              View all rooms
            </Link>
          </div>

          <div className="grid gap-x-10 gap-y-24 md:grid-cols-2">
            <FeaturedRoom
              img="/images/rooms/delux-suite.jpg"
              name="Deluxe Suite"
              blurb="A spacious suite with separate living area, perfect for a relaxing stay."
              price="TBD"
              id="deluxe-suite"
            />
            <FeaturedRoom
              img="/images/rooms/two-bedroom-apartment.jpg"
              name="Two-Bedroom Apartment"
              blurb="Perfect for families or groups, with two separate bedrooms and plenty of space."
              price="TBD"
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
        {/* <Pillar
          eyebrow="Experiences"
          title="Kampala, and beyond the horizon."
          copy="Gorilla trekking in Bwindi, a private safari to Murchison Falls, or a curated tour of the city's markets and monuments."
          cta={{ to: "/experiences", label: "Curated journeys" }}
          img={experience}
        /> */}
      </section>

      {/* GALLERY TEASER */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow">Moments</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-forest">
              A place best felt in fragments.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {["/images/gallery/gallery-image.jpg", "/images/gallery/gallery-image1.jpg", "/images/gallery/gallery-image2.jpg", "/images/gallery/gallery-image3.jpg", "/images/gallery/gallery-image4.jpg", "/images/gallery/gallery-image5.jpg", "/images/gallery/gallery-image6.jpg", "/images/gallery/gallery-image7.jpg"].map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden ${i % 2 === 0 ? "md:mt-16" : ""}`}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-[240px] md:h-[360px] w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/gallery" className="btn-outline">Full gallery</Link>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="book" className="bg-forest text-cream py-32 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="text-center">
            <p className="eyebrow text-gold-soft">Special Offers</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Considered stays, gently priced.
            </h2>
          </div>
          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {offers.map((o) => (
              <div
                key={o.title}
                className="border-t border-cream/20 pt-8"
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold-soft">
                  {o.tag}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">{o.title}</h3>
                <p className="mt-5 text-sm font-light leading-relaxed opacity-80">
                  {o.copy}
                </p>
                <a href="#book" className="mt-8 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-gold-soft">
                  Enquire
                </a>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <a
              href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-[11px] tracking-[0.28em] uppercase font-medium bg-cream text-forest border border-cream hover:bg-transparent hover:text-cream transition-all duration-500"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 text-center">
          <p className="eyebrow">Guest voices</p>
          <blockquote className="mt-10 font-display text-3xl md:text-5xl leading-tight text-forest italic">
            "Stepping through the gate is like being let in on a secret. The
            city disappears, and what remains is birdsong, warm light, and
            the most gracious welcome we've had in Africa."
          </blockquote>
          <p className="mt-10 eyebrow">Condé Nast Traveler</p>
        </div>
      </section>
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
      <div className="mt-8">
        <p className="eyebrow">{price}</p>
        <h3 className="mt-3 font-display text-3xl md:text-4xl text-forest">
          {name}
        </h3>
        <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground max-w-md">
          {blurb}
        </p>
        <Link
          to={`/rooms/${id}` as any}
          className="mt-6 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
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
        <img
          src={img}
          alt=""
          loading="lazy"
          className="h-[60vh] md:h-[85vh] w-full object-cover"
        />
      </div>
      <div className="flex items-center bg-background px-8 md:px-20 py-20 md:py-0">
        <div className="max-w-md">
          <p className="eyebrow">{eyebrow}</p>
          <h3 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-forest">
            {title}
          </h3>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
            {copy}
          </p>
          <Link
            to={cta.to as string}
            className="mt-10 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

const offers = [
  {
    tag: "Stay 3, pay 2",
    title: "Long weekends in the garden",
    copy: "Three nights in a Heritage room with daily breakfast, a candlelit dinner for two, and a spa ritual.",
  },
  {
    tag: "Daily · 3–8PM",
    title: "The Equatorial Sunset Happy Hour",
    copy: "Mon–Sun (except Friday) in the Lima & Lower Gardens — enjoy sunset combos and special pricing on house cocktails as the sun sets over Kampala.",
  },
  {
    tag: "Friday Night",
    title: "Live band under the stars",
    copy: "Every Friday evening, enjoy live music from local Kampala bands in our garden courtyard — the perfect way to end your week.",
  },
  {
    tag: "Honeymoon",
    title: "A private beginning",
    copy: "Champagne on arrival, a couple's massage in the frangipani suite, and a farewell breakfast in your terrace.",
  },
  {
    tag: "Extended stay",
    title: "Fourteen days in Kampala",
    copy: "A generous discount, laundry, driver, and full board — for those making Kampala home for a season.",
  },
];
