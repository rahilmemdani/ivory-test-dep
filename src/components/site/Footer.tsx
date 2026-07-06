import Link from "next/link";
import { Plume } from "./Plume";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-10 sm:px-10 sm:pt-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-alabaster">
              <Plume className="h-9 w-9 text-brass" />
              <span className="font-display text-xl tracking-[0.32em] uppercase">
                Ivory Atelier
              </span>
            </div>
            <p className="mt-6 max-w-sm font-display text-3xl leading-tight text-ivory/85">
              A quieter kind of&nbsp;beautiful.
            </p>
            <p className="label mt-4 text-ivory/45">
              आयवरी एटेलियर · हेयर | नेल्स | ब्यूटी
            </p>
          </div>

          <div>
            <h4 className="label text-brass">The House</h4>
            <ul className="mt-5 space-y-3 text-ivory/75">
              <li><Link href="/story" className="hover:text-brass">The Story</Link></li>
              <li><Link href="/journey" className="hover:text-brass">The Unhurried Hour</Link></li>
              <li><Link href="/cafe" className="hover:text-brass">The Café</Link></li>
              <li><Link href="/contact" className="hover:text-brass">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label text-brass">Craft</h4>
            <ul className="mt-5 space-y-3 text-ivory/75">
              <li><Link href="/services" className="hover:text-brass">Hair</Link></li>
              <li><Link href="/services" className="hover:text-brass">Nails</Link></li>
              <li><Link href="/services" className="hover:text-brass">Beauty</Link></li>
              <li><Link href="/book" className="hover:text-brass">Book a Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label text-brass">Address</h4>
            <address className="mt-5 space-y-1 not-italic text-ivory/75">
              <p>Ivory Atelier House</p>
              <p>Bandra West, Mumbai</p>
              <p className="pt-3">hello@ivoryatelier.in</p>
              <p>+91 00000 00000</p>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center">
          <p className="label text-ivory/45">© 2026 Ivory Atelier · Volume I</p>
          <p className="label text-ivory/45">
            Held to calm, craft &amp; warmth.
          </p>
        </div>
      </div>
    </footer>
  );
}