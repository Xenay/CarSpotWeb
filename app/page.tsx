import MediaSlot from "@/components/MediaSlot";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const FEATURES = [
  {
    title: "Spot Real Cars",
    description:
      "Point your camera at any car on the street. Our AI instantly identifies the make, model, and year — turning every drive into a treasure hunt.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accentColor: "#22D3EE",
  },
  {
    title: "Collect Battle Cards",
    description:
      "Every captured car becomes a unique trading card with real-world stats — horsepower, handling, weight, and more. Build the ultimate deck.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accentColor: "#D61F19",
  },
  {
    title: "Dominate Battles",
    description:
      "Challenge real drivers in strategic turn-based duels. Deploy modifier cards, exploit synergies, and outmanoeuvre your opponent to climb the ranks.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accentColor: "#22D3EE",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Spot",
    description: "Walk up to any real car and open CarSnap. Our YOLO-powered camera detects the vehicle in real time.",
    mediaLabel: "Capture screen",
  },
  {
    number: "02",
    title: "Collect",
    description: "AI identifies the make and model, generates a unique card with authentic stats, and adds it to your garage.",
    mediaLabel: "Card reveal",
  },
  {
    number: "03",
    title: "Battle",
    description: "Build a deck from your collection, join the matchmaking queue, and fight for rewards and ranking points.",
    mediaLabel: "Battle board",
  },
];

const TICKER_ITEMS = [
  "1 000+ Car Models",
  "Real-time AR Detection",
  "Season 1 · Live",
  "Strategic Card Battles",
  "Daily Challenges",
  "Synergy System",
  "Multi-currency Economy",
  "Ranked Seasons",
];

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-32 pb-20 text-center"
        style={{
          background: `
            radial-gradient(ellipse at 15% 55%, rgba(214,31,25,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(34,211,238,0.12) 0%, transparent 55%),
            linear-gradient(160deg, #020409 0%, #070B14 55%, #0B1321 100%)
          `,
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Season badge */}
        <div
          className="relative mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono uppercase tracking-widest"
          style={{ borderColor: "rgba(34,211,238,0.3)", background: "rgba(34,211,238,0.07)", color: "#22D3EE" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cs-cyan animate-pulse" />
          Season 1 · Live Now
        </div>

        {/* Headline */}
        <h1 className="relative max-w-3xl text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-cs-text">
          Spot. Collect.{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #D61F19, #FF5550)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dominate.
          </span>
        </h1>

        <p className="relative mt-6 max-w-xl text-lg text-cs-muted leading-relaxed">
          The AR car spotting game where real cars become collectible battle cards.
          Capture, build your deck, and fight for glory on the grid.
        </p>

        {/* CTAs */}
        <div className="relative mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#download"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-white text-sm transition-all hover:brightness-110 active:scale-95"
            style={{ background: "linear-gradient(135deg, #D61F19, #991410)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="#download"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-cs-text text-sm border border-cs-border transition-all hover:border-cs-cyan/50 hover:bg-cs-surface active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.18 23.76c.3.17.64.2.96.08l12.45-6.99-2.78-2.78-10.63 9.69zM.35 1.19C.13 1.5 0 1.9 0 2.37v19.26c0 .47.13.87.36 1.18l.06.06 10.79-10.79v-.25L.41 1.13l-.06.06zM20.49 10.39l-2.81-1.58-3.13 3.13 3.13 3.13 2.83-1.59c.81-.45.81-1.19-.02-1.65v-.44zM3.18.24L15.63 7.23 12.85 10 2.22.31C2.52.04 2.88-.07 3.18.24z"/>
            </svg>
            Google Play
          </a>
        </div>

        {/* Hero phone mockups */}
        <div className="relative mt-16 w-full max-w-2xl grid grid-cols-3 gap-4 sm:gap-6">
          <MediaSlot label="Home screen"   aspect="portrait" />
          <MediaSlot label="Card capture"  aspect="portrait" />
          <MediaSlot label="Battle board"  aspect="portrait" />
        </div>
      </section>

      {/* ════════════════════════════
          TICKER
      ════════════════════════════ */}
      <div
        className="relative overflow-hidden py-3 border-y border-cs-border/40"
        style={{ background: "rgba(11,18,32,0.8)" }}
      >
        <div className="ticker-track flex whitespace-nowrap" style={{ width: "max-content" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-xs font-mono uppercase tracking-[0.18em]"
              style={{ color: i % 2 === 0 ? "#22D3EE" : "#8BA4BF" }}
            >
              {item}
              <span className="ml-8 opacity-30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════
          FEATURES
      ════════════════════════════ */}
      <section id="features" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">Why CarSnap</p>
            <h2 className="text-4xl font-black tracking-tight">The game that hits different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative p-7 rounded-[14px] border border-cs-border/60 hover:border-cs-border transition-all"
                style={{ background: "rgba(11,18,32,0.8)" }}
              >
                {/* Glow dot */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity rounded-[14px]"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${f.accentColor}22 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{ background: `${f.accentColor}18`, color: f.accentColor }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-cs-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          HOW IT WORKS
      ════════════════════════════ */}
      <section
        id="how-it-works"
        className="py-24 px-5"
        style={{
          background: `
            radial-gradient(ellipse at 80% 50%, rgba(34,211,238,0.06) 0%, transparent 60%),
            rgba(11,18,32,0.5)
          `,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">How It Works</p>
            <h2 className="text-4xl font-black tracking-tight">Three steps to the podium</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-col gap-5">
                {/* Step header */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-4xl font-black font-mono leading-none"
                    style={{
                      background: "linear-gradient(135deg, #D61F19, #FF5550)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </span>
                  {/* Connector line (not after last item) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-linear-to-r from-cs-border to-transparent" />
                  )}
                </div>

                <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                <p className="text-sm text-cs-muted leading-relaxed">{step.description}</p>

                {/* Screenshot placeholder */}
                <div className="mt-2">
                  <MediaSlot label={step.mediaLabel} aspect="portrait" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          GALLERY
      ════════════════════════════ */}
      <section id="gallery" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">Gallery</p>
            <h2 className="text-4xl font-black tracking-tight">See it in action</h2>
            <p className="mt-3 text-cs-muted text-sm max-w-md mx-auto">
              Drop in screenshots and videos to showcase your game here.
            </p>
          </div>

          {/* Portrait screenshots row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <MediaSlot label="Garage view"      aspect="portrait" />
            <MediaSlot label="Deck builder"     aspect="portrait" />
            <MediaSlot label="Match rewards"    aspect="portrait" />
            <MediaSlot label="Card collection"  aspect="portrait" />
          </div>

          {/* Landscape video + wide screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MediaSlot label="Gameplay video"   aspect="landscape" type="video" />
            <MediaSlot label="Battle highlight" aspect="landscape" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          DOWNLOAD CTA
      ════════════════════════════ */}
      <section
        id="download"
        className="py-28 px-5 text-center"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(214,31,25,0.20) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 0%,   rgba(34,211,238,0.08) 0%, transparent 50%),
            linear-gradient(180deg, #070A12 0%, #0B1321 100%)
          `,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-4">Download</p>
          <h2 className="text-5xl font-black tracking-tight leading-tight">
            Ready to hit<br />the streets?
          </h2>
          <p className="mt-5 text-cs-muted leading-relaxed">
            Join drivers already spotting iconic cars, building powerful decks, and climbing the seasonal leaderboards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: "linear-gradient(135deg, #D61F19, #991410)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-cs-text border border-cs-border transition-all hover:border-cs-cyan/50 hover:bg-cs-surface active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.3.17.64.2.96.08l12.45-6.99-2.78-2.78-10.63 9.69zM.35 1.19C.13 1.5 0 1.9 0 2.37v19.26c0 .47.13.87.36 1.18l.06.06 10.79-10.79v-.25L.41 1.13l-.06.06zM20.49 10.39l-2.81-1.58-3.13 3.13 3.13 3.13 2.83-1.59c.81-.45.81-1.19-.02-1.65v-.44zM3.18.24L15.63 7.23 12.85 10 2.22.31C2.52.04 2.88-.07 3.18.24z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>

          <p className="mt-8 text-xs font-mono text-cs-muted/40 uppercase tracking-widest">
            Season 1 · Live Now
          </p>
        </div>
      </section>

    </div>
  );
}
