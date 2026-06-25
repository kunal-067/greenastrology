'use client'

import { cn } from "@/lib/utils";
import { SectionBadge, SectionHeading } from "../ui";

const REVIEWS = [
    { name: "Priya S.", city: "London", img: "/whatsapp_reviews/r1.png" },
    { name: "Anita K.", city: "Birmingham", img: "/whatsapp_reviews/r2.png" },
    { name: "Sunita R.", city: "Manchester", img: "/whatsapp_reviews/r3.png" },
    { name: "Meera P.", city: "Leicester", img: "/whatsapp_reviews/r4.png" },
];

// ── Marquee Reviews ────────────────────────────────────────────────────────────

export function MarqueeReviews({ onCardClick, className }) {
    const doubled = [...REVIEWS, ...REVIEWS];

    return (
        <div className={`relative overflow-hidden py-4 group ${className}`}>

            {/* fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10
                      bg-gradient-to-r from-[#0a110d] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10
                      bg-gradient-to-l from-[#0a110d] to-transparent" />

            <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
                {doubled.map((r, i) => (
                    <button
                        key={i}
                        onClick={() => onCardClick?.(r)}
                        className={cn(
                            "shrink-0 max-md:h-45 max-md:w-37 w-64 h-44 rounded-2xl overflow-hidden text-left cursor-pointer",
                            "transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1",
                            // cosmic card surface
                            "bg-[#0f1e12] border border-[rgba(74,163,89,0.2)]",
                            "hover:border-[rgba(93,207,114,0.55)] hover:shadow-[0_0_24px_rgba(77,184,106,0.15)]",
                            "relative group/card"
                        )}
                    >
                        {/* subtle inner glow on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300
                            bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.18),transparent_70%)] pointer-events-none" />

                        <div className="w-full h-full overflow-hidden rounded-2xl">
                            <img
                                src={r.img}
                                alt={`Review from ${r.name}, ${r.city}`}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* name + city overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 px-3 py-2
                            bg-gradient-to-t from-[rgba(10,17,13,0.9)] to-transparent">
                            <p className="text-[11px] font-semibold text-[#9edaab] leading-none">{r.name}</p>
                            <p className="text-[10px] text-[rgba(180,220,185,0.5)] mt-0.5">{r.city}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

// ── TrustBar ────────────────────────────────────────────────────────────────────

const TrustBar = () => {
    return (
        <div
            id="testimonials"
            className="hidden md:block max-lg:py-7 py-16
                 bg-[#0a110d]
                 border-y border-[rgba(74,163,89,0.15)]
                 overflow-hidden relative"
        >
            {/* background radial glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                      w-[600px] h-[300px]
                      bg-[radial-gradient(ellipse_at_center,rgba(30,107,48,0.14),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    {/* SectionBadge — override colours via CSS variable or wrap */}
                    <div className="inline-flex items-center gap-2 mb-4
                          text-[10px] tracking-[3.5px] uppercase text-[#4db86a]
                          before:content-[''] before:block before:w-5 before:h-px before:bg-[#4db86a]
                          after:content-['']  after:block  after:w-5  after:h-px  after:bg-[#4db86a]">
                        Real Results
                    </div>

                    <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl font-bold text-[#e8f5ea] mb-3 leading-tight">
                        What Our{" "}
                        <span className="bg-linear-to-r from-[#5dcf72] to-[#9edaab]
                             bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>

                    <p className="text-sm text-[rgba(180,220,185,0.55)] max-w-sm mx-auto leading-relaxed">
                        Hundreds of real WhatsApp reviews from clients across the UK.
                    </p>
                </div>

                {/* Marquee */}
                <MarqueeReviews onCardClick={(r) => console.log("clicked", r)} />

                {/* Footer hint */}
                <p className="text-center text-[10px] tracking-widest uppercase
                      text-[rgba(180,220,185,0.3)] mt-8">
                    Hover to pause · Click any card to read full review
                </p>
            </div>
        </div>
    );
};

export default TrustBar;