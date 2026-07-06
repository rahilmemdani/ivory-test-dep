import Link from "next/link";
import { Plume } from "@/components/site/Plume";


export default function Contact() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-36 sm:px-10 sm:pt-44 sm:pb-32">
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
          <Link
            href="/book"
            className="mt-10 inline-flex items-center gap-4 rounded-full bg-espresso px-7 py-4 text-alabaster transition-colors hover:bg-ink"
          >
            <span className="font-display text-lg italic">Book a consultation</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brass/20 text-brass">→</span>
          </Link>
        </div>

        <div className="rounded-sm border border-espresso/15 bg-alabaster p-8 sm:p-12">
          <Plume className="h-10 w-10 text-brass" />
          <dl className="mt-8 space-y-8">
            {[
              { k: "Address", v: ["Ivory Atelier House", "Off Waterfield Road", "Bandra West, Mumbai 400050"] },
              { k: "Hours", v: ["Tuesday — Sunday", "10:00 — 20:00", "Monday, by appointment"] },
              { k: "Write", v: ["hello@ivoryatelier.in", "press@ivoryatelier.in"] },
              { k: "Call", v: ["+91 00000 00000"] },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-t border-espresso/10 pt-6">
                <dt className="label text-brass">{row.k}</dt>
                <dd className="space-y-1 font-display text-lg text-espresso">
                  {row.v.map((line) => <p key={line}>{line}</p>)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}