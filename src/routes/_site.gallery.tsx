import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_site/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Euphoria Pub Food & Bar" },
      { name: "description", content: "A night worth remembering. Cocktails, food, atmosphere, events." },
      { property: "og:title", content: "Gallery — Euphoria" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const img = (q: string, w = 800) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=${w}&q=70`;

type Cat = "All" | "Cocktails" | "Food" | "Atmosphere" | "Events";
const photos: { id: string; src: string; cat: Cat; label: string }[] = [
  { id: "p1", src: img("photo-1551024709-8f23befc6f87"), cat: "Cocktails", label: "Euphoria Smoke" },
  { id: "p2", src: img("photo-1568901346375-23c9450c58cd"), cat: "Food", label: "The Black Beast" },
  { id: "p3", src: img("photo-1538488881038-e252a119ace7"), cat: "Atmosphere", label: "Late hours" },
  { id: "p4", src: img("photo-1571266028243-d220c6a6f4ea"), cat: "Events", label: "Gold Friday" },
  { id: "p5", src: img("photo-1514362545857-3bc16c4c7d1b"), cat: "Cocktails", label: "Golden Negroni" },
  { id: "p6", src: img("photo-1572116469696-31de0f17cc34"), cat: "Atmosphere", label: "Velvet hours" },
  { id: "p7", src: img("photo-1571877227200-a0d98ea607e9"), cat: "Food", label: "Tiramisu" },
  { id: "p8", src: img("photo-1493676304819-0d7a8d026dcf"), cat: "Events", label: "Bordeaux Saturdays" },
  { id: "p9", src: img("photo-1582169296194-e4d644c48063"), cat: "Food", label: "Loaded nachos" },
  { id: "p10", src: img("photo-1470337458703-46ad1756a187"), cat: "Cocktails", label: "Old Fashioned" },
  { id: "p11", src: img("photo-1514933651103-005eec06c04b"), cat: "Atmosphere", label: "Behind the bar" },
  { id: "p12", src: img("photo-1545438102-799c3991ffb2"), cat: "Cocktails", label: "Espresso Martini" },
];

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = cat === "All" ? photos : photos.filter((p) => p.cat === cat);

  return (
    <div>
      <section className="relative h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img("photo-1572116469696-31de0f17cc34", 2000)})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="relative z-10 pb-12 px-6 mx-auto max-w-7xl w-full">
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-gold">GALLERY</h1>
          <p className="font-body italic text-muted-foreground-x mt-2">A night worth remembering.</p>
        </div>
      </section>

      <div className="sticky top-20 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-subtle">
        <div className="mx-auto max-w-7xl px-4 flex gap-3 py-4 overflow-x-auto">
          {(["All", "Cocktails", "Food", "Atmosphere", "Events"] as Cat[]).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="font-body uppercase text-xs tracking-[0.25em] px-3 py-2 transition-colors"
              style={{ color: cat === c ? "var(--accent-gold)" : "var(--text-primary)" }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative break-inside-avoid group overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img src={p.src} alt={p.label} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="font-body uppercase text-xs tracking-[0.2em] text-gold">{p.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a]/96 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }} className="absolute top-6 right-6 text-gold">
              <X className="w-7 h-7" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((n) => (n === null ? 0 : (n - 1 + filtered.length) % filtered.length)); }} className="absolute left-6 text-gold">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].label} className="max-h-[85vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
            <button onClick={(e) => { e.stopPropagation(); setLightbox((n) => (n === null ? 0 : (n + 1) % filtered.length)); }} className="absolute right-6 text-gold">
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}