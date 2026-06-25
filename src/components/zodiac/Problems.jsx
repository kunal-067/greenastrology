'use client'
import { ArrowRight, HeartCrack, Gem, Gavel, Wand2, Users, ScrollText, Info } from "lucide-react";
import { SectionBadge, SectionHeading } from "../ui";
import { WA_LINK } from "@/lib/constants";

const PROBLEMS = [
  {
    icon: HeartCrack,
    title: "Breakup & Lost Love",
    desc: "Get your ex back — even if they've blocked you or moved on",
    leftBorder: "#f87171",
    accent: "rgba(239,68,68,0.08)",
    accentHover: "rgba(239,68,68,0.16)",
    border: "rgba(239,68,68,0.18)",
    borderHover: "rgba(239,68,68,0.4)",
    glow: "0 0 0 1px rgba(239,68,68,0.25), 0 8px 32px rgba(239,68,68,0.18)",
    iconBg: "rgba(239,68,68,0.14)",
    iconColor: "#f87171",
    tag: "Most Common",
  },
  {
    icon: Gem,
    title: "Marriage Problems",
    desc: "Restore harmony, love and trust in your marriage",
    leftBorder: "#fb7185",
    accent: "rgba(251,113,133,0.08)",
    accentHover: "rgba(251,113,133,0.16)",
    border: "rgba(251,113,133,0.18)",
    borderHover: "rgba(251,113,133,0.4)",
    glow: "0 0 0 1px rgba(251,113,133,0.25), 0 8px 32px rgba(251,113,133,0.15)",
    iconBg: "rgba(251,113,133,0.14)",
    iconColor: "#fb7185",
    tag: null,
  },
  {
    icon: Gavel,
    title: "Stop Divorce",
    desc: "Halt divorce proceedings even after papers have been filed",
    leftBorder: "#60a5fa",
    accent: "rgba(96,165,250,0.08)",
    accentHover: "rgba(96,165,250,0.16)",
    border: "rgba(96,165,250,0.18)",
    borderHover: "rgba(96,165,250,0.4)",
    glow: "0 0 0 1px rgba(96,165,250,0.25), 0 8px 32px rgba(96,165,250,0.15)",
    iconBg: "rgba(96,165,250,0.14)",
    iconColor: "#60a5fa",
    tag: "Urgent",
  },
  {
    icon: Wand2,
    title: "Negative Energy",
    desc: "Remove black magic, evil eye and third-party interference",
    leftBorder: "#a78bfa",
    accent: "rgba(167,139,250,0.08)",
    accentHover: "rgba(167,139,250,0.16)",
    border: "rgba(167,139,250,0.18)",
    borderHover: "rgba(167,139,250,0.4)",
    glow: "0 0 0 1px rgba(167,139,250,0.25), 0 8px 32px rgba(167,139,250,0.15)",
    iconBg: "rgba(167,139,250,0.14)",
    iconColor: "#a78bfa",
    tag: null,
  },
  {
    icon: Users,
    title: "Family Opposition",
    desc: "Overcome family barriers blocking your relationship",
    leftBorder: "#2dd4bf",
    accent: "rgba(45,212,191,0.08)",
    accentHover: "rgba(45,212,191,0.16)",
    border: "rgba(45,212,191,0.18)",
    borderHover: "rgba(45,212,191,0.4)",
    glow: "0 0 0 1px rgba(45,212,191,0.25), 0 8px 32px rgba(45,212,191,0.15)",
    iconBg: "rgba(45,212,191,0.14)",
    iconColor: "#2dd4bf",
    tag: null,
  },
  {
    icon: ScrollText,
    title: "Kundli Analysis",
    desc: "Reveal your love destiny & compatibility",
    leftBorder: "#fbbf24",
    accent: "rgba(251,191,36,0.08)",
    accentHover: "rgba(251,191,36,0.16)",
    border: "rgba(251,191,36,0.18)",
    borderHover: "rgba(251,191,36,0.4)",
    glow: "0 0 0 1px rgba(251,191,36,0.25), 0 8px 32px rgba(251,191,36,0.15)",
    iconBg: "rgba(251,191,36,0.14)",
    iconColor: "#fbbf24",
    tag: "Popular",
  },
];

export default function ProblemsSolver() {
  return (
    <div
      id="services"
      className="max-lg:py-7 py-16 px-4 bg-[#0a110d] border-y border-[rgba(74,163,89,0.15)] relative overflow-hidden"
    >
      {/* bg glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,rgba(30,107,48,0.15),transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center mb-14">
          <SectionBadge>Facing a Problem</SectionBadge>
          <SectionHeading
            title="Problems Guru Ji"
            accent="Can Solve"
            subtitle="Ancient Vedic wisdom applied to your most personal challenges — every situation is unique and solvable."
          />
          <div className="inline-flex items-center gap-2 mt-2 text-[10px] tracking-[3px] uppercase text-[rgba(180,220,185,0.45)]">
            <Wand2 size={11} className="text-[#4db86a]" />
            What can Guru Ji solve for you?
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <a
                key={i}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl p-5 overflow-hidden flex items-center gap-4 no-underline cursor-pointer"
                style={{
                  background: "#0d1c10",
                  // Separate border handling: left is full-color, rest are dim
                  borderTop: `1px solid ${p.border}`,
                  borderRight: `1px solid ${p.border}`,
                  borderBottom: `1px solid ${p.border}`,
                  borderLeft: `3px solid ${p.leftBorder}`,
                  boxShadow: `inset 3px 0 12px -4px ${p.leftBorder}40`,
                  transition: "all 0.28s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderTop = `1px solid ${p.borderHover}`;
                  el.style.borderRight = `1px solid ${p.borderHover}`;
                  el.style.borderBottom = `1px solid ${p.borderHover}`;
                  el.style.borderLeft = `3px solid ${p.leftBorder}`;
                  el.style.boxShadow = `${p.glow}, inset 3px 0 20px -4px ${p.leftBorder}55`;
                  el.style.transform = "translateY(-3px)";
                  el.style.background = p.accentHover;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderTop = `1px solid ${p.border}`;
                  el.style.borderRight = `1px solid ${p.border}`;
                  el.style.borderBottom = `1px solid ${p.border}`;
                  el.style.borderLeft = `3px solid ${p.leftBorder}`;
                  el.style.boxShadow = `inset 3px 0 12px -4px ${p.leftBorder}40`;
                  el.style.transform = "translateY(0)";
                  el.style.background = "#0d1c10";
                }}
              >
                {/* Hover radial glow from top-left */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${p.accentHover}, transparent 70%)` }}
                />

                {/* Left-edge vertical glow bar (always visible) */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full pointer-events-none"
                  style={{
                    background: p.leftBorder,
                    boxShadow: `0 0 10px 2px ${p.leftBorder}99, 0 0 24px 4px ${p.leftBorder}44`,
                    filter: "blur(0.5px)",
                  }}
                />

                {/* Card index */}
                <span className="absolute top-3.5 right-4 font-['Cinzel',serif] text-[9px] tracking-widest text-[rgba(255,255,255,0.08)] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag badge */}
                {p.tag && (
                  <span
                    className="absolute top-3 right-9 text-[9px] font-semibold tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: `${p.leftBorder}22`,
                      color: p.leftBorder,
                      border: `1px solid ${p.leftBorder}55`,
                    }}
                  >
                    {p.tag}
                  </span>
                )}

                {/* Icon box */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: p.iconBg,
                    border: `1px solid ${p.leftBorder}33`,
                    boxShadow: `0 0 12px ${p.leftBorder}22`,
                  }}
                >
                  <Icon size={20} style={{ color: p.iconColor }} strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Cinzel',serif] text-[13px] font-semibold text-[#e8f5ea] mb-1 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[12px] text-[rgba(180,220,185,0.5)] leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* Arrow — slides in on hover */}
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  style={{
                    background: p.iconBg,
                    border: `1px solid ${p.leftBorder}55`,
                    color: p.iconColor,
                  }}
                >
                  <ArrowRight size={14} />
                </div>

                {/* Bottom shimmer line on hover */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.leftBorder}88, transparent)` }}
                />
              </a>
            );
          })}
        </div>

        {/* bottom hint */}
        <div className="mt-10 flex items-center justify-center gap-2.5 text-[12px] text-[rgba(180,220,185,0.4)]">
          <Info size={13} className="text-[#4db86a] shrink-0" />
          Not sure which applies?{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#4db86a] hover:text-[#5dcf72] font-medium transition-colors duration-200"
          >
            Tell Guru Ji your situation
            <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </div>
  );
}