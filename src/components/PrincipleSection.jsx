import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

export default function PrincipleSection() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

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

        {/* Scroll Sequence Step 1: FROM HEAVEN TO EARTH. */}
        <div
          className={`transition-all duration-1000 transform ${
            step === 0 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-20 scale-95 -translate-y-4'
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0C0D12] dark:text-white uppercase transition-colors duration-300">
            FROM HEAVEN TO EARTH.
          </h2>
        </div>

        {/* Scroll Sequence Step 2: FROM FUTURE TO NOW. */}
        <div
          className={`my-8 transition-all duration-1000 transform ${
            step >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-20 scale-95 translate-y-4'
          }`}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gold-gradient uppercase">
            FROM FUTURE TO NOW.
          </h2>
        </div>

        {/* Scroll Sequence Step 3: BEMPOH. */}
        <div
          className={`mt-12 transition-all duration-1000 transform flex flex-col items-center ${
            step === 2 ? 'opacity-100 scale-110' : 'opacity-30 scale-90'
          }`}
        >
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
