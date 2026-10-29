import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

export default function PrincipleSection() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

  const line1Full = 'FROM HEAVEN TO EARTH.';
  const line2Full = 'FROM FUTURE TO NOW.';

  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [line1Text, setLine1Text] = useState(() => (reducedMotion ? line1Full : ''));
  const [line2Text, setLine2Text] = useState(() => (reducedMotion ? line2Full : ''));
  const [cursorLine, setCursorLine] = useState(() => (reducedMotion ? null : 1));

  // Scroll-based step tracker for zoom animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = 1 - rect.bottom / (windowHeight + rect.height);
      if (progress > 0.6) {
        setStep(2);
      } else if (progress > 0.3) {
        setStep(1);
      } else {
        setStep(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        // Phase 1: Type Line 1 ("FROM HEAVEN TO EARTH.")
        setCursorLine(1);
        setLine2Text('');
        for (let i = 1; i <= line1Full.length; i++) {
          if (isCancelled) return;
          setLine1Text(line1Full.slice(0, i));
          await delay(75);
        }

        // Pause after completing Line 1
        await delay(1400);
        if (isCancelled) return;

        // Phase 2: Transition to Line 2 ("FROM FUTURE TO NOW.")
        setCursorLine(2);
        for (let i = 1; i <= line2Full.length; i++) {
          if (isCancelled) return;
          setLine2Text(line2Full.slice(0, i));
          await delay(75);
        }

        // Pause with both lines complete
        await delay(2500);
        if (isCancelled) return;

        // Phase 3: Backspace Line 2
        for (let i = line2Full.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine2Text(line2Full.slice(0, i));
          await delay(40);
        }

        // Move cursor back to Line 1
        setCursorLine(1);
        await delay(200);
        if (isCancelled) return;

        // Phase 4: Backspace Line 1
        for (let i = line1Full.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setLine1Text(line1Full.slice(0, i));
          await delay(40);
        }

        // Pause before looping
        await delay(500);
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
      ref={sectionRef}
      id="principle"
      className="relative w-full min-h-[90vh] bg-white dark:bg-[#070709] py-36 px-6 border-t border-black/[0.08] dark:border-white/10 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Radial Gold Atmospheric Ray */}
      <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-8">
          THE BEMPOH PRINCIPLE
        </div>

        {/* Step 1: FROM HEAVEN TO EARTH. */}
        <div className={`transition-all duration-1000 transform ${step === 0 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-20 scale-95 -translate-y-4'}`}>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0C0D12] dark:text-white uppercase transition-colors duration-300"
            aria-label="FROM HEAVEN TO EARTH."
          >
            <span className="principle-typewriter-grid">
              {/* Ghost reserving exact width & height preventing layout shifts */}
              <span
                className="principle-typewriter-ghost"
                aria-hidden="true"
              >
                {line1Full}
              </span>

              {/* Active typewriter text container */}
              <span className="principle-typewriter-active" aria-hidden="true">
                {reducedMotion ? line1Full : line1Text}
                {!reducedMotion && cursorLine === 1 && (
                  <span className="typed-cursor">|</span>
                )}
              </span>
            </span>
          </h2>
        </div>

        {/* Step 2: FROM FUTURE TO NOW. */}
        <div className={`my-8 transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-20 scale-95 translate-y-4'}`}>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase"
            aria-label="FROM FUTURE TO NOW."
          >
            <span className="principle-typewriter-grid">
              {/* Ghost reserving exact width & height preventing layout shifts */}
              <span
                className="principle-typewriter-ghost text-gold-gradient"
                aria-hidden="true"
              >
                {line2Full}
              </span>

              {/* Active typewriter text container */}
              <span className="principle-typewriter-active" aria-hidden="true">
                <span className="text-gold-gradient">
                  {reducedMotion ? line2Full : line2Text}
                </span>
                {!reducedMotion && cursorLine === 2 && (
                  <span className="typed-cursor">|</span>
                )}
              </span>
            </span>
          </h2>
        </div>

        {/* Step 3: BEMPOH. */}
        <div className={`mt-12 transition-all duration-1000 transform flex flex-col items-center ${step === 2 ? 'opacity-100 scale-110' : 'opacity-30 scale-90'}`}>
          <Logo size="hero" showWordmark={false} glow={true} className="mb-4" />

          <h3 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-[0.2em] text-[#0C0D12] dark:text-white uppercase relative transition-colors duration-300">
            <span className="relative z-10">BEMPOH</span>
            {/* Shimmer Light Sweep Effect */}
            <span className="absolute inset-0 text-transparent bg-clip-text shimmer-gold z-20">
              BEMPOH
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
