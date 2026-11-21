import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Logo from './Logo';
import { BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';

export default function BooksSection({ onExploreBooks }) {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (reducedMotion) return;

    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery?.addEventListener?.('change', handleMotionChange);

    if (typedEl.current) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: ['PERMANENT.'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: false,
      });
    }

    return () => {
      mediaQuery?.removeEventListener?.('change', handleMotionChange);
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, [reducedMotion]);

  const renderBookMockup = () => (
    <a
      href="https://www.amazon.com/stores/author/B09K6FRZNG"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group perspective-[1000px] cursor-pointer block"
    >
      {/* Book Hardcover Mockup Container */}
      <div className="keep-dark relative w-[280px] sm:w-[320px] aspect-[3/4.5] rounded-r-2xl !bg-[#0B0C10] border-y border-r border-white/20 border-l-4 border-l-[#C99B3C] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform group-hover:rotate-y-[-12deg] group-hover:rotate-x-[6deg] group-hover:scale-105 transition-all duration-700 flex flex-col justify-between select-none text-white">
        {/* Book Spine Texture Lines */}
        <div className="absolute left-1 top-0 bottom-0 w-2 bg-gradient-to-r from-black/60 to-transparent" />

        {/* Top Book Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C99B3C] font-semibold">
            BEMPOH BOOKS
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#F4DE84]" />
        </div>

        {/* Book Title & Author Center */}
        <div className="my-auto py-6">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A7A7A7] mb-2 font-mono">
            PUBLICATION
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-white leading-tight uppercase">
            THE UNIVERSAL <br />
            <span className="text-gold-gradient font-serif-display italic font-normal text-4xl block mt-1">
              ANTIDOTE
            </span>
          </h3>
          <div className="w-12 h-[2px] bg-[#C99B3C] my-4" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#E2C268] font-bold">
            BY E.K. BEMPOH
          </p>
        </div>

        {/* Bottom Book Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <Logo size="sm" showWordmark={false} glow={false} />
          <span className="text-[9px] uppercase tracking-widest text-[#A7A7A7]">
            FIRST EDITION
          </span>
        </div>
      </div>
    </a>
  );

  return (
    <section id="books" className="relative w-full bg-white dark:bg-[#070709] py-28 sm:py-36 px-6 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C99B3C]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Desktop only): Floating 3D Metallic Book Cover Mockup */}
          <div className="lg:col-span-5 hidden lg:flex justify-center lg:order-1">
            {renderBookMockup()}
          </div>

          {/* Right Column (Desktop) / Main Column (Mobile): Editorial Copy */}
          <div className="lg:col-span-7 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold">
                BEMPOH BOOKS
              </span>
            </div>

            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0C0D12] dark:text-white tracking-tight leading-none uppercase transition-colors duration-300"
              aria-label="IDEAS MADE PERMANENT."
            >
              IDEAS MADE <br />
              <span className="faq-typewriter-grid">
                {/* Ghost placeholder reserves exact width & height preventing layout shifts */}
                <span
                  className="faq-typewriter-ghost text-gold-gradient font-serif-display italic font-normal text-5xl sm:text-7xl md:text-8xl"
                  aria-hidden="true"
                >
                  PERMANENT.
                </span>

                {/* Animated typewriter text container */}
                <span className="faq-typewriter-active font-serif-display italic font-normal text-5xl sm:text-7xl md:text-8xl">
                  {reducedMotion ? (
                    <span className="text-gold-gradient">PERMANENT.</span>
                  ) : (
                    <span
                      ref={typedEl}
                      className="text-gold-gradient"
                    />
                  )}
                </span>
              </span>
            </h2>

            {/* Mobile-only 3D Book Cover — placed right after IDEAS MADE PERMANENT. */}
            <div className="my-10 flex justify-center lg:hidden">
              {renderBookMockup()}
            </div>

            <p className="mt-8 text-base sm:text-lg text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
              Bempoh Books is the publishing and ideas division of the Bempoh ecosystem, bringing original perspectives, spiritual truths, and literature into published form.
            </p>

            {/* Featured Book Details Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 shadow-sm transition-colors duration-300">
              <div className="text-xs font-bold text-[#8C5B0D] dark:text-[#E2C268] uppercase tracking-widest mb-1">
                FEATURED PUBLICATION
              </div>
              <div className="text-xl font-extrabold text-[#0C0D12] dark:text-white uppercase transition-colors duration-300">
                THE UNIVERSAL ANTIDOTE
              </div>
              <div className="text-xs text-[#8C5B0D] dark:text-[#E2C268] font-semibold mt-0.5">
                AUTHOR: E.K. BEMPOH
              </div>
              <p className="text-sm text-[#50515C] dark:text-zinc-400 font-normal mt-3 leading-relaxed transition-colors duration-300">
                A published work exploring complex human choices, systemic problems, and philosophical approaches to resolution. Distributed globally through online book platforms.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://www.amazon.com/stores/author/B09K6FRZNG"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black font-extrabold text-xs uppercase tracking-[0.2em] hover:shadow-[0_4px_30px_rgba(201,155,60,0.5)] transition-all flex items-center gap-3 transform hover:-translate-y-1 cursor-pointer inline-flex"
              >
                <span>Explore Books</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
