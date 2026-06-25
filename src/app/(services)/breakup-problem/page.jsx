import FAQSection from '@/components/sections/FAQSection'
import TextTestimonials from '@/components/sections/TextTestimonials'
import React from 'react'
import FinalCTA from '@/components/sections/FinalCTA';
import PageHero from '@/components/pages/PageHero'
import { WA_LINK } from '@/lib/constants';
import {
    HeartCrack,
    Search,
    Sparkles,
    RefreshCw,
    Heart,
    Gem,
    ShieldCheck,
    Brain,
    Plane,
    Baby,
    HeartPulse,
    Briefcase,
    Home,
    MessageCircleHeart,
    Handshake,
    Eye,
    Flame
} from "lucide-react";
import { HowGurujiSolvesIt } from '@/components/pages/HowGurujiSolve';
import { ProblemsSolvedSection } from '@/components/pages/ProblemSolve';


export const reviews = [
    {
        name: "Riya M.",
        city: "London",
        text: "After a painful breakup of 3 years, Acharya Ji helped me reconnect with my partner in just 4 weeks. Truly life-changing.",
        stars: 5,
    },
    {
        name: "Simran K.",
        city: "Birmingham",
        text: "I thought my relationship was over forever. Guruji's guidance gave me real hope and my partner came back.",
        stars: 5,
    },
    {
        name: "Neha R.",
        city: "Manchester",
        text: "The breakup left me shattered. Acharya Ji not only helped rebuild my relationship but also my confidence.",
        stars: 5,
    },
    {
        name: "Divya P.",
        city: "Leicester",
        text: "My boyfriend had blocked me everywhere. After following Guruji's advice, he reached out within 2 weeks.",
        stars: 5,
    },
    {
        name: "Anjali D.",
        city: "Leeds",
        text: "I had tried everything before coming to Acharya Ji. Nothing compares to his personalised spiritual guidance.",
        stars: 5,
    },
    {
        name: "Preethi T.",
        city: "Glasgow",
        text: "Very compassionate and understanding. He never judged my situation and gave practical, honest advice.",
        stars: 5,
    },
    {
        name: "Sonal M.",
        city: "Bristol",
        text: "My long-distance relationship broke down due to misunderstandings. Acharya Ji helped us communicate and reunite.",
        stars: 5,
    },
    {
        name: "Tanvi V.",
        city: "Coventry",
        text: "I was going through the worst phase of my life. Guruji's guidance brought me clarity, peace, and my love back.",
        stars: 5,
    },
];

export const faqs = [
    {
        q: "Can Acharya Ji help me after a recent breakup?",
        a: "Yes. Whether the breakup happened days ago or years ago, Acharya Ji analyses the emotional and spiritual dynamics of your relationship and provides personalised guidance to help you navigate this difficult time and explore possibilities for reconciliation.",
    },
    {
        q: "What if my ex has blocked me or stopped all contact?",
        a: "This is one of the most common situations Guruji handles. He will assess the reasons behind the no-contact phase and provide practical and spiritual remedies suited to your specific situation.",
    },
    {
        q: "Is my consultation completely confidential?",
        a: "Absolutely. All consultations are handled with the strictest privacy. Your personal story, relationship details, and any remedies provided remain completely confidential.",
    },
    {
        q: "How does a WhatsApp consultation work?",
        a: "Simply message Acharya Ji on WhatsApp with a brief description of your breakup. You can communicate via text, voice notes, or calls. Guruji will respond with personalised guidance based on your situation.",
    },
    {
        q: "How long does it take to see results?",
        a: "Every situation is different. Some clients notice positive shifts within a few weeks, while others may take longer depending on the complexity of their circumstances. Guruji will give you an honest and realistic expectation during the initial consultation.",
    },
    {
        q: "Is the first consultation free?",
        a: "Yes. Your first consultation is completely free of charge. This allows Acharya Ji to properly understand your situation before suggesting any further steps.",
    },
    {
        q: "Do you help with breakups caused by family interference?",
        a: "Yes. Family opposition, parental pressure, and societal disapproval are very common reasons for breakups, especially in South Asian communities. Guruji has extensive experience navigating these sensitive family dynamics.",
    },
];


const BreakUpPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0524] text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
            <PageHero
                badge="💔 BREAKUP PROBLEM SPECIALIST"
                liveBadge="Online Now · Free Breakup Consultation"

                breadcrumb="Breakup Problem Solution"

                headLine1="Heal From Your"
                headLineShimmer="Painful Breakup"
                headLine2="& Reunite With Your Love"

                sub="Heartbroken after a breakup? Dealing with no contact, family interference, trust issues, or a sudden separation? Speak directly with Acharya Guruji and receive compassionate, confidential guidance tailored to your unique situation."

                badges={[
                    {
                        icon: <HeartCrack className="h-4 w-4 text-pink-500" />,
                        text: "Breakup Recovery",
                    },
                    {
                        icon: <Gem className="h-4 w-4 text-violet-500" />,
                        text: "Reconciliation Guidance",
                    },
                    {
                        icon: <Sparkles className="h-4 w-4 text-amber-500" />,
                        text: "Relationship Expert",
                    },
                    {
                        icon: <ShieldCheck className="h-4 w-4 text-green-500" />,
                        text: "100% Private",
                    },
                ]}

                waLink={WA_LINK}

                ctaLabel="Get Breakup Solution Now"

                secondaryHref="#how-it-works"
                secondaryLabel="How It Works"

                statCards={[
                    {
                        value: "10,000+",
                        label: "Consultations",
                    },
                    {
                        value: "15+",
                        label: "Years Experience",
                    },
                ]}

                avatarInitials={["R", "S", "N", "D", "A", "P"]}

                proofText="Trusted by 10,000+ clients worldwide"

                placeholderEmoji="💔"

                wheelColor1="#e11d48"
                wheelColor2="#7c3aed"
            />

            <HowGurujiSolvesIt
                eyebrow="Breakup Recovery Process"
                heading="How Guruji Helps You"
                headingShimmer="Heal & Reconnect"
                sub="A breakup is never just a separation — it carries deep emotional wounds, unanswered questions, and lost trust. Guruji listens with compassion, uncovers the real reasons behind your breakup, and guides you step-by-step toward healing and possible reunion."

                steps={[
                    {
                        icon: <Search className="h-6 w-6" />,
                        title: "Understanding Your Situation",
                        body: "Guruji listens carefully to the full story — the timeline of your relationship, what led to the breakup, what has happened since, and your current emotional state.",
                        chip: "Step 1",
                    },
                    {
                        icon: <Eye className="h-6 w-6" />,
                        title: "Identifying the Root Cause",
                        body: "Most breakups stem from deeper causes — unresolved emotional wounds, miscommunication, ego clashes, third-party interference, or karmic patterns. Guruji identifies the true root.",
                        chip: "Step 2",
                    },
                    {
                        icon: <Sparkles className="h-6 w-6" />,
                        title: "Personalised Remedies & Guidance",
                        body: "You receive tailored spiritual remedies, practical communication strategies, and positive energy practices designed specifically for your relationship and breakup circumstances.",
                        chip: "Step 3",
                    },
                    {
                        icon: <RefreshCw className="h-6 w-6" />,
                        title: "Ongoing Support Through the Journey",
                        body: "Reconciliation is a process, not a single event. Guruji remains available to support you as your situation evolves — adjusting guidance based on new developments.",
                        chip: "Step 4",
                    },
                ]}

                ctaLabel="Talk To Guruji Now"

                waLink={WA_LINK}

                wheelColor1="#e11d48"
                wheelColor2="#7c3aed"
            />

            <ProblemsSolvedSection
                eyebrow="Breakup Situations We Handle"
                heading="Every Type of"
                headingShimmer="Breakup Problem"
                sub="No matter the cause of your separation, Guruji has helped thousands in similar situations find clarity, healing, and reconnection."
                problems={[
                    {
                        icon: <HeartCrack />,
                        title: "Sudden Breakup",
                        body: "Partner ended things without warning or a clear reason, leaving you confused and heartbroken.",
                    },
                    {
                        icon: <MessageCircleHeart />,
                        title: "No Contact Situation",
                        body: "Ex has blocked you, gone silent, or cut off all communication after the breakup.",
                    },
                    {
                        icon: <Home />,
                        title: "Family Interference",
                        body: "Parents or relatives pressured your partner into the breakup or opposed the relationship.",
                    },
                    {
                        icon: <Flame />,
                        title: "Trust & Betrayal Issues",
                        body: "Breakup caused by cheating, lies, or broken promises that destroyed the relationship.",
                    },
                    {
                        icon: <Handshake />,
                        title: "Long-Distance Breakup",
                        body: "Distance, time zones, and communication gaps slowly pulled the relationship apart.",
                    },
                    {
                        icon: <Brain />,
                        title: "Emotional Trauma",
                        body: "Deep emotional pain, anxiety, and loss of self-worth following the end of the relationship.",
                    },
                    {
                        icon: <Plane />,
                        title: "Cross-Cultural Conflicts",
                        body: "Breakup driven by differences in culture, religion, caste, or family traditions.",
                    },
                    {
                        icon: <HeartPulse />,
                        title: "One-Sided Love Rejection",
                        body: "Feelings that were not returned or a confession that ended in rejection and heartbreak.",
                    },
                ]}
                wheelColor1="#e11d48"
                wheelColor2="#9333ea"
            />

            <TextTestimonials reviews={reviews} />

            <FAQSection faqs={faqs} />

            <FinalCTA />
        </div>
    );
};

export default BreakUpPage;