export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "var(--ink)" }}>

      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50vmax", height: "50vmax", borderRadius: "50%", background: "radial-gradient(circle, rgba(10,88,163,0.25) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "60vmax", height: "60vmax", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,121,19,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", padding: "120px 32px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
        <h1 className="h2" style={{
          fontFamily: "var(--serif)", fontWeight: 900,
          fontSize: "clamp(3.5rem, 9vw, 8rem)",
          lineHeight: 1.05, letterSpacing: "-0.02em",
          color: "var(--white)", marginBottom: "1.5rem",
          textShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}>
          Every Scoop,<br />
          <em style={{ fontStyle: "italic", color: "var(--tiger)" }}>Pure Joy.</em>
        </h1>

        <p className="h3" style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.6, color: "rgba(255,255,255,0.75)", maxWidth: 600, marginBottom: "3.5rem" }}>
          Ice cream crafted from pure milk, real fruits, and zero compromises. The taste nature intended.
        </p>

        <div className="h4" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#flavors" className="btn btn-tiger" style={{ padding: "18px 44px", fontSize: "0.95rem" }}>Explore Flavors →</a>
          <a href="#story" className="btn btn-ghost btn-ghost-light" style={{ padding: "18px 44px", fontSize: "0.95rem" }}>Our Story</a>
        </div>
      </div>

      <div className="hide-sm" style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, zIndex: 2 }}>
        <span style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
      </div>

    </section>
  );
}