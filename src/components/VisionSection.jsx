import React from 'react';
import { Globe } from 'lucide-react';

export default function VisionSection() {
  return (
    <section id="vision" className="relative w-full bg-white dark:bg-[#070709] py-28 sm:py-36 px-6 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Main Headline */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold">
                GLOBAL VISION
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0C0D12] dark:text-white leading-[1.08] uppercase transition-colors duration-300">
              THE FUTURE <br />
              DOESN'T ARRIVE.{' '}
              <span className="text-gold-gradient block font-serif-display italic font-normal text-5xl sm:text-7xl mt-3">
                IT IS CREATED.
              </span>
            </h2>
          </div>

          {/* Right Side: Second Part (Pillars & Description) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 shadow-sm space-y-6 transition-colors duration-300">
            <p className="text-lg sm:text-xl text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
              Bempoh is building beyond individual industries.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {['Technology.', 'Entertainment.', 'Culture.', 'Ideas.'].map((pillar) => (
                <div
                  key={pillar}
                  className="px-4 py-3.5 rounded-xl bg-white dark:bg-[#15161E] border border-black/10 dark:border-white/10 hover:border-[#C99B3C] dark:hover:border-[#C99B3C] text-[#0C0D12] dark:text-white font-bold text-sm sm:text-base tracking-wide text-center transition-all duration-300 hover:bg-[#F4DE84]/15 dark:hover:bg-[#C99B3C]/20 shadow-sm"
                >
                  {pillar}
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-[#0C0D12] dark:text-zinc-200 font-semibold leading-relaxed pt-2 border-t border-black/[0.08] dark:border-white/10 transition-colors duration-300">
              One ecosystem designed to continue expanding across generations and future markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
