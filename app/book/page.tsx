"use client";

import Link from "next/link";
import Script from "next/script";
import { Plume } from "@/components/site/Plume";


/**
 * Third-party booking embed.
 * Set VITE_BOOKING_URL at build/deploy time to your Calendly / Cal.com /
 * Fresha / Zenoti / Vagaro widget URL. The default is a Calendly demo so the
 * page is never empty in preview.
 */
const BOOKING_URL =
  (process.env.NEXT_PUBLIC_BOOKING_URL as string | undefined) ??
  "https://ivoryatelier.zohobookings.com.au/#/ivoryatelier";

export default function Book() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 sm:px-10 sm:pt-36 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        {/* Left — narrative */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3 text-brass">
            <Plume className="h-8 w-8" />
            <p className="label">Reserve · An unhurried hour</p>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] text-espresso">
            Book a<br />
            <span className="italic text-brass">consultation.</span>
          </h1>
          <p className="mt-8 text-espresso/75">
            Every visit begins with a quiet conversation — over coffee, never over
            a counter. Choose a time that suits you; we'll take care of the rest.
          </p>

          <ul className="mt-10 space-y-6 border-t border-espresso/15 pt-8">
            {[
              { h: "60 minutes", p: "Complimentary. Coffee included." },
              { h: "In person", p: "Bandra West, Mumbai." },
              { h: "Discreet", p: "A private room. What happens here is yours." },
            ].map((x) => (
              <li key={x.h}>
                <p className="font-display text-2xl text-espresso">{x.h}</p>
                <p className="mt-1 text-espresso/60">{x.p}</p>
              </li>
            ))}
          </ul>

          <p className="label mt-10 text-espresso/50">
            Prefer to write? {" "}
            <a
              href="mailto:hello@ivoryatelier.in"
              className="border-b border-espresso/40 pb-0.5 text-espresso hover:border-brass hover:text-brass"
            >
              hello@ivoryatelier.in
            </a>
          </p>
        </aside>

        {/* Right — external link */}
        <div className="relative flex flex-col items-center justify-center rounded-sm gradient-ivory p-12 text-center shadow-[0_40px_80px_-40px_rgba(51,38,29,0.2)] min-h-[500px] border border-espresso/10 overflow-hidden group">
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
          
          <Plume className="mx-auto h-16 w-16 text-brass/80 mb-8 animate-float" />
          
          <h2 className="font-display text-4xl text-espresso mb-4 font-medium tracking-tight">Schedule Your Visit</h2>
          <p className="text-espresso/70 mb-10 max-w-sm leading-relaxed text-lg">
            You will be redirected to our secure booking portal to select your preferred service and time.
          </p>
          <a
            href={BOOKING_URL}
            className="group/btn relative flex items-center justify-center gap-3 bg-espresso px-8 py-5 text-sm tracking-[0.2em] uppercase text-ivory transition-all duration-500 hover:bg-ink hover:text-brass w-full max-w-sm rounded-none overflow-hidden border border-transparent hover:border-brass/30 shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(168,138,86,0.3)]"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover/btn:-translate-x-2">OPEN BOOKING PORTAL</span>
            <span className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-2 opacity-70">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}