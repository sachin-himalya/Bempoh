import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, BookOpen, Briefcase, HeartHandshake, Compass } from 'lucide-react';
import Logo from './Logo';

export default function FounderSection({
  imageSrc = '/founder.webp',
}) {
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Close history modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && historyModalOpen) {
        setHistoryModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [historyModalOpen]);

  // Lock body scroll when history modal is open
  useEffect(() => {
    if (historyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [historyModalOpen]);

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
          {/* Left Column: Founder Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden border border-[#C99B3C]/35 bg-gradient-to-b from-[#14151D] via-[#0E0F15] to-[#0A0A0E] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-center group">
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
          </div>

          {/* Right Column: Founder Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Label */}
            <div className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono mb-3">
              MEET OUR FOUNDER
            </div>

            {/* Bada Heading */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0C0D12] dark:text-white tracking-tight leading-none uppercase mb-4 transition-colors duration-300">
              E.K. BEMPOH
            </h2>

            {/* Role Subheading */}
            <div className="text-lg sm:text-xl font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-wide mb-2">
              Founder &amp; Chairman, Bempoh
            </div>

            {/* Tagline Subheading */}
            <div className="text-xs sm:text-sm uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-medium mb-6">
              Entrepreneur | Philanthropist | Philosopher | Author | Artist | Innovator
            </div>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#50515C] dark:text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl transition-colors duration-300">
              E.K. Bempoh (Eastwood Kwaku Bempoh) is a Ghanaian entrepreneur, philanthropist, philosopher, bestselling author, multi-instrumentalist, and Christian televangelist whose pursuits span business, technology, literature, music, humanitarian service, and spiritual leadership.
            </p>

            {/* Gold Button: READ HIS HISTORY */}
            <div>
              <button
                type="button"
                onClick={() => setHistoryModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black font-extrabold text-xs uppercase tracking-[0.2em] shadow-[0_6px_25px_rgba(201,155,60,0.35)] hover:shadow-[0_8px_35px_rgba(201,155,60,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>READ HIS HISTORY</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
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

      {/* FULL FOUNDER HISTORY MODAL */}
      {historyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setHistoryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-[#0C0D12] dark:text-white max-h-[90vh] overflow-y-auto transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setHistoryModalOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 hover:bg-black/10 dark:hover:bg-white/20 text-[#0C0D12] dark:text-white transition-colors cursor-pointer"
              aria-label="Close history modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-black/10 dark:border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#C99B3C]/40 shrink-0 bg-black/40">
                  <img
                    src={imageSrc}
                    alt="E.K. Bempoh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono mb-1">
                    FOUNDER HISTORY &amp; BIOGRAPHY
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight">
                    EASTWOOD KWAKU BEMPOH
                  </h3>
                  <div className="mt-0.5 text-xs sm:text-sm font-semibold text-[#8C5B0D] dark:text-[#E2C268]">
                    Founder &amp; Chairman, Bempoh Inc
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="space-y-6 text-sm text-[#50515C] dark:text-zinc-300 leading-relaxed">
              {/* Early Life & Foundations */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#8C5B0D] dark:text-[#E2C268] mb-2 font-mono">
                  ORIGINS &amp; BIOGRAPHY
                </h4>
                <p>
                  Eastwood Kwaku Mawupemo Bempoh was born in Accra, Ghana on July 28th, 1999. He moved to the United States at the age of 10. Driven by visionary foresight and an uncompromising commitment to excellence, he has channeled his life's work into an interconnected ecosystem spanning multi-sector enterprise, intellectual inquiry, artistic expression, and global humanitarian stewardship.
                </p>
              </div>

              {/* 1. Entrepreneurship & Business Leadership */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#8C5B0D] dark:text-[#E2C268] font-mono">
                    1. ENTREPRENEURSHIP &amp; BUSINESS LEADERSHIP
                  </h4>
                </div>
                <p>
                  Founder of Bempoh LLC, a diversified holding company managing subsidiaries across technology, real estate, interactive gaming, digital platforms, music, and publishing. As the Founder of Bempoh Technologies (holding company directing tech entities including Udlivery), Bempoh pioneers solutions designed to expand possibility and establish lasting generational value.
                </p>
              </div>

              {/* 2. Intellectual & Creative Contributions */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#8C5B0D] dark:text-[#E2C268] font-mono">
                    2. INTELLECTUAL &amp; CREATIVE CONTRIBUTIONS
                  </h4>
                </div>
                <p className="mb-3">
                  Creator of the <strong>Bempoh Quantification Tree of All Problems</strong> and <strong>Unirical Riddles</strong>. As a prolific author, he has published 9 books individually and 5 books collectively to date, including <em>The Universal Antidote</em>.
                </p>
                <p>
                  As an accomplished multi-instrumentalist, composer, and artist, his musical and auditory works are distributed worldwide across major streaming platforms including Spotify and Apple Music.
                </p>
              </div>

              {/* 3. Faith, Ministry & Humanitarian Endeavors */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <HeartHandshake className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#8C5B0D] dark:text-[#E2C268] font-mono">
                    3. FAITH, MINISTRY &amp; HUMANITARIAN ENDEAVORS
                  </h4>
                </div>
                <p className="mb-3">
                  Founder of <strong>Christglobe Inc.</strong> and its subsidiaries (Christglobe Ministries and Christglobe Tv), established in August 2019. Founder of the <strong>FGGO</strong> (a nonprofit parent organization focused on providing financial support to churches, ministries, and charitable nonprofits in need, with emphasis on homeless relief).
                </p>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-black/30 border-l-2 border-[#C99B3C] italic text-xs text-[#0C0D12] dark:text-zinc-200">
                  “I was sent to earth with three Tools (Wisdom, Wealth, and Power) for one goal (To win, mature and keep souls for the return of he who sent me — the Lord God). Anything less is loss, anything more is extra.”
                </div>
              </div>

              {/* 4. Vision & Legacy */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#C99B3C]/10 via-[#C99B3C]/5 to-transparent border border-[#C99B3C]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#8C5B0D] dark:text-[#E2C268] font-mono">
                    4. VISION &amp; LEGACY
                  </h4>
                </div>
                <p className="font-medium text-[#0C0D12] dark:text-white">
                  “To build beyond his lifetime, create beyond convention, and leave a legacy that continues to serve generations yet to come.”
                </p>
                <p className="mt-2 text-xs text-[#8C5B0D] dark:text-[#E2C268] font-bold">
                  “From Heaven to Earth. From Future to Now.”
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <Logo size="sm" showWordmark={true} />
              <button
                type="button"
                onClick={() => setHistoryModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#D4A338] transition-colors cursor-pointer"
              >
                Close History
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
