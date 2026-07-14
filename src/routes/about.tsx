import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight, Compass, Shield, Smile, Landmark, Award } from "lucide-react";
import heritage from "@/assets/heritage.jpg";
import garden from "@/assets/garden.jpg";
import experience from "@/assets/experience.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "The story of Kampala's original boutique hotel — a colonial residence reborn as a garden sanctuary.",
      },
      { property: "og:title", content: "About — The Emin Pasha" },
      {
        property: "og:description",
        content:
          "The story of Kampala's original boutique hotel — a colonial residence reborn as a garden sanctuary.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="A hundred-year-old house, still finding its next chapter"
        image="/images/gallery/gallery-image1.jpg"
      />

      {/* THE BUILDING STORY */}
      <section id="the-building-story" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="eyebrow text-accent">HERITAGE</p>
            <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              A 1920s residence, reborn
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
              <p>
                Originally built as a private colonial farmhouse in the 1920s, this Nakasero hill residence
                became the cornerstone of Kampala’s high society. In 2004, the property was carefully
                restored and reborn as Uganda's very first boutique hotel—retaining the intimate feel of a
                grand private home while offering a peaceful retreat from the growing city.
              </p>
              <p>
                Every veranda, stone-paved pathway, and high ceiling was preserved to maintain the unique 
                blend of antique African charm and classic elegance, all nestled within an acre of lush, 
                mature tropical gardens.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-xl bg-secondary/10 flex items-center justify-center p-4">
            <img
              src="/images/eminpasha.jpg"
              alt="Mehmed Emin Pasha"
              loading="lazy"
              className="max-h-[500px] w-auto object-contain transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* THE NAMESAKE STORY (Who was Emin Pasha?) */}
      <section id="the-namesake-story" className="py-24 md:py-32 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,var(--color-gold),transparent)] pointer-events-none" />
        <div className="mx-auto max-w-[900px] px-6 lg:px-12 text-center relative z-10">
          <p className="eyebrow text-[var(--color-gold)] mb-6">HISTORY & LEGEND</p>
          <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
            Who was Emin Pasha?
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
            <p>
              Born Isaak Eduard Schnitzer in Germany, he later adopted the name Mehmed Emin Pasha. 
              A doctor, naturalist, linguist, and explorer, he rose to serve as the Ottoman governor 
              of Equatoria province (now South Sudan).
            </p>
            <p>
              Emin Pasha was uniquely characterized by his passion for scientific discovery, botanical collection, 
              and deep respect for the people and cultures he encountered. His legacy is one of curiosity over conquest—a 
              spirit that deeply influences the tranquil layout of our resort and the creative flavors of the Equatoria Restaurant.
            </p>
          </div>
          <div className="mt-12">
            <Link 
              to="/dining/equatoria" 
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-medium text-[var(--color-gold)] hover:text-cream transition-colors group"
            >
              <span>See how his journey shaped our menu</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* A NEW CHAPTER */}
      <section id="a-new-chapter" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group overflow-hidden rounded-lg shadow-xl">
            <img
              src="/images/gallery/gallery-image7.jpg"
              alt="Emin Pasha lounge experience"
              loading="lazy"
              className="aspect-[4/3] md:aspect-[4/5] w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="eyebrow text-accent">MANAGEMENT & VISION</p>
            <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Independent in spirit, backed by something bigger
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
              <p>
                In June 2023, The Emin Pasha Hotel & Spa embarked on a fresh era by transitioning under new professional hotel management.
              </p>
              <p>
                This operational partnership ensures that while the hotel retains its legendary boutique soul, historical identity, 
                and independent character, it benefits from enhanced operational support, high international service standards, 
                and deep regional hospitality expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES AND PHILOSOPHY */}
      <section id="values-and-philosophy" className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow text-accent">OUR PHILOSOPHY</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-forest">
              Crafting a rare hospitality experience
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Small by design */}
            <div className="bg-background border border-border p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Landmark size={24} />
              </div>
              <h3 className="font-display text-2xl text-forest mb-4">Small by design</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                With only 35 uniquely styled rooms and suites, we prioritize personal connections over corporate scale. 
                No crowded halls or lobbies—just space, privacy, and thoughtful attention.
              </p>
            </div>
            {/* Locally rooted */}
            <div className="bg-background border border-border p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Compass size={24} />
              </div>
              <h3 className="font-display text-2xl text-forest mb-4">Locally rooted</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We believe hospitality should honor its environment. From organic ingredients sourced from local farms 
                to hand-crafted furniture, our hotel celebrates Ugandan heritage.
              </p>
            </div>
            {/* Unhurried */}
            <div className="bg-background border border-border p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Smile size={24} />
              </div>
              <h3 className="font-display text-2xl text-forest mb-4">Unhurried</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Time moves differently in our garden oasis. We encourage you to linger over breakfast, stroll our leafy paths, 
                and embrace a slow, peaceful pace of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership-optional" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12 text-center">
          <p className="eyebrow text-accent mb-6">LEADERSHIP</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05] mb-8">
            Under new energy
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Today, the hotel's revival is steered by our dedicated local management team alongside General Manager 
            Chimo Chimoche directing the relaunch of the signature Equatoria Restaurant. Together, the team is bringing 
            fresh operational energy and passionate focus to Kampala's legendary garden retreat.
          </p>
        </div>
      </section>

      {/* RECOGNITION */}
      <section id="recognition-tiein" className="py-20 bg-secondary/10 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Award size={20} />
                <p className="eyebrow">DISTINCTION</p>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-forest">Recognised along the way</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                As Uganda's pioneering boutique hotel, Emin Pasha has enjoyed over two decades of travel acclaim. 
                We are honored to hold the Tripadvisor Travellers' Choice award, celebrating consistent outstanding hospitality.
              </p>
            </div>
            <div className="flex-shrink-0 bg-background border border-border p-6 rounded-xl shadow-sm text-center min-w-[240px]">
              <div className="text-5xl font-display text-accent mb-2">Top 10%</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">
                Hotels Worldwide
              </div>
              <div className="w-12 h-px bg-border mx-auto my-4" />
              <div className="text-sm font-medium text-forest">Tripadvisor Travellers' Choice</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="py-24 md:py-32 bg-[var(--color-primary)] text-cream">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            Come see it for yourself
          </h2>
          <a
            href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: "#d4a03c",
              color: "#1a1a1a",
              borderColor: "#d4a03c",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#b8882e";
              e.currentTarget.style.borderColor = "#b8882e";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#d4a03c";
              e.currentTarget.style.borderColor = "#d4a03c";
            }}
          >
            Book your stay
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
