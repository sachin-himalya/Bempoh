import React from 'react';
import { Globe } from 'lucide-react';

export default function VisionSection() {
  const ecosystemRows = [
    {
      num: '01',
      title: 'Technology.',
      subtext: "SOLVING WHAT'S NEXT.",
    },
    {
      num: '02',
      title: 'Entertainment.',
      subtext: 'STORIES WITHOUT LIMITS.',
    },
    {
      num: '03',
      title: 'Culture.',
      subtext: 'PEOPLE. PERSPECTIVE. PROGRESS.',
    },
    {
      num: '04',
      title: 'Ideas.',
      subtext: 'A BROADER TOMORROW.',
    },
  ];

  return (
    <section
      id="vision"
      className="relative w-full bg-white dark:bg-[#070709] py-28 sm:py-36 px-6 sm:px-10 lg:px-14 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      {/* Background Soft Atmospheric Gold Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99B3C]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F4DE84]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT SIDE: PRESERVED GLOBAL VISION HEADLINE & TEXT
             ======================================================== */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            {/* Small Gold Label */}
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold">
                GLOBAL VISION
              </span>
            </div>

            {/* Large Bold Heading & Italic Serif Gold Phrase */}
            <h2 className="text-4xl sm:text-6xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold tracking-tight text-[#0C0D12] dark:text-white leading-[1.08] uppercase transition-colors duration-300">
              THE FUTURE <br />
              DOESN'T ARRIVE.{' '}
              <span className="text-gold-gradient block font-serif-display italic font-normal text-5xl sm:text-7xl lg:text-[4.25rem] xl:text-[5rem] mt-3 sm:mt-4 normal-case">
                IT IS CREATED.
              </span>
            </h2>
          </div>

          {/* ========================================================
              RIGHT SIDE: CLEAN OPEN EDITORIAL NUMBERED LIST (01-04)
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Heading */}
            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#0C0D12] dark:text-white tracking-tight leading-snug mb-6 sm:mb-8 transition-colors duration-300">
              Bempoh is building beyond individual industries.
            </h3>

            {/* 4 Elegant Horizontal Content Rows */}
            <div className="space-y-1">
              {ecosystemRows.map((row) => (
                <div
                  key={row.num}
                  className="group py-4 sm:py-5 border-b border-black/[0.07] dark:border-white/[0.08] flex items-center justify-between transition-all duration-300 hover:translate-x-1"
                >
                  {/* Left: Large Gold Number + Slash + Title & Subtext */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    {/* Large Gold Serif Number */}
                    <span className="font-serif-display italic text-3xl sm:text-4xl lg:text-[2.65rem] text-gold-gradient select-none leading-none w-12 sm:w-14">
                      {row.num}
                    </span>

                    {/* Thin Slash Separator */}
                    <span className="text-[#8C5B0D]/40 dark:text-[#E2C268]/40 font-light text-xl sm:text-2xl select-none leading-none">
                      /
                    </span>

                    {/* Category Title & Small Uppercase Subtext */}
                    <div>
                      <div className="text-lg sm:text-xl font-bold tracking-tight text-[#0C0D12] dark:text-white group-hover:text-[#8C5B0D] dark:group-hover:text-[#F4DE84] transition-colors leading-tight">
                        {row.title}
                      </div>
                      <div className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8C5B0D] dark:text-[#E2C268]/90 mt-1 transition-colors">
                        {row.subtext}
                      </div>
                    </div>
                  </div>

                  {/* Long Thin Gold Horizontal Line with End Dot */}
                  <div className="flex-1 hidden md:flex items-center ml-6 lg:ml-8">
                    <div className="w-full h-[1px] bg-gradient-to-r from-[#C99B3C]/20 via-[#C99B3C]/40 to-[#C99B3C]/70 dark:from-[#C99B3C]/30 dark:via-[#C99B3C]/60 dark:to-[#E2C268] group-hover:via-[#C99B3C] group-hover:to-[#F4DE84] transition-all duration-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8C5B0D] dark:bg-[#E2C268] shrink-0 -ml-0.5 group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(244,222,132,0.8)] transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Thin Gold Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C99B3C]/35 to-transparent my-6 sm:my-8" />

            {/* Supporting Bottom Paragraph */}
            <p className="text-sm sm:text-base text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
              One ecosystem designed to continue expanding across generations and future markets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
