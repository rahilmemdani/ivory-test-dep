"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceBeauty from "@/assets/service-beauty.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import { Plume } from "@/components/site/Plume";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  name: string;
  desc?: string;
  category: string;       // "Hair" | "Skin Care" | "Nails"
  subcategory: string;    // e.g. "Cuts & Styling", "Colour", "Facials"…
}

// ─── All Services (no prices) ─────────────────────────────────────────────────

const ALL_SERVICES: Service[] = [
  // ── Hair: Cuts & Styling ──
  { name: "Hair Cut & Styling - Women", desc: "Signature cut, consultation included", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Hair Cut & Styling - Men", desc: "Considered cut with proper consultation", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Hair Cut & Styling - Children (under 12)", desc: "Gentle, patient, and unhurried", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Bangs / Fringes", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Blast Dry", desc: "Quick, clean finish", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Styling - Blow Dry", desc: "Full round-brush blow-dry", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Ironing", desc: "Sleek, glass-smooth finish", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Tonging", desc: "Soft waves and curls", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Crimping", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Evening Hair Do", desc: "Occasion-ready updo or styling", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Party Hair Do", desc: "Showstopping look for a night out", category: "Hair", subcategory: "Cuts & Styling" },
  { name: "Bridal Hair Do", desc: "Your most important look - given the time it deserves", category: "Hair", subcategory: "Cuts & Styling" },
  // ── Hair: Colour ──
  { name: "Root Touch-up", desc: "Seamless regrowth correction", category: "Hair", subcategory: "Colour" },
  { name: "Global Colour", desc: "All-over colour, head to tip", category: "Hair", subcategory: "Colour" },
  { name: "Natural Skinkissed", desc: "Sun-drenched, natural warmth", category: "Hair", subcategory: "Colour" },
  { name: "Choco Griffe", desc: "Rich chocolate with claw-effect dimension", category: "Hair", subcategory: "Colour" },
  { name: "Ruby Touched", desc: "Deep wine-red tones, editorial", category: "Hair", subcategory: "Colour" },
  { name: "Latte Contour", desc: "Warm latte with soft face-framing", category: "Hair", subcategory: "Colour" },
  { name: "Classic Highlights", desc: "Timeless lightening, section by section", category: "Hair", subcategory: "Colour" },
  { name: "Balayage", desc: "Hand-painted, freehand technique", category: "Hair", subcategory: "Colour" },
  { name: "Sun Glazing", desc: "Luminous gloss with sun-kissed effect", category: "Hair", subcategory: "Colour" },
  { name: "Toner", desc: "Tone correction and shine enhancement", category: "Hair", subcategory: "Colour" },
  { name: "Partial Highlights", desc: "Face-framing or crown lightening", category: "Hair", subcategory: "Colour" },
  { name: "Per Strand Highlights", desc: "Precision, strand by strand", category: "Hair", subcategory: "Colour" },
  // ── Hair: Treatments ──
  { name: "Express Spa (30 mins)", desc: "Personalised hydration, incl. blast dry", category: "Hair", subcategory: "Treatments" },
  { name: "Power Dose (30 mins)", desc: "Intense moisture, frizz control, incl. blast dry", category: "Hair", subcategory: "Treatments" },
  { name: "Korean Glass Hair Treatment", desc: "Mirror-like sleekness, exceptional shine", category: "Hair", subcategory: "Treatments" },
  { name: "Scalp Care (45 mins)", desc: "AI-powered analysis + targeted scalp treatment", category: "Hair", subcategory: "Treatments" },
  { name: "Smooth & Anti-Frizz Hairspa (45 mins)", desc: "Tames unruly strands, lasting manageability", category: "Hair", subcategory: "Treatments" },
  { name: "Signature Revive & Restore Hairspa (45 mins)", desc: "Nourishes dry, damaged hair from root to tip", category: "Hair", subcategory: "Treatments" },
  { name: "VIP Advanced Repair & Strength Ritual (60 mins)", desc: "Rebuilds, strengthens and restores chemically treated hair", category: "Hair", subcategory: "Treatments" },
  { name: "Partial Hair Treatment", desc: "Targeted repair on selected sections", category: "Hair", subcategory: "Treatments" },
  { name: "Full Hair Treatment", desc: "Intensive restoration, root to tip", category: "Hair", subcategory: "Treatments" },
  // ── Hair: Peptide ──
  { name: "Peptide Hair Repair Treatment", desc: "Bond-restoring intensive peptide infusion, incl. blast dry", category: "Hair", subcategory: "Peptide Treatment" },
  { name: "Add-on: Peptide Treatment", category: "Hair", subcategory: "Peptide Treatment" },
  { name: "Add-on: Powder Dose", category: "Hair", subcategory: "Peptide Treatment" },
  { name: "Add-on: Scrub", category: "Hair", subcategory: "Peptide Treatment" },
  // ── Hair: Head Spa ──
  { name: "AI-Powered Japanese Head Spa", desc: "Scalp analysis · deep cleanse · therapeutic massage · steam · face mask", category: "Hair", subcategory: "Head Spa" },
  { name: "Add-on: Mask (Head Spa)", category: "Hair", subcategory: "Head Spa" },
  { name: "Add-on: Blow Dry (Head Spa)", category: "Hair", subcategory: "Head Spa" },
  // ── Hair: Korean Scalp ──
  { name: "Express Scalp Treatment (30 mins)", desc: "In-depth scalp analysis + deep cleanse", category: "Hair", subcategory: "Korean Scalp Treatments" },
  { name: "Dry Scalp Treatment", desc: "AI-powered personalised hydration for dry scalp", category: "Hair", subcategory: "Korean Scalp Treatments" },
  { name: "Oily Scalp Treatment", desc: "Rebalancing treatment for excess oil", category: "Hair", subcategory: "Korean Scalp Treatments" },
  { name: "Dandruff Scalp Treatment", desc: "Targets flaking and scalp irritation", category: "Hair", subcategory: "Korean Scalp Treatments" },
  { name: "Hair Fall Scalp Treatment", desc: "Strengthens scalp, promotes healthier growth", category: "Hair", subcategory: "Korean Scalp Treatments" },
  // ── Hair: Extensions ──
  { name: "3 Piece Clip-on Extensions", desc: "Available in 18\", 20\", 22\" & 24\"", category: "Hair", subcategory: "Extensions" },
  { name: "Ponytail Extensions", desc: "Available in 18\", 20\", 22\" & 24\"", category: "Hair", subcategory: "Extensions" },
  { name: "Fringe Extensions (18\")", category: "Hair", subcategory: "Extensions" },
  { name: "Tape Extensions", desc: "Per tape, multiple lengths available", category: "Hair", subcategory: "Extensions" },
  { name: "Great Lengths Extensions", desc: "Per strand, 18\"-24\" available", category: "Hair", subcategory: "Extensions" },
  { name: "Servicing Extensions - Wash & Dry", category: "Hair", subcategory: "Extensions" },
  { name: "Highlights on Extensions", category: "Hair", subcategory: "Extensions" },

  // ── Skin Care: Facials ──
  { name: "AI-Enhanced Purity Ritual (30 mins)", desc: "Express facial with nourishing marine actives, all skin types", category: "Skin Care", subcategory: "Facials" },
  { name: "AI-Enhanced City Life Hydration Treatment (60 mins)", desc: "Deep urban-skin hydration, restores natural vitality", category: "Skin Care", subcategory: "Facials" },
  { name: "AI-Enhanced Clarifying Mineral Treatment (60 mins)", desc: "Purifying mineral facial for oily and acne-prone skin", category: "Skin Care", subcategory: "Facials" },
  { name: "AI-Enhanced Radiance Antiox Treatment (75 mins)", desc: "Brightening antioxidant facial targeting pigmentation and dullness", category: "Skin Care", subcategory: "Facials" },
  { name: "Ivory Signature Facial (90 mins)", desc: "LumiSpa + Galvanic Spa + eye treatment - deeply hydrating, radiant result", category: "Skin Care", subcategory: "Facials" },
  { name: "AI-Enhanced Multi Peptide Better Ageing Treatment (75 mins)", desc: "Peptide firming facial to reduce signs of ageing", category: "Skin Care", subcategory: "Facials" },
  { name: "AI-Enhanced HydraFacial (45-50 mins)", desc: "Deep cleanse · hydrate · lift · glow - all in one session", category: "Skin Care", subcategory: "Facials" },
  { name: "Red Light Therapy (20 mins)", desc: "Improves texture, reduces fine lines and supports acne healing", category: "Skin Care", subcategory: "Facials" },
  { name: "Eye Care Ritual Treatment (30 mins)", desc: "Targets dark circles, fine lines and puffiness around the eye area", category: "Skin Care", subcategory: "Facials" },
  // ── Skin Care: Face Gym ──
  { name: "Face Gym - Cardio (30 mins)", desc: "High-energy facial muscle workout to tone and sculpt", category: "Skin Care", subcategory: "Face Gym" },
  { name: "Face Gym - Sculpting (45 mins)", desc: "Deep tissue massage to lift, tone and define facial contours", category: "Skin Care", subcategory: "Face Gym" },
  { name: "Face Gym - Cool Down (60 mins)", desc: "Gua Sha + nutrient-rich skincare for restoration and radiance", category: "Skin Care", subcategory: "Face Gym" },
  { name: "Add-on: Eye Treatment with Facial", category: "Skin Care", subcategory: "Face Gym" },
  { name: "Add-on: Mask (Face Gym)", category: "Skin Care", subcategory: "Face Gym" },
  { name: "Add-on: Red Light Therapy (Face Gym)", category: "Skin Care", subcategory: "Face Gym" },
  { name: "Add-on: HydraFacial (Face Gym)", category: "Skin Care", subcategory: "Face Gym" },
  // ── Skin Care: Threading ──
  { name: "Threading - Upper Lip", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Threading - Chin", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Threading - Eyebrow", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Threading - Forehead", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Threading - Side Locks", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Threading - Full Face", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Waxing - Upper Lip", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Waxing - Eyebrows", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Waxing - Chin", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Waxing - Nose", category: "Skin Care", subcategory: "Threading & Waxing" },
  { name: "Waxing - Full Face", category: "Skin Care", subcategory: "Threading & Waxing" },
  // ── Skin Care: Body Waxing ──
  { name: "Body Waxing - Half Arms", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Full Arms", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Underarms", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Half Legs", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Full Legs", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Bikini Line", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Brazilian", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - G-String", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Stomach", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Chest", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Back", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Body Waxing - Glutes", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Full Body Waxing", desc: "Complete body waxing package", category: "Skin Care", subcategory: "Body Waxing" },
  { name: "Men's Body Waxing", desc: "Cartridge wax - arms, underarms, chest, stomach, back", category: "Skin Care", subcategory: "Body Waxing" },
  // ── Skin Care: Make-up & Bridal ──
  { name: "Day / Light Make-up (60 mins)", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Evening Make-up (60 mins)", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Eye Make-up", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Saree Draping", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Stick-on Lashes", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Bridal Hair & Make-up - at the Salon", desc: "Complete bridal look at Ivory Atelier", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Bridal Hair & Make-up - at the Venue", desc: "Our team comes to you on your day", category: "Skin Care", subcategory: "Make-up & Bridal" },
  { name: "Pre-Bridal Package", desc: "Spa Mani + Spa Pedi + Full Body Wax + Hair Spa + Facial + Massage + Body Exfoliation + Body Wrap · Valid 2 months", category: "Skin Care", subcategory: "Make-up & Bridal" },
  // ── Skin Care: Bleach & Add-ons ──
  { name: "Bleach - Face", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Bleach - Full Hands", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Bleach - Full Legs", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Bleach - Chest", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Bleach - Back", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Bleach - Full Body", desc: "Excluding face", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Head Massage", desc: "30, 45 or 60 minutes - relieves tension, improves circulation", category: "Skin Care", subcategory: "Bleach & Add-ons" },
  { name: "Foot Massage", desc: "30, 45 or 60 minutes - soothing and restorative", category: "Skin Care", subcategory: "Bleach & Add-ons" },

  // ── Nails: Hands ──
  { name: "Nail Polish Application", category: "Nails", subcategory: "Manicure" },
  { name: "French Polish Application", category: "Nails", subcategory: "Manicure" },
  { name: "Shape & Polish", category: "Nails", subcategory: "Manicure" },
  { name: "Classic Manicure", desc: "Soaked, shaped, buffed and polished", category: "Nails", subcategory: "Manicure" },
  { name: "French Manicure", desc: "The timeless classic", category: "Nails", subcategory: "Manicure" },
  { name: "Warm Candle Manicure", desc: "Deeply moisturising warm wax treatment", category: "Nails", subcategory: "Manicure" },
  { name: "Spa Manicure", desc: "Full ritual - soak, scrub, mask, massage and polish", category: "Nails", subcategory: "Manicure" },
  // ── Nails: Pedicure ──
  { name: "Nail Polish Application - Toes", category: "Nails", subcategory: "Pedicure" },
  { name: "French Polish Application - Toes", category: "Nails", subcategory: "Pedicure" },
  { name: "Shape & Polish - Toes", category: "Nails", subcategory: "Pedicure" },
  { name: "Classic Pedicure", desc: "Soaked, shaped, buffed and polished", category: "Nails", subcategory: "Pedicure" },
  { name: "French Pedicure", category: "Nails", subcategory: "Pedicure" },
  { name: "Warm Candle Pedicure", desc: "Deeply moisturising warm wax treatment", category: "Nails", subcategory: "Pedicure" },
  { name: "Spa Pedicure", desc: "Full ritual - soak, scrub, mask, massage and polish", category: "Nails", subcategory: "Pedicure" },
  // ── Nails: Gel ──
  { name: "Gel Polish Application", category: "Nails", subcategory: "Gel Polish" },
  { name: "Gel Polish - French", category: "Nails", subcategory: "Gel Polish" },
  { name: "Gel Polish - Cat Eye", category: "Nails", subcategory: "Gel Polish" },
  { name: "Gel Polish - Ombre", category: "Nails", subcategory: "Gel Polish" },
  { name: "Gel Polish - Glitter", category: "Nails", subcategory: "Gel Polish" },
  { name: "Gel Polish - Chrome", category: "Nails", subcategory: "Gel Polish" },
  { name: "Gel Polish Removal", category: "Nails", subcategory: "Gel Polish" },
  { name: "Nail Art - Stickers (per finger)", category: "Nails", subcategory: "Gel Polish" },
  { name: "Nail Art - Stones (per finger)", category: "Nails", subcategory: "Gel Polish" },
  { name: "Nail Art - Freehand (per finger)", desc: "All types", category: "Nails", subcategory: "Gel Polish" },
  // ── Nails: Extensions ──
  { name: "Gel Nail Extensions", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Gel Nail Refilling", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Gel Inbuilt Nail Art", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Builder Gel - French", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Builder Gel - Ombre", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Acrylic Nail Extension", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Acrylic Overlay", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Acrylic Refilling", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Acrylic Inbuilt Art", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Acrylic Inbuilt French", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Acrylic Inbuilt Ombre", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Tip Repair", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Toe Repair", category: "Nails", subcategory: "Nail Extensions" },
  { name: "Extension Removal", category: "Nails", subcategory: "Nail Extensions" },
];

const CATEGORIES = ["All", "Hair", "Skin Care", "Nails"] as const;
type Cat = (typeof CATEGORIES)[number];

// ─── Highlight matching text ──────────────────────────────────────────────────

function Highlighted({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-brass/25 text-espresso rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// ─── Category colour accent ───────────────────────────────────────────────────

const CAT_ACCENT: Record<string, string> = {
  "Hair": "text-[#8B6B4A]",
  "Skin Care": "text-[#7A8B6A]",
  "Nails": "text-[#8A6A7A]",
};

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  query,
  onSelect,
}: {
  service: Service;
  query: string;
  onSelect: (s: Service) => void;
}) {
  return (
    <button
      onClick={() => onSelect(service)}
      className="group text-left flex flex-col gap-2 rounded-sm border border-espresso/10 bg-alabaster/50 p-5 hover:border-brass/30 hover:bg-alabaster hover:shadow-[0_4px_20px_-4px_rgba(51,38,29,0.10)] active:scale-[0.98] transition-all duration-200 w-full"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-[1.1rem] leading-snug text-espresso group-hover:text-brass transition-colors duration-200">
          <Highlighted text={service.name} query={query} />
        </p>
        {/* Tap hint */}
        <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full border border-espresso/15 flex items-center justify-center text-espresso/25 group-hover:border-brass/40 group-hover:text-brass transition-all duration-200">
          <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {service.desc && (
        <p className="text-sm text-espresso/40 leading-relaxed">
          <Highlighted text={service.desc} query={query} />
        </p>
      )}
      <span className={`mt-auto pt-3 label text-[0.58rem] tracking-[0.2em] ${CAT_ACCENT[service.category] ?? "text-espresso/30"}`}>
        {service.subcategory}
      </span>
    </button>
  );
}

// ─── Service Drawer (bottom-sheet modal) ──────────────────────────────────────

function ServiceDrawer({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  // Drag to close logic
  const [dragY, setDragY] = useState(0);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleDragStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startY.current = 'touches' in e ? e.touches[0].clientY : e.clientY;
  };

  const handleDragMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const delta = y - startY.current;
    if (delta > 0) {
      setDragY(delta);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragY > 100) {
      onClose();
      setTimeout(() => setDragY(0), 300);
    } else {
      setDragY(0);
    }
  };

  // Prevent body scroll when open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
      setDragY(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [service]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!service) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-espresso/30 backdrop-blur-sm"
        style={{ animation: "fadeIn 0.2s ease" }}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 max-h-[85dvh] overflow-y-auto rounded-t-2xl bg-alabaster shadow-2xl"
        style={{ 
          animation: "slideUp 0.28s cubic-bezier(0.32,0.72,0,1)",
          transform: dragY > 0 ? `translateY(${dragY}px)` : 'translateY(0)',
          transition: isDragging.current ? 'none' : 'transform 0.3s cubic-bezier(0.32,0.72,0,1)'
        }}
        role="dialog"
        aria-modal
        aria-label={service.name}
      >
        {/* Drag handle */}
        <div 
          className="sticky top-0 z-10 flex items-center justify-center pt-5 pb-4 bg-alabaster/95 backdrop-blur-md cursor-grab active:cursor-grabbing touch-none"
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div className="w-12 h-1.5 rounded-full bg-espresso/20" />
        </div>

        <div className="px-6 sm:px-8 pb-10 pt-2">
          {/* Category breadcrumb */}
          <p className={`label text-[0.6rem] tracking-[0.25em] ${CAT_ACCENT[service.category] ?? "text-espresso/40"}`}>
            {service.category} · {service.subcategory}
          </p>

          {/* Service name */}
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-espresso leading-tight">
            {service.name}
          </h2>

          {/* Description */}
          {service.desc && (
            <p className="mt-4 text-espresso/60 leading-relaxed text-base max-w-lg">
              {service.desc}
            </p>
          )}

          {/* Divider */}
          <div className="my-7 h-px bg-espresso/10" />

          {/* Info note */}
          <div className="flex gap-3 items-start p-4 rounded-sm bg-sand/40 border border-espresso/8">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 mt-0.5 text-brass">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 9v5M10 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-sm text-espresso/55 leading-relaxed">
              Our booking system is general - mention <span className="font-medium text-espresso/80">{service.name}</span> when you book and our team will ensure everything is arranged for you.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-between gap-4 bg-espresso text-ivory px-7 py-5 hover:bg-ink transition-colors duration-300 group"
          >
            <div>
              <p className="font-display text-xl italic">Book a consultation</p>
              <p className="label text-[0.62rem] text-ivory/40 tracking-[0.2em] mt-0.5">Opens booking page</p>
            </div>
            <span className="text-brass text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(100%) } to { transform:translateY(0) } }
      `}</style>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    category: "Hair",
    img: serviceHair,
    signatures: [
      "Hair Cut & Styling - Women",
      "Global Colour",
      "Balayage",
      "Bridal Hair Do",
      "Styling - Blow Dry",
    ]
  },
  {
    category: "Nails",
    img: serviceNails,
    signatures: [
      "Classic Manicure",
      "Classic Pedicure",
      "Gel Polish Application",
      "Nail Art - Freehand (per finger)",
    ]
  },
  {
    category: "Beauty",
    img: serviceBeauty,
    signatures: [
      "Ivory Signature Facial (90 mins)",
      "AI-Enhanced HydraFacial (45-50 mins)",
      "Red Light Therapy (20 mins)",
      "Face Gym - Cardio (30 mins)",
      "Threading - Eyebrow",
      "Evening Make-up (60 mins)"
    ]
  },
  {
    category: "Bridal",
    img: serviceBridal,
    signatures: [
      "Bridal Hair & Make-up - at the Salon",
      "Bridal Hair & Make-up - at the Venue",
      "Pre-Bridal Package"
    ]
  }
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <>
      <ServiceDrawer service={selected} onClose={() => setSelected(null)} />
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20">
        {/* Subtle background imagery */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <img
            src={serviceHair.src}
            alt=""
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="label text-brass tracking-[0.3em]">The Craft</p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-tight text-espresso">
              The house signatures.
              <br />
              <span className="italic text-espresso/45">Done properly.</span>
            </h1>
            <p className="mt-5 text-espresso/55 max-w-lg leading-relaxed">
              Hair, nails, beauty, and the signature rituals Ivory Atelier is known for.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0 mt-8 md:mt-0">
            <a
              href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-espresso text-ivory px-7 py-4 hover:bg-ink transition-colors duration-300"
            >
              <span className="font-display text-lg italic">Book consultation</span>
            </a>
            <a
              href="/ivory%20atelier%20menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-espresso hover:text-brass transition-colors duration-300 pb-1 border-b border-espresso/20 hover:border-brass"
            >
              <span className="label tracking-[0.15em] text-xs">View full catalogue (PDF)</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Signatures ──────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 pb-24 space-y-24">
        {SECTIONS.map((sec, idx) => {
          const isEven = idx % 2 === 0;
          const sectionServices = sec.signatures.map(name => ALL_SERVICES.find(s => s.name === name)).filter(Boolean) as Service[];

          return (
            <section key={sec.category} className={`grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start ${isEven ? "" : "md:[direction:rtl]"}`}>
              <div className="relative aspect-[3/4] rounded-md overflow-hidden shadow-sm">
                <img src={sec.img.src} alt={sec.category} className="w-full h-full object-cover object-[50%_25%]" />
              </div>
              <div className={isEven ? "" : "md:[direction:ltr]"}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-4xl text-espresso leading-none">{sec.category}</h2>
                  <div className="flex-1 h-px bg-espresso/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sectionServices.map((s) => (
                    <ServiceCard key={`${s.category}/${s.name}`} service={s} query="" onSelect={setSelected} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-sand/30 border-t border-espresso/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 py-20 sm:py-24 flex flex-col sm:flex-row gap-10 items-start sm:items-center justify-between">
          <div>
            <img
              src="/images/logo-icon.png"
              alt="Ivory Atelier"
              className="h-10 w-auto object-contain mb-5"
            />
            <h2 className="font-display text-4xl sm:text-5xl text-espresso leading-tight">
              Take the afternoon.{" "}
              <span className="italic text-brass">We'll take care of the rest.</span>
            </h2>
            <p className="mt-4 text-espresso/50 max-w-md leading-relaxed">
              Not sure what you need? Book a consultation - we'll guide you through it.
            </p>
          </div>
          <a
            href="https://ivoryatelier.zohobookings.com.au/#/ivoryatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 group inline-flex items-center gap-4 bg-espresso border border-espresso px-8 sm:px-10 py-5 text-ivory hover:bg-ink hover:border-brass/30 hover:text-brass transition-all duration-300"
          >
            <span className="font-display text-xl italic">Book a consultation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2 text-brass">→</span>
          </a>
        </div>
      </section>
    </>
  );
}