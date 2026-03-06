
import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from 'three';
import { AboutPage, ProcessPage, GalleryPage, ContactPage } from "./pages";

/* ══════════════════════════════════════════════
   TOKENS
══════════════════════════════════════════════ */
const DARK = {
  bg: "#060d0a", surface: "#0b1612", card: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.07)", borderHi: "rgba(207,255,229,0.3)",
  mint: "#CFFFE5", teal: "#5eead4", purple: "#c4b5fd", rose: "#fda4af",
  white: "#fff", gray: "rgba(255,255,255,0.5)", dim: "rgba(255,255,255,0.25)",
  overlay: "rgba(255,255,255,0.06)", overlayHover: "rgba(255,255,255,0.1)", overlayBorder: "rgba(255,255,255,0.13)",
  shadow: "rgba(0,0,0,0.5)", shadowHover: "rgba(207,255,229,0.12)",
  glassBg: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))"
};

/* ══════════════════════════════════════════════
   USE THREE HOOK (Removed as we import directly)
══════════════════════════════════════════════ */
function useThree() {
  return true;
}

/* ══════════════════════════════════════════════
   3D BOTTLE (white, pills, liquid, shake)
══════════════════════════════════════════════ */
function ThreeBottle() {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    mouse: { x: 0, y: 0 }, target: { x: 0, y: 0 },
    scroll: 0, raf: 0,
  });
  const refsHolder = useRef<any>({});

  useEffect(() => {
    const el = mountRef.current; if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(4, 6, 5); key.castShadow = true; scene.add(key);
    const fill = new THREE.PointLight(0xCFFFE5, 2.5, 20);
    fill.position.set(-3, 0, 4); scene.add(fill);
    const rim = new THREE.DirectionalLight(0x5eead4, 0.8);
    rim.position.set(-4, 2, -3); scene.add(rim);
    refsHolder.current.fillLight = fill;

    // ── Group ──
    const group = new THREE.Group();
    scene.add(group);
    refsHolder.current.group = group;

    // Bottle body — lathe
    const pts: any[] = [];
    [[0, -.02], [.02, -.02], [.03, .02], [.55, .06], [.62, .1], [.65, .8], [.67, 1.6], [.65, 2.2], [.55, 2.4], [.42, 2.52], [.38, 2.65], [.38, 2.85], [.28, 2.95], [.2, 3.0], [0, 3.0]]
      .forEach(([x, y]) => pts.push(new THREE.Vector2(x, y)));
    const bodyGeo = new THREE.LatheGeometry(pts, 80);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, metalness: 0.05, roughness: 0.08,
      transmission: 0.6, ior: 1.5,
      transparent: true, opacity: 0.85, side: THREE.DoubleSide,
      envMapIntensity: 1,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.castShadow = true;
    group.add(body);

    // Cap
    const capGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.5, 48);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xfcfcfc, metalness: 0.1, roughness: 0.5 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 2.65; group.add(cap);

    // Label canvas
    const lblCanvas = document.createElement("canvas");
    lblCanvas.width = 512; lblCanvas.height = 320;
    const lc = lblCanvas.getContext("2d")!;
    const g = lc.createLinearGradient(0, 0, 512, 0);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(.1, "rgba(6,13,10,0.85)");
    g.addColorStop(.5, "rgba(6,13,10,0.95)"); g.addColorStop(.9, "rgba(6,13,10,0.85)"); g.addColorStop(1, "rgba(0,0,0,0)");
    lc.fillStyle = g; lc.fillRect(0, 0, 512, 320);
    lc.fillStyle = "#CFFFE5"; lc.font = "bold 72px sans-serif"; lc.textAlign = "center";
    lc.fillText("IDINGO", 256, 130);
    lc.fillStyle = "rgba(207,255,229,0.5)"; lc.font = "28px sans-serif";
    lc.fillText("FORMULA", 256, 175);
    lc.fillStyle = "rgba(207,255,229,0.3)"; lc.font = "22px sans-serif";
    lc.fillText("90 CAPSULES", 256, 215);
    const lblTex = new THREE.CanvasTexture(lblCanvas);
    const lblGeo = new THREE.CylinderGeometry(0.702, 0.702, 1.4, 64, 1, true, -Math.PI * .55, Math.PI * 1.1);
    const lblMat = new THREE.MeshBasicMaterial({ map: lblTex, transparent: true, side: THREE.DoubleSide, depthWrite: false });
    const lblMesh = new THREE.Mesh(lblGeo, lblMat);
    lblMesh.position.y = 0.95;
    group.add(lblMesh);

    // Orbit particles
    const pGeo = new THREE.BufferGeometry();
    const pCount = 90;
    const pPos = new Float32Array(pCount * 3);
    const pAngles = new Float32Array(pCount);
    const pRadii = new Float32Array(pCount);
    const pSpeeds = new Float32Array(pCount);
    for (let i = 0; i < pCount; i++) {
      pAngles[i] = Math.random() * Math.PI * 2;
      pRadii[i] = 1.4 + Math.random() * 2.2;
      pSpeeds[i] = (Math.random() - 0.5) * 0.008;
      pPos[i * 3] = 0; pPos[i * 3 + 1] = (Math.random() - 0.5) * 5; pPos[i * 3 + 2] = 0;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xCFFFE5, size: 0.045, transparent: true, opacity: 0.55, sizeAttenuation: true });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);
    refsHolder.current.particles = particles;
    refsHolder.current.pAngles = pAngles;
    refsHolder.current.pRadii = pRadii;
    refsHolder.current.pSpeeds = pSpeeds;
    refsHolder.current.pPos = pPos;

    group.position.y = -0.8;

    // Events
    const onMouseMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      stateRef.current.mouse.x = ((e.clientX - r.left) / W - 0.5) * 2;
      stateRef.current.mouse.y = -((e.clientY - r.top) / H - 0.5) * 2;
    };
    el.addEventListener("mousemove", onMouseMove);

    let t = 0;
    const animate = () => {
      stateRef.current.raf = requestAnimationFrame(animate);
      t += 0.012;
      const { mouse } = stateRef.current;
      const { group: g2, fillLight, particles: pts2, pAngles: pa, pRadii: pr, pSpeeds: ps, pPos: pp } = refsHolder.current;

      // Smooth rotation follow mouse
      stateRef.current.target.x += (mouse.x * 0.5 - stateRef.current.target.x) * 0.05;
      stateRef.current.target.y += (mouse.y * 0.18 - stateRef.current.target.y) * 0.05;

      g2.rotation.y = stateRef.current.target.x;
      g2.rotation.x = stateRef.current.target.y;
      g2.position.y = -0.8 + Math.sin(t * 0.9) * 0.1;

      // Pulsing glow
      if (fillLight) fillLight.intensity = 2.2 + Math.sin(t * 1.8) * 0.8;

      // Orbit particles
      for (let i = 0; i < pCount; i++) {
        pa[i] += ps[i];
        pp[i * 3] = Math.cos(pa[i]) * pr[i];
        pp[i * 3 + 2] = Math.sin(pa[i]) * pr[i] * 0.35;
      }
      pts2.geometry.attributes.position.needsUpdate = true;
      pts2.rotation.y = t * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      el.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100%", minHeight: 460, cursor: "pointer", position: "relative" }}>
      <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(207,255,229,0.35)", whiteSpace: "nowrap", pointerEvents: "none" }}>
        Click to release capsules · Drag to rotate
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   INTERACTIVE PARTICLE CANVAS
══════════════════════════════════════════════ */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0, raf = 0;

    class Particle {
      x = Math.random() * W; y = Math.random() * H;
      vx = (Math.random() - 0.5) * 0.4; vy = (Math.random() - 0.5) * 0.4;
      r = Math.random() * 1.6 + 0.4;
      phase = Math.random() * Math.PI * 2;
      colorIndex = 0;
      hue = 150 + Math.random() * 30;
      update(t: number) {
        this.hue = 150 + Math.sin(t * 0.3 + this.phase) * 30 + Math.cos(t * 0.15) * 15;
        const dx = this.x - mouse.current.x, dy = this.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) { const force = (100 - dist) / 100 * 0.8; this.vx += dx / dist * force; this.vy += dy / dist * force; }
        this.vx *= 0.97; this.vy *= 0.97;
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
      }
      draw(ctx: CanvasRenderingContext2D, t: number) {
        const alpha = 0.3 + Math.sin(t * 0.8 + this.phase) * 0.15;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue},100%,80%,${alpha})`;
        ctx.fill();
      }
    }

    let particles: Particle[] = [];
    let t = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: 80 }, () => new Particle());
    };
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    });
    canvas.addEventListener("mouseleave", () => { mouse.current = { x: -9999, y: -9999 }; });

    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += 0.01;
      ctx.clearRect(0, 0, W, H);
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(207,255,229,${0.08 * (1 - d / 80)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      particles.forEach(p => { p.update(t); p.draw(ctx, t); });
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "auto" }} />;
}

/* ══════════════════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════════════════ */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => {
      const el = document.documentElement;
      setP(el.scrollTop / (el.scrollHeight - el.clientHeight));
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 300, background: "rgba(255,255,255,0.06)" }}>
      <div style={{ height: "100%", width: `${p * 100}%`, background: "linear-gradient(90deg,#CFFFE5,#5eead4)", transition: "width 0.1s", boxShadow: "0 0 8px rgba(207,255,229,0.6)" }} />
    </div>
  );
}



/* ══════════════════════════════════════════════
   REVEAL
══════════════════════════════════════════════ */
function Reveal({ children, delay = 0, style }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════
   TILT CARD
══════════════════════════════════════════════ */
function TiltCard({ children, style, p = "32px 28px", flip, flipBack, C }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = -((e.clientY - r.top) / r.height - 0.5) * 16;
    setTilt({ x, y });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }); }}
      onClick={() => flip && setFlipped(f => !f)}
      style={{
        perspective: 600, cursor: flip ? "pointer" : "default",
        ...style,
      }}>
      <div style={{
        position: "relative", padding: p,
        background: C.glassBg,
        backdropFilter: "blur(40px) saturate(140%)", WebkitBackdropFilter: "blur(40px) saturate(140%)",
        border: `1px solid ${hov ? C.borderHi : (C.border || "rgba(255,255,255,0.08)")}`,
        borderRadius: "36px 48px 36px 48px",
        boxShadow: hov ? `0 30px 60px ${C.shadowHover}, inset 0 1px 0 rgba(255,255,255,0.2)` : `0 8px 32px ${C.shadow}`,
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) ${hov ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)"}`,
        transition: "border .5s ease-out, box-shadow .5s ease-out, transform .4s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        overflow: "hidden",
      }}>
        {/* SVG hex accent bg */}
        <svg style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.04, pointerEvents: "none", transition: "transform 1s" }}
          width="120" height="120" viewBox="0 0 100 100">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke={C.mint} strokeWidth="1" />
          <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke={C.mint} strokeWidth="0.5" />
        </svg>

        {flip ? (
          <div style={{ position: "relative", transformStyle: "preserve-3d", transition: "transform 0.55s ease", transform: flipped ? "rotateY(180deg)" : "rotateY(0)" }}>
            <div style={{ backfaceVisibility: "hidden" }}>{children}</div>
            <div style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
              {flipBack}
            </div>
          </div>
        ) : children}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MARQUEE
══════════════════════════════════════════════ */
function Marquee({ C }: { C: typeof DARK }) {
  const items: [string, string][] = [
    ["🌿", "VEGAN FRIENDLY"], ["🚫", "NO PRESERVATIVES"], ["✨", "100% PURE"],
    ["🔬", "SCIENCE BACKED"], ["📅", "EST. 2008"], ["🏛", "FDA REGISTERED"],
    ["🧪", "3RD PARTY TESTED"], ["↩", "MONEY-BACK GUARANTEE"], ["🌱", "ORGANIC CERTIFIED"], ["0️⃣", "ZERO ADDITIVES"],
  ];
  const all = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: `1px solid ${C.border}`, background: C.overlayHover, backdropFilter: "blur(12px)", padding: "13px 0" }}>
      <style>{`@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}`}</style>
      <div style={{ display: "flex", animation: "mq 38s linear infinite", whiteSpace: "nowrap" }}>
        {all.map(([icon, item], i) => (
          <span key={i} style={{ fontSize: "0.6rem", letterSpacing: "0.22em", marginRight: 48, fontWeight: i % 3 === 0 ? 600 : 400, color: i % 3 === 0 ? C.mint : C.dim, cursor: "default", transition: "all .2s", display: "inline-flex", alignItems: "center", gap: 6 }}
            onMouseEnter={e => { const t = e.currentTarget as any; t.style.color = C.mint; t.style.textShadow = `0 0 12px ${C.mint}`; t.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const t = e.currentTarget as any; t.style.color = i % 3 === 0 ? C.mint : C.dim; t.style.textShadow = "none"; t.style.transform = "none"; }}
          ><span style={{ fontSize: "0.75rem" }}>{icon}</span>{item} <span style={{ opacity: 0.4, marginLeft: 4 }}>◆</span></span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function Nav({ scrolled, C, currentPage, onNavigate }: any) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Process", page: "process" },
    { label: "Gallery", page: "gallery" },
    { label: "Contact", page: "contact" },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 2, left: 0, right: 0, zIndex: 150,
        padding: scrolled ? "14px clamp(18px,5vw,56px)" : "22px clamp(18px,5vw,56px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || currentPage !== "home" ? `${C.bg}ee` : "transparent",
        backdropFilter: scrolled || currentPage !== "home" ? "blur(20px)" : "none",
        borderBottom: scrolled || currentPage !== "home" ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <button onClick={() => handleNav("home")} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer" }}>
          <span style={{ fontSize: "1.1rem" }}>🌿</span>
          <span style={{ fontFamily: "serif", fontSize: "1.3rem", color: C.white, letterSpacing: "0.12em" }}>
            Idingo<span style={{ color: C.mint }}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "clamp(14px,2.5vw,34px)" }} className="nav-links">
          {navItems.map(item => (
            <span key={item.label}
              onClick={() => handleNav(item.page)}
              style={{ fontSize: "0.76rem", letterSpacing: "0.07em", color: currentPage === item.page ? C.mint : C.dim, cursor: "pointer", transition: "color .2s", borderBottom: currentPage === item.page ? `1px solid ${C.mint}` : "1px solid transparent", paddingBottom: 2 }}
              onMouseEnter={e => (e.currentTarget as any).style.color = C.mint}
              onMouseLeave={e => (e.currentTarget as any).style.color = currentPage === item.page ? C.mint : C.dim}
            >{item.label}</span>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => {
            if (currentPage !== "home") {
              onNavigate("home");
              setTimeout(() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" }), 100);
            } else {
              document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
            }
          }} style={{
            background: C.overlay, border: `1px solid ${C.overlayBorder}`,
            color: C.white, borderRadius: 999, padding: "9px clamp(14px,2vw,24px)",
            fontSize: "0.76rem", cursor: "pointer", transition: "all .3s", whiteSpace: "nowrap",
          }} className="nav-links"
            onMouseEnter={e => { const t = e.currentTarget as any; t.style.background = C.mint; t.style.color = "#060d0a"; t.style.borderColor = C.mint; }}
            onMouseLeave={e => { const t = e.currentTarget as any; t.style.background = C.overlay; t.style.color = C.white; t.style.borderColor = C.overlayBorder; }}
          >Get Started →</button>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(o => !o)} className="hamburger-btn" style={{ display: "none", background: "none", border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 10px", cursor: "pointer", color: C.white, flexDirection: "column", gap: 4 }}>
            <style>{`@media(max-width:900px){.hamburger-btn{display:flex!important}.nav-links{display:none!important}}`}</style>
            <span style={{ width: 18, height: 1.5, background: C.white, display: "block", transition: "all .3s", transform: mobileOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
            <span style={{ width: 18, height: 1.5, background: C.white, display: "block", opacity: mobileOpen ? 0 : 1, transition: "all .3s" }} />
            <span style={{ width: 18, height: 1.5, background: C.white, display: "block", transition: "all .3s", transform: mobileOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 140, display: "flex" }}>
          <div onClick={() => setMobileOpen(false)} style={{ flex: 1, background: "rgba(6,13,10,0.7)", backdropFilter: "blur(8px)" }} />
          <div style={{ width: 260, background: C.surface, borderLeft: `1px solid ${C.border}`, padding: "90px 28px 40px", display: "flex", flexDirection: "column", gap: 8 }}>
            <button onClick={() => handleNav("home")} style={{ textAlign: "left", background: "none", border: "none", padding: "12px 0", color: currentPage === "home" ? C.mint : C.gray, fontSize: "1rem", cursor: "pointer", borderBottom: `1px solid ${C.border}` }}>🏠 Home</button>
            {navItems.map(item => (
              <button key={item.label} onClick={() => handleNav(item.page)} style={{ textAlign: "left", background: "none", border: "none", padding: "12px 0", color: currentPage === item.page ? C.mint : C.gray, fontSize: "1rem", cursor: "pointer", borderBottom: `1px solid ${C.border}` }}>{item.label}</button>
            ))}
            <button style={{ marginTop: 20, background: C.mint, color: "#060d0a", border: "none", borderRadius: 999, padding: "12px", fontWeight: 600, fontSize: "0.86rem", cursor: "pointer" }}>Get Started →</button>
          </div>
        </div>
      )}
    </>
  );
}

/* ══════════════════════════════════════════════
   LAB DATA
══════════════════════════════════════════════ */
const LAB: Record<string, any> = {
  energy: { icon: "⚡", title: "Energy Optimizer", color: "#CFFFE5", glow: "rgba(207,255,229,0.12)", desc: "Synergistic adaptogens and B-vitamins for sustained cellular energy without stimulant crashes.", ings: [{ n: "Ashwagandha KSM-66®", d: "Clinically proven to reduce cortisol by 28%", mg: "600mg" }, { n: "CoQ10 Ubiquinol", d: "8× bioavailability vs. standard form", mg: "200mg" }, { n: "Vitamin B12 Methyl", d: "Active form bypassing MTHFR variants", mg: "1000mcg" }, { n: "Rhodiola Rosea", d: "Standardised 3% rosavins for anti-fatigue", mg: "400mg" }], combo: "Best with Cellular Shield" },
  immunity: { icon: "🛡", title: "Cellular Shield", color: "#5eead4", glow: "rgba(94,234,212,0.12)", desc: "Potent antioxidant stack to fortify the body's natural defence systems at the cellular level.", ings: [{ n: "Liposomal Vitamin C", d: "2000% enhanced absorption vs standard", mg: "1000mg" }, { n: "Zinc Bisglycinate", d: "Optimal chelate form, gentle absorption", mg: "30mg" }, { n: "Organic Elderberry", d: "High anthocyanin content, triple extract", mg: "500mg" }, { n: "Vitamin D3+K2", d: "Synergistic pair for immune modulation", mg: "5000IU" }], combo: "Best with Deep Recovery" },
  focus: { icon: "🧠", title: "Cognitive Nootropic", color: "#c4b5fd", glow: "rgba(196,181,253,0.12)", desc: "Clinically-researched formula for enhanced concentration, memory and mental clarity during demanding work.", ings: [{ n: "Lion's Mane 8:1", d: "NGF synthesis support, neuroprotective", mg: "1000mg" }, { n: "L-Theanine+Caffeine", d: "4:1 synergy ratio for clean focus", mg: "200mg" }, { n: "Bacopa Monnieri", d: "Standardised 50% bacosides for memory", mg: "300mg" }, { n: "Alpha-GPC 50%", d: "Choline donor for acetylcholine synthesis", mg: "300mg" }], combo: "Best with Energy Optimizer" },
  sleep: { icon: "🌙", title: "Deep Recovery", color: "#fda4af", glow: "rgba(253,164,175,0.12)", desc: "Advanced sleep formula for deep restorative cycles. Zero dependency, zero morning grogginess.", ings: [{ n: "Magnesium Glycinate", d: "Superior absorption, no laxative effect", mg: "400mg" }, { n: "Ashwagandha Night", d: "Evening-optimised KSM-66 formulation", mg: "300mg" }, { n: "L-Theanine", d: "Promotes alpha brain wave relaxation", mg: "200mg" }, { n: "Micro-dose Melatonin", d: "Circadian rhythm support without overload", mg: "0.5mg" }], combo: "Best with Cognitive Nootropic" },
};

/* ══════════════════════════════════════════════
   FORMULA MODAL
══════════════════════════════════════════════ */
function FormulaModal({ formulaKey, onClose, C }: { formulaKey: string | null; onClose: () => void; C: typeof DARK }) {
  const [visible, setVisible] = useState(false);
  const [currentKey, setCurrentKey] = useState<string | null>(null);

  useEffect(() => {
    if (formulaKey) {
      setCurrentKey(formulaKey);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
      const t = setTimeout(() => setCurrentKey(null), 350);
      return () => clearTimeout(t);
    }
  }, [formulaKey]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!currentKey) return null;
  const f = LAB[currentKey];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 600,
        background: `rgba(3,8,5,${visible ? 0.85 : 0})`,
        backdropFilter: `blur(${visible ? 18 : 0}px)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(16px,4vw,48px)',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 780, maxHeight: '90vh', overflowY: 'auto',
          background: 'linear-gradient(160deg, rgba(15,30,22,0.97) 0%, rgba(8,18,13,0.99) 100%)',
          border: `1px solid ${f.color}33`,
          borderRadius: '40px',
          padding: 'clamp(28px,5vw,52px)',
          boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 60px ${f.glow}`,
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
          transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: '2.4rem', marginBottom: 10 }}>{f.icon}</div>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: f.color, fontWeight: 600, marginBottom: 6 }}>Full Formula Breakdown</p>
            <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: C.white, fontWeight: 400 }}>{f.title}</h2>
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', fontSize: '1.1rem',
            color: C.dim, display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, transition: 'all .2s',
          }}
            onMouseEnter={e => { (e.currentTarget as any).style.background = 'rgba(255,255,255,0.12)'; (e.currentTarget as any).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as any).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as any).style.color = C.dim; }}
          >×</button>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.92rem', color: C.gray, lineHeight: 1.8, fontWeight: 300, marginBottom: 32, paddingBottom: 28, borderBottom: `1px solid ${C.border}` }}>{f.desc}</p>

        {/* Ingredients */}
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: f.color, fontWeight: 600, marginBottom: 20 }}>Active Ingredients</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14, marginBottom: 32 }}>
          {f.ings.map((ing: any, i: number) => (
            <div key={i} style={{
              background: `linear-gradient(135deg, ${f.glow}, transparent)`,
              border: `1px solid ${f.color}22`,
              borderRadius: 18, padding: '20px 22px',
              transition: 'border-color .3s, box-shadow .3s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as any; el.style.borderColor = `${f.color}66`; el.style.boxShadow = `0 8px 24px ${f.glow}`; }}
              onMouseLeave={e => { const el = e.currentTarget as any; el.style.borderColor = `${f.color}22`; el.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <span style={{ fontSize: '0.88rem', color: C.white, fontWeight: 500 }}>{ing.n}</span>
                <span style={{ fontSize: '0.78rem', color: f.color, fontWeight: 600, flexShrink: 0, marginLeft: 10 }}>{ing.mg}</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: C.dim, lineHeight: 1.6, fontWeight: 300 }}>{ing.d}</p>
              {/* Potency bar */}
              <div style={{ marginTop: 14, height: 2, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }}>
                <div style={{ height: '100%', width: ['85%', '70%', '92%', '78%'][i % 4], borderRadius: 2, background: `linear-gradient(90deg, ${f.color}, ${f.color}66)`, transition: 'width 0.8s ease' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stack tip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 14, background: 'rgba(207,255,229,0.04)', border: '1px solid rgba(207,255,229,0.1)' }}>
          <span style={{ fontSize: '1.4rem' }}>🔗</span>
          <div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.mint, fontWeight: 600, marginBottom: 3 }}>Optimal Stack Pairing</p>
            <p style={{ fontSize: '0.84rem', color: C.gray, fontWeight: 300 }}>{f.combo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabSection({ C, onViewFormula }: { C: typeof DARK; onViewFormula: (key: string) => void }) {
  const [active, setActive] = useState("energy");
  const [fade, setFade] = useState(true);
  const d = LAB[active];
  const [hovIng, setHovIng] = useState<number | null>(null);

  const switchTo = (k: string) => { setFade(false); setTimeout(() => { setActive(k); setFade(true); }, 160); };

  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}`, background: `${C.surface}44` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 12, fontWeight: 600 }}>AI Health Assistant</p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400, lineHeight: 1.15, marginBottom: 48 }}>
            What does your body<br /><em style={{ fontStyle: "italic", color: C.mint }}>need today?</em>
          </h2>
        </Reveal>

        {/* Progressive glow behind panel */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 70% 50%, ${d.glow} 0%, transparent 65%)`, pointerEvents: "none", borderRadius: 24, transition: "background 0.4s" }} />

          <div style={{ display: "grid", gridTemplateColumns: "minmax(180px,260px) 1fr", gap: 14, position: "relative", zIndex: 1 }} className="lab-grid">
            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {Object.entries(LAB).map(([k, v]) => (
                <button key={k} onClick={() => switchTo(k)} style={{
                  textAlign: "left", padding: "18px 24px", borderRadius: "24px",
                  border: `1px solid ${active === k ? v.color : C.border}`,
                  background: active === k ? `${v.glow}` : `${C.surface}66`,
                  color: active === k ? C.white : C.dim,
                  cursor: "pointer", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", display: "flex", justifyContent: "space-between", alignItems: "center",
                  boxShadow: active === k ? `0 12px 32px ${v.color}22` : "none",
                  transform: active === k ? "scale(1.02)" : "scale(1)",
                }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 500 }}>{v.icon} {v.title}</span>
                  {active === k && <span style={{ color: v.color }}>→</span>}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div style={{
              background: "linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))",
              backdropFilter: "blur(32px) saturate(150%)",
              border: `1px solid ${C.border}`, borderRadius: "40px", padding: "clamp(28px,5vw,56px)",
              opacity: fade ? 1 : 0, transition: "opacity .25s ease-out", overflow: "hidden",
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(18px,3vw,36px)" }} className="lab-inner">
                <div>
                  <div style={{ fontSize: "2rem", marginBottom: 18 }}>{d.icon}</div>
                  <h3 style={{ fontFamily: "serif", fontSize: "clamp(1.2rem,2vw,1.7rem)", color: C.white, marginBottom: 12, fontWeight: 400 }}>{d.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: C.gray, lineHeight: 1.75, fontWeight: 300, marginBottom: 24 }}>{d.desc}</p>
                  <div style={{ padding: "12px 16px", borderRadius: 10, background: `${d.glow}`, border: `1px solid ${d.color}33`, marginBottom: 24 }}>
                    <p style={{ fontSize: "0.7rem", color: d.color, fontWeight: 600, letterSpacing: "0.1em" }}>OPTIMAL STACK</p>
                    <p style={{ fontSize: "0.82rem", color: C.gray, marginTop: 4 }}>{d.combo}</p>
                  </div>
                  <button style={{
                    background: C.white, color: "#060d0a", border: "none",
                    padding: "12px clamp(18px,2vw,28px)", borderRadius: 999,
                    fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", transition: "all .25s",
                  }}
                    onMouseEnter={e => { const t = e.currentTarget as any; t.style.background = C.mint; t.style.boxShadow = `0 0 24px ${d.glow}`; t.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { const t = e.currentTarget as any; t.style.background = C.white; t.style.boxShadow = 'none'; t.style.transform = 'translateY(0)'; }}
                    onClick={() => onViewFormula(active)}
                  >View Formula →</button>
                </div>
                <div style={{ background: "rgba(0,0,0,0.28)", borderRadius: 14, padding: "22px 18px", border: `1px solid ${C.border}` }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: d.color, marginBottom: 16, fontWeight: 600 }}>Key Ingredients</p>
                  {d.ings.map((ing: any, i: number) => (
                    <div key={i} style={{ position: "relative", marginBottom: 12, paddingBottom: 12, borderBottom: i < d.ings.length - 1 ? `1px solid ${C.border}` : "none" }}
                      onMouseEnter={() => setHovIng(i)}
                      onMouseLeave={() => setHovIng(null)}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ color: C.mint, fontSize: "0.68rem", marginTop: 2, flexShrink: 0 }}>✓</span>
                          <span style={{ fontSize: "0.82rem", color: hovIng === i ? C.white : C.gray, fontWeight: 300, transition: "color .2s" }}>{ing.n}</span>
                        </div>
                        <span style={{ fontSize: "0.68rem", color: d.color, flexShrink: 0, marginLeft: 8 }}>{ing.mg}</span>
                      </div>
                      {/* Tooltip */}
                      {hovIng === i && (
                        <div style={{ position: "absolute", left: 0, top: "100%", zIndex: 10, background: C.surface, border: `1px solid ${d.color}44`, borderRadius: 8, padding: "8px 12px", fontSize: "0.75rem", color: C.gray, lineHeight: 1.5, marginTop: 4, whiteSpace: "normal", maxWidth: 220, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                          {ing.d}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CAPSULE SECTION
══════════════════════════════════════════════ */
const CAPSULE_FORMULAS: Record<string, { label: string; color: string; glow: string; icon: string; ingredients: { name: string; emoji: string; benefit: string; detail: string; angle: number; radius: number }[] }> = {
  energy: {
    label: 'Energy Optimizer', color: '#CFFFE5', glow: 'rgba(207,255,229,0.18)', icon: '⚡',
    ingredients: [
      { name: 'Ashwagandha', emoji: '🌿', benefit: 'Cortisol −28%', detail: 'KSM-66® extract. Reduces stress hormones, boosting energy availability.', angle: 0, radius: 160 },
      { name: 'CoQ10', emoji: '⚡', benefit: '8× bioavailability', detail: 'Ubiquinol form. Powers mitochondria — the cell\'s energy factories.', angle: 72, radius: 155 },
      { name: 'B12 Methyl', emoji: '💊', benefit: 'Active form', detail: 'Bypasses MTHFR variants. Directly fuels neurological energy metabolism.', angle: 144, radius: 165 },
      { name: 'Rhodiola', emoji: '🏔', benefit: 'Anti-fatigue', detail: '3% rosavins standardised. Proven to reduce mental and physical fatigue.', angle: 216, radius: 155 },
      { name: 'Magnesium', emoji: '🔋', benefit: 'ATP synthesis', detail: 'Bisglycinate form. Essential cofactor for over 300 enzymatic reactions.', angle: 288, radius: 162 },
    ]
  },
  immunity: {
    label: 'Cellular Shield', color: '#5eead4', glow: 'rgba(94,234,212,0.18)', icon: '🛡',
    ingredients: [
      { name: 'Vitamin C', emoji: '🍋', benefit: '2000% absorption', detail: 'Liposomal form bypasses gut limitations for maximum cellular uptake.', angle: 0, radius: 160 },
      { name: 'Zinc', emoji: '🔵', benefit: 'Chelate form', detail: 'Bisglycinate chelate — gentlest, highest-absorption form of zinc.', angle: 72, radius: 155 },
      { name: 'Elderberry', emoji: '🫐', benefit: 'Triple extract', detail: 'High anthocyanin content. Powerful antioxidant and immune activator.', angle: 144, radius: 165 },
      { name: 'D3+K2', emoji: '☀️', benefit: 'Immune modulation', detail: 'Synergistic pair. D3 activates immune cells; K2 guides calcium metabolism.', angle: 216, radius: 155 },
      { name: 'Glutathione', emoji: '🛡', benefit: 'Master antioxidant', detail: 'Reduced form. The body\'s primary cellular defence molecule.', angle: 288, radius: 162 },
    ]
  },
  focus: {
    label: 'Cognitive Nootropic', color: '#c4b5fd', glow: 'rgba(196,181,253,0.18)', icon: '🧠',
    ingredients: [
      { name: "Lion's Mane", emoji: '🍄', benefit: 'NGF synthesis', detail: '8:1 extract. Stimulates nerve growth factor for neuroplasticity and memory.', angle: 0, radius: 160 },
      { name: 'L-Theanine', emoji: '🍵', benefit: 'Alpha waves', detail: '4:1 ratio with caffeine. Produces calm, focused alertness without jitters.', angle: 72, radius: 155 },
      { name: 'Bacopa', emoji: '🌱', benefit: 'Memory recall', detail: '50% bacosides. Proven to enhance memory recall and reduce cognitive anxiety.', angle: 144, radius: 165 },
      { name: 'Alpha-GPC', emoji: '🧠', benefit: 'Acetylcholine', detail: 'Choline donor. Directly fuels acetylcholine — the learning neurotransmitter.', angle: 216, radius: 155 },
      { name: 'Caffeine', emoji: '☕', benefit: 'Clean energy', detail: 'Paired with L-Theanine for smooth, crash-free focus and reaction time.', angle: 288, radius: 162 },
    ]
  },
  sleep: {
    label: 'Deep Recovery', color: '#fda4af', glow: 'rgba(253,164,175,0.18)', icon: '🌙',
    ingredients: [
      { name: 'Mg Glycinate', emoji: '💤', benefit: 'Deep sleep', detail: 'Glycinate form crosses blood-brain barrier. Activates GABA — the calm switch.', angle: 0, radius: 160 },
      { name: 'Ashwagandha', emoji: '🌙', benefit: 'Evening formula', detail: 'Night-optimised KSM-66. Lowers cortisol for faster sleep onset.', angle: 72, radius: 155 },
      { name: 'L-Theanine', emoji: '🍵', benefit: 'Alpha relaxation', detail: 'Promotes alpha brain waves — the state between wakefulness and sleep.', angle: 144, radius: 165 },
      { name: 'Melatonin', emoji: '🌕', benefit: 'Circadian sync', detail: '0.5mg micro-dose. Syncs your body clock without next-day grogginess.', angle: 216, radius: 155 },
      { name: 'GABA', emoji: '🧘', benefit: 'Neural calm', detail: 'Primary inhibitory neurotransmitter. Quiets neural hyperactivity for rest.', angle: 288, radius: 162 },
    ]
  },
};

function CapsuleSection({ C }: { C: typeof DARK }) {
  const [activeFormula, setActiveFormula] = useState('energy');
  const [hoveredIng, setHoveredIng] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const f = CAPSULE_FORMULAS[activeFormula];

  const switchFormula = (key: string) => {
    setHoveredIng(null);
    setAnimKey(k => k + 1);
    setActiveFormula(key);
  };

  const activeIng = hoveredIng !== null ? f.ingredients[hoveredIng] : null;

  return (
    <section style={{ padding: 'clamp(60px,8vw,100px) clamp(18px,5vw,56px)', borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vw', height: '60vw', background: `radial-gradient(circle, ${f.glow} 0%, transparent 65%)`, pointerEvents: 'none', transition: 'background 0.6s', borderRadius: '50%' }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: C.mint, marginBottom: 12, fontWeight: 600 }}>Inside Every Capsule</p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.8rem,4vw,3.2rem)', color: C.white, fontWeight: 400 }}>Precision <em style={{ fontStyle: 'italic', color: f.color }}>Formulated</em></h2>
        </Reveal>

        {/* Formula tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
          {Object.entries(CAPSULE_FORMULAS).map(([key, v]) => (
            <button key={key} onClick={() => switchFormula(key)} style={{
              padding: '8px 20px', borderRadius: 999, cursor: 'pointer', fontSize: '0.78rem', fontWeight: 500,
              border: `1px solid ${activeFormula === key ? v.color : C.border}`,
              background: activeFormula === key ? `${v.glow}` : 'transparent',
              color: activeFormula === key ? v.color : C.dim,
              transition: 'all 0.3s',
            }}>{v.icon} {v.label}</button>
          ))}
        </div>

        {/* Main layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }} className="hero-grid">
          {/* Left — Capsule + orbiting chips */}
          <div style={{ position: 'relative', height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <style>{`
              @keyframes orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
              @keyframes orbit-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
              @keyframes capsule-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
              @keyframes ing-pop { 0% { transform: scale(0.5) rotate(-10deg); opacity: 0; } 100% { transform: scale(1) rotate(0deg); opacity: 1; } }
              .ing-chip { animation: ing-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }
            `}</style>

            {/* Outer ring */}
            <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', border: `1px solid ${f.color}18`, animation: 'orbit-cw 40s linear infinite' }} />
            <div style={{ position: 'absolute', width: 310, height: 310, borderRadius: '50%', border: `1px dashed ${f.color}10`, animation: 'orbit-ccw 28s linear infinite' }} />

            {/* Capsule SVG */}
            <div style={{ position: 'relative', zIndex: 10, animation: 'capsule-float 4s ease-in-out infinite' }}>
              <svg width="90" height="180" viewBox="0 0 90 180" fill="none">
                {/* Top half */}
                <path d="M8,90 Q8,8 45,8 Q82,8 82,90 Z" fill={`${f.color}22`} stroke={f.color} strokeWidth="1" />
                {/* Bottom half */}
                <path d="M8,90 Q8,172 45,172 Q82,172 82,90 Z" fill="rgba(255,255,255,0.04)" stroke={`${f.color}55`} strokeWidth="1" />
                {/* Shine */}
                <path d="M18,44 Q22,22 38,18" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
                {/* Midline */}
                <line x1="8" y1="90" x2="82" y2="90" stroke={f.color} strokeWidth="0.8" strokeOpacity="0.6" />
                {/* Formula letter */}
                <text x="45" y="78" textAnchor="middle" fill={f.color} fontSize="11" fontFamily="serif" fontWeight="600" letterSpacing="2">ID</text>
                <text x="45" y="110" textAnchor="middle" fill={`${f.color}88`} fontSize="7" fontFamily="sans-serif">FORMULA</text>
              </svg>
              {/* Core glow */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 60, height: 60, borderRadius: '50%', background: f.color, filter: 'blur(28px)', opacity: 0.2, pointerEvents: 'none' }} />
            </div>

            {/* Orbiting ingredient chips */}
            {f.ingredients.map((ing, i) => {
              const rad = (ing.angle * Math.PI) / 180;
              const x = Math.cos(rad) * ing.radius;
              const y = Math.sin(rad) * ing.radius;
              const isHov = hoveredIng === i;
              return (
                <div
                  key={`${animKey}-${i}`}
                  className="ing-chip"
                  onMouseEnter={() => setHoveredIng(i)}
                  onMouseLeave={() => setHoveredIng(null)}
                  style={{
                    animationDelay: `${i * 0.07}s`,
                    position: 'absolute',
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(${isHov ? 1.18 : 1})`,
                    transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s',
                    background: isHov ? `${f.color}22` : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isHov ? f.color : `${f.color}40`}`,
                    borderRadius: 999,
                    padding: '6px 13px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    zIndex: isHov ? 20 : 5,
                    boxShadow: isHov ? `0 0 20px ${f.glow}, 0 0 8px ${f.color}44` : '0 2px 8px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span style={{ fontSize: '0.88rem' }}>{ing.emoji}</span>
                  <span style={{ marginLeft: 5, fontSize: '0.68rem', color: isHov ? f.color : C.dim, fontWeight: isHov ? 600 : 400, transition: 'color 0.2s' }}>{ing.name}</span>
                </div>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div style={{ minHeight: 340 }}>
            {activeIng ? (
              <div key={hoveredIng} style={{ opacity: 1, transform: 'translateY(0)', animation: 'ing-pop 0.3s ease forwards' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>{activeIng.emoji}</div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: f.color, fontWeight: 600, marginBottom: 10 }}>Active Ingredient</p>
                <h3 style={{ fontFamily: 'serif', fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', color: C.white, fontWeight: 400, marginBottom: 8 }}>{activeIng.name}</h3>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${f.glow}`, border: `1px solid ${f.color}33`, borderRadius: 999, padding: '4px 14px', marginBottom: 20 }}>
                  <span style={{ fontSize: '0.68rem', color: f.color, fontWeight: 600 }}>{activeIng.benefit}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: C.gray, lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>{activeIng.detail}</p>
                {/* Potency bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: '0.65rem', color: C.dim, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Bioavailability</span>
                    <span style={{ fontSize: '0.65rem', color: f.color, fontWeight: 600 }}>High</span>
                  </div>
                  <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                    <div style={{ height: '100%', width: ['88%', '75%', '92%', '82%', '79%'][hoveredIng ?? 0 % 5], background: `linear-gradient(90deg,${f.color},${f.color}66)`, borderRadius: 3, boxShadow: `0 0 10px ${f.color}55`, transition: 'width 0.6s 0.1s ease' }} />
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', gap: 20 }}>
                <div style={{ fontSize: '3.5rem', opacity: 0.3 }}>👆</div>
                <p style={{ fontFamily: 'serif', fontSize: 'clamp(1.2rem,2vw,1.7rem)', color: C.dim, fontWeight: 400, lineHeight: 1.4 }}>Hover an ingredient<br />to explore its role</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', marginTop: 8 }}>
                  {f.ingredients.map((ing, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.4 + i * 0.04 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: f.color, flexShrink: 0, display: 'inline-block' }} />
                      <span style={{ fontSize: '0.8rem', color: C.dim }}>{ing.emoji} {ing.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   QUIZ
══════════════════════════════════════════════ */
const QUIZ_STEPS = [
  { q: "What's your main health goal?", opts: [{ label: "⚡ Boost energy & stamina", key: "energy" }, { label: "🛡 Strengthen immunity", key: "immunity" }, { label: "🧠 Sharpen focus & memory", key: "focus" }, { label: "🌙 Improve sleep & recovery", key: "sleep" }] },
  { q: "How would you describe your current lifestyle?", opts: [{ label: "🏃 Very active — gym or sport daily", key: "energy" }, { label: "💼 Demanding work schedule, often stressed", key: "focus" }, { label: "🍂 Seasonal dips in energy or mood", key: "immunity" }, { label: "😴 Poor sleep or frequent fatigue", key: "sleep" }] },
  { q: "Which matters most to you?", opts: [{ label: "⚗️ Highest bioavailability forms", key: "energy" }, { label: "🌿 100% natural, zero additives", key: "immunity" }, { label: "🔬 Clinically proven ingredients", key: "focus" }, { label: "💤 Zero dependency, zero grogginess", key: "sleep" }] },
];
const QUIZ_RESULTS: Record<string, { title: string; icon: string; color: string; desc: string }> = {
  energy: { title: "Energy Optimizer", icon: "⚡", color: "#CFFFE5", desc: "Your lifestyle calls for sustained, crash-free energy. This formula combines adaptogens and mitochondrial support for all-day performance." },
  immunity: { title: "Cellular Shield", icon: "🛡", color: "#5eead4", desc: "Your body needs a fortified defence. This stack delivers the highest-absorption forms of key immune modulators." },
  focus: { title: "Cognitive Nootropic", icon: "🧠", color: "#c4b5fd", desc: "Your focus and memory demand the best. This nootropic stack is built for peak mental performance under pressure." },
  sleep: { title: "Deep Recovery", icon: "🌙", color: "#fda4af", desc: "Rest is your missing piece. This zero-dependency sleep formula restores deep sleep cycles without morning fog." },
};

function QuizSection({ C, onViewFormula }: { C: typeof DARK; onViewFormula?: (key: string) => void }) {
  const [step, setStep] = useState(0);
  const [votes, setVotes] = useState<Record<string, number>>({ energy: 0, immunity: 0, focus: 0, sleep: 0 });
  const [done, setDone] = useState(false);
  const [animOut, setAnimOut] = useState(false);

  const pick = (key: string) => {
    const next = { ...votes, [key]: votes[key] + 1 };
    setVotes(next);
    if (step < QUIZ_STEPS.length - 1) {
      setAnimOut(true);
      setTimeout(() => { setStep(s => s + 1); setAnimOut(false); }, 280);
    } else {
      setDone(true);
    }
  };

  const result = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
  const res = QUIZ_RESULTS[result];

  const reset = () => { setStep(0); setVotes({ energy: 0, immunity: 0, focus: 0, sleep: 0 }); setDone(false); setAnimOut(false); };

  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}`, background: `${C.surface}33` }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 12, fontWeight: 600 }}>Find Your Formula</p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400 }}>Which formula is <em style={{ fontStyle: "italic", color: C.mint }}>right for you?</em></h2>
        </Reveal>

        {!done ? (
          <div style={{ opacity: animOut ? 0 : 1, transform: animOut ? "translateY(16px)" : "translateY(0)", transition: "all 0.28s ease" }}>
            {/* Progress dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
              {QUIZ_STEPS.map((_, i) => (
                <div key={i} style={{ width: i === step ? 24 : 8, height: 8, borderRadius: 999, background: i === step ? C.mint : C.border, transition: "all 0.3s" }} />
              ))}
            </div>
            <p style={{ fontFamily: "serif", fontSize: "clamp(1.1rem,2vw,1.5rem)", color: C.white, textAlign: "center", marginBottom: 28, fontWeight: 400 }}>{QUIZ_STEPS[step].q}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {QUIZ_STEPS[step].opts.map(opt => (
                <button key={opt.key} onClick={() => pick(opt.key)} style={{
                  padding: "18px 22px", borderRadius: 20, cursor: "pointer", textAlign: "left",
                  background: C.overlay, border: `1px solid ${C.border}`, color: C.gray,
                  fontSize: "0.88rem", fontWeight: 400, transition: "all 0.25s", lineHeight: 1.4,
                }}
                  onMouseEnter={e => { const t = e.currentTarget as any; t.style.background = "rgba(207,255,229,0.08)"; t.style.borderColor = C.mint; t.style.color = C.white; t.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { const t = e.currentTarget as any; t.style.background = C.overlay; t.style.borderColor = C.border; t.style.color = C.gray; t.style.transform = "none"; }}
                >{opt.label}</button>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: "0.68rem", color: C.dim, marginTop: 20 }}>Step {step + 1} of {QUIZ_STEPS.length}</p>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>{res.icon}</div>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: res.color, fontWeight: 600, marginBottom: 10 }}>Your Recommendation</p>
            <h3 style={{ fontFamily: "serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.white, fontWeight: 400, marginBottom: 16 }}>{res.title}</h3>
            <p style={{ fontSize: "0.92rem", color: C.gray, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 28px", fontWeight: 300 }}>{res.desc}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <button onClick={() => onViewFormula?.(result)} style={{ background: res.color, color: "#060d0a", border: "none", borderRadius: 999, padding: "12px 28px", fontWeight: 600, fontSize: "0.84rem", cursor: "pointer" }}>View Formula →</button>
              <button onClick={reset} style={{ background: "transparent", border: `1px solid ${C.border}`, color: C.dim, borderRadius: 999, padding: "12px 28px", fontSize: "0.84rem", cursor: "pointer" }}>Retake Quiz</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   RESULTS / BEFORE-AFTER
══════════════════════════════════════════════ */
const RESULTS_DATA = [
  { label: "Energy Levels", before: 34, after: 91, color: "#CFFFE5", timeframe: "After 4 weeks" },
  { label: "Focus & Clarity", before: 41, after: 88, color: "#c4b5fd", timeframe: "After 4 weeks" },
  { label: "Sleep Quality", before: 28, after: 85, color: "#fda4af", timeframe: "After 2 weeks" },
  { label: "Immune Resilience", before: 45, after: 87, color: "#5eead4", timeframe: "After 6 weeks" },
];

function ResultsSection({ C }: { C: typeof DARK }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); io.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 12, fontWeight: 600 }}>Proven Results</p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400 }}>Real outcomes, <em style={{ fontStyle: "italic", color: C.mint }}>measurable change</em></h2>
          <p style={{ fontSize: "0.88rem", color: C.dim, marginTop: 14, fontWeight: 300 }}>Based on self-reported data from 1,240 Idingo customers over 6 weeks.</p>
        </Reveal>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px,4vw,40px)" }} className="hero-grid">
          {RESULTS_DATA.map((r, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`, borderRadius: 24, padding: "clamp(20px,3vw,32px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
                <span style={{ fontSize: "0.88rem", color: C.white, fontWeight: 500 }}>{r.label}</span>
                <span style={{ fontSize: "0.62rem", color: C.dim, letterSpacing: "0.1em" }}>{r.timeframe}</span>
              </div>
              {/* Before bar */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.62rem", color: C.dim, letterSpacing: "0.1em", textTransform: "uppercase" }}>Before</span>
                  <span style={{ fontSize: "0.72rem", color: C.dim }}>{r.before}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 6 }}>
                  <div style={{ height: "100%", width: animated ? `${r.before}%` : "0%", background: "rgba(255,255,255,0.18)", borderRadius: 6, transition: `width 1.2s cubic-bezier(.25,.46,.45,.94) ${i * 0.12}s` }} />
                </div>
              </div>
              {/* After bar */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.62rem", color: r.color, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>After</span>
                  <span style={{ fontSize: "0.72rem", color: r.color, fontWeight: 600 }}>{r.after}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 6 }}>
                  <div style={{ height: "100%", width: animated ? `${r.after}%` : "0%", background: `linear-gradient(90deg, ${r.color}, ${r.color}88)`, borderRadius: 6, boxShadow: `0 0 12px ${r.color}44`, transition: `width 1.4s cubic-bezier(.25,.46,.45,.94) ${i * 0.12 + 0.2}s` }} />
                </div>
              </div>
              {/* Delta badge */}
              <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 5, background: `${r.color}12`, border: `1px solid ${r.color}30`, borderRadius: 999, padding: "3px 10px" }}>
                <span style={{ fontSize: "0.7rem", color: r.color, fontWeight: 600 }}>+{r.after - r.before}% improvement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════ */
const FAQ_ITEMS = [
  { q: "Are Idingo products vegan and allergen-free?", a: "Yes. Every formula is 100% vegan, gluten-free, and free from common allergens. We use no artificial colours, flavours, or preservatives. Our capsules are made from plant-derived HPMC." },
  { q: "Where are the ingredients sourced?", a: "We source exclusively from GMP-certified suppliers with full traceability documentation. Patented extracts like KSM-66® Ashwagandha and Ubiquinol CoQ10 are sourced directly from their original manufacturers." },
  { q: "Are there side effects?", a: "When taken as directed, our formulas are well-tolerated by the vast majority of users. All ingredients are at clinically-studied doses. We recommend consulting your healthcare provider if you are pregnant, nursing, or on medication." },
  { q: "How long before I notice results?", a: "Many users report improvements in energy and sleep within 7–14 days. For cognitive and immune benefits, 4–6 weeks of consistent use is typically recommended, consistent with clinical research timelines." },
  { q: "Can I stack multiple formulas?", a: "Yes — we design our formulas with synergistic stacking in mind. Each formula card shows an Optimal Stack partner. Our most popular combination is Energy Optimizer + Cognitive Nootropic." },
  { q: "What is your money-back policy?", a: "We offer a no-questions-asked 60-day money-back guarantee on every order. If you don't notice a difference, simply contact our team and we will process a full refund — no return required." },
];

function FAQSection({ C }: { C: typeof DARK }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}`, background: `${C.surface}22` }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 12, fontWeight: 600 }}>Common Questions</p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400 }}>Frequently Asked <em style={{ fontStyle: "italic", color: C.mint }}>Questions</em></h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} onClick={() => setOpen(isOpen ? null : i)} style={{ background: isOpen ? "rgba(207,255,229,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${isOpen ? "rgba(207,255,229,0.2)" : C.border}`, borderRadius: 18, padding: "0", cursor: "pointer", transition: "all 0.3s", overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px" }}>
                  <span style={{ fontSize: "0.9rem", color: isOpen ? C.white : C.gray, fontWeight: isOpen ? 500 : 400, transition: "color .3s", paddingRight: 16 }}>{item.q}</span>
                  <span style={{ color: C.mint, fontSize: "1.1rem", flexShrink: 0, transition: "transform 0.35s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </div>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                  <p style={{ fontSize: "0.86rem", color: C.dim, lineHeight: 1.8, fontWeight: 300, padding: "0 22px 20px" }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   COMPARISON TABLE
══════════════════════════════════════════════ */
function CompareSection({ C }: { C: typeof DARK }) {
  const rows = [
    { label: "Clinically-studied doses", idingo: true, typical: false },
    { label: "Patented extract forms", idingo: true, typical: false },
    { label: "100% vegan capsules", idingo: true, typical: false },
    { label: "Zero artificial additives", idingo: true, typical: false },
    { label: "Full CoA per batch", idingo: true, typical: false },
    { label: "3rd-party lab verified", idingo: true, typical: false },
    { label: "60-day money-back", idingo: true, typical: false },
    { label: "Proprietary blends used", idingo: false, typical: true },
  ];
  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 12, fontWeight: 600 }}>Why Idingo</p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400 }}>Idingo vs <em style={{ fontStyle: "italic", color: "#fda4af" }}>Typical Supplements</em></h2>
        </Reveal>
        <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`, borderRadius: 24, overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 160px", background: "rgba(255,255,255,0.04)", padding: "14px 24px", borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.dim }}>Feature</span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: C.mint, textAlign: "center" }}>🌿 Idingo</span>
            <span style={{ fontSize: "0.72rem", fontWeight: 500, color: C.dim, textAlign: "center" }}>Generic Brand</span>
          </div>
          {rows.map((row, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 160px", padding: "14px 24px", borderBottom: i < rows.length - 1 ? `1px solid ${C.border}` : "none", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as any).style.background = "rgba(255,255,255,0.02)"}
                onMouseLeave={e => (e.currentTarget as any).style.background = "transparent"}
              >
                <span style={{ fontSize: "0.84rem", color: C.gray, fontWeight: 300 }}>{row.label}</span>
                <div style={{ textAlign: "center" }}>
                  {row.idingo
                    ? <span style={{ color: C.mint, fontSize: "1rem", filter: "drop-shadow(0 0 6px rgba(207,255,229,0.5))" }}>✓</span>
                    : <span style={{ color: "#fda4af", fontSize: "1rem", opacity: 0.7 }}>✗</span>}
                </div>
                <div style={{ textAlign: "center" }}>
                  {row.typical
                    ? <span style={{ color: C.mint, fontSize: "1rem" }}>✓</span>
                    : <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1rem" }}>✗</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   BENTO
══════════════════════════════════════════════ */
function BentoGrid({ C }: { C: typeof DARK }) {
  const bigFlipBack = (
    <>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CFFFE5", fontWeight: 600 }}>By The Numbers</p>
      {[["12,000+", "Studies reviewed"], ["340+", "Compounds tested"], ["18", "Formulas active"], ["99.7%", "Batch pass rate"]].map(([n, l]) => (
        <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 8 }}>
          <span style={{ fontFamily: "serif", fontSize: "1.6rem", color: "#CFFFE5" }}>{n}</span>
          <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{l}</span>
        </div>
      ))}
      <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Click to flip back</p>
    </>
  );

  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.mint, marginBottom: 12, fontWeight: 600 }}>Our Standard</p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400 }}>The Idingo <em style={{ fontStyle: "italic" }}>Difference</em></h2>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Desktop Fluid Organic Grid */}
          <div className="bento-desktop" style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr", gridTemplateRows: "auto auto", gap: 24 }}>
            <TiltCard style={{ gridColumn: "span 2", gridRow: "span 2" }} p="56px 48px" flip flipBack={bigFlipBack} C={C}>
              <div style={{ fontSize: "1.8rem", marginBottom: 22 }}>🔬</div>
              <h3 style={{ fontFamily: "serif", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: C.white, marginBottom: 14, fontWeight: 400, lineHeight: 1.2 }}>Research &<br />Development</h3>
              <p style={{ fontSize: "0.9rem", color: C.gray, lineHeight: 1.8, fontWeight: 300, maxWidth: 380 }}>We review thousands of peer-reviewed studies to select only compounds with clinically demonstrated efficacy. No ingredient enters our formulas without data to back it.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
                {["Peer-reviewed", "Clinical Trials", "Bioavailability-optimised"].map(t => (
                  <span key={t} style={{ fontSize: "0.62rem", border: `1px solid ${C.borderHi}`, color: C.mint, borderRadius: 999, padding: "4px 12px" }}>{t}</span>
                ))}
              </div>
              <p style={{ fontSize: "0.68rem", color: C.dim, marginTop: 20 }}>Click card to see stats →</p>
            </TiltCard>

            <TiltCard p="30px 26px" C={C}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ color: C.white, fontSize: "0.9rem", fontWeight: 500 }}>Safety & Efficacy</span>
                <span style={{ color: C.teal }}>🛡</span>
              </div>
              <div style={{ fontFamily: "serif", fontSize: "3rem", color: C.white, lineHeight: 1 }}>100<span style={{ color: C.mint, fontSize: "1.6rem" }}>%</span></div>
              <p style={{ fontSize: "0.75rem", color: C.dim, marginTop: 8, fontWeight: 300 }}>External testing every batch</p>
            </TiltCard>

            <TiltCard p="30px 26px" style={{ position: "relative" }} C={C}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ fontSize: "1.3rem" }}>↩</div>
                <div style={{ display: "flex", gap: 2 }}>{[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: "#CFFFE5", fontSize: "0.7rem" }}>★</span>)}</div>
              </div>
              <h3 style={{ color: C.white, fontSize: "0.9rem", fontWeight: 500, marginBottom: 6 }}>Full Guarantee</h3>
              <p style={{ fontSize: "0.75rem", color: C.dim, fontWeight: 300, lineHeight: 1.6, marginBottom: 10 }}>Money-back, no questions asked on every formula.</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 999, background: "rgba(207,255,229,0.06)", border: "1px solid rgba(207,255,229,0.12)", width: "fit-content" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#CFFFE5", display: "inline-block" }} />
                <span style={{ fontSize: "0.6rem", color: C.mint, letterSpacing: "0.08em" }}>12,400+ satisfied customers</span>
              </div>
            </TiltCard>

            <TiltCard p="30px 26px" C={C}>
              <div style={{ fontFamily: "serif", fontSize: "2.8rem", color: C.mint, lineHeight: 1 }}>0<span style={{ fontSize: "1.3rem" }}>%</span></div>
              <p style={{ fontSize: "0.75rem", color: C.dim, marginTop: 8, fontWeight: 300 }}>Additives · Preservatives · Hormones</p>
              <h3 style={{ color: C.white, fontSize: "0.88rem", fontWeight: 500, marginTop: 10 }}>🌿 Pure Formula</h3>
            </TiltCard>

            <TiltCard p="30px 26px" C={C}>
              <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>📋</div>
              <h3 style={{ color: C.white, fontSize: "0.9rem", fontWeight: 500, marginBottom: 8 }}>Transparency</h3>
              <p style={{ fontSize: "0.75rem", color: C.dim, fontWeight: 300, lineHeight: 1.65 }}>CoA available for every single batch on request.</p>
            </TiltCard>
          </div>

          {/* Mobile stacked */}
          <div className="bento-mobile" style={{ display: "none", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "🔬", title: "Research & Development", desc: "We review thousands of peer-reviewed studies. Every ingredient is backed by data." },
              { icon: "🛡", title: "100% Safety Tested", desc: "External third-party testing on every single batch we produce." },
              { icon: "↩", title: "Full Guarantee", desc: "Money-back, no questions asked on every formula." },
              { icon: "🌿", title: "0% Additives", desc: "Zero preservatives, hormones or additives. Ever." },
              { icon: "📋", title: "Transparent", desc: "Certificate of Analysis available for every batch on request." },
            ].map(c => (
              <TiltCard key={c.title} p="28px 24px" C={C}>
                <div style={{ fontSize: "1.4rem", marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ color: C.white, fontSize: "1rem", fontWeight: 500, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: "0.84rem", color: C.dim, fontWeight: 300, lineHeight: 1.65 }}>{c.desc}</p>
              </TiltCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   TIMELINE with animated connector
══════════════════════════════════════════════ */
function Timeline({ C }: { C: typeof DARK }) {
  const [lineW, setLineW] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const steps = [
    { n: "01", icon: "🔬", title: "Research", desc: "Sourcing only compounds backed by robust peer-reviewed data.", detail: "Our science team reviews 100+ studies per ingredient. Only compounds with at least 3 randomized controlled trials make the cut.", facts: ["12,000+ papers reviewed", "Zero proprietary blends", "Efficacy over popularity"] },
    { n: "02", icon: "⚗️", title: "Formulation", desc: "Synergistic blends engineered for maximum bioavailability.", detail: "We engineer ratios based on pharmacokinetic data. Every pairing is tested for synergistic or antagonistic interactions before approval.", facts: ["4:1 Theanine:Caffeine ratio", "Liposomal delivery tech", "Form-specific sourcing"] },
    { n: "03", icon: "🏭", title: "Manufacturing", desc: "GMP-certified facility in Oklahoma City, OK.", detail: "Our FDA-registered facility operates under full chain-of-custody traceability from raw material to sealed capsule.", facts: ["NSF GMP Certified", "HACCP compliant", "Full CoA per batch"] },
    { n: "04", icon: "🌍", title: "Distribution", desc: "Shipped from Norcross, GA warehouse worldwide.", detail: "Climate-controlled storage preserves potency from warehouse to doorstep. Every shipment includes a batch QR code.", facts: ["24–48hr fulfillment", "Cold-chain logistics", "Batch QR traceability"] },
  ];

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setLineW(100); }, { threshold: 0.3 });
    if (lineRef.current) io.observe(lineRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ padding: "clamp(60px,8vw,100px) clamp(18px,5vw,56px)", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 68 }}>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", color: C.white, fontWeight: 400 }}>
            The Formulation <em style={{ fontStyle: "italic", color: C.mint }}>Journey</em>
          </h2>
        </Reveal>
        <div ref={lineRef} style={{ position: "relative" }}>
          <style>{`
            @media(max-width:900px){
              .timeline-connector { height: 100% !important; width: 1px !important; left: 30px !important; top: 0 !important; right: auto !important; }
              .timeline-connector > div { width: 100% !important; height: ${lineW}% !important; background: linear-gradient(to bottom, ${C.mint}, ${C.teal}) !important; }
              .timeline-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: left !important; padding-left: 80px; }
              .timeline-step-icon { margin-left: 0 !important; margin-right: 0 !important; position: absolute !important; left: -80px; top: 0; }
              .timeline-reveal { text-align: left !important; position: relative; }
            }
          `}</style>
          {/* Animated connector line */}
          <div className="timeline-connector" style={{ position: "absolute", top: 30, left: "12.5%", right: "12.5%", height: 1, background: C.border }}>
            <div style={{ height: "100%", width: `${lineW}%`, background: `linear-gradient(to right, ${C.mint}, ${C.teal})`, transition: "all 1.5s cubic-bezier(.25,.46,.45,.94)", boxShadow: `0 0 8px rgba(207,255,229,0.4)` }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "clamp(14px,3vw,32px)" }} className="timeline-grid">
            {steps.map((s, i) => {
              const isActive = activeStep === i;
              return (
                <Reveal key={i} delay={i * 0.12} style={{ textAlign: "center" }} className="timeline-reveal">
                  <div
                    onClick={() => setActiveStep(isActive ? null : i)}
                    className="timeline-step-icon"
                    style={{ width: 60, height: 60, borderRadius: "50%", background: isActive ? "rgba(207,255,229,0.08)" : C.bg, border: `1px solid ${isActive ? C.mint : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px", position: "relative", zIndex: 2, boxShadow: isActive ? "0 0 24px rgba(207,255,229,0.2)" : "0 0 24px rgba(0,0,0,0.7)", transition: "all .3s", cursor: "pointer" }}
                  >
                    <span style={{ fontSize: isActive ? "1.4rem" : "1.1rem", fontFamily: "serif", color: isActive ? C.mint : C.dim, transition: "all .3s" }}>{isActive ? s.icon : s.n}</span>
                  </div>
                  <h4 onClick={() => setActiveStep(isActive ? null : i)} style={{ color: isActive ? C.mint : C.white, fontSize: "0.98rem", fontWeight: 500, marginBottom: 8, cursor: "pointer", transition: "color .3s" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.8rem", color: C.dim, lineHeight: 1.65, fontWeight: 300 }}>{s.desc}</p>
                  <div style={{ overflow: "hidden", maxHeight: isActive ? 240 : 0, transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)", marginTop: isActive ? 14 : 0 }}>
                    <div style={{ background: "rgba(207,255,229,0.04)", border: "1px solid rgba(207,255,229,0.1)", borderRadius: 14, padding: "14px 16px", textAlign: "left" }}>
                      <p style={{ fontSize: "0.78rem", color: C.gray, lineHeight: 1.7, marginBottom: 12 }}>{s.detail}</p>
                      {s.facts.map((f, fi) => (
                        <div key={fi} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                          <span style={{ color: C.mint, fontSize: "0.65rem" }}>✓</span>
                          <span style={{ fontSize: "0.72rem", color: C.dim }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p onClick={() => setActiveStep(isActive ? null : i)} style={{ fontSize: "0.58rem", color: C.dim, marginTop: 8, opacity: 0.45, cursor: "pointer" }}>{isActive ? "▲ collapse" : "▼ details"}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CONFETTI
══════════════════════════════════════════════ */
function Confetti({ active }: { active: boolean }) {
  const pieces = useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i, x: Math.random() * 100, vx: (Math.random() - .5) * 4,
    vy: -Math.random() * 6 - 4, color: ["#CFFFE5", "#5eead4", "#fda4af", "#c4b5fd", "#fff"][i % 5],
    r: Math.random() * 6 + 3, rot: Math.random() * 360,
  })), []);
  if (!active) return null;
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 500 }}>
      <style>{`@keyframes cfti{0%{transform:translateY(0) rotate(0deg);opacity:1}100%{transform:translateY(120vh) rotate(720deg);opacity:0}}`}</style>
      {pieces.map((p: any) => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: "20%",
          width: p.r, height: p.r * 1.6, background: p.color, borderRadius: 2,
          animation: `cfti ${1.5 + Math.random() * 1.2}s ease-in ${Math.random() * 0.5}s forwards`,
          transform: `rotate(${p.rot}deg)`,
        }} />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
function Footer({ C, onNavigate }: { C: typeof DARK; onNavigate: (page: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true); setConfetti(true);
    setTimeout(() => setConfetti(false), 2500);
  };

  return (
    <>
      <Confetti active={confetti} />
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "clamp(40px,6vw,68px) clamp(18px,5vw,56px) 26px", background: C.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "clamp(28px,5vw,68px)", marginBottom: 44 }} className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span>🌿</span>
                <span style={{ fontFamily: "serif", fontSize: "1.35rem", color: C.white, letterSpacing: "0.1em" }}>Idingo.</span>
              </div>
              <p style={{ fontSize: "0.83rem", color: C.dim, lineHeight: 1.75, maxWidth: 300, fontWeight: 300, marginBottom: 26 }}>Optimize health naturally. Premium nutraceuticals grounded in science since 2008.</p>
              {!submitted ? (
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email"
                    onFocus={e => { (e.target as any).style.borderColor = "rgba(207,255,229,0.45)"; (e.target as any).style.boxShadow = "0 0 0 3px rgba(207,255,229,0.08)"; }}
                    onBlur={e => { (e.target as any).style.borderColor = C.border; (e.target as any).style.boxShadow = "none"; }}
                    style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px", color: C.white, fontSize: "0.8rem", outline: "none", width: 185, transition: "border-color .25s, box-shadow .25s" }}
                  />
                  <button onClick={handleSubmit} style={{ background: C.mint, color: "#060d0a", border: "none", borderRadius: 8, padding: "10px 16px", fontWeight: 600, fontSize: "0.76rem", cursor: "pointer", transition: "all .2s" }}
                    onMouseEnter={e => { (e.currentTarget as any).style.boxShadow = "0 0 20px rgba(207,255,229,0.4)"; }}
                    onMouseLeave={e => { (e.currentTarget as any).style.boxShadow = "none"; }}
                  >Subscribe →</button>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.mint, fontSize: "0.88rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>🎉</span> You're in! Welcome to Idingo.
                </div>
              )}
            </div>
            <div>
              <h5 style={{ color: C.white, fontWeight: 500, marginBottom: 16, fontSize: "0.86rem" }}>Locations</h5>
              {[["HQ", "Boynton Beach, FL"], ["Warehouse", "Norcross, GA"], ["Manufacturing", "Oklahoma City, OK"]].map(([n, a]) => (
                <div key={n} style={{ marginBottom: 9 }}>
                  <span style={{ fontSize: "0.62rem", color: C.mint, letterSpacing: "0.1em", textTransform: "uppercase" }}>{n}: </span>
                  <span style={{ fontSize: "0.8rem", color: C.dim, fontWeight: 300 }}>{a}</span>
                </div>
              ))}
            </div>
            <div>
              <h5 style={{ color: C.white, fontWeight: 500, marginBottom: 16, fontSize: "0.86rem" }}>Company</h5>
              {[
                { label: "About Idingo", page: "about" },
                { label: "Our Process", page: "process" },
                { label: "Gallery", page: "gallery" },
                { label: "Contact", page: "contact" }
              ].map(item => (
                <div key={item.label} onClick={() => { onNavigate(item.page); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ marginBottom: 9, fontSize: "0.83rem", color: C.dim, cursor: "pointer", fontWeight: 300, transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget as any).style.color = C.mint}
                  onMouseLeave={e => (e.currentTarget as any).style.color = C.dim}
                >{item.label}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <span style={{ fontSize: "0.7rem", color: C.dim }}>© 2026 Idingo LLC. All rights reserved.</span>
            <span style={{ fontSize: "0.62rem", color: C.dim, letterSpacing: "0.18em", textTransform: "uppercase" }}>Est. 2008</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("home");
  const [formulaModalKey, setFormulaModalKey] = useState<string | null>(null);
  const threeReady = useThree();
  const [scrolled, setScrolled] = useState(false);
  const C = DARK;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "about": return <AboutPage C={C} />;
      case "process": return <ProcessPage C={C} />;
      case "gallery": return <GalleryPage C={C} />;
      case "contact": return <ContactPage C={C} />;
      default: return null; // Logic will be handled in the main return for now
    }
  };

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: "'Inter','Helvetica Neue',sans-serif", overflowX: "hidden", lineHeight: 1.5 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#060d0a}::-webkit-scrollbar-thumb{background:#1a3d2b;border-radius:2px}::-webkit-scrollbar-thumb:hover{background:#CFFFE5}
        ::selection{background:#CFFFE5;color:#060d0a}
        @keyframes ambg{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(18px,-18px)scale(1.04)}}
        @keyframes spincw{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes spinccw{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @keyframes shimmer{0%,100%{opacity:.6}50%{opacity:1}}
        @keyframes bfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes pulseglow{0%,100%{box-shadow:0 0 8px rgba(207,255,229,0.3)}50%{box-shadow:0 0 24px rgba(207,255,229,0.7)}}

        .hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,6vw,80px);align-items:center}
        .bento-mobile{display:none!important}

        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important}
          .hero-bottle-col{height:340px}
          .bento-desktop{display:none!important}
          .bento-mobile{display:flex!important}
          .lab-grid{grid-template-columns:1fr!important}
          .lab-inner{grid-template-columns:1fr!important}
          .timeline-grid{grid-template-columns:repeat(2,1fr)!important}
          .footer-grid{grid-template-columns:1fr!important}
          .nav-links{display:none!important}
        }
        @media(max-width:520px){
          .timeline-grid{grid-template-columns:1fr!important}
          .hero-bottle-col{height:260px}
        }
      `}</style>

      <ScrollProgress />

      {/* Ambient blobs */}
      <div style={{ position: "fixed", top: "-5%", left: "-8%", width: "44vw", height: "44vw", background: "rgba(207,255,229,0.032)", borderRadius: "50%", filter: "blur(110px)", pointerEvents: "none", zIndex: 0, animation: "ambg 14s ease-in-out infinite" }} />
      <div style={{ position: "fixed", bottom: "-8%", right: "-8%", width: "34vw", height: "34vw", background: "rgba(94,234,212,0.022)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", zIndex: 0, animation: "ambg 18s ease-in-out 5s infinite reverse" }} />
      {/* Enhanced 2026 Grain & Refraction */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.04, pointerEvents: "none", zIndex: 1, mixBlendMode: "overlay" }} />
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(207,255,229,0.05) 0%, transparent 60%)", pointerEvents: "none", zIndex: 1 }} />

      <Nav scrolled={scrolled} C={C} currentPage={page} onNavigate={setPage} />

      {page === "home" ? (
        <>
          {/* ── HERO ── */}
          <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", paddingTop: 80 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <ParticleCanvas />
            </div>

            <div style={{ flex: 1, display: "flex", alignItems: "center", maxWidth: 1160, margin: "0 auto", padding: "clamp(28px,5vw,60px) clamp(18px,5vw,56px)", width: "100%", position: "relative", zIndex: 2 }}>
              <div className="hero-grid" style={{ width: "100%" }}>

                {/* Left */}
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(207,255,229,0.07)", border: "1px solid rgba(207,255,229,0.18)", borderRadius: 999, padding: "5px 14px", marginBottom: 26 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.mint, display: "inline-block", animation: "pulseglow 2.5s ease-in-out infinite" }} />
                    <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.mint, fontWeight: 600 }}>Crafted in the Lab · Est. 2008</span>
                  </div>

                  <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.6rem,6vw,5.5rem)", color: C.white, lineHeight: 1.06, fontWeight: 400, marginBottom: 22 }}>
                    Your health.<br />
                    <em style={{ fontStyle: "italic", background: `linear-gradient(90deg,${C.mint},${C.teal})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 3s ease-in-out infinite" }}>Optimised</em><br />
                    by science.
                  </h1>

                  <p style={{ fontSize: "clamp(0.88rem,1.4vw,1rem)", color: C.gray, lineHeight: 1.8, fontWeight: 300, maxWidth: 400, marginBottom: 36 }}>
                    Premium nutraceuticals. Vegan, organic, 100% pure. Zero compromises on quality, purity, or transparency.
                  </p>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button onClick={() => document.getElementById("lab")?.scrollIntoView({ behavior: "smooth" })} style={{ background: C.mint, color: "#060d0a", border: "none", borderRadius: 999, padding: "14px clamp(22px,3vw,38px)", fontWeight: 600, fontSize: "0.86rem", cursor: "pointer", transition: "all .3s", boxShadow: "0 0 0 rgba(207,255,229,0)" }}
                      onMouseEnter={e => { const t = e.currentTarget as any; t.style.boxShadow = "0 0 28px rgba(207,255,229,0.35)"; t.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { const t = e.currentTarget as any; t.style.boxShadow = "none"; t.style.transform = "translateY(0)"; }}
                    >Explore Formulas 🧪</button>
                    <button onClick={() => setPage("process")} style={{ background: C.overlay, color: C.white, border: `1px solid ${C.overlayBorder}`, borderRadius: 999, padding: "14px clamp(22px,3vw,38px)", fontWeight: 400, fontSize: "0.86rem", cursor: "pointer", transition: "background .3s" }}
                      onMouseEnter={e => (e.currentTarget as any).style.background = C.overlayHover}
                      onMouseLeave={e => (e.currentTarget as any).style.background = C.overlay}
                    >📖 Science Basis</button>
                  </div>

                  <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
                    {["✓ 100% Organic", "✓ 3rd Party Tested", "✓ Vegan Certified"].map(b => (
                      <span key={b} style={{ fontSize: "0.68rem", color: "rgba(207,255,229,0.55)", letterSpacing: "0.04em", fontWeight: 500 }}>{b}</span>
                    ))}
                  </div>
                </div>

                {/* Right — 3D Bottle */}
                <div className="hero-bottle-col" style={{ position: "relative", height: "clamp(360px,50vw,580px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", width: "68%", aspectRatio: "1", border: "1px solid rgba(207,255,229,0.07)", borderRadius: "50%", animation: "spincw 22s linear infinite", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                  <div style={{ position: "absolute", width: "88%", aspectRatio: "1", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", animation: "spinccw 34s linear infinite", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                  <div style={{ position: "absolute", width: "48%", aspectRatio: "1", background: "radial-gradient(circle,rgba(207,255,229,0.07),transparent 70%)", borderRadius: "50%", filter: "blur(18px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

                  <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}>
                    {threeReady
                      ? <ThreeBottle />
                      : (
                        <svg style={{ width: 160, height: 280, animation: "bfloat 5s ease-in-out infinite", filter: "drop-shadow(0 0 28px rgba(207,255,229,0.2))", display: "block", margin: "auto" }} viewBox="0 0 200 320" fill="none">
                          <rect x="76" y="8" width="48" height="26" rx="8" fill={C.overlayHover} stroke={C.borderHi} strokeWidth="0.8" />
                          <path d="M72 34 Q66 56 63 88 L63 256 Q63 276 100 276 Q137 276 137 256 L137 88 Q134 56 128 34 Z" fill={C.overlay} stroke={C.overlayHover} strokeWidth="1" />
                          <rect x="72" y="128" width="56" height="72" rx="6" fill={C.overlayBorder} />
                          <text x="100" y="156" textAnchor="middle" fill={C.mint} fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="3">IDINGO</text>
                          <text x="100" y="185" textAnchor="middle" fill={C.gray} fontSize="6" fontFamily="sans-serif">FORMULA · 90 CAPSULES</text>
                          <path d="M72 68 Q70 128 74 208" stroke={C.overlayHover} strokeWidth="2.5" strokeLinecap="round" />
                          <ellipse cx="100" cy="272" rx="26" ry="5" fill={C.overlayBorder} />
                        </svg>
                      )
                    }
                  </div>

                  {/* Badges */}
                  <div style={{ position: "absolute", top: "12%", right: "3%", background: C.surface, backdropFilter: "blur(14px)", border: `1px solid ${C.borderHi}`, borderRadius: 12, padding: "8px 13px", fontSize: "0.68rem", color: C.mint, whiteSpace: "nowrap", zIndex: 3 }}>✓ 100% Organic</div>
                  <div style={{ position: "absolute", bottom: "20%", left: "1%", background: C.surface, backdropFilter: "blur(14px)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "8px 13px", fontSize: "0.68rem", color: C.gray, whiteSpace: "nowrap", zIndex: 3 }}>🛡 Clinically Validated</div>
                </div>
              </div>
            </div>

            <Marquee C={C} />
          </section>

          {/* Stats */}
          <div style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
            <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="timeline-grid">
              {[["16+", "Years Research"], ["100%", "Vegan & Organic"], ["3rd", "Party Lab Tested"], ["0", "Additives"]].map(([n, l], i) => (
                <Reveal key={l} delay={i * 0.08}>
                  <div style={{ padding: "clamp(18px,3vw,28px) 12px", borderRight: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.mint, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.dim, marginTop: 7 }}>{l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="quiz">
            <QuizSection C={C} onViewFormula={setFormulaModalKey} />
          </div>
          <ResultsSection C={C} />
          <BentoGrid C={C} />
          <CapsuleSection C={C} />
          <div id="lab">
            <LabSection C={C} onViewFormula={setFormulaModalKey} />
          </div>
          <CompareSection C={C} />
          <FAQSection C={C} />
          <Timeline C={C} />
        </>
      ) : renderPage()}
      <FormulaModal formulaKey={formulaModalKey} onClose={() => setFormulaModalKey(null)} C={C} />
      <Footer C={C} onNavigate={setPage} />
    </div>
  );
}
