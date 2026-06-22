'use client'
import { ArrowRight, HeartCrack, Gem, Gavel, Wand2, Users, ScrollText, Info } from "lucide-react";
import { SectionBadge, SectionHeading } from "../ui";
import { WA_LINK } from "@/lib/constants";

const PROBLEMS = [
  {
    icon: HeartCrack,
    title: "Breakup & Lost Love",
    desc: "Get your ex back — even if they've blocked you or moved on",
    accent: "rgba(239,68,68,0.15)",
    border: "rgba(239,68,68,0.25)",
    hover:  "rgba(239,68,68,0.35)",
    glow:   "rgba(239,68,68,0.12)",
    iconColor: "#f87171",
  },
  {
    icon: Gem,
    title: "Marriage Problems",
    desc: "Restore harmony, love and trust in your marriage",
    accent: "rgba(251,113,133,0.15)",
    border: "rgba(251,113,133,0.25)",
    hover:  "rgba(251,113,133,0.35)",
    glow:   "rgba(251,113,133,0.1)",
    iconColor: "#fb7185",
  },
  {
    icon: Gavel,
    title: "Stop Divorce",
    desc: "Halt divorce proceedings even after papers have been filed",
    accent: "rgba(96,165,250,0.15)",
    border: "rgba(96,165,250,0.25)",
    hover:  "rgba(96,165,250,0.35)",
    glow:   "rgba(96,165,250,0.1)",
    iconColor: "#60a5fa",
  },
  {
    icon: Wand2,
    title: "Negative Energy",
    desc: "Remove black magic, evil eye and third-party interference",
    accent: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.25)",
    hover:  "rgba(167,139,250,0.35)",
    glow:   "rgba(167,139,250,0.1)",
    iconColor: "#a78bfa",
  },
  {
    icon: Users,
    title: "Family Opposition",
    desc: "Overcome family barriers blocking your relationship",
    accent: "rgba(45,212,191,0.15)",
    border: "rgba(45,212,191,0.25)",
    hover:  "rgba(45,212,191,0.35)",
    glow:   "rgba(45,212,191,0.1)",
    iconColor: "#2dd4bf",
  },
  {
    icon: ScrollText,
    title: "Kundli Analysis",
    desc: "Reveal your love destiny & compatibility",
    accent: "rgba(251,191,36,0.15)",
    border: "rgba(251,191,36,0.25)",
    hover:  "rgba(251,191,36,0.35)",
    glow:   "rgba(251,191,36,0.1)",
    iconColor: "#fbbf24",
  },
];

export default function ProblemsSolver() {
  return (
    <div
      id="services"
      className="py-20 px-4
                 bg-[#0a110d]
                 border-y border-[rgba(74,163,89,0.15)]
                 relative overflow-hidden"
    >
      {/* bg glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px]
                      bg-[radial-gradient(ellipse_at_top_right,rgba(30,107,48,0.15),transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px]
                      bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center mb-14">
          <SectionBadge>Facing a Problem</SectionBadge>
          <SectionHeading
            title="Problems Guru Ji"
            accent="Can Solve"
            subtitle="Ancient Vedic wisdom applied to your most personal challenges — every situation is unique and solvable."
          />

          {/* sub-label */}
          <div className="inline-flex items-center gap-2 mt-2
                          text-[10px] tracking-[3px] uppercase
                          text-[rgba(180,220,185,0.45)]">
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
                className="group relative rounded-2xl p-5 overflow-hidden
                           flex items-center gap-4
                           bg-[#0d1c10]
                           border transition-all duration-300
                           hover:-translate-y-1 cursor-pointer no-underline"
                style={{
                  borderColor: p.border,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.hover;
                  e.currentTarget.style.boxShadow = `0 0 32px ${p.glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = p.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* hover inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${p.accent}, transparent 70%)` }}
                />

                {/* index */}
                <span className="absolute top-3.5 right-4
                                 font-['Cinzel',serif] text-[9px] tracking-widest
                                 text-[rgba(255,255,255,0.1)] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* icon box */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                              transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: p.accent,
                    border: `1px solid ${p.border}`,
                  }}
                >
                  <Icon size={20} style={{ color: p.iconColor }} strokeWidth={1.75} />
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Cinzel',serif] text-[13px] font-semibold
                                 text-[#e8f5ea] mb-1 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[12px] text-[rgba(180,220,185,0.5)]
                                leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* arrow */}
                <div
                  className="shrink-0 w-8 h-8 rounded-full
                              flex items-center justify-center
                              opacity-0 group-hover:opacity-100
                              -translate-x-2 group-hover:translate-x-0
                              transition-all duration-300"
                  style={{
                    background: p.accent,
                    border: `1px solid ${p.border}`,
                    color: p.iconColor,
                  }}
                >
                  <ArrowRight size={14} />
                </div>

                {/* bottom slide-in border */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px
                              scale-x-0 group-hover:scale-x-100
                              transition-transform duration-500 origin-center"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.border}, transparent)` }}
                />
              </a>
            );
          })}
        </div>

        {/* bottom hint */}
        <div className="mt-10 flex items-center justify-center gap-2.5
                        text-[12px] text-[rgba(180,220,185,0.4)]">
          <Info size={13} className="text-[#4db86a] shrink-0" />
          Not sure which applies?{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5
                       text-[#4db86a] hover:text-[#5dcf72]
                       font-medium transition-colors duration-200"
          >
            Tell Guru Ji your situation
            <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </div>
  );
}