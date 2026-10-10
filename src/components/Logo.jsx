import React from 'react';

export default function Logo({ size = 'md', className = '', glow = false }) {
  // Strict width scaling maintaining exact original image aspect ratio
  const sizeClasses = {
    sm: 'w-[100px] sm:w-[120px] h-auto',
    md: 'w-[140px] sm:w-[170px] h-auto',
    lg: 'w-[200px] sm:w-[230px] h-auto',
    hero: 'w-[160px] sm:w-[210px] md:w-[280px] h-auto',
    footer: 'w-[120px] sm:w-[150px] h-auto',
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Optional Ambient Soft Golden Radial Glow BEHIND the logo container */}
      {glow && (
        <div 
          className="absolute inset-0 bg-radial-gold opacity-30 blur-2xl pointer-events-none scale-150 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201, 154, 61, 0.25) 0%, rgba(5, 5, 5, 0) 75%)',
          }}
        />
      )}

      {/* EXACT UPLOADED OFFICIAL BEMPOH LOGO IMAGE */}
      <img
        src="/bempoh-logo.png"
        alt="Bempoh Logo"
        className={`relative z-10 ${sizeClasses[size] || sizeClasses.md} object-contain transition-transform duration-500 hover:scale-105 pointer-events-auto`}
        loading="eager"
      />
    </div>
  );
}
