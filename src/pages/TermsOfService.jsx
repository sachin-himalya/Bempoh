import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, ArrowUpRight, ChevronDown, ListOrdered } from 'lucide-react';

export default function TermsOfService({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    document.title = 'Terms of Service | Bempoh Inc';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Official Terms of Service for Bempoh Inc and its ecosystem ventures, governing website access, intellectual property, and user inquiries.';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'use', title: '2. Use of the Website' },
    { id: 'ip', title: '3. Intellectual Property' },
    { id: 'submissions', title: '4. User Submissions' },
    { id: 'ventures', title: '5. Ventures & "Coming Soon" Notice' },
    { id: 'third-party', title: '6. Third-Party Platforms & Links' },
    { id: 'warranties', title: '7. Disclaimer of Warranties' },
    { id: 'liability', title: '8. Limitation of Liability' },
    { id: 'termination', title: '9. Termination / Access Restriction' },
    { id: 'governing-law', title: '10. Governing Law' },
    { id: 'changes', title: '11. Changes to Terms' },
    { id: 'contact', title: '12. Contact Us' },
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

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] mb-6">
          <span className="block text-gold-gradient">
            Terms of
          </span>
          <span className="block text-gold-gradient font-serif-display italic font-normal">
            Service.
          </span>
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
                      : 'border-l-2 border-transparent text-[#50515C] dark:text-zinc-400 hover:text-[#0C0D12] dark:hover:text-white hover:border-black/20 dark:border-white/20'
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
          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              Welcome to the official website of <strong>Bempoh Inc</strong> (<code>bempoh.com</code>). By viewing, browsing, accessing, or interacting with this website and its associated subdomains, portals, or corporate materials, you agree to be bound unconditionally by these Terms of Service, along with our <Link to="/privacy-policy" className="text-[#8C5B0D] dark:text-[#E2C268] hover:underline font-semibold">Privacy Policy</Link>.
            </p>
            <p>
              If you do not agree to these Terms in their entirety, you are not authorized to access or utilize this website and must discontinue your visit immediately.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 2: Use of the Website */}
          <section id="use" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              2. Use of the Website
            </h2>
            <p className="mb-4">
              You may access and utilize this website solely for legitimate personal, professional, and corporate inquiry purposes in compliance with all applicable local, national, and international laws.
            </p>
            <p className="mb-3 font-semibold text-[#0C0D12] dark:text-white">
              Prohibited Activities:
            </p>
            <ul className="space-y-3 pl-5 list-disc">
              <li>Deploying automated robots, spiders, crawlers, or scraping engines to extract text, code, graphics, audio, or metadata without express written consent.</li>
              <li>Engaging in any conduct that restricts, inhibits, overburdens, or impairs any user's enjoyment or the server infrastructure of Bempoh Inc.</li>
              <li>Attempting unauthorized access to system files, restricted databases, administrative consoles, or associated cloud hosting networks.</li>
              <li>Transmitting unsolicited promotional solicitations, deceptive corporate inquiries, viruses, malware, or destructive code through any communication channel.</li>
            </ul>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 3: Intellectual Property */}
          <section id="ip" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              3. Intellectual Property
            </h2>
            <p className="mb-4">
              All visual identity components, design schemas, emblems, corporate logos, trademarks, service marks, wordmarks, trade dress, slogans, typography, original text, audio tracks, musical compositions, ringtones, digital books, publications, manuscripts, graphical layouts, animations, and source code associated with:
            </p>
            <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10 mb-4 font-medium text-xs sm:text-sm text-[#0C0D12] dark:text-zinc-200 space-y-1.5">
              <div>• <strong>Bempoh</strong> and <strong>Bempoh Inc</strong></div>
              <div>• <strong>Bempoh Technologies</strong> and <strong>Udlivery</strong></div>
              <div>• <strong>Bempoh Games</strong></div>
              <div>• <strong>Bempoh Music</strong></div>
              <div>• <strong>Bempoh Books</strong></div>
              <div>• The publication <strong>"The Universal Antidote"</strong> by E.K. Bempoh</div>
            </div>
            <p className="mb-4">
              are the exclusive, proprietary intellectual property of Bempoh Inc and/or its founder, E.K. Bempoh, and are protected under federal, statutory, and international trademark, copyright, trade secret, and unfair competition laws.
            </p>
            <p>
              No license, title, ownership, or intellectual property rights are granted, transferred, or implied by your access to this website. You may not copy, reproduce, mirror, republish, broadcast, modify, redistribute, or commercially exploit any content from this website without prior express written authorization from Bempoh Inc.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 4: User Submissions */}
          <section id="submissions" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              4. User Submissions
            </h2>
            <p className="mb-4">
              When communicating through the "Connect with Bempoh Inc" corporate inquiry form or submitting information to our team:
            </p>
            <ul className="space-y-3 pl-5 list-disc mb-4">
              <li>You represent that all information transmitted is accurate, truthful, and submitted on behalf of yourself or an entity you are authorized to represent.</li>
              <li>You agree not to transmit confidential, proprietary, or privileged business plans unless a formal, bilateral Non-Disclosure Agreement (NDA) has been formally executed by an authorized executive of Bempoh Inc.</li>
              <li>Unsolicited proposals, suggestions, or creative materials submitted without an executed NDA will be deemed non-confidential, and Bempoh Inc assumes no liability or obligation regarding the independent development of similar concepts.</li>
            </ul>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 5: Ventures, Products & "Coming Soon" Notice */}
          <section id="ventures" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              5. Ventures, Products &amp; "Coming Soon" Notice
            </h2>
            <p className="mb-4">
              The Bempoh ecosystem comprises multiple operating companies and forward-looking developmental initiatives. Specific ventures, divisions, and products—including <strong>Bempoh Games</strong> and <strong>Bempoh Real-Estate</strong>—are explicitly designated as "Coming Soon" or in strategic incubation:
            </p>
            <ul className="space-y-3 pl-5 list-disc mb-4">
              <li>Information provided regarding prospective ventures, titles, or services is for conceptual orientation and strategic portfolio presentation only.</li>
              <li>Descriptions of upcoming ventures, features, timelines, or release schedules do not constitute commercial guarantees, warranty commitments, or an offer of securities.</li>
              <li>Bempoh Inc reserves full unilateral discretion to alter, modify, rebrand, reschedule, or cancel any developmental initiative without prior notice.</li>
            </ul>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 6: Third-Party Platforms & Links */}
          <section id="third-party" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              6. Third-Party Platforms &amp; Links
            </h2>
            <p className="mb-4">
              This website provides convenient outward hyperlinks to external third-party platforms, such as streaming channels (YouTube, Spotify, Apple Music), book distribution services (Amazon), mobile application marketplaces (Apple App Store, Google Play), and electronic mail software.
            </p>
            <p>
              Bempoh Inc exercises no ownership or control over third-party platforms and accepts no responsibility for their operational availability, content, commercial terms, or privacy standards. Interacting with third-party sites is done entirely at your own risk.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 7: Disclaimer of Warranties */}
          <section id="warranties" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              7. Disclaimer of Warranties
            </h2>
            <div className="p-5 rounded-2xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 text-xs sm:text-sm leading-relaxed mb-4 uppercase font-mono">
              THIS WEBSITE, ITS CONTENT, VENTURE OVERVIEWS, PUBLICATIONS, AND DIGITAL ASSETS ARE PROVIDED STRICTLY ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, BEMPOH INC EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </div>
            <p>
              Bempoh Inc does not warrant that website functions will be uninterrupted, error-free, completely secure, or that defects will be immediately rectified.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 8: Limitation of Liability */}
          <section id="liability" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              8. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by applicable law, in no event shall Bempoh Inc, its subsidiaries, affiliated entities, founders, officers, directors, employees, or agents be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages (including loss of revenue, anticipated profits, goodwill, business reputation, or data corruption) arising out of or in connection with:
            </p>
            <ul className="space-y-2 pl-5 list-disc mb-4">
              <li>Your use of or inability to access this website or its venture descriptions;</li>
              <li>Any unauthorized access to, alteration of, or transmission of information;</li>
              <li>Statements or conduct of any third party on external linked platforms.</li>
            </ul>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 9: Termination / Access Restriction */}
          <section id="termination" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              9. Termination / Access Restriction
            </h2>
            <p className="mb-4">
              Bempoh Inc reserves the unconditional right, without notice and in its sole discretion, to terminate or restrict your access to the website or block incoming communications from your IP address or domains if you breach these Terms of Service or engage in malicious or abusive behavior toward our network or personnel.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 10: Governing Law */}
          <section id="governing-law" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              10. Governing Law
            </h2>
            <p className="mb-4">
              These Terms of Service, and any legal disputes, actions, claims, or controversies arising out of or related to your use of this website, shall be governed by, construed, and enforced in accordance with applicable laws, without giving effect to any principles of conflicts of law.
            </p>
            <p>
              You agree that any formal judicial proceeding arising from these Terms or the website shall be brought exclusively in competent courts of jurisdiction, and you hereby consent to the personal jurisdiction and venue thereof.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 11: Changes to Terms */}
          <section id="changes" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              11. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to revise, update, or replace these Terms of Service at any time. When modifications occur, the updated terms will be published on this page with an amended "Last updated" date.
            </p>
            <p>
              Your continued access or use of the website following the posting of revised Terms represents your binding agreement to and acceptance of such changes.
            </p>
          </section>

          <div className="border-t border-black/[0.08] dark:border-white/10" />

          {/* Section 12: Contact Us */}
          <section id="contact" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300">
              12. Contact Us
            </h2>
            <p className="mb-4">
              For legal inquiries, intellectual property notices, licensing permissions, or corporate questions regarding these Terms, please reach out to our legal department:
            </p>
            <div className="p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 space-y-2 text-xs sm:text-sm font-mono">
              <div className="text-sm font-bold text-[#0C0D12] dark:text-white font-sans uppercase">
                BEMPOH INC — LEGAL COUNSEL &amp; CORPORATE AFFAIRS
              </div>
              <div>
                <strong>Email:</strong>{' '}
                <a href="mailto:bempohllc@gmail.com" className="text-[#8C5B0D] dark:text-[#E2C268] hover:underline">
                  bempohllc@gmail.com
                </a>
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
              If you have inquiries regarding our intellectual property, licensing, or wish to transmit a formal corporate inquiry, our compliance desk is available.
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

