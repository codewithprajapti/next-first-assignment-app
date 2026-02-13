import Image from "next/image";
import React from "react";

export default function OurRelationships() {
  const logos = [
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105425.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/apparelgroup-1.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/steve-2.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105427.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105429.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Modern-Electronics.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105424.png",
    "https://iamtechie.com/wp-content/uploads/2024/09/Group-105433.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105439.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/alnahla-1.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105435.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105434.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Paytm.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105440-2.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/bornprimitive-2.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/madi-3.png",
    "https://iamtechie.com/wp-content/uploads/2024/09/Group-105422.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Walnut-Medical.png",
    "https://iamtechie.com/wp-content/uploads/2024/05/Group-105424.png", //
    "https://iamtechie.com/wp-content/uploads/2025/05/relationship-logo-6.webp",
    "https://iamtechie.com/wp-content/uploads/2025/05/relationship-logo-1.webp",
    "https://iamtechie.com/wp-content/uploads/2025/05/relationship-logo-2.webp",
    "https://iamtechie.com/wp-content/uploads/2025/05/relationship-logo-5.webp",
    "https://iamtechie.com/wp-content/uploads/2025/05/charless.jpg",
  ];
  return (
    <>
      {/* <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Our Relationships
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {logos.map((logo, index) => {
            return (
              <Image
                key={index}
                src={logo}
                alt="Logo"
                width={300}
                height={100}
              />
            );
          })}
        </div>
      </div> */}

      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center">
          Our Relationships
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full">
          {logos.map((logo, index) => (
            <div key={index} className="relative w-full aspect-5/2">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                fill
                sizes="(max-width: 48rem) 45vw, 15vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
