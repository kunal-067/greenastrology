import React from 'react';
import { SectionBadge, SectionHeading, Stars } from "../ui";
import { REVIEWS } from "@/lib/data";
import MobileCarousel from '../ui/MobileCarousel';

// ── Shared card ───────────────────────────────────────────────────────────────
const ReviewCard = ({ r }) => (
  <div className="h-full rounded-2xl p-6
                  bg-[#0d1c10]
                  border border-[rgba(74,163,89,0.18)]
                  hover:border-[rgba(93,207,114,0.45)]
                  hover:shadow-[0_0_28px_rgba(30,107,48,0.18)]
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col relative overflow-hidden group">

    {/* top-left glow on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-[radial-gradient(ellipse_at_top_left,rgba(30,107,48,0.16),transparent_70%)]
                    pointer-events-none rounded-2xl" />

    {/* quote mark watermark */}
    <span className="absolute top-3 right-4 font-['Cinzel',serif] text-6xl leading-none
                     text-[rgba(74,163,89,0.08)] select-none pointer-events-none">"</span>

    {/* stars — Stars component renders as-is; colour overridden below if needed */}
    <div className="relative">
      <Stars count={r.stars} />
    </div>

    {/* review text */}
    <p className="relative mt-3 flex-1 text-sm text-[rgba(180,220,185,0.65)] leading-relaxed italic">
      &ldquo;{r.text}&rdquo;
    </p>

    {/* divider */}
    <div className="my-4 h-px bg-gradient-to-r from-transparent via-[rgba(74,163,89,0.25)] to-transparent" />

    {/* author */}
    <div className="relative flex items-center gap-3">
      <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden
                      bg-[rgba(30,107,48,0.35)]
                      border border-[rgba(74,163,89,0.4)]
                      flex items-center justify-center
                      font-['Cinzel',serif] text-sm font-bold text-[#5dcf72]">
        {/* {r.name[0]} */}
        <img src={r?.pp} alt={r.name} className='w-full h-full blur-[1px]' />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#c8eecf]">{r.name}</p>
        <p className="text-xs text-[rgba(180,220,185,0.4)]">{r.city}, UK</p>
      </div>
    </div>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
export const TextTestimonials = ({ reviews = REVIEWS }) => (
  <div className="max-lg:py-7 py-16 px-4
                  bg-[#0a110d]
                  border-y border-[rgba(74,163,89,0.15)]
                  relative overflow-hidden">

    {/* background glows */}
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                    w-[700px] h-[300px]
                    bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.14),transparent_70%)]" />
    <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px]
                    bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_70%)]" />
    <div className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[350px]
                    bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.1),transparent_70%)]" />

    <div className="max-w-7xl mx-auto relative z-10">

      {/* header */}
      <div className="text-center mb-14">
        <SectionBadge>Client Love</SectionBadge>
        <SectionHeading title="Voices From" accent="Across the UK" />
      </div>

      {/* grid / carousel */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        <MobileCarousel autoInterval={4500}>
          {reviews.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </MobileCarousel>
      </div>

    </div>
  </div>
);

export default TextTestimonials;