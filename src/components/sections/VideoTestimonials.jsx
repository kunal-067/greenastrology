'use client'
import React, { useState } from 'react'
import { SectionBadge, SectionHeading } from "../ui";
import { VIDEOS } from "@/lib/data";
import { VideoModal } from '../shared/Modals';
import { Play } from 'lucide-react';

const VideoTestimonials = () => {
  const [videoModal, setVideoModal] = useState(null);
  const [videoIdx,   setVideoIdx]   = useState(null);

  const open = (v, i) => { setVideoModal(v); setVideoIdx(i); };

  return (
    <>
      <div className="max-lg:py-7 py-16 px-4
                      bg-[#0a110d]
                      border-y border-[rgba(74,163,89,0.15)]
                      relative overflow-hidden">

        {/* bg glows */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                        w-[700px] h-[280px]
                        bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.14),transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px]
                        bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px]
                        bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.1),transparent_70%)]" />

        {/* header */}
        <div className="text-center mb-12 relative z-10">
          <SectionBadge>Video Proof</SectionBadge>
          <SectionHeading
            title="Hear It From"
            accent="Real Clients"
            subtitle="Watch genuine video testimonials from clients whose lives Acharya Ji transformed."
          />
        </div>

        {/* grid */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {VIDEOS.map((v, i) => (
              <button
                key={i}
                onClick={() => open(v, i)}
                className="group relative rounded-2xl overflow-hidden aspect-video
                           cursor-pointer
                           border border-[rgba(74,163,89,0.2)]
                           hover:border-[rgba(93,207,114,0.5)]
                           hover:shadow-[0_0_32px_rgba(30,107,48,0.25)]
                           hover:-translate-y-1
                           transition-all duration-300
                           bg-[#0d1c10]"
              >
                {/* thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.style.display = "none"; }}
                />

                {/* dark overlay — lighter on hover */}
                <div className="absolute inset-0
                                bg-[rgba(6,14,8,0.55)]
                                group-hover:bg-[rgba(6,14,8,0.35)]
                                transition-colors duration-300" />

                {/* green gradient wash */}
                <div className="absolute inset-0
                                bg-gradient-to-t from-[rgba(6,14,8,0.9)] via-transparent to-transparent" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* outer ping */}
                    <div className="absolute inset-0 rounded-full
                                    bg-[rgba(93,207,114,0.2)]
                                    group-hover:animate-ping" />
                    {/* button circle */}
                    <div className="relative w-12 h-12 rounded-full
                                    bg-[rgba(10,17,13,0.8)]
                                    border border-[rgba(93,207,114,0.5)]
                                    group-hover:bg-[rgba(30,107,48,0.7)]
                                    group-hover:border-[rgba(93,207,114,0.9)]
                                    group-hover:shadow-[0_0_20px_rgba(93,207,114,0.4)]
                                    group-hover:scale-110
                                    flex items-center justify-center
                                    transition-all duration-300">
                      <Play
                        size={18}
                        className="text-[#5dcf72] ml-0.5
                                   group-hover:text-[#9edaab] transition-colors duration-300"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </div>
                  </div>
                </div>

                {/* bottom info strip */}
                <div className="absolute bottom-0 left-0 right-0 p-3
                                translate-y-1 group-hover:translate-y-0
                                transition-transform duration-300">
                  {/* index badge */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] tracking-[2.5px] uppercase
                                     text-[rgba(93,207,114,0.5)]
                                     font-['Cinzel',serif]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[rgba(74,163,89,0.4)] to-transparent" />
                  </div>
                  <p className="text-[11px] text-[rgba(180,220,185,0.8)] text-left
                                font-medium leading-snug line-clamp-2
                                font-['Raleway',sans-serif]">
                    {v.title}
                  </p>
                </div>

                {/* top-left corner accent */}
                <div className="absolute top-2.5 left-2.5 w-4 h-4 pointer-events-none
                                border-t border-l border-[rgba(93,207,114,0.4)]
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* bottom-right corner accent */}
                <div className="absolute bottom-2.5 right-2.5 w-4 h-4 pointer-events-none
                                border-b border-r border-[rgba(93,207,114,0.4)]
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </button>
            ))}
          </div>
        </div>
      </div>

      <VideoModal videoModal={videoModal} setVideoModal={setVideoModal} />
    </>
  );
};

export default VideoTestimonials;