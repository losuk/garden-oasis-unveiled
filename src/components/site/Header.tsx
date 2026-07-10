import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/rooms", label: "Rooms & Suites" },
  { to: "/dining", label: "Dining" },
  { to: "/spa", label: "Spa & Wellness" },
  // { to: "/experiences", label: "Experiences" },
  { to: "https://eminpasha.netlify.app", label: "Menu", external: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
        <Link
          to="/"
          className={`font-display text-xl leading-none tracking-tight transition-colors ${
            solid ? "text-forest" : "text-cream"
          }`}
        >
          <span className="block text-[10px] font-sans tracking-[0.35em] uppercase mb-1 opacity-80">
            The
          </span>
          <span className="block text-2xl">Emin Pasha</span>
          <span className="block text-[10px] font-sans tracking-[0.35em] uppercase mt-1 opacity-80">
            Hotel &amp; Spa
          </span>
        </Link>

        <nav
          className={`hidden lg:flex items-center gap-9 text-[11px] tracking-[0.22em] uppercase transition-colors ${
            solid ? "text-forest" : "text-cream"
          }`}
        >
          {nav.map((item) => (
            item.external ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline opacity-90 hover:opacity-100"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline opacity-90 hover:opacity-100"
                activeProps={{ className: "opacity-100" }}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-3 text-[11px] tracking-[0.28em] uppercase font-medium transition-all duration-500 border ${
              solid
                ? "bg-forest text-cream border-forest hover:bg-transparent hover:text-forest"
                : "bg-cream/10 text-cream border-cream/60 hover:bg-cream hover:text-forest"
            }`}
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              solid ? "text-forest" : "text-cream"
            }`}
          >
            <span
              className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[600px]" : "max-h-0"
        } bg-cream border-t border-border`}
      >
        <nav className="flex flex-col px-6 py-8 gap-5 text-[13px] tracking-[0.2em] uppercase text-forest">
          {nav.map((item) => (
            item.external ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.to} to={item.to} className="link-underline w-fit">
                {item.label}
              </Link>
            )
          ))}
          <a
            href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-fit"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
