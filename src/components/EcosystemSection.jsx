import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Gamepad2, Music, BookOpen, Bell, Clapperboard } from 'lucide-react';

export default function EcosystemSection({ onSelectVenture }) {
  const ventures = [
    {
      id: 'technologies',
      number: '01',
      title: 'BEMPOH TECHNOLOGIES',
      description: 'Digital products and technologies built to solve real-world problems.',
      status: 'ACTIVE',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Cpu,
      anchor: '#udlivery',
    },
    {
      id: 'games',
      number: '02',
      title: 'BEMPOH GAMES',
      description: 'Creating interactive worlds, experiences and next-generation entertainment.',
      status: 'COMING SOON',
      statusColor: 'bg-amber-50 text-[#8C5B0D] border-amber-300',
      icon: Gamepad2,
      anchor: '#ecosystem',
    },
    {
      id: 'music',
      number: '03',
      title: 'BEMPOH MUSIC',
      description: 'Music and audio experiences distributed to audiences around the world.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10',
      icon: Music,
      anchor: '#music',
    },
    {
      id: 'books',
      number: '04',
      title: 'BEMPOH BOOKS',
      description: 'Ideas, perspectives and knowledge brought into published form.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10',
      icon: BookOpen,
      anchor: '#books',
    },
    {
      id: 'ringtones',
      number: '05',
      title: 'BEMPOH RINGTONES',
      description: 'Distinctive digital sounds and audio experiences for everyday devices.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10',
      icon: Bell,
      anchor: '#ringtones',
    },
    {
      id: 'entertainment',
      number: '06',
      title: 'BEMPOH ENTERTAINMENT',
      description: 'Immersive media productions, creative arts, and digital content for global audiences.',
      status: 'EXPLORE',
      statusColor: 'bg-black/5 text-[#0C0D12] border-black/10',
      icon: Clapperboard,
      anchor: '#ecosystem',
    },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeCard: null });

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y, activeCard: cardId });
  };

  return (
    <section id="ecosystem" className="relative w-full bg-white py-28 px-6 border-t border-black/[0.08]">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C99B3C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#8C5B0D] font-bold mb-3">
              BEMPOH ECOSYSTEM
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C0D12] tracking-tight leading-none">
              One Vision.{' '}
              <span className="text-gold-gradient block sm:inline font-serif-display italic font-normal">
                Multiple Worlds.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-[#50515C] font-normal leading-relaxed">
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
                className="group relative rounded-2xl bg-white border border-black/[0.08] p-8 transition-all duration-500 hover:border-[#C99B3C]/60 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(201,155,60,0.15)] overflow-hidden cursor-pointer flex flex-col justify-between min-h-[320px]"
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
                  <span className="text-4xl font-extrabold text-black/10 group-hover:text-[#C99B3C]/40 transition-colors font-mono">
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
                  <div className="w-10 h-10 rounded-xl bg-[#F4DE84]/25 border border-[#C99B3C]/40 flex items-center justify-center text-[#8C5B0D] mb-4 group-hover:scale-110 group-hover:bg-[#C99B3C] group-hover:text-black transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0C0D12] tracking-wide group-hover:text-[#8C5B0D] transition-colors">
                    {venture.title}
                  </h3>

                  <p className="text-sm text-[#50515C] font-normal mt-3 leading-relaxed">
                    {venture.description}
                  </p>
                </div>

                {/* Bottom Row: Gold Arrow */}
                <div className="relative z-10 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#50515C] group-hover:text-[#0C0D12] transition-colors">
                  <span className="uppercase tracking-widest text-[11px] font-bold">Explore Venture</span>
                  <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-[#C99B3C] group-hover:text-black flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
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
