import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

// export default function Navbar() {
//   console.log('Navbar')
//   return (
//     <>
//       <div className="flex justify-between items-center md:px-0 px-2 md:py-0 py-2">
//         <div className="flex flex-wrap md:w-full border md:px-20 md:py-2 justify-between items-center">
//           <div>
//             <Image
//               alt="Logo"
//               src="/TECHIES-Arabic-logo.png"
//               width={200}
//               height={300}
//             />
//           </div>

//           <div className="hidden md:block">
//             <div className="flex items-center gap-5 text-2xl">
//               <Link href={"/"}> Home </Link>
//               <Link href={"/about"}> About Us </Link>
//               <Link href={"/blog"}> Blog </Link>
//               <Link href={"/contact"}> Contact Us </Link>
//             </div>
//           </div>
//         </div>
//         <HamburgerMenu />
//       </div>
//     </>
//   );
// }

export default function Navbar() {
  return (
    <div className="w-full border-0">

      <div className="flex justify-between items-center px-4 md:px-20 py-2">
        <Image
          alt="Logo"
          src="/TECHIES-Arabic-logo.png"
          width={200}
          height={300}
        />

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
