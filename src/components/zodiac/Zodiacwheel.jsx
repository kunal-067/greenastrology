"use client";

import React, { useMemo } from "react";

/**
 * ZodiacWheel
 * ------------------------------------------------------------------
 * A faithful, from-scratch SVG recreation of a natal-chart style
 * zodiac wheel: outer rim, triangulated "constellation" mesh band,
 * 12 curved zodiac labels, 12 zodiac glyphs (hand-built SVG paths,
 * not a font/unicode glyph), 12 house rings with Roman numerals,
 * sparkle accents, and a faint scattered constellation background.
 *
 * The whole chakra ring (everything except the very center) rotates
 * slowly and continuously. The center can either hold a circular,
 * framed portrait (pass `centerImage`) which stays perfectly still
 * and upright while the ring spins around it, or — if no image is
 * given — a radiating starburst that spins along with the rest.
 *
 * Drop this into a Next.js app (app router or pages router) and use:
 *   <ZodiacWheel centerImage="/astrologer.jpg" />
 * inside a hero section, e.g. positioned on the right side of a flex row.
 *
 * No external dependencies. Pure SVG + inline <style jsx>.
 * ------------------------------------------------------------------
 */

/* ----------------------------- Data ------------------------------ */

// Standard zodiac order. Aries = House I, Taurus = House II, ... Pisces = House XII
const ZODIAC = [
  {
    name: "Aries",
    house: "I",
    glyph:
      "M11,30 C5,18 10,7 19,12 C23,14 22,20 18,20 M29,30 C35,18 30,7 21,12 C17,14 18,20 22,20 M20,18 L20,33",
  },
  {
    name: "Taurus",
    house: "II",
    glyph:
      "M13,9 C13,2 18,0 20,5 C22,0 27,2 27,9 M20,15 m-9,0 a9,9 0 1,0 18,0 a9,9 0 1,0 -18,0",
  },
  {
    name: "Gemini",
    house: "III",
    glyph: "M9,7 L31,7 M9,33 L31,33 M14,7 L14,33 M26,7 L26,33",
  },
  {
    name: "Cancer",
    house: "IV",
    glyph:
      "M24,12 a5,5 0 1,1 -5,5 C19,10 28,8 28,16 a8,8 0 1,1 -8,8 a5,5 0 1,0 5,-5",
  },
  {
    name: "Leo",
    house: "V",
    glyph:
      "M9,28 a9,9 0 1,1 16,-6 C29,18 31,20 31,24 C31,30 25,31 24,26",
  },
  {
    name: "Virgo",
    house: "VI",
    glyph:
      "M7,7 L7,26 C7,31 13,31 13,26 L13,7 M13,7 L13,26 C13,31 19,31 19,26 L19,9 L19,31 M19,18 C25,15 30,18 28,25 C26,30 21,28 23,23",
  },
  {
    name: "Libra",
    house: "VII",
    glyph: "M7,17 Q20,5 33,17 M6,30 L34,30",
  },
  {
    name: "Scorpio",
    house: "VIII",
    glyph:
      "M7,7 L7,26 C7,31 13,31 13,26 L13,7 M13,7 L13,26 C13,31 19,31 19,26 L19,9 L19,30 L28,30 M28,30 L23,25 M28,30 L23,35",
  },
  {
    name: "Sagittarius",
    house: "IX",
    glyph: "M8,32 L32,8 M21,8 L32,8 L32,19 M14,26 L21,19",
  },
  {
    name: "Capricorn",
    house: "X",
    glyph:
      "M8,8 L8,22 C8,29 18,29 17,21 L14,12 M22,15 C26,11 33,13 32,20 C31,27 24,31 21,26 C19,22 23,20 25,23",
  },
  {
    name: "Aquarius",
    house: "XI",
    glyph: "M5,15 L10,11 L15,19 L20,11 L25,19 L30,11 L35,15 M5,25 L10,21 L15,29 L20,21 L25,29 L30,21 L35,25",
  },
  {
    name: "Pisces",
    house: "XII",
    glyph: "M11,6 C4,14 4,26 11,34 M29,6 C36,14 36,26 29,34 M7,20 L33,20",
  },
];

/* --------------------------- Geometry ----------------------------- */

const CX = 300;
const CY = 300;

// Capricorn sits at the top (12 o'clock) and the wheel reads clockwise
// in reverse zodiac order, matching a classic natal wheel layout.
function signAngle(i) {
  return -90 + 30 * ((((9 - i) % 12) + 12) % 12);
}

function toXY(r, deg) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

// Tiny deterministic PRNG (mulberry32) so the constellation background
// is identical on server and client renders (no hydration mismatch).
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ----------------------------- Radii ------------------------------ */

const R = {
  rim: 268,
  label: 240,
  meshInner: 214,
  glyph: 188,
  wedgeInner: 160,
  houseRings: [150, 130, 110, 90],
  numeral: 122,
  // fallback starburst (used only when no centerImage is supplied)
  centerOuter: 78,
  // center portrait frame
  centerImage: 74,
  centerFrameInner: 81,
  centerFrameOuter: 89,
};

const LINE = "rgba(207, 217, 201, 0.55)";
const LINE_FAINT = "rgba(207, 217, 201, 0.28)";
const CREAM = "#f3ecd8";
const GOLD = "#e7d9ad";

/* ------------------------- Sub components -------------------------- */

function CurvedLabel({ text, radius, centerDeg, fontSize, degPerChar }) {
  const span = (text.length - 1) * degPerChar;
  const start = centerDeg - span / 2;
  return (
    <>
      {text.split("").map((ch, idx) => {
        const a = start + idx * degPerChar;
        const { x, y } = toXY(radius, a);
        const rot = a + 90;
        return (
          <text
            key={idx}
            x={x}
            y={y}
            transform={`rotate(${rot} ${x} ${y})`}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize}
            fill={GOLD}
            fillOpacity={0.92}
            fontWeight={500}
            letterSpacing="3px"
            fontFamily="'Cormorant Garamond', Georgia, serif"
          >
            {ch}
          </text>
        );
      })}
    </>
  );
}

function Sparkle({ x, y, size = 5, delay = 0 }) {
  const s = size;
  const d = `M0,-${s} Q${s * 0.18},-${s * 0.18} ${s},0 Q${s * 0.18},${
    s * 0.18
  } 0,${s} Q-${s * 0.18},${s * 0.18} -${s},0 Q-${s * 0.18},-${
    s * 0.18
  } 0,-${s} Z`;
  return (
    <g
      transform={`translate(${x},${y})`}
      className="zw-sparkle"
      style={{ animationDelay: `${delay}s` }}
    >
      <path d={d} fill={CREAM} filter="url(#zw-glow)" />
    </g>
  );
}

/* ----------------------------- Main -------------------------------- */

export default function ZodiacWheel({
  size = 560,
  animated = true,
  className = "",
  /** URL or import of a square-ish portrait. When provided, it's clipped to a
   *  circle, framed, and held perfectly still at the center while the rest
   *  of the chakra rotates around it. */
  centerImage = null,
  centerImageAlt = "Astrologer portrait",
  /** Seconds for one full rotation of the chakra ring. Lower = faster spin. */
  spinDuration = 90,
}) {
  const hasImage = Boolean(centerImage);

  const boundaryAngles = useMemo(
    () => Array.from({ length: 12 }, (_, i) => signAngle(i) + 15),
    []
  );

  const bgPoints = useMemo(() => {
    const rand = mulberry32(7);
    const pts = [];
    for (let i = 0; i < 46; i++) {
      const ang = rand() * 360;
      const rad = 150 + rand() * 145;
      pts.push(toXY(rad, ang));
    }
    return pts;
  }, []);

  const bgLines = useMemo(() => {
    const lines = [];
    bgPoints.forEach((p, i) => {
      const sorted = [...bgPoints.keys()].sort((a, b) => {
        const da = (bgPoints[a].x - p.x) ** 2 + (bgPoints[a].y - p.y) ** 2;
        const db = (bgPoints[b].x - p.x) ** 2 + (bgPoints[b].y - p.y) ** 2;
        return da - db;
      });
      sorted.slice(1, 3).forEach((j) => {
        lines.push({ x1: p.x, y1: p.y, x2: bgPoints[j].x, y2: bgPoints[j].y });
      });
    });
    return lines;
  }, [bgPoints]);

  const sparklePositions = useMemo(
    () => [
      toXY(R.meshInner, signAngle(9)),
      toXY(R.numeral - 8, signAngle(0)),
      toXY(R.meshInner, signAngle(2)),
      toXY(R.glyph + 18, signAngle(7)),
      toXY(R.houseRings[1], signAngle(4)),
      toXY(R.meshInner, signAngle(11)),
    ],
    []
  );

  const frameTicks = useMemo(
    () => Array.from({ length: 12 }, (_, i) => toXY(R.centerFrameOuter, signAngle(i))),
    []
  );

  return (
    <div
      className={`zw-wrap ${className}`}
      // style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 600 600"
        width="100%"
        height="100%"
        role="img"
        aria-label={
          hasImage
            ? "Zodiac wheel with the twelve astrological signs and houses, centered on a portrait"
            : "Zodiac wheel showing the twelve astrological signs and houses"
        }
      >
        <defs>
          {/* soft ambient halo behind the whole wheel — fades to fully
              transparent at the edge so it blends into any page background
              instead of showing a hard rectangular seam */}
          <radialGradient id="zw-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a3a22" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#0e2415" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#0a1f12" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0a1f12" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="zw-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2f5a3a" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#16321f" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#16321f" stopOpacity="0" />
          </radialGradient>
          <filter id="zw-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {hasImage && (
            <clipPath id="zw-center-clip">
              <circle cx={CX} cy={CY} r={R.centerImage} />
            </clipPath>
          )}
        </defs>

        {/* ---------- soft transparent-edged glow, replaces a hard bg rect ---------- */}
        <circle cx={CX} cy={CY} r={296} fill="url(#zw-vignette)" />

        {/* ---------- faint scattered constellation backdrop (counter-rotates slowly) ---------- */}
        <g
          className={animated ? "zw-bg-rotate" : ""}
          style={{
            transformOrigin: "300px 300px",
            transformBox: "view-box",
            animationDuration: `${spinDuration * 2.6}s`,
          }}
        >
          {bgLines.map((l, i) => (
            <line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={LINE}
              strokeWidth={0.5}
              opacity={0.12}
            />
          ))}
          {bgPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={1.1} fill={CREAM} opacity={0.35} />
          ))}
        </g>

        {/* =========================================================
            ROTOR — the entire chakra ring. Spins as one rigid body.
            The center portrait (rendered after this group) is NOT
            part of the rotor, so it stays still and upright.
           ========================================================= */}
        <g
          className={animated ? "zw-chakra-rotate" : ""}
          style={{
            transformOrigin: "300px 300px",
            transformBox: "view-box",
            animationDuration: `${spinDuration}s`,
          }}
        >
          {/* main rim circles */}
          <circle cx={CX} cy={CY} r={R.rim} fill="none" stroke={LINE} strokeWidth={1} />
          <circle cx={CX} cy={CY} r={R.meshInner} fill="none" stroke={LINE_FAINT} strokeWidth={0.7} />
          <circle cx={CX} cy={CY} r={R.wedgeInner} fill="none" stroke={LINE_FAINT} strokeWidth={0.7} />

          {/* triangulated low-poly mesh band (rim -> houses) */}
          {boundaryAngles.map((b, i) => {
            const outer = toXY(R.rim, b);
            const inner1 = toXY(R.meshInner, b - 15);
            const inner2 = toXY(R.meshInner, b + 15);
            return (
              <g key={i}>
                <line x1={outer.x} y1={outer.y} x2={inner1.x} y2={inner1.y} stroke={LINE_FAINT} strokeWidth={0.6} />
                <line x1={outer.x} y1={outer.y} x2={inner2.x} y2={inner2.y} stroke={LINE_FAINT} strokeWidth={0.6} />
                <circle cx={outer.x} cy={outer.y} r={2} fill={CREAM} opacity={0.8} />
              </g>
            );
          })}
          {ZODIAC.map((_, i) => {
            const p = toXY(R.meshInner, signAngle(i));
            return <circle key={i} cx={p.x} cy={p.y} r={1.6} fill={CREAM} opacity={0.7} />;
          })}

          {/* radial wedge dividers (12 spokes) */}
          {boundaryAngles.map((b, i) => {
            const p1 = toXY(R.rim, b);
            const p2 = toXY(R.wedgeInner, b);
            return (
              <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={LINE_FAINT} strokeWidth={0.6} />
            );
          })}

          {/* zodiac labels */}
          {ZODIAC.map((sign, i) => {
            const a = signAngle(i);
            const long = sign.name.length > 7;
            return (
              <CurvedLabel
                key={sign.name}
                text={sign.name.toUpperCase()}
                radius={R.label}
                centerDeg={a}
                fontSize={long ? 11.5 : 13}
                degPerChar={long ? 2.35 : 2.55}
              />
            );
          })}

          {/* zodiac glyphs */}
          {ZODIAC.map((sign, i) => {
            const a = signAngle(i);
            const { x, y } = toXY(R.glyph, a);
            return (
              <g key={sign.name} transform={`translate(${x - 20}, ${y - 20})`}>
                <path
                  d={sign.glyph}
                  fill="none"
                  stroke={CREAM}
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.95}
                />
              </g>
            );
          })}

          {/* house rings */}
          {R.houseRings.map((r) => (
            <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke={LINE_FAINT} strokeWidth={0.5} />
          ))}

          {/* house spokes + lattice dots */}
          {ZODIAC.map((_, i) => {
            const a = signAngle(i);
            const p1 = toXY(R.houseRings[0], a);
            const p2 = toXY(R.houseRings[R.houseRings.length - 1], a);
            return (
              <g key={i}>
                <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={LINE_FAINT} strokeWidth={0.4} opacity={0.7} />
                {R.houseRings.map((r) => {
                  const p = toXY(r, a);
                  return <circle key={r} cx={p.x} cy={p.y} r={1} fill={CREAM} opacity={0.4} />;
                })}
              </g>
            );
          })}

          {/* Roman numerals (houses) */}
          {ZODIAC.map((sign, i) => {
            const a = signAngle(i);
            const { x, y } = toXY(R.numeral, a);
            return (
              <text
                key={sign.house}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={11}
                fill={CREAM}
                fontFamily="'Cormorant Garamond', Georgia, serif"
                opacity={0.85}
              >
                {sign.house}
              </text>
            );
          })}

          {/* sparkles scattered through the ring */}
          {sparklePositions.map((p, i) => (
            <Sparkle key={i} x={p.x} y={p.y} size={5} delay={i * 0.4} />
          ))}

          {/* fallback starburst — only rendered (and only spins) when there's no portrait */}
          {!hasImage && (
            <>
              {Array.from({ length: 16 }, (_, k) => {
                const a = k * (360 / 16);
                const p = toXY(R.centerOuter, a);
                return (
                  <line key={k} x1={CX} y1={CY} x2={p.x} y2={p.y} stroke={LINE_FAINT} strokeWidth={0.5} />
                );
              })}
              {[18, 32, 46, 60].map((rr) =>
                Array.from({ length: 16 }, (_, k) => {
                  const a = k * (360 / 16) + (rr === 32 || rr === 60 ? 5 : 0);
                  const p = toXY(rr, a);
                  return <circle key={`${rr}-${k}`} cx={p.x} cy={p.y} r={0.9} fill={CREAM} opacity={0.4} />;
                })
              )}
              <Sparkle x={CX} y={CY} size={7} delay={0} />
            </>
          )}
        </g>

        {/* =========================================================
            STATIC CENTER — only rendered when a portrait is supplied.
            Lives outside the rotor, so it never moves or tilts.
           ========================================================= */}
        {hasImage && (
          <g>
            <circle cx={CX} cy={CY} r={R.centerFrameOuter + 16} fill="url(#zw-center-glow)" />

            {/* 12 small ticks echoing the wedge rhythm of the ring */}
            {frameTicks.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={1.6} fill={CREAM} opacity={0.55} />
            ))}

            <circle cx={CX} cy={CY} r={R.centerFrameOuter} fill="none" stroke={GOLD} strokeWidth={1} opacity={0.85} />
            <circle cx={CX} cy={CY} r={R.centerFrameInner} fill="none" stroke={LINE_FAINT} strokeWidth={0.6} />

            <image
              href={centerImage}
              x={CX - R.centerImage}
              y={CY - R.centerImage}
              width={R.centerImage * 2}
              height={R.centerImage * 2}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#zw-center-clip)"
            >
              <title>{centerImageAlt}</title>
            </image>

            <circle cx={CX} cy={CY} r={R.centerImage} fill="none" stroke={CREAM} strokeWidth={1.2} opacity={0.9} />

            {/* small accent sparkles at N/E/S/W of the frame */}
            {[0, 90, 180, 270].map((a, i) => {
              const p = toXY(R.centerFrameOuter, a - 90);
              return <Sparkle key={a} x={p.x} y={p.y} size={4} delay={i * 0.5} />;
            })}
          </g>
        )}
      </svg>

      <style jsx>{`
        .zw-wrap {
          display: inline-block;
          filter: drop-shadow(0 0 40px rgba(20, 60, 35, 0.45));
        }
        :global(.zw-chakra-rotate) {
          animation-name: zw-rotate-cw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        :global(.zw-bg-rotate) {
          animation-name: zw-rotate-ccw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        :global(.zw-sparkle) {
          animation: zw-twinkle 3.2s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes zw-rotate-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes zw-rotate-ccw {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes zw-twinkle {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.zw-chakra-rotate),
          :global(.zw-bg-rotate),
          :global(.zw-sparkle) {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}