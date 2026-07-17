"use client";

import { useRef, useState, useEffect } from "react";
import { Plume } from "@/components/site/Plume";

type Service = {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  img: any;
  cta: string;
  ctaLink: string;
};

export function ServicesCarousel({ services }: { services: Service[] }) {
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
      // Find the actual width of a card and add the 20px (gap-5) gap
      const firstCard = scrollRef.current.querySelector("article");
      const scrollAmount = firstCard ? firstCard.clientWidth + 20 : window.innerWidth * 0.85;
      
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-12 w-full group/carousel">
      {/* Left Navigation Arrow */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className="hidden md:flex absolute -left-2 md:-left-6 top-[45%] z-10 h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-alabaster border border-espresso/20 text-espresso shadow-md transition-all hover:bg-espresso hover:text-ivory disabled:opacity-0"
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
        className="hidden md:flex absolute -right-2 md:-right-6 top-[45%] z-10 h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-alabaster border border-espresso/20 text-espresso shadow-md transition-all hover:bg-espresso hover:text-ivory disabled:opacity-0"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden flex items-center justify-end gap-2 mb-3 pr-6 text-espresso/40">
        <span className="text-[0.65rem] uppercase tracking-widest font-display">Swipe to explore</span>
        <span className="text-sm">→</span>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-12 px-5 md:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {services.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col w-[82vw] sm:w-[50vw] md:w-[calc(33.333%-14px)] shrink-0 snap-start"
          >
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden rounded-md border border-espresso/10 mb-5">
                <img
                  src={typeof s.img === 'string' ? s.img : s.img.src}
                  alt={s.title}
                  className="aspect-[4/3] w-full object-cover object-[50%_25%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              
              <div className="flex items-baseline mb-2">
                <h3 className="font-display text-2xl text-espresso tracking-tight">{s.title}</h3>
              </div>
              
              <p className="text-espresso/70 leading-relaxed text-xs sm:text-sm mb-3 line-clamp-3">{s.body}</p>
              
              {s.bullets.length > 0 && (
                <ul className="mt-1 space-y-1.5">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-espresso/80 text-xs sm:text-sm">
                      <span className="text-brass/60 mt-1.5 shrink-0 h-1 w-1 rounded-full bg-brass/60" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
