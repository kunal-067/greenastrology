import FAQSection from '@/components/sections/FAQSection'
import TextTestimonials from '@/components/sections/TextTestimonials'
import FinalCTA from '@/components/sections/FinalCTA';
import PageHero from '@/components/pages/PageHero'
import { WA_LINK } from '@/lib/constants';
import { HeartHandshake, Search, Sparkles, RefreshCw, Heart, Gem, ShieldCheck, Scale, Gavel, FileX, Users, MessageCircle } from "lucide-react";
import { HowGurujiSolvesIt } from '@/components/pages/HowGurujiSolve';
import { ProblemsSolvedSection } from '@/components/pages/ProblemSolve';

const reviews = [
  { name: "Ranjit K.",  city: "London",     text: "Divorce papers had already been filed. I contacted Acharya Ji in desperation. He guided me step by step and my spouse withdrew the papers within three weeks. Unbelievable.", stars: 5 },
  { name: "Meena S.",   city: "Birmingham", text: "I had signed divorce papers but my heart said stop. Acharya Ji's remedies created space for a genuine conversation that saved everything. I will be forever grateful.", stars: 5 },
  { name: "Saroj T.",   city: "Leicester",  text: "After 18 years of marriage, we were heading for divorce due to our son's influence on my husband. Acharya Ji reversed the situation completely through astrological remedies.", stars: 5 },
  { name: "Priti V.",   city: "Manchester", text: "My husband had moved out and was firm on divorce. Two months after starting Acharya Ji's guidance, he came back home on his own. No pressure, no arguments — just results.", stars: 5 },
  { name: "Lata M.",    city: "Glasgow",    text: "Court proceedings had started. Acharya Ji gave me hope and a clear path. The case was withdrawn and we are now in counselling together. Our marriage has a future.", stars: 5 },
  { name: "Sunita D.",  city: "Leeds",      text: "I was terrified of the social stigma of divorce in our community. Acharya Ji handled my case discreetly and the results came quietly. My family life is intact.", stars: 5 },
  { name: "Kamla R.",   city: "Bristol",    text: "Third-party interference was the cause of our divorce threat. Acharya Ji's removal remedies worked. The other person left our lives and my husband returned to his senses.", stars: 5 },
  { name: "Hema P.",    city: "Coventry",   text: "25 years of marriage nearly ended over financial stress. Acharya Ji gave us both clarity and the courage to face our problems together. Divorce was never finalised.", stars: 5 },
];

const faqs = [
  { q: "Can Acharya Ji help even after divorce papers have been filed?", a: "Yes. Many of Acharya Ji's most successful cases involved situations where legal proceedings had already begun. Vedic remedies work on the energetic and emotional level — creating the space for reason and reconciliation to emerge naturally." },
  { q: "What if my spouse is completely determined to divorce?", a: "Even in cases where one partner appears completely decided, planetary influences play a significant role in decision-making. By addressing these influences through targeted remedies, shifts in perspective can and do happen. Acharya Ji will assess your specific chart before making any promises." },
  { q: "Do both partners need to be involved in the consultation?", a: "No. In most divorce cases, only one partner reaches out. Acharya Ji can work from your details alone. Your spouse does not need to know about or participate in the remedies for them to take effect." },
  { q: "Is it ethical to try to stop a divorce?", a: "Acharya Ji only works toward positive outcomes for both individuals. If the relationship can be healed in a way that brings genuine happiness to both partners, the remedy supports that. He will never encourage you to remain in a genuinely harmful situation." },
  { q: "What is the success rate for stopping divorce?", a: "Results vary depending on the complexity of the situation, how long problems have existed, and how consistently remedies are followed. Acharya Ji will give you an honest, realistic assessment during your free consultation — never false promises." },
  { q: "How quickly can I expect results?", a: "Some clients notice their partner's attitude softening within days. More deeply entrenched situations may require 4–8 weeks of consistent guidance. Acharya Ji will monitor your case and adjust remedies as needed throughout the process." },
];

const DivorceProblemsPage = () => {
  return (
    <div className="min-h-screen bg-[#060e08] text-[#e8f5ea] font-sans overflow-x-hidden">

      <PageHero
        badge="⚖️ STOP DIVORCE SPECIALIST"
        liveBadge="Online Now · Free Divorce Consultation"
        breadcrumb="Stop Divorce Solution"
        headLine1="Stop Your Divorce"
        headLineShimmer="Before It's Too Late"
        headLine2="Expert Vedic Guidance"
        sub="Divorce papers filed, spouse moved out, or marriage at breaking point? Acharya Ji has helped thousands of UK couples halt divorce proceedings and rebuild their lives together — even when all hope seemed lost."
        badges={[
          { icon: <Gavel       className="h-4 w-4 text-[#4db86a]" />, text: "Stop Divorce Now"     },
          { icon: <FileX       className="h-4 w-4 text-[#4db86a]" />, text: "Halt Proceedings"     },
          { icon: <ShieldCheck className="h-4 w-4 text-[#4db86a]" />, text: "100% Confidential"    },
          { icon: <Heart       className="h-4 w-4 text-[#4db86a]" />, text: "Rebuild Your Marriage" },
        ]}
        waLink={WA_LINK}
        ctaLabel="Stop My Divorce Now"
        secondaryHref="#how-it-works"
        secondaryLabel="How It Works"
        statCards={[
          { value: "6,000+", label: "Divorces Stopped" },
          { value: "25+",    label: "Years Experience"  },
        ]}
        avatarInitials={["R","M","S","P","L","K"]}
        proofText="Trusted by 6,000+ couples across the UK"
        placeholderEmoji="⚖️"
      />

      <HowGurujiSolvesIt
        eyebrow="Stop Divorce Process"
        heading="How Guruji"
        headingShimmer="Stops Divorce"
        sub="Halting a divorce requires understanding the precise energetic, emotional, and astrological forces driving separation. Acharya Ji addresses all three simultaneously with a proven Vedic approach."
        steps={[
          { icon: <Search         className="h-6 w-6" />, title: "Divorce Root Cause Analysis",  body: "Acharya Ji examines both birth charts to identify the exact planetary transits and karmic patterns currently driving the breakdown — understanding why the separation is happening at this specific time.", chip: "Step 1" },
          { icon: <Scale          className="h-6 w-6" />, title: "Energetic Barrier Removal",    body: "Specific Vedic rituals are prescribed to dissolve the anger, resentment, pride, or negative third-party energy that is fuelling the push toward divorce.", chip: "Step 2" },
          { icon: <HeartHandshake className="h-6 w-6" />, title: "Reconciliation Remedies",     body: "Targeted mantras, yantras, and auspiciously timed rituals create the energetic conditions for both partners to approach each other with openness, empathy, and willingness to try again.", chip: "Step 3" },
          { icon: <RefreshCw      className="h-6 w-6" />, title: "Sustained Stability Guidance", body: "Once immediate crisis is resolved, Acharya Ji provides ongoing remedies to ensure the underlying issues that caused the breakdown are permanently healed rather than just temporarily suppressed.", chip: "Step 4" },
        ]}
        ctaLabel="Get Divorce Help Now — Free"
        waLink={WA_LINK}
      />

      <ProblemsSolvedSection
        eyebrow="Divorce Case Specialisations"
        heading="Situations"
        headingShimmer="We Resolve"
        sub="From papers already filed to a spouse who has moved out — no divorce situation is too complex or too far gone for Acharya Ji's Vedic intervention."
        problems={[
          { icon: <Gavel          />, title: "Papers Already Filed",     body: "Intervention possible even after legal proceedings have formally begun."                },
          { icon: <Users          />, title: "Family-Forced Divorce",    body: "Counter in-law pressure and family demands driving your spouse toward separation."      },
          { icon: <MessageCircle  />, title: "Communication Breakdown",  body: "Restore dialogue when partners have stopped speaking entirely."                        },
          { icon: <Heart          />, title: "Emotional Disconnection",  body: "Rebuild emotional intimacy when love seems to have completely faded."                  },
          { icon: <Scale          />, title: "Third-Party Influence",    body: "Remove the influence of a third party steering your spouse toward divorce."            },
          { icon: <FileX          />, title: "Mutual Consent Divorce",   body: "Intervene when both partners have agreed to separate but reconciliation is possible."  },
          { icon: <Gem            />, title: "Intercultural Conflicts",  body: "Navigate cultural, religious, or social differences causing marital breakdown."        },
          { icon: <Sparkles       />, title: "Black Magic Causing Split",body: "Identify and remove externally cast negative forces deliberately breaking your marriage."},
        ]}
      />

      <TextTestimonials reviews={reviews} />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </div>
  );
};

export default DivorceProblemsPage;