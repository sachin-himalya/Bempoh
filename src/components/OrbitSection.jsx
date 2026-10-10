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

// Dedicated sector-specific image mapping ensuring each industry has its own unique assets
const SECTOR_CAROUSEL_IMAGES = {
  tech: [
    '/sectors/tech-1.jpg',
    '/sectors/tech-2.jpg',
    '/sectors/tech-3.jpg',
  ],
  gaming: [
    '/sectors/gaming-1.jpg',
    '/sectors/gaming-2.jpg',
    '/sectors/gaming-3.jpg',
  ],
  music: [
    '/headphones.png',
    '/vinyl.png',
    '/mic.png',
  ],
  books: [
    '/sectors/books-1.jpg',
    '/sectors/books-2.jpg',
    '/sectors/books-3.jpg',
  ],
  media: [
    '/sectors/media-1.jpg',
    '/sectors/media-2.jpg',
    '/sectors/media-3.jpg',
  ],
  entertainment: [
    '/sectors/entertainment-1.jpg',
    '/sectors/entertainment-2.jpg',
    '/sectors/entertainment-3.jpg',
  ],
  future: [
    '/sectors/future-1.jpg',
    '/sectors/future-2.jpg',
    '/sectors/future-3.jpg',
  ],
};

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
      carouselImages: SECTOR_CAROUSEL_IMAGES.tech,
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
      carouselImages: SECTOR_CAROUSEL_IMAGES.gaming,
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
      carouselImages: SECTOR_CAROUSEL_IMAGES.music,
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
      carouselImages: SECTOR_CAROUSEL_IMAGES.books,
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
      carouselImages: SECTOR_CAROUSEL_IMAGES.media,
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
      carouselImages: SECTOR_CAROUSEL_IMAGES.entertainment,
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
      carouselImages: SECTOR_CAROUSEL_IMAGES.future,
    },
  ];

  // Default selected sector is MUSIC (Sector 03) to match reference screenshot
  const [activeSector, setActiveSector] = useState(sectors[2]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const ActiveIcon = activeSector.icon;

  // Resolve currently active sector's unique 3 images
  const currentImages =
    SECTOR_CAROUSEL_IMAGES[activeSector.id] ||
    activeSector.carouselImages || [
      '/headphones.png',
      '/vinyl.png',
      '/mic.png',
    ];

  // Handle switching active sector: immediately resets carousel to first image (index 0)
  const handleSelectSector = (sec) => {
    setActiveSector(sec);
    setCarouselIndex(0);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
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
    <section id="orbit" className="relative w-full bg-white dark:bg-[#070709] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#C99B3C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP TWO-COLUMN DESKTOP LAYOUT (MATCHING GLOBAL VISION STRUCTURE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* LEFT COLUMN (40-45% => lg:col-span-5): BADGE, HEADINGS & SUBTITLE */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            {/* INDUSTRY ORBIT Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C99B3C]/10 border border-[#C99B3C]/30 mb-6 self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5B0D] dark:text-[#E2C268]" />
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#8C5B0D] dark:text-[#E2C268] uppercase">
                INDUSTRY ORBIT
              </span>
            </div>

            {/* Main Heading & Gold Italic Heading (Strictly Two Lines on Desktop) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-extrabold text-[#0C0D12] dark:text-white tracking-tight leading-[1.12] transition-colors duration-300">
              <span className="block lg:whitespace-nowrap">An Interconnected</span>
              <span className="text-gold-gradient block font-serif-display italic font-normal text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] mt-1 sm:mt-1.5">
                Constellation.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed max-w-lg transition-colors duration-300">
              Hover over any industry node to explore Bempoh's multi-sector integration.
            </p>
          </div>

          {/* RIGHT COLUMN (55-60% => lg:col-span-7): INTERACTIVE ORBIT DIAGRAM */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end overflow-visible">
            <div className="relative w-full max-w-[500px] h-[440px] sm:h-[460px] flex items-center justify-center mx-auto lg:mr-0 scale-[0.72] xs:scale-[0.82] sm:scale-95 md:scale-100 origin-center transition-transform">
              {/* Orbital Concentric Rings */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-black/[0.07] dark:border-white/10 pointer-events-none animate-pulse-slow" />
              <div className="absolute w-[350px] h-[350px] rounded-full border border-[#C99B3C]/30 pointer-events-none" />
              <div className="absolute w-[230px] h-[230px] rounded-full border border-black/[0.05] dark:border-white/[0.06] pointer-events-none" />

              {/* Central Bempoh Emblem Core */}
              <div className="keep-dark relative z-20 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-[#0B0B0B] border-2 border-[#C99B3C] shadow-[0_0_40px_rgba(201,155,60,0.35)] flex flex-col items-center justify-center p-3 group transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-[#C99B3C]/20 blur-lg group-hover:bg-[#C99B3C]/35 transition-all" />
                <Logo size="sm" showWordmark={false} glow={true} className="relative z-10 max-h-9 sm:max-h-10 w-auto" />
                <span className="relative z-10 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-white font-extrabold mt-1">
                  BEMPOH CORE
                </span>
              </div>

              {/* 7 Orbiting Sector Nodes */}
              {sectors.map((sec, idx) => {
                const Icon = sec.icon;
                const radius = 175;
                const angle = (idx * (360 / sectors.length) - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isActive = activeSector.id === sec.id;

                return (
                  <div
                    key={sec.id}
                    onMouseEnter={() => handleSelectSector(sec)}
                    onClick={() => handleSelectSector(sec)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="absolute z-30 cursor-pointer flex flex-col items-center group transition-all duration-500"
                  >
                    {/* Node Circular Icon Container */}
                    <div
                      className={`relative w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-gradient-to-br from-[#F4DE84] via-[#C99B3C] to-[#A97622] border-[#F4DE84] text-black scale-115 shadow-[0_0_24px_rgba(201,155,60,0.65)]'
                          : 'bg-white dark:bg-[#12131A] border-black/15 dark:border-white/20 text-[#8C5B0D] dark:text-[#E2C268] hover:border-[#C99B3C] hover:scale-110'
                      }`}
                    >
                      <Icon className={`w-5 h-5 stroke-[2] ${isActive ? 'text-black' : 'text-[#8C5B0D] dark:text-[#E2C268]'}`} />
                    </div>

                    {/* Node Pill Label */}
                    <div
                      className={`mt-1 px-2.5 py-0.5 rounded-full border text-[9px] uppercase tracking-[0.18em] font-extrabold whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? 'bg-black text-[#F4DE84] border-[#F4DE84] shadow-md scale-105'
                          : 'bg-white dark:bg-[#12131A] text-[#0C0D12] dark:text-zinc-200 border-black/10 dark:border-white/15 group-hover:border-[#C99B3C] group-hover:text-[#8C5B0D] shadow-sm'
                      }`}
                    >
                      {sec.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE RESPONSIVE QUICK SELECTOR PILLS */}
        <div className="sm:hidden flex flex-wrap justify-center gap-1.5 mb-8">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSector.id === sec.id;
            return (
              <button
                type="button"
                key={sec.id}
                onClick={() => handleSelectSector(sec)}
                className={`px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F4DE84] to-[#C99B3C] text-black border-[#F4DE84] shadow-md'
                    : 'bg-white dark:bg-[#12131A] text-[#0C0D12] dark:text-zinc-200 border-black/10 dark:border-white/15'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* FULL-WIDTH LUXURY INFORMATION CARD (BELOW TWO-COLUMN LAYOUT) */}
        <div className="max-w-6xl mx-auto rounded-[24px] bg-[#FAFAFC] dark:bg-[#0E0F14] border border-[#C99B3C]/35 dark:border-[#C99B3C]/40 shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:p-10 text-left relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT COLUMN (~50% width) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Sector Badge & Main Title */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F4DE84] to-[#C99B3C] text-black flex items-center justify-center font-bold shadow-md shrink-0">
                    <ActiveIcon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8C5B0D] dark:text-[#E2C268]">
                      SECTOR {activeSector.num}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight leading-none transition-colors duration-300">
                      {activeSector.label}
                    </h3>
                  </div>
                </div>

                {/* Subheading & Description */}
                <h4 className="text-base sm:text-lg text-[#8C5B0D] dark:text-[#E2C268] font-bold mt-2">
                  {activeSector.tagline}
                </h4>
                <p className="text-sm sm:text-base text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed mt-2 transition-colors duration-300">
                  {activeSector.details}
                </p>
              </div>

              {/* Three Horizontal Feature Items with Gold Outline Icons */}
              <div className="pt-4 border-t border-black/[0.08] dark:border-white/10 grid grid-cols-3 gap-3">
                {activeSector.features.map((feat) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div key={feat.title} className="flex items-center gap-2.5 group">
                      <div className="w-8 h-8 rounded-full bg-[#C99B3C]/10 dark:bg-[#C99B3C]/15 border border-[#C99B3C]/40 text-[#8C5B0D] dark:text-[#E2C268] flex items-center justify-center shrink-0 group-hover:bg-[#C99B3C] group-hover:text-black transition-colors">
                        <FeatIcon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#0C0D12] dark:text-white leading-tight transition-colors duration-300">
                          {feat.title}
                        </div>
                        <div className="text-[10px] text-[#50515C] dark:text-zinc-400 font-normal leading-tight hidden sm:block transition-colors duration-300">
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
              <div className="px-4 py-1.5 rounded-full bg-[#C99B3C]/10 dark:bg-[#C99B3C]/15 border border-[#C99B3C]/30 text-[11px] font-bold text-[#8C5B0D] dark:text-[#E2C268] tracking-wider uppercase mb-4 self-end">
                {activeSector.highlight}
              </div>

              {/* 3-Image Overlapping Carousel with Navigation Arrow Buttons */}
              <div className="relative w-full flex items-center justify-center gap-3 py-2">
                {/* Previous Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrevCarousel}
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#1A1B24] border border-black/15 dark:border-white/20 text-[#0C0D12] dark:text-white flex items-center justify-center hover:border-[#C99B3C] hover:bg-[#F4DE84]/20 shadow-md transition-all z-30 cursor-pointer shrink-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0C0D12] dark:text-white" />
                </button>

                {/* Overlapping Images Track */}
                <div className="relative flex items-center justify-center w-full max-w-[380px] h-[155px] sm:h-[175px]">
                  {/* Left Side Image (Partial behind) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 sm:w-34 h-28 sm:h-34 rounded-xl overflow-hidden shadow-md z-10 opacity-70 transform -translate-x-2 scale-90 border border-white/20 transition-all duration-500">
                    <img
                      src={
                        currentImages[
                          (carouselIndex + currentImages.length - 1) % currentImages.length
                        ]
                      }
                      alt={`${activeSector.label} Asset Preview Left`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Center Main Image (Prominent & Front) */}
                  <div className="relative w-44 sm:w-52 h-34 sm:h-40 rounded-2xl overflow-hidden shadow-2xl z-20 border-2 border-[#C99B3C]/50 transform scale-105 transition-all duration-500">
                    <img
                      src={currentImages[carouselIndex % currentImages.length]}
                      alt={`${activeSector.label} Main Asset Center`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Side Image (Partial behind) */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 sm:w-34 h-28 sm:h-34 rounded-xl overflow-hidden shadow-md z-10 opacity-70 transform translate-x-2 scale-90 border border-white/20 transition-all duration-500">
                    <img
                      src={
                        currentImages[
                          (carouselIndex + 1) % currentImages.length
                        ]
                      }
                      alt={`${activeSector.label} Asset Preview Right`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Next Arrow Button */}
                <button
                  type="button"
                  onClick={handleNextCarousel}
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#1A1B24] border border-black/15 dark:border-white/20 text-[#0C0D12] dark:text-white flex items-center justify-center hover:border-[#C99B3C] hover:bg-[#F4DE84]/20 shadow-md transition-all z-30 cursor-pointer shrink-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-[#0C0D12] dark:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
