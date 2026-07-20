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
        scrolled || open
          ? "bg-ivory/95 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(51,38,29,0.12)]"
          : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Top bar */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-10 sm:py-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-espresso"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo-icon.png"
            alt="Ivory Atelier"
            className="h-12 w-auto object-contain -ml-1 sm:h-16"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base tracking-[0.3em] uppercase text-brass font-semibold sm:text-xl sm:tracking-[0.36em]">
              Ivory Atelier
            </span>
            <span className="mt-1 text-[0.52rem] tracking-[0.2em] uppercase font-sans font-normal text-espresso/60 sm:mt-1.5 sm:text-[0.6rem] sm:tracking-[0.22em]">
              Hair · Nails · Beauty · Café
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`relative text-[0.72rem] font-sans font-medium uppercase tracking-[0.26em] transition-colors hover:text-brass ${
                pathname === l.to
                  ? "text-espresso after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-brass"
                  : "text-espresso/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] font-sans font-medium uppercase tracking-[0.26em] rounded-full border border-espresso px-5 py-2.5 text-espresso transition-all hover:border-brass hover:bg-espresso hover:text-alabaster"
          >
            Book
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-espresso/40 text-espresso transition-colors hover:border-brass lg:hidden"
        >
          {/* Three lines → X */}
          <span className="flex flex-col gap-[5px] w-[18px]">
            <span
              className={`block h-px w-full bg-current origin-center transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current origin-center transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-8 pt-1 sm:px-10">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-t py-4 transition-colors ${
                  isActive
                    ? "border-brass/30 text-brass"
                    : "border-espresso/10 text-espresso hover:text-brass"
                }`}
              >
                <span className="font-display text-2xl">{l.label}</span>
                <span
                  className={`text-base transition-colors ${
                    isActive ? "text-brass" : "text-espresso/30"
                  }`}
                >
                  →
                </span>
              </Link>
            );
          })}

          {/* Book CTA */}
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-between rounded-full bg-espresso px-6 py-4 text-alabaster transition-opacity hover:opacity-90"
          >
            <span className="font-display text-xl italic">Book Consultation</span>
            <Plume className="h-5 w-5 shrink-0 text-brass" />
          </a>
        </nav>
      </div>
    </header>
  );
}