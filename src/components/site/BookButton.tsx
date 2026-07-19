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

  const isCafe = pathname === "/cafe";

  return (
    <a
      id="global-book-btn"
      href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a consultation with Ivory Atelier"
      className={`group fixed z-50 flex items-center rounded-full bg-espresso text-alabaster ring-1 ring-brass/40 transition-all duration-500 hover:shadow-[0_22px_60px_-18px_rgba(51,38,29,0.7)] ${
        isCafe 
          ? "bottom-4 right-3 gap-2 pl-1.5 pr-3 py-1.5 sm:gap-3 sm:bottom-8 sm:right-8 sm:pl-2 sm:pr-5 sm:py-2 sm:hover:pr-6 shadow-md sm:shadow-[0_18px_40px_-18px_rgba(51,38,29,0.55)]"
          : "bottom-5 right-5 gap-3 pl-2 pr-5 py-2 sm:bottom-8 sm:right-8 hover:pr-6 shadow-[0_18px_40px_-18px_rgba(51,38,29,0.55)]"
      }`}
    >
      <span className={`grid place-items-center rounded-full bg-brass/15 text-brass ring-1 ring-brass/40 transition-transform duration-500 group-hover:rotate-[8deg] ${
        isCafe ? "h-7 w-7 sm:h-9 sm:w-9" : "h-9 w-9"
      }`}>
        <Plume className={isCafe ? "h-3.5 w-3.5 sm:h-5 sm:w-5" : "h-5 w-5"} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`label text-brass/90 ${isCafe ? "text-[0.55rem] sm:text-[0.65rem] leading-[1]" : ""}`}>Reserve</span>
        <span className={`font-display italic tracking-tight text-alabaster ${
          isCafe ? "text-[0.85rem] sm:text-base leading-[1.2]" : "text-base"
        }`}>
          Book Consultation
        </span>
      </span>
    </a>
  );
}