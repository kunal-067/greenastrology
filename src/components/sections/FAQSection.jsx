"use client"
import React, { useState } from 'react';
import { SectionBadge, SectionHeading } from "../ui"
import { FAQS } from "@/lib/data"

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mb-3 rounded-2xl overflow-hidden
                     border transition-all duration-300
                     ${open
                       ? "border-[rgba(93,207,114,0.45)] bg-[#0d1c10] shadow-[0_0_24px_rgba(30,107,48,0.15)]"
                       : "border-[rgba(74,163,89,0.18)] bg-[#0d1c10] hover:border-[rgba(74,163,89,0.35)]"
                     }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left
                   hover:bg-[rgba(30,107,48,0.08)] transition-colors duration-200 group"
      >
        <span className="font-['Cinzel',serif] text-sm font-semibold
                         text-[#c8eecf] pr-4 leading-snug">
          {q}
        </span>

        {/* +/× toggle button */}
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                          text-base font-light transition-all duration-300
                          border border-[rgba(74,163,89,0.4)]
                          text-[#4db86a]
                          ${open
                            ? "rotate-45 bg-[rgba(30,107,48,0.4)] border-[rgba(93,207,114,0.6)] shadow-[0_0_10px_rgba(77,184,106,0.3)]"
                            : "bg-[rgba(30,107,48,0.15)] group-hover:bg-[rgba(30,107,48,0.28)]"
                          }`}>
          +
        </span>
      </button>

      {/* answer panel */}
      <div className={`grid transition-all duration-300 ease-in-out
                       ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-5 border-t border-[rgba(74,163,89,0.15)]">
            {/* accent line */}
            <div className="w-8 h-px bg-gradient-to-r from-[#4db86a] to-transparent mt-4 mb-3" />
            <p className="text-sm text-[rgba(180,220,185,0.62)] leading-relaxed">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Section ───────────────────────────────────────────────────────────────
const FAQSection = ({ faqs = FAQS }) => {
  return (
    <div
      id="faq"
      className="max-lg:py-7 py-16 px-4
                 bg-[#0a110d]
                 border-y border-[rgba(74,163,89,0.15)]
                 relative overflow-hidden"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                      w-[600px] h-[280px]
                      bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px]
                      bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.1),transparent_70%)]" />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center mb-14">
          <SectionBadge>FAQ</SectionBadge>
          <SectionHeading
            title="Questions &"
            accent="Answers"
            subtitle="Everything you need to know before reaching out."
          />
        </div>

        {/* items */}
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}

      </div>
    </div>
  );
};

export default FAQSection;