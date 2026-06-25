"use client";

import { useEffect, useRef } from "react";
import ZodiacWheel from "./Zodiacwheel";
import { MarqueeReviews } from "../sections/TrustBar";
import { IG_LINK, WA_LINK } from "@/lib/constants";

const NAV_LINKS = ["Home", "About Us", "Gallery", "Blogs", "Contact Us"];

function OrbitDot() {
  return (
    <div className="absolute inset-0 animate-[cosmicSpin_8s_linear_infinite] pointer-events-none">
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-500"
        style={{ boxShadow: "0 0 10px #4db86a, 0 0 22px rgba(77,184,106,0.5)" }}
      />
    </div>
  );
}

export default function AstrologyHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    function draw() {
      const wrap = canvas.parentElement;
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 160; i++) {
        const x = Math.random() * canvas.width, y = Math.random() * canvas.height;
        const r = Math.random() * 1.4;
        const a = 0.12 + Math.random() * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${120 + Math.floor(Math.random() * 80)},220,${140 + Math.floor(Math.random() * 60)},${a})`;
        ctx.fill();
      }
    }
    draw();
    const obs = new ResizeObserver(draw);
    obs.observe(canvas.parentElement);
    return () => obs.disconnect();
  }, []);

  function navigate(link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* Only keyframes + Google Fonts — everything else is Tailwind */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap');
        @keyframes cosmicSpin   { to { transform: rotate(360deg);  } }
        @keyframes counterSpin  { to { transform: rotate(-360deg); } }
        @keyframes pulseGlow    {
          0%,100% { opacity:.45; transform:scale(1);    }
          50%      { opacity:1;   transform:scale(1.1); }
        }
        .font-cinzel  { font-family:'Cinzel',serif; }
        .font-raleway { font-family:'Raleway',sans-serif; }
        .animate-counter-spin { animation: counterSpin 40s linear infinite; }
        .animate-pulse-glow   { animation: pulseGlow   4s  ease-in-out infinite; }
      `}</style>

      <section className="font-raleway relative overflow-hidden min-h-screen" style={{ background: "#080f0a" }}>

        {/* Star canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

        {/* ── NAV ── */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b border-green-900/30 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#1a4a25,#2e8b45)",
                clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
              }}
              aria-hidden="true"
            />
            <span className="font-cinzel text-[13px] tracking-[3px] uppercase text-green-400">Acharya Ji</span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(l => (
              <li key={l}>
                <a href="#" className="text-green-200/50 no-underline text-[11px] tracking-[1.5px] uppercase hover:text-green-400 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-2">
            {[{ s: "in", label: "LinkedIn" }, { s: "f", label: "Facebook" }, { s: "𝕏", label: "X" }, { s: "▶", label: "YouTube" }].map(({ s, label }) => (
              <button key={s} aria-label={label}
                className="w-7 h-7 rounded-full border border-green-700/40 flex items-center justify-center
                           text-green-200/50 text-[10px] font-bold bg-transparent
                           hover:border-green-500 hover:text-green-400 transition-colors cursor-pointer"
              >{s}</button>
            ))}
          </div>
        </nav>

        {/* ── HERO: DESKTOP (side-by-side) / MOBILE (stack) ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

          {/* ── MOBILE LAYOUT ── */}
          <div className="md:hidden flex flex-col-reverse pt-8 pb-12">

            {/* Left text */}
            <div>
              <p className="flex max-md:hidden items-center gap-3 text-[10px] tracking-[4px] uppercase text-green-500 mb-4">
                <span className="inline-block w-5 h-px bg-green-600" />
                Best Astrologer in London
              </p>
              <h1 className="font-cinzel text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.2] text-green-50 mb-5">
                London's Most{" "}
                <span style={{ color: "#5dcf72" }}>Trusted Love</span>
                <br />&amp; Relationship
                <br />Healer
              </h1>
              <p className="text-[13.5px] leading-relaxed text-green-200/55 max-w-sm mb-8">
                Acharya Ji has helped{" "}
                <strong className="text-green-400">thousands</strong>{" "}
                rebuild relationships, resolve marriage problems, and find love again — across the UK.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(WA_LINK)}
                  className="font-raleway px-6 py-3 rounded-sm text-[11px] tracking-[2px] uppercase
                                   bg-green-800 text-green-100 border-none cursor-pointer
                                   hover:bg-green-700 transition-colors">
                  WhatsApp us
                </button>
                <button
                  onClick={() => navigate(IG_LINK)}
                  className="font-raleway px-6 py-3 rounded-sm text-[11px] tracking-[2px] uppercase
                                   bg-transparent text-green-400 border border-green-700/50 cursor-pointer
                                   hover:border-green-500 transition-colors">
                  Instagram
                </button>
              </div>

              {/* screen shots review */}
              <div className="md:hidden">
                <MarqueeReviews auto className="md:hidden" />
                <p className="text-center text-[10px] tracking-widest uppercase
                      text-[rgba(180,220,185,0.3)] mt-8">
                  Click any card to read full review
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-7 mt-8 pt-6 border-t border-green-900/40">
                {[["15k+", "Happy Clients"], ["20+", "Years Exp"], ["98%", "Success Rate"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-cinzel text-2xl font-bold" style={{ color: "#5dcf72" }}>{n}</div>
                    <div className="text-[10px] tracking-widest uppercase text-green-200/40 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* FULL-WIDTH PHOTO — like reference screenshot */}
            <div className="mb-2">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-green-500 mb-4">
                <span className="inline-block w-5 h-px bg-green-600" />
                Best Astrologer in London
              </p>

              <div className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/5", background: "linear-gradient(160deg,#0d1f10,#05100a)" }}>


                {/* Subtle zodiac ring overlay — purely decorative, doesn't interfere with photo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <ZodiacWheel />
                </div>

                {/* Photo */}
                <img
                  src="/gallery/img-c-3.jpg"
                  alt="Acharya Ji — Vedic Astrologer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(8,15,10,0.8) 0%,transparent 50%)" }} />

                {/* Badge */}
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-10">
                  <span className="font-cinzel text-[13px] tracking-wide text-green-100">Acharya Ji</span>
                  <span className="text-[9px] tracking-[2px] uppercase text-green-500 mt-1">
                    Love &amp; Relationship Specialist
                  </span>
                </div>

                {/* Tag top-right */}
                <div className="absolute top-3 right-3 z-10
                              px-3 py-1 rounded-full border border-green-600/50 bg-green-900/80
                              text-[9px] tracking-[1.5px] uppercase text-green-300 backdrop-blur-sm">
                  ✦ Vedic Expert
                </div>

                {/* Stats row pinned at very bottom over gradient */}
                {/* <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-6 z-10">
                {[["15k+","Clients"],["20+","Yrs Exp"],["98%","Success"]].map(([n,l])=>(
                  <div key={l} className="text-center">
                    <div className="font-cinzel text-lg font-bold" style={{color:"#5dcf72"}}>{n}</div>
                    <div className="text-[9px] tracking-widest uppercase text-green-200/40 mt-0.5">{l}</div>
                  </div>
                ))}
              </div> */}
              </div>

            </div>

          </div>

          {/* ── DESKTOP LAYOUT ── */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-center py-16">

            {/* Left text */}
            <div>
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-green-500 mb-4">
                <span className="inline-block w-5 h-px bg-green-600" />
                Best Astrologer in London
              </p>
              <h1 className="font-cinzel text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.2] text-green-50 mb-5">
                London's Most{" "}
                <span style={{ color: "#5dcf72" }}>Trusted Love</span>
                <br />&amp; Relationship
                <br />Healer
              </h1>
              <p className="text-[13.5px] leading-relaxed text-green-200/55 max-w-sm mb-8">
                Acharya Ji has helped{" "}
                <strong className="text-green-400">thousands</strong>{" "}
                rebuild relationships, resolve marriage problems, and find love again — across the UK.
              </p>

              <div className="flex gap-3">
                <button
                onClick={()=>navigate(WA_LINK)}
                className="font-raleway px-6 py-3 rounded-sm text-[11px] tracking-[2px] uppercase
                                   bg-green-800 text-green-100 border-none cursor-pointer
                                   hover:bg-green-700 transition-colors">
                  Whatsapp us
                </button>
                <button
                onClick={()=>navigate(IG_LINK)}
                 className="font-raleway px-6 py-3 rounded-sm text-[11px] tracking-[2px] uppercase
                                   bg-transparent text-green-400 border border-green-700/50 cursor-pointer
                                   hover:border-green-500 transition-colors">
                  Instagram
                </button>
              </div>
              {/* Stats */}
              <div className="flex gap-7 mt-8 pt-6 border-t border-green-900/40">
                {[["15k+", "Happy Clients"], ["20+", "Years Exp"], ["98%", "Success Rate"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-cinzel text-2xl font-bold" style={{ color: "#5dcf72" }}>{n}</div>
                    <div className="text-[10px] tracking-widest uppercase text-green-200/40 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: zodiac ring + portrait photo */}
            <div className="flex items-center justify-center">
              <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center" style={{ width: 540, height: 540 }}>
                {/* Spinning zodiac ring */}
                <ZodiacWheel className="max-lg:w-70 max-lg:h-70 size-150" />

                {/* Counter-spin inner dashed ring */}
                <svg width="290" height="290" viewBox="0 0 290 290"
                  className="absolute animate-counter-spin"
                  style={{ inset: "45px", position: "absolute" }}
                  aria-hidden="true">
                  <circle cx="145" cy="145" r="136" fill="none" stroke="rgba(77,184,106,0.07)" strokeWidth="0.5" strokeDasharray="3 9" />
                </svg>

                {/* Glow blob */}
                <div className="absolute w-48 h-48 rounded-full pointer-events-none animate-pulse-glow"
                  style={{ background: "radial-gradient(circle,rgba(45,180,80,0.2) 0%,transparent 70%)" }} />

                {/* Orbiting dot */}
                <OrbitDot />

                {/* Portrait card */}
                <div
                  className="relative max-lg:w-40 w-70 z-10 overflow-hidden border"
                  style={{
                    // width: 280,
                    aspectRatio: "3/4",
                    borderRadius: "12px 12px 80px 80px",
                    borderColor: "rgba(77,184,106,0.35)",
                    boxShadow: "0 0 0 6px rgba(77,184,106,0.07),0 0 40px rgba(45,180,80,0.18),0 20px 60px rgba(0,0,0,0.5)",
                    background: "linear-gradient(160deg,#0d1f10,#05100a)"
                  }}
                >
                  <img src="/gallery/img-c-3.jpg" alt="Acharya Ji"
                    className="w-full h-full object-cover object-top block"
                    onError={e => { e.currentTarget.style.display = "none"; }} />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top,rgba(8,15,10,0.75) 0%,transparent 45%)" }} />
                  {/* Floating tag */}
                  <div className="absolute top-1 right-1 z-10
                                  px-3 py-1 rounded-full border border-green-600/50 bg-green-900/90
                                  text-[9px] tracking-[1.5px] uppercase text-green-300 backdrop-blur-sm">
                    ✦ Vedic Expert
                  </div>
                  {/* Name badge */}
                  <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-10">
                    <span className="font-cinzel text-[13px] tracking-wide text-green-100">Acharya Ji</span>
                    <span className="text-[9px] text-center tracking-[2px] uppercase text-green-500 mt-1">
                      Love &amp; Relationship Specialist
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}