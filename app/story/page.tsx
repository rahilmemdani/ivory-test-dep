import spaceImg from "@/assets/space.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import { Plume } from "@/components/site/Plume";


export default function Story() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-28 sm:px-10 sm:pt-36">
        <header className="max-w-4xl relative z-10">
          <div className="flex items-center gap-6 mb-10">
            <Plume className="h-10 w-10 text-brass animate-float" />
            <p className="label text-brass tracking-[0.3em]">03 · Brand Story</p>
          </div>
          <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.85] text-espresso tracking-tight">
            An atelier,
            <br />
            <span className="italic text-brass font-light">not a salon.</span>
          </h1>
        </header>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-10 md:pb-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.3fr] items-start md:gap-24">
          <div className="order-2 md:order-1 md:pr-12 md:sticky md:top-40 animate-fade-up [animation-delay:400ms]">
            <div className="hairline w-24 mb-16" />
            <p className="font-display text-3xl sm:text-[2.75rem] leading-[1.3] text-espresso">
              Ivory Atelier began with a small discomfort — that looking after
              yourself had become loud, rushed and transactional. <br /><br /><span className="italic text-brass font-light">We wanted the opposite.</span>
            </p>
            <div className="mt-16 space-y-10 text-lg text-espresso/75 leading-[1.8] font-light">
              <p>
                A house where beauty is practised as craft and guests are received as
                guests: unhurried rooms, honest materials, exceptional coffee, and
                hands that know their work.
              </p>
              <p>
                <em className="font-display text-3xl text-espresso not-italic mr-1">Ivory,</em> for warmth and for
                things that outlast fashion. <em className="font-display text-3xl text-espresso not-italic mx-1">Atelier,</em>
                for the workshop of a maker.
              </p>
              <p>
                Together — a sanctuary where design, wellbeing and hospitality meet, and every detail is quietly,
                deliberately considered.
              </p>
            </div>
          </div>
          <figure className="order-1 md:order-2 relative w-full h-[60vh] md:h-[85vh] rounded-[4px] overflow-hidden group shadow-[0_30px_60px_-20px_rgba(51,38,29,0.3)] animate-fade-in [animation-delay:600ms]">
            <img
              src={heroInterior.src}
              alt="Interior of Ivory Atelier — warm light, marble, brass and eucalyptus."
              width={1600}
              height={1920}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover contrast-[1.05] sepia-[0.15] brightness-[0.95] transition-all duration-[2000ms] ease-out group-hover:scale-[1.03] group-hover:sepia-0 group-hover:brightness-100"
            />
            {/* Cinematic warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent mix-blend-multiply opacity-40 pointer-events-none transition-opacity duration-1000 group-hover:opacity-0"></div>
          </figure>
        </div>
      </section>

      {/* PLUME MEANING */}
      <section className="bg-espresso text-ivory/90 selection:bg-brass selection:text-espresso">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-16 md:grid-cols-[auto_1fr] md:gap-28">
            <div className="flex justify-center md:justify-start">
              <Plume className="h-40 w-40 shrink-0 text-brass md:h-64 md:w-64 animate-float" />
            </div>
            <div>
              <p className="label text-brass tracking-[0.3em]">The meaning of the mark</p>
              <h2 className="mt-6 font-display text-5xl leading-tight sm:text-[4rem]">
                A single peacock <span className="italic text-brass font-light">plume.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg text-ivory/70 leading-relaxed font-light">
                The motif set into our floor, redrawn as one clean line. One plume,
                not the full fan — beauty hinted at, never performed. A quieter
                kind of beautiful.
              </p>
              <div className="mt-16 grid gap-12 sm:grid-cols-2">
                {[
                  { h: "Beauty, held back", p: "Restraint as luxury. Never performed." },
                  { h: "Renewal", p: "A feather shed and grown again. You leave a little more yourself." },
                  { h: "The eye", p: "Attention, and protection. A house that notices the smallest things." },
                  { h: "Roots", p: "India's bird, and Krishna's mor pankh. Grounded in Mumbai." },
                ].map((x) => (
                  <div key={x.h} className="group border-l border-brass/20 pl-6 hover:border-brass/50 transition-colors">
                    <h3 className="font-display text-2xl text-brass">{x.h}</h3>
                    <p className="mt-3 text-ivory/60 font-light leading-relaxed">{x.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <p className="label text-brass tracking-[0.3em]">04 · Positioning</p>
        <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1.1] text-espresso sm:text-7xl">
          Closer to a{" "}
          <span className="italic text-brass font-light">members' club</span> than a beauty
          chair.
        </h2>
        <div className="mt-20 grid gap-12 border-t border-espresso/15 pt-16 md:grid-cols-3">
          {[
            { h: "A sanctuary", p: "not a service counter" },
            { h: "Craft", p: "not trend" },
            { h: "Hospitality", p: "not a transaction" },
          ].map((x) => (
            <div key={x.h} className="group">
              <p className="font-display text-4xl text-espresso group-hover:text-brass transition-colors">{x.h}</p>
              <p className="label mt-4 text-espresso/50 tracking-[0.2em]">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMBIENT IMG */}
      <section className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-10 sm:pb-32">
        <figure className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[4px] overflow-hidden shadow-2xl">
          <img
            src={spaceImg.src}
            alt="Arched interior of the atelier."
            width={1600}
            height={1100}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover contrast-[1.05] brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-espresso/20 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brass/20 to-transparent mix-blend-overlay pointer-events-none"></div>
        </figure>
      </section>
    </>
  );
}