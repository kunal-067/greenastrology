import {SectionEyebrow, SectionHeading, WAButton, GlassCard, StepConnector} from "@/components/pages/ui"

const GREEN1 = "#4db86a";
const GREEN2 = "#9edaab";
const GREEN3 = "#1e6b30";

/**
 * @prop {string}  eyebrow          - Small pill label above heading
 * @prop {string}  heading          - Main heading text
 * @prop {string}  headingShimmer   - Gradient-shimmer word(s) appended to heading
 * @prop {string}  sub              - Paragraph below heading
 * @prop {Array}   steps            - [{ icon, title, body, chip? }]
 * @prop {string}  ctaLabel
 * @prop {string}  waLink
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function HowGurujiSolvesIt({
  eyebrow        = "The Process",
  heading        = "How Guruji",
  headingShimmer = "Solves It",
  sub            = "A time-tested four-step method rooted in Vedic wisdom — personalised for your life, delivered in plain language.",
  steps          = [
    {
      icon: "🔭",
      title: "Deep Kundali Reading",
      body: "Guruji studies your full birth chart — planets, houses, doshas and yogas — to find the exact root of your challenge.",
      chip: "Usually 30 min",
    },
    {
      icon: "🪬",
      title: "Root-Cause Diagnosis",
      body: "Most problems have a spiritual or karmic trigger. Guruji identifies it precisely so the remedy hits the cause, not just the symptom.",
      chip: "No guesswork",
    },
    {
      icon: "📿",
      title: "Custom Remedies",
      body: "Mantras, gemstones, yantras, or ritual timings — only what your chart actually needs. Never a one-size-fits-all package.",
      chip: "Personalised",
    },
    {
      icon: "🔄",
      title: "Follow-Up & Tracking",
      body: "Guruji checks back in. If circumstances shift, the remedy is refined. You are never left without guidance mid-journey.",
      chip: "Ongoing support",
    },
  ],
  ctaLabel = "Start Your Reading — Free",
  waLink   = "#",
}) {
  return (
    <section className="relative py-24 overflow-hidden
                        bg-[#0a110d]
                        border-y border-[rgba(74,163,89,0.15)]">

      {/* bg glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]
                      rounded-full blur-[120px] opacity-25
                      bg-[radial-gradient(circle,rgba(30,107,48,0.5),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px]
                      rounded-full blur-[100px] opacity-20
                      bg-[radial-gradient(circle,rgba(77,184,106,0.4),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4
                      grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

        {/* ── Left — sticky heading ── */}
        <div className="lg:sticky lg:top-28">

          {/* eyebrow */}
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

          <p className="text-[15px] text-[rgba(180,220,185,0.58)] leading-relaxed mb-10 max-w-md">
            {sub}
          </p>

          <WAButton className={` bg-[${GREEN1}]`} href={waLink}>{ctaLabel}</WAButton>
        </div>

        {/* ── Right — steps ── */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative pl-16"
              style={{ animation: `fadeUp .6s ${i * 0.1}s both` }}
            >
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 w-px
                                bg-gradient-to-b from-[rgba(74,163,89,0.5)] to-transparent"
                     style={{ height: "calc(100% + 24px)" }} />
              )}

              {/* step bubble */}
              <div
                className="absolute left-0 top-0 w-12 h-12 rounded-full
                           flex items-center justify-center text-xl
                           border-2 shadow-lg
                           transition-all duration-300 text-white"
                style={{
                  background: `linear-gradient(135deg, rgba(30,107,48,0.35), rgba(77,184,106,0.2))`,
                  borderColor: "rgba(74,163,89,0.5)",
                  boxShadow: `0 0 16px rgba(30,107,48,0.3)`,
                }}
              >
                {step.icon}
              </div>

              {/* card */}
              <div
                className="group relative rounded-2xl p-6 overflow-hidden
                           bg-[#0d1c10]
                           border border-[rgba(74,163,89,0.18)]
                           hover:border-[rgba(93,207,114,0.45)]
                           hover:shadow-[0_0_28px_rgba(30,107,48,0.18)]
                           transition-all duration-300"
              >
                {/* inner hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 pointer-events-none rounded-2xl
                                bg-[radial-gradient(ellipse_at_top_left,rgba(30,107,48,0.16),transparent_70%)]" />

                {/* top strip */}
                <div className="absolute top-0 left-0 right-0 h-px
                                bg-gradient-to-r from-transparent via-[rgba(74,163,89,0.4)] to-transparent
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 origin-center" />

                <div className="relative flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-['Cinzel',serif] text-[15px] font-semibold text-[#e8f5ea]">
                    {step.title}
                  </h3>
                  {step.chip && (
                    <span className="shrink-0 text-[9px] font-bold uppercase tracking-[2px]
                                     px-3 py-1 rounded-full
                                     bg-[rgba(30,107,48,0.25)]
                                     border border-[rgba(74,163,89,0.3)]
                                     text-[#5dcf72]">
                      {step.chip}
                    </span>
                  )}
                </div>

                <p className="relative text-[13px] text-[rgba(180,220,185,0.58)] leading-relaxed">
                  {step.body}
                </p>

                {/* step index */}
                <span className="absolute bottom-4 right-5
                                 font-['Cinzel',serif] text-[9px] tracking-widest
                                 text-[rgba(255,255,255,0.07)] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowGurujiSolvesIt;