import spaceImg from "@/assets/space.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import { Plume } from "@/components/site/Plume";


export default function Story() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-36 sm:px-10 sm:pt-44">
        <p className="label text-brass">03 · Brand Story</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-espresso">
          An atelier,
          <br />
          <span className="italic text-brass">not a salon.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-24 sm:px-10 md:grid-cols-[1fr_1.2fr] md:gap-20 md:pb-32">
        <figure className="relative">
          <img
            src={heroInterior.src}
            alt="Interior of Ivory Atelier — warm light, marble, brass and eucalyptus."
            width={1600}
            height={1920}
            loading="lazy"
            className="w-full rounded-t-[200px] rounded-b-sm object-cover"
          />
        </figure>
        <div className="flex flex-col justify-center">
          <p className="font-display text-3xl leading-relaxed text-espresso">
            Ivory Atelier began with a small discomfort — that looking after
            yourself had become loud, rushed and transactional. We wanted the
            opposite.
          </p>
          <div className="hairline my-10 max-w-[80px]" />
          <p className="text-espresso/75">
            A house where beauty is practised as craft and guests are received as
            guests: unhurried rooms, honest materials, exceptional coffee, and
            hands that know their work.
          </p>
          <p className="mt-6 text-espresso/75">
            <em className="font-display text-lg">Ivory</em>, for warmth and for
            things that outlast fashion. <em className="font-display text-lg">Atelier</em>,
            for the workshop of a maker. Together — a sanctuary where design,
            wellbeing and hospitality meet, and every detail is quietly,
            deliberately considered.
          </p>
        </div>
      </section>

      {/* PLUME MEANING */}
      <section className="bg-espresso text-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
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
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
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
      <section className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-10 sm:pb-32">
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