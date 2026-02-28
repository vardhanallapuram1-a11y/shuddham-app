import { useState } from "react";
import { useScrolled } from "../hooks";
import logoImg from "../assets/logo.webp";

export default function Header({ active }) {
  const scrolled = useScrolled(80);
  const [menu, setMenu] = useState(false);

  const links = [
    { label: "Flavors", id: "flavors" },
    { label: "Story", id: "story" },
    { label: "Dairy", id: "dairy" },
    { label: "Why Us", id: "why" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      padding: scrolled ? "14px 0" : "28px 0",
      background: scrolled ? "rgba(242,226,207,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all var(--mid) var(--ease-out)",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <a href="#hero" className={"nav-logo-wrap nav-logo-visible"} style={{ gap: "14px" }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: scrolled ? "var(--ocean)" : "var(--tiger)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, overflow: "hidden",
            transition: "background var(--mid) var(--ease-out), transform var(--fast)",
          }}>
            <img src={logoImg} alt="Shuddham Logo" style={{ width: "100%", height: "100%", objectFit: "cover", background: "white" }} />
          </div>
          <div>
            <div style={{ 
              fontFamily: "var(--serif)", 
              fontWeight: 800, 
              fontSize: "1.6rem", 
              color: scrolled ? "var(--ocean)" : "var(--white)", 
              letterSpacing: "-0.01em", 
              lineHeight: 1, 
              transition: "color var(--mid)" 
            }}>
              Shuddham
            </div>
            <div style={{ 
              fontFamily: "var(--sans)", 
              fontWeight: 600, 
              fontSize: "0.7rem", 
              letterSpacing: "0.16em", 
              textTransform: "uppercase", 
              color: scrolled ? "var(--muted)" : "rgba(255, 255, 255, 0.7)", 
              lineHeight: 1, 
              marginTop: 4,
              transition: "color var(--mid)"
            }}>
              Bond of Purity
            </div>
          </div>
        </a>

        <nav className="hide-sm" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${scrolled ? "dark" : ""} ${active === l.id ? "active" : ""}`}>{l.label}</a>
          ))}
        </nav>

        <a href="#flavors" className="btn btn-tiger hide-sm" style={{ padding: "12px 28px", fontSize: "0.8rem", opacity: scrolled ? 1 : 0.9, transition: "opacity var(--mid)" }}>
          Explore →
        </a>

        <button className="show-sm"
          onClick={() => setMenu(!menu)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: scrolled ? "var(--ink)" : "var(--white)" }}
          aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {menu ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {menu && (
        <div style={{ background: "rgba(242,226,207,0.98)", backdropFilter: "blur(24px)", borderTop: "1px solid var(--border)", padding: "14px 32px 24px" }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMenu(false)}
              style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.06em", color: "var(--ink)", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid var(--border)", textTransform: "uppercase" }}>
              {l.label}
            </a>
          ))}
          <a href="#flavors" className="btn btn-tiger" style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>Explore Flavors</a>
        </div>
      )}
    </header>
  );
}