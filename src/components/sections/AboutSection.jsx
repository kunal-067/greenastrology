"use client";

const STATS = [
  { n: "25+", l: "Years" },
  { n: "5K+", l: "Clients" },
  { n: "98%", l: "Success" },
];

const TIMELINE = [
  { year: "1999", event: "Began Vedic spiritual practice under renowned Himalayan masters" },
  { year: "2005", event: "Established practice in London, serving the UK South Asian community" },
  { year: "2015", event: "Helped 1,000+ clients rebuild love and relationships" },
  { year: "2024", event: "Over 5,000 successful cases across the United Kingdom" },
];

export const AboutSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&display=swap');

        .about-section {
          background: #0a110d;
          padding: 78px 8px;
          font-family: 'Raleway', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle radial bg glow */
        .about-section::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(30,107,48,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-section::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -60px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(30,107,48,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── IMAGE SIDE ── */
        .about-image-wrap {
          position: relative;
        }

        .about-glow-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(30,107,48,0.22) 0%, transparent 70%);
          border-radius: 24px;
          filter: blur(32px);
          pointer-events: none;
        }

        .about-img-frame {
          position: relative;
          aspect-ratio: 4/5;
          max-width: 340px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(74,163,89,0.3);
          box-shadow:
            0 0 0 1px rgba(74,163,89,0.1),
            0 32px 64px rgba(0,0,0,0.6);
        }

        .about-img-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0d2212 0%, #122918 40%, #0f1f14 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* decorative corner accents */
        .about-img-frame::before,
        .about-img-frame::after {
          content: '';
          position: absolute;
          width: 32px;
          height: 32px;
          border-color: rgba(93,207,114,0.5);
          border-style: solid;
          z-index: 2;
        }
        .about-img-frame::before {
          top: 12px; left: 12px;
          border-width: 1.5px 0 0 1.5px;
        }
        .about-img-frame::after {
          bottom: 12px; right: 12px;
          border-width: 0 1.5px 1.5px 0;
        }

        /* stats bar */
        .about-stats {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          white-space: nowrap;
        }

        .about-stat-card {
          background: rgba(10,17,13,0.85);
          backdrop-filter: blur(12px);
          border: 0.5px solid rgba(74,163,89,0.35);
          border-radius: 14px;
          padding: 10px 18px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }

        .about-stat-n {
          font-family: 'Cinzel', serif;
          font-size: 18px;
          font-weight: 700;
          background: linear-gradient(135deg, #5dcf72, #9edaab);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .about-stat-l {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(180,220,185,0.5);
          margin-top: 2px;
        }

        /* ── CONTENT SIDE ── */
        .about-content {
          padding-top: 0;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #4db86a;
          margin-bottom: 18px;
        }

        .about-badge::before {
          content: '';
          width: 20px;
          height: 0.5px;
          background: #4db86a;
        }

        .about-badge::after {
          content: '';
          width: 20px;
          height: 0.5px;
          background: #4db86a;
        }

        .about-heading {
          font-family: 'Cinzel', serif;
          font-size: 40px;
          font-weight: 700;
          color: #e8f5ea;
          line-height: 1.2;
          margin: 0 0 24px;
        }

        .about-heading-accent {
          background: linear-gradient(135deg, #5dcf72, #9edaab);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-para {
          font-size: 14px;
          line-height: 1.85;
          color: rgba(180,220,185,0.62);
          margin-bottom: 16px;
        }

        .about-para strong {
          color: #c8eecf;
          font-weight: 600;
        }

        /* divider */
        .about-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, #4db86a, transparent);
          margin: 28px 0;
        }

        /* Timeline */
        .about-timeline {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .about-timeline-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .about-year-pill {
          flex-shrink: 0;
          min-width: 56px;
          height: 28px;
          border-radius: 14px;
          background: rgba(30,107,48,0.2);
          border: 0.5px solid rgba(74,163,89,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-year-text {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 600;
          color: #5dcf72;
          letter-spacing: 0.5px;
        }

        .about-timeline-dot-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding-top: 6px;
        }

        .about-timeline-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4db86a;
          box-shadow: 0 0 8px rgba(77,184,106,0.6);
          flex-shrink: 0;
        }

        .about-timeline-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, rgba(74,163,89,0.4), transparent);
          min-height: 20px;
        }

        .about-timeline-event {
          font-size: 13px;
          color: rgba(180,220,185,0.65);
          line-height: 1.7;
          padding-top: 2px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-section { padding: 34px 24px; }
          .about-inner { grid-template-columns: 1fr; gap: 60px; }
          .about-heading { font-size: 30px; }
          .about-img-frame { max-width: 280px; }
        }

        @media (max-width: 480px) {
          .about-stats { gap: 6px; }
          .about-stat-card { padding: 8px 12px; }
          .about-stat-n { font-size: 15px; }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-inner">

          {/* ── Image Column ── */}
          <div className="about-image-wrap">
            <div className="about-glow-bg" aria-hidden="true" />

            <div className="about-img-frame">
              <div className="about-img-inner">
                <img src="./gallery/img-c-6.jpg" alt="Acharya Ji" />
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats">
              {STATS.map((s) => (
                <div key={s.l} className="about-stat-card">
                  <p className="about-stat-n">{s.n}</p>
                  <p className="about-stat-l">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Content Column ── */}
          <div className="about-content">
            <p className="about-badge">About</p>

            <h2 className="about-heading">
              Meet{" "}
              <span className="about-heading-accent">Acharya Ji</span>
            </h2>

            <p className="about-para">
              With over{" "}
              <strong>25 years of spiritual practice</strong> rooted in
              ancient Vedic traditions, Acharya Ji has become the UK's most
              sought-after love and relationship healer. His work bridges
              timeless wisdom with modern emotional realities.
            </p>

            <p className="about-para">
              Having served clients from London to Glasgow, Birmingham to
              Bristol, Acharya Ji has resolved thousands of seemingly
              impossible situations — from reuniting separated lovers to
              saving marriages on the verge of collapse.
            </p>

            <div className="about-divider" aria-hidden="true" />

            {/* Timeline */}
            <div className="about-timeline">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className="about-timeline-item">
                  <div className="about-year-pill">
                    <span className="about-year-text">{t.year}</span>
                  </div>
                  <div className="about-timeline-dot-wrap">
                    <div className="about-timeline-dot" />
                    {i < TIMELINE.length - 1 && (
                      <div className="about-timeline-line" />
                    )}
                  </div>
                  <p className="about-timeline-event">{t.event}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;