"use client";

import React from "react";

const SIGNATURE_IMAGES = [
  "/images/signature-1.png",
  "/images/signature-2.png",
  "/images/signature-3.jpeg",
];

export function SignatureSlider() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 gradient-espresso border-y border-espresso/10">
      
      {/* Decorative text above the slider */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center w-full px-5 z-10">
        <p className="label text-brass tracking-[0.4em] opacity-80">The Signature Collection</p>
      </div>

      <div className="relative flex w-full group overflow-hidden mt-8">
        
        {/* Gradient overlays to fade out the edges seamlessly */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#221F1B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#221F1B] to-transparent z-10 pointer-events-none" />

        {/* The marquee container */}
        <div className="flex shrink-0 animate-marquee gap-6 sm:gap-10 px-3 items-center w-max">
          {[...SIGNATURE_IMAGES, ...SIGNATURE_IMAGES, ...SIGNATURE_IMAGES, ...SIGNATURE_IMAGES].map((src, i) => (
            <div 
              key={i} 
              className="relative w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] max-w-[450px] shrink-0 rounded-md overflow-hidden bg-[#2a221b] aspect-[16/10] sm:aspect-[3/2] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:[animation-play-state:paused] transition-transform duration-700 ease-out hover:scale-[1.02] hover:z-20 cursor-pointer"
            >
              <img
                src={src}
                alt={`Signature Ritual ${i}`}
                className="w-full h-full object-cover contrast-[1.1] sepia-[0.15] brightness-[0.8] hover:sepia-0 hover:brightness-100 hover:contrast-100 transition-all duration-1000 ease-out"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x533/2a221b/a88a56?text=Signature+Placeholder';
                }}
              />
              <div className="absolute inset-0 border border-brass/10 mix-blend-overlay rounded-md pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
