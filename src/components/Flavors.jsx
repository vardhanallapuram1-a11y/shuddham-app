import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDragScroll } from "../hooks";
import splitImg from "../assets/images/split_editorial.png";
import { FLAVORS } from "../data/content";
import DripDivider from "./DripDivider";

// Use all flavors from the catalog
const SIGNATURE_PRODUCTS = FLAVORS;

export default function FlavorSystem() {
  const railRef = useRef(null);
  const drag = useDragScroll(railRef);

  return (
    <div id="flavors" style={{ background: "var(--ice-mint)", position: "relative" }}>
      {/* Editorial Split Section */}
      <section style={{
        padding: "clamp(60px, 10vw, 120px) 24px", // Responsive padding
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", // Responsive grid
          alignItems: "center",
          gap: "clamp(40px, 8vw, 100px)"
        }}>
          <div style={{ textAlign: "left" }}>
            <span style={{
              fontFamily: "var(--sans)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ice-peach)",
              display: "block",
              marginBottom: 16
            }}>About Our Craft</span>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--ice-brown)",
              marginBottom: 24,
              letterSpacing: "-0.02em"
            }}>
              Sweet Moments <br /> Start with <br /> <span style={{ fontStyle: "italic", fontWeight: 400 }}>Purity</span>
            </h2>

            <p style={{
              fontFamily: "var(--sans)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(60,47,47,0.7)",
              maxWidth: 480,
              marginBottom: 40
            }}>
              Every scoop is a celebration of fine ingredients and artisanal patience. We source the freshest dairy and real fruits to ensure your moments are nothing short of magical.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/our-story" className="btn" style={{
                border: "1px solid var(--ice-brown)",
                padding: "14px 40px",
                borderRadius: "99px",
                color: "var(--ice-brown)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700
              }}>
                Our Story
              </Link>
              <Link to="/flavors" className="btn" style={{
                background: "var(--ice-peach)",
                color: "var(--white)",
                padding: "14px 40px",
                borderRadius: "99px",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700
              }}>
                View All Flavors
              </Link>
            </div>
          </div>

          <div style={{
            borderRadius: "var(--r-xl)", // Now responsive via CSS
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(60,47,47,0.12)"
          }}>
            <img src={splitImg} alt="Artisanal Ice Cream Craft" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Product Gallery Section with Good Slider */}
      <section style={{ padding: "clamp(80px, 10vw, 120px) 0", textAlign: "left" }}>
        <div style={{ maxWidth: 1400, margin: "0 24px 60px", paddingLeft: "clamp(0px, 4vw, 40px)" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "var(--ice-brown)",
            letterSpacing: "-0.02em"
          }}>
            Signature Collection
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(60,47,47,0.6)", marginTop: 12 }}>
            Drag to explore our full range of pure delights
            <span style={{ color: "var(--ice-peach)", marginLeft: 8 }}>→</span>
          </p>
        </div>

        <div
          ref={railRef}
          className="fl-rail"
          {...drag}
          style={{
            display: "flex",
            gap: "var(--card-gap)",
            padding: "0 clamp(24px, 5vw, 40px)",
            width: "100%", // Fix for mobile overflow
            scrollSnapType: "x mandatory" // Smoother mobile scroll
          }}
        >
          {SIGNATURE_PRODUCTS.map(p => (
            <div key={p.id} className="p-card" style={{ scrollSnapAlign: "center", background: "white", borderRadius: "24px", padding: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div className="p-img-box" style={{ background: p.bg || "rgba(0,0,0,0.03)", borderRadius: "16px", marginBottom: 16 }}>
                <img src={p.image} alt={p.name} loading="lazy" style={{ width: "100%", height: "auto" }} />
              </div>
              <div style={{ padding: "0 4px" }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 800, color: "var(--ice-brown)", marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(60,47,47,0.6)", marginBottom: 16, height: "3.2em", overflow: "hidden", lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{
                  display: "inline-block",
                  fontFamily: "var(--sans)",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ice-peach)",
                  background: "var(--ice-peach-light)",
                  padding: "6px 14px",
                  borderRadius: "99px"
                }}>
                  {p.cat} Collection
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <DripDivider color="var(--ice-mint)" position="bottom" height={80} />
    </div>
  );
}
