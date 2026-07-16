import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { rooms, amenityIcons } from "../rooms";

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
            <h1 className="mt-6 font-display text-4xl md:text-6xl text-forest">Room Not Found</h1>
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

  // Get adjacent rooms by price
  const roomIndex = rooms.findIndex(r => r.id === room.id);
  const relatedRooms = [
    roomIndex > 0 ? rooms[roomIndex - 1] : null,
    roomIndex < rooms.length - 1 ? rooms[roomIndex + 1] : null,
  ].filter((r): r is typeof rooms[0] => r !== null);

  return (
    <SiteLayout>
      <PageHero eyebrow="Rooms & Suites" title={room.name} intro={room.blurb} image={room.img} />

      {/* Image Gallery */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="eyebrow text-center mb-6">Gallery</p>
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

      {/* Two-Column Body */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column - Description & Specs */}
            <div className="md:col-span-2">
              <p className="eyebrow text-[var(--color-terracotta-500)]">{room.name.toUpperCase()}</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
                {room.blurb.split('.')[0] + '.'}
              </h2>

              <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
                {room.blurb}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {room.size && (
                  <div>
                    <p className="eyebrow mb-2">Size</p>
                    <p className="text-foreground">{room.size}</p>
                  </div>
                )}
                {room.bedType && (
                  <div>
                    <p className="eyebrow mb-2">Bed type</p>
                    <p className="text-foreground">{room.bedType}</p>
                  </div>
                )}
                {room.view && (
                  <div>
                    <p className="eyebrow mb-2">View</p>
                    <p className="text-foreground">{room.view}</p>
                  </div>
                )}
                {room.maxOccupancy && (
                  <div>
                    <p className="eyebrow mb-2">Max guests</p>
                    <p className="text-foreground">{room.maxOccupancy}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sticky Booking Card */}
            <div className="md:sticky md:top-16 self-start">
              <div className="bg-[var(--color-parchment-100)] border border-[var(--color-parchment-300)] p-6 rounded">
                <p className="eyebrow mb-4">Book this room</p>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">From</p>
                  <p className="text-4xl font-display text-[var(--color-terracotta-500)]">{room.price}</p>
                  <p className="text-xs text-muted-foreground mt-2">Taxes and fees calculated at checkout.</p>
                </div>
                <a
                  href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <h3 className="font-display text-3xl md:text-4xl text-forest mb-8">In this room</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {room.amenities?.map((amenity, idx) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
              return (
                <div key={idx} className="flex items-center gap-3">
                  {Icon && <Icon className="w-5 h-5 text-forest" />}
                  <span className="text-foreground">{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="eyebrow">You may also like</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest max-w-2xl leading-[1.05]">
                Explore adjacent rooms
              </h2>
            </div>
            <Link
              to="/rooms"
              className="link-underline text-forest text-[11px] tracking-[0.28em] uppercase"
            >
              View all rooms
            </Link>
          </div>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {relatedRooms.map((r) => (
              <Link key={r.id} to={`/rooms/${r.id}` as any} className="group">
                <div className="overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <p className="eyebrow">{r.price}</p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl text-forest">{r.name}</h3>
                  <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground max-w-md">
                    {r.blurb}
                  </p>
                  <span className="mt-6 inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-forest">
                    View details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-16 md:py-20 bg-[var(--color-garden-green-700)]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-cream)] mb-6">
            Ready to book?
          </h2>
          <a
            href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-forest)]"
          >
            Book now
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
