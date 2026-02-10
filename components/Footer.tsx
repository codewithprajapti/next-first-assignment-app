import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full border-0 bg-gray-400 flex flex-col gap-8 md:gap-0 md:grid md:grid-cols-3 p-4 md:px-20 md:py-4 justify-between">
          <div className="flex flex-col gap-5 md:gap-5 border-0">
            <Image
              src="https://iamtechie.com/wp-content/uploads/2023/06/Arabic-Logo.png"
              alt="Logo"
              height={100}
              width={200}
            />
            <p className="text-white">
              Techies Infotech is your trusted partner for cutting-edge
              technology solutions across the globe. We empower businesses with
              a potent blend of next-generation expertise, advanced skills, and
              state-of-the-art infrastructure.
            </p>
          </div>
          <div className="flex flex-col text-white gap-3 md:gap-5 border-0 w-fit">
            <h1 className="font-extrabold text-3xl"> Quick Links </h1>
            <div className="flex flex-col">
              <Link href={""}>Career</Link>
              <Link href={""}>About Us</Link>
              <Link href={""}>Case Studies</Link>
              <Link href={""}>Newsroom</Link>
              <Link href={""}>Privacy & Policy</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col text-white gap-3 md:gap-5 border-0">
            <h1 className="font-extrabold text-3xl"> Contact Us </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <MapPin size="42" />
                <a href="">
                  BCB2 526, 5th Floor, Business Cluster - Building 2 Dubai
                  CommerCity - Dubai - United Arab Emirates
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size="24" />
                <p className="flex gap-1 flex-wrap">
                  <span>
                    <a href="tel:+971562717699">+971 562717699</a>,
                  </span>
                  &nbsp;
                  <span>
                    <a href="tel:+9183605 56561">+91 83605 56561</a>,
                  </span>
                  <span>
                    <a href="tel:+97145526050">+971 45526050</a>
                  </span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size="24" />
                <a href="">info@iamtechie.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-lg font-bold text-text">
          Copyright 2025 - Techies Infotech.
        </div>
      </div>
    </>
  );
}
