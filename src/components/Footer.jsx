import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenContactModal, onOpenFounder }) {
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
              <img
                src="/bempoh-logo-v2.png"
                alt="Bempoh Logo"
                className="w-[130px] sm:w-[155px] h-auto object-contain"
              />

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
                <li><a href="/" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Home</a></li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenFounder}
                    className="text-[#8C5B0D] dark:text-[#E2C268] hover:text-[#0C0D12] dark:hover:text-white transition-colors text-left cursor-pointer font-semibold"
                  >
                    About us
                  </button>
                </li>
                <li><a href="/#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Services</a></li>
                <li><a href="/#vision" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Vision</a></li>
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
                <li><a href="/#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Technologies</a></li>
                <li><a href="/#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">Games <span className="text-[10px] text-[#8C5B0D] dark:text-[#E2C268]">(Coming Soon)</span></a></li>
                <li><a href="/#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">Real-Estate <span className="text-[10px] text-[#8C5B0D] dark:text-[#E2C268]">(Coming Soon)</span></a></li>
                <li><a href="/#music" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Music</a></li>
                <li><a href="/#books" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Books</a></li>
                <li><a href="https://www.zedge.net/profiles/a9e221fe-f556-488a-b47b-2d1c4b071907" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Ringtones</a></li>
              </ul>
            </div>

            {/* Column 3: DISCOVER */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-4">
                DISCOVER
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-medium">
                <li><a href="/#ecosystem" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Technologies</a></li>
                <li><a href="/#music" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Audio Catalog</a></li>
                <li><a href="/#books" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">Publications</a></li>
                <li><a href="/#faq" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 4: SOCIAL */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-4">
                SOCIAL
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#50515C] dark:text-zinc-400 font-medium">
                <li>
                  <a href="https://youtube.com/@ekbempoh?si=q4IL2itt_rGP6eNV" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C5B0D] dark:text-[#E2C268]" />
                  </a>
                </li>
                <li>
                  <a href="https://open.spotify.com/artist/4RYcGrNjODBc5CN4HcvFQF?si=D13hZ-gUSmCn0HkNTySjTg&utm_source=copy-link" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>Spotify</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C5B0D] dark:text-[#E2C268]" />
                  </a>
                </li>
                <li>
                  <a href="https://music.apple.com/us/artist/e-k-bempoh/1591440094" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
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
            <Link to="/privacy-policy" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#0C0D12] dark:hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
