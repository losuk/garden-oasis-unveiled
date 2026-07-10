import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { rooms } from "../rooms";

export const Route = createFileRoute("/rooms/$roomId")({
  head: ({ params }) => {
    const room = rooms.find((r) => r.id === params.roomId);
    return {
      meta: [
        { title: room ? `${room.name} — The Emin Pasha Hotel & Spa` : "Room Not Found" },
        { name: "description", content: room ? room.blurb : "Room not found" },
      ],
    };
  },
  component: RoomPage,
});

function RoomPage() {
  const { roomId } = Route.useParams();
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return (
      <SiteLayout>
        <section className="py-32 md:py-48">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-12 text-center">
            <p className="eyebrow">Not Found</p>
            <h1 className="mt-6 font-display text-4xl md:text-6xl text-forest">
              Room Not Found
            </h1>
            <div className="mt-10">
              <Link to="/rooms" className="btn-primary">
                Back to Rooms
              </Link>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Rooms & Suites"
        title={room.name}
        intro={room.blurb}
        image={room.img}
      />

      {/* Room Gallery */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="eyebrow text-center mb-12">Gallery</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {room.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`${room.name} - Image ${i + 1}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p className="eyebrow">{room.price}</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                {room.name}
              </h2>
              <div className="mt-6 flex gap-6 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                <span>{room.size}</span>
                <span className="w-px bg-border" />
                <span>{room.view}</span>
              </div>
              <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground">
                {room.blurb}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Reserve
                </a>
                <Link to="/contact" className="btn-outline">
                  Enquire
                </Link>
              </div>
            </div>
            <div className="bg-secondary/40 p-8 md:p-12">
              <p className="eyebrow mb-6">Amenities</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Complimentary Wi-Fi
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Air conditioning
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Mini bar
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  In-room safe
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Flat-screen TV
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Coffee & tea facilities
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  En-suite bathroom with shower
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Bathrobes & slippers
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Room service available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Other Rooms</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest max-w-2xl leading-[1.05]">
                Explore our other accommodations
              </h2>
            </div>
            <Link to="/rooms" className="link-underline text-forest text-[11px] tracking-[0.28em] uppercase">
              View all rooms
            </Link>
          </div>

          <div className="grid gap-x-10 gap-y-24 md:grid-cols-3">
            {rooms
              .filter((r) => r.id !== room.id)
              .slice(0, 3)
              .map((r) => (
                <Link
                  key={r.id}
                  to={`/rooms/${r.id}` as any}
                  className="group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-8">
                    <p className="eyebrow">{r.price}</p>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl text-forest">
                      {r.name}
                    </h3>
                    <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground max-w-md">
                      {r.blurb}
                    </p>
                    <span className="mt-6 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest">
                      View Room
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
