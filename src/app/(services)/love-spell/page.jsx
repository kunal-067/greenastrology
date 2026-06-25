import FAQSection from '@/components/sections/FAQSection'
import TextTestimonials from '@/components/sections/TextTestimonials'
import FinalCTA from '@/components/sections/FinalCTA';
import PageHero from '@/components/pages/PageHero'
import { WA_LINK } from '@/lib/constants';
import { HeartHandshake, Search, Sparkles, RefreshCw, Heart, Gem, ShieldCheck, Wand2, Star, Moon, Flame, Eye } from "lucide-react";
import { HowGurujiSolvesIt } from '@/components/pages/HowGurujiSolve';
import { ProblemsSolvedSection } from '@/components/pages/ProblemSolve';

const reviews = [
  { name: "Divya M.", city: "London",     text: "I was in tears when I first contacted Acharya Ji. Within weeks of his love spell guidance, my partner returned and proposed. I still can't believe it.", stars: 5 },
  { name: "Simran K.", city: "Leicester", text: "The love spell ritual Acharya Ji prescribed was simple yet powerful. My relationship transformed completely. We are now engaged.", stars: 5 },
  { name: "Nisha P.", city: "Birmingham", text: "After years of one-sided love and heartbreak, Acharya Ji's guidance finally made my feelings reciprocated. Truly life-changing.", stars: 5 },
  { name: "Rekha T.", city: "Manchester", text: "I was sceptical about love spells but Acharya Ji explained everything through Vedic science. The results were undeniable.", stars: 5 },
  { name: "Pooja S.", city: "Glasgow",    text: "My estranged husband reconnected with me after the love binding ritual. Our bond is now stronger than ever before.", stars: 5 },
  { name: "Kavya R.", city: "Leeds",      text: "Acharya Ji's love spell removed all negative energy blocking my relationship. Peace returned to my home within days.", stars: 5 },
  { name: "Meena D.", city: "Bristol",    text: "Three years of a long-distance relationship going nowhere — after the spell, he moved cities to be with me. Outstanding.", stars: 5 },
  { name: "Anjali V.", city: "Coventry",  text: "Completely private, deeply knowledgeable. Acharya Ji treated my case with care and delivered real results.", stars: 5 },
];

const faqs = [
  { q: "What exactly is a Vedic love spell?", a: "A Vedic love spell is a spiritually guided ritual rooted in ancient Sanskrit mantras, astrological timing, and sacred yantras. Unlike superstition, it works by aligning cosmic energies with your intentions to remove obstacles blocking love from flowing naturally between two people." },
  { q: "Is a love spell safe and ethical?", a: "Acharya Ji only prescribes remedies that work with natural cosmic energies rather than against free will. Every ritual is conducted with positive intentions focused on harmony, healing, and attraction — never harm or manipulation." },
  { q: "How long before I see results?", a: "Some clients notice shifts in their partner's behaviour within 1–2 weeks. More complex situations may take 3–6 weeks. Acharya Ji will give you a realistic timeline after assessing your specific case during the free consultation." },
  { q: "Do I need to be physically present for the ritual?", a: "No. Vedic love rituals work at an energetic level and can be performed remotely. Acharya Ji will guide you through everything needed from wherever you are in the UK or worldwide." },
  { q: "What information does Acharya Ji need?", a: "Your date of birth, your partner's details if available, and a brief description of your situation are sufficient to begin. A full Kundali reading is available for deeper insight." },
  { q: "Is the first consultation really free?", a: "Yes, absolutely. Acharya Ji offers a no-obligation free consultation via WhatsApp so you can explain your situation and understand how he can help before making any commitment." },
];

const LoveSpellPage = () => {
  return (
    <div className="min-h-screen bg-[#060e08] text-[#e8f5ea] font-sans overflow-x-hidden">

      <PageHero
        badge="✨ LOVE SPELL SPECIALIST"
        liveBadge="Online Now · Free Love Spell Consultation"
        breadcrumb="Love Spell Solution"
        headLine1="Powerful Vedic"
        headLineShimmer="Love Spells"
        headLine2="That Actually Work"
        sub="Struggling with unrequited love, a distant partner, or blocked romantic energy? Acharya Ji's ancient Vedic love spell remedies have reunited thousands of couples across the UK."
        badges={[
          { icon: <Wand2  className="h-4 w-4 text-[#4db86a]" />, text: "Vedic Love Rituals"   },
          { icon: <Heart  className="h-4 w-4 text-[#4db86a]" />, text: "Attraction Spells"     },
          { icon: <Moon   className="h-4 w-4 text-[#4db86a]" />, text: "Cosmic Alignment"      },
          { icon: <ShieldCheck className="h-4 w-4 text-[#4db86a]" />, text: "100% Private"     },
        ]}
        waLink={WA_LINK}
        ctaLabel="Get Your Love Spell Now"
        secondaryHref="#how-it-works"
        secondaryLabel="How It Works"
        statCards={[
          { value: "8,000+", label: "Reunited Couples" },
          { value: "20+",    label: "Years Experience"  },
        ]}
        avatarInitials={["D","S","N","R","P","K"]}
        proofText="Trusted by 8,000+ clients across the UK"
        placeholderEmoji="✨"
      />

      <HowGurujiSolvesIt
        eyebrow="Love Spell Process"
        heading="How the"
        headingShimmer="Love Spell Works"
        sub="Every love situation is unique. Acharya Ji combines astrological timing, sacred mantras, and personal energy alignment to remove what is blocking love from flowing between two souls."
        steps={[
          { icon: <Search       className="h-6 w-6" />, title: "Energy & Chart Assessment",  body: "Acharya Ji reads your birth chart and assesses the current planetary energies affecting your love life to identify exactly what is blocking the connection.", chip: "Step 1" },
          { icon: <Moon         className="h-6 w-6" />, title: "Ritual Timing Selection",    body: "Vedic spells are most potent when performed at auspicious planetary hours. Guruji identifies the exact date, time, and lunar phase for your personalised ritual.", chip: "Step 2" },
          { icon: <Wand2        className="h-6 w-6" />, title: "Mantra & Yantra Prescription",body: "You receive specific Sanskrit mantras, sacred yantras, and ritual instructions tailored to your unique love situation — never a generic formula.", chip: "Step 3" },
          { icon: <RefreshCw    className="h-6 w-6" />, title: "Follow-Through Guidance",    body: "Acharya Ji monitors progress and adjusts remedies if needed. You are supported at every stage until the desired result is achieved.", chip: "Step 4" },
        ]}
        ctaLabel="Start Your Love Spell — Free"
        waLink={WA_LINK}
      />

      <ProblemsSolvedSection
        eyebrow="Love Spell Specialisations"
        heading="Situations"
        headingShimmer="We Can Heal"
        sub="Whether your love is blocked, lost, or unrequited — Acharya Ji's Vedic love spells address the root energetic cause."
        problems={[
          { icon: <Heart    />, title: "Unrequited Love",       body: "Make your feelings known and reciprocated through gentle cosmic alignment."           },
          { icon: <Flame    />, title: "Reignite Lost Passion", body: "Restore the spark in a relationship that has grown cold or distant."                 },
          { icon: <Eye      />, title: "Remove Evil Eye",       body: "Eliminate jealousy and negative third-party energies blocking your relationship."    },
          { icon: <Gem      />, title: "Attract a Soulmate",    body: "Open your energetic field to draw the right partner into your life at the right time."},
          { icon: <Moon     />, title: "Binding Love Ritual",   body: "Strengthen the cosmic bond between two people already in a committed relationship."  },
          { icon: <Wand2    />, title: "Break Love Obstacles",  body: "Remove family opposition, past trauma, or karmic blocks preventing union."           },
          { icon: <Star     />, title: "Long-Distance Love",    body: "Bridge the physical gap and maintain deep emotional connection across distances."    },
          { icon: <Sparkles />, title: "Post-Breakup Healing",  body: "Heal emotional wounds and create the conditions for a healthy reunion."              },
        ]}
      />

      <TextTestimonials reviews={reviews} />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </div>
  );
};

export default LoveSpellPage;