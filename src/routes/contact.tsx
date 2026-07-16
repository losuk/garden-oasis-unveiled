import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — The Emin Pasha Hotel, Kampala" },
      {
        name: "description",
        content:
          "Reach our reservations team in Kampala. Book your stay at The Emin Pasha luxury boutique hotel on Akii Bua Road, Nakasero. Call us or email today.",
      },
      { property: "og:title", content: "Contact — The Emin Pasha" },
      { property: "og:description", content: "Reach our reservations team in Kampala." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero title="We would be delighted to welcome you." image="/images/gallery/gallery-image1.jpg" />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Reservations</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-forest leading-[1.05]">
              A private conversation, always.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground max-w-md">
              Every stay at The Emin Pasha is arranged personally by our reservations team. Please
              reach out — we'll respond within a few hours.
            </p>

            <div className="mt-12 space-y-8 text-sm">
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-3 font-light text-muted-foreground leading-relaxed">
                  Plot 27 Akii-Bua Road
                  <br />
                  Nakasero, Kampala
                  <br />
                  Uganda
                </p>
              </div>
              <div>
                <p className="eyebrow">Telephone</p>
                <a
                  href="tel:+256312264712"
                  className="mt-3 inline-block link-underline text-forest font-light"
                >
                  +256 312 264 712
                </a>
              </div>
              <div>
                <p className="eyebrow">WhatsApp</p>
                <a
                  href="https://wa.me/256764042543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block link-underline text-forest font-light"
                >
                  +256 764 042 543
                </a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href="mailto:reservations@eminpasha.com"
                  className="mt-3 inline-block link-underline text-forest font-light"
                >
                  reservations@eminpasha.com
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-secondary/40 p-8 md:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we'll be in touch shortly.");
            }}
          >
            <p className="eyebrow">Enquire</p>
            <div className="mt-8 space-y-6">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Arrival date" name="arrival" type="date" />
              <Field label="Guests" name="guests" type="number" defaultValue={2} />
              <div>
                <label className="eyebrow">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm font-light focus:outline-none focus:border-forest transition-colors resize-none"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-10 w-full">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.756285856942!2d32.57608431525048!3d0.3184693997705481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc80fa0f5dbf%3A0x6a1a7f0e6e76878f!2sEmin%20Pasha%20Hotel!5e0!3m2!1sen!2sug!4v1689255269785!5m2!1sen!2sug"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location for The Emin Pasha Hotel Kampala"
        ></iframe>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string | number;
}) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm font-light focus:outline-none focus:border-forest transition-colors"
      />
    </div>
  );
}
