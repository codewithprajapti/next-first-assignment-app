import Image from "next/image";
import { ChevronRight } from "lucide-react";
import HeroTypeWrittingEffect from "./HeroTypeWrittingEffect";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-0 md:justify-between border-0">
        <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1 border-0">
          <div className="flex flex-col md:px-0 gap-1 border-0 w-full">
            <h1 className="text-text font-extrabold text-2xl md:text-4xl">
              MENA’s Most Reliable AI- <br />
              Powered Partner for
            </h1>
            <HeroTypeWrittingEffect />
          </div>
          <p className="text-gray-900 text-xl md:text-2xl ">
            Techies helps businesses accelerate by combining AI, strategy and
            technology-driven digital transformation for a competitive edge.
          </p>

          <button className="self-center md:self-start text-white text-base md:text-lg font-bold border p-3 rounded-lg bg-logo flex items-center justify-center cursor-pointer hover:bg-white hover:border-logo hover:text-logo transition delay-150 duration-300 ease-in-out">
            Request Consultation
            <ChevronRight />
          </button>
        </div>
        <div className="order-1 md:order-2 border-0 flex items-center justify-center">
          <Image
            src={"https://iamtechie.com/wp-content/uploads/2024/09/bnr-1.png"}
            width={500}
            height={100}
            alt="Techies Infotech digital solutions banner"
            priority
            sizes="100vw"
            className="w-[80vw] md:w-[40vw] h-auto"
          />
        </div>
      </div>
    </>
  );
}
