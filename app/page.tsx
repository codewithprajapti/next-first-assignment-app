import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import OurRelationships from "@/components/OurRelationships";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col px-4 md:px-20 gap-7">
        <Hero />
        <Industries />
        <OurRelationships />
      </div>
    </>
  );
}
