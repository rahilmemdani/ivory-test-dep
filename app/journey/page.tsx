import { Plume } from "@/components/site/Plume";


const acts = [
  {
    n: "01",
    h: "The Arrival",
    p: "Gates, greenery, warm light — and a name remembered. You are expected.",
  },
  {
    n: "02",
    h: "The Welcome",
    p: "No counter. A seat, a coffee, and an unhurried hello. The afternoon slows.",
  },
  {
    n: "03",
    h: "The Ritual",
    p: "The craft itself — done with care, and quiet. Time enough to be still.",
  },
  {
    n: "04",
    h: "The Café",
    p: "A pause worth staying for. Coffee, a moment, a slice of saffron tea cake.",
  },
  {
    n: "05",
    h: "The Farewell",
    p: "Walked to the door, a little more yourself than when you came.",
  },
];

export default function Journey() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-36 sm:px-10 sm:pt-44">
        <p className="label text-brass">16 · Experience</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-espresso">
          The <span className="italic text-brass">unhurried</span> hour.
        </h1>
        <p className="mt-8 max-w-xl text-lg italic text-espresso/75">
          Every moment is designed to lower the pulse.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-32 sm:px-10">
        <ol className="relative">
          <div
            aria-hidden
            className="absolute left-[22px] top-4 bottom-4 w-px bg-espresso/15 md:left-[36px]"
          />
          {acts.map((a, i) => (
            <li
              key={a.n}
              className="relative grid grid-cols-[48px_1fr] gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10"
            >
              <div className="relative flex flex-col items-center">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-brass/60 bg-ivory text-brass md:h-[72px] md:w-[72px]">
                  <Plume className="h-6 w-6 md:h-9 md:w-9" />
                </span>
              </div>
              <div className="min-w-0 border-t border-espresso/10 pt-6">
                <p className="label text-brass">{a.n}</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-espresso sm:text-5xl">
                  {a.h}
                </h2>
                <p className="mt-4 max-w-2xl text-espresso/75">{a.p}</p>
              </div>
              {i === acts.length - 1 && null}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}