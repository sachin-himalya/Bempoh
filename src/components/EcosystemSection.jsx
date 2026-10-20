import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, Cpu, Gamepad2, Music, BookOpen, Bell, Clapperboard, Home } from 'lucide-react';

const PART_1 = 'ONE VISION.';
const PART_2 = 'MULTIPLE WORLDS.';

export default function EcosystemSection({ onSelectVenture, onOpenMobileSheet }) {
  const ventures = [
    {
      id: 'technologies',
      number: '01',
      title: 'BEMPOH TECHNOLOGIES',
      description: 'Digital products and technologies built to solve real-world problems.',
      status: 'ACTIVE',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-700/50',
      icon: Cpu,
      anchor: '#udlivery',
      scopeText: 'Focuses on building scalable digital platforms, custom mobile applications, and collegiate services including Udlivery.',
      scopeLink: 'https://apps.apple.com/us/app/udlivery/id6443650358',
      scopeLinkText: 'Apple App Store',
      scopeLink2: 'https://play.google.com/store/apps/dev?id=7747807589744614244&hl=en_SG',
      scopeLinkText2: 'Google Play Store',
    },
    {
      id: 'games',
      number: '02',
      title: 'BEMPOH GAMES',
      description: 'Creating interactive worlds, experiences and next-generation entertainment.',
      status: 'COMING SOON',
      statusColor: 'bg-amber-50 text-[#8C5B0D] border-amber-300 dark:bg-amber-950/40 dark:text-[#E2C268] dark:border-amber-700/50',
      icon: Gamepad2,
      anchor: '#ecosystem',
      scopeText: 'Building the next world of interactive experiences and interactive entertainment. First gaming title planned for release.',
      scopePillText: 'App Store (Coming Soon)',
    },
    {
      id: 'homes',
      number: '03',
      title: 'BEMPOH REAL-ESTATE',
      description: 'Quality properties, land and real-estate solutions for the modern buyer.',
      status: 'COMING SOON',
      statusColor: 'bg-amber-50 text-[#8C5B0D] border-amber-300 dark:bg-amber-950/40 dark:text-[#E2C268] dark:border-amber-700/50',
      icon: Home,
      anchor: '#ecosystem',
      scopeText: 'Building a trusted real-estate venture for residential and commercial properties, land and rentals. Launching soon.',
      scopePillText: 'Website (Coming Soon)',
    },
    {
      id: 'books',
      number: '04',
      title: 'BEMPOH BOOKS',
      description: 'Ideas, perspectives and knowledge brought into published form.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10 dark:bg-white/5 dark:text-zinc-200 dark:border-white/15',
      icon: BookOpen,
      anchor: '#books',
      scopeText: 'Publishing house bringing literature and thought leadership into published form, including "The Universal Antidote" by E.K. Bempoh.',
      scopeLink: 'https://www.amazon.com/stores/author/B09K6FRZNG',
      scopeLinkText: 'Amazon Author Page',
    },
    {
      id: 'ringtones',
      number: '05',
      title: 'BEMPOH RINGTONES',
      description: 'Distinctive digital sounds and audio experiences for everyday devices.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10 dark:bg-white/5 dark:text-zinc-200 dark:border-white/15',
      icon: Bell,
      anchor: '#ringtones',
      scopeText: 'Digital sound assets and distinctive device audio experiences distributed on platforms such as Zedge with platform expansions planned.',
      scopeLink: 'https://www.zedge.net/profiles/a9e221fe-f556-488a-b47b-2d1c4b071907',
      scopeLinkText: 'Listen on Zedge',
      scopePillText2: 'iTunes (Coming Soon)',
    },
    {
      id: 'entertainment',
      number: '06',
      title: 'BEMPOH ENTERTAINMENT',
      description: 'Immersive media productions, creative arts, and digital content for global audiences.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10 dark:bg-white/5 dark:text-zinc-200 dark:border-white/15',
      icon: Clapperboard,
      anchor: '#ecosystem',
      scopeText: 'TODO: confirm copy with client - Immersive media productions, creative arts, and digital content ecosystems designed to connect audiences worldwide across future entertainment formats.',
      scopePillText: 'TODO: confirm link with client - VISIT WEBSITE',
    },
    {
      id: 'music',
      number: '07',
      title: 'BEMPOH MUSIC',
      description: 'Music and audio experiences distributed to audiences around the world.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10 dark:bg-white/5 dark:text-zinc-200 dark:border-white/15',
      icon: Music,
      anchor: '#music',
      scopeText: 'Audio entertainment arm distributing sound catalogs globally across Spotify, Apple Music, YouTube, and digital platforms.',
      scopeLink: 'https://open.spotify.com/artist/4RYcGrNjODBc5CN4HcvFQF?si=D13hZ-gUSmCn0HkNTySjTg&utm_source=copy-link',
      scopeLinkText: 'Spotify',
      scopeLink2: 'https://music.apple.com/us/artist/e-k-bempoh/1591440094',
      scopeLinkText2: 'Apple Music',
      scopeLink3: 'https://youtube.com/@ekbempoh?si=q4IL2itt_rGP6eNV',
      scopeLinkText3: 'YouTube',
    },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeCard: null });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);
  const setCardRef = useCallback((index) => (el) => {
    cardRefs.current[index] = el;
  }, []);

  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [part1Text, setPart1Text] = useState(() => (reducedMotion ? PART_1 : ''));
  const [part2Text, setPart2Text] = useState(() => (reducedMotion ? PART_2 : ''));
  const [cursorPart, setCursorPart] = useState(() => (reducedMotion ? null : 1));

  useEffect(() => {
    if (reducedMotion) return;

    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
    };
    mediaQuery?.addEventListener?.('change', handleMotionChange);

    let isCancelled = false;
    let timerId = null;

    const delay = (ms) =>
      new Promise((resolve) => {
        timerId = setTimeout(resolve, ms);
      });

    const runAnimation = async () => {
      while (!isCancelled) {
        // Reset state at start of cycle
        setCursorPart(1);
        setPart1Text('');
        setPart2Text('');
        await delay(200);
        if (isCancelled) return;

        // Sequence 1: Type "ONE VISION." character by character (100ms)
        setCursorPart(1);
        for (let i = 1; i <= PART_1.length; i++) {
          if (isCancelled) return;
          setPart1Text(PART_1.slice(0, i));
          await delay(100);
        }
        if (isCancelled) return;

        // Sequence 2: Immediately after, type "MULTIPLE WORLDS." character by character (100ms)
        setCursorPart(2);
        for (let i = 1; i <= PART_2.length; i++) {
          if (isCancelled) return;
          setPart2Text(PART_2.slice(0, i));
          await delay(100);
        }
        if (isCancelled) return;

        // Sequence 3: Keep complete heading visible for 2 seconds (2000ms)
        await delay(2000);
        if (isCancelled) return;

        // Sequence 4: Delete "MULTIPLE WORLDS." character by character (60ms)
        setCursorPart(2);
        for (let i = PART_2.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setPart2Text(PART_2.slice(0, i));
          await delay(60);
        }
        if (isCancelled) return;

        // Sequence 5: Then delete "ONE VISION." character by character (60ms)
        setCursorPart(1);
        await delay(60);
        if (isCancelled) return;
        for (let i = PART_1.length - 1; i >= 0; i--) {
          if (isCancelled) return;
          setPart1Text(PART_1.slice(0, i));
          await delay(60);
        }
        if (isCancelled) return;

        // Sequence 6: Brief pause before restarting loop
        await delay(300);
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
      mediaQuery?.removeEventListener?.('change', handleMotionChange);
    };
  }, [reducedMotion]);

  // Detect desktop screen size for depth animation guard
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionEl = document.getElementById('ecosystem');
    if (sectionEl) {
      observer.observe(sectionEl);
    }

    return () => observer.disconnect();
  }, [reducedMotion]);

  // Depth animation for mobile sticky cards
  useEffect(() => {
    if (reducedMotion || isDesktop) return;

    const NAVBAR_H = 56;

    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardTop = rect.top;
        const cardHeight = rect.height; // 190px

        // Each card sticks at NAVBAR_H + index * 14.
        // progress 0 → card just arrived at stuck top (fully visible).
        // progress 1 → card fully covered, only 14px strip remains.
        const myStuckTop = NAVBAR_H + index * 14;
        const coveredPx = Math.max(0, myStuckTop - cardTop);
        const progress = Math.min(1, coveredPx / Math.max(1, cardHeight - 14));

        const scale = 1 - progress * 0.06;     // 1 → 0.94
        const brightness = 1 - progress * 0.2;  // 1 → 0.80

        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    let rafId;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, isDesktop]);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y, activeCard: cardId });
  };

  const isComingSoon = (ventureId) => ventureId === 'games' || ventureId === 'homes';

  return (
    <section
      id="ecosystem"
      className="relative w-full bg-white dark:bg-[#070709] py-10 px-6 border-t border-black/[0.08] dark:border-white/10 transition-colors duration-300"
      style={{ overflow: 'visible' }}
    >
      {/* Background Accent – clipped inside its own box so it never causes horizontal scroll */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: 'clip' }}
      >
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C99B3C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold mb-3">
              BEMPOH ECOSYSTEM
            </div>
            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#0C0D12] dark:text-white tracking-tight leading-none uppercase transition-colors duration-300"
              aria-label="ONE VISION. MULTIPLE WORLDS."
            >
              {/* Part 1: One Vision. */}
              <span className="ecosystem-typewriter-grid">
                <span className="ecosystem-typewriter-ghost" aria-hidden="true">
                  {PART_1}
                </span>
                <span className="ecosystem-typewriter-active" aria-hidden="true">
                  {reducedMotion ? PART_1 : part1Text}
                  {!reducedMotion && cursorPart === 1 && (
                    <span className="typed-cursor" aria-hidden="true">|</span>
                  )}
                </span>
              </span>{' '}
              {/* Part 2: Multiple Worlds. */}
              <span className="block sm:inline font-serif-display italic font-normal">
                <span className="ecosystem-typewriter-grid">
                  <span
                    className="ecosystem-typewriter-ghost text-gold-gradient"
                    aria-hidden="true"
                  >
                    {PART_2}
                  </span>
                  <span className="ecosystem-typewriter-active" aria-hidden="true">
                    <span className="text-gold-gradient">
                      {reducedMotion ? PART_2 : part2Text}
                    </span>
                    {!reducedMotion && cursorPart === 2 && (
                      <span className="typed-cursor" aria-hidden="true">|</span>
                    )}
                  </span>
                </span>
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
            Bempoh operates across industries connected by one ambition — creating what comes next.
          </p>
        </div>

        {/* Mobile: Sticky Stack Cards */}
        {/*
          STICKY STACKING RULES:
          - All cards are DIRECT children of ONE container (no per-card wrappers)
          - position:sticky + top:calc(navbarH + index*14px) on each card
          - Container has padding-bottom so the last card can fully settle
          - Section overflow:visible; glow is clipped in its own wrapper above
          - prefers-reduced-motion → plain flow, no sticky, no depth animation
        */}
        <div
          className="md:hidden"
          style={{
            paddingBottom: reducedMotion ? '0' : '260px',
            isolation: 'isolate',
          }}
        >
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            const isComingSoonMobile = venture.id === 'games' || venture.id === 'homes';
            // Navbar on mobile: header h-11 (44px) + py-1 (4px top+4px bot) + border ≈ 52px
            // Add 4px safety buffer → 56px
            const NAVBAR_H = 56;

            return (
              <div
                key={venture.id}
                ref={setCardRef(index)}
                onClick={() => onOpenMobileSheet(venture)}
                className={`rounded-2xl border p-4 flex flex-col cursor-pointer ${
                  isComingSoonMobile
                    ? 'bg-white dark:bg-[#0E0F14] border-[#C99B3C]/30 dark:border-[#C99B3C]/30'
                    : 'bg-white dark:bg-[#0E0F14] border-black/[0.08] dark:border-white/10'
                }`}
                style={{
                  // Sticky positioning — each card sticks 14px below the previous card's top
                  position: reducedMotion ? 'relative' : 'sticky',
                  top: reducedMotion ? 'auto' : `${NAVBAR_H + index * 14}px`,
                  zIndex: index + 1,
                  // Fixed height so the sticky scroll range is predictable
                  height: '190px',
                  // Bottom margin creates the scroll distance needed for stacking
                  marginBottom: reducedMotion ? '16px' : '0px',
                  // will-change for perf
                  willChange: reducedMotion ? 'auto' : 'transform, filter',
                  transformOrigin: 'top center',
                }}
              >
                {/* Top Row: Status Badge & Arrow Button */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] uppercase tracking-[0.12em] font-bold px-3 py-1 rounded-full border ${venture.statusColor}`}
                  >
                    {venture.status}
                  </span>
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 text-[#0C0D12] dark:text-white flex items-center justify-center"
                    tabIndex={-1}
                    onClick={(e) => { e.stopPropagation(); onOpenMobileSheet(venture); }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Icon */}
                <div
                  className={`w-[38px] h-[38px] rounded-xl flex items-center justify-center mb-3 ${
                    isComingSoonMobile
                      ? 'bg-[#C99B3C]/20 border border-[#C99B3C]/40 text-[#8C5B0D] dark:text-[#E2C268]'
                      : 'bg-[#F4DE84]/25 dark:bg-[#C99B3C]/20 border border-[#C99B3C]/40 text-[#8C5B0D] dark:text-[#E2C268]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-medium uppercase text-gold-gradient mb-2">
                  {venture.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] leading-[1.5] text-[#50515C] dark:text-zinc-400">
                  {venture.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop: Card Grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            const isHovered = mousePos.activeCard === venture.id;
            const isFirstCard = index === 0;

            return (
              <div
                key={venture.id}
                className={`${isFirstCard ? 'xl:col-span-2' : ''}`}
                style={{
                  opacity: reducedMotion || isVisible ? 1 : 0,
                  transform: reducedMotion || isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: reducedMotion ? 'none' : `opacity 0.6s ease-out ${index * 120}ms, transform 0.6s ease-out ${index * 120}ms`,
                }}
              >
                <div
                  onMouseMove={(e) => handleMouseMove(e, venture.id)}
                  onMouseLeave={() => setMousePos({ x: 0, y: 0, activeCard: null })}
                  onClick={() => onSelectVenture(venture)}
                  className="group relative rounded-2xl bg-white dark:bg-[#0E0F14] border border-black/[0.08] dark:border-white/10 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between h-[380px] cursor-pointer hover:border-[#C99B3C]/60 dark:hover:border-[#C99B3C]/80 hover:shadow-[0_20px_40px_rgba(201,155,60,0.15)] dark:hover:shadow-[0_20px_40px_rgba(201,155,60,0.2)] hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-200 ease-out"
                >
                  {/* Mouse Cursor Spotlight Effect */}
                  {isHovered && (
                    <div
                      className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 155, 60, 0.12), transparent 80%)`,
                      }}
                    />
                  )}

                  {/* Top Row: Faded Number & Status Tag */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-4xl font-extrabold text-black/10 dark:text-white/10 group-hover:text-[#C99B3C]/40 transition-colors font-mono">
                      {venture.number}
                    </span>

                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full border ${venture.statusColor}`}
                    >
                      {venture.status}
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className="relative z-10 my-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F4DE84]/25 dark:bg-[#C99B3C]/20 border border-[#C99B3C]/40 flex items-center justify-center text-[#8C5B0D] dark:text-[#E2C268] mb-4 group-hover:scale-110 group-hover:bg-[#C99B3C] group-hover:text-black transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#0C0D12] dark:text-white tracking-wide group-hover:text-[#8C5B0D] dark:group-hover:text-[#E2C268] transition-colors">
                      {venture.title}
                    </h3>

                    <p className="text-sm text-[#50515C] dark:text-zinc-400 font-normal mt-3 leading-relaxed transition-colors">
                      {venture.description}
                    </p>
                  </div>

                  {/* Bottom Row: Gold Arrow */}
                  <div className="relative z-10 pt-4 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[#50515C] dark:text-zinc-400 group-hover:text-[#0C0D12] dark:group-hover:text-white transition-colors">
                    <span className="uppercase tracking-widest text-[11px] font-bold">Explore Venture</span>
                    <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-[#C99B3C] group-hover:text-black flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
