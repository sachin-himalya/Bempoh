import React, { useState } from 'react';
import { Utensils, Package, UserCheck, DollarSign, MapPin, Smartphone, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function UdliverySection({ onStoreClick }) {
  const [activeTab, setActiveTab] = useState('dining');

  const tabs = [
    { id: 'dining', label: 'DINING', icon: Utensils, text: 'Order food straight from university dining halls & local campus spots.' },
    { id: 'packages', label: 'PACKAGES', icon: Package, text: 'Request mailroom package pick-up and campus dormitory deliveries.' },
    { id: 'items', label: 'PERSONAL ITEMS', icon: UserCheck, text: 'Have friends or student couriers bring chargers, notes, or essentials.' },
    { id: 'earnings', label: 'STUDENT EARNINGS', icon: DollarSign, text: 'Earn money on your own schedule between lectures by completing deliveries.' },
  ];

  return (
    <section id="udlivery" className="relative w-full bg-gradient-to-b from-[#050505] via-[#0D0E12] to-[#050505] py-24 sm:py-32 px-6 overflow-hidden border-t border-white/[0.08]">
      {/* Animated Subtle Route Line Graphics */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 Q300,50 600,400 T1400,200" fill="none" stroke="url(#goldRoute)" strokeWidth="2" strokeDasharray="8 8" />
        <path d="M0,600 Q400,300 800,700 T1600,400" fill="none" stroke="url(#goldRoute)" strokeWidth="1.5" strokeDasharray="6 6" />
        <defs>
          <linearGradient id="goldRoute" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A97622" />
            <stop offset="50%" stopColor="#F4DE84" />
            <stop offset="100%" stopColor="#C99B3C" />
          </linearGradient>
        </defs>
      </svg>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99B3C]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99B3C]/10 border border-[#C99B3C]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F4DE84] animate-ping" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#F4DE84] uppercase">
              BEMPOH TECHNOLOGIES PRESENTS
            </span>
          </div>

          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            UDLIVERY
          </h2>

          <p className="mt-4 text-2xl sm:text-3xl font-light text-[#E2C268] tracking-tight">
            Campus delivery, reimagined by students.
          </p>

          <p className="mt-6 text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            A university-focused platform connecting students who need items delivered with students who want to earn by delivering them.
          </p>

          {/* Large Core Concept Tagline */}
          <div className="mt-8 py-3 px-6 inline-block rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-white uppercase">
              “STUDENTS ORDER. <span className="text-gold-gradient">STUDENTS DELIVER.”</span>
            </span>
          </div>
        </div>

        {/* Content Showcase Grid: Left Info & Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: 4 Minimal Feature Indicators */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#A7A7A7] font-semibold mb-1">
              Core Campus Features
            </h3>

            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'bg-[#121319] border-[#C99B3C] shadow-[0_10px_30px_rgba(201,155,60,0.15)] translate-x-2'
                      : 'bg-black/40 border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-gradient-to-br from-[#F4DE84] to-[#C99B3C] text-black font-bold' : 'bg-white/5 text-[#E2C268]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold tracking-widest text-white uppercase">
                          {t.label}
                        </span>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-[#F4DE84]" />}
                      </div>
                      <p className="text-xs text-[#A7A7A7] font-light mt-1">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Store Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onStoreClick('App Store')}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#F4DE84] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Smartphone className="w-4 h-4" />
                <span>View on App Store</span>
              </button>

              <button
                onClick={() => onStoreClick('Google Play')}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-[#C99B3C]" />
                <span>Get it on Google Play</span>
              </button>
            </div>
          </div>

          {/* Right Side: Proportional Smartphone UI Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="keep-dark relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/17.5] rounded-[44px] bg-[#0B0C10] border-[9px] border-[#1E1F26] shadow-[0_0_70px_rgba(201,155,60,0.2)] p-3.5 flex flex-col justify-between overflow-hidden group">
              
              {/* Phone Camera Notch */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-26 h-4 bg-[#1E1F26] rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black/80" />
              </div>

              {/* Dynamic App UI Content inside Mockup */}
              <div className="keep-dark relative z-10 pt-7 flex-1 flex flex-col justify-between bg-[#0B0C10] rounded-[32px] p-4 border border-white/10 text-white overflow-hidden">
                
                {/* Header App Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6.5 h-6.5 rounded-lg bg-[#C99B3C] flex items-center justify-center font-extrabold text-black text-[11px]">
                      U
                    </div>
                    <span className="font-extrabold tracking-widest text-xs uppercase">UDLIVERY</span>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C99B3C]/20 border border-[#C99B3C]/40 text-[9px] font-bold text-[#F4DE84]">
                    <MapPin className="w-3 h-3" />
                    <span>Campus Zone A</span>
                  </div>
                </div>

                {/* Main Screen Preview based on activeTab */}
                <div className="my-auto py-3 flex flex-col gap-3">
                  {activeTab === 'dining' && (
                    <div className="space-y-2.5">
                      <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                        <div className="text-[10px] text-[#A7A7A7] uppercase tracking-wider font-semibold">Dining Hall Delivery</div>
                        <div className="text-xs font-bold text-white mt-0.5">North Quad Commons &bull; Station 4</div>
                        <div className="mt-2 text-[10px] text-[#E2C268] font-medium flex items-center justify-between">
                          <span>Est. Arrival: 14 mins</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px]">Courier Assigned</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-[10px] text-[#A7A7A7] uppercase tracking-wider font-semibold">Popular Campus Spots</div>
                        <div className="text-xs font-semibold text-white/90 mt-0.5">Campus Cafe, Student Union Grille</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'packages' && (
                    <div className="space-y-2.5">
                      <div className="p-3.5 rounded-xl bg-[#C99B3C]/10 border border-[#C99B3C]/30">
                        <div className="text-[10px] text-[#F4DE84] uppercase tracking-wider font-bold">Mailroom Package Dispatch</div>
                        <div className="text-xs font-bold text-white mt-0.5">Tracking ID: #UD-8842-CAMPUS</div>
                        <div className="text-[10px] text-[#A7A7A7] mt-0.5">Central Post Depot &rarr; Dorm 4B</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'items' && (
                    <div className="space-y-2.5">
                      <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                        <div className="text-[10px] text-[#A7A7A7] uppercase tracking-wider font-semibold">Personal Peer Request</div>
                        <div className="text-xs font-bold text-white mt-0.5">MacBook Charger & Notebook</div>
                        <div className="text-[10px] text-[#E2C268] mt-0.5">Science Library Desk 12</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'earnings' && (
                    <div className="space-y-2.5">
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#1A1913] to-[#2B2313] border border-[#C99B3C]/40 text-center">
                        <div className="text-[10px] text-[#A7A7A7] uppercase tracking-widest font-bold">Student Udliverer Portal</div>
                        <div className="text-2xl font-black text-[#F4DE84] mt-0.5">$142.50</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">8 Deliveries Completed Today</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Abstract Interactive Campus Map Graphic inside Mockup */}
                <div className="h-24 rounded-xl bg-[#13141C] border border-white/10 relative overflow-hidden flex items-center justify-center p-2">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-7 h-7 rounded-full bg-[#C99B3C] text-black font-extrabold flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[8.5px] font-bold text-white tracking-widest uppercase mt-1">Live Campus Routing</span>
                  </div>
                </div>

                {/* Bottom Order CTA inside Mockup */}
                <div className="pt-2">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F4DE84] to-[#C99B3C] text-black font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                    Request Delivery Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
