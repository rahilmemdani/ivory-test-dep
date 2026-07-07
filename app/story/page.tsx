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

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-10 md:pb-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.3fr] items-start">
          <div className="order-2 md:order-1 md:pr-12 md:sticky md:top-40">
            <div className="hairline w-24 mb-12" />
            <p className="font-display text-3xl sm:text-4xl leading-[1.3] text-espresso">
              Ivory Atelier began with a small discomfort — that looking after
              yourself had become loud, rushed and transactional. <br /><br /><span className="italic text-brass">We wanted the opposite.</span>
            </p>
            <div className="mt-14 space-y-8 text-lg text-espresso/70 leading-relaxed font-light">
              <p>
                A house where beauty is practised as craft and guests are received as
                guests: unhurried rooms, honest materials, exceptional coffee, and
                hands that know their work.
              </p>
              <p>
                <em className="font-display text-2xl text-espresso not-italic mr-1">Ivory,</em> for warmth and for
                things that outlast fashion. <em className="font-display text-2xl text-espresso not-italic mx-1">Atelier,</em>
                for the workshop of a maker.
              </p>
              <p>
                Together — a sanctuary where design, wellbeing and hospitality meet, and every detail is quietly,
                deliberately considered.
              </p>
            </div>
          </div>
          <figure className="order-1 md:order-2 relative w-full h-[50vh] md:h-[85vh] rounded-sm overflow-hidden group shadow-2xl">
            <img
              src={heroInterior.src}
              alt="Interior of Ivory Atelier — warm light, marble, brass and eucalyptus."
              width={1600}
              height={1920}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] transition-all duration-[2000ms] ease-out group-hover:scale-[1.03] group-hover:sepia-0 group-hover:brightness-100"
            />
          </figure>
        </div>
      </section>

      {/* PLUME MEANING */}
      <section className="bg-espresso text-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 sm:py-24">
          <div className="grid gap-14 md:grid-cols-[auto_1fr] md:gap-20">
            <Plume className="h-40 w-40 shrink-0 text-brass md:h-64 md:w-64" />
            <div>
              <p className="label text-brass">The meaning of the mark</p>
              <h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
                A single peacock <span className="italic">plume.</span>
              </h2>
              <p className="mt-6 max-w-xl text-ivory/75">
                The motif set into our floor, redrawn as one clean line. One plume,
                not the full fan — beauty hinted at, never performed. A quieter
                kind of beautiful.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {[
                  { h: "Beauty, held back", p: "Restraint as luxury. Never performed." },
                  { h: "Renewal", p: "A feather shed and grown again. You leave a little more yourself." },
                  { h: "The eye", p: "Attention, and protection. A house that notices the smallest things." },
                  { h: "Roots", p: "India's bird, and Krishna's mor pankh. Grounded in Mumbai." },
                ].map((x) => (
                  <div key={x.h}>
                    <h3 className="font-display text-2xl text-brass">{x.h}</h3>
                    <p className="mt-2 text-ivory/70">{x.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 sm:py-24">
        <p className="label text-brass">04 · Positioning</p>
        <h2 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-espresso sm:text-7xl">
          Closer to a{" "}
          <span className="italic text-brass">members' club</span> than a beauty
          chair.
        </h2>
        <div className="mt-16 grid gap-10 border-t border-espresso/15 pt-14 md:grid-cols-3">
          {[
            { h: "A sanctuary", p: "not a service counter" },
            { h: "Craft", p: "not trend" },
            { h: "Hospitality", p: "not a transaction" },
          ].map((x) => (
            <div key={x.h}>
              <p className="font-display text-4xl text-espresso">{x.h}</p>
              <p className="label mt-3 text-espresso/50">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMBIENT IMG */}
      <section className="mx-auto max-w-[1600px] px-5 pb-16 sm:px-10 sm:pb-24">
        <img
          src={spaceImg.src}
          alt="Arched interior of the atelier."
          width={1600}
          height={1100}
          loading="lazy"
          className="w-full rounded-sm object-cover"
        />
      </section>
    </>
  );
}