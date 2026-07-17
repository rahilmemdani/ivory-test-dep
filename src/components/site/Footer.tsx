import Link from "next/link";
import { Plume } from "./Plume";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-10 sm:px-10 sm:pt-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-alabaster">
              <img 
                src="/images/logo-icon.png" 
                alt="Ivory Atelier" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 -ml-1" 
              />
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
              <li><Link href="/" className="hover:text-brass">Home</Link></li>
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
              <li><a href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier" target="_blank" rel="noopener noreferrer" className="hover:text-brass">Book a Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="label text-brass">Address</h4>
            <address className="mt-5 space-y-1 not-italic text-ivory/75">
              <a href="https://www.google.com/maps/place/Ivory+Atelier/@19.1077575,72.8275881,938m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c9b9acf4b747:0x6796209d19d4904c!8m2!3d19.1077575!4d72.830163!16s%2Fg%2F11zgm1q79v?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="block hover:text-brass transition-colors">
                <p>Plot Number 35, Rameshwar</p>
                <p>10th Gulmohar Cross Rd</p>
                <p>Juhu, Mumbai 400049</p>
              </a>
              <a href="mailto:hello@ivoryatelier.in" className="block pt-3 hover:text-brass transition-colors">hello@ivoryatelier.in</a>
              <a href="tel:+919920631414" className="block hover:text-brass transition-colors">+91 99206 31414</a>
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