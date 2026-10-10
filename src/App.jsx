import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import EcosystemSection from './components/EcosystemSection';
import VisionSection from './components/VisionSection';
import OrbitSection from './components/OrbitSection';
import MusicSection from './components/MusicSection';
import BooksSection from './components/BooksSection';
import PrincipleSection from './components/PrincipleSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Modals from './components/Modals';
import GoldParticlesCanvas from './components/GoldParticlesCanvas';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bempoh-theme') || 'light';
  });

  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);

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

  const handleOpenLegal = (title) => {
    setModalData({ title });
    setActiveModal('legal');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050505] text-white' : 'theme-light bg-white text-[#0C0D12]'
      }`}
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

      {/* SECTION 01 — Cinematic Hero */}
      <HeroSection
        onExploreClick={() => scrollToSection('#ecosystem')}
        onDiscoverClick={() => scrollToSection('#manifesto')}
      />

      {/* SECTION 02 — Brand Manifesto */}
      <ManifestoSection />

      {/* SECTION 03 — Bempoh Ecosystem */}
      <EcosystemSection onSelectVenture={handleSelectVenture} />

      {/* SECTION 04 — Vision */}
      <VisionSection />

      {/* SECTION 06 — Industry Orbit */}
      <OrbitSection />

      {/* SECTION 07 — Bempoh Music */}
      <MusicSection onPlatformClick={(platform) => handleStoreClick(platform)} />

      {/* SECTION 08 — Bempoh Books */}
      <BooksSection onExploreBooks={() => scrollToSection('#books')} />

      {/* SECTION 09 — The Bempoh Principle */}
      <PrincipleSection />

      {/* SECTION 11 — Frequently Asked Questions */}
      <FaqSection />

      {/* Oversized Luxury Footer */}
      <Footer
        onOpenLegalModal={handleOpenLegal}
        onOpenContactModal={handleOpenContact}
      />

      {/* Interactive Global Modals */}
      <Modals
        activeModal={activeModal}
        modalData={modalData}
        onClose={handleCloseModal}
      />
    </div>
  );
}
