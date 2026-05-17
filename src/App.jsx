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
    {
      key: "horns",
      name: "Horns",
      x: 50, y: 9,
      origin: "Pre-Christian gods like Pan, Cernunnos, and various Mesopotamian deities.",
      why: "Horns originally symbolized divine power, fertility, and strength. As Christianity discredited older gods, horned deities were recast as demonic. Medieval artists then standardized horns as visual shorthand for evil.",
      type: "Cultural / Artistic",
      biblical: false,
    },
    {
      key: "wings",
      name: "Wings",
      x: 15, y: 30,
      origin: "The 'fallen angel' tradition — angels have wings, so a fallen one does too.",
      why: "Once Satan was identified with a fallen angel (Lucifer), artists kept the wings but made them dark, leathery, and bat-like to mark the corruption. The contrast with white feathered angel wings is a purely artistic invention.",
      type: "Theological / Artistic",
      biblical: false,
    },
    {
      key: "skin",
      name: "Red Skin",
      x: 50, y: 30,
      origin: "Medieval art, reinforced by mystery plays and later pop culture.",
      why: "Red was the color of fire, blood, sin, and Hell in the medieval imagination. Mystery plays dressed actors playing devils in red, and that stage convention bled into art and eventually into cartoons. The Bible never describes Satan's skin color.",
      type: "Artistic / Cultural",
      biblical: false,
    },
    {
      key: "claws",
      name: "Claws",
      x: 27, y: 61,
      origin: "Medieval bestiaries blending dragons, beasts of prey, and birds of carrion.",
      why: "Medieval artists drew on the scariest features of nature when designing the devil. Sharp claws appear on demons in church frescoes, manuscript illuminations, and Last Judgment scenes to signal that the figure is a predator on human souls — a visual borrowed from monsters, not scripture.",
      type: "Artistic",
      biblical: false,
    },
    {
      key: "tail",
      name: "Tail",
      x: 85, y: 82,
      origin: "Medieval bestiaries and monster art.",
      why: "Medieval artists drew on dragons, serpents, and beasts when designing demons, and a tail was a standard feature of monstrous creatures. The forked tip became a signature flourish in later illustrations. There is no biblical mention of Satan having a tail.",
      type: "Artistic",
      biblical: false,
    },
    {
      key: "hooves",
      name: "Goat Legs & Hooves",
      x: 52, y: 94,
      origin: "The Greek god Pan and other goat-deities.",
      why: "Pan was a horned, hooved, half-goat god of wild places and lust. When the Church demonized pagan gods, Pan's body was recycled as Satan's. Goats also became symbolically linked to sin through Matthew 25's image of separating sheep from goats.",
      type: "Pagan / Cultural",
      biblical: false,
    },
  ];

  const sources = [
    {
      mla: "Raiswell, Richard, Michelle D. Brock, and David R. Winter, editors. The Routledge History of the Devil in the Western Tradition. Routledge, 2025.",
      url: "https://www.routledge.com/The-Routledge-History-of-the-Devil-in-the-Western-Tradition/Raiswell-Brock-Winter/p/book/9780367561420",
      annotation: "A recent interdisciplinary volume covering 2,000 years of the devil's evolution across history, religion, art, and media studies. I use it for the broad arc of my project — especially how medieval imagery connects to contemporary pop culture.",
    },
    {
      mla: "Simon, Ed. Pandemonium: A Visual History of Demonology. Cernunnos / Abrams, 2022.",
      url: "https://www.abramsbooks.com/product/pandemonium_9782374953243/",
      annotation: "Pairs scholarly analysis with hundreds of historical images of demons and the devil. Essential for a visually-focused project; I draw on it for the medieval and Renaissance sections, where Simon shows how artists assembled the devil's look from older mythology.",
    },
    {
      mla: "Paparoni, Demetrio. The Art of the Devil: An Illustrated History. Cernunnos / Abrams, 2019.",
      url: "https://www.abramsbooks.com/product/art-of-the-devil_9782374951171/",
      annotation: "The most comprehensive illustrated history of the devil in Western and Eastern art. I use it for the feature breakdown section, since Paparoni traces specific iconographic elements (horns, goat-form, snake) back to their visual sources one by one.",
    },
    {
      mla: "Laycock, Joseph P. Speak of the Devil: How The Satanic Temple Is Changing the Way We Talk about Religion. Oxford University Press, 2020.",
      url: "https://global.oup.com/academic/product/speak-of-the-devil-9780190948498",
      annotation: "Examines how Satan has been reinterpreted in modern American culture, especially through The Satanic Temple. Supports the pop culture section of my project, where I argue the devil's image is still being reworked today.",
    },
    {
      mla: "Almond, Philip C. The Devil: A New Biography. Cornell University Press, 2014.",
      url: "https://www.cornellpress.cornell.edu/book/9780801479724/the-devil/",
      annotation: "Traces how the figure of Satan was constructed and re-constructed across two thousand years of Christian thought. Central to my project because it argues directly that theology — not scripture alone — built up the devil we recognize today.",
    },
    {
      mla: "Oldridge, Darren. The Devil: A Very Short Introduction. Oxford University Press, 2012.",
      url: "https://global.oup.com/academic/product/the-devil-a-very-short-introduction-9780199580996",
      annotation: "A concise but rigorous overview of the devil's evolution, with strong attention to medieval and early modern visual culture. I use it for the sections on medieval art and the Renaissance.",
    },
    {
      mla: "Pagels, Elaine. The Origin of Satan: How Christians Demonized Jews, Pagans, and Heretics. Vintage Books, 1996.",
      url: "https://www.penguinrandomhouse.com/books/166497/the-origin-of-satan-by-elaine-pagels/",
      annotation: "Pagels traces Satan from a minor obstructive figure in the Hebrew Bible to the Prince of Darkness in the New Testament. I rely on it for my Biblical Origins and Early Christianity sections, where she shows how Satan became a tool for demonizing outsiders.",
    },
    {
      mla: "Faxneld, Per. Satanic Feminism: Lucifer as the Liberator of Woman in Nineteenth-Century Culture. Oxford University Press, 2017.",
      url: "https://global.oup.com/academic/product/satanic-feminism-9780190664473",
      annotation: "Argues that 19th-century artists and suffragists reimagined Satan as a symbol of liberation and self-determination, especially for women. Supports my modern pop culture section by showing the devil's image has been rewritten as often as it has been inherited.",
    },
  ];

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
            ✦ A Final Project in Religious & Visual History ✦
          </div>
          <h1 className="reveal display-font text-5xl sm:text-7xl font-bold leading-[1.05] text-stone-100 mb-6" style={{ animationDelay: "0.1s" }}>
            How Did Satan
            <br />
            <span className="italic font-medium gold-text">Get His Look?</span>
          </h1>
          <p className="reveal text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed italic" style={{ animationDelay: "0.25s" }}>
            Tracing horns, red skin, goat features, and the modern devil image — not from a single book, but from centuries of fear, art, and folklore.
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
              tag="◇ Biblical Satan"
              title="The Adversary"
              rows={[
                ["Role", "Tempter, accuser, adversary in God's court"],
                ["Body", "No clear physical description given"],
                ["Domain", "Operates in the world; never said to rule Hell"],
                ["Symbols", "Serpent and dragon — but as metaphor"],
              ]}
            />
            <ComparisonCard
              accent="red"
              tag="◆ Modern Satan"
              title="The Devil-Mascot"
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
            "The Satan we recognize today is{" "}
            <span className="gold-text not-italic font-medium">less a single biblical figure</span>{" "}
            and more a visual construction shaped by centuries of art, theology, fear, folklore, and popular culture."
          </blockquote>
          <div className="mt-12 mono-font text-[10px] tracking-[0.4em] uppercase text-stone-600">
            — End of Project —
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
                ◇ Exhibit Item · Feature Study
              </div>
              <h3 className="display-font text-3xl text-stone-100">
                {activeFeatureData.name}
              </h3>
            </div>

            <div className="px-8 py-6 space-y-5">
              <div>
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-amber-500/70 mb-2">
                  Where it came from
                </div>
                <p className="text-stone-300 leading-relaxed">
                  {activeFeatureData.origin}
                </p>
              </div>
              <div>
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-amber-500/70 mb-2">
                  Why it stuck to Satan
                </div>
                <p className="text-stone-300 leading-relaxed">
                  {activeFeatureData.why}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase px-3 py-1 border border-stone-700 text-stone-300">
                  {activeFeatureData.type}
                </span>
                <span className={`mono-font text-[10px] tracking-[0.25em] uppercase px-3 py-1 border ${
                  activeFeatureData.biblical
                    ? "border-amber-700 text-amber-300"
                    : "border-red-900 text-red-300"
                }`}>
                  {activeFeatureData.biblical ? "✓ Biblical" : "✗ Not biblical"}
                </span>
              </div>
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

function ComparisonCard({ accent, tag, title, rows }) {
  const accentClass = accent === "red"
    ? "border-red-900/60 from-red-950/40"
    : "border-stone-800 from-stone-950";
  const tagClass = accent === "red" ? "text-red-400" : "text-amber-500/70";
  return (
    <div className={`border ${accentClass} bg-gradient-to-b to-stone-950 p-7`}>
      <div className={`mono-font text-[10px] tracking-[0.3em] uppercase mb-2 ${tagClass}`}>
        {tag}
      </div>
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
