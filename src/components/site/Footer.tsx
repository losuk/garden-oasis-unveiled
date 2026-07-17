import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Sparkles } from "lucide-react";

function BrandMark() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#1a1a1a]">
      <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="40" y="52" textAnchor="middle" fontSize="42" fontWeight="700" fontFamily="serif" fill="currentColor">E</text>
      <Sparkles x="58" y="22" size="14" fill="currentColor" />
      <Sparkles x="58" y="58" size="10" fill="currentColor" />
    </svg>
  );
}

function DistortedWordmark() {
  const letters = [
    { char: "E", rotate: -3, skewX: 5, translateY: 0 },
    { char: "M", rotate: 2, skewX: -4, translateY: 4 },
    { char: "I", rotate: -1, skewX: 3, translateY: -2 },
    { char: "N", rotate: 3, skewX: -2, translateY: 2 },
    { char: "P", rotate: -2, skewX: 4, translateY: -3 },
    { char: "A", rotate: 4, skewX: -3, translateY: 3 },
    { char: "S", rotate: -4, skewX: 2, translateY: -1 },
    { char: "H", rotate: 1, skewX: -5, translateY: 2 },
    { char: "A", rotate: 3, skewX: 3, translateY: -2 },
  ];

  return (
    <div className="relative select-none">
      <div className="flex items-end overflow-hidden">
        {letters.slice(0, 4).map((letter, i) => (
          <span
            key={i}
            className="font-black tracking-tighter"
            style={{
              display: "inline-block",
              transform: `rotate(${letter.rotate}deg) skewX(${letter.skewX}deg) translateY(${letter.translateY}px)`,
              fontSize: "clamp(4rem, 15vw, 12rem)",
              lineHeight: "0.85",
              color: "#F2EEE3",
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>
      <div className="flex items-end overflow-hidden -mt-4">
        {letters.slice(4).map((letter, i) => (
          <span
            key={i}
            className="font-black tracking-tighter"
            style={{
              display: "inline-block",
              transform: `rotate(${letter.rotate}deg) skewX(${letter.skewX}deg) translateY(${letter.translateY}px)`,
              fontSize: "clamp(4rem, 15vw, 12rem)",
              lineHeight: "0.85",
              color: "#F2EEE3",
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#efe6da] text-[#1a1a1a] border-t border-[rgba(0,0,0,0.08)]">
      <div className="relative border-l border-r border-[rgba(0,0,0,0.08)] mx-auto max-w-[1600px] px-6 lg:px-12 py-16 lg:py-20">
        {/* Top-right brand mark */}
        <div className="absolute top-8 right-6 lg:right-12">
          <BrandMark />
        </div>

        {/* Hero logo */}
        <div className="mb-16 lg:mb-20 flex justify-center">
          <img
            src="/images/logo.webp"
            alt="The Emin Pasha"
            className="h-32 md:h-40 lg:h-48"
          />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Explore */}
          <div>
            <h4 className="font-bold uppercase text-[#1a1a1a] text-base mb-4">EXPLORE</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rooms" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  ROOMS & SUITES
                </Link>
              </li>
              <li>
                <Link to="/dining" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  DINING
                </Link>
              </li>
              <li>
                <Link to="/spa" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  SPA & WELLNESS
                </Link>
              </li>
              <li>
                <Link to="/pool" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  SWIMMING POOL
                </Link>
              </li>
              <li>
                <Link to="/conferences" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  CONFERENCES & EVENTS
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  GALLERY
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold uppercase text-[#1a1a1a] text-base mb-4">INFO</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/offers" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  OFFERS
                </Link>
              </li>
              <li>
                <a href="#careers" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="#faqs" className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                  FAQS
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold uppercase text-[#1a1a1a] text-base mb-4">SOCIALS</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/eminpashahotelandspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/eminpashahotelandspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors flex items-center gap-2"
                >
                  <Facebook size={16} />
                  FACEBOOK
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/theeminpasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors flex items-center gap-2"
                >
                  <Twitter size={16} />
                  X.COM
                </a>
              </li>
            </ul>
          </div>

          {/* Hotel */}
          <div>
            <h4 className="font-bold uppercase text-[#1a1a1a] text-base mb-4">HOTEL</h4>
            <address className="not-italic space-y-3">
              <a href="mailto:reservations@eminpasha.com" className="block uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                RESERVATIONS@EMINPASHA.COM
              </a>
              <a href="tel:+256312264712" className="block uppercase text-sm text-[rgba(26,26,26,0.85)] hover:text-[#1a1a1a] transition-colors">
                +256 312 264 712
              </a>
              <p className="uppercase text-sm text-[rgba(26,26,26,0.85)]">
                PLOT 27 AKII-BUA ROAD,<br />
                NAKASERO, KAMPALA<br />
                UGANDA
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(0,0,0,0.08)] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="uppercase text-xs tracking-[0.3em] text-[rgba(26,26,26,0.6)]">
            COPYRIGHT © 2026
          </p>
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 80 80" className="text-[rgba(26,26,26,0.6)]">
              <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="40" y="52" textAnchor="middle" fontSize="42" fontWeight="700" fontFamily="serif" fill="currentColor">E</text>
            </svg>
            <p className="uppercase text-xs text-[rgba(26,26,26,0.6)]">
              WE ARE <span className="font-bold text-[#1a1a1a]">EMIN PASHA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
