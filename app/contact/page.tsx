import Link from "next/link";
import { Plume } from "@/components/site/Plume";

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 sm:px-10 sm:pt-36 sm:pb-24">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
        <div>
          {/* <p className="label text-brass">Contact</p> */}
          <h1 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-espresso">
            Visit us.
          </h1>
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            className="group mt-10 inline-flex items-center gap-4 rounded-none bg-espresso px-8 py-4 text-ivory transition-all duration-500 hover:bg-ink hover:text-brass shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(168,138,86,0.2)] border border-transparent hover:border-brass/30"
          >
            <span className="font-display text-lg italic tracking-wide">Book a consultation</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 text-brass">→</span>
          </a>
        </div>

        <div className="rounded-sm border border-espresso/15 bg-alabaster p-8 sm:p-12">

          <dl className="mt-8 space-y-8">
            {[
              {
                k: "Address",
                v: [
                  { text: "Ground Floor, Plot Number 35" },
                  { text: "Rameshwar, 10th Gulmohar Cross Rd" },
                  { text: "Nutan Laxmi Society, JVPD Scheme" },
                  { text: "Juhu, Vile Parle West" },
                  { text: "Mumbai, Maharashtra 400049" },
                ],
                href: "https://maps.google.com/?q=Ivory+Atelier,Plot+35,10th+Gulmohar+Cross+Rd,Juhu,Mumbai+400049",
              },
              {
                k: "Call",
                v: [
                  { text: "+91 99206 31414", href: "tel:+919920631414" },
                ],
              },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-t border-espresso/10 pt-6">
                <dt className="label text-brass">{row.k}</dt>
                <dd className="space-y-1 font-display text-lg text-espresso">
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noopener noreferrer" className="block hover:text-brass transition-colors">
                      {row.v.map((line, i) => <p key={i}>{line.text}</p>)}
                    </a>
                  ) : (
                    row.v.map((line, i) =>
                      "href" in line ? (
                        <a key={i} href={line.href} className="block hover:text-brass transition-colors">
                          {line.text}
                        </a>
                      ) : (
                        <p key={i}>{line.text}</p>
                      )
                    )
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