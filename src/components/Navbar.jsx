import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onExploreClick, theme = 'light', toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSubPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isSubPage
    ? [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#ecosystem' },
        { label: 'Vision', href: '/#vision' },
        { label: 'Ecosystem', href: '/#orbit' },
        { label: 'About Us', href: '/#founder' },
        { label: 'FAQ', href: '/#faq' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#ecosystem' },
        { label: 'Vision', href: '#vision' },
        { label: 'Ecosystem', href: '#orbit' },
        { label: 'About Us', href: '#founder' },
        { label: 'FAQ', href: '#faq' },
      ];

  const handleNavClick = (e, href) => {
    if (!isSubPage && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  const handleExplore = () => {
    if (isSubPage) {
      navigate('/#ecosystem');
    } else if (onExploreClick) {
      onExploreClick();
    }
  };

  return (
    <>
      {/* 100% Full-Width Ultra-Slim Edge-to-Edge Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b border-black/[0.08] dark:border-white/10 bg-white/95 dark:bg-[#070709]/95 backdrop-blur-2xl text-[#111111] dark:text-white ${
          scrolled ? 'py-0.5 shadow-md' : 'py-1 shadow-sm'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-6 flex items-center justify-between h-11 sm:h-12">
          {/* LEFT: Compact Logo */}
          <a href={isSubPage ? '/' : '#hero'} className="flex items-center gap-2 group shrink-0">
            <Logo size="sm" className="max-h-7 sm:max-h-8 w-auto" />
          </a>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111111] dark:text-zinc-200 hover:text-[#C99B3C] dark:hover:text-[#F4DE84] transition-colors duration-300 relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C99B3C] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Day/Night Toggle, Compact Gold CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button (Desktop & Mobile) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              title={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              className="relative inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.08] hover:border-[#C99B3C] dark:hover:border-[#E2C268] hover:bg-[#C99B3C]/10 dark:hover:bg-[#C99B3C]/20 text-[#0C0D12] dark:text-[#F4DE84] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(201,155,60,0.35)]"
            >
              <Sun
                className={`w-4 h-4 transition-all duration-500 transform ${
                  theme === 'dark'
                    ? 'rotate-0 scale-100 text-[#F4DE84] drop-shadow-[0_0_6px_rgba(244,222,132,0.8)]'
                    : '-rotate-90 scale-0 text-amber-500 absolute'
                }`}
              />
              <Moon
                className={`w-4 h-4 transition-all duration-500 transform ${
                  theme === 'dark'
                    ? 'rotate-90 scale-0 text-zinc-400 absolute'
                    : 'rotate-0 scale-100 text-[#8C5B0D]'
                }`}
              />
            </button>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleExplore}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] hover:shadow-[0_0_15px_rgba(201,155,60,0.5)] transition-all duration-300 cursor-pointer"
            >
              <span>Explore Bempoh</span>
              <ArrowUpRight className="w-3 h-3 text-black stroke-[2.5]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border focus:outline-none text-[#111111] dark:text-white bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/15 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-between px-8 py-20 bg-white/98 dark:bg-[#070709]/98 text-[#111111] dark:text-white ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C5B0D] dark:text-[#E2C268] font-bold">
              Navigation
            </span>

            {/* In-Drawer Mobile Theme Switch */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 text-xs font-semibold text-[#0C0D12] dark:text-white cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#F4DE84]" />
                  <span>Day Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#8C5B0D]" />
                  <span>Night Mode</span>
                </>
              )}
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
              className="text-2xl font-normal tracking-wide text-[#111111] dark:text-zinc-100 hover:text-[#C99B3C] dark:hover:text-[#F4DE84] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleExplore();
            }}
            className="w-full py-4 rounded-full text-sm uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Ecosystem</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <p className="text-center text-xs tracking-widest uppercase mt-2 text-[#50515C] dark:text-zinc-400 font-semibold">
            BEMPOH INC — FROM FUTURE TO NOW
          </p>
        </div>
      </div>
    </>
  );
}
