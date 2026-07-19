"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import cafeImg from "@/assets/cafe.jpg";
import { Plume } from "@/components/site/Plume";

const CAFE_HERO_IMAGES = [
  "/images/cafe/hero-1.jpg",
  "/images/cafe/hero-2.jpg"
];

interface CafeItem {
  n: string;
  d: string;
  p?: string;
  img: string;
}

const CAFE_MENU: Record<string, CafeItem[]> = {
  Coffee: [
    { n: "Espresso Shot", d: "Strong and bold single shot", img: "/images/cafe/ESPRESSO SHOT.png" },
    { n: "Espresso Shot With Soda", d: "", img: "/images/cafe/esspresso shot with soda.png" },
    { n: "Americano", d: "Espresso topped with hot water", img: "/images/cafe/AMERICANO.png" },
    { n: "Cappuccino", d: "Espresso with steamed milk and foamed milk", img: "/images/cafe/CAPPUCCINO.png" },
    { n: "Flat White", d: "Smooth espresso with microfoam milk", img: "/images/cafe/FLAT WHITE.png" },
    { n: "Caffè Latte", d: "Espresso with steamed milk", img: "/images/cafe/CAFFÈ LATTE.png" },
    { n: "Mocha", d: "Espresso with chocolate and steamed milk", img: "/images/cafe/MOCHA.png" },
    { n: "Iced Coffee", d: "Classic cold coffee", img: "/images/cafe/Iced coffee.png" },
  ],
  Tea: [
    { n: "Masala Tea", d: "Traditional Indian spiced tea", img: "/images/cafe/MASALA TEA.png" },
    { n: "Ice Tea", d: "Refreshing lemon iced tea", img: "/images/cafe/ICE TEA.png" },
    { n: "Dip Tea", d: "(Ask for Dip Tea Menu)", img: "/images/cafe/DIP TEA.png" },
  ],
  "Boba Tea": [
    { n: "Watermelon Boba Tea", d: "Refreshing watermelon tea with chewy boba", img: "/images/cafe/WATERMELON BOBA TEA.png" },
    { n: "Peach Mango Boba Tea", d: "Sweet peach & mango tea with boba", img: "/images/cafe/PEACH MANGO BOBA TEA.png" },
    { n: "Strawberry Boba Tea", d: "Fruity strawberry tea with boba", img: "/images/cafe/STRAWBERRY BOBA TEA.png" },
  ],
  Mojito: [
    { n: "Mojito (Classic)", d: "Mint, lemon, lime & soda", img: "/images/cafe/MOJITO (CLASSIC).png" },
    { n: "Watermelon Mojito", d: "Fresh watermelon with mint & lime", img: "/images/cafe/WATERMELON MOJITO.png" },
    { n: "Peach Mojito", d: "Peach, lime, mint & soda", img: "/images/cafe/PEACH MOJITO.png" },
  ],
  Sandwich: [
    { n: "Avocado Sandwich", d: "Fresh avocado, cucumber, lettuce, tomato & mayo", p: "₹800", img: "/images/cafe/AVOCADO SANDWICH.png" },
    { n: "Tandoori Paneer Sandwich", d: "Tandoori paneer, onions, bell peppers & mint chutney", p: "₹800", img: "/images/cafe/TANDOORI PANEER SANDWICH.png" },
    { n: "Mix Vegetable Sandwich", d: "Assorted vegetables, lettuce, cucumber & mayo", p: "₹800", img: "/images/cafe/MIX VEGETABLE SANDWICH.png" },
  ],
  "Fresh Juices": [
    { n: "Watermelon Juice", d: "", img: "/images/cafe/WATERMELON JUICE.png" },
    { n: "Fresh Lime Juice", d: "", img: "/images/cafe/FRESH LIME JUICE.png" },
    { n: "Pineapple Juice", d: "", img: "/images/cafe/PINEAPPLE JUICE.png" },
    { n: "Orange Juice", d: "", img: "/images/cafe/ORANGE JUICE.png" },
    { n: "Detox Juice", d: "(Beet, Carrot, Spinach, Mint, Ginger)", img: "/images/cafe/DETOX JUICE.png" },
  ],
  Matcha: [
    { n: "Iced Matcha Latte", d: "Smooth matcha with milk served over ice", img: "/images/cafe/ICED MATCHA LATTE.png" },
    { n: "Hot Matcha Latte", d: "Warm, creamy matcha made with steamed milk", img: "/images/cafe/HOT MATCHA LATTE.png" },
    { n: "Matcha Espresso Fusion", d: "Matcha with a shot of espresso for the perfect balance", img: "/images/cafe/MATCHA ESPRESSO FUSION.png" },
  ]
};

const CATEGORIES = ["All", "Coffee", "Tea", "Boba Tea", "Mojito", "Sandwich", "Fresh Juices", "Matcha"] as const;
type Cat = (typeof CATEGORIES)[number];

export default function Cafe() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Cat>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx(prev => (prev + 1) % CAFE_HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Flattened list for searching
  const flattenedItems = useMemo(() => {
    const list: (CafeItem & { cat: string })[] = [];
    Object.entries(CAFE_MENU).forEach(([catName, items]) => {
      items.forEach((it) => {
        list.push({ ...it, cat: catName });
      });
    });
    return list;
  }, []);

  // Filter items
  const filtered = useMemo(() => {
    let list = flattenedItems;

    // Filter by Category
    if (activeCategory !== "All") {
      list = list.filter((item) => item.cat === activeCategory);
    }

    // Filter by Search Query
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (item) =>
          item.n.toLowerCase().includes(q) ||
          item.d.toLowerCase().includes(q) ||
          item.cat.toLowerCase().includes(q)
      );
    }

    return list;
  }, [query, activeCategory, flattenedItems]);

  // Re-group filtered items by category for display
  const grouped = useMemo(() => {
    const map = new Map<string, (CafeItem & { cat: string })[]>();
    filtered.forEach((item) => {
      if (!map.has(item.cat)) {
        map.set(item.cat, []);
      }
      map.get(item.cat)!.push(item);
    });
    return map;
  }, [filtered]);

  return (
    <>
      {/* ── Hero section ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-14 bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="flex flex-col justify-center">
            {/* Plume Café branded lockup */}
            <div className="mb-8">
              <img
                src="/images/logo-plume-transparent.png"
                alt="Plume Café"
                className="h-28 sm:h-36 w-auto object-contain -ml-4"
              />
            </div>
            <h1 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-tight text-espresso">
              A pause worth
              <br />
              <span className="italic text-espresso/45">staying for.</span>
            </h1>
            <p className="mt-6 max-w-lg leading-relaxed text-espresso/70 text-base sm:text-lg">
              Named for the single feather at the centre of our mark - the plume, held back, never the full fan.
              Plume Café is the social centre of Ivory Atelier, where guests linger between rituals, not just wait for them.
            </p>
          </div>
          <figure className="relative w-full max-w-[500px] mx-auto md:max-w-none md:max-h-[600px] overflow-hidden rounded-sm aspect-[2/3] bg-espresso">
            {CAFE_HERO_IMAGES.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Plume Cafe"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === heroIdx ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </figure>
        </div>
      </section>

      {/* ── Search and Filter Controls (Desktop Only) ───────────────────────── */}
      <section className="hidden md:block bg-background/95 border-y border-espresso/10 py-4 md:py-5 transition-all duration-300">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-colors duration-300 group-focus-within:text-espresso text-espresso/40">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cafe menu - latte, boba, sandwich…"
              className="w-full pl-11 pr-10 py-3 bg-white/80 border border-espresso/10 rounded-full text-espresso placeholder-espresso/40 focus:outline-none focus:border-espresso/30 focus:ring-4 focus:ring-espresso/5 focus:bg-white transition-all duration-300 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            />
            {query && (
              <button
                onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                className="absolute inset-y-0 right-1 flex items-center px-4 text-espresso/40 hover:text-espresso transition-colors"
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full border text-[0.65rem] md:text-xs transition-all duration-300 tracking-[0.15em] shrink-0 font-medium ${activeCategory === cat
                    ? "bg-espresso text-ivory border-espresso shadow-lg shadow-espresso/20"
                    : "border-espresso/10 text-espresso/60 hover:border-espresso/30 hover:text-espresso bg-white/50 hover:bg-white hover:shadow-sm"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu List ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-10 py-16">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <img src="/images/logo-icon.png" alt="" className="h-12 w-auto object-contain opacity-40 mb-4" />
            <p className="font-display text-2xl text-espresso/40">Nothing found on the menu.</p>
            <p className="mt-2 text-espresso/35 text-sm">
              Try a different word - or{" "}
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="underline underline-offset-2 hover:text-espresso/60 transition-colors"
              >
                view the full menu
              </button>
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {Array.from(grouped.entries()).map(([catName, items]) => (
              <div key={catName} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-2xl sm:text-3xl text-espresso tracking-tight">
                    {catName}
                  </h2>
                  <div className="flex-1 h-px bg-espresso/10" />
                </div>

                {/* Items grid / mobile horizontal scroll */}
                <div 
                  className="flex md:grid overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {items.map((item) => (
                    <div
                      key={item.n}
                      className="shrink-0 w-[280px] md:w-auto md:shrink snap-center group relative flex flex-col md:flex-row gap-6 md:gap-5 p-8 md:p-5 rounded-[2rem] md:rounded-2xl hover:bg-white transition-all duration-500 items-center justify-between border border-espresso/5 hover:border-espresso/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/60 md:bg-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:shadow-none overflow-hidden"
                    >
                      {/* Decorative background blob on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Transparent Drink Thumbnail */}
                      <div className="w-36 h-36 md:w-20 md:h-20 shrink-0 relative flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 order-1 md:order-2">
                        {/* Soft glow behind image */}
                        <div className="absolute inset-0 bg-brass/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={item.img}
                          alt={item.n}
                          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] md:drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>

                      {/* Text details */}
                      <div className="flex-1 min-w-0 w-full text-center md:text-left order-2 md:order-1 relative z-10">
                        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-3 flex-wrap justify-center md:justify-start">
                          <h3 className="font-display text-xl md:text-lg text-espresso group-hover:text-brass transition-colors duration-200">
                            {item.n}
                          </h3>
                          {item.p && (
                            <span className="font-sans text-[0.65rem] font-bold text-brass tracking-widest bg-brass/10 px-2.5 py-1 rounded-full uppercase mt-2 md:mt-0">
                              {item.p}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 md:mt-1 text-sm md:text-xs text-espresso/50 leading-relaxed">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Story Quote ──────────────────────────────────────────────────────── */}
      <section className="bg-sand/20 border-t border-espresso/8 py-16 text-center pb-32 md:pb-16">
        <div className="mx-auto max-w-xl px-5">
          <p className="font-display text-2xl italic leading-relaxed text-espresso/70">
            "Take the afternoon. We'll take care of the rest."
          </p>
          <p className="label tracking-[0.25em] text-[0.62rem] text-espresso/30 mt-4">
            THE ATELIER HOUSE EXPERIENCE
          </p>
        </div>
      </section>

      {/* ── Mobile Floating Filter Button ────────────────────────────────────── */}
      <div className="fixed bottom-6 inset-x-0 flex justify-center z-40 md:hidden pointer-events-none">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="pointer-events-auto bg-espresso/95 backdrop-blur-md text-ivory px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] font-medium tracking-wide flex items-center gap-2.5 hover:bg-espresso transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Filters & Search
        </button>
      </div>

      {/* ── Mobile Filter Bottom Sheet ───────────────────────────────────────── */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-espresso/20 backdrop-blur-sm transition-opacity"
            onClick={() => setIsFilterOpen(false)}
          />
          {/* Sheet */}
          <div className="relative w-full bg-[#FAFAFA] rounded-t-3xl shadow-2xl p-6 pb-12 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-display text-2xl text-espresso tracking-tight">Menu Filters</h3>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-espresso/50 hover:text-espresso transition-colors rounded-full bg-espresso/5"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Search */}
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-espresso/40">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                    <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search cafe menu…"
                  className="w-full pl-11 pr-10 py-3.5 bg-white border border-espresso/10 rounded-xl text-espresso placeholder-espresso/40 focus:outline-none focus:border-espresso/30 text-base shadow-sm"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute inset-y-0 right-1 flex items-center px-4 text-espresso/40 hover:text-espresso"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <p className="text-xs text-espresso/50 mb-3 font-semibold tracking-[0.15em] uppercase">Categories</p>
                <div className="flex flex-wrap gap-2.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2.5 rounded-xl border text-sm transition-all duration-300 tracking-wide font-medium ${
                        activeCategory === cat
                          ? "bg-espresso text-ivory border-espresso shadow-md"
                          : "border-espresso/10 text-espresso/70 hover:border-espresso/30 bg-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-espresso text-ivory py-4 rounded-xl font-medium tracking-wide mt-4 shadow-lg hover:bg-espresso/90 transition-all active:scale-[0.98]"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}