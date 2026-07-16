"use client";

import { useRef, useState, useEffect } from "react";
import { User, Star } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mrunmayee Santosh Thakekar",
    text: "My experience at ivory atelier was insane....!!\n\nThe service provided over here is up to date from start to end the behaviour of staff is friendly and polite if you want to experience luxurious self care or pamper yourself ivory atelier is the best choice!!",
  },
  {
    name: "Arundhati Sharma",
    text: "A true sanctuary in the city. The attention to detail is unmatched. Every visit feels like a quiet retreat from the busy world outside. I highly recommend the signature facial.",
  },
  {
    name: "Tanya Verma",
    text: "Never felt so pampered. The team at Ivory Atelier knows exactly what they are doing. The space is stunning and the service is truly exceptional.",
  },
  {
    name: "Simran Kaur",
    text: "The AI-guided facials are incredible. My skin has never felt better. The staff is so polite and they really take their time. You never feel rushed.",
  }
];

export function TestimonialsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector("article");
      const scrollAmount = firstCard ? firstCard.clientWidth + 24 : window.innerWidth * 0.85;
      
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[1600px] mx-auto group/carousel">
      {/* Left Navigation Arrow */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className="hidden md:flex absolute left-4 lg:left-12 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 backdrop-blur-sm border border-espresso/10 text-espresso shadow-lg transition-all hover:bg-ivory disabled:opacity-0"
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className="hidden md:flex absolute right-4 lg:right-12 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 backdrop-blur-sm border border-espresso/10 text-espresso shadow-lg transition-all hover:bg-ivory disabled:opacity-0"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-10 px-5 md:px-[15vw] scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {TESTIMONIALS.map((t, idx) => (
          <article
            key={idx}
            className="shrink-0 snap-center w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] max-w-lg bg-ivory rounded-[2rem] p-8 md:p-10 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] flex flex-col"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-sand/40 overflow-hidden flex items-center justify-center shrink-0 ring-1 ring-espresso/10">
                <User className="h-6 w-6 md:h-8 md:w-8 text-espresso/50" />
              </div>
              <h3 className="font-display text-espresso text-sm md:text-base uppercase tracking-widest leading-snug">
                {t.name}
              </h3>
            </div>
            
            <div className="flex gap-1.5 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-espresso text-espresso" />
              ))}
            </div>

            <div className="text-espresso/80 text-sm md:text-[1.05rem] leading-[1.7] whitespace-pre-line font-light">
              {t.text}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
