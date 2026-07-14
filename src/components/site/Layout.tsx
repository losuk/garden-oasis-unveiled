import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(42,27,20,0.5)] via-[rgba(42,33,27,0.2)] to-[rgba(74,20,20,0.55)]" />
      <div className="relative z-10 flex h-full items-end pb-20">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 text-cream animate-fade-up">
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed opacity-90">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
