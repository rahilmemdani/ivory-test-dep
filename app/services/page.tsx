"use client";

import { useState, useRef, useEffect } from "react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceBeauty from "@/assets/service-beauty.jpg";
import { Plume } from "@/components/site/Plume";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  name: string;
  price: string;
  note?: string;
  desc?: string;
}

interface TieredItem {
  name: string;
  designer: string;
  creator: string;
  architect: string;
}

type ServiceSection = {
  id: string;
  heading: string;
  note?: string;
} & (
  | { kind: "simple"; items: MenuItem[] }
  | { kind: "tiered"; items: TieredItem[] }
);

interface Category {
  id: string;
  num: string;
  label: string;
  img: typeof serviceHair;
  tagline: string;
  desc: string;
  sections: ServiceSection[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const HAIR: Category = {
  id: "hair",
  num: "01",
  label: "Hair",
  img: serviceHair,
  tagline: "Hair, as a portrait sitting.",
  desc: "Cut, colour and care in generous time. Every service begins with a proper consultation — no rush, no shortcuts.",
  sections: [
    {
      id: "women-cuts",
      kind: "tiered",
      heading: "Women — Cuts & Styling",
      note: "✦ On-premise pricing · Tiers: Designer · Creator · Architect",
      items: [
        { name: "Hair Cut & Styling", designer: "₹2,000", creator: "₹3,000", architect: "₹3,500" },
        { name: "Hair Cut & Styling (under 12)", designer: "₹1,500", creator: "₹2,200", architect: "₹3,000" },
        { name: "Bangs / Fringes", designer: "₹1,500", creator: "₹2,200", architect: "₹3,000" },
        { name: "Blast Dry", designer: "₹1,000", creator: "₹1,200", architect: "₹1,200" },
        { name: "Styling (Blow Dry)", designer: "₹1,500", creator: "₹2,000", architect: "₹2,500 ✦" },
        { name: "Ironing", designer: "₹2,300", creator: "₹3,000", architect: "₹3,500 ✦" },
        { name: "Tonging", designer: "₹2,300", creator: "₹3,000", architect: "₹3,500 ✦" },
        { name: "Crimping", designer: "₹2,300", creator: "₹3,000", architect: "₹3,500 ✦" },
        { name: "Evening Hair Do", designer: "₹4,000", creator: "₹5,500", architect: "₹7,000 ✦" },
        { name: "Party Hair Do", designer: "₹4,000", creator: "₹5,500", architect: "₹8,000 ✦" },
        { name: "Bridal Hair Do", designer: "₹4,500", creator: "₹6,500", architect: "₹8,500 ✦" },
      ],
    },
    {
      id: "men-cuts",
      kind: "tiered",
      heading: "Men — Cuts & Styling",
      note: "✦ On-premise pricing",
      items: [
        { name: "Hair Cut & Styling", designer: "₹1,500", creator: "₹2,200", architect: "₹3,000" },
        { name: "Hair Cut & Styling (under 12)", designer: "₹1,500", creator: "₹2,200", architect: "₹3,000" },
        { name: "Styling", designer: "₹1,000", creator: "₹1,800", architect: "₹2,500" },
      ],
    },
    {
      id: "women-colour",
      kind: "tiered",
      heading: "Women — Colour",
      note: "✦ On-premise pricing",
      items: [
        { name: "Root Touch-up", designer: "₹2,500", creator: "₹3,500", architect: "₹3,500 ✦" },
        { name: "Global Colour", designer: "₹6,000", creator: "₹7,500", architect: "₹9,000 ✦" },
        { name: "Natural Skinkissed", designer: "₹4,000", creator: "₹5,200", architect: "₹6,000 ✦" },
        { name: "Choco Griffe", designer: "₹4,000", creator: "₹5,200", architect: "₹6,000 ✦" },
        { name: "Ruby Touched", designer: "₹4,000", creator: "₹5,200", architect: "₹6,000 ✦" },
        { name: "Latte Contour", designer: "₹4,000", creator: "₹5,200", architect: "₹6,000 ✦" },
        { name: "Classic Highlights", designer: "₹9,000", creator: "₹10,500", architect: "₹12,500 ✦" },
        { name: "Balayage", designer: "₹9,000", creator: "₹10,500", architect: "₹12,500 ✦" },
        { name: "Sun Glazing", designer: "₹8,500", creator: "₹9,500", architect: "₹10,500 ✦" },
        { name: "Toner", designer: "₹3,500", creator: "₹4,500", architect: "₹5,500 ✦" },
        { name: "Partial Highlights", designer: "₹4,500", creator: "₹6,000", architect: "₹7,500 ✦" },
        { name: "Per Strand Highlights", designer: "₹1,700", creator: "₹1,700", architect: "₹1,700 ✦" },
      ],
    },
    {
      id: "men-colour",
      kind: "tiered",
      heading: "Men — Colour",
      note: "✦ On-premise pricing",
      items: [
        { name: "Root Touch-up", designer: "₹2,000", creator: "₹2,500", architect: "—" },
        { name: "Global Colour", designer: "₹3,000", creator: "₹5,500 ✦", architect: "—" },
        { name: "Classic Highlights", designer: "₹5,000", creator: "₹6,500 ✦", architect: "₹8,000 ✦" },
        { name: "Balayage", designer: "₹5,000", creator: "₹6,500 ✦", architect: "₹8,000 ✦" },
      ],
    },
    {
      id: "treatments",
      kind: "simple",
      heading: "Hair Treatments",
      items: [
        { name: "Partial Hair Treatment", price: "₹6,000 ✦" },
        { name: "Full Hair Treatment", price: "₹12,000 ✦" },
        { name: "Express Spa (30 mins)", price: "₹3,500", desc: "Incl. complimentary blast dry" },
        { name: "Power Dose (30 mins)", price: "₹3,500", desc: "Incl. complimentary blast dry" },
        { name: "Korean Glass Hair Treatment", price: "₹4,500", desc: "Mirror-like finish · incl. straight blow-dry" },
        { name: "Scalp Care (45 mins)", price: "₹4,000 (M) / ₹5,000 (W)", desc: "AI-powered analysis · incl. blast dry" },
        { name: "Smooth & Anti-Frizz Hairspa (45 mins)", price: "₹5,500", desc: "Incl. blast dry" },
        { name: "Signature Revive & Restore Hairspa (45 mins)", price: "₹5,500", desc: "Incl. blast dry" },
        { name: "VIP Advanced Repair & Strength Ritual (60 mins)", price: "₹6,500 (M) / ₹7,500 (W)", desc: "Incl. straight blow-dry" },
      ],
      note: "✦ On-premise pricing",
    },
    {
      id: "peptide",
      kind: "simple",
      heading: "Peptide Treatment",
      items: [
        { name: "Peptide Hair Repair Treatment", price: "₹5,500", desc: "Intensive bond-restoring treatment · incl. blast dry" },
        { name: "Add-on: Peptide Treatment", price: "₹3,500" },
        { name: "Add-on: Powder Dose", price: "₹2,500" },
        { name: "Add-on: Scrub", price: "₹1,500" },
      ],
    },
    {
      id: "head-spa",
      kind: "simple",
      heading: "AI-Powered Japanese Head Spa",
      items: [
        { name: "Japanese Head Spa", price: "₹5,500", desc: "AI scalp analysis · deep cleanse · therapeutic massage · steam · exfoliation · face mask" },
        { name: "Add-on: Mask", price: "₹1,200" },
        { name: "Add-on: Blow Dry", price: "₹1,500 ✦" },
      ],
      note: "✦ On-premise pricing",
    },
    {
      id: "scalp",
      kind: "simple",
      heading: "AI-Powered Korean Scalp Treatments",
      items: [
        { name: "Express Scalp Treatment (30 mins)", price: "₹3,000" },
        { name: "Dry Scalp Treatment", price: "₹4,000 (M) / ₹5,000 (W)" },
        { name: "Oily Scalp Treatment", price: "₹4,000 (M) / ₹5,000 (W)" },
        { name: "Dandruff Scalp Treatment", price: "₹4,000 (M) / ₹5,000 (W)" },
        { name: "Hair Fall Scalp Treatment", price: "₹4,000 (M) / ₹5,000 (W)" },
        { name: "Add-on: Mask", price: "₹1,200" },
        { name: "Add-on: Blow Dry", price: "₹1,500 ✦" },
      ],
      note: "✦ On-premise pricing",
    },
    {
      id: "extensions",
      kind: "simple",
      heading: "Hair Extensions",
      items: [
        { name: '3 Piece Clip-on (18")', price: "₹34,000" },
        { name: '3 Piece Clip-on (20")', price: "₹36,500" },
        { name: '3 Piece Clip-on (22")', price: "₹40,000" },
        { name: '3 Piece Clip-on (24")', price: "₹42,500" },
        { name: 'Ponytail (18")', price: "₹25,000" },
        { name: 'Ponytail (20")', price: "₹28,500" },
        { name: 'Ponytail (22")', price: "₹34,000" },
        { name: 'Ponytail (24")', price: "₹39,000" },
        { name: 'Fringe (18")', price: "₹11,500" },
        { name: 'Tape (per tape, 18"–24")', price: "₹2,500–₹3,500" },
        { name: "Great Lengths (per strand, 18\"–24\")", price: "₹1,500–₹3,000" },
        { name: "Servicing Extension — Wash & Dry", price: "₹6,000–₹9,000" },
        { name: "Add Highlights to Extensions", price: "₹9,000–₹17,500" },
      ],
    },
  ],
};

const SKIN: Category = {
  id: "skin",
  num: "02",
  label: "Skin Care",
  img: serviceBeauty,
  tagline: "Beauty, as ritual.",
  desc: "AI-powered skin analysis guides every facial. Quiet science, warm hands, and time enough to be still.",
  sections: [
    {
      id: "facials",
      kind: "simple",
      heading: "AI-Enhanced Facials",
      items: [
        { name: "AI-Enhanced Purity Ritual — All Skin Types (30 mins)", price: "₹4,000", desc: "Express facial with marine actives" },
        { name: "AI-Enhanced City Life Hydration Treatment (60 mins)", price: "₹7,000", desc: "Deep hydration for urban skin" },
        { name: "AI-Enhanced Clarifying Mineral Treatment (60 mins)", price: "₹8,000", desc: "For oily & acne-prone skin" },
        { name: "AI-Enhanced Radiance Antiox Treatment (75 mins)", price: "₹9,000", desc: "Brightening & pigmentation treatment" },
        { name: "Ivory Signature Facial (90 mins)", price: "₹14,000", desc: "LumiSpa + Galvanic Spa + eye treatment" },
        { name: "AI-Enhanced Multi Peptide Better Ageing Treatment (75 mins)", price: "₹10,000", desc: "Peptide technology · firming & lifting" },
        { name: "AI-Enhanced HydraFacial (45–50 mins)", price: "₹7,000", desc: "Deep cleanse · hydrate · lift · glow" },
        { name: "Red Light Therapy (20 mins)", price: "₹3,500", desc: "Improves texture, reduces fine lines" },
        { name: "Eye Care Ritual Treatment (30 mins)", price: "₹3,500", desc: "Targets dark circles, puffiness, fine lines" },
      ],
    },
    {
      id: "face-gym",
      kind: "simple",
      heading: "Face Gym",
      items: [
        { name: "Cardio (30 mins)", price: "₹3,500", desc: "High-energy facial muscle workout · tone & sculpt" },
        { name: "Sculpting (45 mins)", price: "₹4,500", desc: "Deep tissue facial massage · lift & define" },
        { name: "Cool Down (60 mins)", price: "₹5,000", desc: "Gua Sha + nutrient-rich skincare · restore & refresh" },
        { name: "Add-on: Eye Treatment with Facial", price: "₹2,700" },
        { name: "Add-on: Mask", price: "₹2,700" },
        { name: "Add-on: Red Light Therapy", price: "₹2,700" },
        { name: "Add-on: HydraFacial", price: "₹6,500" },
      ],
    },
    {
      id: "threading",
      kind: "simple",
      heading: "Threading",
      note: "International Bead Wax",
      items: [
        { name: "Upper Lip", price: "₹200" },
        { name: "Chin", price: "₹200" },
        { name: "Eyebrow", price: "₹400" },
        { name: "Forehead", price: "₹400" },
        { name: "Side Locks", price: "₹400" },
        { name: "Full Face", price: "₹1,800" },
      ],
    },
    {
      id: "waxing-face",
      kind: "simple",
      heading: "Waxing — Face",
      note: "International Bead Wax",
      items: [
        { name: "Chin", price: "₹400" },
        { name: "Nose", price: "₹400" },
        { name: "Eyebrows", price: "₹400" },
        { name: "Upper Lip", price: "₹400" },
        { name: "Ear Waxing", price: "₹500" },
        { name: "Forehead", price: "₹500" },
        { name: "Side Locks", price: "₹500" },
        { name: "Full Face", price: "₹2,800" },
      ],
    },
    {
      id: "waxing-women",
      kind: "simple",
      heading: "Waxing — Body (Women)",
      note: "Roll-on / International Bead Wax",
      items: [
        { name: "Half Arms", price: "₹800 / ₹1,200" },
        { name: "Full Arms", price: "₹1,200 / ₹1,800" },
        { name: "Neck", price: "₹800 / ₹900" },
        { name: "Glutes", price: "₹800 / ₹900" },
        { name: "Underarms", price: "₹600 / ₹800" },
        { name: "Half Legs", price: "₹900 / ₹1,200" },
        { name: "Bikini Line", price: "₹1,800" },
        { name: "G-String", price: "₹1,800" },
        { name: "Brazilian", price: "₹2,700" },
        { name: "Stomach", price: "₹800 / ₹2,700" },
        { name: "Chest", price: "₹1,200 / ₹2,600" },
        { name: "Back", price: "₹1,700 / ₹4,500" },
        { name: "Full Legs (Roll-on)", price: "₹1,800" },
        { name: "Full Body (excl. Brazilian / Back Strip)", price: "₹6,500" },
      ],
    },
    {
      id: "waxing-men",
      kind: "simple",
      heading: "Waxing — Body (Men)",
      note: "Cartridge Wax",
      items: [
        { name: "Half Arms", price: "₹1,200" },
        { name: "Full Arms", price: "₹2,200" },
        { name: "Underarms", price: "₹1,200" },
        { name: "Stomach", price: "₹2,200" },
        { name: "Chest", price: "₹3,200" },
        { name: "Back Waxing", price: "₹4,800" },
      ],
    },
    {
      id: "makeup",
      kind: "simple",
      heading: "Make-up",
      note: "Complimentary touch-up offered after every service (subject to availability)",
      items: [
        { name: "Day / Light Make-up (60 mins)", price: "₹5,000" },
        { name: "Evening Make-up (60 mins)", price: "₹6,500" },
        { name: "Eye Make-up", price: "₹3,000" },
        { name: "Saree Draping", price: "₹1,500" },
        { name: "Stick-on Lashes", price: "₹1,000" },
      ],
    },
    {
      id: "bridal",
      kind: "simple",
      heading: "Bridal",
      note: "✦ On-premise · Pre-Bridal Package valid for 2 months",
      items: [
        { name: "Bridal Services at the Salon (Hair & Make-up)", price: "₹25,000" },
        { name: "Bridal Services at the Venue (Hair & Make-up)", price: "₹60,000" },
        { name: "Pre-Bridal Package", price: "₹35,000 ✦", desc: "Spa Mani + Spa Pedi + Full Body Wax + Hair Spa + Facial + Massage (90 mins) + Body Exfoliation + Body Wrap" },
      ],
    },
    {
      id: "bleach",
      kind: "simple",
      heading: "Bleach & Lightening",
      items: [
        { name: "Face", price: "₹2,000" },
        { name: "Chest", price: "₹1,600" },
        { name: "Full Hands", price: "₹1,600" },
        { name: "Full Legs", price: "₹2,200" },
        { name: "Back", price: "₹3,500" },
        { name: "Full Body (Without Face)", price: "₹5,800" },
      ],
    },
    {
      id: "relaxation",
      kind: "simple",
      heading: "Relaxation Add-ons",
      items: [
        { name: "Head Massage (30 mins)", price: "₹1,800" },
        { name: "Head Massage (45 mins)", price: "₹2,800" },
        { name: "Head Massage (60 mins)", price: "₹3,800" },
        { name: "Foot Massage (30 mins)", price: "₹1,800" },
        { name: "Foot Massage (45 mins)", price: "₹2,800" },
        { name: "Foot Massage (60 mins)", price: "₹3,800" },
      ],
    },
  ],
};

const NAILS: Category = {
  id: "nails",
  num: "03",
  label: "Nails",
  img: serviceNails,
  tagline: "Nails, quietly perfect.",
  desc: "Classical manicures and pedicures — soaked, shaped, buffed, and finished. Nothing bright, nothing hurried. Everything considered.",
  sections: [
    {
      id: "hands",
      kind: "simple",
      heading: "Hand Treatments",
      items: [
        { name: "Nail Polish Application", price: "₹300" },
        { name: "French Polish Application", price: "₹500" },
        { name: "Shape & Polish", price: "₹600" },
        { name: "Classic Manicure", price: "₹1,200" },
        { name: "French Manicure", price: "₹1,300" },
        { name: "Warm Candle Manicure", price: "₹1,800" },
        { name: "Spa Manicure", price: "₹2,200" },
      ],
    },
    {
      id: "feet",
      kind: "simple",
      heading: "Foot Treatments",
      items: [
        { name: "Nail Polish Application", price: "₹300" },
        { name: "French Polish Application", price: "₹400" },
        { name: "Shape & Polish", price: "₹600" },
        { name: "Classic Pedicure", price: "₹1,500" },
        { name: "French Pedicure", price: "₹1,700" },
        { name: "Warm Candle Pedicure", price: "₹1,800" },
        { name: "Spa Pedicure", price: "₹2,250" },
      ],
    },
    {
      id: "gel",
      kind: "simple",
      heading: "Gel Polish",
      items: [
        { name: "Gel Polish Application", price: "₹1,200" },
        { name: "Gel Polish — French", price: "₹2,200" },
        { name: "Gel Polish — Cat Eye", price: "₹1,800" },
        { name: "Gel Polish — Ombre", price: "₹1,800" },
        { name: "Gel Polish — Glitter", price: "₹1,800" },
        { name: "Gel Polish — Chrome", price: "₹1,800" },
        { name: "Gel Polish Removal", price: "₹500" },
        { name: "Extra Glitter", price: "₹500" },
        { name: "Stickers Nail Art (per finger)", price: "₹150" },
        { name: "Stone (per finger)", price: "₹250" },
        { name: "Nail Art — Freehand (per finger)", price: "₹150 ✦" },
      ],
      note: "✦ On-premise pricing",
    },
    {
      id: "gel-ext",
      kind: "simple",
      heading: "Gel Nail Extensions",
      items: [
        { name: "Gel Nails Extension", price: "₹3,200" },
        { name: "Gel Nails Refilling", price: "₹1,800" },
        { name: "Gel Inbuilt Nail Art", price: "₹3,250" },
        { name: "Builder Gel French", price: "₹3,250" },
        { name: "Builder Gel Ombre", price: "₹3,250" },
      ],
    },
    {
      id: "acrylic",
      kind: "simple",
      heading: "Acrylic Nail Extensions",
      items: [
        { name: "Acrylic Extension", price: "₹3,400" },
        { name: "Overlay", price: "₹1,900" },
        { name: "Refilling", price: "₹1,900" },
        { name: "Inbuilt Art", price: "₹3,800" },
        { name: "Inbuilt French", price: "₹3,800" },
        { name: "Inbuilt Ombre", price: "₹3,800" },
        { name: "Tip Repair", price: "₹300" },
        { name: "Toe Repair", price: "₹500" },
        { name: "Extension Removal", price: "₹700" },
      ],
    },
  ],
};

const CATEGORIES: Category[] = [HAIR, SKIN, NAILS];

// ─── Menu Row ─────────────────────────────────────────────────────────────────

function SimpleRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex items-start justify-between gap-6 py-4 border-b border-espresso/8 last:border-0 hover:bg-sand/30 -mx-4 px-4 transition-colors duration-200">
      <div className="min-w-0">
        <p className="font-display text-xl text-espresso group-hover:text-brass transition-colors leading-snug">
          {item.name}
        </p>
        {item.desc && (
          <p className="mt-0.5 text-sm text-espresso/45 leading-relaxed">{item.desc}</p>
        )}
      </div>
      <p className="shrink-0 font-sans text-sm text-espresso/70 tabular-nums text-right pt-1">
        {item.price}
      </p>
    </div>
  );
}

// ─── Tiered Table ─────────────────────────────────────────────────────────────

function TieredTable({ items }: { items: TieredItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr>
            <th className="text-left pb-4 pr-4 label text-espresso/30 font-normal text-[0.6rem] tracking-[0.25em]" style={{ width: "46%" }}>
              SERVICE
            </th>
            <th className="text-right pb-4 px-3 label text-espresso/30 font-normal text-[0.6rem] tracking-[0.2em]">
              DESIGNER
            </th>
            <th className="text-right pb-4 px-3 label text-espresso/30 font-normal text-[0.6rem] tracking-[0.2em]">
              CREATOR
            </th>
            <th className="text-right pb-4 pl-3 label text-espresso/30 font-normal text-[0.6rem] tracking-[0.2em]">
              ARCHITECT
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr
              key={row.name}
              className="group border-t border-espresso/8 hover:bg-sand/30 transition-colors duration-150"
            >
              <td className="py-4 pr-4 font-display text-lg text-espresso group-hover:text-brass transition-colors leading-snug">
                {row.name}
              </td>
              <td className="py-4 px-3 text-right font-sans text-sm text-espresso/55 tabular-nums">
                {row.designer}
              </td>
              <td className="py-4 px-3 text-right font-sans text-sm text-espresso/70 tabular-nums">
                {row.creator}
              </td>
              <td className="py-4 pl-3 text-right font-sans text-sm text-espresso tabular-nums font-medium">
                {row.architect}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Section Card ─────────────────────────────────────────────────────────────

function SectionCard({ section, index }: { section: ServiceSection; index: number }) {
  const [open, setOpen] = useState(index < 2);

  return (
    <div
      id={section.id}
      className="rounded-sm border border-espresso/10 bg-alabaster/60 overflow-hidden transition-all duration-300"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-6 text-left group"
        aria-expanded={open}
      >
        <h3 className="font-display text-2xl sm:text-3xl text-espresso group-hover:text-brass transition-colors duration-200 leading-tight">
          {section.heading}
        </h3>
        <span
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-espresso/20 text-espresso/40 group-hover:border-brass group-hover:text-brass transition-all duration-300 ${
            open ? "bg-espresso text-ivory border-espresso" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45 text-ivory" : ""}`}
          >
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-6 sm:px-8 pb-8">
          {section.note && (
            <p className="mb-4 label text-espresso/35 tracking-[0.2em] text-[0.6rem]">
              {section.note}
            </p>
          )}
          {section.kind === "tiered" ? (
            <TieredTable items={section.items} />
          ) : (
            <div>
              {section.items.map((item) => (
                <SimpleRow key={item.name} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Side Nav ─────────────────────────────────────────────────────────────────

function SideNav({ sections }: { sections: ServiceSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden xl:block sticky top-28 w-52 shrink-0 self-start">
      <p className="label text-espresso/30 tracking-[0.25em] text-[0.6rem] mb-4">
        ON THIS PAGE
      </p>
      <ul className="space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`block py-1.5 text-sm transition-all duration-200 ${
                active === s.id
                  ? "text-brass font-medium pl-3 border-l border-brass"
                  : "text-espresso/40 hover:text-espresso/70 pl-3 border-l border-transparent"
              }`}
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Category Page ────────────────────────────────────────────────────────────

function CategoryPage({ cat }: { cat: Category }) {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-10 py-14">
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-sm mb-14 bg-espresso">
        <img
          src={cat.img.src}
          alt={cat.tagline}
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity sepia-[0.3]"
        />
        <div className="relative z-10 px-8 sm:px-14 py-12 sm:py-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="label text-brass tracking-[0.3em]">{cat.num} · {cat.label}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl text-ivory leading-tight">
              {cat.tagline}
            </h2>
            <p className="mt-4 text-ivory/60 max-w-lg leading-relaxed">{cat.desc}</p>
          </div>
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            className="shrink-0 inline-flex items-center gap-3 border border-brass/50 px-6 py-3.5 text-brass hover:bg-brass hover:text-ivory transition-all duration-300 group"
          >
            <span className="font-display italic text-lg">Book now</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Content: side nav + sections */}
      <div className="flex gap-10 xl:gap-16">
        <SideNav sections={cat.sections} />

        <div className="flex-1 min-w-0 space-y-4">
          {cat.sections.map((section, i) => (
            <SectionCard key={section.id} section={section} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <>
      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-0">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
          <p className="label text-brass tracking-[0.28em]">The Craft — 03 disciplines</p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.92] tracking-tight text-espresso">
              Services &{" "}
              <span className="italic text-espresso/50">pricing.</span>
            </h1>
            <p className="sm:text-right text-espresso/50 max-w-xs leading-relaxed text-sm sm:pb-1">
              Stylist tiers: <span className="text-espresso/80">Designer · Creator · Architect</span>
            </p>
          </div>
        </div>

        {/* ── Category Tabs ───────────────────────────────────────────────────── */}
        <div className="mt-10 border-b border-espresso/10 sticky top-[64px] z-30 bg-background/90 backdrop-blur-sm">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-10 flex">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative flex items-center gap-2.5 px-5 sm:px-8 py-4 sm:py-5 transition-all duration-200 group ${
                  activeId === cat.id
                    ? "text-espresso"
                    : "text-espresso/35 hover:text-espresso/60"
                }`}
              >
                <span
                  className={`label tracking-[0.22em] text-[0.65rem] transition-colors ${
                    activeId === cat.id ? "text-brass" : "text-current"
                  }`}
                >
                  {cat.num}
                </span>
                <span className="font-display text-lg sm:text-xl tracking-tight">
                  {cat.label}
                </span>
                {activeId === cat.id && (
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-espresso" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Content ─────────────────────────────────────────────────── */}
      <CategoryPage key={activeId} cat={current} />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="gradient-espresso">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 py-20 grid sm:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <Plume className="h-10 w-10 text-brass/60 mb-6" />
            <p className="label text-brass tracking-[0.25em]">The invitation</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-ivory leading-tight">
              Take the afternoon.{" "}
              <span className="italic text-brass">We'll take care of the rest.</span>
            </h2>
          </div>
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            className="group inline-flex items-center gap-4 border border-ivory/20 px-10 py-5 text-ivory hover:border-brass hover:text-brass transition-all duration-300"
          >
            <span className="font-display text-xl italic">Book a consultation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2 text-brass">→</span>
          </a>
        </div>
      </section>
    </>
  );
}