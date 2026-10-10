import React from 'react';

export default function ManifestoSection() {
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
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#0C0D12] dark:text-white leading-[1.15] transition-colors duration-300">
              “We don't wait for <br className="hidden sm:inline" />
              the future.{' '}
              <span className="font-serif-display italic font-normal text-gold-gradient block mt-2 sm:mt-4">
                We build toward it.”
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
