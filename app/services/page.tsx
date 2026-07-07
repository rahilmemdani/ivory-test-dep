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
      { name: "Signature Cut", meta: "90 min" },
      { name: "Colour, Editorial", meta: "150 min" },
      { name: "Balayage & Gloss", meta: "180 min" },
      { name: "The Ritual Blow-dry", meta: "60 min" },
    ],
  },
  {
    tag: "02 · Nails",
    title: "Nails, quietly perfect.",
    body:
      "The classical manicure — soaked, shaped, buffed, and finished in colours drawn from the palette. Nothing bright, nothing hurried. Everything considered.",
    img: serviceNails,
    menu: [
      { name: "Atelier Manicure", meta: "60 min" },
      { name: "Atelier Pedicure", meta: "75 min" },
      { name: "Gel Finish", meta: "add-on" },
      { name: "Nail Art, Restrained", meta: "add-on" },
    ],
  },
  {
    tag: "03 · Beauty",
    title: "Beauty, as ritual.",
    body:
      "Facials, brows and finishing — quiet science, warm hands, and time enough to be still. We choose products the way we choose materials for the space: honest, and made to last.",
    img: serviceBeauty,
    menu: [
      { name: "The Ivory Facial", meta: "60 min" },
      { name: "Deep Ritual Facial", meta: "90 min" },
      { name: "Brow Architecture", meta: "30 min" },
      { name: "Occasion Make-up", meta: "60 min" },
    ],
  },
];

export default function Services() {
  return (
    <>
      {disciplines.map((d, i) => (
        <section
          key={d.tag}
          className={`overflow-hidden ${i % 2 === 1 ? "bg-alabaster" : ""}`}
        >
          <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 sm:px-10 sm:py-32 md:grid-cols-[1fr_1.1fr] md:gap-24 items-center">
            <figure
              className={`relative w-full max-w-lg mx-auto md:max-w-none group ${i % 2 === 1 ? "md:order-2" : "md:order-1"}`}
            >
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={d.img.src}
                  alt={d.title}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] hover:sepia-0 hover:brightness-100 transition-all duration-[2000ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <Plume className="absolute -bottom-8 -right-6 h-24 w-24 text-brass opacity-50 mix-blend-multiply pointer-events-none" />
            </figure>
            <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"}`}>
              <p className="label text-brass tracking-[0.25em]">{d.tag}</p>
              <h2 className="mt-6 font-display text-5xl leading-tight text-espresso sm:text-6xl">
                {d.title}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-espresso/70 font-light">{d.body}</p>

              <dl className="mt-12 divide-y divide-espresso/10 border-y border-espresso/10">
                {d.menu.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-baseline justify-between gap-4 py-5 group/item"
                  >
                    <dt className="flex w-full min-w-0 items-baseline justify-between">
                      <span className="font-display text-2xl text-espresso group-hover/item:text-brass transition-colors">{m.name}</span>
                      <span className="label ml-4 text-espresso/40">{m.meta}</span>
                    </dt>
                  </div>
                ))}
              </dl>

              <a
                href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
                target="_blank" rel="noopener noreferrer"
                className="mt-12 group/btn inline-flex items-center gap-4 border-b border-espresso/30 pb-2 text-espresso hover:border-brass hover:text-brass transition-all self-start"
              >
                <span className="font-display text-2xl italic tracking-wide">Book a consultation</span>
                <span className="transition-transform duration-500 group-hover/btn:translate-x-2 text-brass">→</span>
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}