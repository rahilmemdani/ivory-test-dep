import Link from "next/link";
import { Plume } from "@/components/site/Plume";


/**
 * Third-party booking embed.
 * Set VITE_BOOKING_URL at build/deploy time to your Calendly / Cal.com /
 * Fresha / Zenoti / Vagaro widget URL. The default is a Calendly demo so the
 * page is never empty in preview.
 */
const BOOKING_URL =
  (process.env.NEXT_PUBLIC_BOOKING_URL as string | undefined) ??
  "https://ivoryatelier.zohobookings.com.au/portal-embed#/35653000000044005";

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

        {/* Right — embed */}
        <div className="relative">
          <div className="overflow-hidden rounded-sm border border-espresso/15 bg-alabaster shadow-[0_40px_80px_-40px_rgba(51,38,29,0.35)]">
            <div className="flex items-center justify-between border-b border-espresso/10 bg-ivory px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brass/70" />
                <span className="h-2 w-2 rounded-full bg-sage/60" />
                <span className="h-2 w-2 rounded-full bg-sand" />
              </div>
              <p className="label text-espresso/50">Secure Scheduling</p>
            </div>
            <iframe
              title="Book a consultation with Ivory Atelier"
              src={BOOKING_URL}
              className="block h-[820px] w-full border-0 bg-alabaster"
              loading="lazy"
              allow="camera; microphone; fullscreen"
            />
          </div>

          <p className="label mt-6 text-espresso/45">
            Powered by a secure third-party scheduling service. If the calendar
            does not load,{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-espresso/40 pb-0.5 text-espresso hover:border-brass hover:text-brass"
            >
              open it in a new tab
            </a>
            . Or return to the{" "}
            <Link href="/" className="border-b border-espresso/40 pb-0.5 text-espresso hover:border-brass hover:text-brass">
              atelier
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}