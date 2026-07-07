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
    <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-36 sm:px-10 sm:pt-44 sm:pb-32">
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
        <div className="relative flex flex-col items-center justify-center rounded-sm bg-alabaster p-12 text-center shadow-[0_40px_80px_-40px_rgba(51,38,29,0.35)] min-h-[500px] border border-espresso/15">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brass/10 text-brass mb-8">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-display text-3xl text-espresso mb-4">Schedule Your Visit</h2>
          <p className="text-espresso/70 mb-10 max-w-sm">
            You will be redirected to our secure booking portal to select your preferred service and time.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-center gap-3 bg-espresso px-8 py-4 text-sm tracking-widest text-ivory transition-colors hover:bg-brass w-full max-w-xs"
          >
            <span>OPEN BOOKING PORTAL</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}