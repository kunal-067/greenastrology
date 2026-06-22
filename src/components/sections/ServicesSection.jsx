import React from 'react'
import { Section, SectionBadge, SectionHeading } from "../ui"
import { SERVICES } from "@/lib/data"
import MobileCarousel from '../ui/MobileCarousel'

const ServicesSection = () => {
    return (
        <div className="py-20 px-4
                  bg-[#0a110d]
                  border-y border-[rgba(74,163,89,0.15)]
                  relative overflow-hidden">

            {/* background glows */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                    w-175 h-75
                    bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.14),transparent_70%)]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-87.5 h-87.5
                    bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_70%)]" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-87.5 h-87.5
                    bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.1),transparent_70%)]" />


            {/* background glows */}
            <div className="pointer-events-none absolute top-0 right-0 w-125 h-125
                      bg-[radial-gradient(ellipse_at_top_right,rgba(30,107,48,0.16),transparent_65%)]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-100 h-100
                      bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.12),transparent_65%)]" />


            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-14">
                    <SectionBadge>Our Services</SectionBadge>
                    <SectionHeading
                        title="Problems"
                        accent="We Solve"
                        subtitle="Ancient wisdom meets modern guidance. Every situation is unique — and solvable."
                    />
                </div>

                {/* Grid */}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <MobileCarousel autoInterval={5500}>

                    {SERVICES.map((s, i) => (
                        <a
                            key={i}
                            href={s.route}
                            className="group relative rounded-3xl p-7 overflow-hidden block
                         bg-[#0d1c10]
                         border border-[rgba(74,163,89,0.18)]
                         hover:border-[rgba(93,207,114,0.5)]
                         hover:shadow-[0_0_32px_rgba(30,107,48,0.2)]
                         hover:-translate-y-1
                         transition-all duration-300 cursor-pointer"
                        >
                            {/* hover inner glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              bg-[radial-gradient(ellipse_at_top_left,rgba(30,107,48,0.18),transparent_70%)]
                              rounded-3xl pointer-events-none" />

                            {/* top-right corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none
                              bg-[radial-gradient(ellipse_at_top_right,rgba(74,163,89,0.12),transparent_70%)]" />

                            {/* index number */}
                            <span className="absolute top-5 right-6 font-['Cinzel',serif] text-xs
                               text-[rgba(74,163,89,0.25)] font-bold tracking-widest select-none">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div className="relative">
                                {/* icon */}
                                <div className="text-4xl mb-5 grayscale-0">{s.icon}</div>

                                {/* title */}
                                <h3 className="font-['Cinzel',serif] text-lg font-bold
                               text-[#e8f5ea] mb-3 leading-snug">
                                    {s.title}
                                </h3>

                                {/* desc */}
                                <p className="text-sm text-[rgba(180,220,185,0.58)] leading-relaxed mb-6">
                                    {s.desc}
                                </p>

                                {/* learn more */}
                                <span className="inline-flex items-center gap-1.5
                                 text-[#4db86a] text-sm font-semibold
                                 group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>

                            {/* bottom divider line that grows on hover */}
                            <div className="absolute bottom-0 left-6 right-6 h-px
                              bg-linear-to-r from-transparent via-[rgba(74,163,89,0.4)] to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                        </a>
                    ))}

                    </MobileCarousel>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection