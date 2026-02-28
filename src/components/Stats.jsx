import { useReveal, useCounter } from "../hooks";
import { STATS } from "../data/content";

function StatNum({ target, suffix }) {
  const [ref, vis] = useReveal();
  const v = useCounter(target, vis);
  return (
    <span ref={ref} style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--white)", letterSpacing: "-0.03em", lineHeight: 1 }}>
      {vis ? v : 0}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ background: "var(--ocean)", padding: "0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
        {STATS.map((s) => (
          <div key={s.label} className="stat-block">
            <StatNum target={s.val} suffix={s.suf} />
            <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 10 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
