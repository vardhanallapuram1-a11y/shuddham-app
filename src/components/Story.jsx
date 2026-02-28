import { useReveal } from "../hooks";
import { Leaf, Milk, Heart, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Story() {
  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();

  // Consistent with index.css root variables
  const pills = [
    { icon: <Leaf size={24} />, label: "No Artificial Preservatives", color: "var(--tiger)" },
    { icon: <Milk size={24} />, label: "Pure Farm Milk", color: "var(--ocean)" },
    { icon: <Heart size={24} />, label: "Real Extracts", color: "var(--tiger-dk)" },
    { icon: <ShieldCheck size={24} />, label: "Zero Adulteration", color: "var(--ink)" },
  ];

  return (
    <section id="story" style={{ background: "var(--white)", padding: "160px 0 120px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
        
        {/* Header Section */}
        <div className={`sr ${v1 ? "in" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 30 }}>
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Est. 2015 — Ratlam</span>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 900, fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 0.9, color: "var(--ink)", letterSpacing: "-0.04em" }}>
              The Shuddham <br />
              <span style={{ color: "var(--ocean)", fontStyle: "italic", marginLeft: "0.2em" }}>Legacy</span>
            </h2>
          </div>
          <p style={{ maxWidth: 380, fontFamily: "var(--sans)", color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 10 }}>
            Crafting purity from the heart of Madhya Pradesh. What started as a small farm is now a revolution in taste.
          </p>
        </div>

        {/* Bento Grid 2.0 */}
        <div ref={r1} className={`bento sr ${v1 ? "in" : ""}`} style={{ gridTemplateRows: "repeat(2, minmax(280px, auto))" }}>
          
          {/* Main Feature Card */}
          <div className="bento-card bento-wide bento-tall" 
               style={{ background: "var(--ink)", color: "var(--white)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "48px", position: "relative", overflow: "hidden", borderRadius: "var(--r-xl)" }}>
            <div className="shimmer-effect" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.05 }}></div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="rule" style={{ marginBottom: 32 }}></div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: 24, maxWidth: 500, lineHeight: 1.1 }}>
                "We never compromise on <em style={{ color: "var(--sky)", fontStyle: "italic" }}>purity</em>. Every drop is handled with care."
              </h3>
              <p style={{ opacity: 0.7, fontFamily: "var(--sans)", fontSize: "1rem", letterSpacing: "0.05em" }}>— Anil Sisodia, Founder</p>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="bento-card" style={{ background: "var(--tiger)", color: "var(--white)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", borderRadius: "var(--r-xl)", position: "relative", overflow: "hidden" }}>
            <span style={{ fontSize: "5.5rem", fontWeight: 900, fontFamily: "var(--serif)", lineHeight: 1 }}>50+</span>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, fontSize: "0.85rem", marginTop: 12, opacity: 0.9 }}>Handcrafted Flavors</p>
          </div>

          {/* Secondary Info Card */}
          <div className="bento-card" style={{ background: "var(--ocean-lt)", color: "var(--ocean)", border: "none", padding: "40px", borderRadius: "var(--r-xl)", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
            <ArrowUpRight size={32} style={{ alignSelf: "flex-end", opacity: 0.8 }} />
            <div>
              <h4 style={{ fontFamily: "var(--sans)", fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Our Process</h4>
              <p style={{ fontSize: "0.95rem", marginTop: 12, color: "var(--ink)", opacity: 0.8, lineHeight: 1.5 }}>From Mangrol to your table, ensuring 100% hygienic & fresh delivery.</p>
            </div>
          </div>
        </div>

        {/* Promise Grid */}
        <div ref={r2} style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {pills.map((p, i) => (
            <div key={i} className={`sr ${v2 ? "in" : ""}`} style={{ transitionDelay: `${i * 100}ms`, height: "100%" }}>
              <div className="promise-card">
                <div className="icon-box" style={{ color: p.color, background: `color-mix(in srgb, ${p.color} 12%, transparent)` }}>
                  {p.icon}
                </div>
                <h5 style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "1.1rem", color: "var(--ink)", lineHeight: 1.4 }}>{p.label}</h5>
                {/* Override the default tiger hover line to match the specific icon color */}
                <div className="hover-line" style={{ background: p.color }}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}