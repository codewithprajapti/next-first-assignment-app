import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Techies Infotech",
    template: "%s | Techies Infotech",
  },

  description:
    "Techies Infotech is a global company providing modern IT solutions, web development, and digital services.",

  keywords: [
    "Techies Infotech",
    "IT company",
    "web development",
    "software solutions",
  ],

  authors: [{ name: "Techies Infotech" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Techies Infotech",
    description: "Modern IT solutions and web services.",
    url: "https://your-ngrok-url.ngrok-free.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Techies Infotech Preview",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased flex flex-col gap-5 bg-background`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
