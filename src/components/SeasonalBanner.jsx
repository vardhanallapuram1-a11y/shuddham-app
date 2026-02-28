import { useReveal } from "../hooks";
import { FLAVORS } from "../data/content";

export default function SeasonalBanner() {
  const [ref, vis] = useReveal();
  const summer = FLAVORS.filter(f => f.season === "Summer").slice(0, 3);

  return (
    <section style={{ background: "var(--ink)", padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(57,169,255,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center", position: "relative" }}>
        
        <div className={`sr from-left ${vis ? "in" : ""}`}>
          <span className="eyebrow wh" style={{ marginBottom: 16, display: "block" }}>Summer Collection</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.03em", color: "var(--white)", lineHeight: 1.05, marginBottom: 20 }}>
            Fresh Fruit<br /><em style={{ fontStyle: "italic", color: "var(--tiger)" }}>Flavors Are Back</em>
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: 36 }}>
            Seasonal specials made from fresh summer fruits. Alphonso Mango, Tender Coconut, Kala Jamun — only while they last.
          </p>
          <a href="#flavors" className="btn btn-tiger">Shop Seasonal →</a>
        </div>

        <div className={`sr from-right ${vis ? "in" : ""}`} style={{ transitionDelay: "120ms", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {summer.map((f, i) => (
            <div key={f.id} style={{ borderRadius: "var(--r-xl)", overflow: "hidden", background: f.bg, border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 60}ms`, aspectRatio: "2/3" }}>
               {f.image && (
                 <img 
                  src={f.image} 
                  alt={f.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
                 />
               )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}