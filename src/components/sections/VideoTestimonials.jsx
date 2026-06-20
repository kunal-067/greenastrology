'use client'
import React, { useState } from 'react'
import { Section, SectionBadge, SectionHeading } from "../ui";
import { VIDEOS } from "@/lib/data";
import { VideoModal } from '../shared/Modals';

const VideoTestimonials = () => {
  const [videoModal, setVideoModal] = useState(null);
  const [videoIdx, setVideoIdx] = useState(null);
  return (
    <>
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



        <div className="text-center mb-6 md:mb-14">
          <SectionBadge>Video Proof</SectionBadge>
          <SectionHeading title="Hear It From"accent="Real Clients" subtitle="Watch genuine video testimonials from clients whose lives Acharya Ji transformed." />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
            {VIDEOS.map((v, i) => (
              <button
                key={i}
                onClick={() => { setVideoModal(v); setVideoIdx(i); }}
                className="group relative rounded-2xl overflow-hidden aspect-video card-hover cursor-pointer border border-white/10 hover:border-pink-400/40 transition-colors"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="h-full object-cover"
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-pink-900/80 to-purple-900/80 flex items-center justify-center flex-col">
                  <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-white text-xs text-center px-2 font-medium leading-snug line-clamp-1 sm:line-clamp-none">
                    {v.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <VideoModal videoModal={videoModal} setVideoModal={setVideoModal} />
    </>
  )
}

export default VideoTestimonials