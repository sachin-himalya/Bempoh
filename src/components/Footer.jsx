import React from 'react';
import Logo from './Logo';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenLegalModal, onOpenContactModal }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#FAFAFC] dark:bg-[#050505] border-t border-black/[0.08] dark:border-white/10 pt-24 pb-12 px-6 overflow-hidden transition-colors duration-300">
      {/* Large Faded BEMPOH Watermark Typography in Background */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[18vw] font-black text-black/[0.03] dark:text-white/[0.02] tracking-[0.2em] uppercase pointer-events-none select-none leading-none">
        BEMPOH
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/[0.08] dark:border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo size="md" showWordmark={true} />

              <p className="mt-6 text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed max-w-sm transition-colors duration-300">
                Bempoh Inc is a multi-industry holdings company building ventures across technology, gaming, music, publishing and future industries.
              </p>

              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10 text-xs text-[#8C5B0D] dark:text-[#E2C268] font-bold tracking-wide">
                “From Heaven to Earth.<br />From Future to Now.”
              </div>
            </div>
          </div>

          {/* Nav Columns Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: COMPANY */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-4">
                COMPANY
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-medium">
                <li><a href="#hero" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#vision" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Vision</a></li>
                <li><a href="#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Services</a></li>
                <li>
                  <button type="button" onClick={onOpenContactModal} className="hover:text-[#0C0D12] dark:hover:text-white transition-colors text-left cursor-pointer">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: VENTURES */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-4">
                VENTURES
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-medium">
                <li><a href="#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Technologies</a></li>
                <li><a href="#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Games</a></li>
                <li><a href="#music" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Music</a></li>
                <li><a href="#books" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Books</a></li>
                <li><a href="#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Ringtones</a></li>
              </ul>
            </div>

            {/* Column 3: DISCOVER */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-4">
                DISCOVER
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-medium">
                <li><a href="#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Technologies</a></li>
                <li><a href="#music" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Audio Catalog</a></li>
                <li><a href="#books" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Publications</a></li>
                <li><a href="#faq" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 4: SOCIAL */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-4">
                SOCIAL
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-medium">
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C5B0D] dark:text-[#E2C268]" />
                  </a>
                </li>
                <li>
                  <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>Spotify</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C5B0D] dark:text-[#E2C268]" />
                  </a>
                </li>
                <li>
                  <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>Apple Music</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C5B0D] dark:text-[#E2C268]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#50515C] dark:text-zinc-400 font-medium">
          <div>
            &copy; {year} Bempoh Inc. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button type="button" onClick={() => onOpenLegalModal('Privacy Policy')} className="hover:text-[#0C0D12] dark:hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button type="button" onClick={() => onOpenLegalModal('Terms of Service')} className="hover:text-[#0C0D12] dark:hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
