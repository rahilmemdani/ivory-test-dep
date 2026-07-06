import Link from "next/link";
import heroInterior from "@/assets/hero-interior.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceBeauty from "@/assets/service-beauty.jpg";
import spaceImg from "@/assets/space.jpg";
import cafeImg from "@/assets/cafe.jpg";
import { Plume } from "@/components/site/Plume";
const services = [
  {
    tag: "01",
    title: "Hair",
    body: "Editorial cut, colour and care — read like a portrait sitting, not a salon appointment.",
    img: serviceHair,
  },
  {
    tag: "02",
    title: "Nails",
    body: "Considered manicures and pedicures, done with the patience of a craft studio.",
    img: serviceNails,
  },
  {
    tag: "03",
    title: "Beauty",
    body: "Skin rituals, facials and finishing — quiet science, warm hands, real time.",
    img: serviceBeauty,
  },
];

const principles = [
  { n: "01", h: "Craft over speed", p: "Nothing rushed. Everything considered." },
  { n: "02", h: "Warmth over formality", p: "A host, never a front desk." },
  { n: "03", h: "Restraint over excess", p: "We remove until only the beautiful remains." },
  { n: "04", h: "Detail as devotion", p: "The unseen is finished like the seen." },
  { n: "05", h: "Discretion as respect", p: "A calm, private space. What happens here is yours." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 sm:px-10 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-brass animate-fade-in">
              <span className="hairline block w-10" />
              <span className="label">2026 · Volume I · Mumbai</span>
            </div>
            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-espresso animate-fade-up [animation-delay:200ms]">
              A quieter <br />
              <span className="italic text-brass">kind of</span> beautiful.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-espresso/75 sm:text-xl animate-fade-up [animation-delay:400ms]">
              Ivory Atelier is a house for hair, nails and beauty — practised as
              craft, received as guests. Under one calm roof, with a café at its
              heart.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:600ms]">
              <Link
                href="/book"
                className="group inline-flex items-center gap-4 rounded-full bg-espresso px-7 py-4 text-alabaster transition-colors hover:bg-ink"
              >
                <span className="font-display text-lg italic">Book a consultation</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brass/20 text-brass transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/services"
                className="label border-b border-espresso/40 pb-1 text-espresso/70 hover:border-brass hover:text-brass"
              >
                View the craft
              </Link>
            </div>

            <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-espresso/15 pt-8">
              <div>
                <dt className="label text-espresso/50">Hours</dt>
                <dd className="mt-2 font-display text-xl text-espresso">10 – 8</dd>
              </div>
              <div>
                <dt className="label text-espresso/50">Address</dt>
                <dd className="mt-2 font-display text-xl text-espresso">Bandra W.</dd>
              </div>
              <div>
                <dt className="label text-espresso/50">Est.</dt>
                <dd className="mt-2 font-display text-xl text-espresso">MMXXVI</dd>
              </div>
            </dl>
          </div>

          <figure className="relative">
            <div className="relative overflow-hidden rounded-t-[240px] rounded-b-md bg-sand/40 shadow-[0_40px_80px_-40px_rgba(51,38,29,0.4)]">
              <img
                src={heroInterior.src}
                alt="The Ivory Atelier reception — marble, brass and warm light."
                width={1600}
                height={1920}
                className="h-[70vh] min-h-[520px] w-full object-cover md:h-[78vh] contrast-[1.05] sepia-[0.1] brightness-[0.95] hover:sepia-0 hover:brightness-100 transition-all duration-[1500ms] ease-out"
              />
              <Plume className="pointer-events-none absolute left-6 top-6 h-10 w-10 text-brass/90 mix-blend-screen" />
            </div>
            <figcaption className="label mt-4 text-espresso/50">
              The house — reception, quietly.
            </figcaption>
          </figure>
        </div>
      </section>



      {/* SERVICES */}
      <section className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-5 py-24 sm:px-10 sm:py-32">
        <header className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="label text-brass">The Craft — 03 disciplines</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-7xl">
              Practised as craft.
              <br />
              <span className="italic text-espresso/70">Received as guests.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="label self-end border-b border-espresso/40 pb-1 text-espresso/70 hover:border-brass hover:text-brass"
          >
            All Services →
          </Link>
        </header>

        <div className="mt-16 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col min-w-[60vw] max-w-[280px] shrink-0 snap-center sm:min-w-[40vw] md:min-w-0 md:max-w-none md:shrink"
            >
              <div className="relative overflow-hidden rounded-sm bg-sand/30">
                <img
                  src={s.img.src}
                  alt={s.title}
                  width={1200}
                  height={1500}
                  className="aspect-[4/5] w-full object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:sepia-0 group-hover:brightness-100"
                />
                {/* <span className="absolute left-4 top-4 label rounded-full bg-alabaster/85 px-3 py-1 text-espresso backdrop-blur-sm">
                  {s.tag}
                </span> */}
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl text-espresso">{s.title}</h3>
                <Plume className="h-6 w-6 shrink-0 text-brass opacity-70" />
              </div>
              <p className="mt-3 text-espresso/70">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRINCIPLES / SPACE SPLIT */}
      <section className="flex min-h-screen flex-col justify-center bg-espresso text-ivory">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-10 sm:py-32 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div className="relative">
            <img
              src={spaceImg.src}
              alt="Ivory Atelier interior — arched corridors, marble floors, warm brass fixtures."
              width={1600}
              height={1100}
              loading="lazy"
              className="h-full min-h-[420px] w-full rounded-sm object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] hover:sepia-0 hover:brightness-100 transition-all duration-[1200ms] ease-out"
            />
          </div>
          <div>
            <p className="label text-brass">What we hold to</p>
            <h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
              Five quiet <span className="italic text-brass">laws</span>.
            </h2>
            <ol className="mt-12 space-y-6">
              {principles.map((p) => (
                <li
                  key={p.n}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-ivory/10 pt-6"
                >
                  <span className="label pt-1 text-brass">{p.n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">{p.h}</h3>
                    <p className="mt-1 text-ivory/70">{p.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CAFÉ TEASER */}
      <section className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="label text-brass">The Café — the heart</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-6xl">
              A pause worth
              <br />
              <span className="italic">staying for.</span>
            </h2>
            <p className="mt-6 max-w-md text-espresso/75">
              Single-origin filter. Cortado. Rose cardamom latte. Saffron tea cake
              and pistachio financier. The social centre where guests linger — not
              just wait.
            </p>
            <Link
              href="/cafe"
              className="label mt-8 inline-block border-b border-espresso/40 pb-1 text-espresso/70 hover:border-brass hover:text-brass"
            >
              Café Menu →
            </Link>
          </div>
          <figure className="order-1 md:order-2">
            <img
              src={cafeImg.src}
              alt="Cortado and pistachio financier on marble."
              width={1400}
              height={1200}
              loading="lazy"
              className="w-full rounded-sm object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] hover:sepia-0 hover:brightness-100 transition-all duration-[1200ms] ease-out"
            />
          </figure>
        </div>
      </section>

      {/* PROMISE + CLOSING — merged */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-alabaster px-5 py-28 text-center sm:px-10">
        <Plume className="mx-auto h-16 w-16 text-brass opacity-60" />

        <blockquote className="relative mt-10 max-w-3xl font-display text-3xl leading-[1.2] text-espresso sm:text-5xl">
          <span className="italic text-brass">"</span>
          <span className="italic">You will leave</span> a little more{" "}
          <span className="italic">yourself</span> than when you arrived.
          <span className="italic text-brass">"</span>
          <cite className="label mt-6 block not-italic text-espresso/40">
            — The Brand Promise
          </cite>
        </blockquote>

        <div className="my-14 h-px w-16 bg-espresso/20" />

        <p className="label text-espresso/50">The invitation</p>
        <h2 className="mt-5 font-display text-5xl leading-tight text-espresso sm:text-7xl">
          Take the afternoon.
          <br />
          <span className="italic text-brass">We'll take care of the rest.</span>
        </h2>
        <Link
          href="/book"
          className="group mt-12 inline-flex items-center gap-4 rounded-full bg-espresso px-8 py-4 text-alabaster transition-colors duration-500 hover:bg-ink"
        >
          <span className="font-display text-lg italic">Book a consultation</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-brass/20 text-brass transition-transform duration-500 group-hover:translate-x-1">→</span>
        </Link>
      </section>
    </>
  );
}
