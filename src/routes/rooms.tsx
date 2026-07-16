import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  ThermometerSnowflake,
  Wifi,
  Tv,
  Coffee,
  Sofa,
  Bath,
  Refrigerator,
  Utensils,
  Notebook,
} from "lucide-react";

export const Route = createFileRoute("/rooms")({
  component: RoomsLayout,
  head: () => ({
    meta: [
      { title: "Luxury Rooms & Suites — The Emin Pasha Hotel Kampala" },
      { name: "description", content: "Stay in Nakasero's finest luxury boutique hotel. Explore our spacious suites and elegant rooms set amid lush gardens in the heart of Kampala." }
    ]
  })
});

function RoomsLayout() {
  return <Outlet />;
}

export const amenityIcons = {
  "A/C": ThermometerSnowflake,
  "Wi-Fi": Wifi,
  TV: Tv,
  Minibar: Refrigerator,
  Desk: Notebook,
  Bath: Bath,
  "Coffee maker": Coffee,
  "Sitting area": Sofa,
  Kitchenette: Utensils,
};

export const rooms = [
  {
    id: "standard-room",
    img: "/images/rooms/standard-room.jpg",
    name: "Standard Room",
    size: "27 m²",
    bedType: "2 Twin / King-size (configurable)",
    view: "Garden view",
    maxOccupancy: 2,
    price: "$125 / night",
    blurb: "Experience a peaceful start to every morning at The Emin Pasha Hotel. Our Standard Room offers a cozy, quiet sanctuary featuring natural light and stunning garden-facing windows. Nestled in the heart of Nakasero, Kampala, this room provides the perfect blend of boutique luxury and historic charm, ideal for both business travelers and leisure guests seeking a serene getaway.",
    amenities: ["A/C", "Wi-Fi", "TV", "Minibar", "Desk", "Bath"],
    gallery: [
      "/images/rooms/standard-room.jpg",
      "/images/rooms/standard-room2.jpg",
      "/images/rooms/standard-room3.jpg",
      "/images/rooms/standard-room4.jpg",
      "/images/rooms/standard-room5.jpg",
      "/images/rooms/standard-room6.jpg",
    ],
  },
  {
    id: "deluxe-room",
    img: "/images/rooms/delux-room.jpg",
    name: "Deluxe Room",
    size: "27 m²",
    bedType: "2 Twin / King-size",
    view: "Courtyard view",
    maxOccupancy: 2,
    price: "$135 / night",
    blurb: "A quiet luxury retreat with exclusive courtyard access. The Deluxe Room features upgraded finishes and a peaceful outlook over the hotel's lush inner courtyard. Perfectly situated in Kampala's prestigious Nakasero district, guests can enjoy premium amenities, bespoke furnishings, and the tranquil ambiance that makes The Emin Pasha one of Uganda's best luxury boutique hotels.",
    amenities: ["A/C", "Wi-Fi", "TV", "Minibar", "Desk", "Bath", "Coffee maker"],
    gallery: [
      "/images/rooms/delux-room.jpg",
      "/images/rooms/delux-room1.jpg",
      "/images/rooms/delux-room2.jpg",
      "/images/rooms/delux-room3.jpg",
      "/images/rooms/delux-room4.jpg",
      "/images/rooms/delux-room5.jpg",
      "/images/rooms/delux-room6.jpg",
      "/images/rooms/delux-room7.jpg",
      "/images/rooms/delux-room8.jpg",
      "/images/rooms/delux-room9.jpg",
    ],
  },
  {
    id: "deluxe-suite",
    img: "/images/rooms/delux-suite.jpg",
    name: "Deluxe Suite",
    size: "39 m²",
    bedType: "1 King-size",
    view: "Panoramic view",
    maxOccupancy: 2,
    price: "$145 / night",
    blurb: "Space to stretch out, unwind, and experience true luxury. Our Deluxe Suite boasts a separate living area and panoramic views of our tropical gardens, making it feel like a true home away from home. Designed for discerning travelers visiting Kampala, this spacious suite combines classic heritage architecture with modern sophistication, ensuring an unforgettable stay at The Emin Pasha Hotel.",
    amenities: ["A/C", "Wi-Fi", "TV", "Minibar", "Desk", "Bath", "Sitting area"],
    gallery: [
      "/images/rooms/delux-suite.jpg",
      "/images/rooms/delux-suite1.jpg",
      "/images/rooms/delux-suite2.jpg",
      "/images/rooms/delux-suite3.jpg",
      "/images/rooms/delux-suite4.jpg",
      "/images/rooms/delux-suite5.jpg",
      "/images/rooms/delux-suite6.jpg",
      "/images/rooms/delux-suite7.jpg",
      "/images/rooms/delux-suite8.jpg",
      "/images/rooms/delux-suite9.jpg",
    ],
  },
  {
    id: "superior-suite",
    img: "/images/rooms/delux-suite1.jpg", // Fallback to existing image for now
    name: "Superior Suite",
    size: "N/A",
    bedType: "King-size, sitting area included",
    view: "Garden view",
    maxOccupancy: 2,
    price: "$200 / night",
    blurb: "Top-tier comfort with extraordinary space. The Superior Suite is our most generous offering, featuring a dedicated sitting area and unparalleled lush garden views. Impeccably styled to reflect Kampala's rich heritage, this suite provides a private oasis for VIPs, honeymooners, and guests looking for the ultimate luxury hotel experience in Nakasero.",
    amenities: ["A/C", "Wi-Fi", "TV", "Minibar", "Desk", "Bath", "Sitting area", "Coffee maker"],
    gallery: [
      "/images/rooms/delux-suite.jpg",
      "/images/rooms/delux-suite1.jpg",
      "/images/rooms/delux-suite2.jpg",
      "/images/rooms/delux-suite3.jpg",
      "/images/rooms/delux-suite4.jpg",
      "/images/rooms/delux-suite5.jpg",
      "/images/rooms/delux-suite6.jpg",
      "/images/rooms/delux-suite7.jpg",
      "/images/rooms/delux-suite8.jpg",
      "/images/rooms/delux-suite9.jpg",
    ],
  },
  {
    id: "one-bedroom-apartment",
    img: "/images/rooms/two-bedroom-apartment.jpg",
    name: "One Bedroom Apartment",
    size: "73 m²",
    bedType: "King-size",
    view: "Pool view",
    maxOccupancy: 4,
    price: "$180 / night",
    blurb: "Perfect for families, diplomats, or longer extended stays in Kampala. This spacious one-bedroom apartment layout offers distinct living and sleeping areas, a convenient kitchenette, and beautiful views overlooking our sparkling pool. Enjoy the independence of an apartment combined with the full five-star services of The Emin Pasha Hotel & Spa.",
    amenities: ["A/C", "Wi-Fi", "TV", "Minibar", "Desk", "Bath", "Kitchenette"],
    gallery: [
      "/images/rooms/two-bedroom-apartment.jpg",
      "/images/rooms/two-bedroom-apartment1.jpg",
      "/images/rooms/two-bedroom-apartment2.jpg",
      "/images/rooms/two-bedroom-apartment3.jpg",
      "/images/rooms/two-bedroom-apartment4.jpg",
      "/images/rooms/two-bedroom-apartment5.jpg",
      "/images/rooms/two-bedroom-apartment6.jpg",
      "/images/rooms/two-bedroom-apartment7.jpg",
      "/images/rooms/two-bedroom-apartment8.jpg",
    ],
  },
];
