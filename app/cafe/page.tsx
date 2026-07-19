"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
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
    { n: "Avocado Sandwich", d: "Fresh avocado, cucumber, lettuce, tomato & mayo", img: "/images/cafe/AVOCADO SANDWICH.png" },
    { n: "Tandoori Paneer Sandwich", d: "Tandoori paneer, onions, bell peppers & mint chutney", img: "/images/cafe/TANDOORI PANEER SANDWICH.png" },
    { n: "Mix Vegetable Sandwich", d: "Assorted vegetables, lettuce, cucumber & mayo", img: "/images/cafe/MIX VEGETABLE SANDWICH.png" },
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
  const menuRef = useRef<HTMLElement>(null);

  const handleCategoryClick = (cat: Cat) => {
    setActiveCategory(cat);
    setIsFilterOpen(false);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

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
            <div className="mb-8 relative h-28 sm:h-36 w-48 sm:w-64 -ml-4">
              <Image
                src="/images/logo-plume-transparent.png"
                alt="Plume Café"
                fill
                sizes="(max-width: 640px) 192px, 256px"
                quality={20}
                className="object-contain"
                priority
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
              <Image
                key={src}
                src={src}
                alt="Plume Cafe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={20}
                priority={idx === 0}
                className={`object-cover transition-opacity duration-1000 ${idx === heroIdx ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </figure>
        </div>
      </section>

      {/* ── Filter Controls (Desktop Only) ──────────────────────────────────── */}
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
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0 [&::-webkit-scrollbar]:hidden w-full md:w-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
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
      <section ref={menuRef} className="mx-auto max-w-[1400px] px-5 sm:px-10 py-16 scroll-mt-24 md:scroll-mt-28">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="relative h-12 w-12 mb-4 opacity-40">
              <Image src="/images/logo-icon.png" alt="" fill quality={20} sizes="48px" className="object-contain" />
            </div>
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
          <div className="space-y-20">
            {Array.from(grouped.entries()).map(([catName, items], sectionIdx) => (
              <div key={catName} className="space-y-7">
                {/* Section divider (not for the first) */}
                {sectionIdx > 0 && (
                  <div className="w-full flex items-center gap-4 -mt-4 mb-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-espresso/8 to-transparent" />
                    <div className="w-1 h-1 rounded-full bg-brass/30" />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-espresso/8 to-transparent" />
                  </div>
                )}
                {/* Category Header */}
                <div className="flex items-end gap-5 pb-1">
                  <div>
                    <p className="label text-[0.55rem] tracking-[0.3em] text-espresso/30 uppercase mb-1">Menu</p>
                    <h2 className="font-display text-3xl sm:text-4xl text-espresso tracking-tight leading-none">
                      {catName}
                    </h2>
                  </div>
                  <div className="flex-1 pb-1.5">
                    <div className="h-px bg-gradient-to-r from-espresso/12 via-brass/20 to-transparent" />
                  </div>
                  <p className="label text-[0.55rem] tracking-[0.2em] text-espresso/25 pb-1.5 shrink-0">{items.length} items</p>
                </div>

                {/* Items grid / mobile horizontal scroll */}
                <div 
                  className="flex md:grid overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {items.map((item) => (
                    <div
                      key={item.n}
                      className="shrink-0 w-[175px] h-[245px] md:w-auto md:h-auto md:shrink snap-center group relative flex flex-col md:gap-0 md:rounded-[1.75rem] transition-all duration-500 border overflow-hidden cursor-pointer"
                      style={{
                        borderRadius: "1.4rem",
                        background: "linear-gradient(160deg, #fff 0%, #faf6f0 100%)",
                        boxShadow: "0 4px 24px rgba(51,38,29,0.09), inset 0 1px 0 rgba(255,255,255,1)",
                        border: "1px solid rgba(185,155,110,0.18)",
                      }}
                    >
                      {/* ── IMAGE ZONE ── */}
                      <div className="relative w-full flex-shrink-0" style={{ height: "142px", minHeight: "142px" }}>
                        {/* Warm gradient backdrop */}
                        <div className="absolute inset-0" style={{
                          background: "linear-gradient(135deg, #f9f0e1 0%, #f3ece0 50%, #efe6d5 100%)",
                          borderRadius: "1.3rem 1.3rem 0 0"
                        }} />

                        {/* Category pill */}
                        <div className="absolute top-2.5 left-3 z-20">
                          <span className="label text-[0.48rem] tracking-[0.22em] text-espresso/50 uppercase bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-full border border-espresso/10">
                            {catName}
                          </span>
                        </div>

                        {/* Drink image */}
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2">
                          <div className="relative w-28 h-28 md:w-32 md:h-32">
                            {/* Ambient glow */}
                            <div className="absolute inset-0 rounded-full blur-2xl"
                              style={{ background: "radial-gradient(circle, rgba(200,160,90,0.22) 0%, transparent 65%)" }}
                            />
                            <Image
                              src={item.img}
                              alt={item.n}
                              fill
                              sizes="(max-width: 640px) 96px, 128px"
                              quality={20}
                              className="object-cover rounded-lg drop-shadow-[0_8px_18px_rgba(51,38,29,0.18)] relative z-10"
                            />
                          </div>
                        </div>
                      </div>

                      {/* ── TEXT PANEL ── */}
                      <div className="flex flex-col items-center justify-center px-4 py-3.5 flex-1 min-w-0 w-full relative z-10">
                        <h3 className="font-display text-[0.98rem] md:text-[1.05rem] text-espresso text-center group-hover:text-brass transition-colors duration-300 line-clamp-2 leading-snug w-full">
                          {item.n}
                        </h3>
                        {item.d && (
                          <p className="text-[0.68rem] md:text-[0.72rem] text-espresso/45 leading-snug line-clamp-2 mt-1.5 text-center">
                            {item.d}
                          </p>
                        )}
                      </div>

                      {/* Bottom shimmer */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/20 to-transparent pointer-events-none" />
                      {/* Hover warm wash */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.4rem]"
                        style={{ background: "radial-gradient(ellipse at 50% 25%, rgba(185,150,90,0.07) 0%, transparent 70%)" }}
                      />
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
      <div className="fixed bottom-4 left-3 z-40 md:hidden pointer-events-none">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="pointer-events-auto bg-espresso/95 backdrop-blur-md text-ivory px-3.5 py-2 rounded-full shadow-lg font-medium tracking-wide flex items-center gap-1.5 hover:bg-espresso transition-colors text-[0.8rem]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
            <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Filter
        </button>
      </div>

      {/* ── Mobile Filter Bottom Sheet ───────────────────────────────────────── */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:hidden">
          <style>{`
            #global-book-btn {
              display: none !important;
            }
          `}</style>
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

            <div className="space-y-6">
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
                      onClick={() => handleCategoryClick(cat)}
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