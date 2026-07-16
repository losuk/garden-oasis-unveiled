import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Kampala Travel Blog — Guides & Stories by The Emin Pasha Hotel" },
      { name: "description", content: "Explore the best things to do in Kampala, Ugandan wellness traditions, and local travel tips from Nakasero's finest luxury hotel." }
    ]
  }),
  component: BlogIndex,
});

const posts = [
  {
    slug: "things-to-do-kampala",
    title: "10 Best Things to Do in Kampala",
    excerpt: "From cultural landmarks to vibrant markets, discover the hidden gems of Uganda's capital city, all just minutes from our hotel in Nakasero.",
    image: "/images/gallery/gallery-image2.jpg",
    date: "July 12, 2026",
  },
  {
    slug: "ugandan-wellness-traditions",
    title: "Ugandan Wellness Traditions at Our Spa",
    excerpt: "Experience holistic healing with botanical treatments drawn from deep-rooted local traditions in our serene fern gardens.",
    image: "/images/spa/spa-moment2.jpg",
    date: "July 5, 2026",
  }
];

function BlogIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal"
        title="Stories from Kampala"
        intro="Guides, news, and insights from The Emin Pasha Hotel."
        image="/images/gallery/gallery-image11.jpg"
      />
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6">
                <img src={post.image} alt={post.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-sage text-sm mb-3 tracking-widest uppercase">{post.date}</p>
              <h3 className="font-display text-3xl text-forest mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
