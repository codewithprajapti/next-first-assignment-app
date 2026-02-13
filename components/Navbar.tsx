import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <div className="w-full border-0">
      <div className="flex justify-between items-center px-4 md:px-20 py-2">
        <Link href="/" className="block w-[30vw] max-w-48">
          <Image
            src="/TECHIES-Arabic-logo.png"
            alt="Techies Infotech Logo"
            width={600}
            height={200}
            priority
            sizes="30vw"
            className="w-full h-auto"
          />
        </Link>

        <div className="hidden md:flex gap-5 text-2xl">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <HamburgerMenu />
      </div>
    </div>
  );
}
