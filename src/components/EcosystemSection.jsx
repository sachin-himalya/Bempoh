import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Cpu, Gamepad2, Music, BookOpen, Bell, Clapperboard } from 'lucide-react';

const PART_1 = 'ONE VISION.';
const PART_2 = 'MULTIPLE WORLDS.';

export default function EcosystemSection({ onSelectVenture }) {
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
    },
    {
      id: 'music',
      number: '03',
      title: 'BEMPOH MUSIC',
      description: 'Music and audio experiences distributed to audiences around the world.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10 dark:bg-white/5 dark:text-zinc-200 dark:border-white/15',
      icon: Music,
      anchor: '#music',
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
    },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeCard: null });

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

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y, activeCard: cardId });
  };

  return (
    <section id="ecosystem" className="relative w-full bg-white dark:bg-[#070709] py-28 px-6 border-t border-black/[0.08] dark:border-white/10 transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C99B3C]/10 blur-3xl rounded-full pointer-events-none" />

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

        {/* 6-Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture) => {
            const Icon = venture.icon;
            const isHovered = mousePos.activeCard === venture.id;

            return (
              <div
                key={venture.id}
                onMouseMove={(e) => handleMouseMove(e, venture.id)}
                onMouseLeave={() => setMousePos({ x: 0, y: 0, activeCard: null })}
                onClick={() => onSelectVenture(venture)}
                className="group relative rounded-2xl bg-white dark:bg-[#0E0F14] border border-black/[0.08] dark:border-white/10 p-8 transition-all duration-500 hover:border-[#C99B3C]/60 dark:hover:border-[#C99B3C]/80 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(201,155,60,0.15)] dark:hover:shadow-[0_20px_40px_rgba(201,155,60,0.2)] overflow-hidden cursor-pointer flex flex-col justify-between min-h-[320px]"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
