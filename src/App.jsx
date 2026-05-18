import React, { useState, useEffect } from "react";

// ============================================================================
// FINAL PROJECT: How Did Satan Get His Look?
// Simpler, museum-style version with an interactive Satan figure.
// Click any glowing dot on the figure to open an info popup.
// Single file — paste into a React + Tailwind project.
// ============================================================================

export default function SatanProject() {
  const [activeFeature, setActiveFeature] = useState(null);

  // Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = activeFeature ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeFeature]);

  // Close popup with Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActiveFeature(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ----------------------------------------------------------------
  // DATA
  // ----------------------------------------------------------------
  // Hotspots on the image — positions as % of image width/height
  // for responsive scaling.
  const features = [
    { key: "horns",  name: "Horns",              x: 50, y: 9,  video: "/horns.mp4"  },
    { key: "wings",  name: "Wings",              x: 15, y: 30, video: "/wings.mp4"  },
    { key: "skin",   name: "Red Skin",           x: 50, y: 30, video: "/skin.mp4"   },
    { key: "claws",  name: "Claws",              x: 27, y: 61, video: "/claws.mp4"  },
    { key: "tail",   name: "Tail",               x: 85, y: 82, video: "/tail.mp4"   },
    { key: "hooves", name: "Goat Legs & Hooves", x: 52, y: 94, video: "/hooves.mp4" },
  ];

  const sources = [
    {
      mla: "Raiswell, Richard, David R. Winter, and Brett Edward Whalen, editors. The Routledge History of the Devil in the Western Tradition. Routledge, 2021.",
      url: "https://www.routledge.com/The-Routledge-History-of-the-Devil-in-the-Western-Tradition/Raiswell-Brock-Winter/p/book/9780367561420",
      annotation: "Covering Satan's evolution across history, theology, and culture.",
    },
    {
      mla: "\"The Horn Motif in Mythology and Folklore.\" JSTOR.",
      url: "https://www.jstor.org/stable/24410385",
      annotation: "Used for horns, goat legs & hooves, pagan symbolism, and Pan comparisons.",
    },
    {
      mla: "\"The Iconography of the Utrecht Psalter and the Old English Descent into Hell.\" JSTOR.",
      url: "https://www.jstor.org/stable/44512342",
      annotation: "Used for wings, claws, medieval demon imagery, and Hell iconography.",
    },
    {
      mla: "\"The Baltic Psaltery and Musical Instruments in Medieval Iconography.\" JSTOR.",
      url: "https://www.jstor.org/stable/43211188",
      annotation: "Used for goat legs & hooves, medieval Satan imagery, and goat symbolism.",
    },
  ];

  const biblicalReferences = ["Genesis 3", "Isaiah 14", "Revelation 12", "Matthew 25"];

  const activeFeatureData = features.find((f) => f.key === activeFeature);

  // ----------------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------------
  return (
    <div
      className="min-h-screen w-full text-stone-200 selection:bg-red-900 selection:text-stone-100"
      style={{
        backgroundColor: "#0d0a0a",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
        @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.9; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .reveal { animation: fadeUp 0.7s ease-out both; }
        .fade-in { animation: fadeIn 0.4s ease-out both; }
        .display-font { font-family: 'Cinzel', serif; letter-spacing: 0.02em; }
        .mono-font { font-family: 'JetBrains Mono', monospace; }
        .gold-text {
          background: linear-gradient(180deg, #e7c97a 0%, #b48a3a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hotspot-ring {
          transform-origin: center;
          animation: pulse-ring 2s ease-out infinite;
        }
        .nav-link::after {
          content:""; display:block; height:1px; width:0; background:#b48a3a;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width:100%; }
      `}</style>

      {/* ================== NAV ================== */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d0a0a]/90 backdrop-blur-md border-b border-stone-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="display-font text-xs sm:text-sm tracking-[0.3em] gold-text font-semibold">
            SATAN & THE SUPERNATURAL · FINAL PROJECT
          </div>
          <div className="hidden md:flex gap-7 text-[11px] tracking-[0.25em] uppercase mono-font text-stone-400">
            {[
              ["Figure", "figure"],
              ["Comparison", "comparison"],
              ["Sources", "sources"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link hover:text-amber-400 transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ================== HERO ================== */}
      <header className="relative min-h-[80vh] flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, #2a0d0d 0%, #1a0808 40%, #0d0a0a 80%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="reveal mono-font text-[10px] sm:text-xs tracking-[0.5em] uppercase text-amber-500/70 mb-6">
            ✦ Religion and Medieval Art History ✦
          </div>
          <h1 className="reveal display-font text-5xl sm:text-7xl font-bold leading-[1.05] text-stone-100 mb-6" style={{ animationDelay: "0.1s" }}>
            How Did Satan
            <br />
            <span className="italic font-medium gold-text">Get His Look?</span>
          </h1>
          <p className="reveal text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed italic" style={{ animationDelay: "0.25s" }}>
            A visual guide into the modern depiction of Satan from the horns, red skin, and goat features.
          </p>
          <button
            onClick={() => scrollTo("figure")}
            className="reveal mt-12 mono-font text-[11px] tracking-[0.4em] uppercase text-amber-400 border border-amber-700/50 hover:border-amber-500 hover:bg-amber-950/30 px-8 py-3 transition-all"
            style={{ animationDelay: "0.4s" }}
          >
            Explore the Figure ↓
          </button>
        </div>
      </header>

      {/* ================== INTERACTIVE FIGURE ================== */}
      <section id="figure" className="relative py-20 px-6 bg-[#0d0a0a] border-t border-stone-900">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>I. The Specimen</SectionLabel>
          <h2 className="display-font text-3xl sm:text-5xl text-stone-100 mb-3">
            The <span className="italic gold-text">Anatomy</span> of Satan
          </h2>
          <p className="text-stone-400 max-w-2xl mb-12 italic text-lg">
            Click any glowing point on the figure to learn where that feature came from.
          </p>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Image with hotspot overlay */}
            <div className="lg:col-span-3">
              <div className="relative bg-gradient-to-b from-[#1a0d0d] to-[#0d0a0a] border border-stone-800 rounded-sm p-6">
                <SatanFigure
                  features={features}
                  activeFeature={activeFeature}
                  onSelect={setActiveFeature}
                />
                <div className="mt-4 text-center mono-font text-[10px] tracking-[0.3em] uppercase text-stone-500">
                  ◇ Click any glowing point ◇
                </div>
              </div>
            </div>

            {/* Feature list (also clickable) */}
            <div className="lg:col-span-2">
              <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-amber-500/70 mb-4">
                ◇ Identified Features
              </div>
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li key={f.key}>
                    <button
                      onClick={() => setActiveFeature(f.key)}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 border border-stone-800 hover:border-amber-700 hover:bg-amber-950/10 transition-all group"
                    >
                      <span className="mono-font text-[10px] text-stone-500 group-hover:text-amber-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display-font text-stone-200 group-hover:text-amber-300 flex-1">
                        {f.name}
                      </span>
                      <span className="text-stone-600 group-hover:text-amber-400">→</span>
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* ================== COMPARISON ================== */}
      <section id="comparison" className="relative py-20 px-6 border-t border-stone-900">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>II. Side-by-Side</SectionLabel>
          <h2 className="display-font text-3xl sm:text-5xl text-stone-100 mb-10">
            Biblical Satan <span className="text-stone-500">vs.</span>{" "}
            <span className="italic gold-text">Modern Satan</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <ComparisonCard
              accent="amber"
              title="Biblical Satan"
              rows={[
                ["Role", "Tempter, accuser, adversary in God's court"],
                ["Body", "No clear physical description given"],
                ["Domain", "Operates in the world; never said to rule Hell"],
                ["Symbols", "Serpent and dragon, but as metaphor"],
              ]}
            />
            <ComparisonCard
              accent="red"
              title="Modern Satan"
              rows={[
                ["Role", "Ruler of Hell, master of demons, source of evil"],
                ["Body", "Red skin, horns, goat legs, hooves, forked tail"],
                ["Domain", "Fiery underworld, often pictured with flames"],
                ["Symbols", "Pitchfork, bat wings, pentagram, fire"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================== SOURCES ================== */}
      <section id="sources" className="relative py-20 px-6 border-t border-stone-900">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>III. Annotated Bibliography</SectionLabel>
          <h2 className="display-font text-3xl sm:text-5xl text-stone-100 mb-10">
            <span className="italic gold-text">Sources</span> & Notes
          </h2>

          <div className="space-y-6">
            {sources.map((s, i) => (
              <div key={i} className="border-l-2 border-amber-800/50 hover:border-amber-500 transition-colors pl-6 py-1 group">
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                  Source {String(i + 1).padStart(2, "0")}
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display-font text-lg text-stone-100 leading-snug mb-2 block hover:text-amber-300 transition-colors group-hover:underline decoration-amber-700/50 underline-offset-4"
                >
                  {s.mla}
                  <span className="inline-block ml-2 text-amber-500/70 text-sm not-italic" aria-hidden="true">↗</span>
                </a>
                <p className="text-stone-400 leading-relaxed italic mt-2">
                  {s.annotation}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="display-font text-xl sm:text-2xl gold-text mb-5 pb-2 border-b border-amber-900/40">
              Biblical References
            </h3>
            <ul className="space-y-2 pl-6">
              {biblicalReferences.map((ref) => (
                <li key={ref} className="display-font text-lg text-stone-100">
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================== TAKEAWAY ================== */}
      <section className="relative py-28 px-6 border-t border-stone-900">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, #2a0d0d 0%, #0d0a0a 80%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <SectionLabel center>IV. Final Takeaway</SectionLabel>
          <blockquote className="display-font text-2xl sm:text-3xl text-stone-100 leading-snug italic font-light mt-8">
            "The Satan we imagine today is{" "}
            <span className="gold-text not-italic font-medium">shaped less from the biblical depiction</span>{" "}
            and <span className="gold-text not-italic font-medium">more from a collection of visual ideas</span>{" "}
            that evolved from centuries of art, fear, folklore, and pop culture."
          </blockquote>
          <div className="mt-12 mono-font text-[10px] tracking-[0.4em] uppercase text-stone-600">
            — Thank You Megan and Professor Huber! —
          </div>
        </div>
      </section>

      {/* ================== FOOTER ================== */}
      <footer className="border-t border-stone-900 bg-[#0a0808] py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-stone-600 mono-font text-[10px] tracking-[0.3em] uppercase">
          <div>Satan & The Supernatural · Final Project</div>
          <button onClick={() => scrollTo("figure")} className="hover:text-amber-500 transition-colors">
            ↑ Return to top
          </button>
        </div>
      </footer>

      {/* ================== POPUP MODAL ================== */}
      {activeFeatureData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in"
          onClick={() => setActiveFeature(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <div
            className="relative bg-[#13100f] border border-amber-800/60 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(180,30,30,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveFeature(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-900 transition-colors text-xl z-10"
            >
              ✕
            </button>

            <div className="border-b border-stone-800 px-8 py-5 bg-gradient-to-b from-red-950/30 to-transparent">
              <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-amber-500/80 mb-1">
                ◇ Exhibit Item
              </div>
              <h3 className="display-font text-3xl text-stone-100">
                {activeFeatureData.name}
              </h3>
            </div>

            <div className="px-8 py-6">
              <video
                key={activeFeatureData.key}
                src={activeFeatureData.video}
                controls
                autoPlay
                playsInline
                className="w-full h-auto bg-black border border-stone-800"
              />
            </div>

            <div className="border-t border-stone-800 px-8 py-4 flex items-center justify-between bg-stone-950/40">
              <button
                onClick={() => {
                  const idx = features.findIndex((f) => f.key === activeFeature);
                  setActiveFeature(features[(idx - 1 + features.length) % features.length].key);
                }}
                className="mono-font text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-amber-400 transition-colors"
              >
                ← Prev
              </button>
              <span className="mono-font text-[10px] tracking-[0.3em] uppercase text-stone-600">
                {features.findIndex((f) => f.key === activeFeature) + 1} / {features.length}
              </span>
              <button
                onClick={() => {
                  const idx = features.findIndex((f) => f.key === activeFeature);
                  setActiveFeature(features[(idx + 1) % features.length].key);
                }}
                className="mono-font text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-amber-400 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
function SectionLabel({ children, center }) {
  return (
    <div className={`mono-font text-[10px] tracking-[0.4em] uppercase text-amber-500/70 mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-amber-700/60" />
      {children}
      <span className="h-px w-8 bg-amber-700/60" />
    </div>
  );
}

function ComparisonCard({ accent, title, rows }) {
  const accentClass = accent === "red"
    ? "border-red-900/60 from-red-950/40"
    : "border-stone-800 from-stone-950";
  return (
    <div className={`border ${accentClass} bg-gradient-to-b to-stone-950 p-7`}>
      <h3 className="display-font text-2xl text-stone-100 mb-5 italic">{title}</h3>
      <ul className="space-y-3">
        {rows.map(([k, v]) => (
          <li key={k}>
            <div className="mono-font text-[10px] tracking-[0.25em] uppercase text-stone-500 mb-1">
              {k}
            </div>
            <div className="text-stone-200 leading-relaxed">{v}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// SATAN FIGURE — image with overlaid clickable hotspots
// Image is referenced as ./satan.png (place satan.png next to this component)
// ============================================================================
function SatanFigure({ features, activeFeature, onSelect }) {
  return (
    <div className="relative w-full mx-auto" style={{ maxWidth: "480px" }}>
      {/* Image — uses CSS blend to soften the white background into the dark theme */}
      <img
        src="/satan.png"
        alt="Original AI-generated illustration of the modern devil figure, showing horns, red skin, wings, claws, tail, and goat-like hooves."
        className="block w-full h-auto select-none pointer-events-none"
        style={{
          filter: "drop-shadow(0 10px 40px rgba(180,30,30,0.45))",
        }}
        draggable={false}
      />

      {/* Hotspots — positioned in % so they scale with the image */}
      {features.map((f) => {
        const isActive = activeFeature === f.key;
        return (
          <button
            key={f.key}
            onClick={() => onSelect(f.key)}
            aria-label={`Learn more about ${f.name}`}
            className="absolute group"
            style={{
              left: `${f.x}%`,
              top: `${f.y}%`,
              transform: "translate(-50%, -50%)",
              width: "32px",
              height: "32px",
            }}
          >
            {/* pulsing outer ring */}
            <span
              className="absolute inset-0 rounded-full hotspot-ring"
              style={{ background: "rgba(240,200,80,0.3)" }}
            />
            {/* main dot */}
            <span
              className="absolute left-1/2 top-1/2 rounded-full border-2 transition-all"
              style={{
                width: isActive ? "22px" : "18px",
                height: isActive ? "22px" : "18px",
                transform: "translate(-50%, -50%)",
                background: isActive ? "#f0c040" : "#e7c97a",
                borderColor: "#0d0a0a",
                boxShadow: "0 0 12px rgba(240,200,80,0.85)",
              }}
            />
            {/* inner core dot */}
            <span
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: "6px",
                height: "6px",
                background: "#0d0a0a",
                transform: "translate(-50%, -50%)",
              }}
            />
            {/* hover label */}
            <span
              className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mono-font tracking-[0.2em] uppercase"
              style={{
                background: "#0d0a0a",
                border: "1px solid #b48a3a",
                color: "#e7c97a",
                fontSize: "10px",
              }}
            >
              {f.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
