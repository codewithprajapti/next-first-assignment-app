import Image from "next/image";
import React from "react";

export default function MissionAndVision() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col pr-4 md:pr-0 w-full">
          <div className="flex items-center gap-5">
            <h3 className="text-4xl md:text-5xl font-black md:font-bold">
              Our Mission
            </h3>
            <Image
              src={
                "https://iamtechie.com/wp-content/uploads/2024/05/Group-392.png"
              }
              width={70}
              height={100}
              alt="Mission"
            />
          </div>
          <div>
            To deliver reliable & future-proof software solutions that empower
            businesses digitally.
          </div>
        </div>
        <div className="flex flex-col pr-4 md:pr-0 w-full">
          <div className="flex items-center gap-5">
            <h3 className="text-4xl md:text-5xl font-black md:font-bold">
              Our Vision
            </h3>
            <Image
              src={
                "https://iamtechie.com/wp-content/uploads/2024/05/Group-391.png"
              }
              width={70}
              height={100}
              alt="Mission"
            />
          </div>
          <div>
            We aspire to be the undisputed leader, recognized for our unwavering
            commitment and software mastery, ensuring seamless digital journeys
            for our customers.
          </div>
        </div>
      </div>
    </>
  );
}
