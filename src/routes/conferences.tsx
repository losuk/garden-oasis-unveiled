import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

const galleryImages = [
  "/images/conference/conference.jpg",
  "/images/conference/conference-2.jpg",
  "/images/conference/conference-3.jpg",
  "/images/conference/conference-4.jpg",
];

export const Route = createFileRoute("/conferences")({
  head: () => ({
    meta: [
      { title: "Conferences & Events — The Emin Pasha Hotel & Spa" },
      {
        name: "description",
        content:
          "Host your event in a tranquil garden sanctuary in the heart of Kampala.",
      },
      { property: "og:title", content: "Conferences & Events — The Emin Pasha" },
      {
        property: "og:description",
        content: "Conference and event spaces in Kampala's garden sanctuary.",
      },
    ],
  }),
  component: ConferencesPage,
});

function ConferencesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        eyebrow="MEETINGS & CELEBRATIONS"
        title="Conferences & Events"
        intro="Inspirational spaces for meetings, private dining and celebrations."
        image="/images/conference/conference.jpg"
      />

      {/* HOST WITH DISTINCTION */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-accent">WELCOME TO NAKASERO</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                Host with distinction in Nakasero
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                At Emin Pasha, we understand that success demands the right setting.
                Whether you are planning a small executive meeting, a product launch,
                a wedding celebration or a special family gathering, we have an
                inspiring space for you.
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                From small boardrooms to large versatile banquet halls, our
                professional events team is on hand to ensure that everything runs
                smoothly and that your event is memorable for all the right reasons.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/conference/conference-2.jpg"
                alt="Emin Pasha building"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p className="eyebrow text-accent">OUR SPACES</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              See our venues
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`Conference space - ${i + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOM CAPACITIES */}
      {/* <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p className="eyebrow text-accent">VENUE SPECIFICATIONS</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              Room Capacities & Specifications
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
              Explore our spaces and find the ideal configuration for your guests!
            </p>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="text-left p-4 font-display text-lg text-forest">
                    VENUE NAME
                  </th>
                  <th className="text-center p-4 font-display text-lg text-forest">
                    AREA (M²)
                  </th>
                  <th className="text-center p-4 font-display text-lg text-forest">
                    THEATRE STYLE
                  </th>
                  <th className="text-center p-4 font-display text-lg text-forest">
                    U-SHAPE STYLE
                  </th>
                  <th className="text-center p-4 font-display text-lg text-forest">
                    BANQUET STYLE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Malaika Ballroom (The Obwandeyi Hall)</td>
                  <td className="p-4 text-center">192 m²</td>
                  <td className="p-4 text-center">84 guests</td>
                  <td className="p-4 text-center">50 guests</td>
                  <td className="p-4 text-center">120 guests</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">The Boardroom</td>
                  <td className="p-4 text-center">30 m²</td>
                  <td className="p-4 text-center">12 guests</td>
                  <td className="p-4 text-center">12 guests</td>
                  <td className="p-4 text-center">20 guests</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">The Verandas</td>
                  <td className="p-4 text-center">90 m²</td>
                  <td className="p-4 text-center">70 guests</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">80 guests</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-border rounded-xl p-8 bg-background">
            <h3 className="font-display text-2xl text-forest mb-6">
              Included Technical & Event Services:
            </h3>
            <ul className="text-base font-light leading-relaxed text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-accent font-medium">•</span> High speed dedicated WiFi
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-medium">•</span> Complimentary standard LCD projector & screen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-medium">•</span> Whiteboard or flipchart & markers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-medium">•</span> Still & sparkling mineral water & mint welcome drink
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-medium">•</span> Dedicated events coordinator & technical support on request
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* REQUEST A PROPOSAL */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow text-accent">READY TO PLAN</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05] mb-8">
                Request a Proposal
              </h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-8">
                Share the details of your upcoming meeting or event with us. Our
                events team will review your requirements and respond within 24 hours
                with a bespoke proposal and availability.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-forest">Email:</span> events@eminpasha.com
                </p>
                <p>
                  <span className="font-medium text-forest">Phone:</span> +256 312 264 712
                </p>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-border bg-background text-foreground"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-border bg-background text-foreground"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2">
                      EVENT DATE
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-border bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2">
                      ESTIMATED GUEST COUNT
                    </label>
                    <select className="w-full p-3 border border-border bg-background text-foreground">
                      <option value="">Select guest count</option>
                      <option value="1-20">1-20</option>
                      <option value="21-50">21-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101+">101+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-muted-foreground mb-2">
                    EVENT TYPE
                  </label>
                  <select className="w-full p-3 border border-border bg-background text-foreground">
                    <option value="">Select type</option>
                    <option value="conference">Conference/Business</option>
                    <option value="wedding">Wedding/Celebration</option>
                    <option value="private-dining">Private Dining</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light text-muted-foreground mb-2">
                    ADDITIONAL NOTES
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-border bg-background text-foreground"
                    placeholder="Catering preferences, room setup, AV needs, etc."
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
