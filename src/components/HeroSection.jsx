import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import GoldParticlesCanvas from './GoldParticlesCanvas';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HEADINGS = [
  { primary: 'FROM HEAVEN', secondary: 'TO EARTH.' },
  { primary: 'FROM FUTURE', secondary: 'TO NOW.' },
];

export default function HeroSection({ onExploreClick, onDiscoverClick }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [headingIndex, setHeadingIndex] = useState(0);
  const [line1Text, setLine1Text] = useState(() => (reducedMotion ? HEADINGS[0].primary : ''));
  const [line2Text, setLine2Text] = useState(() => (reducedMotion ? HEADINGS[0].secondary : ''));
  const [cursorLine, setCursorLine] = useState(() => (reducedMotion ? null : 1));

  useEffect(() => {
    if (reducedMotion) {
      const timer = setInterval(() => {
        setHeadingIndex((prev) => (prev === 0 ? 1 : 0));
      }, 4500);
      return () => clearInterval(timer);
    }

    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
    };
    mediaQuery?.addEventListener?.('change', handleMotionChange);

    let isCancelled = false;
    let timerId = null;

    const delay = (ms) =>
      new Promise((resolve) => {
        timerId = setTimeout(resolve, ms);
      });

    const runAnimation = async () => {
      let currentIndex = 0;

      while (!isCancelled) {
        const current = HEADINGS[currentIndex];
        setHeadingIndex(currentIndex);

        // Phase 1: Type Line 1 ("FROM HEAVEN" or "FROM FUTURE")
        setCursorLine(1);
        setLine2Text('');
        for (let i = 1; i <= current.primary.length; i++) {
          if (isCancelled) return;
          setLine1Text(current.primary.slice(0, i));
          await delay(100);
        }

        // Phase 2: Type Line 2 ("TO EARTH." or "TO NOW.")
        setCursorLine(2);
        for (let i = 1; i <= current.secondary.length; i++) {
          if (isCancelled) return;
          setLine2Text(current.secondary.slice(0, i));
          await delay(100);
        }

        // Phase 3: Pause for 2000ms after complete heading
        await delay(2000);
        if (isCancelled) return;

        // Phase 4: Backspace Line 2 (60ms)
        for (let i = current.secondary.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine2Text(current.secondary.slice(0, i));
          await delay(60);
        }

        // Move cursor back to Line 1
        setCursorLine(1);
        await delay(100);
        if (isCancelled) return;

        // Phase 5: Backspace Line 1 (60ms)
        for (let i = current.primary.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine1Text(current.primary.slice(0, i));
          await delay(60);
        }

        // Brief pause before typing next heading
        await delay(300);
        if (isCancelled) return;

        // Advance to next heading
        currentIndex = (currentIndex + 1) % HEADINGS.length;
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
      mediaQuery?.removeEventListener?.('change', handleMotionChange);
    };
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-white dark:bg-[#070709] pt-16 sm:pt-20 pb-8 px-6 transition-colors duration-300"
    >
      {/* Golden Upward Light Particles */}
      <GoldParticlesCanvas count={65} interactive={true} />

      {/* Atmospheric Radial Ambient Gold Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#C99B3C]/20 via-[#A97622]/5 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#F4DE84]/20 blur-2xl pointer-events-none rounded-full" />

      {/* Main Content Container Positioned Upward */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-4 sm:pt-6 pb-4">
        {/* Prominent Bempoh Logo with Golden Aura */}
        <div className="relative mb-6 sm:mb-8 group cursor-pointer">
          <div className="absolute inset-0 bg-[#C99B3C] blur-3xl opacity-25 rounded-full scale-125 group-hover:scale-150 group-hover:opacity-40 transition-all duration-700" />
          <Logo size="hero" showWordmark={false} glow={true} className="relative z-10" />
        </div>

        {/* Animated Cinematic Headline */}
        <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center relative">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] uppercase font-sans text-center"
            aria-label={`${HEADINGS[headingIndex].primary} ${HEADINGS[headingIndex].secondary}`}
          >
            {/* Line 1 */}
            <span className="block text-[#0C0D12] dark:text-white transition-colors duration-300">
              <span className="hero-typewriter-grid">
                {/* Ghost placeholder reserves width to prevent layout shifts */}
                <span className="hero-typewriter-ghost" aria-hidden="true">
                  FROM HEAVEN
                </span>

                {/* Active animated text container */}
                <span className="hero-typewriter-active" aria-hidden="true">
                  {reducedMotion ? HEADINGS[headingIndex].primary : line1Text}
                  {!reducedMotion && cursorLine === 1 && (
                    <span className="typed-cursor">|</span>
                  )}
                </span>
              </span>
            </span>

            {/* Line 2 */}
            <span className="block text-gold-gradient mt-1">
              <span className="hero-typewriter-grid">
                {/* Ghost placeholder reserves width of longest second line ("TO EARTH.") */}
                <span className="hero-typewriter-ghost" aria-hidden="true">
                  TO EARTH.
                </span>

                {/* Active animated text container */}
                <span className="hero-typewriter-active" aria-hidden="true">
                  <span className="text-gold-gradient">
                    {reducedMotion ? HEADINGS[headingIndex].secondary : line2Text}
                  </span>
                  {!reducedMotion && cursorLine === 2 && (
                    <span className="typed-cursor">|</span>
                  )}
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed tracking-wide px-4 transition-colors duration-300">
          Building companies, experiences and ideas across technology, gaming, music, publishing and the industries of tomorrow.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
          <a
            href="https://open.spotify.com/artist/4RYcGrNjODBc5CN4HcvFQF"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-black bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] hover:shadow-[0_4px_30px_rgba(201,155,60,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>EXPLORE OUR MUSICS</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </a>

          <a
            href="https://www.amazon.com/stores/author/B09K6FRZNG"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#0C0D12] dark:text-white hover:text-black dark:hover:text-black bg-black/[0.04] hover:bg-gradient-to-r hover:from-[#F4DE84] hover:via-[#C99B3C] hover:to-[#A97622] dark:bg-white/[0.06] border border-black/15 dark:border-white/20 hover:border-[#C99B3C] dark:hover:border-[#C99B3C] hover:shadow-[0_4px_30px_rgba(201,155,60,0.5)] backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>EXPLORE OUR BOOKS</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-4 pb-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
        <a href="#manifesto" className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#50515C] dark:text-zinc-400 font-semibold transition-colors duration-300">
          <span>SCROLL</span>
          <ChevronDown className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
