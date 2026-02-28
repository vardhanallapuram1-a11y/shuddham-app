import { useReveal } from "../hooks";
import { WHY } from "../data/content";

export default function WhyUs() {
  const [ref, vis] = useReveal();

  return (
    <section id="why" style={{ padding: "120px 32px", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: "40vmax", height: "40vmax", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,99,178,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <div style={{ marginBottom: 64 }}>
          <span className="eyebrow wh" style={{ display: "block", marginBottom: 16 }}>Why Choose Shuddham</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.03em", color: "var(--white)", lineHeight: 1 }}>
            Purity in<br /><em style={{ fontStyle: "italic", color: "var(--sky)" }}>Every Promise</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 2 }}>
          {WHY.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className={`wc sr ${vis ? "in" : ""}`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div style={{ display: "block", marginBottom: 20, color: "var(--sky)" }}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--white)", marginBottom: 12, letterSpacing: "0.02em" }}>{p.t}</h3>
                <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{p.b}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
