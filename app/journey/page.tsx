"use client";

import { useState, useEffect } from "react";
import { Plume } from "@/components/site/Plume";

const acts = [
  {
    n: "01",
    h: "The Arrival",
    p: "Gates, greenery, warm light - and a name remembered. You are expected.",
  },
  {
    n: "02",
    h: "The Welcome",
    p: "No counter. A seat, a coffee, and an unhurried hello. The afternoon slows.",
  },
  {
    n: "03",
    h: "The Ritual",
    p: "The craft itself - done with care, and quiet. Time enough to be still.",
  },
  {
    n: "04",
    h: "The Café",
    p: "A pause worth staying for. Coffee, a moment, a slice of saffron tea cake.",
  },
  {
    n: "05",
    h: "The Farewell",
    p: "Walked to the door, a little more yourself than when you came.",
  },
];

const HOUR_IMAGES = [
  "/images/hour/hour-1.jpg",
  "/images/hour/hour-2.jpg",
  "/images/hour/hour-3.jpg",
  "/images/hour/hour-4.jpg",
  "/images/hour/hour-5.jpg",
];

export default function Journey() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HOUR_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const CarouselInner = () => (
    <>
      {HOUR_IMAGES.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Ivory Atelier - The Hour ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImg ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-espresso/5 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brass/20 via-transparent to-transparent mix-blend-overlay pointer-events-none"></div>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2.5 z-10">
        {HOUR_IMAGES.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${idx === currentImg ? "w-8 bg-ivory" : "w-2 bg-ivory/40"}`}
          />
        ))}
      </div>
    </>
  );

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-36 sm:px-10 sm:pt-44">
        <header className="animate-fade-up">
          <p className="label text-brass tracking-[0.3em] uppercase">16 · Experience</p>
          <h1 className="mt-8 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-tight text-espresso">
            The unhurried
            <br />
            <span className="italic text-espresso/45">hour.</span>
          </h1>
          <div className="mt-10 flex items-center gap-6">
            <div className="hairline w-16" />
            <p className="max-w-xl text-xl italic font-light text-espresso/70">
              Every moment is designed to lower the pulse.
            </p>
          </div>
        </header>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-32 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start border-t border-espresso/15 pt-16">

          {/* Mobile Auto-Carousel */}
          <div className="lg:hidden mb-12 px-4 sm:px-12">
            <div className="p-3 bg-sand shadow-[0_20px_40px_-15px_rgba(182,141,64,0.15)] rounded-[2rem] rounded-t-[12rem] border border-brass/20">
              <figure className="relative w-full aspect-[3/4] rounded-[1.5rem] rounded-t-[11rem] overflow-hidden bg-espresso">
                <CarouselInner />
              </figure>
            </div>
          </div>

          {/* Timeline - Left */}
          <div className="lg:col-span-7">
            <ol className="relative">
              {/* Vertical Line */}
              <div
                aria-hidden
                className="absolute left-[22px] top-10 bottom-10 w-px bg-espresso/10 md:left-[36px]"
              />

              {acts.map((a, i) => (
                <li
                  key={a.n}
                  className="relative group grid grid-cols-[48px_1fr] gap-8 py-10 md:grid-cols-[80px_1fr] md:gap-14 animate-fade-up"
                  style={{ animationDelay: `${(i * 150) + 200}ms`, animationFillMode: 'both' }}
                >
                  <div className="relative flex flex-col items-center z-10">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-espresso/15 bg-ivory text-espresso/30 transition-all duration-700 group-hover:border-brass group-hover:text-brass group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(182,141,64,0.15)] md:h-[72px] md:w-[72px]">
                      <img
                        src="/images/logo-icon.png"
                        alt="Plume Graphic"
                        className="h-5 w-auto md:h-8 object-contain transition-all duration-700 group-hover:rotate-[360deg] opacity-50 group-hover:opacity-100"
                      />
                    </span>
                  </div>

                  <div className="min-w-0 border-t border-espresso/10 pt-8 transition-all duration-500 group-hover:border-brass/30 group-hover:translate-x-2">
                    <p className="label text-brass tracking-[0.2em]">{a.n}</p>
                    <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-[3.5rem] transition-colors duration-500 group-hover:text-brass">
                      {a.h}
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg text-espresso/70 font-light leading-relaxed">
                      {a.p}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Sticky Auto-Carousel - Right (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="p-4 xl:p-5 bg-sand shadow-[0_30px_60px_-20px_rgba(182,141,64,0.25)] rounded-[2.5rem] rounded-t-[16rem] border border-brass/20 translate-x-4">
              <figure className="relative w-full aspect-[3/4] rounded-[2rem] rounded-t-[15rem] overflow-hidden bg-espresso">
                <CarouselInner />
              </figure>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}