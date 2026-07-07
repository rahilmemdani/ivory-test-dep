"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plume } from "./Plume";

/**
 * Persistent booking button — bottom-right on every page.
 * Hidden on the /book page itself (would be redundant).
 */
export function BookButton() {
  const pathname = usePathname();
  if (pathname === "/book") return null;

  return (
    <a
      href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a consultation with Ivory Atelier"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-espresso pl-2 pr-5 py-2 text-alabaster shadow-[0_18px_40px_-18px_rgba(51,38,29,0.55)] ring-1 ring-brass/40 transition-all duration-500 hover:pr-6 hover:shadow-[0_22px_60px_-18px_rgba(51,38,29,0.7)] sm:bottom-8 sm:right-8"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-brass/15 text-brass ring-1 ring-brass/40 transition-transform duration-500 group-hover:rotate-[8deg]">
        <Plume className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="label text-brass/90">Reserve</span>
        <span className="font-display text-base italic tracking-tight text-alabaster">
          Book Consultation
        </span>
      </span>
    </a>
  );
}