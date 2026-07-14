import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-cream">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12 py-16 md:py-24">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-5 lg:items-start">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="mb-2">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo.webp"
                  alt="The Emin Pasha"
                  className="h-12 md:h-14 brightness-0 invert"
                />
              </Link>
            </div>
            <span className="block text-xs md:text-sm font-sans tracking-[0.3em] uppercase opacity-70">
              Hotel &amp; Spa
            </span>
            <p className="mt-6 md:mt-8 max-w-sm text-sm leading-relaxed font-light opacity-90">
              A tranquil garden sanctuary hidden in the heart of Nakasero, Kampala — where colonial
              heritage meets refined, contemporary hospitality.
            </p>
            <div className="mt-6 md:mt-8 flex gap-4">
              <a
                href="https://instagram.com/eminpashahotelandspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cream/30 flex items-center justify-center transition-all hover:bg-accent hover:border-accent"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/eminpashahotelandspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cream/30 flex items-center justify-center transition-all hover:bg-accent hover:border-accent"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://x.com/theeminpasha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cream/30 flex items-center justify-center transition-all hover:bg-accent hover:border-accent"
                aria-label="X (Twitter)"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow text-accent">Explore</h4>
            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-sm font-light opacity-90">
              <li>
                <Link to="/rooms" className="link-underline">
                  Rooms &amp; Suites
                </Link>
              </li>
              <li>
                <Link to="/dining/equatoria" className="link-underline">
                  Equatoria Restaurant
                </Link>
              </li>
              <li>
                <Link to="/spa" className="link-underline">
                  Spa &amp; Wellness
                </Link>
              </li>
              <li>
                <Link to="/pool" className="link-underline">
                  Swimming Pool
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Conferences &amp; Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="link-underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="eyebrow text-accent">About</h4>
            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-sm font-light opacity-90">
              <li>
                <Link to="/about" className="link-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/#book" className="link-underline">
                  Offers
                </a>
              </li>
              <li>
                <a href="#careers" className="link-underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#faqs" className="link-underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Reservations */}
          <div>
            <h4 className="eyebrow text-accent">Reservations</h4>
            <address className="mt-4 md:mt-6 not-italic text-sm leading-relaxed font-light opacity-90">
              27 Akii Bua Road
              <br />
              Nakasero, Kampala
              <br />
              Uganda
            </address>
            <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-sm font-light opacity-90">
              <a href="tel:+256312264712" className="block link-underline w-fit">
                +256 312 264 712
              </a>
              <a
                href="https://wa.me/256764042543"
                target="_blank"
                rel="noopener noreferrer"
                className="block link-underline w-fit"
              >
                WhatsApp: +256 764 042 543
              </a>
              <a href="mailto:reservations@eminpasha.com" className="block link-underline w-fit">
                reservations@eminpasha.com
              </a>
            </div>
            <p className="mt-3 md:mt-4 text-xs opacity-70">24-hour telephone assistance</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
        <div className="h-px w-full bg-[rgba(220,201,180,0.18)]" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-70">
        <p>© 2026 The Emin Pasha Hotel &amp; Spa. Kampala, Uganda.</p>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <a href="/privacy-policy" className="link-underline">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="/cookies-policy" className="link-underline">
            Cookies Policy
          </a>
          <span>•</span>
          <a href="/legal-notice" className="link-underline">
            Legal Notice
          </a>
        </div>
      </div>
    </footer>
  );
}
