"use client";

import { useEffect, useState } from "react";

const lines = [
  "Digital Transformation",
  "B2B & B2C Commerce",
  "Software Developemnt",
  "App Development",
];

export default function HeroTypeWrittingEffect() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = lines[lineIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, lineIndex]);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-logo min-h-10 md:min-h-14">
          <span className="inline-block w-[24ch] whitespace-nowrap">
            {text}
            <span className="ml-1 text-text font-light cursor">|</span>
          </span>
        </h1>
      </div>
    </>
  );
}
