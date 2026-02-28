import { useReveal } from "../hooks";
import { Phone, MapPin, Hash } from "lucide-react";

export default function Contact() {
  const [ref, vis] = useReveal();

  const contacts = [
    { icon: <Phone size={24} />, label: "Phone", val: "9425103492 / 7987638522" },
    { icon: <MapPin size={24} />, label: "Address", val: "Mangrol, Gram Sajjanpada,\nRatlam (M.P.) — 457001" },
    { icon: <Hash size={24} />, label: "GST", val: "23FHSPS6144H1ZT" },
  ];

  return (
    <section id="contact" style={{ padding: "120px 32px", background: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow">Get in Touch</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.4rem)", letterSpacing: "-0.03em", marginTop: 12, color: "var(--ink)", lineHeight: 1.05 }}>
            Partner with<br /><em style={{ fontStyle: "italic", color: "var(--tiger)" }}>Shuddham</em>
          </h2>
          <div className="rule" style={{ marginTop: 20 }} />
        </div>

        <div className={`sr ${vis ? "in" : ""}`} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.85, color: "var(--muted)", marginBottom: 44 }}>
              Looking to stock Shuddham products or partner with us? Reach out to Anil Sisodia directly. We'd love to bring pure, natural dairy to more families.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {contacts.map(c => (
                <div key={c.label} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, background: "var(--ocean-lt)", color: "var(--ocean)", borderRadius: "var(--r-md)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>{c.label}</div>
                    <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.95rem", color: "var(--ink)", whiteSpace: "pre-line", lineHeight: 1.6 }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--linen)", border: "2px solid var(--border)", borderRadius: "var(--r-xl)", padding: 40 }}>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.4rem", color: "var(--ink)", marginBottom: 24, letterSpacing: "-0.01em" }}>Send a Message</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["Your Name", "Phone Number", "City / Location"].map(p => (
                <input key={p} className="fi" placeholder={p} />
              ))}
              <textarea className="fi" placeholder="Tell us about your requirement..." rows={4} style={{ resize: "vertical" }} />
              <button className="btn btn-tiger" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>Send Inquiry →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
