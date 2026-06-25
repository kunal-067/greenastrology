"use client";
import { useEffect, useRef } from "react";
import { Stars, WAButton } from "@/components/ui";

const GREEN1 = "#4db86a";
const GREEN2 = "#9edaab";
const GREEN3 = "#1e6b30";

/* ── Zodiac wheel ───────────────────────────────────────── */
const ZODIAC = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];

function ZodiacWheel() {
  const cx = 260, cy = 260;
  const r1 = 230, r2 = 195, r3 = 160, r4 = 128;

  const symbols = ZODIAC.map((sym, i) => {
    const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
    return { sym, x: cx + r1 * Math.cos(a), y: cy + r1 * Math.sin(a) };
  });

  const ticks = Array.from({ length: 72 }, (_, i) => {
    const a = (i / 72) * 2 * Math.PI - Math.PI / 2;
    const isMajor = i % 6 === 0;
    const inner = r2 - (isMajor ? 14 : 7);
    return {
      x1: cx + inner * Math.cos(a), y1: cy + inner * Math.sin(a),
      x2: cx + r2   * Math.cos(a), y2: cy + r2   * Math.sin(a),
      major: isMajor,
    };
  });

  return (
    <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="wg-green" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={GREEN1} stopOpacity="0"    />
          <stop offset="60%"  stopColor={GREEN1} stopOpacity="0.06" />
          <stop offset="100%" stopColor={GREEN3} stopOpacity="0.2"  />
        </radialGradient>
        <linearGradient id="rg-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={GREEN1} stopOpacity="0.6" />
          <stop offset="50%"  stopColor={GREEN2} stopOpacity="0.4" />
          <stop offset="100%" stopColor={GREEN3} stopOpacity="0.5" />
        </linearGradient>
        <filter id="sg-green">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* bg glow fill */}
      <circle cx={cx} cy={cy} r={r1+20} fill="url(#wg-green)"/>

      {/* outer dashed ring */}
      <circle cx={cx} cy={cy} r={r1+8} fill="none"
        stroke="url(#rg-green)" strokeWidth="1" strokeOpacity="0.45"
        strokeDasharray="4 8"/>

      {/* main symbol ring */}
      <circle cx={cx} cy={cy} r={r1-12} fill="none"
        stroke="url(#rg-green)" strokeWidth="1.5" strokeOpacity="0.65"/>

      {/* tick marks */}
      {ticks.map((t, i) => (
        <line key={i}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke={t.major ? GREEN1 : GREEN2}
          strokeWidth={t.major ? 1.5 : 0.8}
          strokeOpacity={t.major ? 0.75 : 0.3}
        />
      ))}

      {/* r2 ring */}
      <circle cx={cx} cy={cy} r={r2} fill="none"
        stroke="url(#rg-green)" strokeWidth="1" strokeOpacity="0.4"/>

      {/* r3 dashed */}
      <circle cx={cx} cy={cy} r={r3} fill="none"
        stroke={GREEN2} strokeWidth="1" strokeOpacity="0.25"
        strokeDasharray="3 12"/>

      {/* r4 inner ring */}
      <circle cx={cx} cy={cy} r={r4+1} fill="none"
        stroke="url(#rg-green)" strokeWidth="2" strokeOpacity="0.7"/>

      {/* zodiac symbols */}
      {symbols.map((s, i) => (
        <text key={i}
          x={s.x} y={s.y}
          textAnchor="middle" dominantBaseline="central"
          fontSize="18" fill={GREEN1} fillOpacity="0.85"
          filter="url(#sg-green)"
          style={{ fontFamily: "serif" }}>
          {s.sym}
        </text>
      ))}

      {/* segment dividers */}
      {symbols.map((_, i) => {
        const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
        return (
          <line key={i}
            x1={cx+(r4+4)*Math.cos(a)} y1={cy+(r4+4)*Math.sin(a)}
            x2={cx+(r2-2)*Math.cos(a)} y2={cy+(r2-2)*Math.sin(a)}
            stroke={GREEN2} strokeWidth="0.8" strokeOpacity="0.35"/>
        );
      })}

      {/* constellation dots */}
      {symbols.map((_, i) => {
        const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
        return (
          <circle key={i}
            cx={cx+(r3-6)*Math.cos(a)} cy={cy+(r3-6)*Math.sin(a)}
            r="3.5" fill={GREEN1} fillOpacity="0.6"/>
        );
      })}
    </svg>
  );
}

/* ── Particles ──────────────────────────────────────────── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      dx: (Math.random() - .5) * 0.2,
      dy: (Math.random() - .5) * 0.2,
      a: Math.random() * 0.45 + 0.08,
      // alternate between two greens
      c: Math.random() > .5 ? "77,184,106" : "158,218,171",
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.a})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none opacity-50"/>;
}

/* ── PageHero ───────────────────────────────────────────── */
export default function PageHero({
  badge,
  liveBadge      = "Online Now · Free Consultation",
  breadcrumb,
  headLine1,
  headLineShimmer,
  headLine2,
  sub,
  badges         = [],
  waLink,
  ctaLabel       = "Get Help Now — Free",
  secondaryHref  = "#how-it-works",
  secondaryLabel = "How It Works",
  statCards      = [],
  avatarInitials = ["P","S","K","A","M","R"],
  proofText      = "Trusted by 5,000+ UK clients",
}) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060e08]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 100% 80% at 65% 40%, rgba(30,107,48,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 70%  60% at 15% 75%, rgba(77,184,106,0.12) 0%, transparent 50%)
        `,
      }}
    >
      {/* border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-[rgba(74,163,89,0.4)] to-transparent"/>

      {/* glow blobs */}
      <div className="absolute top-24 left-10 w-[420px] h-[420px] rounded-full
                      blur-[100px] pointer-events-none
                      animate-[glowPulse_4s_ease-in-out_infinite]"
           style={{ background: "rgba(30,107,48,0.12)" }}/>
      <div className="absolute bottom-16 right-16 w-[320px] h-[320px] rounded-full
                      blur-[80px] pointer-events-none
                      animate-[glowPulse_3s_ease-in-out_infinite]"
           style={{ background: "rgba(77,184,106,0.1)", animationDelay:"2s" }}/>

      <Particles />

      <div className="relative max-w-7xl mx-auto px-4 w-full
                      grid lg:grid-cols-[1fr_520px] gap-12 xl:gap-20
                      items-center max-md:pt-19 pt-28 pb-16"
           style={{ fontFamily: "'Raleway', sans-serif" }}>

        {/* ── LEFT ── */}
        <div style={{ animation: "fadeUp .85s cubic-bezier(.22,1,.36,1) both" }}>

          {/* breadcrumb */}
          <div className="flex  items-center gap-2 text-xs font-medium mb-5
                          text-[rgba(180,220,185,0.4)]">
            <a href="/" className="hover:text-[#4db86a] transition-colors">Home</a>
            <span>/</span>
            <span className="text-[rgba(180,220,185,0.65)]">{breadcrumb}</span>
          </div>

          {/* category pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4
                          bg-[rgba(30,107,48,0.2)] border border-[rgba(74,163,89,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4db86a] animate-pulse
                             shadow-[0_0_6px_rgba(77,184,106,0.8)]"/>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4db86a]">
              {badge}
            </span>
          </div>

          {/* live badge */}
          <div className="inline-flex max-md:hidden items-center gap-2.5 px-4 py-2 rounded-full mb-7 ml-2
                          bg-[rgba(30,107,48,0.15)] border border-[rgba(74,163,89,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#4db86a]
                             animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite]"/>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5dcf72]">
              {liveBadge}
            </span>
          </div>

          {/* headline */}
          <h1 className="font-['Cinzel',serif] text-5xl sm:text-6xl xl:text-[4rem]
                         font-bold leading-[1.1] mb-6 text-[#e8f5ea]">
            {headLine1}<br/>
            <span style={{
              background: `linear-gradient(90deg,${GREEN1},${GREEN2},#a8edba,${GREEN1})`,
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
            }}>
              {headLineShimmer}
            </span>
            {headLine2 && <><br/>{headLine2}</>}
          </h1>

          {/* sub */}
          <p className="text-[15px] leading-relaxed mb-8 max-w-[500px]
                        text-[rgba(180,220,185,0.58)]">
            {sub}
          </p>

          {/* trust badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mb-10">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
                             bg-[rgba(30,107,48,0.15)]
                             border border-[rgba(74,163,89,0.25)]
                             text-[rgba(180,220,185,0.7)]
                             backdrop-blur-sm"
                  style={{ animation: `fadeUp .6s ${0.1 + i * 0.07}s both` }}
                >
                  <span>{b.icon}</span>{b.text}
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <WAButton href={waLink} size="lg">{ctaLabel}</WAButton>
            <a
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base
                         border border-[rgba(74,163,89,0.4)] text-[#7ecc8f]
                         hover:border-[rgba(93,207,114,0.7)] hover:bg-[rgba(30,107,48,0.12)]
                         hover:scale-105 transition-all duration-300"
            >
              {secondaryLabel}
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {avatarInitials.map((l, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center
                             text-[#e8f5ea] text-xs font-bold font-['Cinzel',serif]
                             border-2 border-[#060e08]"
                  style={{ background: `linear-gradient(135deg, ${GREEN3}, ${GREEN1})` }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="border-l pl-4 border-[rgba(74,163,89,0.2)]">
              <div className="flex items-center gap-1.5">
                <Stars count={5} />
                <span className="text-sm font-bold text-[#c8eecf]">4.9/5</span>
              </div>
              <p className="text-xs mt-0.5 text-[rgba(180,220,185,0.4)]">{proofText}</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div
          className="relative flex justify-center items-center"
          style={{ animation: "fadeUp .9s .15s cubic-bezier(.22,1,.36,1) both" }}
        >
          <div className="relative w-[520px] h-[520px] max-w-[90vw] max-h-[90vw]">

            {/* spinning zodiac */}
            <div className="absolute inset-0 animate-[spinSlow_28s_linear_infinite]">
              <ZodiacWheel />
            </div>

            {/* inner dashed counter-ring */}
            <div
              className="absolute inset-[60px] rounded-full
                         animate-[spinReverse_22s_linear_infinite]
                         border border-dashed border-[rgba(74,163,89,0.2)]"
            />

            {/* glow core */}
            <div
              className="absolute inset-[80px] rounded-full blur-2xl
                         animate-[glowPulse_3s_ease-in-out_infinite]"
              style={{ background: "linear-gradient(135deg,rgba(30,107,48,0.35),rgba(77,184,106,0.25))" }}
            />

            {/* profile circle */}
            <div
              className="absolute inset-[90px] rounded-full overflow-hidden
                         border-2 border-[rgba(93,207,114,0.5)]
                         animate-[float_7s_ease-in-out_infinite]"
              style={{ boxShadow: `0 0 50px rgba(30,107,48,0.5), 0 0 100px rgba(77,184,106,0.2)` }}
            >
              <img
                src="./astrologer.png"
                alt="Acharya Ji"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* stat card — top left */}
            {statCards[0] && (
              <div
                className="absolute -top-2 -left-4 rounded-2xl px-4 py-3 shadow-2xl
                           border backdrop-blur-md
                           bg-[rgba(10,17,13,0.85)] border-[rgba(74,163,89,0.3)]
                           animate-[floatSlow_8s_ease-in-out_infinite]"
              >
                <p className="text-[10px] text-[rgba(180,220,185,0.45)]">{statCards[0].label}</p>
                <p className="text-2xl font-bold font-['Cinzel',serif]"
                   style={{ background:`linear-gradient(135deg,${GREEN1},${GREEN2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  {statCards[0].value}
                </p>
              </div>
            )}

            {/* stat card — bottom right */}
            {statCards[1] && (
              <div
                className="absolute -bottom-2 -right-4 rounded-2xl px-4 py-3 shadow-2xl
                           border backdrop-blur-md
                           bg-[rgba(10,17,13,0.85)] border-[rgba(74,163,89,0.3)]
                           animate-[floatSlow_9s_ease-in-out_infinite]"
                style={{ animationDelay:"2s" }}
              >
                <p className="text-[10px] text-[rgba(180,220,185,0.45)]">{statCards[1].label}</p>
                <p className="text-2xl font-bold font-['Cinzel',serif]"
                   style={{ background:`linear-gradient(135deg,${GREEN2},${GREEN1})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  {statCards[1].value}
                </p>
              </div>
            )}

            {/* available now badge — right side */}
            <div
              className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-2xl px-3 py-2 shadow-xl
                         border backdrop-blur-md
                         bg-[rgba(10,17,13,0.85)] border-[rgba(74,163,89,0.3)]"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4db86a]
                                 animate-[ping_1.4s_ease-in-out_infinite]
                                 shadow-[0_0_6px_rgba(77,184,106,0.8)]"/>
                <span className="text-xs font-bold text-[#5dcf72]">Available Now</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 opacity-35 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.2em]
                         text-[rgba(180,220,185,0.5)] font-['Raleway',sans-serif]">
          Scroll
        </span>
        <div
          className="w-px h-8 animate-[glowPulse_2s_ease-in-out_infinite]"
          style={{ background: `linear-gradient(to bottom, ${GREEN1}, transparent)` }}
        />
      </div>

    </section>
  );
}