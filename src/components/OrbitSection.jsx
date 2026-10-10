import React, { useState } from 'react';
import {
  Cpu,
  Gamepad2,
  Music,
  BookOpen,
  Radio,
  Film,
  Rocket,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Globe,
  TrendingUp,
  Activity,
  Code,
  Server,
  Users,
  Feather,
  Lightbulb,
  Volume2,
  Share2,
  Video,
  Atom,
  Zap,
} from 'lucide-react';
import Logo from './Logo';

export default function OrbitSection() {
  const sectors = [
    {
      id: 'tech',
      num: '01',
      label: 'TECHNOLOGY',
      icon: Cpu,
      tagline: 'Digital Platforms & Software Solutions',
      details:
        'Pioneering next-gen web architecture, cloud infrastructure, and intelligent software systems that empower modern digital experiences.',
      highlight: 'Enterprise Cloud & Software Systems',
      features: [
        { title: 'Architect', sub: 'Cloud Infrastructure', icon: Cpu },
        { title: 'Engineer', sub: 'Intelligent Systems', icon: Code },
        { title: 'Scale', sub: 'Global Enterprise', icon: Server },
      ],
      carouselImages: ['/headphones.png', '/vinyl.png', '/mic.png'],
    },
    {
      id: 'gaming',
      num: '02',
      label: 'GAMING',
      icon: Gamepad2,
      tagline: 'Interactive Experiences & Next-Gen Entertainment',
      details:
        'Creating immersive virtual worlds, interactive storytelling, and high-performance gaming experiences for global audiences.',
      highlight: 'Interactive World Engines',
      features: [
        { title: 'Render', sub: '3D World Engines', icon: Gamepad2 },
        { title: 'Design', sub: 'Immersive Gameplay', icon: Sparkles },
        { title: 'Engage', sub: 'Global Communities', icon: Users },
      ],
      carouselImages: ['/vinyl.png', '/mic.png', '/headphones.png'],
    },
    {
      id: 'music',
      num: '03',
      label: 'MUSIC',
      icon: Music,
      tagline: 'Audio Productions & Distribution Platforms',
      details:
        'Empowering creators and listeners through world-class audio production, royalty streaming, and global record label operations.',
      highlight: 'GLOBAL AUDIO CATALOG & STREAMING',
      features: [
        { title: 'Create', sub: 'Original Content', icon: Sliders },
        { title: 'Distribute', sub: 'Global Reach', icon: Globe },
        { title: 'Monetize', sub: 'Sustainable Growth', icon: TrendingUp },
      ],
      carouselImages: ['/headphones.png', '/vinyl.png', '/mic.png'],
    },
    {
      id: 'books',
      num: '04',
      label: 'BOOKS',
      icon: BookOpen,
      tagline: 'Publishing & Thought Leadership',
      details:
        'Publishing transformative literature, intellectual property, and research that shapes conversations and inspires generations.',
      highlight: 'Literary & IP Publishing',
      features: [
        { title: 'Author', sub: 'Original Literature', icon: BookOpen },
        { title: 'Publish', sub: 'Print & Digital', icon: Feather },
        { title: 'Inspire', sub: 'Thought Leadership', icon: Lightbulb },
      ],
      carouselImages: ['/mic.png', '/headphones.png', '/vinyl.png'],
    },
    {
      id: 'media',
      num: '05',
      label: 'DIGITAL MEDIA',
      icon: Radio,
      tagline: 'Content & Multi-Channel Networks',
      details:
        'Building high-impact digital broadcasting, multi-channel distribution networks, and culture-shaping content ecosystems.',
      highlight: 'Broadcasting & Digital Networks',
      features: [
        { title: 'Broadcast', sub: 'Multi-Channel Networks', icon: Radio },
        { title: 'Produce', sub: 'High-Impact Media', icon: Volume2 },
        { title: 'Connect', sub: 'Global Audiences', icon: Share2 },
      ],
      carouselImages: ['/vinyl.png', '/headphones.png', '/mic.png'],
    },
    {
      id: 'entertainment',
      num: '06',
      label: 'ENTERTAINMENT',
      icon: Film,
      tagline: 'Immersive Media & Creative Arts',
      details:
        'Producing cinematic productions, live digital events, and cross-platform entertainment experiences that captivate fans worldwide.',
      highlight: 'Cinematic & Immersive Media',
      features: [
        { title: 'Direct', sub: 'Cinematic Media', icon: Film },
        { title: 'Perform', sub: 'Live Digital Events', icon: Video },
        { title: 'Captivate', sub: 'Cross-Platform Fans', icon: Activity },
      ],
      carouselImages: ['/mic.png', '/vinyl.png', '/headphones.png'],
    },
    {
      id: 'future',
      num: '07',
      label: 'FUTURE VENTURES',
      icon: Rocket,
      tagline: 'Emerging Technologies & Incubations',
      details:
        'Incubating breakthrough concepts, AI research, space-age technological exploration, and next-generation venture models.',
      highlight: 'Frontier AI & R&D Labs',
      features: [
        { title: 'Incubate', sub: 'Frontier AI Labs', icon: Rocket },
        { title: 'Innovate', sub: 'Breakthrough Models', icon: Atom },
        { title: 'Pioneer', sub: 'Space-Age Tech', icon: Zap },
      ],
      carouselImages: ['/headphones.png', '/mic.png', '/vinyl.png'],
    },
  ];

  // Default selected sector is MUSIC (Sector 03) to match reference screenshot
  const [activeSector, setActiveSector] = useState(sectors[2]);
  const [carouselIndex, setCarouselIndex] = useState(1);

  const ActiveIcon = activeSector.icon;

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? activeSector.carouselImages.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev === activeSector.carouselImages.length - 1 ? 0 : prev + 1));
  };

  // Node positioning in orbit
  const orbitPositions = [
    { id: 'tech', label: 'TECHNOLOGY', top: '6%', left: '50%' },
    { id: 'gaming', label: 'GAMING', top: '22%', left: '80%' },
    { id: 'music', label: 'MUSIC', top: '55%', left: '88%' },
    { id: 'books', label: 'BOOKS', top: '82%', left: '72%' },
    { id: 'media', label: 'DIGITAL MEDIA', top: '88%', left: '38%' },
    { id: 'entertainment', label: 'ENTERTAINMENT', top: '55%', left: '12%' },
    { id: 'future', label: 'FUTURE VENTURES', top: '22%', left: '20%' },
  ];

  return (
    <section id="orbit" className="relative w-full bg-white py-24 sm:py-32 px-6 border-t border-black/[0.08] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C99B3C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Badge & Title */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99B3C]/10 border border-[#C99B3C]/30 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5B0D]" />
            <span className="text-[11px] font-bold tracking-[0.35em] text-[#8C5B0D] uppercase">
              INDUSTRY ORBIT
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C0D12] tracking-tight leading-none">
            An Interconnected <br className="hidden sm:block" />
            <span className="text-gold-gradient font-serif-display italic font-normal text-5xl sm:text-7xl block mt-2 sm:mt-3">
              Constellation.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#50515C] font-normal tracking-wide">
            Hover over any industry node to explore Bempoh's multi-sector integration.
          </p>
        </div>

        {/* ORBIT DIAGRAM (DESKTOP & TABLET) */}
        <div className="relative w-full max-w-[760px] aspect-square mx-auto hidden md:flex items-center justify-center mb-10">
          {/* Orbital Concentric Rings */}
          <div className="absolute inset-0 rounded-full border border-black/[0.08] pointer-events-none animate-pulse-slow" />
          <div className="absolute inset-16 rounded-full border border-[#C99B3C]/25 pointer-events-none" />
          <div className="absolute inset-32 rounded-full border border-black/[0.06] pointer-events-none" />

          {/* Central Bempoh Emblem Core */}
          <div className="keep-dark relative z-20 w-44 h-44 rounded-full bg-[#0B0B0B] border-2 border-[#C99B3C] shadow-[0_0_60px_rgba(201,155,60,0.35)] flex flex-col items-center justify-center p-4 group transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-[#C99B3C]/20 blur-xl group-hover:bg-[#C99B3C]/35 transition-all" />
            <Logo size="md" showWordmark={false} glow={true} className="relative z-10" />
            <span className="relative z-10 text-[10px] uppercase tracking-[0.25em] text-white font-extrabold mt-2">
              BEMPOH CORE
            </span>
          </div>

          {/* 7 Orbiting Sector Nodes */}
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const radius = 290;
            const angle = (idx * (360 / sectors.length) - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const isActive = activeSector.id === sec.id;

            return (
              <div
                key={sec.id}
                onMouseEnter={() => {
                  setActiveSector(sec);
                  setCarouselIndex(1);
                }}
                onClick={() => {
                  setActiveSector(sec);
                  setCarouselIndex(1);
                }}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className="absolute z-30 cursor-pointer flex flex-col items-center group transition-all duration-500"
              >
                {/* Node Circular Icon Container */}
                <div
                  className={`relative w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-gradient-to-br from-[#F4DE84] via-[#C99B3C] to-[#A97622] border-[#F4DE84] text-black scale-125 shadow-[0_0_30px_rgba(201,155,60,0.65)]'
                      : 'bg-white border-black/15 text-[#8C5B0D] hover:border-[#C99B3C] hover:scale-110'
                  }`}
                >
                  <Icon className={`w-6 h-6 stroke-[2] ${isActive ? 'text-black' : 'text-[#8C5B0D]'}`} />
                </div>

                {/* Node Pill Label */}
                <div
                  className={`mt-2 px-3.5 py-1 rounded-full border text-[10px] uppercase tracking-[0.2em] font-extrabold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-black text-[#F4DE84] border-[#F4DE84] shadow-lg scale-110'
                      : 'bg-white text-[#0C0D12] border-black/10 group-hover:border-[#C99B3C] group-hover:text-[#8C5B0D] shadow-sm'
                  }`}
                >
                  {sec.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE RESPONSIVE RADIAL SELECTOR */}
        <div className="md:hidden flex flex-wrap justify-center gap-2 mb-8">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSector.id === sec.id;
            return (
              <button
                type="button"
                key={sec.id}
                onClick={() => {
                  setActiveSector(sec);
                  setCarouselIndex(1);
                }}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F4DE84] to-[#C99B3C] text-black border-[#F4DE84] shadow-md'
                    : 'bg-white text-[#0C0D12] border-black/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* REDESIGNED LUXURY INFORMATION CARD (MATCHING REFERENCE IMAGE) */}
        <div className="max-w-6xl mx-auto rounded-[24px] bg-[#FAFAFC] border border-[#C99B3C]/35 shadow-xl p-6 sm:p-8 md:p-10 text-left relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT COLUMN (~50% width) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Sector Badge & Main Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F4DE84] to-[#C99B3C] text-black flex items-center justify-center font-bold shadow-md">
                    <ActiveIcon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8C5B0D]">
                      SECTOR {activeSector.num}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0C0D12] uppercase tracking-tight leading-none">
                      {activeSector.label}
                    </h3>
                  </div>
                </div>

                {/* Subheading & Description */}
                <h4 className="text-base sm:text-lg text-[#8C5B0D] font-bold mt-3">
                  {activeSector.tagline}
                </h4>
                <p className="text-sm sm:text-base text-[#50515C] font-normal leading-relaxed mt-2">
                  {activeSector.details}
                </p>
              </div>

              {/* Three Horizontal Feature Items with Gold Outline Icons */}
              <div className="pt-4 border-t border-black/[0.08] grid grid-cols-3 gap-3">
                {activeSector.features.map((feat) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div key={feat.title} className="flex items-center gap-2.5 group">
                      <div className="w-8 h-8 rounded-full bg-[#C99B3C]/10 border border-[#C99B3C]/40 text-[#8C5B0D] flex items-center justify-center shrink-0 group-hover:bg-[#C99B3C] group-hover:text-black transition-colors">
                        <FeatIcon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#0C0D12] leading-tight">
                          {feat.title}
                        </div>
                        <div className="text-[10px] text-[#50515C] font-normal leading-tight hidden sm:block">
                          {feat.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN (~50% width) */}
            <div className="lg:col-span-6 flex flex-col justify-between items-end h-full">
              {/* Top Gold Pill Tag */}
              <div className="px-4 py-1.5 rounded-full bg-[#C99B3C]/10 border border-[#C99B3C]/30 text-[11px] font-bold text-[#8C5B0D] tracking-wider uppercase mb-6 self-end">
                {activeSector.highlight}
              </div>

              {/* 3-Image Overlapping Carousel with Navigation Arrow Buttons */}
              <div className="relative w-full flex items-center justify-center gap-3 py-2">
                {/* Previous Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrevCarousel}
                  className="w-9 h-9 rounded-full bg-white border border-black/15 text-[#0C0D12] flex items-center justify-center hover:border-[#C99B3C] hover:bg-[#F4DE84]/20 shadow-md transition-all z-30 cursor-pointer shrink-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0C0D12]" />
                </button>

                {/* Overlapping Images Track */}
                <div className="relative flex items-center justify-center w-full max-w-[380px] h-[160px] sm:h-[180px]">
                  {/* Left Side Image (Partial behind) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 sm:w-36 h-28 sm:h-36 rounded-xl overflow-hidden shadow-md z-10 opacity-70 transform -translate-x-2 scale-90 border border-white/20 transition-all duration-500">
                    <img
                      src={
                        activeSector.carouselImages[
                          (carouselIndex + activeSector.carouselImages.length - 1) % activeSector.carouselImages.length
                        ]
                      }
                      alt="Side Asset Left"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Center Main Image (Prominent & Front) */}
                  <div className="relative w-44 sm:w-56 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-2xl z-20 border-2 border-[#C99B3C]/50 transform scale-105 transition-all duration-500">
                    <img
                      src={activeSector.carouselImages[carouselIndex]}
                      alt="Main Asset Center"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Side Image (Partial behind) */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 sm:w-36 h-28 sm:h-36 rounded-xl overflow-hidden shadow-md z-10 opacity-70 transform translate-x-2 scale-90 border border-white/20 transition-all duration-500">
                    <img
                      src={
                        activeSector.carouselImages[
                          (carouselIndex + 1) % activeSector.carouselImages.length
                        ]
                      }
                      alt="Side Asset Right"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Next Arrow Button */}
                <button
                  type="button"
                  onClick={handleNextCarousel}
                  className="w-9 h-9 rounded-full bg-white border border-black/15 text-[#0C0D12] flex items-center justify-center hover:border-[#C99B3C] hover:bg-[#F4DE84]/20 shadow-md transition-all z-30 cursor-pointer shrink-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-[#0C0D12]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
