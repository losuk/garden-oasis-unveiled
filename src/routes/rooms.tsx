import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/rooms")({
  component: RoomsLayout,
});

function RoomsLayout() {
  return <Outlet />;
}

export const rooms = [
  {
    id: "standard-room",
    img: "/images/rooms/standard-room.jpg",
    name: "Standard Room",
    size: "25 m²",
    view: "Garden View",
    price: "$125 / night",
    blurb: "A cozy and comfortable room for your stay.",
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
    size: "35 m²",
    view: "Garden View",
    price: "$135 / night",
    blurb: "An upgraded room with additional amenities.",
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
    size: "45 m²",
    view: "Pool & Garden View",
    price: "$145 / night",
    blurb: "A spacious suite with separate living area.",
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
    id: "two-bedroom-apartment",
    img: "/images/rooms/two-bedroom-apartment.jpg",
    name: "Two-Bedroom Apartment",
    size: "75 m²",
    view: "Garden View",
    price: "$180 / night",
    blurb: "Perfect for families or groups, with two separate bedrooms.",
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
  {
    id: "conference-room",
    img: "/images/rooms/conference-room.jpg",
    name: "Conference Room",
    size: "150 m²",
    view: "Garden Terrace View",
    price: "Upon Request",
    blurb: "A professional space for meetings and events.",
    gallery: ["/images/rooms/conference-room.jpg"],
  },
];
