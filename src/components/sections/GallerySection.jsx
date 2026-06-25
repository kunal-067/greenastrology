'use client'
import React, { useState } from 'react'
import { SectionBadge, SectionHeading, Section } from "@/components/ui";
import { GALLERY_ITEMS } from "@/lib/data"
import { GalleryModal } from '../shared/Modals';

const GallerySection = () => {
  const [galleryModal, setGalleryModal] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const openModal = (i) => { setGalleryModal(true); setGalleryIdx(i); };

  return (
    <>
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


        {/* background glows */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px]
                        bg-[radial-gradient(ellipse_at_top_right,rgba(30,107,48,0.15),transparent_65%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px]
                        bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto z-10">

          {/* header */}
          <div className="text-center mb-14">
            <SectionBadge>Gallery</SectionBadge>
            <SectionHeading
              title="World"
              accent="Tour"
              subtitle="A glimpse into the spiritual world of Acharya Ji."
            />
          </div>

          {/* ── Desktop masonry ── */}
          <div className="hidden md:block columns-3 gap-5">
            {GALLERY_ITEMS.map((g, i) => (
              <button
                key={i}
                onClick={() => openModal(i)}
                className="block w-full mb-5 rounded-2xl overflow-hidden cursor-pointer group
                           border border-[rgba(74,163,89,0.2)]
                           hover:border-[rgba(93,207,114,0.5)]
                           hover:shadow-[0_0_28px_rgba(30,107,48,0.2)]
                           transition-all duration-300"
              >
                <div
                  className={`relative overflow-hidden
                              ${g.aspect === "tall" ? "h-72" : g.aspect === "wide" ? "h-40" : "h-52"}
                              bg-[#0d1c10]`}
                  style={{ background: g.bg ? undefined : undefined }}
                >
                  {/* actual image or fallback gradient */}
                  {g.img
                    ? <img src={g.img} alt={g.label} className="w-full h-full object-cover object-center
                                                                  group-hover:scale-105 transition-transform duration-500" />
                    : <div className={`w-full h-full bg-gradient-to-br ${g.bg}
                                       group-hover:scale-105 transition-transform duration-500`} />
                  }

                  {/* dark overlay on hover */}
                  <div className="absolute inset-0 bg-[rgba(10,17,13,0)] group-hover:bg-[rgba(10,17,13,0.45)]
                                  transition-colors duration-300" />

                  {/* zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full
                                    bg-[rgba(10,17,13,0.7)]
                                    border border-[rgba(93,207,114,0.5)]
                                    flex items-center justify-center
                                    shadow-[0_0_16px_rgba(77,184,106,0.3)]">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#5dcf72] fill-none stroke-2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* label bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3
                                  bg-gradient-to-t from-[rgba(10,17,13,0.85)] to-transparent
                                  translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-['Cinzel',serif] text-[11px] tracking-widest uppercase
                                     text-[rgba(180,220,185,0.75)]">
                      {g.label}
                    </span>
                  </div>

                  {/* corner accent */}
                  <div className="absolute top-3 left-3 w-5 h-5 pointer-events-none
                                  border-t border-l border-[rgba(93,207,114,0.35)]
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none
                                  border-b border-r border-[rgba(93,207,114,0.35)]
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            ))}
          </div>

          {/* ── Mobile carousel ── */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-3
                          snap-x snap-mandatory
                          [scrollbar-width:none] [-ms-overflow-style:none]
                          [&::-webkit-scrollbar]:hidden">
            {GALLERY_ITEMS.map((g, i) => (
              <button
                key={i}
                onClick={() => openModal(i)}
                className="shrink-0 w-64 h-48 rounded-2xl overflow-hidden snap-center relative group
                           border border-[rgba(74,163,89,0.2)]
                           hover:border-[rgba(93,207,114,0.45)]
                           transition-all duration-300"
              >
                {g.img
                  ? <img src={g.img} alt={g.label} className="w-full h-full object-cover" />
                  : <div className={`w-full h-full bg-gradient-to-br ${g.bg}`} />
                }
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2
                                bg-gradient-to-t from-[rgba(10,17,13,0.85)] to-transparent">
                  <span className="font-['Cinzel',serif] text-[10px] tracking-widest uppercase
                                   text-[rgba(180,220,185,0.7)]">
                    {g.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>

      <GalleryModal
        galleryIdx={galleryIdx}
        galleryModal={galleryModal}
        setGalleryIdx={setGalleryIdx}
        setGalleryModal={setGalleryModal}
      />
    </>
  );
};

export default GallerySection;