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
      const { clientWidth } = scrollRef.current;
      // Scroll by one card width (approx one third of container on desktop, mostly full width on mobile)
      const scrollAmount = window.innerWidth >= 768 ? clientWidth / 3 : clientWidth * 0.85;
      
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
        className="flex absolute -left-2 md:-left-6 top-[45%] z-10 h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-alabaster border border-espresso/20 text-espresso shadow-md transition-all hover:bg-espresso hover:text-ivory disabled:opacity-0"
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
        className="flex absolute -right-2 md:-right-6 top-[45%] z-10 h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-alabaster border border-espresso/20 text-espresso shadow-md transition-all hover:bg-espresso hover:text-ivory disabled:opacity-0"
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
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-12 px-5 md:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {services.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col w-[85vw] sm:w-[50vw] md:w-[calc(33.333%-14px)] shrink-0 snap-start rounded-lg transition-colors bg-alabaster/50 border border-espresso/5 hover:bg-ivory/50"
          >
            <div className="p-3 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-sm bg-sand/20 ring-1 ring-black/5 group-hover:ring-brass/20 transition-all duration-700 shadow-sm group-hover:shadow-md cursor-pointer mb-4">
                <img
                  src={s.img.src}
                  alt={s.title}
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:sepia-0 group-hover:brightness-100"
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
