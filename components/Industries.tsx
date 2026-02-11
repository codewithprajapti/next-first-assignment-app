import React from "react";

export default function Industries() {
  const industries = [
    "Foodtech",
    "Fintech",
    "Healthtech",
    "AI Bots",
    "Traveltech",
    "eCommerce",
    "Realtech",
    "Edtech",
  ];
  return (
    <>
      <div className="flex flex-col items-center md:items-start gap-3 border-0">
        <h1 className="text-lg md:text-4xl font-semibold md:font-extrabold "> Industries We Serve </h1>
        <p className="text-base md:text-xl">
          With a finger on the pulse of various industries, we cater to a
          spectrum of sectors, delivering bespoke solutions that redefine
          standards and inspire progress.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-between md:gap-5 border-0 w-full">
          {industries.map((industry, index) => {
            return <div key={index} className="border flex items-center justify-center text-xl md:text-4xl py-2 rounded-lg hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out"> {industry} </div>;
          })}
        </div>
      </div>
    </>
  );
}
