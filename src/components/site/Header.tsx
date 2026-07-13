import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const primaryNav = [
  {
    to: "/rooms",
    label: "Rooms",
    hasDropdown: true,
    children: [
      { label: "Standard Room", to: "/rooms/standard-room" },
      { label: "Deluxe Room", to: "/rooms/deluxe-room" },
      { label: "Deluxe Suite", to: "/rooms/deluxe-suite" },
      { label: "Superior Suite", to: "/rooms/superior-suite" },
      { label: "Two-Bedroom Apartment", to: "/rooms/two-bedroom-apartment" },
    ],
  },
  { to: "/dining", label: "Dining", hasDropdown: false },
  {
    to: "/spa",
    label: "Spa & Wellness",
    hasDropdown: true,
    children: [
      { label: "Spa", to: "/spa" },
      { label: "Swimming Pool", to: "/spa" },
    ],
  },
  { to: "/gallery", label: "Gallery", hasDropdown: false },
  { to: "/offers", label: "Offers", hasDropdown: false },
  { to: "/about", label: "About", hasDropdown: false },
  { to: "/contact", label: "Contact", hasDropdown: false },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const solid = scrolled || open;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-250 ${
        solid ? "bg-cream/96 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-12 h-[64px] lg:h-[72px]">
        <Link
          to="/"
          className={`font-display text-lg leading-none tracking-tight transition-colors ${
            solid ? "text-foreground" : "text-cream"
          }`}
        >
          The Emin Pasha
        </Link>

        <nav
          className={`hidden lg:flex items-center gap-7 text-sm transition-colors ${
            solid ? "text-foreground" : "text-cream"
          }`}
        >
          {primaryNav.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to as any}
                className="flex items-center gap-1 opacity-90 hover:opacity-100"
                activeProps={{ className: "opacity-100" }}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} />}
              </Link>
              {item.hasDropdown && item.children && (
                <div className="absolute top-full left-0 mt-2 bg-cream border border-border rounded-sm shadow-lg py-3 px-4 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to as any}
                      className="block py-1 text-sm text-foreground hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+256312264712"
            className={`hidden lg:flex items-center gap-2 text-sm transition-colors ${
              solid ? "text-foreground" : "text-cream"
            }`}
          >
            +256 312 264 712
          </a>
          <a
            href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-sm"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#661818";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "var(--primary)";
            }}
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              solid ? "text-foreground" : "text-cream"
            }`}
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-forest flex flex-col">
          {/* Close button at top right */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-cream"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-4 md:px-6 py-16 gap-5 h-full">
            <div className="flex flex-col gap-5 text-3xl md:text-2xl font-display text-cream flex-grow">
              {primaryNav.map((item) => (
                <div key={item.to}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.to ? null : item.to)}
                        className="flex items-center gap-2 link-underline w-fit"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${openDropdown === item.to ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.to && (
                        <div className="mt-3 ml-4 flex flex-col gap-3 text-xl">
                          {item.children?.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to as any}
                              className="text-cream/80 hover:text-cream transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to as any}
                      className="link-underline w-fit"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <a
              href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light w-full text-center mt-8"
              style={{
                borderColor: "var(--cream)",
                color: "var(--cream)",
              }}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
