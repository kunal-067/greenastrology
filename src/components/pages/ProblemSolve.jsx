'use client'

import { SectionEyebrow, SectionHeading, GlassCard } from "./ui";

const GREEN1 = "#4db86a";
const GREEN2 = "#9edaab";
const GREEN3 = "#1e6b30";

const DEFAULT_PROBLEMS = [
  { icon: "💔", title: "Love & Marriage",     body: "Delayed marriage, compatibility clashes, separation, remarriage guidance."         },
  { icon: "💼", title: "Career & Business",   body: "Job loss, promotion blocks, business failure, financial stagnation."               },
  { icon: "🏠", title: "Property & Legal",    body: "Land disputes, court cases, property stuck in limbo."                             },
  { icon: "👶", title: "Children & Fertility",body: "Conception difficulties, child health, education struggles."                       },
  { icon: "🌀", title: "Black Magic & Vastu", body: "Negative energies, evil eye, home or workplace Vastu doshas."                     },
  { icon: "🩺", title: "Health & Longevity",  body: "Chronic illness patterns rooted in planetary afflictions."                        },
  { icon: "✈️", title: "Foreign Settlement",  body: "Visa delays, overseas career, migration timing."                                  },
  { icon: "🧠", title: "Mental Peace",         body: "Anxiety, recurring nightmares, unexplained fears — often karmic in origin."      },
];

/**
 * @prop {string}  eyebrow
 * @prop {string}  heading
 * @prop {string}  headingShimmer
 * @prop {string}  sub
 * @prop {Array}   problems        - [{ icon, title, body }]
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function ProblemsSolvedSection({
  eyebrow        = "Specialisations",
  heading        = "Problems",
  headingShimmer = "We Resolve",
  sub            = "From stubborn career blocks to family disputes — Guruji has guided thousands through every kind of life challenge.",
  problems       = DEFAULT_PROBLEMS,
}) {
  return (
    <section className="relative py-24 overflow-hidden
                        bg-[#0a110d]
                        border-y border-[rgba(74,163,89,0.15)]">

      {/* bg glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                      w-[700px] h-[300px]
                      bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px]
                      bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px]
                      bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.1),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 z-10">

        {/* header */}
        <div className="text-center mb-14">

          {/* eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5
                          bg-[rgba(30,107,48,0.2)] border border-[rgba(74,163,89,0.35)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4db86a] animate-pulse
                             shadow-[0_0_6px_rgba(77,184,106,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[3.5px] text-[#4db86a]">
              {eyebrow}
            </span>
          </div>

          {/* heading */}
          <h2 className="font-['Cinzel',serif] text-4xl md:text-5xl font-bold
                         text-[#e8f5ea] leading-tight mb-4">
            {heading}{" "}
            <span style={{
              background: `linear-gradient(90deg,${GREEN1},${GREEN2},#a8edba,${GREEN1})`,
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
            }}>
              {headingShimmer}
            </span>
          </h2>

          <p className="text-[15px] text-[rgba(180,220,185,0.55)] leading-relaxed max-w-xl mx-auto">
            {sub}
          </p>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 overflow-hidden
                         bg-[#0d1c10]
                         border border-[rgba(74,163,89,0.18)]
                         hover:border-[rgba(93,207,114,0.45)]
                         hover:shadow-[0_0_28px_rgba(30,107,48,0.2)]
                         transition-all duration-300 cursor-default"
              style={{
                animation: `fadeUp .5s ${i * 0.06}s both`,
                boxShadow: `0 0 12px rgba(30,107,48,0.1), inset 0 0 12px rgba(30,107,48,0.04)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 28px rgba(30,107,48,0.22), inset 0 0 24px rgba(30,107,48,0.1)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = `0 0 12px rgba(30,107,48,0.1), inset 0 0 12px rgba(30,107,48,0.04)`;
              }}
            >
              {/* top-right index */}
              <span className="absolute top-3.5 right-4
                               font-['Cinzel',serif] text-[9px] tracking-widest
                               text-[rgba(255,255,255,0.07)] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* inner hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 pointer-events-none rounded-2xl
                              bg-[radial-gradient(ellipse_at_top_left,rgba(30,107,48,0.16),transparent_70%)]" />

              {/* top slide-in line */}
              <div className="absolute top-0 left-0 right-0 h-px
                              bg-gradient-to-r from-transparent via-[rgba(74,163,89,0.5)] to-transparent
                              scale-x-0 group-hover:scale-x-100
                              transition-transform duration-500 origin-center" />

              {/* icon box */}
              <div
                className="relative w-12 h-12 text-[#5dcf72] rounded-xl flex items-center justify-center
                           text-2xl mb-4
                           bg-[rgba(30,107,48,0.2)]
                           border border-[rgba(74,163,89,0.25)]
                           transition-all duration-300
                           group-hover:shadow-[0_0_16px_rgba(30,107,48,0.35)]"
              >
                {p.icon}
              </div>

              {/* title */}
              <h3 className="font-['Cinzel',serif] text-[13.5px] font-semibold
                             text-[#e8f5ea] mb-2 leading-snug
                             group-hover:text-white transition-colors duration-200">
                {p.title}
              </h3>

              {/* body */}
              <p className="text-[12.5px] text-[rgba(180,220,185,0.52)] leading-relaxed">
                {p.body}
              </p>

              {/* hover underline */}
              <div className="mt-4 h-px w-0 group-hover:w-full
                              transition-all duration-500 rounded-full
                              bg-gradient-to-r from-[#4db86a] to-[#9edaab]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProblemsSolvedSection;