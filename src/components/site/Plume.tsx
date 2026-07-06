import type { SVGProps } from "react";

/**
 * The plume — Ivory Atelier's silent mark. A single stylised peacock plume
 * drawn as one clean line. Used for stamps, buttons, favicons and quiet
 * punctuation across the site.
 */
export function Plume({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none">
        {/* rays */}
        <path d="M32 46 L14 12" />
        <path d="M32 46 L20 8" />
        <path d="M32 46 L26 6" />
        <path d="M32 46 L32 4" />
        <path d="M32 46 L38 6" />
        <path d="M32 46 L44 8" />
        <path d="M32 46 L50 12" />
        {/* stem + eye */}
        <path d="M32 46 L32 88" />
        <ellipse cx="32" cy="66" rx="4" ry="10" />
        <ellipse cx="32" cy="66" rx="7" ry="14" />
      </g>
    </svg>
  );
}