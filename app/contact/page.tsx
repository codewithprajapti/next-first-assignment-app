import ContactUsForm from "@/components/ContactUsForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Techies Infotech for web development, software solutions, and IT services. Reach out to discuss your project or business needs.",

  keywords: [
    "Contact Techies Infotech",
    "IT company contact",
    "web development services contact",
    "software company support",
  ],

  openGraph: {
    title: "Contact Us | Techies Infotech",
    description:
      "Reach out to Techies Infotech to discuss your project or business requirements.",
    url: "http://localhost:3000/contact",
    siteName: "Techies Infotech",
    images: [
      {
        url: "https://images.unsplash.com/photo-1740560051533-3acef26ace95?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Contact Techies Infotech",
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
      <div className="flex flex-col px-4 md:px-20 gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl md:text-5xl font-black md:font-extrabold">
            Let's Create Solutions Together
          </h1>
          <p className="text-base md:text-lg font-medium md:font-bold">
            Reach out to us and discuss how we can collaborate, innovate, and
            transform the digital exosystems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-white px-4 py-4 md:px-8 md:py-6 md:gap-5">
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              src="https://iamtechie.com/wp-content/uploads/2024/05/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working-1.png"
              alt="Team discussion with clients at Techies Infotech"
              width={900}
              height={600}
              sizes="(max-width: 48rem) 92vw, 45vw"
              className="w-[92vw] md:w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex flex-col border-0 gap-5">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-xl md:text-2xl font-medium md:font-bold">
                Have a question, a project idea, or just want to say hello?
              </h2>
              <p>
                Fill out the form below, and our experts will connect with you
                shortly.
              </p>
            </div>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
}
