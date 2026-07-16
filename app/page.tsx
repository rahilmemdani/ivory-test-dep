import Link from "next/link";
import heroInterior from "@/assets/hero-interior.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceBeauty from "@/assets/service-beauty.jpg";
import spaceImg from "@/assets/space.jpg";
import cafeImg from "@/assets/cafe.jpg";
import { Plume } from "@/components/site/Plume";
import { ServicesCarousel } from "@/components/site/ServicesCarousel";
const services = [
  {
    tag: "01",
    title: "Hair",
    body: "Cut, colour and care in generous time - a considered consultation, a proper wash, and hands that know their work. Editorial finishes, natural weight, dimension that reads like light.",
    bullets: ["Signature Cut & Styling", "Global Colour & Highlights", "Balayage", "Bridal Hair Do", "The Ritual Blow-dry"],
    img: serviceHair,
    cta: "Book a consultation",
    ctaLink: "https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
  },
  {
    tag: "02",
    title: "Nails",
    body: "The classical manicure - soaked, shaped, buffed, and finished in colours drawn from the palette. Nothing bright, nothing hurried. Everything considered.",
    bullets: ["Atelier Manicure", "Atelier Pedicure", "Gel Finish", "Nail Art, Restrained"],
    img: serviceNails,
    cta: "Book a consultation",
    ctaLink: "https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
  },
  {
    tag: "03",
    title: "Beauty",
    body: "AI-guided facials, brows and finishing - quiet science, warm hands, and time enough to be still. Honest products made to last.",
    bullets: ["Ivory Signature Facial", "AI-Enhanced HydraFacial", "Red Light Therapy", "Face Gym", "Brow Architecture", "Occasion Make-up"],
    img: serviceBeauty,
    cta: "Book a consultation",
    ctaLink: "https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
  },
  {
    tag: "04",
    title: "Bridal",
    body: "For the day itself. Bridal hair and make-up, at the salon or at your venue, alongside a Pre-Bridal Package built around the two months before.",
    bullets: [],
    img: heroInterior,
    cta: "Enquire about bridal",
    ctaLink: "/contact"
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
      <section className="relative isolate flex flex-col justify-center overflow-hidden min-h-[100dvh] pt-28 sm:pt-32 pb-16">
        <div className="mx-auto w-full max-w-[1400px] flex flex-col lg:grid gap-12 px-5 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:items-center">
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left order-1 lg:order-1">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-espresso animate-fade-up [animation-delay:200ms]">
              IVORY ATELIER <br className="hidden lg:block" />
              <span className="italic text-brass">Where Juhu comes to be beautiful.</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-base leading-relaxed text-espresso/75 sm:text-xl animate-fade-up [animation-delay:400ms]">
              Ivory Atelier is Juhu's unhurried house for hair, nails and beauty - practised as
              craft, received as guests. Under one calm roof, with a café at its
              heart.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start w-full sm:w-auto gap-6 lg:gap-6 animate-fade-up [animation-delay:600ms]">
              <a
                href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
                className="group/btn relative inline-flex w-full sm:w-auto justify-center items-center gap-4 md:gap-6 rounded-none bg-espresso px-8 py-5 text-ivory transition-all duration-500 hover:bg-ink hover:text-brass shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(168,138,86,0.2)] border border-transparent hover:border-brass/30"
              >
                <span className="font-display text-xl italic tracking-wide">Book a consultation</span>
                <span className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-2 text-brass">
                  →
                </span>
              </a>
              <Link
                href="/services"
                className="label border-b border-espresso/30 pb-1.5 text-espresso/70 transition-colors hover:border-brass hover:text-brass tracking-[0.25em]"
              >
                View the craft
              </Link>
            </div>

            <dl className="mt-10 md:mt-16 hidden lg:grid max-w-md grid-cols-3 gap-4 md:gap-6 border-t border-espresso/15 pt-6 md:pt-8 animate-fade-up [animation-delay:800ms]">
              <div>
                <dt className="label text-espresso/50">Hours</dt>
                <dd className="mt-1 md:mt-2 font-display text-lg md:text-xl text-espresso">10 - 8</dd>
              </div>
              <div>
                <dt className="label text-espresso/50">Address</dt>
                <dd className="mt-1 md:mt-2 font-display text-lg md:text-xl text-espresso">
                  <a href="https://maps.google.com/?q=Ground+Floor+Plot+Number+35+Rameshwar+10th+Gulmohar+Cross+Rd+Juhu+Vile+Parle+West+Mumbai+Maharashtra+400049" className="hover:text-brass transition-colors">
                    Juhu
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-espresso/50">Est.</dt>
                <dd className="mt-1 md:mt-2 font-display text-lg md:text-xl text-espresso">MMXXVI</dd>
              </div>
            </dl>
          </div>

          <figure className="relative order-2 lg:order-2 mt-8 lg:mt-0 lg:pl-8 w-full max-w-[400px] lg:max-w-none mx-auto animate-fade-in [animation-delay:800ms]">
            <div className="relative overflow-hidden rounded-t-[200px] lg:rounded-t-[280px] rounded-b-sm bg-sand/40 shadow-2xl">
              <img
                src={heroInterior.src}
                alt="The Ivory Atelier reception - marble, brass and warm light."
                width={1600}
                height={1920}
                className="w-full aspect-[4/5] lg:max-h-[75vh] object-cover contrast-[1.05] sepia-[0.1] brightness-[0.95] hover:sepia-0 hover:brightness-100 hover:scale-[1.02] transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent mix-blend-multiply opacity-40 pointer-events-none transition-opacity duration-1000"></div>
              <Plume className="pointer-events-none absolute left-6 top-6 lg:left-8 lg:top-8 h-10 w-10 text-brass/90 mix-blend-screen" />
            </div>
            <figcaption className="label mt-3 md:mt-4 text-espresso/50 text-right md:text-left">
              Not just a salon. A ritual.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto flex max-w-[1400px] flex-col justify-center px-5 py-12 sm:px-10 sm:py-16">
        <header className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="label text-brass tracking-[0.3em] uppercase">01 · Services</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-6xl tracking-tight">
              The house signatures.
              <br />
              <span className="italic text-espresso/60">Three rituals guests return for.</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-espresso/70 max-w-xl leading-relaxed font-light">
              Hair, nails, beauty, and the signature rituals Ivory Atelier is known for - each done in
              generous time, with AI-guided precision where it matters.
            </p>
          </div>
          <Link
            href="/services"
            className="label self-end border-b border-espresso/40 pb-1 text-espresso/70 hover:border-brass hover:text-brass"
          >
            All Services →
          </Link>
        </header>

        <ServicesCarousel services={services} />
      </section>

      {/* PRINCIPLES / SPACE SPLIT */}
      <section className="flex flex-col justify-center gradient-espresso text-ivory">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-12 sm:px-10 sm:py-16 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div className="relative">
            <img
              src={spaceImg.src}
              alt="Ivory Atelier interior - arched corridors, marble floors, warm brass fixtures."
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

      {/* FEATURED RITUALS */}
      <section className="bg-alabaster text-espresso">
        <div className="mx-auto grid max-w-[1400px] gap-0 px-5 sm:px-10 md:grid-cols-[1fr_1.4fr]">

          {/* Left panel */}
          <div className="flex flex-col justify-center py-16 sm:py-20 md:pr-16 md:py-24">
            <p className="label text-brass">Featured Ritual</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-6xl">
              The house signatures.
              <br />
              <span className="italic text-espresso/60">Three rituals guests return for.</span>
            </h2>
            <div className="mt-12 h-px w-12 bg-brass/40" />
            <p className="mt-8 text-espresso/55 leading-relaxed max-w-xs">
              Signature rituals built on AI precision and Korean craft - each one a reason guests return.
            </p>
            <Link
              href="/services"
              className="label mt-10 inline-block border-b border-espresso/30 pb-1.5 text-espresso/60 hover:border-brass hover:text-brass transition-colors tracking-[0.25em]"
            >
              Discover the rituals →
            </Link>
          </div>

          {/* Right panel — vertical card stack */}
          <div className="flex flex-col divide-y divide-espresso/10 border-l border-espresso/10 md:py-16">
            {[
              {
                title: "Korean Glass Hair Treatment",
                body: "The ultra-sleek, mirror-like finish inspired by Korean beauty - cuticles sealed, shine amplified, frizz gone.",
              },
              {
                title: "AI-Powered Japanese Head Spa",
                body: "A scalp-wellness ritual guided by AI analysis - deep cleansing, therapeutic massage, steam, and a hydrating face mask.",
              },
              {
                title: "AI-Powered Korean Scalp Treatments",
                body: "Personalised scalp therapy - for dryness, oiliness, dandruff or hair fall - built from your own scalp analysis.",
              },
              {
                title: "Peptide Hair Repair Treatment",
                body: "An intensive peptide-infused ritual that rebuilds weakened strands from within.",
              },
            ].map((r) => (
              <div
                key={r.title}
                className="group flex flex-col gap-3 px-8 py-8 md:px-12 md:py-10 cursor-default hover:bg-sand/30 transition-colors duration-500"
              >
                <h3 className="font-display text-2xl leading-snug tracking-tight text-espresso group-hover:text-brass transition-colors duration-500 sm:text-3xl">
                  {r.title}
                </h3>
                <p className="text-espresso/55 leading-relaxed text-sm sm:text-base">
                  {r.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CAFÉ TEASER */}
      <section className="mx-auto flex max-w-[1400px] flex-col justify-center px-5 py-12 sm:px-10 sm:py-16">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="order-2 md:order-1">
            {/* Plume Café branded lockup */}
            <div className="flex items-center gap-3 mb-2">
              <Plume className="h-9 w-9 text-brass" />
              <p className="label text-brass tracking-[0.28em]">Plume Café</p>
            </div>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-6xl">
              A pause worth
              <br />
              <span className="italic">staying for.</span>
            </h2>
            <p className="mt-6 max-w-md text-espresso/75">
              Named for the single feather at the centre of our mark - the plume, held back, never the full
              fan. Plume Café is the social centre of Ivory Atelier, where guests linger between rituals, not
              just wait for them.
            </p>
            <p className="mt-4 max-w-md text-espresso/75">
              Single-origin filter. Cortado. Rose cardamom latte. Iced matcha. A proper mojito, if the
              afternoon calls for one.
            </p>
            <Link
              href="/cafe"
              className="label mt-8 inline-block border-b border-espresso/40 pb-1 text-espresso/70 hover:border-brass hover:text-brass"
            >
              View full café menu →
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
      <section className="relative flex flex-col items-center justify-center overflow-hidden gradient-ivory px-5 py-16 text-center sm:px-10 sm:py-20">
        <Plume className="mx-auto h-16 w-16 text-brass/70 animate-float" />

        <blockquote className="relative mt-12 max-w-4xl font-display text-4xl leading-[1.15] text-espresso sm:text-6xl tracking-tight">
          <span className="italic text-brass font-light">"</span>
          <span className="italic font-light">You will leave a little more yourself than when you arrived.</span>
          <span className="italic text-brass font-light">"</span>
          <cite className="label mt-8 block not-italic text-espresso/40 tracking-[0.3em]">
            - The Brand Promise
          </cite>
        </blockquote>

        <div className="my-20 h-px w-24 bg-espresso/15" />

        <p className="label text-espresso/50 tracking-[0.25em]">The invitation</p>
        <h2 className="mt-6 font-display text-6xl leading-tight text-espresso sm:text-7xl tracking-tight">
          Take the afternoon.
          <br />
          <span className="italic text-brass">We'll take care of the rest.</span>
        </h2>
        <a
          href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
          className="group/btn relative mt-14 inline-flex items-center gap-6 rounded-none bg-espresso px-10 py-5 text-ivory transition-all duration-500 hover:bg-ink hover:text-brass shadow-xl hover:shadow-[0_15px_40px_-10px_rgba(168,138,86,0.25)] border border-transparent hover:border-brass/30"
        >
          <span className="font-display text-xl italic tracking-wide">Book a consultation</span>
          <span className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-2 text-brass">→</span>
        </a>
      </section>
    </>
  );
}
