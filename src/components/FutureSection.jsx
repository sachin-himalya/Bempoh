import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FutureSection({ onExploreEcosystem }) {
  return (
    <section id="future" className="relative w-full bg-[#050505] py-28 sm:py-36 px-6 border-t border-white/[0.08] overflow-hidden">
      
      {/* Golden Horizon Light Ray Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#C99B3C]/20 via-[#A97622]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-[#F4DE84] to-transparent shadow-[0_0_40px_#F4DE84]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#F4DE84]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#F4DE84] uppercase">
            THE CONTINUOUS EXPANSION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none uppercase">
          WE'RE JUST <br />
          <span className="text-gold-gradient font-serif-display italic font-normal text-5xl sm:text-7xl md:text-8xl">
            GETTING STARTED.
          </span>
        </h2>

        {/* Text */}
        <p className="mt-8 text-lg sm:text-xl text-[#A7A7A7] font-light leading-relaxed max-w-2xl mx-auto">
          Bempoh was created to grow beyond a single industry, product or idea. As technology, culture and entertainment evolve, the Bempoh ecosystem will evolve with them.
        </p>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={onExploreEcosystem}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black font-extrabold text-xs sm:text-sm uppercase tracking-[0.25em] hover:shadow-[0_0_40px_rgba(201,155,60,0.7)] transition-all transform hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <span>Explore the Bempoh Ecosystem</span>
            <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
