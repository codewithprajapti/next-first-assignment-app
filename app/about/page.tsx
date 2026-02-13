import Certificates from "@/components/about/Certificates";
import Hero from "@/components/about/Hero";
import Info from "@/components/about/Info";
import MissionAndVision from "@/components/about/MissionAndVision";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Techies Infotech, our mission, our team, and how we deliver modern IT and web development solutions to businesses worldwide.",

  keywords: [
    "About Techies Infotech",
    "IT company profile",
    "software company",
    "web development company",
  ],

  openGraph: {
    title: "About Us | Techies Infotech",
    description:
      "Discover the mission, vision, and expertise behind Techies Infotech.",
    url: "http://localhost:3000/about",
    siteName: "Techies Infotech",
    images: [
      {
        url: "/public/about-og.jpeg",
        width: 1200,
        height: 630,
        alt: "About Techies Infotech",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function page() {
  return (
    <>
      <div className="flex flex-col px-2 md:px-20 gap-7 md:gap-10">
        <Hero />
        <Info />
        <MissionAndVision />
        <Certificates />
      </div>
    </>
  );
}
