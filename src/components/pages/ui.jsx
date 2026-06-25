
/** Thin eyebrow pill — same as hero category pill */
export function SectionEyebrow({ label, color }) {
    return (
        <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: `${color}1e`, border: `1px solid ${color}50` }}
        >
            <span
                className="text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color }}
            >
                {label}
            </span>
        </div>
    );
}

/** Section heading — mirrors hero h1 scale */
export function SectionHeading({ children, shimmer, color, align = "left" }) {
    return (
        <h2
            className={`text-4xl sm:text-5xl font-bold leading-[1.1] mb-4 text-gray-900 dark:text-white ${align === "center" ? "text-center" : ""}`}
        >
            {children}
            {shimmer && (
                <>
                    {" "}
                    <span
                        style={{
                            background: `linear-gradient(90deg,${color[0]},#fbbf24,${color[1]},${color[0]})`,
                            backgroundSize: "300% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "shimmer 5s linear infinite",
                        }}
                    >
                        {shimmer}
                    </span>
                </>
            )}
        </h2>
    );
}

/** Glass card — mirrors the hero stat cards */
export function GlassCard({ children, className = "", style = {} }) {
    return (
        <div
            className={`rounded-2xl border backdrop-blur-md
                bg-white/80 border-gray-200/80
                dark:bg-white/5 dark:border-white/12
                shadow-lg ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}

/** Vertical connector line used in process steps */
export function StepConnector({ color }) {
    return (
        <div
            className="absolute left-6 top-14 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, ${color}60, transparent)` }}
        />
    );
}