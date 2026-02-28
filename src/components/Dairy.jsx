import { useReveal } from "../hooks";
import freshMilkImg from "../assets/fresh_milk.png";
import { DAIRY } from "../data/content";

export default function Dairy() {
  const [ref, vis] = useReveal();

  return (
    <section id="dairy" style={{ padding: "120px 32px", background: "var(--linen)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center", marginBottom: 72 }}>
          <div>
            <span className="eyebrow">Pure Dairy</span>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.4rem)", letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16, color: "var(--ink)", lineHeight: 1.05 }}>
              Beyond<br /><em style={{ fontStyle: "italic", color: "var(--ocean)" }}>Ice Cream</em>
            </h2>
            <div className="rule" style={{ marginBottom: 20 }} />
            <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.85, color: "var(--muted)", marginBottom: 32 }}>
              From probiotic-rich dahi and refreshing lassi to aromatic ghee and festive shrikhand — Shuddham's full range is made from farm-fresh, pure milk.
            </p>
            <a href="#contact" className="btn btn-ocean">Become a Partner →</a>
          </div>
          <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative" }}>
             <img src={freshMilkImg} alt="Fresh Farm Milk" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }}>
          {DAIRY.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={d.id} className={`dc sr ${vis ? "in" : ""}`} style={{ transitionDelay: `${i * 70}ms` }}>
                <div style={{ width: 56, height: 56, borderRadius: "var(--r-md)", background: d.accent, display: "flex", alignItems: "center", justifyContent: "center", color: d.fg, marginBottom: 20 }}>
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.1rem", color: "var(--ink)", marginBottom: 8 }}>{d.name}</h3>
                <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.88rem", lineHeight: 1.8, color: "var(--muted)" }}>{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
