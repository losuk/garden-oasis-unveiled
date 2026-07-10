import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest text-cream/90">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl leading-tight text-cream">
              The Emin Pasha
              <span className="block text-sm font-sans tracking-[0.3em] uppercase mt-2 opacity-70">
                Hotel &amp; Spa
              </span>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed font-light opacity-80">
              A tranquil garden sanctuary hidden in the heart of Nakasero,
              Kampala — where colonial heritage meets refined, contemporary
              hospitality.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-gold-soft">Visit</h4>
            <address className="mt-6 not-italic text-sm leading-relaxed font-light opacity-80">
              27 Akii Bua Road<br />
              Nakasero, Kampala<br />
              Uganda
            </address>
          </div>

          <div>
            <h4 className="eyebrow text-gold-soft">Reservations</h4>
            <div className="mt-6 space-y-2 text-sm font-light opacity-80">
              <a href="tel:+256414236977" className="block link-underline w-fit">
                +256 414 236 977
              </a>
              <a
                href="mailto:reservations@eminpasha.com"
                className="block link-underline w-fit"
              >
                reservations@eminpasha.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-gold-soft">Explore</h4>
            <ul className="mt-6 space-y-3 text-sm font-light opacity-80">
              <li><Link to="/rooms" className="link-underline">Rooms &amp; Suites</Link></li>
              <li><Link to="/dining" className="link-underline">Dining</Link></li>
              <li><Link to="/spa" className="link-underline">Spa &amp; Wellness</Link></li>
              <li><Link to="/experiences" className="link-underline">Experiences</Link></li>
              <li><Link to="/gallery" className="link-underline">Gallery</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-cream/15 pt-8 md:flex-row md:items-center md:justify-between text-[11px] tracking-[0.22em] uppercase opacity-60">
          <p>© {new Date().getFullYear()} The Emin Pasha Hotel &amp; Spa</p>
          <p>Kampala · Uganda</p>
        </div>
      </div>
    </footer>
  );
}
