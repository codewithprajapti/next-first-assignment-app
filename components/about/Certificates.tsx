import Image from "next/image";
import React from "react";

export default function Certificates() {
  const logos = [
    "https://iamtechie.com/wp-content/uploads/2024/05/pngwing-3.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Shopify-Partner.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/pngwing-1-1.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/good-firms-logo.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/image-16.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Dubai-Commercity.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-380.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/pngwing-2.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Silicon.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/C-img-5-1.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/pngwing-1.png",
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-5 md:gap-10">
        <h1 className="text-xl md:text-5xl font-black md:font-extrabold">
          Our Certifications & Recognitions
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-7">
          {logos.map((logo, index) => {
            return (
              <div key={index} className="bg-white px-4 py-2 w-full flex items-center">
                <Image src={logo} height={100} width={120} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
