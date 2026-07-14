import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Compass, Clock, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/dining/equatoria")({
  head: () => ({
    meta: [
      { title: "Equatoria Restaurant — Taste the Journey — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content: "European, Mediterranean, and African cuisine, cooked in the open, using Uganda's own ingredients.",
      },
      { property: "og:title", content: "Equatoria Restaurant — The Emin Pasha" },
      {
        property: "og:description",
        content: "A culinary tour inspired by Emin Pasha's life, from Poland to East Africa.",
      },
    ],
  }),
  component: EquatoriaPage,
});

const galleryImages = [
  "/images/dining/dining-moment.jpg",
  "/images/dining/dining-moment.jpg",
  "/images/dining/dining-moment.jpg",
  "/images/dining/dining-moment.jpg",
];

function EquatoriaPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <PageHero
        eyebrow="EQUATORIA RESTAURANT"
        title="Taste the journey"
        intro="A menu that follows Emin Pasha's own route, from Poland to the heart of Africa."
        image="/images/dining/dining-moment.jpg"
      />

      {/* THE CONCEPT */}
      <section id="the-concept" className="py-24 md:py-32 bg-[var(--background)]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="eyebrow text-accent">THE CONCEPT</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                One menu, four regions, one man's journey
              </h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                Born in 1840 in what is now Poland, Emin Pasha traveled through the Ottoman Empire and the Middle East,
                on to Cairo, before eventually becoming governor of Equatoria, a province of what is now South Sudan.
                Equatoria Restaurant's menu retraces that same route, one course at a time—European and Mediterranean
                flavors giving way to the spices and ingredients of East Africa.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-2 italic font-display text-xl text-forest">
                "Our menu is designed to take you on a culinary tour, with dishes inspired by each region Emin Pasha visited."
                <span className="block mt-2 text-xs tracking-[0.1em] uppercase font-sans font-semibold text-muted-foreground">
                  — Chimo Chimoche, General Manager
                </span>
              </blockquote>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg relative group">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Equatoria Restaurant dining room"
                className="w-full object-cover aspect-[4/3] transition-transform duration-[2000ms] group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISH SPOTLIGHT */}
      <section id="signature-dish-spotlight" className="py-24 bg-secondary/20 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-12 items-stretch">
            <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-between space-y-8">
              <div>
                <p className="eyebrow text-accent mb-4">THE SIGNATURE DISH</p>
                <h3 className="font-display text-4xl md:text-5xl text-forest mb-6">Beef Pierogi</h3>
                <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed">
                  A traditional Polish dumpling technique, reinvented with rich Ugandan ingredients. Filled with matoke
                  (green cooking banana), beef, and cheese, then finished with fresh guacamole and katimbang. It is the
                  clearest expression of our culinary philosophy on a single plate—and the dish guests ask for by name.
                </p>
              </div>
              <div>
                <div className="inline-block px-4 py-2 bg-secondary/40 text-forest text-sm font-semibold rounded-md tracking-wider">
                  UGX 55,000
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative min-h-[300px]">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Beef Pierogi plated"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY MENU STRUCTURE */}
      <section id="journey-menu-structure" className="py-24 md:py-32 bg-[var(--background)]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow text-accent">THE MENU</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-forest">
              The journey, course by course
            </h2>
            <p className="mt-4 text-muted-foreground font-light max-w-2xl mx-auto">
              Retrace the travels of Emin Pasha through curated dishes representing the key landmarks of his lifetime.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background border border-border p-8 rounded-lg space-y-4">
              <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">01 · STARTING POINT</div>
              <h3 className="font-display text-2xl text-forest">Poland & Europe</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Where his life began—featuring our signature matoke and beef pierogi alongside European-inspired starters.
              </p>
            </div>
            <div className="bg-background border border-border p-8 rounded-lg space-y-4">
              <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">02 · LEVANT SHORES</div>
              <h3 className="font-display text-2xl text-forest">Ottoman Empire</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Rich, aromatic mezze dishes, grilled items, and spices inspired by his years practicing medicine in the Middle East.
              </p>
            </div>
            <div className="bg-background border border-border p-8 rounded-lg space-y-4">
              <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">03 · EGYPTIAN COURIER</div>
              <h3 className="font-display text-2xl text-forest">Cairo, Egypt</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Spiced tagines, slow-cooked mains, and classic North African influences reflecting his service in Cairo.
              </p>
            </div>
            <div className="bg-background border border-border p-8 rounded-lg space-y-4">
              <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">04 · SOUTHWARD</div>
              <h3 className="font-display text-2xl text-forest">Equatoria</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                A celebration of local Ugandan and East African heritage, fresh lake fish, matoke, and native organic grains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN KITCHENS FEATURE */}
      <section id="open-kitchens-feature" className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-xl shadow-2xl relative group">
              <img
                src="/images/dining/dining-moment.jpg"
                alt="Open studio kitchens in action"
                className="w-full object-cover aspect-[16/9] transition-transform duration-[2000ms] group-hover:scale-103"
              />
            </div>
            <div className="space-y-6">
              <p className="eyebrow text-[var(--color-gold)]">THE THEATRE OF FOOD</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Cooked where you can see it
              </h2>
              <p className="text-lg font-light leading-relaxed opacity-90">
                Our main dining room is built around three open studio kitchens. Sights, sounds, and standard-setting
                culinary techniques are fully integrated into your dining experience—making the preparation of your
                meal as memorable as the flavors themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHEF AND GM STORY */}
      <section id="chef-and-gm-story" className="py-24 bg-[var(--background)]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="eyebrow text-accent">COMMUNITY & CRAFT</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                Built by hand, on purpose
              </h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                In step with Uganda's 'Buy Uganda, Build Uganda' (BUBU) values, Equatoria was constructed and designed
                locally. Every part of the restaurant, from the custom plumbing fixtures to the painted art on the walls,
                was sourced from Ugandan artisans and local suppliers.
              </p>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Under the concept direction of Chef Alvaro and General Manager Chimo Chimoche, the kitchen is staffed
                by a dedicated, passionate crew—the vast majority of whom are proudly local Ugandan hospitality professionals.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg relative group">
              <img
                src="/images/gallery/gallery-image3.jpg"
                alt="Equatoria Restaurant details"
                className="w-full object-cover aspect-[4/3] transition-transform duration-[2000ms] group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOURS & RESERVATIONS */}
      <section id="hours-and-reservations" className="py-24 bg-secondary/20 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-accent mb-4">TIMINGS</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05] mb-10">
                Hours & reservations
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Clock className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest">Restaurant Dining</h4>
                    <p className="text-muted-foreground font-light mt-1">Open daily: 8:00 AM – 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest">Garden Breakfast</h4>
                    <p className="text-muted-foreground font-light mt-1">Served daily: 7:00 AM – 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <p className="eyebrow text-accent mb-6">GET IN TOUCH</p>
                <div className="space-y-4">
                  <a href="tel:+256312264712" className="flex items-center gap-3 text-lg font-light text-foreground hover:text-accent transition-colors">
                    <Phone size={18} className="text-accent" />
                    <span>+256 312 264 712</span>
                  </a>
                  <a href="mailto:restaurant@eminpasha.com" className="flex items-center gap-3 text-lg font-light text-foreground hover:text-accent transition-colors">
                    <Mail size={18} className="text-accent" />
                    <span>restaurant@eminpasha.com</span>
                  </a>
                </div>
              </div>
              <div>
                <a href="mailto:reservations@eminpasha.com" className="btn-primary w-full text-center block">
                  Reserve a table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PLANS (WHAT'S NEXT) */}
      <section id="whats-next-teaser" className="py-24 bg-[var(--background)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 text-center space-y-6">
          <p className="eyebrow text-accent">FUTURE CHAPTERS</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.05]">
            Coming soon to Nakasero
          </h2>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
            Stay tuned as we prepare to unveil the Lima Ceviche & Cocktails Bar (our upcoming South American rooftop concept),
            a brand-new panoramic rooftop lounge, and the Pasha Club—our exclusive community leadership network.
          </p>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-24 bg-secondary/15 border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p className="eyebrow text-accent mb-3">GALLERY</p>
            <h2 className="font-display text-4xl md:text-5xl text-forest">
              Inside Equatoria
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-sm group">
                <img
                  src={img}
                  alt={`Inside Equatoria - image ${i + 1}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="py-24 md:py-32 bg-[var(--color-primary)] text-cream">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            Reserve your table
          </h2>
          <a
            href="mailto:reservations@eminpasha.com"
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
            Reserve now
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
