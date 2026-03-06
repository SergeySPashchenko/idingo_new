
import { useState, useRef, useEffect } from "react";

const DARK = {
      bg: "#060d0a", surface: "#0b1612", card: "rgba(255,255,255,0.03)",
      border: "rgba(255,255,255,0.07)", borderHi: "rgba(207,255,229,0.3)",
      mint: "#CFFFE5", teal: "#5eead4", purple: "#c4b5fd", rose: "#fda4af",
      white: "#fff", gray: "rgba(255,255,255,0.5)", dim: "rgba(255,255,255,0.25)",
      overlay: "rgba(255,255,255,0.06)", overlayHover: "rgba(255,255,255,0.1)", overlayBorder: "rgba(255,255,255,0.13)",
};

/* Helper: fade-in on scroll */
function Reveal({ children, style, delay = 0 }: any) {
      const ref = useRef<HTMLDivElement>(null);
      const [vis, setVis] = useState(false);
      useEffect(() => {
            const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.12 });
            if (ref.current) io.observe(ref.current);
            return () => io.disconnect();
      }, []);
      return (
            <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}>
                  {children}
            </div>
      );
}

/* ══════════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════════ */
export function AboutPage({ C = DARK }: { C?: typeof DARK }) {
      const team = [
            { name: "Dr. Arjun Mehta", role: "Chief Scientific Officer", bio: "PhD in Nutritional Biochemistry, Stanford. 18 years formulating nutraceuticals.", initials: "AM", color: C.mint },
            { name: "Sofia Reinhardt", role: "Head of R&D", bio: "MSc Pharmacology, University of Vienna. Expert in bioavailability optimisation.", initials: "SR", color: C.teal },
            { name: "Marcus Cole", role: "CEO & Co-Founder", bio: "Former biotech executive with 20 years building premium supplement brands.", initials: "MC", color: C.purple },
            { name: "Priya Nair", role: "Quality Assurance Director", bio: "GMP compliance specialist. Oversees all third-party testing and batch validation.", initials: "PN", color: C.rose },
      ];

      const values = [
            { icon: "🔬", title: "Science First", desc: "Every ingredient decision is made based on peer-reviewed evidence — never trend or marketing." },
            { icon: "🌿", title: "Pure by Principle", desc: "Zero artificial colours, flavours, preservatives, or hormones. Ever. In any product." },
            { icon: "🔍", title: "Radical Transparency", desc: "Certificate of Analysis for every batch, available on request. No hidden proprietary blends." },
            { icon: "♻️", title: "Sustainability", desc: "Recyclable packaging, sustainably-sourced botanicals, and carbon-neutral shipping by 2027." },
            { icon: "🤝", title: "Customer Trust", desc: "60-day no-questions-asked refund. We stand behind every capsule we produce." },
            { icon: "🌍", title: "Global Reach", desc: "Shipping to 42 countries. Formulas trusted by 12,400+ customers worldwide." },
      ];

      return (
            <div style={{ background: C.bg, color: C.white, fontFamily: "'Inter','Helvetica Neue',sans-serif", lineHeight: 1.5, overflowX: "hidden" }}>
                  <style>{`@keyframes ambg{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(18px,-18px)scale(1.04)}}`}</style>
                  {/* Hero */}
                  <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(60px,8vw,100px)", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: "-10%", left: "-8%", width: "44vw", height: "44vw", background: "rgba(207,255,229,0.04)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0, animation: "ambg 14s ease-in-out infinite" }} />
                        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                              <Reveal>
                                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 18, fontWeight: 600 }}>Est. 2008 · Boynton Beach, FL</p>
                                    <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.4rem,5vw,4.5rem)", color: C.white, fontWeight: 400, lineHeight: 1.1, marginBottom: 22 }}>
                                          We believe health is <em style={{ fontStyle: "italic", color: C.mint }}>earned through science</em>
                                    </h1>
                                    <p style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", color: C.gray, lineHeight: 1.9, fontWeight: 300, maxWidth: 580, margin: "0 auto" }}>
                                          Idingo was founded by scientists tired of an industry built on marketing instead of medicine. We exist to give every person access to the highest-quality nutraceuticals on earth — formulated with honesty, tested with rigour.
                                    </p>
                              </Reveal>
                        </div>
                  </section>

                  {/* Values grid */}
                  <section style={{ padding: "clamp(50px,7vw,90px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}` }}>
                        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                              <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
                                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,3rem)", color: C.white, fontWeight: 400 }}>What we stand for</h2>
                              </Reveal>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(14px,2.5vw,24px)" }} className="about-grid">
                                    <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr 1fr!important}}.@media(max-width:520px){.about-grid{grid-template-columns:1fr!important}}`}</style>
                                    {values.map((v, i) => (
                                          <Reveal key={i} delay={i * 0.07}>
                                                <div style={{ background: C.overlay, border: `1px solid ${C.border}`, borderRadius: 20, padding: "clamp(20px,3vw,28px)", transition: "all .3s", cursor: "default" }}
                                                      onMouseEnter={e => { (e.currentTarget as any).style.borderColor = C.borderHi; (e.currentTarget as any).style.background = "rgba(207,255,229,0.05)"; }}
                                                      onMouseLeave={e => { (e.currentTarget as any).style.borderColor = C.border; (e.currentTarget as any).style.background = C.overlay; }}
                                                >
                                                      <div style={{ fontSize: "1.6rem", marginBottom: 14 }}>{v.icon}</div>
                                                      <h3 style={{ color: C.white, fontSize: "0.95rem", fontWeight: 500, marginBottom: 8 }}>{v.title}</h3>
                                                      <p style={{ fontSize: "0.82rem", color: C.dim, lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</p>
                                                </div>
                                          </Reveal>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Story */}
                  <section style={{ padding: "clamp(50px,7vw,90px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}`, background: "rgba(255,255,255,0.01)" }}>
                        <div style={{ maxWidth: 780, margin: "0 auto" }}>
                              <Reveal>
                                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,3rem)", color: C.white, fontWeight: 400, marginBottom: 28, textAlign: "center" }}>The Idingo <em style={{ fontStyle: "italic", color: C.mint }}>Story</em></h2>
                                    {[
                                          "Founded in 2008 in a research lab in Boynton Beach, Florida, Idingo began as a personal project. Our founders — a team of biochemists and nutritional scientists — were frustrated by what they saw in the supplement aisle: underdosed formulas, cheap filler forms, and marketing claims unsupported by any clinical evidence.",
                                          "We spent 3 years in R&D before releasing a single product. Our first formula — the Energy Optimizer — was reformulated 14 times before we were satisfied it met our standards. That obsessive attention to detail has defined every product we've released since.",
                                          "Today, Idingo formulas are used in 42 countries. Our facility in Oklahoma City holds NSF GMP certification, and every batch is independently tested by a third-party laboratory before it ever ships. The science has never compromised — and never will.",
                                    ].map((p, i) => (
                                          <Reveal key={i} delay={i * 0.1}>
                                                <p style={{ fontSize: "clamp(0.88rem,1.4vw,1rem)", color: i === 0 ? C.gray : C.dim, lineHeight: 1.9, fontWeight: 300, marginBottom: 22 }}>{p}</p>
                                          </Reveal>
                                    ))}
                              </Reveal>
                        </div>
                  </section>

                  {/* Team */}
                  <section style={{ padding: "clamp(50px,7vw,90px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}` }}>
                        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                              <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
                                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,3rem)", color: C.white, fontWeight: 400 }}>The team behind <em style={{ fontStyle: "italic", color: C.mint }}>the science</em></h2>
                              </Reveal>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="team-grid">
                                    <style>{`@media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr!important}}`}</style>
                                    {team.map((m, i) => (
                                          <Reveal key={i} delay={i * 0.08}>
                                                <div style={{ textAlign: "center" }}>
                                                      <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${m.color}18`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "1.1rem", fontWeight: 600, color: m.color, fontFamily: "serif" }}>{m.initials}</div>
                                                      <h4 style={{ color: C.white, fontSize: "0.9rem", fontWeight: 500, marginBottom: 4 }}>{m.name}</h4>
                                                      <p style={{ fontSize: "0.65rem", color: m.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>{m.role}</p>
                                                      <p style={{ fontSize: "0.8rem", color: C.dim, lineHeight: 1.65, fontWeight: 300 }}>{m.bio}</p>
                                                </div>
                                          </Reveal>
                                    ))}
                              </div>
                        </div>
                  </section>
            </div>
      );
}

/* ══════════════════════════════════════════════
   OUR PROCESS PAGE
══════════════════════════════════════════════ */
export function ProcessPage({ C = DARK }: { C?: typeof DARK }) {
      const phases = [
            {
                  n: "01", icon: "📚", title: "Research & Evidence Review",
                  desc: "Our science team begins every formula with a systematic literature review. We only consider ingredients with at least 3 peer-reviewed randomised controlled trials demonstrating efficacy at the intended dose.",
                  details: ["12,000+ scientific papers reviewed to date", "Minimum 3 RCTs required per ingredient", "Independent biostatistician review", "Annual ongoing literature monitoring"],
            },
            {
                  n: "02", icon: "⚗️", title: "Raw Material Qualification",
                  desc: "We source only from GMP-certified suppliers who can provide full chain-of-custody documentation, certificates of analysis, and independent third-party testing results for every lot.",
                  details: ["Supplier audits every 18 months", "COA required for every shipment", "Heavy metal, pesticide & microbiological screens", "Patented extract forms preferred"],
            },
            {
                  n: "03", icon: "🧮", title: "Formulation & Synergy Testing",
                  desc: "Our formulators engineer each product around pharmacokinetic synergy — how ingredients interact in vivo. Ratios are tested, not guessed. Antagonistic combinations are eliminated before any prototype is created.",
                  details: ["Synergy/antagonism interaction screening", "Pharmacokinetic half-life matching", "Bioavailability form optimisation", "14+ reformulation iterations on average"],
            },
            {
                  n: "04", icon: "🏭", title: "GMP Manufacturing",
                  desc: "All products are manufactured in our NSF GMP-certified facility in Oklahoma City, Oklahoma under strict clean-room conditions with full chain-of-custody tracking from raw material receipt to sealed product.",
                  details: ["NSF GMP & HACCP certified facility", "Real-time environmental monitoring", "Batch records maintained for 7 years", "Zero cross-contamination tolerance"],
            },
            {
                  n: "05", icon: "🧪", title: "3rd Party Laboratory Testing",
                  desc: "Every batch is tested by an independent, ISO 17025-accredited laboratory before release. We test for identity, potency, purity, heavy metals, pesticides, and microbiological contamination.",
                  details: ["ISO 17025-accredited lab partner", "Potency verified ±5% of label claim", "Full heavy metals panel (As, Cd, Hg, Pb)", "Batch QR code for consumer traceability"],
            },
            {
                  n: "06", icon: "📦", title: "Climate-Controlled Distribution",
                  desc: "Products ship from our Norcross, GA warehouse within 24–48 hours of order. All products are stored below 25°C / 77°F in humidity-controlled conditions to preserve potency through delivery.",
                  details: ["24–48hr order fulfillment", "Temperature monitored cold-chain", "Recyclable amber glass or HDPE packaging", "Batch QR traceability on every order"],
            },
      ];

      return (
            <div style={{ background: C.bg, color: C.white, fontFamily: "'Inter','Helvetica Neue',sans-serif", lineHeight: 1.5, overflowX: "hidden" }}>
                  <style>{`@keyframes ambg{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(18px,-18px)scale(1.04)}}`}</style>
                  {/* Hero */}
                  <section style={{ padding: "clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(60px,8vw,100px)", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: "-10%", right: "-8%", width: "44vw", height: "44vw", background: "rgba(94,234,212,0.03)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", animation: "ambg 18s ease-in-out infinite" }} />
                        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                              <Reveal>
                                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.teal, marginBottom: 18, fontWeight: 600 }}>How We Build Every Formula</p>
                                    <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.4rem,5vw,4.5rem)", color: C.white, fontWeight: 400, lineHeight: 1.1, marginBottom: 22 }}>
                                          6 stages. <em style={{ fontStyle: "italic", color: C.teal }}>Zero shortcuts.</em>
                                    </h1>
                                    <p style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", color: C.gray, lineHeight: 1.9, fontWeight: 300 }}>
                                          From the first literature search to the QR code on your bottle — here's exactly how an Idingo formula comes to life.
                                    </p>
                              </Reveal>
                        </div>
                  </section>

                  {/* Phases */}
                  <section style={{ padding: "0 clamp(18px,5vw,56px) clamp(80px,10vw,120px)", maxWidth: 1100, margin: "0 auto" }}>
                        {phases.map((p, i) => (
                              <Reveal key={i} delay={0.08}>
                                    <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "80px 1fr" : "80px 1fr", gap: "clamp(24px,4vw,48px)", marginBottom: "clamp(40px,6vw,72px)", borderLeft: i < phases.length - 1 ? `1px solid ${C.border}` : "none", paddingLeft: 0, position: "relative" }}>
                                          {/* Step dot */}
                                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                                                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(207,255,229,0.07)", border: `1px solid ${C.borderHi}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, zIndex: 2 }}>{p.icon}</div>
                                                <span style={{ fontSize: "0.6rem", color: C.mint, letterSpacing: "0.15em", marginTop: 8, fontWeight: 600 }}>{p.n}</span>
                                          </div>
                                          {/* Content */}
                                          <div style={{ paddingBottom: "clamp(32px,5vw,60px)", borderBottom: i < phases.length - 1 ? `1px solid ${C.border}` : "none" }}>
                                                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", color: C.white, fontWeight: 400, marginBottom: 14 }}>{p.title}</h3>
                                                <p style={{ fontSize: "0.9rem", color: C.gray, lineHeight: 1.85, fontWeight: 300, marginBottom: 20, maxWidth: 580 }}>{p.desc}</p>
                                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                                      {p.details.map((d, di) => (
                                                            <span key={di} style={{ fontSize: "0.72rem", color: C.dim, background: C.overlay, border: `1px solid ${C.border}`, borderRadius: 999, padding: "4px 12px", fontWeight: 300 }}>✓ {d}</span>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </Reveal>
                        ))}
                  </section>

                  {/* Certificate callout */}
                  <section style={{ padding: "clamp(40px,6vw,72px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}`, background: "rgba(255,255,255,0.01)" }}>
                        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                              <Reveal>
                                    <div style={{ display: "inline-flex", gap: "clamp(18px,3vw,40px)", flexWrap: "wrap", justifyContent: "center" }}>
                                          {["NSF GMP Certified", "ISO 17025 Lab", "HACCP Compliant", "FDA Registered", "3rd Party Verified"].map((cert, i) => (
                                                <div key={i} style={{ padding: "10px 18px", borderRadius: 999, border: `1px solid ${C.borderHi}`, fontSize: "0.72rem", color: C.mint, letterSpacing: "0.08em", fontWeight: 500 }}>{cert}</div>
                                          ))}
                                    </div>
                              </Reveal>
                        </div>
                  </section>
            </div>
      );
}

/* ══════════════════════════════════════════════
   GALLERY PAGE
══════════════════════════════════════════════ */
export function GalleryPage({ C = DARK }: { C?: typeof DARK }) {
      const [activeFilter, setActiveFilter] = useState("All");
      const [lightbox, setLightbox] = useState<null | { label: string; emoji: string; desc: string }>(null);

      const filters = ["All", "Lab", "Ingredients", "Manufacturing", "Packaging"];

      const items = [
            { label: "Ashwagandha Root", emoji: "🌿", filter: "Ingredients", desc: "KSM-66® — the world's most studied ashwagandha extract, harvested from certified organic farms in Rajasthan, India.", color: C.mint },
            { label: "CoQ10 Ubiquinol Crystal", emoji: "✨", filter: "Ingredients", desc: "Kaneka Ubiquinol™ — the most bioavailable form of CoQ10, 8× more absorbable than standard ubiquinone.", color: C.teal },
            { label: "Formulation Lab", emoji: "⚗️", filter: "Lab", desc: "Our state-of-the-art formulation laboratory in Boynton Beach, FL where every synergy ratio is developed and tested.", color: C.purple },
            { label: "Mass Spectrometry Testing", emoji: "🔬", filter: "Lab", desc: "Every ingredient is screened using HPLC and LC-MS/MS before entering our facility to verify identity and purity.", color: C.mint },
            { label: "Lion's Mane Extract", emoji: "🍄", filter: "Ingredients", desc: "8:1 concentrated lion's mane mushroom extract standardised for beta-glucan content and NGF-stimulating hericenones.", color: C.teal },
            { label: "GMP Encapsulation Line", emoji: "🏭", filter: "Manufacturing", desc: "Our automated encapsulation line operates under ISO 7 cleanroom conditions with 100% weight-controlled output.", color: C.rose },
            { label: "Batch Testing Lab", emoji: "🧪", filter: "Lab", desc: "Finished product batch testing at our ISO 17025-accredited third-party laboratory partner.", color: C.purple },
            { label: "Amber Glass Bottling", emoji: "🫙", filter: "Packaging", desc: "Amber glass protects formula potency by blocking UV-A and UV-B light. Our bottles are 100% recyclable.", color: C.mint },
            { label: "Organic Elderberry", emoji: "🫐", filter: "Ingredients", desc: "Triple-extracted Sambucus nigra with guaranteed minimum anthocyanin content for maximum immune-modulating activity.", color: C.rose },
            { label: "Label Application", emoji: "📋", filter: "Manufacturing", desc: "Each label includes a batch-specific QR code linking to that batch's certificate of analysis and testing results.", color: C.teal },
            { label: "Cold Chain Shipping", emoji: "❄️", filter: "Packaging", desc: "Temperature-maintained packaging keeps formulas within optimal range from our Norcross, GA warehouse to your door.", color: C.purple },
            { label: "Ingredient Archive Wall", emoji: "🗂️", filter: "Lab", desc: "Our research archive holds sample records for 340+ compounds evaluated since 2008. Only 18 formulas made the cut.", color: C.mint },
      ];

      const visible = activeFilter === "All" ? items : items.filter(it => it.filter === activeFilter);

      return (
            <div style={{ background: C.bg, color: C.white, fontFamily: "'Inter','Helvetica Neue',sans-serif", lineHeight: 1.5, overflowX: "hidden" }}>
                  <style>{`@keyframes fadeIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}`}</style>
                  {/* Hero */}
                  <section style={{ padding: "clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(40px,6vw,70px)", textAlign: "center" }}>
                        <Reveal>
                              <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 14, fontWeight: 600 }}>Inside Idingo</p>
                              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.4rem,5vw,4.5rem)", color: C.white, fontWeight: 400, lineHeight: 1.1, marginBottom: 18 }}>
                                    The art of <em style={{ fontStyle: "italic", color: C.mint }}>precision formulation</em>
                              </h1>
                              <p style={{ fontSize: "clamp(0.88rem,1.4vw,1rem)", color: C.gray, fontWeight: 300, maxWidth: 520, margin: "0 auto" }}>From raw botanicals to finished capsule — a visual journey through the Idingo process.</p>
                        </Reveal>
                  </section>

                  {/* Filter tabs */}
                  <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 48, padding: "0 clamp(18px,5vw,56px)" }}>
                        {filters.map(f => (
                              <button key={f} onClick={() => setActiveFilter(f)} style={{ padding: "8px 20px", borderRadius: 999, border: `1px solid ${activeFilter === f ? C.mint : C.border}`, background: activeFilter === f ? "rgba(207,255,229,0.1)" : "transparent", color: activeFilter === f ? C.mint : C.dim, fontSize: "0.8rem", cursor: "pointer", transition: "all .25s" }}>{f}</button>
                        ))}
                  </div>

                  {/* Grid */}
                  <section style={{ padding: "0 clamp(18px,5vw,56px) clamp(80px,10vw,120px)" }}>
                        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="gallery-grid">
                              <style>{`@media(max-width:900px){.gallery-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:520px){.gallery-grid{grid-template-columns:1fr!important}}`}</style>
                              {visible.map((item, i) => (
                                    <div key={`${item.label}-${i}`} onClick={() => setLightbox(item)}
                                          style={{ aspectRatio: "4/3", background: `${item.color}08`, border: `1px solid ${item.color}20`, borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, cursor: "pointer", transition: "all 0.3s", animation: "fadeIn 0.4s ease both", animationDelay: `${i * 0.05}s`, position: "relative", overflow: "hidden" }}
                                          onMouseEnter={e => { (e.currentTarget as any).style.borderColor = `${item.color}50`; (e.currentTarget as any).style.background = `${item.color}12`; (e.currentTarget as any).style.transform = "translateY(-4px)"; (e.currentTarget as any).style.boxShadow = `0 16px 40px ${item.color}15`; }}
                                          onMouseLeave={e => { (e.currentTarget as any).style.borderColor = `${item.color}20`; (e.currentTarget as any).style.background = `${item.color}08`; (e.currentTarget as any).style.transform = "none"; (e.currentTarget as any).style.boxShadow = "none"; }}
                                    >
                                          <span style={{ fontSize: "3rem" }}>{item.emoji}</span>
                                          <span style={{ fontSize: "0.78rem", color: item.color, fontWeight: 500, letterSpacing: "0.06em", textAlign: "center", padding: "0 16px" }}>{item.label}</span>
                                          <span style={{ fontSize: "0.62rem", color: C.dim, letterSpacing: "0.12em", textTransform: "uppercase" }}>{item.filter}</span>
                                    </div>
                              ))}
                        </div>
                  </section>

                  {/* Lightbox */}
                  {lightbox && (
                        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(6,13,10,0.92)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(20px)" }}>
                              <div onClick={e => e.stopPropagation()} style={{ background: C.surface, border: `1px solid ${C.borderHi}`, borderRadius: 28, padding: "clamp(28px,5vw,52px)", maxWidth: 480, width: "100%", textAlign: "center" }}>
                                    <div style={{ fontSize: "4rem", marginBottom: 20 }}>{lightbox.emoji}</div>
                                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", color: C.white, fontWeight: 400, marginBottom: 14 }}>{lightbox.label}</h3>
                                    <p style={{ fontSize: "0.9rem", color: C.gray, lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>{lightbox.desc}</p>
                                    <button onClick={() => setLightbox(null)} style={{ background: "transparent", border: `1px solid ${C.border}`, color: C.dim, borderRadius: 999, padding: "10px 24px", cursor: "pointer", fontSize: "0.8rem" }}>Close ✕</button>
                              </div>
                        </div>
                  )}
            </div>
      );
}

/* ══════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════ */
export function ContactPage({ C = DARK }: { C?: typeof DARK }) {
      const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
      const [sent, setSent] = useState(false);
      const [focused, setFocused] = useState<string | null>(null);

      const inputStyle = (field: string) => ({
            width: "100%", padding: "12px 16px", background: focused === field ? "rgba(207,255,229,0.04)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${focused === field ? "rgba(207,255,229,0.4)" : C.border}`, borderRadius: 12, color: C.white,
            fontSize: "0.87rem", outline: "none", boxSizing: "border-box" as const, transition: "all .25s",
            boxShadow: focused === field ? "0 0 0 3px rgba(207,255,229,0.07)" : "none",
      });

      const locations = [
            { role: "Headquarters", address: "Boynton Beach, Florida, USA", icon: "🏢" },
            { role: "Distribution Center", address: "Norcross, Georgia, USA", icon: "📦" },
            { role: "Manufacturing", address: "Oklahoma City, Oklahoma, USA", icon: "🏭" },
      ];

      return (
            <div style={{ background: C.bg, color: C.white, fontFamily: "'Inter','Helvetica Neue',sans-serif", lineHeight: 1.5, overflowX: "hidden" }}>
                  {/* Hero */}
                  <section style={{ padding: "clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(40px,6vw,70px)", textAlign: "center" }}>
                        <Reveal>
                              <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 14, fontWeight: 600 }}>Get In Touch</p>
                              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.4rem,5vw,4.5rem)", color: C.white, fontWeight: 400, lineHeight: 1.1, marginBottom: 18 }}>
                                    We'd love to <em style={{ fontStyle: "italic", color: C.mint }}>hear from you</em>
                              </h1>
                              <p style={{ fontSize: "clamp(0.88rem,1.4vw,1rem)", color: C.gray, fontWeight: 300, maxWidth: 480, margin: "0 auto" }}>Questions about a formula, an order, or our science? Our team typically responds within 24 hours.</p>
                        </Reveal>
                  </section>

                  <section style={{ padding: "0 clamp(18px,5vw,56px) clamp(80px,10vw,120px)" }}>
                        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "clamp(32px,5vw,72px)" }} className="contact-grid">
                              <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

                              {/* Form */}
                              {!sent ? (
                                    <Reveal>
                                          <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`, borderRadius: 28, padding: "clamp(24px,4vw,44px)" }}>
                                                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", color: C.white, fontWeight: 400, marginBottom: 28 }}>Send us a message</h2>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                                                      <div>
                                                            <label style={{ fontSize: "0.7rem", color: C.dim, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 7 }}>Name</label>
                                                            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="Your name" style={inputStyle("name")} />
                                                      </div>
                                                      <div>
                                                            <label style={{ fontSize: "0.7rem", color: C.dim, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 7 }}>Email</label>
                                                            <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="you@example.com" style={inputStyle("email")} />
                                                      </div>
                                                </div>
                                                <div style={{ marginBottom: 14 }}>
                                                      <label style={{ fontSize: "0.7rem", color: C.dim, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 7 }}>Subject</label>
                                                      <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} placeholder="What's this about?" style={inputStyle("subject")} />
                                                </div>
                                                <div style={{ marginBottom: 24 }}>
                                                      <label style={{ fontSize: "0.7rem", color: C.dim, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 7 }}>Message</label>
                                                      <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} placeholder="Tell us more..." rows={5} style={{ ...inputStyle("message"), resize: "none", verticalAlign: "top" } as any} />
                                                </div>
                                                <button
                                                      onClick={() => { if (form.name && form.email && form.message) setSent(true); }}
                                                      style={{ width: "100%", background: C.mint, color: "#060d0a", border: "none", borderRadius: 12, padding: "14px", fontWeight: 600, fontSize: "0.88rem", cursor: "pointer", transition: "all .25s" }}
                                                      onMouseEnter={e => { (e.currentTarget as any).style.boxShadow = "0 0 28px rgba(207,255,229,0.35)"; (e.currentTarget as any).style.transform = "translateY(-1px)"; }}
                                                      onMouseLeave={e => { (e.currentTarget as any).style.boxShadow = "none"; (e.currentTarget as any).style.transform = "none"; }}
                                                >Send Message →</button>
                                          </div>
                                    </Reveal>
                              ) : (
                                    <Reveal>
                                          <div style={{ background: "rgba(207,255,229,0.04)", border: `1px solid ${C.borderHi}`, borderRadius: 28, padding: "clamp(40px,6vw,72px)", textAlign: "center" }}>
                                                <div style={{ fontSize: "3.5rem", marginBottom: 20 }}>🎉</div>
                                                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", color: C.white, marginBottom: 14 }}>Message sent!</h3>
                                                <p style={{ fontSize: "0.9rem", color: C.gray, lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                                <button onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setSent(false); }} style={{ background: "transparent", border: `1px solid ${C.border}`, color: C.dim, borderRadius: 999, padding: "10px 24px", cursor: "pointer", fontSize: "0.8rem" }}>Send another message</button>
                                          </div>
                                    </Reveal>
                              )}

                              {/* Sidebar */}
                              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    <Reveal>
                                          <div style={{ background: C.overlay, border: `1px solid ${C.border}`, borderRadius: 20, padding: "24px" }}>
                                                <h4 style={{ color: C.white, fontSize: "0.9rem", fontWeight: 500, marginBottom: 18 }}>Our Locations</h4>
                                                {locations.map((l, i) => (
                                                      <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < locations.length - 1 ? 14 : 0, paddingBottom: i < locations.length - 1 ? 14 : 0, borderBottom: i < locations.length - 1 ? `1px solid ${C.border}` : "none" }}>
                                                            <span style={{ fontSize: "1.2rem" }}>{l.icon}</span>
                                                            <div>
                                                                  <p style={{ fontSize: "0.62rem", color: C.mint, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{l.role}</p>
                                                                  <p style={{ fontSize: "0.82rem", color: C.dim, fontWeight: 300 }}>{l.address}</p>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </Reveal>
                                    <Reveal delay={0.1}>
                                          <div style={{ background: C.overlay, border: `1px solid ${C.border}`, borderRadius: 20, padding: "24px" }}>
                                                <h4 style={{ color: C.white, fontSize: "0.9rem", fontWeight: 500, marginBottom: 14 }}>Response Times</h4>
                                                {[["General enquiries", "Within 24 hours"], ["Order support", "Within 4 hours"], ["Scientific questions", "Within 48 hours"]].map(([t, r], i) => (
                                                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: i < 2 ? 10 : 0, paddingBottom: i < 2 ? 10 : 0, borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
                                                            <span style={{ fontSize: "0.8rem", color: C.gray, fontWeight: 300 }}>{t}</span>
                                                            <span style={{ fontSize: "0.72rem", color: C.mint, fontWeight: 500 }}>{r}</span>
                                                      </div>
                                                ))}
                                          </div>
                                    </Reveal>
                                    <Reveal delay={0.2}>
                                          <div style={{ background: "rgba(207,255,229,0.04)", border: `1px solid ${C.borderHi}`, borderRadius: 20, padding: "24px" }}>
                                                <p style={{ fontSize: "0.8rem", color: C.mint, fontWeight: 500, marginBottom: 6 }}>📧 hello@idingo.com</p>
                                                <p style={{ fontSize: "0.78rem", color: C.dim, fontWeight: 300 }}>Our team is available Mon–Fri, 9am–5pm EST.</p>
                                          </div>
                                    </Reveal>
                              </div>
                        </div>
                  </section>
            </div>
      );
}
