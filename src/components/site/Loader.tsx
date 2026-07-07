"use client";

import { useEffect, useState } from "react";
import { Plume } from "./Plume";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1.5 seconds of full opacity before starting the fade
    const timer1 = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Completely remove from DOM after fade out finishes (fade is 1000ms)
    const timer2 = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ivory transition-opacity duration-1000 ease-in-out ${
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
