"use client";

import React, { useState, useEffect } from "react";
import { Plume } from "@/components/site/Plume";

const HERO_IMAGES = [
  "/images/homepage-1.png",
  "/images/homepage-2.jpeg",
  "/images/whatsapp-1.jpeg",
  // "/images/whatsapp-2.jpeg",
  "/images/whatsapp-3.jpeg",


];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // Only use the whatsapp images
  const allImages = HERO_IMAGES;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % allImages.length;
      });
    }, 2200); // Change image every 2.2 seconds
    return () => clearInterval(timer);
  }, [allImages.length]);

  return (
    <figure className="relative order-2 lg:order-2 mt-8 lg:mt-0 lg:pl-8 w-full max-w-[400px] lg:max-w-none mx-auto animate-fade-in [animation-delay:800ms]">
      <div className="relative overflow-hidden rounded-t-[200px] lg:rounded-t-[280px] rounded-b-sm bg-sand/40 shadow-2xl group">
        {allImages.map((src, idx) => {
          const isActive = idx === currentIndex;
          const isPrev = idx === prevIndex;

          let zIndex = "z-0";
          if (isActive) zIndex = "z-20";
          else if (isPrev) zIndex = "z-10";

          const opacity = (isActive || isPrev) ? "opacity-100" : "opacity-0";

          return (
            <img
              key={src}
              src={src}
              alt="The Ivory Atelier reception and moments."
              width={1600}
              height={1920}
              className={`absolute inset-0 w-full aspect-[3/4] lg:max-h-[82vh] object-cover contrast-[1.05] sepia-[0.05] brightness-[0.98] group-hover:sepia-0 group-hover:brightness-100 group-hover:scale-[1.02] transition-all duration-[1500ms] ease-out ${zIndex} ${opacity}`}
            />
          );
        })}
        {/* We need a static relative element to give the container height, since the images are absolute. */}
        <img
          src={allImages[0]}
          alt=""
          width={1600}
          height={1920}
          className="w-full aspect-[3/4] lg:max-h-[82vh] object-cover invisible pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent mix-blend-multiply opacity-40 pointer-events-none transition-opacity duration-1000 z-20"></div>
        <Plume className="pointer-events-none absolute left-6 top-6 lg:left-8 lg:top-8 h-10 w-10 text-brass/90 mix-blend-screen z-20" />
      </div>
      <figcaption className="label mt-3 md:mt-4 text-espresso/50 text-right md:text-left">
        Not just a salon. A ritual.
      </figcaption>
    </figure>
  );
}
