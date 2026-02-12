"use client";
import { useState } from "react";

export default function ContactUsForm() {
  const [active, setActive] = useState<"company" | "individual">("company");
  const dropdownOptions = [
    "Software Development",
    "UI UX Design",
    "Mobile App Development",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Website Development",
    "WooCommerce",
    "Ecommerce Development",
    "Block Chain Development",
    "Magento Development",
    "React Native Development",
    "Saas Development",
    "Shopify Development",
    "Pay Per Click",
    "Laravel Development",
    "AR/VR Development",
    "Other",
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <button
            onClick={() => setActive("company")}
            className={`px-4 py-1 text-lg rounded-md border transition
          ${
            active === "company"
              ? "bg-black text-white border-black border"
              : "bg-white text-black border-logo cursor-pointer"
          }`}
          >
            Company
          </button>

          <button
            onClick={() => setActive("individual")}
            className={`px-4 py-1 text-lg rounded-md border transition
          ${
            active === "individual"
              ? "bg-black text-white border-black border"
              : "bg-white text-black border-logo cursor-pointer"
          }`}
          >
            Individual
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-400 bg-white text-gray-600 w-full px-2 py-1 text-lg md:text-xl rounded-md"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-400 bg-white text-gray-600 w-full px-2 py-1 text-lg md:text-xl rounded-md"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="tel"
              placeholder="Mobile number"
              className="border border-gray-400 bg-white text-gray-600 w-full px-2 py-1 text-lg md:text-xl rounded-md"
              pattern="[0-9]{10}"
            />
            <select className="border border-gray-400 bg-white text-gray-600 w-full px-2 py-1 text-lg md:text-xl rounded-md">
              {dropdownOptions.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>
          <div className="flex w-full">
            <textarea placeholder="Your Message" className="border border-gray-400 bg-white text-gray-600 w-full px-2 py-1 text-lg md:text-xl rounded-md"></textarea>
          </div>
          <div className="flex w-full">
            <button className="bg-logo text-white px-4 py-2 font-black md:font-bold rounded-md cursor-pointer hover:bg-blue-900"> Send Message </button>
          </div>
        </div>
      </div>
    </>
  );
}
