export function SchemaMarkup({ schema }: { schema: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const BASE_URL = "https://emin-pasha.vercel.app";

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "The Emin Pasha Hotel & Spa",
  "image": `${BASE_URL}/images/gallery/gallery-image.jpg`,
  "description": "A tranquil, historic luxury boutique hotel in the heart of Nakasero, Kampala. Lush gardens, refined suites, world-class dining and spa — personalized luxury.",
  "url": BASE_URL,
  "telephone": "+256 312 280 820",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 27 Akii-Bua Road, Nakasero",
    "addressLocality": "Kampala",
    "addressRegion": "Central",
    "postalCode": "P.O Box 7168",
    "addressCountry": "UG"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250"
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
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
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air Conditioning",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Room Service",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Meeting Rooms",
      "value": true
    }
  ],
  "sameAs": [
    "https://www.facebook.com/theeminpasha",
    "https://www.instagram.com/theeminpasha"
  ]
};

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Equatoria Restaurant at The Emin Pasha Hotel & Spa",
  "image": `${BASE_URL}/images/dining/dining-moment.jpg`,
  "description": "Experience Kampala's finest culinary delights at Equatoria Restaurant. Open for breakfast, dinner, and Sunday lunch.",
  "url": `${BASE_URL}/dining`,
  "telephone": "+256 312 264 712",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 27 Akii-Bua Road, Nakasero",
    "addressLocality": "Kampala",
    "addressRegion": "Central",
    "postalCode": "P.O Box 7168",
    "addressCountry": "UG"
  },
  "servesCuisine": ["International", "African", "Ugandan"],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "22:00"
    }
  ],
  "acceptsReservations": true
};

export const spaSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "The Spa at The Emin Pasha Hotel & Spa",
  "image": `${BASE_URL}/images/spa/spa-moment.jpg`,
  "description": "A sanctuary of relaxation and rejuvenation in the heart of Kampala. Offering massages, facials, and wellness treatments.",
  "url": `${BASE_URL}/spa`,
  "telephone": "+256 312 280 820",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 27 Akii-Bua Road, Nakasero",
    "addressLocality": "Kampala",
    "addressRegion": "Central",
    "postalCode": "P.O Box 7168",
    "addressCountry": "UG"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ]
};

export function getRoomSchema(room: {
  name: string;
  description: string;
  image: string;
  price: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Suite",
    "name": room.name,
    "description": room.description,
    "image": `${BASE_URL}${room.image}`,
    "url": `${BASE_URL}/rooms`,
    "priceRange": room.price,
    "subjectOf": {
      "@type": "Hotel",
      "name": "The Emin Pasha Hotel & Spa",
      "url": BASE_URL
    }
  };
}
