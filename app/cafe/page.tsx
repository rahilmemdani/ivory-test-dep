import cafeImg from "@/assets/cafe.jpg";
import { Plume } from "@/components/site/Plume";


const menu = {
  Coffee: [
    { n: "Single-origin filter", d: "Slow-poured, rotated seasonally" },
    { n: "Cortado", d: "Two parts espresso, one part warmed milk" },
    { n: "Rose cardamom latte", d: "The house signature" },
    { n: "Iced long black", d: "Ethiopia · Yirgacheffe" },
  ],
  Tea: [
    { n: "Assam second flush", d: "Steeped 4 minutes" },
    { n: "Kashmiri kahwa", d: "Saffron, almond, cardamom" },
    { n: "Chamomile & fennel", d: "Caffeine-free, warming" },
  ],
  Kitchen: [
    { n: "Saffron tea cake", d: "With clotted cream" },
    { n: "Pistachio financier", d: "Baked each morning" },
    { n: "Ivory shortbread", d: "Butter, salt, restraint" },
    { n: "Toast, cultured butter & honey", d: "Sourdough, warm" },
  ],
};

export default function Cafe() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 sm:px-10 md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <p className="label text-brass">The Café — the heart</p>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] text-espresso">
              A pause worth
              <br />
              <span className="italic text-brass">staying for.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg text-espresso/75">
              The café is the social centre of the atelier — a place to wait, to
              linger, or to arrive on purpose. Single-origin coffee, honest tea,
              and small things baked each morning.
            </p>
          </div>
          <figure>
            <img
              src={cafeImg.src}
              alt="A cortado and pistachio financier on marble."
              width={1400}
              height={1200}
              className="w-full rounded-sm object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="gradient-ivory">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-10 sm:py-24">
          <header className="flex items-center gap-6 mb-12">
            <Plume className="h-12 w-12 text-brass/80 animate-float" />
            <h2 className="font-display text-6xl text-espresso sm:text-7xl tracking-tight">
              The <span className="italic">menu.</span>
            </h2>
          </header>

          <div className="mt-16 grid gap-16 md:grid-cols-3">
            {Object.entries(menu).map(([section, items]) => (
              <div key={section}>
                <h3 className="label border-b border-espresso/15 pb-4 text-brass tracking-[0.3em]">
                  {section}
                </h3>
                <ul className="mt-8 space-y-8">
                  {items.map((it) => (
                    <li key={it.n} className="group cursor-default">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-display text-2xl text-espresso transition-colors group-hover:text-brass">
                          {it.n}
                        </p>
                        <span className="flex-1 border-b border-dotted border-espresso/20 mx-2 transition-colors group-hover:border-brass/30"></span>
                      </div>
                      <p className="label mt-2 normal-case tracking-normal text-espresso/50 text-sm">
                        {it.d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-xl font-display text-2xl italic leading-relaxed text-espresso/70">
            "Take the afternoon. We'll take care of the rest."
          </p>
        </div>
      </section>
    </>
  );
}