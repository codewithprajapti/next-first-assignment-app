import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-0 md:grid md:grid-cols-2 md:flex-row ">
        <div className="flex border-0">
          <Image
            src={
              "https://iamtechie.com/wp-content/uploads/elementor/thumbs/about-1st-scaled-r5qx5qpkuwyn6juoq2fvyklt8ti3mbudfm93g98i0i.webp"
            }
            width={500}
            height={100}
            alt="Info IMage"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col  border-0 gap-2 md:gap-5">
          <h2 className="text-2xl  md:text-5xl font-medium md:font-bold text-logo border-0 ">
            Your ultimate partner
            <span className="text-text"> for all IT needs!</span>
          </h2>
          <p className="text-base md:text-xl">
            Techies Infotech is your trusted partner for cutting-edge technology
            solutions across the globe. We're not just an IT company—we're your
            digital growth engine. We empower businesses with a potent blend of
            next-generation expertise, advanced skills, and state-of-the-art
            infrastructure. Whether you're seeking software solutions
            custom-designed to streamline operations, digital marketing
            strategies that attract and convert customers, or robust SaaS, ERP,
            and e-commerce platforms to drive efficiency and sales, we're here
            to help you achieve your goals.
          </p>
        </div>
      </div>
    </>
  );
}
