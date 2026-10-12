import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Play, Pause, ExternalLink, Music, Radio, Disc } from 'lucide-react';

export default function MusicSection({ onPlatformClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef(null);
  const typedEl = useRef(null);
  const typedInstance = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (reducedMotion) return;

    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery?.addEventListener?.('change', handleMotionChange);

    if (typedEl.current) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: ['CAN HEAR.'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: false,
      });
    }

    return () => {
      mediaQuery?.removeEventListener?.('change', handleMotionChange);
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, [reducedMotion]);

  // Animated Audio Frequency Waveform Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = 140);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
    };
    window.addEventListener('resize', handleResize);

    const barsCount = 64;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      step += 0.05;
      const barWidth = width / barsCount;

      for (let i = 0; i < barsCount; i++) {
        const base = Math.sin(step + i * 0.25) * 0.4 + 0.5;
        const multiplier = isPlaying ? 1.0 : 0.25;
        const barHeight = (base * 80 + Math.sin(i * 0.5) * 20) * multiplier + 10;

        const x = i * barWidth;
        const y = (height - barHeight) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        grad.addColorStop(0, '#F4DE84');
        grad.addColorStop(0.5, '#C99B3C');
        grad.addColorStop(1, '#A97622');

        ctx.fillStyle = grad;
        ctx.shadowBlur = isPlaying ? 12 : 2;
        ctx.shadowColor = '#C99B3C';
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <section id="music" className="relative w-full bg-white dark:bg-[#070709] py-28 sm:py-36 px-6 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Ambient Audio Aura Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99B3C]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Music Copy & Platform CTAs */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <Radio className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] dark:text-[#E2C268] font-bold">
                BEMPOH MUSIC
              </span>
            </div>

            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0C0D12] dark:text-white tracking-tight leading-none uppercase transition-colors duration-300"
              aria-label="IDEAS YOU CAN HEAR."
            >
              IDEAS YOU <br />
              <span className="faq-typewriter-grid">
                {/* Ghost placeholder reserves exact width & height preventing layout shifts */}
                <span
                  className="faq-typewriter-ghost text-gold-gradient font-serif-display italic font-normal text-5xl sm:text-7xl md:text-8xl"
                  aria-hidden="true"
                >
                  CAN HEAR.
                </span>

                {/* Animated typewriter text container */}
                <span className="faq-typewriter-active font-serif-display italic font-normal text-5xl sm:text-7xl md:text-8xl">
                  {reducedMotion ? (
                    <span className="text-gold-gradient">CAN HEAR.</span>
                  ) : (
                    <span
                      ref={typedEl}
                      className="text-gold-gradient"
                    />
                  )}
                </span>
              </span>
            </h2>

            <p className="mt-8 text-base sm:text-lg text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
              Presenting the audio and musical expressions within the Bempoh ecosystem. Works associated with E.K. Bempoh are distributed globally across major streaming networks.
            </p>

            {/* Platform Badges */}
            <div className="mt-10 pt-8 border-t border-black/[0.08] dark:border-white/10 flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com/artist/4RYcGrNjODBc5CN4HcvFQF?si=D13hZ-gUSmCn0HkNTySjTg&utm_source=copy-link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 hover:border-[#C99B3C] dark:hover:border-[#C99B3C] hover:bg-[#C99B3C]/10 dark:hover:bg-[#C99B3C]/15 text-[#0C0D12] dark:text-zinc-100 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <Disc className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268] group-hover:rotate-180 transition-transform duration-700" />
                <span>Listen on Spotify</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#50515C] dark:text-zinc-400" />
              </a>

              <a
                href="https://music.apple.com/us/artist/e-k-bempoh/1591440094"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 hover:border-[#C99B3C] dark:hover:border-[#C99B3C] hover:bg-[#C99B3C]/10 dark:hover:bg-[#C99B3C]/15 text-[#0C0D12] dark:text-zinc-100 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <Music className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                <span>Apple Music</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#50515C] dark:text-zinc-400" />
              </a>

              <a
                href="https://youtube.com/@ekbempoh?si=q4IL2itt_rGP6eNV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 hover:border-[#C99B3C] dark:hover:border-[#C99B3C] hover:bg-[#C99B3C]/10 dark:hover:bg-[#C99B3C]/15 text-[#0C0D12] dark:text-zinc-100 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <Radio className="w-4 h-4 text-[#8C5B0D] dark:text-[#E2C268]" />
                <span>YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#50515C] dark:text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Audio Frequency Visualizer Stage (Preserved Dark Console) */}
          <div className="lg:col-span-6">
            <div className="keep-dark p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl text-white">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.1]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#C99B3C] animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.25em] text-white font-bold">
                    FREQUENCY VISUALIZER
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-widest font-mono text-[#A7A7A7]">
                  {isPlaying ? 'AUDIO ACTIVE' : 'STANDBY'}
                </span>
              </div>

              {/* Waveform Canvas */}
              <div className="my-8 relative">
                <canvas ref={canvasRef} className="w-full" />
              </div>

              {/* Bottom Interactive Play Toggle */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.1]">
                <div className="text-xs text-[#A7A7A7] font-light">
                  Toggle interactive frequency test
                </div>

                <a
                  href="https://open.spotify.com/artist/4RYcGrNjODBc5CN4HcvFQF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F4DE84] to-[#C99B3C] text-black font-extrabold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(201,155,60,0.5)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>Play Spectrum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
