import React, { useState, useEffect } from 'react';

const LINE_1 = "“WE DON'T WAIT FOR";
const LINE_2 = "THE FUTURE.";
const LINE_3 = "WE BUILD TOWARD IT.”";

export default function ManifestoSection() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [line1Text, setLine1Text] = useState(() => (reducedMotion ? LINE_1 : ''));
  const [line2Text, setLine2Text] = useState(() => (reducedMotion ? LINE_2 : ''));
  const [line3Text, setLine3Text] = useState(() => (reducedMotion ? LINE_3 : ''));
  const [cursorLine, setCursorLine] = useState(() => (reducedMotion ? null : 1));

  useEffect(() => {
    if (reducedMotion) return;

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
      while (!isCancelled) {
        // Phase 1: Type Line 1 ("WE DON'T WAIT FOR") character by character (100ms)
        setCursorLine(1);
        setLine1Text('');
        setLine2Text('');
        setLine3Text('');
        await delay(200);
        if (isCancelled) return;

        for (let i = 1; i <= LINE_1.length; i++) {
          if (isCancelled) return;
          setLine1Text(LINE_1.slice(0, i));
          await delay(100);
        }
        if (isCancelled) return;

        // Phase 2: Continue typing Line 2 ("THE FUTURE.") on second line (100ms)
        setCursorLine(2);
        for (let i = 1; i <= LINE_2.length; i++) {
          if (isCancelled) return;
          setLine2Text(LINE_2.slice(0, i));
          await delay(100);
        }
        if (isCancelled) return;

        // Phase 3: Type Line 3 ("WE BUILD TOWARD IT.") on golden italic third line (100ms)
        setCursorLine(3);
        for (let i = 1; i <= LINE_3.length; i++) {
          if (isCancelled) return;
          setLine3Text(LINE_3.slice(0, i));
          await delay(100);
        }
        if (isCancelled) return;

        // Phase 4: Pause for 2000ms after the full quote appears
        await delay(2000);
        if (isCancelled) return;

        // Phase 5: Delete text smoothly in reverse order using backspace effect (60ms)
        // Backspace Line 3
        setCursorLine(3);
        for (let i = LINE_3.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine3Text(LINE_3.slice(0, i));
          await delay(60);
        }
        if (isCancelled) return;

        // Move cursor to Line 2 and backspace Line 2
        setCursorLine(2);
        await delay(60);
        if (isCancelled) return;
        for (let i = LINE_2.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine2Text(LINE_2.slice(0, i));
          await delay(60);
        }
        if (isCancelled) return;

        // Move cursor to Line 1 and backspace Line 1
        setCursorLine(1);
        await delay(60);
        if (isCancelled) return;
        for (let i = LINE_1.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine1Text(LINE_1.slice(0, i));
          await delay(60);
        }
        if (isCancelled) return;

        // Brief pause before repeating full sequence
        await delay(300);
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
    <section id="manifesto" className="relative w-full bg-white dark:bg-[#070709] py-28 sm:py-36 px-6 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C99B3C]/10 blur-3xl rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Small Eyebrow Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#C99B3C]" />
          <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0C0D12] dark:text-white leading-[1.15] uppercase transition-colors duration-300"
              aria-label="“WE DON'T WAIT FOR THE FUTURE. WE BUILD TOWARD IT.”"
            >
              {/* Line 1 */}
              <span className="manifesto-typewriter-grid">
                <span className="manifesto-typewriter-ghost" aria-hidden="true">
                  {LINE_1}
                </span>
                <span className="manifesto-typewriter-active" aria-hidden="true">
                  {reducedMotion ? LINE_1 : line1Text}
                  {!reducedMotion && cursorLine === 1 && (
                    <span className="typed-cursor" aria-hidden="true">|</span>
                  )}
                </span>
              </span>
              <br className="hidden sm:inline" />{' '}
              {/* Line 2 */}
              <span className="manifesto-typewriter-grid">
                <span className="manifesto-typewriter-ghost" aria-hidden="true">
                  {LINE_2}
                </span>
                <span className="manifesto-typewriter-active" aria-hidden="true">
                  {reducedMotion ? LINE_2 : line2Text}
                  {!reducedMotion && cursorLine === 2 && (
                    <span className="typed-cursor" aria-hidden="true">|</span>
                  )}
                </span>
              </span>{' '}
              {/* Line 3 */}
              <span className="font-serif-display italic font-normal block mt-2 sm:mt-4">
                <span className="manifesto-typewriter-grid">
                  <span
                    className="manifesto-typewriter-ghost text-gold-gradient"
                    aria-hidden="true"
                  >
                    {LINE_3}
                  </span>
                  <span className="manifesto-typewriter-active" aria-hidden="true">
                    <span className="text-gold-gradient">
                      {reducedMotion ? LINE_3 : line3Text}
                    </span>
                    {!reducedMotion && cursorLine === 3 && (
                      <span className="typed-cursor" aria-hidden="true">|</span>
                    )}
                  </span>
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-lg sm:text-xl text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed tracking-wide transition-colors duration-300">
              From technology to entertainment, Bempoh brings{' '}
              <span className="text-[#0C0D12] dark:text-white font-semibold underline underline-offset-4 decoration-[#C99B3C]">possibility</span> into reality.
            </p>
          </div>
        </div>

        {/* Highlighted Core Pillars */}
        <div className="mt-20 pt-16 border-t border-black/[0.08] dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { word: 'IDEAS', desc: 'Conceived from first principles' },
            { word: 'INNOVATION', desc: 'Engineered for real-world impact' },
            { word: 'EXPERIENCES', desc: 'Crafted with obsessive precision' },
            { word: 'FUTURE', desc: 'Delivered to the world today' },
          ].map((item, idx) => (
            <div key={item.word} className="flex flex-col group cursor-default">
              <div className="text-xs text-[#8C5B0D] dark:text-[#E2C268] font-mono font-bold mb-2">0{idx + 1}</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-widest text-gold-gradient group-hover:tracking-wider transition-all duration-500">
                {item.word}
              </h3>
              <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-normal mt-2 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
