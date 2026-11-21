import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import EcosystemSection from './components/EcosystemSection';
import VisionSection from './components/VisionSection';
import OrbitSection from './components/OrbitSection';
import MusicSection from './components/MusicSection';
import BooksSection from './components/BooksSection';
import PrincipleSection from './components/PrincipleSection';
import FounderSection from './components/FounderSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Modals from './components/Modals';
import GoldParticlesCanvas from './components/GoldParticlesCanvas';
import Logo from './components/Logo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { X, ArrowUpRight } from 'lucide-react';

function HomePage({ onSelectVenture, onOpenMobileSheet, onStoreClick, onExploreClick, onDiscoverClick }) {
  return (
    <main>
      {/* SECTION 01 — Cinematic Hero */}
      <HeroSection
        onExploreClick={onExploreClick}
        onDiscoverClick={onDiscoverClick}
      />

      {/* SECTION 02 — Brand Manifesto */}
      <ManifestoSection />

      {/* SECTION 03 — Bempoh Ecosystem */}
      <EcosystemSection onSelectVenture={onSelectVenture} onOpenMobileSheet={onOpenMobileSheet} />

      {/* SECTION 04 — Vision */}
      <VisionSection />

      {/* SECTION 06 — Industry Orbit */}
      <OrbitSection />

      {/* SECTION 07 — Bempoh Music */}
      <MusicSection onPlatformClick={onStoreClick} />

      {/* SECTION 08 — Bempoh Books */}
      <BooksSection onExploreBooks={() => window.open('https://www.amazon.com/stores/author/B09K6FRZNG', '_blank', 'noopener,noreferrer')} />

      {/* SECTION 09 — Meet Our Founder */}
      <FounderSection />

      {/* SECTION 10 — The Bempoh Principle */}
      <PrincipleSection />

      {/* SECTION 11 — Frequently Asked Questions */}
      <FaqSection />
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bempoh-theme') || 'light';
  });

  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState(null);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    localStorage.setItem('bempoh-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('theme-light');
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectVenture = (venture) => {
    setModalData(venture);
    setActiveModal('venture');
  };

  const handleStoreClick = (platform) => {
    setModalData({ platform });
    setActiveModal('store');
  };

  const handleOpenContact = () => {
    setActiveModal('contact');
  };

  const handleOpenFounder = () => {
    scrollToSection('#founder');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  const handleOpenMobileSheet = (venture) => {
    setSelectedVenture(venture);
    setMobileSheetOpen(true);
  };

  const handleCloseMobileSheet = () => {
    setMobileSheetOpen(false);
    setSelectedVenture(null);
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle URL hash / route changes for deep linking and smooth scrolling
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.toLowerCase();
      const targetId = (hash === '#about' || hash === '#about-us') ? '#founder' : hash;
      const timer = setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile sheet is open
  useEffect(() => {
    if (mobileSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileSheetOpen]);

  // Handle Escape key to close mobile sheet
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileSheetOpen) {
        handleCloseMobileSheet();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileSheetOpen]);

  return (
    <div
      className={`relative min-h-screen font-sans transition-colors duration-500 ${
        theme === 'dark' ? 'dark bg-[#070709] text-white' : 'theme-light bg-white text-[#0C0D12]'
      }`}
      style={{ overflowX: 'clip' }}
    >
      {/* Global Background Ambient Upward Gold Light Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <GoldParticlesCanvas count={65} interactive={true} />
      </div>

      {/* Floating Transparent Navbar */}
      <Navbar
        onExploreClick={() => scrollToSection('#ecosystem')}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Dynamic Route Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onSelectVenture={handleSelectVenture}
              onOpenMobileSheet={handleOpenMobileSheet}
              onStoreClick={(platform) => handleStoreClick(platform)}
              onExploreClick={() => scrollToSection('#ecosystem')}
              onDiscoverClick={() => scrollToSection('#manifesto')}
            />
          }
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy onOpenContact={handleOpenContact} />}
        />
        <Route
          path="/terms-of-service"
          element={<TermsOfService onOpenContact={handleOpenContact} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Oversized Luxury Footer */}
      <Footer
        onOpenContactModal={handleOpenContact}
        onOpenFounder={handleOpenFounder}
      />

      {/* Interactive Global Modals */}
      <Modals
        activeModal={activeModal}
        modalData={modalData}
        onClose={handleCloseModal}
      />

      {/* Mobile Bottom Sheet */}
      {mobileSheetOpen && selectedVenture && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 md:hidden"
            onClick={handleCloseMobileSheet}
          />
          {/* Sheet */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0E0F14] border-t border-black/10 dark:border-white/10 rounded-t-3xl z-[60] md:hidden transition-transform duration-400 ease-out"
            style={{
              transform: mobileSheetOpen ? 'translateY(0)' : 'translateY(110%)',
              maxHeight: '88vh',
            }}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientY)}
            onTouchEnd={(e) => {
              const touchEnd = e.changedTouches[0].clientY;
              if (touchStart - touchEnd > 100) {
                handleCloseMobileSheet();
              }
            }}
          >
            <div className="p-6 overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
              {/* Grab Handle */}
              <div className="w-12 h-1 bg-black/20 dark:bg-white/20 rounded-full mx-auto mb-6" />

              {/* Top Row: Label, Status, X Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono">
                    VENTURE {selectedVenture.number}
                  </span>
                  <span
                    className={`text-[10px] uppercase font-bold px-3 py-0.5 rounded-full border ${selectedVenture.statusColor}`}
                  >
                    {selectedVenture.status}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCloseMobileSheet}
                  className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#0C0D12] dark:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-extrabold text-gold-gradient tracking-tight uppercase mb-2 transition-colors duration-300">
                {selectedVenture.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed mb-6 transition-colors duration-300">
                {selectedVenture.description}
              </p>

              {/* Scope Box */}
              <div className="p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10 space-y-4 transition-colors duration-300">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#8C5B0D] dark:text-[#E2C268]">
                  Ecosystem Integration &amp; Scope
                </h4>
                {selectedVenture.scopeText ? (
                  <p className="text-sm text-[#0C0D12] dark:text-zinc-200 font-medium leading-relaxed">
                    {selectedVenture.scopeText}
                  </p>
                ) : (
                  <>
                    {console.warn(`Missing scopeText for venture: ${selectedVenture.title}`)}
                    <p className="text-sm text-[#50515C] dark:text-zinc-400 italic">
                      Details coming soon.
                    </p>
                  </>
                )}
                {selectedVenture.scopePillText && (
                  <div className="mt-4 flex items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-semibold flex items-center gap-1.5 cursor-not-allowed">
                      {selectedVenture.scopePillText}
                    </span>
                  </div>
                )}
                {selectedVenture.scopePillText2 && (
                  <div className="mt-4 flex items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-semibold flex items-center gap-1.5 cursor-not-allowed">
                      {selectedVenture.scopePillText2}
                    </span>
                  </div>
                )}
                {selectedVenture.scopeLink && (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedVenture.scopeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D4A338] transition-colors cursor-pointer"
                    >
                      <span>{selectedVenture.scopeLinkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    {selectedVenture.scopeLink2 && (
                      <a
                        href={selectedVenture.scopeLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D4A338] transition-colors cursor-pointer"
                      >
                        <span>{selectedVenture.scopeLinkText2}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {selectedVenture.scopeLink3 && (
                      <a
                        href={selectedVenture.scopeLink3}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D4A338] transition-colors cursor-pointer"
                      >
                        <span>{selectedVenture.scopeLinkText3}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <Logo size="sm" showWordmark={true} />
                <button
                  type="button"
                  onClick={handleCloseMobileSheet}
                  className="px-6 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#D4A338] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
