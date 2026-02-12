import React from "react";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { Clock, MessageCircle, Eye } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start border-0 px-4 md:px-20 ">
        {blogs.map((blog, index) => {
          return (
            <div key={index} className="flex flex-col cursor-pointer">
              <div className="flex w-full border-0">
                <Image
                  src={blog.image}
                  width={500}
                  height={100}
                  alt={blog.title}
                />
              </div>
              <div className="flex flex-col bg-white px-2 md:px-4 py-4 md:py-8 gap-2">
                <div className="flex text-gray-500 items-center gap-2">
                  <Clock size={24} />
                  <span> {blog.date} </span>
                </div>
                <h1 className="text-lg md:text-2xl font-black md:font-bold">
                  {blog.title}
                </h1>
                <p className="text-gray-400"> {blog.description} </p>
              </div>
              <div className="flex bg-lightBlue gap-4 items-center px-2 md:px-4 py-4 md:py-8">
                <div className="flex text-gray-700 items-center gap-2">
                  <MessageCircle size={18} />
                  <span> {blog.comments} </span>
                </div>
                <div className="flex text-gray-700 items-center gap-2">
                  <Eye size={18} />
                  <span> {blog.views} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
