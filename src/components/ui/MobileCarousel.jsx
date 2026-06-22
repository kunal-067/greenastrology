'use client'
/**
 * MobileCarousel — reusable utility
 *
 * Renders children as a swipeable single-item carousel on mobile,
 * and passes through as-is (null wrapper) on md+ so your grid/flex
 * layout stays fully in control on desktop.
 *
 * Props
 * ─────
 * children        ReactNode[]   Items to carousel. Each becomes one slide.
 * autoInterval    number        ms between auto-advance (0 = off). Default 0.
 * showDots        boolean       Show dot indicators. Default true.
 * showArrows      boolean       Show prev/next arrow buttons. Default true.
 * dotActiveClass  string        Tailwind classes for the active dot pill.
 * dotInactiveClass string       Tailwind classes for inactive dots.
 * arrowClass      string        Extra Tailwind classes applied to both arrow buttons.
 * className       string        Class applied to the outer carousel wrapper (mobile only).
 *
 * Usage
 * ─────
 * <MobileCarousel autoInterval={4000}>
 *   {items.map((item, i) => <MyCard key={i} {...item} />)}
 * </MobileCarousel>
 */

import { useState, useEffect, useCallback, useRef, Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── tiny hook: returns true when window width < 768px ────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

// ── Main component ────────────────────────────────────────────────────────────
export function MobileCarousel({
  children,
  autoInterval = 0,
  showDots = true,
  showArrows = true,
  dotActiveClass = "w-6 h-2 bg-gradient-to-r from-[#5dcf72] to-[#9edaab]",
  dotInactiveClass = "w-2 h-2 bg-[rgba(74,163,89,0.25)] hover:bg-[rgba(93,207,114,0.5)]",
  arrowClass = "text-[#4db86a] hover:text-[#5dcf72] transition-colors",
  className = "",
}) {
  const isMobile = useIsMobile();
  const slides = Children.toArray(children);
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const go = useCallback(
    (next) => setIndex(Math.max(0, Math.min(total - 1, next))),
    [total]
  );

  // Auto-advance
  const resetAuto = useCallback(() => {
    if (!autoInterval) return;
    clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setIndex((i) => (i >= total - 1 ? 0 : i + 1)),
      autoInterval
    );
  }, [autoInterval, total]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  useEffect(() => {
    setIndex((i) => Math.min(i, total - 1));
  }, [total]);

  // ── Pointer drag ─────────────────────────────────────────────────────────────
  const onPointerDown = (e) => {
    setDragging(true);
    dragStart.current = e.clientX;
    trackRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e) => {
    if (!dragging || dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (Math.abs(delta) > 40) {
      go(index + (delta > 0 ? 1 : -1));
      resetAuto();
    }
    setDragging(false);
    dragStart.current = null;
  };

  // ── Desktop: unwrap so parent grid/flex owns layout ──────────────────────────
  if (!isMobile) return <>{children}</>;

  // ── Mobile: full carousel ────────────────────────────────────────────────────
  return (
    <div className={`relative w-full ${className}`}>

      {/* Track */}
      <div className="overflow-hidden rounded-2xl">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{
            display: "flex",
            transform: `translateX(${-index * 100}%)`,
            transition: dragging
              ? "none"
              : "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            cursor: dragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ minWidth: "100%", boxSizing: "border-box" }}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={() => { go(index - 1); resetAuto(); }}
            disabled={index === 0}
            aria-label="Previous slide"
            className={`
              absolute -left-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-[#0d1c10]
              border border-[rgba(74,163,89,0.3)]
              text-[#4db86a]
              hover:bg-[rgba(30,107,48,0.3)]
              hover:border-[rgba(93,207,114,0.6)]
              hover:shadow-[0_0_12px_rgba(77,184,106,0.25)]
              disabled:opacity-20 disabled:cursor-not-allowed
              transition-all duration-200 select-none
              ${arrowClass}
            `}
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>

          <button
            onClick={() => { go(index + 1); resetAuto(); }}
            disabled={index >= total - 1}
            aria-label="Next slide"
            className={`
              absolute -right-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-[#0d1c10]
              border border-[rgba(74,163,89,0.3)]
              text-[#4db86a]
              hover:bg-[rgba(30,107,48,0.3)]
              hover:border-[rgba(93,207,114,0.6)]
              hover:shadow-[0_0_12px_rgba(77,184,106,0.25)]
              disabled:opacity-20 disabled:cursor-not-allowed
              transition-all duration-200 select-none
              ${arrowClass}
            `}
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div
          className="mt-5 flex items-center justify-center gap-2
                     px-4 py-2.5 rounded-full w-fit mx-auto
                     bg-[rgba(6,14,8,0.7)] border border-[rgba(74,163,89,0.15)]
                     backdrop-blur-sm"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { go(i); resetAuto(); }}
              className={`
                rounded-full transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4db86a]
                ${i === index ? dotActiveClass : dotInactiveClass}
              `}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default MobileCarousel;