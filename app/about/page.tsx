import Certificates from "@/components/about/Certificates";
import Hero from "@/components/about/Hero";
import Info from "@/components/about/Info";
import MissionAndVision from "@/components/about/MissionAndVision";
import React from "react";

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
