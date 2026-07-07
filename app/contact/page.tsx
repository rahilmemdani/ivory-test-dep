import Link from "next/link";
import { Plume } from "@/components/site/Plume";


export default function Contact() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 sm:px-10 sm:pt-36 sm:pb-24">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="label text-brass">The address</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-espresso">
            Come in.
            <br />
            <span className="italic text-brass">Stay a while.</span>
          </h1>
          <p className="mt-8 max-w-md text-espresso/75">
            The kettle is on. If you'd like to visit, book a consultation and we'll
            hold a seat — coffee first, always.
          </p>
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            className="group mt-10 inline-flex items-center gap-4 rounded-none bg-espresso px-8 py-4 text-ivory transition-all duration-500 hover:bg-ink hover:text-brass shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(168,138,86,0.2)] border border-transparent hover:border-brass/30"
          >
            <span className="font-display text-lg italic tracking-wide">Book a consultation</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 text-brass">→</span>
          </a>
        </div>

        <div className="rounded-sm border border-espresso/15 bg-alabaster p-8 sm:p-12">
          <Plume className="h-10 w-10 text-brass" />
          <dl className="mt-8 space-y-8">
            {[
              {
                k: "Address",
                v: [
                  { text: "Ivory Atelier House" },
                  { text: "Off Waterfield Road" },
                  { text: "Bandra West, Mumbai 400050" },
                ],
                href: "https://maps.google.com/?q=Ivory+Atelier+House,Off+Waterfield+Road,Bandra+West,Mumbai+400050"
              },
              {
                k: "Hours",
                v: [
                  { text: "Tuesday — Sunday" },
                  { text: "10:00 — 20:00" },
                  { text: "Monday, by appointment" },
                ],
              },
              {
                k: "Write",
                v: [
                  { text: "hello@ivoryatelier.in", href: "mailto:hello@ivoryatelier.in" },
                  { text: "press@ivoryatelier.in", href: "mailto:press@ivoryatelier.in" },
                ],
              },
              {
                k: "Call",
                v: [
                  { text: "+91 00000 00000", href: "tel:+910000000000" },
                ],
              },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-t border-espresso/10 pt-6">
                <dt className="label text-brass">{row.k}</dt>
                <dd className="space-y-1 font-display text-lg text-espresso">
                  {row.href ? (
                    <a href={row.href} className="block hover:text-brass transition-colors">
                      {row.v.map((line, i) => <p key={i}>{line.text}</p>)}
                    </a>
                  ) : (
                    row.v.map((line, i) => (
                      'href' in line ? (
                        <a key={i} href={line.href} className="block hover:text-brass transition-colors">
                          {line.text}
                        </a>
                      ) : (
                        <p key={i}>{line.text}</p>
                      )
                    ))
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}