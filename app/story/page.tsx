import spaceImg from "@/assets/space.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import { Plume } from "@/components/site/Plume";


export default function Story() {
  return (
    <>
      {/* HEADER */}
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 sm:px-10 sm:pt-40">
        <header className="max-w-4xl relative z-10">
          <div className="flex items-center gap-6 mb-10">
            <Plume className="h-10 w-10 text-brass animate-float" />
            <p className="label text-brass tracking-[0.3em] uppercase">03 · Brand Story</p>
          </div>
          <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.85] text-espresso tracking-tight">
            An atelier,
            <br />
            <span className="italic text-brass font-light">not a salon.</span>
          </h1>
        </header>
      </section>

      {/* STORY GRID */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-10 md:pb-32">
        <div className="grid md:grid-cols-12 gap-16 md:gap-0 items-center md:border-t border-espresso/15 pt-8 md:pt-20">
          
          {/* Left Column: Text */}
          <div className="order-2 md:order-1 md:col-span-6 md:pr-16">
            <div className="hairline w-24 mb-10" />
            <p className="font-display text-3xl sm:text-[2.75rem] leading-[1.3] text-espresso">
              Ivory Atelier began with a small discomfort — that looking after
              yourself had become loud, rushed and transactional. <br /><br /><span className="italic text-brass font-light">We wanted the opposite.</span>
            </p>
            <div className="mt-14 space-y-8 text-lg text-espresso/70 leading-[1.7] font-light">
              <p>
                A house where beauty is practised as craft and guests are received as
                guests: unhurried rooms, honest materials, exceptional coffee, and
                hands that know their work.
              </p>
              <p>
                <em className="font-display text-2xl md:text-[1.75rem] text-espresso not-italic mr-1">Ivory,</em> for warmth and for
                things that outlast fashion. <em className="font-display text-2xl md:text-[1.75rem] text-espresso not-italic mx-1">Atelier,</em>
                for the workshop of a maker.
              </p>
              <p>
                Together — a sanctuary where design, wellbeing and hospitality meet, and every detail is quietly,
                deliberately considered.
              </p>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 mb-10 md:mb-0">
            <figure className="relative w-full h-[50vh] md:h-auto aspect-auto md:aspect-[4/5] rounded-sm overflow-hidden group md:shadow-[0_20px_40px_-15px_rgba(51,38,29,0.25)]">
              <img
                src={heroInterior.src}
                alt="Interior of Ivory Atelier"
                width={1600}
                height={1920}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-espresso/5 mix-blend-multiply pointer-events-none"></div>
            </figure>
          </div>
          
        </div>
      </section>

      {/* PLUME MEANING */}
      <section className="bg-espresso text-ivory/90 selection:bg-brass selection:text-espresso">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-8 items-center md:border-t border-ivory/10 md:pt-20">
            
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <Plume className="h-40 w-40 text-brass md:h-72 md:w-72 animate-float" />
            </div>
            
            <div className="md:col-span-7">
              <p className="label text-brass tracking-[0.3em] uppercase">The meaning of the mark</p>
              <h2 className="mt-4 md:mt-6 font-display text-5xl md:text-[4.5rem] leading-tight md:leading-[1.1]">
                A single peacock <span className="italic text-brass font-light">plume.</span>
              </h2>
              <p className="mt-6 md:mt-8 max-w-xl text-lg text-ivory/70 leading-[1.8] font-light">
                The motif set into our floor, redrawn as one clean line. One plume,
                not the full fan — beauty hinted at, never performed. A quieter
                kind of beautiful.
              </p>
              
              <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 sm:grid-cols-2">
                {[
                  { h: "Beauty, held back", p: "Restraint as luxury. Never performed." },
                  { h: "Renewal", p: "A feather shed and grown again. You leave a little more yourself." },
                  { h: "The eye", p: "Attention, and protection. A house that notices the smallest things." },
                  { h: "Roots", p: "India's bird, and Krishna's mor pankh. Grounded in Mumbai." },
                ].map((x) => (
                  <div key={x.h} className="group md:border-l border-brass/20 md:pl-6 hover:border-brass/60 transition-colors">
                    <h3 className="font-display text-2xl text-brass">{x.h}</h3>
                    <p className="mt-2 md:mt-3 text-ivory/60 font-light leading-[1.6]">{x.p}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 md:border-t border-espresso/15 md:pt-20">
          <div className="md:col-span-5">
             <p className="label text-brass tracking-[0.3em] uppercase">04 · Positioning</p>
             <h2 className="mt-6 font-display text-5xl sm:text-[4rem] leading-tight md:leading-[1.1] text-espresso">
               Closer to a <br className="hidden md:block"/>
               <span className="italic text-brass font-light">members' club</span> <br className="hidden md:block"/> than a beauty chair.
             </h2>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center border-t border-espresso/15 pt-14 md:border-0 md:pt-0">
             <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { h: "A sanctuary", p: "not a service counter" },
                { h: "Craft", p: "not trend" },
                { h: "Hospitality", p: "not a transaction" },
              ].map((x) => (
                <div key={x.h} className="group md:border-l border-espresso/10 md:pl-6 hover:border-espresso/30 transition-colors">
                  <p className="font-display text-4xl md:text-3xl text-espresso group-hover:text-brass transition-colors">{x.h}</p>
                  <p className="label mt-3 md:mt-4 text-espresso/50 tracking-[0.2em]">{x.p}</p>
                </div>
              ))}
             </div>
          </div>
        </div>
      </section>

      {/* AMBIENT IMG */}
      <section className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-10 sm:pb-32">
        <figure className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-sm overflow-hidden shadow-xl">
          <img
            src={spaceImg.src}
            alt="Arched interior of the atelier."
            width={1600}
            height={1100}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover contrast-[1.05] brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-espresso/10 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brass/10 to-transparent mix-blend-overlay pointer-events-none"></div>
        </figure>
      </section>
    </>
  );
}