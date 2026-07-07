"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Plume } from "./Plume";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Handle route change complete (fade out the loader)
  useEffect(() => {
    // Shorter delay for internal page switches so it feels snappy
    const timer1 = setTimeout(() => {
      setIsLoading(false);
    }, 600); 

    const timer2 = setTimeout(() => {
      setShow(false);
    }, 1600); // 600 + 1000ms fade

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, searchParams]);

  // Intercept link clicks to show loader BEFORE navigating
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href) {
        // Skip links that open in a new tab
        if (target.target === "_blank") return;
        
        // Skip hash links or tel/mailto
        const href = target.getAttribute("href");
        if (!href) return;
        if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return;

        // Prevent immediate navigation
        e.preventDefault();
        e.stopPropagation();

        // Show the loader instantly
        setShow(true);
        setTimeout(() => setIsLoading(true), 10);

        // Wait for loader to fade in (800ms) BEFORE triggering navigation
        setTimeout(() => {
          if (href.startsWith("/") || target.href.startsWith(window.location.origin)) {
            router.push(href);
          } else {
            // External redirection (like Zoho)
            window.location.href = target.href;
          }
        }, 800);
      }
    };

    // Use capture phase to ensure we intercept before Next.js Link handles it
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [router]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ivory transition-opacity duration-1000 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-8 animate-float">
        <Plume className="h-20 w-20 text-brass" />
        <h1 className="font-display text-3xl sm:text-4xl tracking-[0.1em] text-espresso">
          Ivory Atelier
        </h1>
      </div>
    </div>
  );
}
