"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/rnd-building.png", alt: "R&D Building IIITD" },
  { src: "/students.png", alt: "Students at IIITD HCD" },
  { src: "/hcd/5Z4A17.webp", alt: "Faculty at IIITD HCD" },
  { src: "/page-reveal/img3.png", alt: "1Pixel Design Conference" },
  { src: "/museo-visit.jpeg", alt: "Museo Visit" },
  { src: "/aid-lab-nu-visit.jpeg", alt: "AID Lab NU Visit" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={idx === 0}
          className={`object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-brand-accent2/70" />
    </div>
  );
}
