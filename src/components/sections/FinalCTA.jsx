import React from 'react'
import {WA_LINK} from "@/lib/constants";


const FinalCTA = () => {
  return (
    <div className="relative max-lg:py-8 py-18 px-4 overflow-hidden bg-[#0a110d]">

      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* top-left green bloom */}
        <div className="absolute top-0 left-0 w-125 h-125
                        bg-[radial-gradient(ellipse_at_top_left,rgba(30,107,48,0.28),transparent_65%)]" />
        {/* bottom-right green bloom */}
        <div className="absolute bottom-0 right-0 w-125 h-125
                        bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.2),transparent_65%)]" />
        {/* center haze */}
        <div className="absolute inset-0
                        bg-[radial-gradient(ellipse_at_center,rgba(20,80,34,0.12),transparent_70%)]" />
      </div>

      {/* ── Top border accent ── */}
      <div className="absolute top-0 left-0 right-0 h-px
                      bg-linear-to-r from-transparent via-[rgba(74,163,89,0.5)] to-transparent" />
      {/* ── Bottom border accent ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px
                      bg-linear-to-r from-transparent via-[rgba(74,163,89,0.3)] to-transparent" />

      {/* ── Decorative zodiac circle ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      w-140 h-140 rounded-full pointer-events-none
                      border border-[rgba(74,163,89,0.06)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      w-105 h-105 rounded-full pointer-events-none
                      border border-[rgba(74,163,89,0.05)]" />

      {/* ── Content ── */}
      <div className="relative max-w-3xl mx-auto text-center">

        {/* eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6
                        text-[10px] tracking-[4px] uppercase text-[#4db86a]">
          <span className="block w-8 h-px bg-[#4db86a]" />
          Your Journey Starts Here
          <span className="block w-8 h-px bg-[#4db86a]" />
        </div>

        {/* heading */}
        <h2 className="font-['Cinzel',serif] text-4xl md:text-6xl font-bold
                       text-[#e8f5ea] mb-6 leading-tight">
          Talk Directly With{" "}
          <span className="bg-linear-to-r from-[#5dcf72] to-[#9edaab]
                           bg-clip-text text-transparent">
            Acharya Ji
          </span>{" "}
          Today
        </h2>

        {/* subtext */}
        <p className="text-[rgba(180,220,185,0.62)] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get confidential guidance for your relationship, marriage, or personal
          concerns. First consultation is completely free.
        </p>

        {/* CTA button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl
                     bg-[#1e6b30] text-[#c8eecf] font-bold text-lg
                     border border-[rgba(74,163,89,0.4)]
                     shadow-[0_0_40px_rgba(30,107,48,0.4)]
                     hover:bg-[#25883d] hover:shadow-[0_0_56px_rgba(30,107,48,0.6)]
                     hover:scale-105 hover:-translate-y-0.5
                     transition-all duration-300"
        >
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#5dcf72] shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>

        {/* trust line */}
        <p className="mt-7 text-[rgba(180,220,185,0.35)] text-xs tracking-widest uppercase">
          🔒 Completely Private · No Obligation · Immediate Response
        </p>
      </div>
    </div>
  );
};

export default FinalCTA;