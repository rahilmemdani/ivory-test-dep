"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Plume } from "./Plume";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/story", label: "The Story" },
  { to: "/journey", label: "The Hour" },
  { to: "/cafe", label: "The Café" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let currentLastScrollY = window.scrollY;
    
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 12);
      
      if (currentScrollY > currentLastScrollY && currentScrollY > 80 && !open) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      currentLastScrollY = currentScrollY;
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/70 backdrop-blur-xl border-b border-espresso/10"
          : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-10 sm:py-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-espresso"
          onClick={() => setOpen(false)}
        >
          <img 
            src="/images/logo-icon.png" 
            alt="Ivory Atelier" 
            className="h-14 w-auto object-contain -ml-1" 
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-[0.32em] uppercase text-brass">
              Ivory Atelier
            </span>
            <span className="label mt-1 text-[0.55rem] text-espresso/60">
              Hair · Nails · Beauty · Café
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="label text-espresso/70 transition-colors hover:text-brass"
              
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            target="_blank" rel="noopener noreferrer"
            className="label rounded-full border border-espresso/60 px-5 py-2.5 text-espresso transition-colors hover:border-brass hover:bg-espresso hover:text-alabaster"
          >
            Book
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-espresso/30 text-espresso lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-ivory/95 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-8 pt-2 sm:px-10">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-t border-espresso/10 py-4 text-espresso"
            >
              <span className="font-display text-2xl">{l.label}</span>
              <span className="label text-espresso/40">→</span>
            </Link>
          ))}
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-between rounded-full bg-espresso px-5 py-4 text-alabaster"
          >
            <span className="font-display text-xl italic">Book Consultation</span>
            <Plume className="h-6 w-6 text-brass" />
          </a>
        </nav>
      </div>
    </header>
  );
}