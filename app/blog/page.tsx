import React from "react";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { Clock, MessageCircle, Eye } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore the latest articles, insights, and tutorials from Techies Infotech on web development, software engineering, and modern technologies.",

  keywords: [
    "Techies Infotech blog",
    "web development articles",
    "Next.js tutorials",
    "software development blog",
  ],

  openGraph: {
    title: "Blogs | Techies Infotech",
    description:
      "Read articles and insights on web development and modern technologies.",
    url: "http://localhost:3000/blog",
    siteName: "Techies Infotech",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Techies Infotech Blog",
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start px-4 md:px-20 w-full">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 48rem) 92vw, 30vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col px-3 md:px-4 py-4 gap-2">
              <div className="flex text-gray-500 items-center gap-2 text-sm">
                <Clock size={18} />
                <span>{blog.date}</span>
              </div>

              <h2 className="text-lg md:text-xl font-semibold">{blog.title}</h2>

              <p className="text-gray-500 text-sm">{blog.description}</p>
            </div>

            <div className="flex bg-lightBlue gap-4 items-center px-3 md:px-4 py-3 text-sm">
              <div className="flex text-gray-700 items-center gap-2">
                <MessageCircle size={16} />
                <span>{blog.comments}</span>
              </div>

              <div className="flex text-gray-700 items-center gap-2">
                <Eye size={16} />
                <span>{blog.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
