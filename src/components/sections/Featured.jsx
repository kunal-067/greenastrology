import { Sparkles } from "lucide-react";

const logos = [
  { name: "DNA", svg: "/logos/dna.webp" },
  { name: "Aaj Tak", svg: "/logos/aajtak.webp" },
  { name: "Netflix", svg: "/logos/netflix.webp" },
  { name: "Colors", svg: "/logos/colors.webp" },
  { name: "MensXP", svg: "/logos/menspx.webp" },
  { name: "WSJ", svg: "/logos/wsj.webp" },
];

export function FeaturedOn() {
  return (
     <div className="max-lg:py-8 py-16 px-4
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



      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Sparkles className="h-4 w-4 text-violet-500" />
          <h2
            className="text-2xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured In
          </h2>
          <Sparkles className="h-4 w-4 text-violet-500" />
        </div>

        <div className="rounded-3xl border border-orange-200/50 bg-white/60 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-20 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-black/3 dark:hover:bg-white/3"
              >
                <img
                  src={logo.svg}
                  alt={logo.name}
                  className="max-h-10 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}