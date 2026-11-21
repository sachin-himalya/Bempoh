import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, ArrowUpRight, ChevronDown, ListOrdered } from 'lucide-react';

export default function PrivacyPolicy({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    document.title = 'Privacy Policy | Bempoh Inc';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Official Privacy Policy for Bempoh Inc and its subsidiaries, including Bempoh Technologies, Udlivery, Bempoh Games, Bempoh Music, and Bempoh Books.';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: '1. Overview' },
    { id: 'collect', title: '2. Information We Collect' },
    { id: 'use', title: '3. How We Use Your Information' },
    { id: 'cookies', title: '4. Cookies & Analytics' },
    { id: 'third-party', title: '5. Third-Party Services & Links' },
    { id: 'sharing', title: '6. Sharing of Information' },
    { id: 'security', title: '7. Data Security & Retention' },
    { id: 'rights', title: '8. Your Rights & Choices' },
    { id: 'children', title: "9. Children's Privacy" },
    { id: 'changes', title: '10. Changes to This Policy' },
    { id: 'contact', title: '11. Contact Us' },
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
          <ShieldCheck className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
          <span>LEGAL DISCLOSURES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight leading-none mb-4 transition-colors duration-300">
          PRIVACY POLICY
        </h1>

        <p className="text-xs sm:text-sm font-mono text-[#50515C] dark:text-zinc-500">
          Last updated: November 21, 2026
        </p>
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

          <nav className="space-y-1.5 border-l border-black/[0.08] dark:border-white/10 text-xs font-medium">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block py-1.5 pl-4 -ml-[1px] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-l-2 border-[#C99B3C] text-[#8C5B0D] dark:text-[#E2C268] font-bold bg-[#C99B3C]/5 rounded-r'
                      : 'border-l-2 border-transparent text-[#50515C] dark:text-zinc-400 hover:text-[#0C0D12] dark:hover:text-white hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  {sec.title}
                </a>
              );
            })}
          </nav>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[11px] uppercase tracking-wider text-[#50515C] dark:text-zinc-500 hover:text-[#8C5B0D] dark:hover:text-[#E2C268] font-mono cursor-pointer transition-colors"
            >
              ↑ Back to top
            </button>
          </div>
        </aside>

        {/* Right Content Column */}
        <main className="lg:col-span-8 max-w-[760px] text-sm sm:text-base text-[#50515C] dark:text-zinc-300 leading-[1.8] space-y-12">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              1. Overview
            </h2>
            <p className="mb-4">
              Bempoh Inc operates as a multi-industry holding company managing dynamic ventures, digital technologies, creative media, and published intellectual works across multiple sectors. Our ecosystem encompasses divisions including <strong>Bempoh Technologies</strong>, <strong>Udlivery</strong>, <strong>Bempoh Games</strong>, <strong>Bempoh Music</strong>, <strong>Bempoh Books</strong>, and the original publication <em>"The Universal Antidote"</em> by E.K. Bempoh.
            </p>
            <p>
              This Privacy Policy explains how Bempoh Inc collects, handles, safeguards, and utilizes information when you visit our primary corporate portal (<code>bempoh.com</code>) or communicate with us through our corporate digital channels. We are dedicated to maintaining the highest ethical and lawful standards of information transparency and data stewardship.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 2: Information We Collect */}
          <section id="collect" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information in two principal manners: directly from your voluntary submissions, and automatically through routine, privacy-respecting technical operations.
            </p>
            <ul className="space-y-3 pl-5 list-disc mb-4">
              <li>
                <strong>Direct Communications:</strong> When you initiate corporate correspondence via our "Connect with Bempoh Inc" portal, we receive the information you submit, including your full name, email address, message proposal, and related inquiry details.
              </li>
              <li>
                <strong>Technical &amp; Device Information:</strong> Standard server logs automatically receive technical metadata communicated by your browser when requesting site assets, including IP address, browser type, device form factor, screen resolution, operating system, and referring URLs.
              </li>
              <li>
                <strong>Functional Browser Storage:</strong> We utilize minimal, functional browser local storage (specifically <code>bempoh-theme</code>) strictly to preserve your selected day or night visual mode across browsing sessions without external profiling.
              </li>
            </ul>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 3: How We Use Your Information */}
          <section id="use" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              Personal information gathered by Bempoh Inc is strictly utilized for bona fide corporate and operational purposes:
            </p>
            <ul className="space-y-3 pl-5 list-disc mb-4">
              <li>Facilitating and delivering direct responses to commercial proposals, partnership queries, media inquiries, or technical support requests.</li>
              <li>Ensuring the technical integrity, security, and uptime reliability of our web infrastructure and content delivery networks.</li>
              <li>Detecting, preventing, and investigating potential fraudulent transactions, spam submissions, or security breaches.</li>
              <li>Fulfilling legal and regulatory disclosure obligations when mandated by competent authorities.</li>
            </ul>
            <p>
              We do not utilize inquiry submissions for marketing spam, unsolicited promotional newsletters, or automated telemarketing.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 4: Cookies & Analytics */}
          <section id="cookies" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              4. Cookies &amp; Analytics
            </h2>
            <p className="mb-4">
              Bempoh Inc prioritizes user privacy and does not deploy intrusive cross-domain ad-tracking pixels, third-party social surveillance cookies, or invasive user profiling systems.
            </p>
            <p>
              Any website metrics evaluated are aggregated, privacy-first technical diagnostics (such as HTTP response latencies, browser capability assessments, and CDN caching efficiency). These diagnostics allow our engineering staff to ensure the platform remains accessible, responsive, and visually optimized across all global regions.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 5: Third-Party Services & Links */}
          <section id="third-party" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              5. Third-Party Services &amp; Links
            </h2>
            <p className="mb-4">
              To provide interactive media, audio streaming, book access, and application distribution, this website links directly to established third-party services:
            </p>
            <ul className="space-y-3 pl-5 list-disc mb-4">
              <li><strong>Streaming &amp; Video Media:</strong> Official audio and visual releases linked via YouTube, Spotify, and Apple Music.</li>
              <li><strong>Publishing &amp; Distribution:</strong> Literary and philosophical publications distributed through Amazon Author and digital book platforms.</li>
              <li><strong>Application Distribution:</strong> Official mobile application listings on the Apple App Store and Google Play Store for ventures including Udlivery.</li>
              <li><strong>Email Client Integration:</strong> Direct email compose hyperlinks opening your system's default mail application or Google Mail.</li>
            </ul>
            <p>
              Please note that once you navigate outside <code>bempoh.com</code>, external third-party domains operate under their own independent terms of service and privacy disclosures. We encourage you to review their respective privacy practices.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 6: Sharing of Information */}
          <section id="sharing" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              6. Sharing of Information
            </h2>
            <p className="mb-4 font-semibold text-[#0C0D12] dark:text-white">
              Bempoh Inc does not sell, rent, monetize, or trade personal data to commercial data brokers or advertisers under any circumstances.
            </p>
            <p className="mb-4">
              Information is only shared with third parties under limited, legally defined conditions:
            </p>
            <ul className="space-y-3 pl-5 list-disc">
              <li>
                <strong>Infrastructure Providers:</strong> Secure hosting, server, and transmission vendors that assist in delivering our website infrastructure under binding confidentiality and data-protection agreements.
              </li>
              <li>
                <strong>Legal Compliance &amp; Protection:</strong> When required by lawful court order, subpoena, government inquiry, or where necessary in good faith to protect the property, safety, or legal rights of Bempoh Inc, our users, or the public.
              </li>
            </ul>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 7: Data Security & Retention */}
          <section id="security" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              7. Data Security &amp; Retention
            </h2>
            <p className="mb-4">
              We apply technical and procedural security safeguards to protect information against unauthorized access, loss, or disclosure. All web traffic between your client device and our servers is secured with TLS (HTTPS) encryption. Access to inquiry channels is restricted to authorized personnel with a legitimate business need.
            </p>
            <p>
              Personal data received through business inquiries is retained only for the duration required to address the relevant communication, fulfill ongoing collaborative agreements, or comply with statutory retention requirements.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 8: Your Rights & Choices */}
          <section id="rights" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              8. Your Rights &amp; Choices
            </h2>
            <p className="mb-4">
              Depending on your location and governing data protection regulations (such as GDPR, CCPA/CPRA, or relevant regional privacy laws), you may have the following rights regarding personal data held by Bempoh Inc:
            </p>
            <ul className="space-y-3 pl-5 list-disc mb-4">
              <li><strong>Right to Access:</strong> The right to request confirmation of whether we hold your information and request copies thereof.</li>
              <li><strong>Right to Rectification:</strong> The right to request correction of inaccurate, incomplete, or outdated personal information.</li>
              <li><strong>Right to Deletion:</strong> The right to request deletion of your information from our correspondence archives, subject to legal retention obligations.</li>
              <li><strong>Right to Restrict or Object:</strong> The right to restrict or object to certain forms of information processing.</li>
            </ul>
            <p>
              To exercise any of these rights, please submit a written request to our compliance desk at <a href="mailto:bempohllc@gmail.com" className="text-[#8C5B0D] dark:text-[#E2C268] hover:underline font-semibold">bempohllc@gmail.com</a>.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 9: Children's Privacy */}
          <section id="children" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              9. Children's Privacy
            </h2>
            <p className="mb-4">
              Our website and enterprise ecosystem portals are intended strictly for general commercial, professional, and adult audiences. We do not knowingly solicit, collect, or retain personal data from children under the age of 13 (or under 16 where required by local statute).
            </p>
            <p>
              If a parent or legal guardian discovers that their child has provided personal information to us without appropriate consent, please contact us immediately. We will take prompt measures to delete such records from our systems.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 10: Changes to This Policy */}
          <section id="changes" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              10. Changes to This Policy
            </h2>
            <p className="mb-4">
              Bempoh Inc reserves the right to revise, update, or modify this Privacy Policy at our discretion to reflect evolving business practices, new technological integrations, or updated legal mandates.
            </p>
            <p>
              Any amendments will become effective immediately upon being published on this page, indicated by the "Last updated" date at the top of this document. Your continued browsing or utilization of our web services following updates represents your acknowledgment of the amended policy.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 11: Contact Us */}
          <section id="contact" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              11. Contact Us
            </h2>
            <p className="mb-4">
              For questions, clarifications, compliance requests, or formal notifications regarding this Privacy Policy and our data practices, please contact our legal desk:
            </p>
            <div className="p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2 text-xs sm:text-sm font-mono">
              <div className="text-sm font-bold text-[#0C0D12] dark:text-white font-sans uppercase">
                BEMPOH INC — LEGAL &amp; PRIVACY COMPLIANCE
              </div>
              <div>
                <strong>Email:</strong>{' '}
                <a href="mailto:bempohllc@gmail.com" className="text-[#8C5B0D] dark:text-[#E2C268] hover:underline">
                  bempohllc@gmail.com
                </a>
              </div>
              <div>
                <strong>Physical Address:</strong> [BUSINESS_ADDRESS]
              </div>
              <div>
                <strong>Jurisdiction:</strong> [GOVERNING_LAW_LOCATION]
              </div>
            </div>
          </section>

          {/* Bottom Interactive Contact Card */}
          <div className="rounded-3xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-[#C99B3C]/35 p-8 sm:p-10 shadow-lg mt-16 transition-colors duration-300">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono mb-2">
              DIRECT INQUIRIES &amp; COMPLIANCE
            </div>
            <h3 className="text-2xl font-black uppercase text-[#0C0D12] dark:text-white tracking-tight mb-2">
              Questions about this page?
            </h3>
            <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed mb-6 max-w-xl">
              If you have inquiries regarding our privacy standards, corporate policies, or wish to transmit a formal corporate inquiry, our compliance desk is available.
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
