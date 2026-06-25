import FAQSection from '@/components/sections/FAQSection'
import TextTestimonials from '@/components/sections/TextTestimonials'
import FinalCTA from '@/components/sections/FinalCTA';
import PageHero from '@/components/pages/PageHero'
import { WA_LINK } from '@/lib/constants';
import { HeartHandshake, Search, Sparkles, RefreshCw, Heart, Gem, ShieldCheck, Scale, Users, MessageCircle, Home, Baby } from "lucide-react";
import { HowGurujiSolvesIt } from '@/components/pages/HowGurujiSolve';
import { ProblemsSolvedSection } from '@/components/pages/ProblemSolve';

const reviews = [
  { name: "Harpreet K.", city: "London",     text: "My marriage was falling apart due to constant arguments and mistrust. Acharya Ji's guidance brought complete peace back into our home within a month.", stars: 5 },
  { name: "Sunita R.",   city: "Birmingham", text: "My husband had grown cold and distant for over a year. After following Acharya Ji's remedies, the warmth and love returned. I am so grateful.", stars: 5 },
  { name: "Geeta M.",    city: "Leicester",  text: "Our families were against our marriage. Acharya Ji helped us navigate the opposition through Vedic remedies and wise counsel. We are now happily married.", stars: 5 },
  { name: "Anita S.",    city: "Manchester", text: "Extramarital suspicions were destroying my marriage. Acharya Ji helped us rebuild trust and communication in ways I thought were impossible.", stars: 5 },
  { name: "Priya D.",    city: "Glasgow",    text: "We had been trying for a child for years causing immense strain on our marriage. Acharya Ji's astrological guidance gave us hope and direction.", stars: 5 },
  { name: "Nisha T.",    city: "Leeds",      text: "Financial stress had turned my husband and I into strangers. After the consultation, we found our way back to each other. Remarkable.", stars: 5 },
  { name: "Kavita V.",   city: "Bristol",    text: "My mother-in-law was the source of all our problems. Acharya Ji gave me tools to bring harmony to the whole household. Life is peaceful now.", stars: 5 },
  { name: "Deepa P.",    city: "Coventry",   text: "I came to Acharya Ji as a last resort before agreeing to divorce. Today my marriage is stronger than it was on our wedding day.", stars: 5 },
];

const faqs = [
  { q: "Can Vedic astrology really help save a troubled marriage?", a: "Yes. Vedic astrology identifies planetary patterns that cause friction, mistrust, and emotional distance in marriage. By correcting these energies through targeted remedies, many couples experience a profound shift in their relationship dynamic." },
  { q: "My spouse does not believe in astrology. Will it still work?", a: "Remedies prescribed by Acharya Ji work at an energetic level. Your spouse does not need to participate or even be aware. Many successful cases involve only one partner actively following the guidance." },
  { q: "We have been separated for over a year. Is it too late?", a: "It is never too late. Acharya Ji has successfully guided couples who have been separated for several years back to a harmonious relationship. The length of separation does not determine the outcome." },
  { q: "What if the problems are due to third-party interference?", a: "Third-party interference — whether from family, friends, or another person — is one of the most common marriage problems Acharya Ji addresses. Specific Vedic remedies exist to remove such influences effectively." },
  { q: "How confidential is the consultation?", a: "Completely confidential. Every detail of your situation remains strictly private. Acharya Ji understands the sensitivity of marriage problems and handles every case with the utmost discretion." },
  { q: "Is the initial consultation free?", a: "Yes. The first consultation is completely free with no obligation. Acharya Ji will listen to your full situation and give you an honest assessment of how he can help." },
];

const MarriageProblemsPage = () => {
  return (
    <div className="min-h-screen bg-[#060e08] text-[#e8f5ea] font-sans overflow-x-hidden">

      <PageHero
        badge="💍 MARRIAGE SPECIALIST"
        liveBadge="Online Now · Free Marriage Consultation"
        breadcrumb="Marriage Problem Solution"
        headLine1="Restore Peace"
        headLineShimmer="In Your Marriage"
        headLine2="With Vedic Wisdom"
        sub="Constant conflicts, emotional distance, family interference, trust issues, or a marriage on the verge of collapse — Acharya Ji has restored thousands of marriages across the UK through ancient Vedic guidance."
        badges={[
          { icon: <HeartHandshake className="h-4 w-4 text-[#4db86a]" />, text: "Marriage Healing"      },
          { icon: <Home           className="h-4 w-4 text-[#4db86a]" />, text: "Family Harmony"        },
          { icon: <ShieldCheck    className="h-4 w-4 text-[#4db86a]" />, text: "100% Confidential"     },
          { icon: <Gem            className="h-4 w-4 text-[#4db86a]" />, text: "Vedic Remedies"        },
        ]}
        waLink={WA_LINK}
        ctaLabel="Save My Marriage Now"
        secondaryHref="#how-it-works"
        secondaryLabel="How It Works"
        statCards={[
          { value: "12,000+", label: "Marriages Saved"  },
          { value: "25+",     label: "Years Experience" },
        ]}
        avatarInitials={["H","S","G","A","P","N"]}
        proofText="Trusted by 12,000+ couples across the UK"
        placeholderEmoji="💍"
      />

      <HowGurujiSolvesIt
        eyebrow="Marriage Healing Process"
        heading="How Guruji"
        headingShimmer="Heals Marriages"
        sub="Every marriage is unique. Acharya Ji's approach combines astrological diagnosis, spiritual remedies, and practical communication guidance to restore what has been broken."
        steps={[
          { icon: <Search         className="h-6 w-6" />, title: "Deep Marriage Analysis",      body: "Acharya Ji reviews both partners' birth charts together to identify planetary friction points, dosha combinations, and karmic patterns causing discord in the marriage.", chip: "Step 1" },
          { icon: <MessageCircle  className="h-6 w-6" />, title: "Root Cause Identification",   body: "Whether the issue is emotional distance, third-party interference, family pressure, or financial stress — the real root cause is identified precisely.", chip: "Step 2" },
          { icon: <Sparkles       className="h-6 w-6" />, title: "Personalised Remedies",       body: "Targeted mantras, yantras, gemstone recommendations, and auspicious timing rituals are prescribed specifically for your marriage situation — never a generic package.", chip: "Step 3" },
          { icon: <RefreshCw      className="h-6 w-6" />, title: "Ongoing Marriage Support",    body: "Marriages evolve through stages. Acharya Ji remains available as circumstances change, refining guidance to keep the relationship on a positive path.", chip: "Step 4" },
        ]}
        ctaLabel="Get Marriage Help Now — Free"
        waLink={WA_LINK}
      />

      <ProblemsSolvedSection
        eyebrow="Marriage Specialisations"
        heading="Marriage Problems"
        headingShimmer="We Solve"
        sub="No marriage problem is beyond resolution. Acharya Ji has guided couples through every challenge that modern relationships face."
        problems={[
          { icon: <MessageCircle  />, title: "Constant Arguments",      body: "Break recurring conflict cycles and restore respectful, loving communication."          },
          { icon: <Heart          />, title: "Lost Love & Intimacy",    body: "Reignite emotional and physical closeness that has faded over time."                   },
          { icon: <Users          />, title: "Family Interference",     body: "Address in-law conflicts and family opposition threatening marital harmony."           },
          { icon: <Scale          />, title: "Trust & Infidelity",      body: "Rebuild shattered trust and guide both partners back to commitment."                   },
          { icon: <Home           />, title: "Vastu Doshas at Home",    body: "Correct negative home energies that create unconscious friction between partners."     },
          { icon: <Baby           />, title: "Childlessness Stress",    body: "Relieve the marital strain caused by fertility challenges and unfulfilled parenthood." },
          { icon: <Gem            />, title: "Arranged Marriage Issues",body: "Navigate compatibility, adjustment, and cultural expectation challenges."              },
          { icon: <Sparkles       />, title: "Black Magic Removal",     body: "Eliminate externally cast negative energies designed to break your marriage apart."    },
        ]}
      />

      <TextTestimonials reviews={reviews} />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </div>
  );
};

export default MarriageProblemsPage;