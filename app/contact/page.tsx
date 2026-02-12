import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col px-4 md:px-20 gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl md:text-5xl font-black md:font-extrabold">
            {" "}
            Let's Create Solutions Together{" "}
          </h1>
          <p className="text-base md:text-lg font-medium md:font-bold">
            Reach out to us and discuss how we can collaborate, innovate, and
            transform the digital exosystems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-white px-4 py-4 md:px-8 md:py-6 md:gap-5">
          <div className="flex w-full md:w-1/2 h-fit">
            <Image
              src={
                "https://iamtechie.com/wp-content/uploads/2024/05/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working-1.png"
              }
              width={500}
              height={100}
              alt="Contact-Us Image"
              className="rounded-lg"
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
