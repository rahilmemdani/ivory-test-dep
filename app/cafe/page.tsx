import cafeImg from "@/assets/cafe.jpg";
import { Plume } from "@/components/site/Plume";


const menu = {
  Coffee: [
    { n: "Single-origin filter", d: "Slow-poured, rotated seasonally", p: "₹ 240" },
    { n: "Cortado", d: "Two parts espresso, one part warmed milk", p: "₹ 260" },
    { n: "Rose cardamom latte", d: "The house signature", p: "₹ 320" },
    { n: "Iced long black", d: "Ethiopia · Yirgacheffe", p: "₹ 280" },
  ],
  Tea: [
    { n: "Assam second flush", d: "Steeped 4 minutes", p: "₹ 220" },
    { n: "Kashmiri kahwa", d: "Saffron, almond, cardamom", p: "₹ 260" },
    { n: "Chamomile & fennel", d: "Caffeine-free, warming", p: "₹ 200" },
  ],
  Kitchen: [
    { n: "Saffron tea cake", d: "With clotted cream", p: "₹ 340" },
    { n: "Pistachio financier", d: "Baked each morning", p: "₹ 280" },
    { n: "Ivory shortbread", d: "Butter, salt, restraint", p: "₹ 220" },
    { n: "Toast, cultured butter & honey", d: "Sourdough, warm", p: "₹ 260" },
  ],
};

export default function Cafe() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 sm:pt-44">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-20 sm:px-10 md:grid-cols-[1fr_1.1fr]">
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

      <section className="bg-alabaster">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-10 sm:py-32">
          <header className="flex items-center gap-4">
            <Plume className="h-10 w-10 text-brass" />
            <h2 className="font-display text-5xl text-espresso sm:text-6xl">
              The <span className="italic">menu.</span>
            </h2>
          </header>

          <div className="mt-16 grid gap-16 md:grid-cols-3">
            {Object.entries(menu).map(([section, items]) => (
              <div key={section}>
                <h3 className="label border-b border-espresso/20 pb-3 text-brass">
                  {section}
                </h3>
                <ul className="mt-6 space-y-6">
                  {items.map((it) => (
                    <li key={it.n}>
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                        <p className="min-w-0 font-display text-xl text-espresso">
                          {it.n}
                        </p>
                        <p className="font-display italic text-brass">{it.p}</p>
                      </div>
                      <p className="label mt-1 normal-case tracking-normal text-espresso/55">
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