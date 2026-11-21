import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function FounderSection({
  imageSrc = '/founder.webp',
}) {
  const [imgError, setImgError] = useState(false);

  const renderFounderPhoto = () => (
    <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] rounded-3xl overflow-hidden border border-[#C99B3C]/35 bg-gradient-to-b from-[#14151D] via-[#0E0F15] to-[#0A0A0E] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-center group mx-auto">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

      {imageSrc && !imgError ? (
        <>
          <img
            src={imageSrc}
            alt="E.K. Bempoh"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center p-8">
          <span className="text-5xl sm:text-6xl font-black text-[#8C5B0D] dark:text-[#E2C268] tracking-widest drop-shadow-[0_4px_24px_rgba(201,155,60,0.35)]">
            EKB
          </span>
          <span className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#50515C] dark:text-zinc-400 font-mono">
            [FOUNDER PHOTO]
          </span>
        </div>
      )}
    </div>
  );

  return (
    <section
      id="founder"
      className="relative w-full bg-white dark:bg-[#070709] py-24 sm:py-32 px-6 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Gold Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C99B3C]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Desktop only): Founder Photo Frame */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            {renderFounderPhoto()}
          </div>

          {/* Right Column (Desktop) / Main Column (Mobile): Founder Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Label */}
            <div className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono mb-3">
              MEET OUR FOUNDER
            </div>

            {/* Bada Heading */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0C0D12] dark:text-white tracking-tight leading-none uppercase mb-4 transition-colors duration-300">
              E.K. BEMPOH
            </h2>

            {/* Desktop-only Role Subheading & Tagline */}
            <div className="hidden lg:block">
              <div className="text-lg sm:text-xl font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-wide mb-2">
                Founder &amp; Chairman, Bempoh
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-medium mb-6">
                Entrepreneur | Philanthropist | Philosopher | Author | Artist | Innovator
              </div>
            </div>

            {/* Mobile-only Founder Photo — placed right after E.K. BEMPOH heading */}
            <div className="my-6 flex justify-center lg:hidden">
              {renderFounderPhoto()}
            </div>

            {/* Mobile-only Role Subheading & Tagline — placed after Founder Photo */}
            <div className="block lg:hidden mb-6">
              <div className="text-lg font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-wide mb-2">
                Founder &amp; Chairman, Bempoh
              </div>
              <div className="text-xs uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-medium">
                Entrepreneur | Philanthropist | Philosopher | Author | Artist | Innovator
              </div>
            </div>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#50515C] dark:text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl transition-colors duration-300">
              E.K. Bempoh (Eastwood Kwaku Bempoh) is a Ghanaian entrepreneur, philanthropist, philosopher, bestselling author, multi-instrumentalist, and Christian televangelist whose pursuits span business, technology, literature, music, humanitarian service, and spiritual leadership.
            </p>

            {/* Gold Button: READ HIS HISTORY -> /about-us */}
            <div>
              <Link
                to="/about-us"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black font-extrabold text-xs uppercase tracking-[0.2em] shadow-[0_6px_25px_rgba(201,155,60,0.35)] hover:shadow-[0_8px_35px_rgba(201,155,60,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>READ HIS HISTORY</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 sm:my-16">
          {/* Card 01: Entrepreneurship & Business Leadership */}
          <div className="group rounded-2xl bg-white dark:bg-[#0E0F14] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 hover:border-[#C99B3C]/50 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-widest font-mono block mb-3">
                01
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight mb-3 transition-colors duration-300">
                Entrepreneurship &amp; Business Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
                Founder of Bempoh LLC, a diversified holding company across technology, real estate, games, digital services and transportation.
              </p>
            </div>
          </div>

          {/* Card 02: Intellectual & Creative Contributions */}
          <div className="group rounded-2xl bg-white dark:bg-[#0E0F14] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 hover:border-[#C99B3C]/50 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-widest font-mono block mb-3">
                02
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight mb-3 transition-colors duration-300">
                Intellectual &amp; Creative Contributions
              </h3>
              <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
                Creator of the Bempoh Quantification Tree of All Problems and Unirical Riddles, and a multi-instrumentalist.
              </p>
            </div>
          </div>

          {/* Card 03: Faith, Ministry & Humanitarian Endeavors */}
          <div className="group rounded-2xl bg-white dark:bg-[#0E0F14] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 hover:border-[#C99B3C]/50 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-widest font-mono block mb-3">
                03
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight mb-3 transition-colors duration-300">
                Faith, Ministry &amp; Humanitarian Endeavors
              </h3>
              <p className="text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
                Founder of Christglobe Inc. and FGGO Inc., serving ministry, media, shelters and nonprofit giving.
              </p>
            </div>
          </div>
        </div>

        {/* Highlighted Vision & Legacy Block */}
        <div className="rounded-2xl sm:rounded-3xl bg-black/[0.02] dark:bg-[#0E0F14] border border-[#C99B3C]/35 p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_15px_40px_rgba(201,155,60,0.08)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-[#C99B3C]/10 blur-[50px] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono block mb-4">
              VISION &amp; LEGACY
            </span>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0C0D12] dark:text-white leading-snug tracking-tight max-w-4xl mx-auto transition-colors duration-300">
              “To build beyond his lifetime, create beyond convention, and leave a legacy that continues to serve generations yet to come.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
