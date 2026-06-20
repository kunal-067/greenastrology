"use client";

import { useEffect, useRef } from "react";
import ZodiacWheel from "./Zodiacwheel";

const NAV_LINKS = ["Home", "About Us", "Gallery", "Blogs", "Contact Us"];

export default function AstrologyHero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        function drawStars() {
            const wrap = canvas.parentElement;
            canvas.width = wrap.offsetWidth;
            canvas.height = wrap.offsetHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < 130; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const r = Math.random() * 1.3;
                const a = 0.15 + Math.random() * 0.55;
                const g = 120 + Math.floor(Math.random() * 80);
                const b = 140 + Math.floor(Math.random() * 60);
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${g}, 220, ${b}, ${a})`;
                ctx.fill();
            }
        }

        drawStars();
        const observer = new ResizeObserver(drawStars);
        observer.observe(canvas.parentElement);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap');

        .cosmic-hero {
          background: #0a110d;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', sans-serif;
          border-radius: 14px;
          min-height: 100vh;
        }

        .cosmic-star-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* NAV */
        .cosmic-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          position: relative;
          z-index: 10;
          border-bottom: 0.5px solid rgba(74,163,89,0.18);
        }

        .cosmic-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cosmic-logo-diamond {
          width: 34px;
          height: 34px;
          background: linear-gradient(135deg, #1a4a25, #2e8b45);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .cosmic-logo-text {
          font-family: 'Cinzel', serif;
          font-size: 15px;
          color: #7ecc8f;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .cosmic-nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cosmic-nav-links a {
          color: rgba(200,230,205,0.65);
          text-decoration: none;
          font-size: 11.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .cosmic-nav-links a:hover {
          color: #7ecc8f;
        }

        .cosmic-nav-icons {
          display: flex;
          gap: 10px;
        }

        .cosmic-nav-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 0.5px solid rgba(74,163,89,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(200,230,205,0.6);
          font-size: 13px;
          transition: border-color 0.2s, color 0.2s;
          cursor: pointer;
        }

        .cosmic-nav-icon:hover {
          border-color: #4db86a;
          color: #7ecc8f;
        }

        /* HERO BODY */
        .cosmic-body {
          display: flex;
          align-items: center;
          padding: 60px 48px 70px;
          position: relative;
          z-index: 10;
          gap: 48px;
        }

        .cosmic-left {
          flex: 1.1;
        }

        .cosmic-eyebrow {
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4db86a;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cosmic-eyebrow::before {
          content: '';
          width: 26px;
          height: 0.5px;
          background: #4db86a;
          display: inline-block;
        }

        .cosmic-title {
          font-family: 'Cinzel', serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.22;
          color: #e8f5ea;
          margin: 0 0 20px;
        }

        .cosmic-title-accent {
          color: #5dcf72;
        }

        .cosmic-desc {
          font-size: 14px;
          line-height: 1.85;
          color: rgba(180,220,185,0.62);
          max-width: 360px;
          margin-bottom: 34px;
        }

        .cosmic-buttons {
          display: flex;
          gap: 14px;
        }

        .cosmic-btn-primary {
          background: #1e6b30;
          color: #c8eecf;
          border: none;
          padding: 13px 28px;
          border-radius: 3px;
          font-family: 'Raleway', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }

        .cosmic-btn-primary:hover {
          background: #25883d;
        }

        .cosmic-btn-outline {
          background: transparent;
          color: #7ecc8f;
          border: 0.5px solid rgba(74,163,89,0.5);
          padding: 13px 28px;
          border-radius: 3px;
          font-family: 'Raleway', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }

        .cosmic-btn-outline:hover {
          border-color: #4db86a;
          color: #9edaab;
        }

        /* ZODIAC WHEEL */
        .cosmic-right {
          flex: 0.9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cosmic-zodiac-svg {
          width: 300px;
          height: 300px;
          animation: cosmic-spin 60s linear infinite;
        }

        @keyframes cosmic-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cosmic-zodiac-svg {
            animation: none;
          }
        }

        /* BOTTOM BANNER */
        .cosmic-banner {
          background: rgba(16, 36, 20, 0.92);
          border-top: 0.5px solid rgba(74,163,89,0.2);
          display: flex;
          align-items: center;
          padding: 26px 48px;
          gap: 32px;
          position: relative;
          z-index: 10;
        }

        .cosmic-banner-icon {
          width: 96px;
          height: 70px;
          border-radius: 8px;
          background: linear-gradient(135deg, #142b18, #1e5a28);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #4db86a;
        }

        .cosmic-banner-title {
          font-family: 'Cinzel', serif;
          font-size: 16px;
          color: #c8eecf;
          margin: 0 0 8px;
          letter-spacing: 0.5px;
        }

        .cosmic-banner-desc {
          font-size: 12.5px;
          color: rgba(180,220,185,0.52);
          line-height: 1.65;
          margin: 0;
          max-width: 380px;
        }

        .cosmic-banner-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4db86a;
          box-shadow: 0 0 10px #4db86a;
          flex-shrink: 0;
          margin-left: auto;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .cosmic-nav { padding: 16px 20px; }
          .cosmic-nav-links { display: none; }
          .cosmic-body {
            flex-direction: column;
            padding: 40px 20px 50px;
            gap: 36px;
          }
          .cosmic-title { font-size: 28px; }
          .cosmic-zodiac-svg { width: 220px; height: 220px; }
          .cosmic-banner { flex-direction: column; padding: 20px; gap: 16px; }
          .cosmic-banner-dot { margin-left: 0; }
        }
      `}</style>

            <section className="cosmic-hero pb-12">
                <canvas ref={canvasRef} className="cosmic-star-canvas" aria-hidden="true" />

                {/* Navigation */}
                <nav className="cosmic-nav max-w-7xl mx-auto">
                    <div className="cosmic-logo">
                        <div className="cosmic-logo-diamond" aria-hidden="true" />
                        <span className="cosmic-logo-text">Acharya Ji</span>
                    </div>

                    <ul className="cosmic-nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="cosmic-nav-icons">
                        {["in", "f", "x", "yt"].map((s) => (
                            <button key={s} className="cosmic-nav-icon" aria-label={`Social ${s}`}>
                                <span style={{ fontSize: 11, fontWeight: 600, color: "inherit" }}>{s}</span>
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Hero Body */}
                <div className="cosmic-body max-w-7xl mx-auto">
                    <div className="cosmic-left">
                        <p className="cosmic-eyebrow">Astrology &amp; Numerology</p>

                        <h1 className="cosmic-title">
                            Discover the{" "}
                            <span className="cosmic-title-accent">Cosmic</span>
                            <br />
                            Energy that Shapes
                            <br />
                            Your Life
                        </h1>

                        <p className="cosmic-desc">
                            Explore the mysteries of astrology, numerology, and zodiac insights crafted
                            to help you connect with your true self and the universe.
                        </p>

                        <div className="cosmic-buttons">
                            <button className="cosmic-btn-primary">Read More</button>
                            <button className="cosmic-btn-outline">Contact Us</button>
                        </div>
                    </div>

                    {/* Zodiac Wheel */}
                    <div className="relative overflow-hidden">
                        {/* Green blur 1 */}
                        <div className="absolute top-20 left-20 w-25 h-25 bg-green-500/20 blur-[120px] rounded-full" />

                        {/* Green blur 2 */}
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-500/15 blur-[100px] rounded-full" />

                        {/* Dark overlay */}
                        {/* <div className="absolute inset-0 bg-linear-to-br from-green-950 via-black to-black" /> */}

                        {/* Content */}
                        <div className="relative z-10">
                           <ZodiacWheel className="h-125" />
                        </div>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="cosmic-banner max-w-7xl mx-auto rounded-xl">
                    <div className="cosmic-banner-icon" aria-hidden="true">🕯️</div>
                    <div>
                        <p className="cosmic-banner-title">
                            The Light of Astrology Guides You Toward Clarity
                        </p>
                        <p className="cosmic-banner-desc">
                            Astrology is more than predictions — it&apos;s an art of understanding. We help
                            you decode celestial messages hidden in your birth chart.
                        </p>
                    </div>
                    <div className="cosmic-banner-dot" aria-hidden="true" />
                </div>
            </section>
        </>
    );
}


