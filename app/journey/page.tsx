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
        <header className="animate-fade-up">
          <p className="label text-brass tracking-[0.3em] uppercase">16 · Experience</p>
          <h1 className="mt-8 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-espresso">
            The <span className="italic text-brass font-light">unhurried</span> hour.
          </h1>
          <div className="mt-10 flex items-center gap-6">
            <div className="hairline w-16" />
            <p className="max-w-xl text-xl italic font-light text-espresso/70">
              Every moment is designed to lower the pulse.
            </p>
          </div>
        </header>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-32 sm:px-10">
        <ol className="relative">
          {/* Vertical Line */}
          <div
            aria-hidden
            className="absolute left-[22px] top-10 bottom-10 w-px bg-espresso/10 md:left-[36px]"
          />
          
          {acts.map((a, i) => (
            <li
              key={a.n}
              className="relative group grid grid-cols-[48px_1fr] gap-8 py-10 md:grid-cols-[80px_1fr] md:gap-14 animate-fade-up"
              style={{ animationDelay: `${(i * 150) + 200}ms`, animationFillMode: 'both' }}
            >
              <div className="relative flex flex-col items-center z-10">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-espresso/15 bg-ivory text-espresso/30 transition-all duration-700 group-hover:border-brass group-hover:text-brass group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(182,141,64,0.15)] md:h-[72px] md:w-[72px]">
                  <Plume className="h-5 w-5 md:h-8 md:w-8 transition-transform duration-700 group-hover:rotate-[360deg]" />
                </span>
              </div>
              
              <div className="min-w-0 border-t border-espresso/10 pt-8 transition-all duration-500 group-hover:border-brass/30 group-hover:translate-x-2">
                <p className="label text-brass tracking-[0.2em]">{a.n}</p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-[3.5rem] transition-colors duration-500 group-hover:text-brass">
                  {a.h}
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-espresso/70 font-light leading-relaxed">
                  {a.p}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}