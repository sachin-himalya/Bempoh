import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import GoldParticlesCanvas from './GoldParticlesCanvas';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ onExploreClick, onDiscoverClick }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = [
    { primary: 'FROM HEAVEN', secondary: 'TO EARTH.' },
    { primary: 'FROM FUTURE', secondary: 'TO NOW.' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] transition-all duration-1000 uppercase font-sans">
            <span className="block text-[#0C0D12] dark:text-white transition-colors duration-300">
              {headlines[headlineIndex].primary}
            </span>
            <span className="block text-gold-gradient mt-1">
              {headlines[headlineIndex].secondary}
            </span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed tracking-wide px-4 transition-colors duration-300">
          Building companies, experiences and ideas across technology, gaming, music, publishing and the industries of tomorrow.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-black bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] hover:shadow-[0_4px_30px_rgba(201,155,60,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Explore Our World</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onDiscoverClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#0C0D12] dark:text-white bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-black/15 dark:border-white/20 hover:border-[#C99B3C] dark:hover:border-[#C99B3C] backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discover Bempoh</span>
          </button>
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
