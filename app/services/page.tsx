import Link from "next/link";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceBeauty from "@/assets/service-beauty.jpg";
import { Plume } from "@/components/site/Plume";


const disciplines = [
  {
    tag: "01 · Hair",
    title: "Hair, as a portrait sitting.",
    body:
      "Cut, colour and care in generous time — a considered consultation, a proper wash, and hands that know their work. Editorial finishes, natural weight, dimension that reads like light.",
    img: serviceHair,
    menu: [
      { name: "Signature Cut", meta: "90 min", price: "₹ 4,500" },
      { name: "Colour, Editorial", meta: "150 min", price: "from ₹ 9,500" },
      { name: "Balayage & Gloss", meta: "180 min", price: "from ₹ 12,000" },
      { name: "The Ritual Blow-dry", meta: "60 min", price: "₹ 2,800" },
    ],
  },
  {
    tag: "02 · Nails",
    title: "Nails, quietly perfect.",
    body:
      "The classical manicure — soaked, shaped, buffed, and finished in colours drawn from the palette. Nothing bright, nothing hurried. Everything considered.",
    img: serviceNails,
    menu: [
      { name: "Atelier Manicure", meta: "60 min", price: "₹ 1,800" },
      { name: "Atelier Pedicure", meta: "75 min", price: "₹ 2,400" },
      { name: "Gel Finish", meta: "add-on", price: "₹ 800" },
      { name: "Nail Art, Restrained", meta: "add-on", price: "from ₹ 500" },
    ],
  },
  {
    tag: "03 · Beauty",
    title: "Beauty, as ritual.",
    body:
      "Facials, brows and finishing — quiet science, warm hands, and time enough to be still. We choose products the way we choose materials for the space: honest, and made to last.",
    img: serviceBeauty,
    menu: [
      { name: "The Ivory Facial", meta: "60 min", price: "₹ 3,800" },
      { name: "Deep Ritual Facial", meta: "90 min", price: "₹ 5,600" },
      { name: "Brow Architecture", meta: "30 min", price: "₹ 1,400" },
      { name: "Occasion Make-up", meta: "60 min", price: "from ₹ 4,500" },
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-36 sm:px-10 sm:pt-44">
        <p className="label text-brass">The Craft</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-espresso">
          Hair. Nails. <span className="italic text-brass">Beauty.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-espresso/75">
          Three disciplines, one house. Every service is prefaced by a quiet
          consultation — we start with a coffee, not a form. Prices are indicative;
          your final quote is written by hand.
        </p>
      </section>

      {disciplines.map((d, i) => (
        <section
          key={d.tag}
          className={`${i % 2 === 1 ? "bg-alabaster" : ""}`}
        >
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-10 sm:py-28 md:grid-cols-2 md:gap-16">
            <figure
              className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}
            >
              <img
                src={d.img.src}
                alt={d.title}
                width={1200}
                height={1500}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_30px_60px_-30px_rgba(51,38,29,0.35)]"
              />
              <Plume className="absolute -bottom-6 -right-4 h-14 w-14 text-brass" />
            </figure>
            <div className="flex flex-col justify-center">
              <p className="label text-brass">{d.tag}</p>
              <h2 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-6xl">
                {d.title}
              </h2>
              <p className="mt-6 text-espresso/75">{d.body}</p>

              <dl className="mt-10 divide-y divide-espresso/10 border-y border-espresso/10">
                {d.menu.map((m) => (
                  <div
                    key={m.name}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4"
                  >
                    <dt className="min-w-0">
                      <span className="font-display text-xl text-espresso">{m.name}</span>
                      <span className="label ml-3 text-espresso/45">{m.meta}</span>
                    </dt>
                    <dd className="font-display text-xl italic text-brass">{m.price}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/book"
                className="label mt-10 inline-block self-start border-b border-espresso/40 pb-1 text-espresso/70 hover:border-brass hover:text-brass"
              >
                Book a consultation →
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}