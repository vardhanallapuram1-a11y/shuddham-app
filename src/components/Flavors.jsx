import { useState, useRef, useEffect } from "react";
import { useReveal, useDragScroll } from "../hooks";
import { FLAVORS, CATS } from "../data/content";

function FlavorModal({ flavor, onClose }) {
  useEffect(() => {
    const fn = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="modal-bg" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div style={{ height: 260, background: flavor.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {flavor.image ? (
            <img src={flavor.image} alt={flavor.name} style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "multiply", opacity: 0.8 }} />
          ) : (
            <span style={{ fontSize: "7rem" }}>{flavor.emoji}</span>
          )}
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", fontSize: "1rem", color: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }} aria-label="Close">✕</button>
          <div style={{ position: "absolute", bottom: 16, left: 20, display: "flex", gap: 6, zIndex: 10 }}>
            {flavor.tags.map(t => <span key={t} className="tag tag-dark">{t}</span>)}
          </div>
        </div>
        <div style={{ padding: "28px 32px 36px" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "2rem", color: "var(--ink)", marginBottom: 12, letterSpacing: "-0.02em" }}>{flavor.name}</h2>
          <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.85, color: "var(--muted)", marginBottom: 24 }}>{flavor.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[["Category", flavor.cat], ["Season", flavor.season]].map(([l, v]) => (
              <div key={l} style={{ background: "var(--linen)", borderRadius: "var(--r-md)", padding: "14px 16px" }}>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>{l}</div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--ink)" }}>{v}</div>
              </div>
            ))}
          </div>
          {flavor.pairings?.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Pairs With</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {flavor.pairings.map(p => (
                  <span key={p} style={{ background: "var(--linen)", border: "1.5px solid var(--border)", color: "var(--ink)", fontFamily: "var(--sans)", fontSize: "0.85rem", fontWeight: 600, padding: "5px 14px", borderRadius: "var(--r-pill)" }}>{p}</span>
                ))}
              </div>
            </div>
          )}
          <button className="btn btn-ink" onClick={onClose} style={{ width: "100%", justifyContent: "center" }}>Back to Flavors</button>
        </div>
      </div>
    </div>
  );
}

export default function FlavorSystem() {
  const [cat, setCat] = useState("All");
  const [modal, setModal] = useState(null);
  const [ref, vis] = useReveal();
  const railRef = useRef(null);
  const drag = useDragScroll(railRef);
  const filtered = FLAVORS.filter(f => cat === "All" || f.cat === cat);

  return (
    <section id="flavors" style={{ padding: "120px 0 0", background: "var(--linen)", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div className={`sr ${vis ? "in" : ""}`} style={{ marginBottom: 12 }}>
          <span className="eyebrow">Handcrafted Collection</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 16 }}>
          <h2 className={`sr ${vis ? "in" : ""}`} style={{ transitionDelay: "80ms", fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1 }}>
            Discover Every<br /><em style={{ fontStyle: "italic", color: "var(--tiger)" }}>Flavor</em>
          </h2>
          <div className={`sr ${vis ? "in" : ""}`} style={{ transitionDelay: "160ms", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATS.map(c => (
              <button key={c} className={`cpill ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className={`sr ${vis ? "in" : ""}`} style={{ transitionDelay: "240ms" }}>
          <div className="rule" style={{ marginBottom: 48 }} />
        </div>
      </div>

      <div style={{ paddingLeft: 32, paddingRight: 32, maxWidth: 1240, margin: "0 auto" }}>
        <div ref={railRef} className="fl-rail" {...drag}>
          {filtered.map((f, i) => (
            <div
              key={f.id}
              className="fl-card"
              onClick={() => setModal(f)}
              tabIndex={0}
              role="button"
              onKeyDown={e => e.key === "Enter" && setModal(f)}
              aria-label={`View ${f.name} details`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="img-zone" style={{ background: f.bg }}>
                {f.image ? (
                  <img src={f.image} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "multiply", opacity: 0.9 }} />
                ) : (
                  <span className="emoji-giant" style={{ fontSize: "6rem", transition: "transform var(--mid) var(--ease-back)" }}>{f.emoji}</span>
                )}
                <div className="badge">
                  {f.tags.map(t => <span key={t} className={`tag ${t === "Bestseller" ? "tag-tiger" : t === "New" ? "tag-ocean" : "tag-dark"}`}>{t}</span>)}
                </div>
                <div style={{ position: "absolute", bottom: 14, right: 14 }}>
                  <span style={{ fontFamily: "var(--sans)", fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: f.fg, opacity: 0.55 }}>{f.season}</span>
                </div>
              </div>
              <div className="body">
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.2rem", color: "var(--ink)", marginBottom: 6, letterSpacing: "-0.01em" }}>{f.name}</h3>
                <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.85rem", lineHeight: 1.7, color: "var(--muted)", marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{f.desc}</p>
                <span style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em", color: "var(--ocean)", display: "flex", alignItems: "center", gap: 4 }}>
                  View Details <span style={{ fontSize: "0.9em" }}>→</span>
                </span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ fontFamily: "var(--sans)", color: "var(--muted)", padding: "40px 0" }}>No flavors in this category.</div>
          )}
        </div>
        <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", fontWeight: 500, color: "var(--muted)", letterSpacing: "0.08em", textAlign: "center", marginTop: 4, marginBottom: 48, opacity: 0.7 }}>Drag to explore →</p>
      </div>

      {modal && <FlavorModal flavor={modal} onClose={() => setModal(null)} />}
    </section>
  );
}