// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { SiteLayout, PageHero } from "@/components/site/Layout";

// // Define offer categories
// const categories = ["All", "Room Offers", "Spa Packages", "Dining Experiences"] as const;
// type OfferCategory = typeof categories[number];

// // Define offers data
// const offers = [
//   {
//     id: "stay-longer-save-more",
//     category: "Room Offers",
//     title: "Stay Longer, Save More",
//     description: "Book 3+ nights and enjoy 15% off your stay with complimentary breakfast.",
//     priceOrValue: "15% off",
//     terms: "Valid through [date] · Subject to availability",
//     image: "/images/gallery/gallery-image2.jpg",
//   },
//   {
//     id: "spa-stay-package",
//     category: "Spa Packages",
//     title: "Spa & Stay Package",
//     description: "One 60-minute massage treatment included with every night in a Deluxe Room or above.",
//     priceOrValue: "Spa treatment included",
//     terms: "Valid through [date] · Subject to availability",
//     image: "/images/gallery/gallery-image4.jpg",
//   },
//   {
//     id: "garden-dinner-experience",
//     category: "Dining Experiences",
//     title: "Garden Dinner Experience",
//     description: "Exclusive private garden dinner for two, with a set menu by our Equatoria chef.",
//     priceOrValue: "Dinner included",
//     terms: "Valid through [date] · Subject to availability",
//     image: "/images/dining/dining-moment.jpg",
//   },
//   {
//     id: "early-bird-rate",
//     category: "Room Offers",
//     title: "Early Bird Rate",
//     description: "Book 21+ days in advance and unlock our best available rate with free room upgrade.",
//     priceOrValue: "Best available rate",
//     terms: "Valid through [date] · Subject to availability",
//     image: "/images/gallery/gallery-image9.jpg",
//   },
// ];

// export const Route = createFileRoute("/offers")({
//   head: () => ({
//     meta: [
//       { title: "Offers — The Emin Pasha Hotel & Spa" },
//       {
//         name: "description",
//         content:
//           "Seasonal rates, packages, and experiences worth planning around.",
//       },
//     ],
//   }),
//   component: OffersPage,
// });

// function OffersPage() {
//   const [activeCategory, setActiveCategory] = useState<OfferCategory>("All");

//   // Filter offers by category
//   const filteredOffers = activeCategory === "All"
//     ? offers
//     : offers.filter((offer) => offer.category === activeCategory);

//   return (
//     <SiteLayout>
//       {/* Hero */}
//       <PageHero
//         eyebrow="OFFERS"
//         title="A few good reasons to stay a little longer"
//         intro="Seasonal rates, packages, and experiences worth planning around."
//         image="/images/gallery/gallery-image3.jpg"
//       />

//       {/* Category Filter Bar */}
//       <section className="py-6 border-b border-border bg-background">
//         <div className="mx-auto max-w-[1500px] px-4 md:px-6 lg:px-12">
//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                   activeCategory === cat
//                     ? "bg-accent text-cream"
//                     : "border border-border text-foreground hover:border-accent hover:text-accent"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Offer Card Grid */}
//       <section className="py-16">
//         <div className="mx-auto max-w-[1500px] px-4 md:px-6 lg:px-12">
//           <div className="grid gap-8 md:grid-cols-2">
//             {filteredOffers.map((offer) => (
//               <div
//                 key={offer.id}
//                 className="border border-border rounded-xl overflow-hidden bg-background"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={offer.image}
//                     alt={offer.title}
//                     className="w-full aspect-[3/2] object-cover transition-transform duration-400 hover:scale-103"
//                   />
//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <span className="text-xs font-medium tracking-wider uppercase text-accent">
//                       {offer.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="font-display text-2xl md:text-3xl text-forest mb-3">
//                     {offer.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-4">
//                     {offer.description}
//                   </p>
//                   <p className="text-accent font-semibold mb-4">
//                     {offer.priceOrValue}
//                   </p>
//                   <p className="text-xs text-muted-foreground mb-6">
//                     {offer.terms}
//                   </p>
//                   <a
//                     href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-primary inline-block"
//                   >
//                     View offer
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Tie-in */}
//       <section className="py-16 bg-secondary">
//         <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-12 text-center">
//           <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
//             Be the first to know
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
//             Sign up for early access to seasonal offers and packages.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-full border border-border bg-background"
//             />
//             <button className="btn-primary">Sign up</button>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Band */}
//       <section className="py-20 md:py-28 bg-forest">
//         <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12 text-center">
//           <h2 className="font-display text-3xl md:text-5xl text-cream mb-10">
//             Ready to book?
//           </h2>
//           <a
//             href="https://theeminpashahotelandspa.ihotelier.com/book/dates-of-stay"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest"
//           >
//             Check availability
//           </a>
//         </div>
//       </section>
//     </SiteLayout>
//   );
// }
