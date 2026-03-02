import { Link } from "react-router-dom";
import DripDivider from "./DripDivider";

export default function Footer() {
  const cols = [
    { title: "Products", links: [{ l: "Ice Creams", h: "/flavors" }, { l: "Dairy Products", h: "/dairy" }, { l: "Seasonal Specials", h: "/flavors" }, { l: "Gift Packs", h: "/partnership" }] },
    { title: "Company", links: [{ l: "Our Story", h: "/our-story" }, { l: "Why Shuddham", h: "/#why" }, { l: "Quality Promise", h: "/#why" }, { l: "Contact", h: "/partnership" }] },
  ];

  return (
    <>
      <DripDivider color="var(--ice-honey)" position="top" height={80} />
      <footer style={{ background: "var(--ice-honey)", padding: "20px 32px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 48, marginBottom: 80 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, background: "var(--ice-peach)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🍦</div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "1.3rem", color: "var(--ice-brown)", letterSpacing: "-0.01em" }}>Shuddham</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(60,47,47,0.4)" }}>Bond of Purity</div>
                </div>
              </div>
              <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.9rem", color: "rgba(60,47,47,0.6)", lineHeight: 1.85, marginBottom: 28 }}>
                Pure milk ice cream and dairy products crafted with love since 2015.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["FB", "IN", "YT", "WA"].map(s => (
                  <a key={s} href="#" style={{ width: 40, height: 40, borderRadius: "var(--r-md)", background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background var(--fast)" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.1)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.05)"}
                    aria-label={`${s} social link`}>
                    <span style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "0.7rem", color: "rgba(60,47,47,0.6)", textTransform: "uppercase" }}>{s}</span>
                  </a>
                ))}
              </div>
            </div>
            {cols.map(c => (
              <div key={c.title}>
                <h4 style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ice-pink)", marginBottom: 24 }}>{c.title}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {c.links.map(l => <li key={l.l}><Link to={l.h} style={{ textDecoration: "none", color: "rgba(60,47,47,0.7)", fontFamily: "var(--sans)", fontSize: "0.9rem", fontWeight: 500 }}>{l.l}</Link></li>)}
                </ul>
              </div>
            ))}
            <div>
              <h4 style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ice-pink)", marginBottom: 24 }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(60,47,47,0.7)", lineHeight: 1.8 }}>📞 9425103492<br />7987638522</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(60,47,47,0.7)", lineHeight: 1.8 }}>📍 Mangrol, Gram Sajjanpada<br />Ratlam (M.P.) — 457001</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 32, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "rgba(60,47,47,0.5)" }}>© 2026 Shuddham Dairy. All rights reserved. GST: 23FHSPS6144H1ZT</p>
            <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(60,47,47,0.4)", letterSpacing: "0.04em" }}>Bond of Purity — Since 2015</p>
          </div>
        </div>
      </footer>
    </>
  );
}
