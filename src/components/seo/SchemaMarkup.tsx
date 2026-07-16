export function SchemaMarkup({ schema }: { schema: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "The Emin Pasha Hotel & Spa",
  "image": "https://emin-pasha.vercel.app/images/gallery/gallery-image.jpg",
  "description": "A tranquil, historic luxury boutique hotel in the heart of Nakasero, Kampala.",
  "url": "https://emin-pasha.vercel.app",
  "telephone": "+256 312 280 820",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 27 Akii-Bua Road, Nakasero",
    "addressLocality": "Kampala",
    "addressRegion": "Central",
    "postalCode": "P.O Box 7168",
    "addressCountry": "UG"
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Swimming Pool",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Spa",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Restaurant",
      "value": true
    }
  ]
};
