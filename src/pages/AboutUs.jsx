import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  ListOrdered,
  Briefcase,
  BookOpen,
  HeartHandshake,
  Layers,
  Sparkles,
  Building2,
  Mail,
  MapPin,
} from 'lucide-react';

export default function AboutUs({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    document.title = 'About Us | Bempoh Inc';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Learn about Bempoh Inc, a multi-industry holding company building ventures across technology, gaming, music, publishing, and future industries, founded by E.K. Bempoh.';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const sections = [
    { id: 'overview', title: '1. Corporate Overview' },
    { id: 'philosophy', title: '2. Corporate Philosophy' },
    { id: 'ecosystem', title: '3. Ecosystem & Subsidiaries' },
    { id: 'founder', title: '4. Meet Our Founder: E.K. Bempoh' },
    { id: 'entrepreneurship', title: '5. Entrepreneurship & Leadership' },
    { id: 'intellectual', title: '6. Intellectual & Creative Works' },
    { id: 'faith', title: '7. Faith & Humanitarian Endeavors' },
    { id: 'legacy', title: '8. Vision & Generational Legacy' },
    { id: 'contact', title: '9. Corporate Inquiries & Contact' },
  ];

  // ScrollSpy observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setMobileTocOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="relative w-full pt-28 pb-20 px-6 sm:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Back to Home Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8C5B0D] dark:text-[#E2C268] hover:text-[#0C0D12] dark:hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="border-b border-black/[0.08] dark:border-white/10 pb-10 mb-12">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8C5B0D] dark:text-[#E2C268] uppercase tracking-[0.3em] font-mono mb-3">
          <Compass className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
          <span>CORPORATE PROFILE &amp; LEADERSHIP</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight leading-none mb-4 transition-colors duration-300">
          ABOUT BEMPOH
        </h1>

        <p className="text-base sm:text-xl font-medium text-[#50515C] dark:text-zinc-300 max-w-3xl leading-relaxed mb-4">
          A multi-industry holding company pioneering breakthrough enterprises across technology, digital media, music, publishing, and future physical infrastructure.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8C5B0D] dark:text-[#E2C268] font-bold">
          <span>“From Heaven to Earth. From Future to Now.”</span>
          <span className="text-black/30 dark:text-white/20">•</span>
          <span className="text-[#50515C] dark:text-zinc-500 font-normal">Founded by E.K. Bempoh</span>
        </div>
      </div>

      {/* Mobile Collapsible Table of Contents */}
      <div className="block lg:hidden mb-10">
        <div className="rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 p-4 transition-colors duration-300">
          <button
            type="button"
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-bold text-[#8C5B0D] dark:text-[#E2C268] font-mono cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ListOrdered className="w-4 h-4" />
              <span>ON THIS PAGE ({sections.length} SECTIONS)</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                mobileTocOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {mobileTocOpen && (
            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 space-y-2.5">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block text-xs py-1 transition-colors ${
                    activeSection === sec.id
                      ? 'text-[#8C5B0D] dark:text-[#E2C268] font-bold'
                      : 'text-[#50515C] dark:text-zinc-400 hover:text-[#0C0D12] dark:hover:text-white'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sticky Desktop Table of Contents */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono block mb-4">
            ON THIS PAGE
          </span>
          <nav className="space-y-1.5 border-l border-black/10 dark:border-white/10 pl-4">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`block text-xs py-1.5 transition-all duration-200 cursor-pointer ${
                  activeSection === sec.id
                    ? 'text-[#8C5B0D] dark:text-[#E2C268] font-bold translate-x-1'
                    : 'text-[#50515C] dark:text-zinc-400 hover:text-[#0C0D12] dark:hover:text-white'
                }`}
              >
                {sec.title}
              </a>
            ))}
          </nav>

          {/* Quick Stats / Info Widget */}
          <div className="mt-10 p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 text-xs space-y-3">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#8C5B0D] dark:text-[#E2C268] font-mono">
              ENTERPRISE SNAPSHOT
            </div>
            <div className="text-[#50515C] dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-[#0C0D12] dark:text-white">Headquarters:</span> Multi-sector Holding Entity
            </div>
            <div className="text-[#50515C] dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-[#0C0D12] dark:text-white">Active Sectors:</span> Technology, Logistics, Gaming, Music, Books, Media
            </div>
            <div className="text-[#50515C] dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-[#0C0D12] dark:text-white">Contact:</span> bempohllc@gmail.com
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="lg:col-span-8 max-w-[760px] space-y-16 text-[#50515C] dark:text-zinc-300 leading-[1.8] text-sm sm:text-base font-normal">
          {/* SECTION 1: Corporate Overview */}
          <section id="overview" className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              1. Corporate Overview
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              <strong>Bempoh Inc</strong> operates as an elite, forward-looking multi-industry holding company architected to conceptualize, launch, and steward transformative enterprises across diverse global verticals.
            </p>
            <p>
              Headquartered with a global perspective, Bempoh coordinates specialized business entities spanning enterprise software, on-demand logistics, interactive gaming, commercial sound and music composition, philosophical and theological literature, and emerging real-estate developments. Rather than operating within conventional corporate boundaries, Bempoh builds integrated synergies where each business line enriches and reinforces the parent ecosystem.
            </p>
            <div className="p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
              <div className="text-xs uppercase font-bold tracking-widest text-[#8C5B0D] dark:text-[#E2C268] font-mono">
                CORE MANDATE
              </div>
              <p className="text-sm font-medium text-[#0C0D12] dark:text-white">
                To build long-term generational value, deploy innovative commercial frameworks, and engineer systems that elevate human potential across economic, cultural, and spiritual domains.
              </p>
            </div>
          </section>

          {/* SECTION 2: Corporate Philosophy */}
          <section id="philosophy" className="space-y-4 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              2. Corporate Philosophy &amp; Principle
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              Every venture developed under the Bempoh banner is anchored in a unified philosophical foundation. In a rapidly accelerating global economy, Bempoh stands firm on the belief that enduring success is not measured in fleeting cycles, but in the structural permanence of what is created.
            </p>
            <div className="my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAFAFC] via-[#F4E8C1]/15 to-[#FAFAFC] dark:from-[#0E0F14] dark:via-[#C99B3C]/10 dark:to-[#0E0F14] border border-[#C99B3C]/35 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-[#8C5B0D] dark:text-[#E2C268] block">
                THE BEMPOH MANIFESTO
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white tracking-tight uppercase leading-snug">
                “We don't wait for the future. We build toward it.”
              </p>
              <p className="text-sm text-[#50515C] dark:text-zinc-300">
                Action precedes manifestation. We engineer solutions that anticipate where industry and society are heading, turning distant possibilities into present tangible realities.
              </p>
            </div>
            <p>
              This is reinforced by the Bempoh Principle: <em>“From Heaven to Earth. From Future to Now.”</em> It captures the journey of an idea—from divine inspiration and intellectual conception, down into rigorous execution and practical daily utility.
            </p>
          </section>

          {/* SECTION 3: Ecosystem & Subsidiaries */}
          <section id="ecosystem" className="space-y-6 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              3. Ecosystem &amp; Subsidiaries
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              The Bempoh ecosystem operates through structured autonomous divisions, each leading innovation in its respective market:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tech / Udlivery */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#0C0D12] dark:text-white">
                    Bempoh Technologies &amp; Udlivery
                  </h3>
                </div>
                <p className="text-xs text-[#50515C] dark:text-zinc-400 leading-relaxed">
                  Directing software, mobile applications, and on-demand logistics architectures designed to streamline modern fulfillment and commercial operations.
                </p>
              </div>

              {/* Games */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#0C0D12] dark:text-white">
                    Bempoh Games <span className="text-[10px] text-[#8C5B0D] dark:text-[#E2C268]">(In Development)</span>
                  </h3>
                </div>
                <p className="text-xs text-[#50515C] dark:text-zinc-400 leading-relaxed">
                  Interactive entertainment and game design exploring rich narrative mechanics, intellectual riddles, and immersive virtual experiences.
                </p>
              </div>

              {/* Music */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#0C0D12] dark:text-white">
                    Bempoh Music
                  </h3>
                </div>
                <p className="text-xs text-[#50515C] dark:text-zinc-400 leading-relaxed">
                  A sonic and audio catalog spanning multi-instrumental compositions, cinematic releases, and custom ringtone collections distributed globally on Spotify, Apple Music, and YouTube.
                </p>
              </div>

              {/* Books */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#0C0D12] dark:text-white">
                    Bempoh Books
                  </h3>
                </div>
                <p className="text-xs text-[#50515C] dark:text-zinc-400 leading-relaxed">
                  Ideas made permanent. Publishing insightful literature, including <em>The Universal Antidote</em>, addressing systemic human problems and spiritual truths.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: Meet Our Founder */}
          <section id="founder" className="space-y-6 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              4. Meet Our Founder: E.K. Bempoh
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />

            {/* Founder Highlight Card with Portrait */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-[#C99B3C]/35 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[240px] sm:max-w-[260px] rounded-2xl overflow-hidden border border-[#C99B3C]/40 bg-black/40 shadow-xl">
                  {!imgError ? (
                    <img
                      src="/founder.webp"
                      alt="E.K. Bempoh"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-4xl font-black text-[#8C5B0D] dark:text-[#E2C268]">
                        EKB
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mt-2">
                        [FOUNDER]
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-7 space-y-3">
                <span className="text-xs uppercase font-mono tracking-[0.25em] font-bold text-[#8C5B0D] dark:text-[#E2C268]">
                  FOUNDER &amp; CHAIRMAN
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#0C0D12] dark:text-white tracking-tight">
                  E.K. BEMPOH
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#8C5B0D] dark:text-[#E2C268] font-bold">
                  Entrepreneur | Philanthropist | Philosopher | Author | Artist | Innovator
                </div>
                <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-300 leading-relaxed">
                  Eastwood Kwaku Mawupemo Bempoh was born in Accra, Ghana on July 28th, 1999. He moved to the United States at the age of 10. Driven by visionary foresight and an uncompromising commitment to excellence, he has channeled his life's work into an interconnected ecosystem spanning multi-sector enterprise, intellectual inquiry, artistic expression, and global humanitarian stewardship.
                </p>
              </div>
            </div>

            <p>
              E.K. Bempoh operates at the intersection of discipline and creative vision. His multidisciplinary background allows Bempoh Inc to bridge diverse commercial disciplines with rigorous strategic depth, establishing operations that are structured for generational durability.
            </p>
          </section>

          {/* SECTION 5: Entrepreneurship & Business Leadership */}
          <section id="entrepreneurship" className="space-y-4 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              5. Entrepreneurship &amp; Business Leadership
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              As the architect and Founder of <strong>Bempoh LLC</strong>, E.K. Bempoh envisioned a multi-industry holding company capable of operating with nimble precision across modern digital landscapes while investing in capital-intensive physical assets.
            </p>
            <p>
              Under his executive stewardship, <strong>Bempoh Technologies</strong> directs proprietary digital and physical platforms—most notably <strong>Udlivery</strong>—focused on scalable on-demand infrastructure. His approach to business leadership rejects short-term speculative hype, prioritizing sustainable cash flow, rigorous governance, clear brand distinction, and user trust.
            </p>
          </section>

          {/* SECTION 6: Intellectual & Creative Works */}
          <section id="intellectual" className="space-y-4 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              6. Intellectual &amp; Creative Works
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              Beyond commercial enterprise, E.K. Bempoh has made extensive contributions to philosophical frameworks, problem-solving methodologies, literature, and music composition:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Bempoh Quantification Tree of All Problems:</strong> A proprietary intellectual taxonomy designed to systematically classify, dissect, and derive solutions for complex human, operational, and institutional challenges.
              </li>
              <li>
                <strong>Unirical Riddles:</strong> A unique series of thought paradigms and conceptual inquiries engineered to cultivate critical cognitive deduction and creative lateral thinking.
              </li>
              <li>
                <strong>Published Works:</strong> A prolific author with 9 solo books and 5 collaborative publications to date, including the internationally recognized work <em>The Universal Antidote</em>, addressing systemic human choices and philosophical resolution.
              </li>
              <li>
                <strong>Musical Catalog:</strong> Multi-instrumentalist, composer, and producer whose auditory catalog and original compositions are streamed worldwide across platforms including Spotify, Apple Music, and YouTube.
              </li>
            </ul>
          </section>

          {/* SECTION 7: Faith & Humanitarian Endeavors */}
          <section id="faith" className="space-y-4 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              7. Faith, Ministry &amp; Humanitarian Endeavors
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              Central to the founder's life and purpose is an unwavering commitment to faith, Christian ministry, and compassionate philanthropic stewardship:
            </p>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h3 className="text-sm font-bold uppercase text-[#0C0D12] dark:text-white">
                    Christglobe Inc. (Established August 2019)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-300 leading-relaxed">
                  Founded to direct Christglobe Ministries and Christglobe Tv, broadcasting spiritual guidance, tele-evangelism, and global outreach across continents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h3 className="text-sm font-bold uppercase text-[#0C0D12] dark:text-white">
                    The FGGO (Foundation Giving &amp; Generational Outreach)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-300 leading-relaxed">
                  A nonprofit parent institution dedicated to providing vital financial support, operational resources, and benevolent grants to struggling churches, ministries, homeless shelters, and vulnerable communities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.03] dark:bg-black/30 border-l-2 border-[#C99B3C] italic text-sm text-[#0C0D12] dark:text-zinc-200">
                “I was sent to earth with three Tools (Wisdom, Wealth, and Power) for one goal (To win, mature and keep souls for the return of he who sent me — the Lord God). Anything less is loss, anything more is extra.”
              </div>
            </div>
          </section>

          {/* SECTION 8: Vision & Generational Legacy */}
          <section id="legacy" className="space-y-4 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              8. Vision &amp; Generational Legacy
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              The defining objective of Bempoh Inc is the intentional establishment of generational continuity. While businesses often react to the cadence of quarterly milestones, Bempoh's strategic horizon is measured in decades and lifetimes.
            </p>
            <div className="p-8 rounded-3xl bg-black/[0.02] dark:bg-[#0E0F14] border border-[#C99B3C]/35 text-center relative overflow-hidden my-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono block mb-3">
                FOUNDER'S CREED
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase leading-snug tracking-tight">
                “To build beyond his lifetime, create beyond convention, and leave a legacy that continues to serve generations yet to come.”
              </p>
              <div className="mt-4 text-xs font-mono font-bold text-[#8C5B0D] dark:text-[#E2C268]">
                “From Heaven to Earth. From Future to Now.”
              </div>
            </div>
            <p>
              Every venture, platform, publication, and creative endowment launched under Bempoh is treated as an enduring piece of this larger cultural and spiritual architecture.
            </p>
          </section>

          {/* SECTION 9: Corporate Inquiries & Contact */}
          <section id="contact" className="space-y-4 pt-8 border-t border-black/[0.08] dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight">
              9. Corporate Inquiries &amp; Contact
            </h2>
            <div className="w-12 h-0.5 bg-[#8C5B0D] dark:bg-[#E2C268] mb-4" />
            <p>
              For executive inquiries, strategic partnerships, institutional collaborations, press, or venture questions, please contact the corporate desk of Bempoh Inc:
            </p>
            <div className="p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                <span>
                  <strong>Official Email:</strong>{' '}
                  <a href="mailto:bempohllc@gmail.com" className="text-[#8C5B0D] dark:text-[#E2C268] hover:underline">
                    bempohllc@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                <span>
                  <strong>Headquarters:</strong> [BUSINESS_ADDRESS]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                <span>
                  <strong>Legal Entity:</strong> Bempoh Inc / Bempoh LLC
                </span>
              </div>
            </div>
          </section>

          {/* Bottom Interactive Contact Card */}
          <div className="rounded-3xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-[#C99B3C]/35 p-8 sm:p-10 shadow-lg mt-16 transition-colors duration-300">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono mb-2">
              EXECUTIVE &amp; VENTURE INQUIRIES
            </div>
            <h3 className="text-2xl font-black uppercase text-[#0C0D12] dark:text-white tracking-tight mb-2">
              Connect with Bempoh Inc
            </h3>
            <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed mb-6 max-w-xl">
              Whether you are an institutional partner, prospective collaborator, or wish to communicate directly with our executive office, we welcome your inquiry.
            </p>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black font-extrabold text-xs uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(201,155,60,0.3)] hover:shadow-[0_4px_30px_rgba(201,155,60,0.5)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
