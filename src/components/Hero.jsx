import { Link } from "react-router-dom";
import { useReveal, useParallax } from "../hooks";
import heroImg from "../assets/images/hero_warm_elegance.png";
import DripDivider from "./DripDivider";

export default function Hero() {
  const [ref, isVisible] = useReveal();
  const parallaxOffset = useParallax(0.15);

  return (
    <>
      <section id="hero" ref={ref} style={{
        minHeight: "100vh",
        background: "var(--ice-peach)",
        display: "flex",
        alignItems: "center",
        padding: "100px 40px 60px",
        overflow: "hidden",
        position: "relative"
      }}>
        <div className="hero-grid" style={{
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          alignItems: "center",
          gap: "clamp(40px, 8vw, 80px)",
          position: "relative",
          zIndex: 3
        }}>

          <div className={`reveal ${isVisible ? 'reveal-active' : ''}`} style={{ textAlign: "left" }}>
            <h1 className="reveal-delay-1" style={{
              fontFamily: "var(--serif)",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--white)",
              marginBottom: "1.5rem"
            }}>
              Every Scoop, <br />
              <span style={{ color: "var(--ice-brown)", fontStyle: "italic" }}>Pure Joy.</span>
            </h1>

            <p className="reveal-delay-2" style={{
              fontFamily: "var(--sans)",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 480,
              marginBottom: "3rem"
            }}>
              Handcrafted ice cream made from farm-fresh milk, real fruits, and zero shortcuts. Experience the Shuddham promise.
            </p>

          </div>

          <div className={`reveal reveal-delay-2 ${isVisible ? 'reveal-active' : ''}`} style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
            {/* Main Visual with Large Rounded Bottom Corner */}
            <div className="parallax-layer" style={{
              borderRadius: "0 0 0 var(--r-xl)",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              maxWidth: 520,
              width: "100%",
              marginLeft: "auto",
              transform: `translateY(${parallaxOffset}px)`
            }}>
              <img
                src={heroImg}
                alt="Premium Shuddham Ice Cream"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.8s var(--ease-out)"
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <DripDivider color="var(--ice-peach)" position="bottom" height={80} />
    </>
  );
}
