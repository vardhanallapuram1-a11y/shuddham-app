import { useReveal } from "../hooks";
import { WHY } from "../data/content";

export default function WhyUs() {
  const [ref, vis] = useReveal();

  return (
    <section id="why" style={{
      padding: "clamp(60px, 10vw, 120px) 24px",
      background: "var(--ice-brown)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ position: "absolute", top: "10%", right: "-10%", width: "50vmax", height: "50vmax", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,133,162,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{ marginBottom: 64 }} className={`reveal ${vis ? 'reveal-active' : ''}`}>
          <span style={{
            fontFamily: "var(--sans)",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ice-peach)",
            display: "block",
            marginBottom: 16
          }}>Why Choose Shuddham</span>
          <h2 className="reveal-delay-1" style={{
            fontFamily: "var(--serif)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "var(--white)",
            lineHeight: 1.1
          }}>
            Purity in<br /><span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ice-peach)" }}>Every Promise</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {WHY.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className={`wc reveal reveal-delay-${(i % 3) + 1} ${vis ? "reveal-active" : ""}`} style={{
                textAlign: "left",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "24px",
                padding: "32px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{ display: "block", marginBottom: 20, color: "var(--ice-pink)" }}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.25rem", color: "var(--white)", marginBottom: 12 }}>{p.t}</h3>
                <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{p.b}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
