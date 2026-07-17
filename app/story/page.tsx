"use client";

import { useState, useEffect } from "react";
import spaceImg from "@/assets/space.jpg";
import { Plume } from "@/components/site/Plume";

const CLUB_IMAGES = [
  "/images/story/club-1.jpg",
  "/images/story/discomfort.jpg",
  "/images/story/club-2.jpg",
  // "/images/story/club-3.jpg",

  // "/images/story/club-4.jpg",
  // "/images/story/club-5.jpg",
  // "/images/story/club-6.jpg",
];

export default function Story() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % CLUB_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {/* EDITORIAL COVER HERO */}
      <section className="w-full pt-[101px]">
        <div className="relative w-full h-[calc(100vh-104px)] min-h-[640px] overflow-hidden">

          {/* Background Image — let it breathe */}
          <img
            src="/images/facade.png"
            alt="Ivory Atelier House facade"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] contrast-[1.1] brightness-[0.75]"
          />

          {/* Very subtle edge vignettes only — don't touch the centre */}
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/15 via-transparent to-espresso/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/20 via-transparent to-espresso/55 pointer-events-none" />

          {/* ── TOP EDITORIAL STRIP ── */}
          <div className="absolute top-0 inset-x-0 z-10 px-6 pt-6 sm:px-12 sm:pt-8">
            <div className="flex justify-between items-center">
              <p className="label text-ivory/70 tracking-[0.35em] text-[0.5rem]">VOL. I</p>
              <div className="h-px flex-1 bg-ivory/20 mx-6" />
              <p className="label text-ivory/70 tracking-[0.35em] text-[0.5rem]">JUHU · MUMBAI · 2024</p>
            </div>
          </div>

          {/* ── LEFT SIDE BAR ── */}
          <div className="absolute left-5 sm:left-10 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col items-center gap-4">
            <div className="h-20 w-px bg-ivory/25" />
            <p className="label text-ivory/60 tracking-[0.35em] text-[0.5rem] [writing-mode:vertical-lr] rotate-180 uppercase drop-shadow-md">
              Hair · Nails · Beauty · Café
            </p>
            <div className="h-20 w-px bg-ivory/25" />
          </div>

          {/* ── RIGHT SIDE BAR ── */}
          <div className="absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col items-center gap-4">
            <div className="h-16 w-px bg-brass/40" />
            <Plume className="h-7 w-7 text-brass/80" />
            <div className="h-16 w-px bg-brass/40" />
          </div>

          {/* ── BOTTOM EDITORIAL STRIP ── */}
          <div className="absolute bottom-0 inset-x-0 z-10 flex items-end justify-between px-6 pb-8 sm:px-14 sm:pb-12">
            {/* Bottom-left — large italic title */}
            <div>
              <p className="font-display italic text-ivory text-4xl sm:text-6xl leading-none drop-shadow-2xl tracking-tight">
                The Story
              </p>
              <p className="label text-ivory/70 tracking-[0.4em] text-[0.6rem] mt-3 uppercase drop-shadow-md">
                IVORY ATELIER
              </p>
            </div>

            {/* Bottom-right — tag line */}
            <div className="max-w-[180px] sm:max-w-[260px] text-right hidden sm:block">
              <div className="h-px bg-ivory/30 w-full mb-3 ml-auto" />
              <p className="label text-ivory/60 tracking-[0.2em] text-[0.52rem] leading-loose">
                A quieter kind of beautiful.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STORY GRID */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-10 md:pb-32">
        <div className="grid md:grid-cols-12 gap-16 md:gap-0 items-center md:border-t border-espresso/15 pt-8 md:pt-20">

          {/* Left Column: Text */}
          <div className="order-2 md:order-1 md:col-span-6 md:pr-16">
            <div className="hairline w-16 mb-6" />
            <p className="font-display text-3xl sm:text-[2.25rem] leading-[1.25] text-espresso">
              Ivory Atelier began with a small discomfort - that looking after
              yourself had become loud, rushed and transactional. <br /><br /><span className="italic text-brass font-light">We wanted the opposite.</span>
            </p>
            <div className="mt-8 space-y-4 text-base sm:text-lg text-espresso/70 leading-[1.6] font-light">
              <p>
                A house where beauty is practised as craft and guests are received as
                guests: unhurried rooms, honest materials, exceptional coffee, and
                hands that know their work.
              </p>
              <p>
                <em className="font-display text-xl md:text-2xl text-espresso not-italic mr-1">Ivory,</em> for warmth and for
                things that outlast fashion. <em className="font-display text-xl md:text-2xl text-espresso not-italic mx-1">Atelier,</em>
                for the workshop of a maker.
              </p>
              <p>
                Together - a sanctuary where design, wellbeing and hospitality meet, and every detail is quietly,
                deliberately considered.
              </p>

              <div className="pt-6 space-y-5 border-t border-espresso/10 mt-8">
                <div>
                  <p className="font-display text-xl text-espresso mb-0.5">Purpose</p>
                  <p className="italic leading-relaxed text-sm text-espresso/60">"To make the care of oneself feel like a return, not a routine - a quiet hour that gives people back to themselves."</p>
                </div>
                <div>
                  <p className="font-display text-xl text-espresso mb-0.5">Mission</p>
                  <p className="italic leading-relaxed text-sm text-espresso/60">"We practise hair, skin and nail work as craft, and hospitality as an art - under one calm roof, with a café at its heart."</p>
                </div>
                <div>
                  <p className="font-display text-xl text-espresso mb-0.5">Vision</p>
                  <p className="italic leading-relaxed text-sm text-espresso/60">"To become the most gracious address in the city for beauty - spoken of the way people speak of a beloved hotel."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 mb-10 md:mb-0">
            <figure className="relative w-full h-[40vh] md:h-auto aspect-square md:aspect-[7/8] rounded-sm overflow-hidden group md:shadow-[0_20px_40px_-15px_rgba(51,38,29,0.25)]">
              <img
                src="/images/story/club-3.jpg"
                alt="Interior of Ivory Atelier"
                className="absolute inset-0 w-full h-full object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-espresso/5 mix-blend-multiply pointer-events-none"></div>
            </figure>
          </div>

        </div>
      </section>

      {/* PLUME MEANING */}
      <section className="bg-espresso text-ivory/90 selection:bg-brass selection:text-espresso">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-8 items-center md:border-t border-ivory/10 md:pt-20">

            <div className="md:col-span-5 flex justify-center md:justify-start">
              <img
                src="/images/logo-icon.png"
                alt="Plume Graphic"
                className="h-40 w-auto md:h-72 object-contain animate-float"
              />
            </div>

            <div className="md:col-span-7">
              <p className="label text-brass tracking-[0.3em] uppercase">The meaning of the mark</p>
              <h2 className="mt-4 md:mt-6 font-display text-5xl md:text-[4.5rem] leading-tight md:leading-[1.1]">
                A single peacock <span className="italic text-brass font-light">plume.</span>
              </h2>
              <p className="mt-6 md:mt-8 max-w-xl text-lg text-ivory/70 leading-[1.8] font-light">
                The motif set into our floor, redrawn as one clean line. One plume,
                not the full fan - beauty hinted at, never performed. A quieter
                kind of beautiful.
              </p>

              <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 sm:grid-cols-2">
                {[
                  { h: "Beauty, held back", p: "Restraint as luxury. Never performed." },
                  { h: "Renewal", p: "A feather shed and grown again. You leave a little more yourself." },
                  { h: "The eye", p: "Attention, and protection. A house that notices the smallest things." },
                  { h: "Roots", p: "India's bird, and Krishna's mor pankh. Grounded in Mumbai." },
                ].map((x) => (
                  <div key={x.h} className="group md:border-l border-brass/20 md:pl-6 hover:border-brass/60 transition-colors">
                    <h3 className="font-display text-2xl text-brass">{x.h}</h3>
                    <p className="mt-2 md:mt-3 text-ivory/60 font-light leading-[1.6]">{x.p}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 md:border-t border-espresso/15 md:pt-20">
          <div className="md:col-span-5">
            <p className="label text-brass tracking-[0.3em] uppercase">04 · Positioning</p>
            <h2 className="mt-6 font-display text-5xl sm:text-[4rem] leading-tight md:leading-[1.1] text-espresso">
              Closer to a <br className="hidden md:block" />
              <span className="italic text-brass font-light">members' club</span> <br className="hidden md:block" /> than a beauty chair.
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center border-t border-espresso/15 pt-14 md:border-0 md:pt-0">
            <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { h: "A sanctuary,", p: "not a service counter." },
                { h: "Craft,", p: "not trend." },
                { h: "Hospitality,", p: "not a transaction." },
              ].map((x) => (
                <div key={x.h} className="group md:border-l border-espresso/10 md:pl-6 hover:border-espresso/30 transition-colors">
                  <p className="font-display text-4xl md:text-3xl text-espresso group-hover:text-brass transition-colors">{x.h}</p>
                  <p className="label mt-3 md:mt-4 text-espresso/50 tracking-[0.2em]">{x.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMBIENT CAROUSEL */}
      <section className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-10 sm:pb-32">
        <figure className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-sm overflow-hidden shadow-xl bg-espresso">
          {CLUB_IMAGES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Ivory Atelier Club ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImg ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-espresso/10 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brass/20 to-transparent mix-blend-overlay pointer-events-none"></div>

          {/* Carousel indicators */}
          <div className="absolute bottom-6 inset-x-0 flex justify-center gap-3 z-10">
            {CLUB_IMAGES.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-500 ${idx === currentImg ? "w-8 bg-ivory" : "w-2 bg-ivory/40"}`}
              />
            ))}
          </div>
        </figure>
      </section>
    </>
  );
}