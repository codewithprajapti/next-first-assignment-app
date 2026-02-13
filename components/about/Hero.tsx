import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex md:gird md:grid-cols-2 items-center md:justify-between">
        <div className="w-full border-0 flex items-center">
          <h1 className="text-2xl md:text-6xl font-bold md:font-extrabold text-center md:text-left">
            Team-Driven Tech Pioneers, Catalyzing Your Business Growth with
            Innovative Solutions.
          </h1>
        </div>
        <div className="hidden md:flex w-full border-0 items-center justify-center">
          <Image
            src={
              "https://iamtechie.com/wp-content/uploads/2024/05/Logo-PNG-1.png"
            }
            alt="Techies Infotech About Banner"
            width={800}
            height={200}
            priority
            sizes="(max-width: 48rem) 0vw, 50vw"
            className="w-[40vw] h-auto"
          />
        </div>
      </div>
    </>
  );
}
