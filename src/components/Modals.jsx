import React, { useState } from 'react';
import Logo from './Logo';
import { X, Send, ArrowUpRight, CheckCircle2, ShieldCheck, Mail, Globe } from 'lucide-react';

export default function Modals({
  activeModal,
  modalData,
  onClose,
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '', venture: 'General' });

  if (!activeModal) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all duration-300 animate-fadeIn">
      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-white border border-black/10 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] text-[#0C0D12] overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 text-[#0C0D12] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. VENTURE DETAIL MODAL */}
        {activeModal === 'venture' && modalData && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] font-bold font-mono">
                VENTURE {modalData.number}
              </span>
              <span className={`text-[10px] uppercase font-bold px-3 py-0.5 rounded-full border ${modalData.statusColor}`}>
                {modalData.status}
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#0C0D12] tracking-tight uppercase">
              {modalData.title}
            </h3>

            <p className="mt-4 text-base text-[#50515C] font-normal leading-relaxed">
              {modalData.description}
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#FAFAFC] border border-black/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8C5B0D]">
                Ecosystem Integration &amp; Scope
              </h4>
              {modalData.id === 'technologies' && (
                <p className="text-sm text-[#0C0D12] font-medium leading-relaxed">
                  Focuses on building scalable digital platforms, custom mobile applications, and collegiate services including Udlivery.
                </p>
              )}
              {modalData.id === 'games' && (
                <p className="text-sm text-[#0C0D12] font-medium leading-relaxed">
                  Building the next world of interactive experiences and interactive entertainment. First gaming title planned for release.
                </p>
              )}
              {modalData.id === 'music' && (
                <p className="text-sm text-[#0C0D12] font-medium leading-relaxed">
                  Audio entertainment arm distributing sound catalogs globally across Spotify, Apple Music, YouTube, and digital platforms.
                </p>
              )}
              {modalData.id === 'books' && (
                <p className="text-sm text-[#0C0D12] font-medium leading-relaxed">
                  Publishing house bringing literature and thought leadership into published form, including “The Universal Antidote” by E.K. Bempoh.
                </p>
              )}
              {modalData.id === 'ringtones' && (
                <p className="text-sm text-[#0C0D12] font-medium leading-relaxed">
                  Digital sound assets and distinctive device audio experiences distributed on platforms such as Zedge with platform expansions planned.
                </p>
              )}
              {modalData.id === 'entertainment' && (
                <p className="text-sm text-[#0C0D12] font-medium leading-relaxed">
                  Immersive media productions, creative arts, and digital content ecosystems designed to connect audiences worldwide across future entertainment formats.
                </p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              <Logo size="sm" showWordmark={true} />
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#D4A338] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

        {/* 2. STORE DOWNLOAD MODAL */}
        {activeModal === 'store' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-[#C99B3C]/10 border border-[#C99B3C]/40 mx-auto flex items-center justify-center text-[#8C5B0D] mb-6">
              <Globe className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black text-[#0C0D12] uppercase tracking-tight">
              UDLIVERY APP STORE
            </h3>

            <p className="mt-3 text-sm text-[#50515C] font-normal max-w-md mx-auto">
              Udlivery is available publicly through mobile app platforms. You are being redirected to the official {modalData?.platform || 'App Store'} listing.
            </p>

            <div className="mt-8 p-4 rounded-xl bg-[#FAFAFC] border border-black/10 text-xs text-[#8C5B0D] font-mono">
              OFFICIAL STORE DESTINATION: https://udlivery.com/app
            </div>

            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="https://udlivery.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F4DE84] to-[#C99B3C] text-black font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Launch App Download</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* 3. CONTACT FORM MODAL */}
        {activeModal === 'contact' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5B0D] uppercase tracking-widest mb-2">
              <Mail className="w-4 h-4" />
              <span>DIRECT INQUIRIES</span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#0C0D12] uppercase tracking-tight">
              CONNECT WITH BEMPOH INC
            </h3>

            <p className="text-xs text-[#50515C] mt-1">
              For corporate ventures, strategic partnerships, media inquiries, or institutional collaboration.
            </p>

            {formSubmitted ? (
              <div className="my-10 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#0C0D12] uppercase">Inquiry Transmitted</h4>
                <p className="text-xs text-[#50515C] mt-1">Thank you. The Bempoh corporate team will evaluate your message.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#50515C] font-bold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="E.g. Alexander Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFC] border border-black/15 text-[#0C0D12] focus:outline-none focus:border-[#C99B3C] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#50515C] font-bold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="alexander@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFC] border border-black/15 text-[#0C0D12] focus:outline-none focus:border-[#C99B3C] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#50515C] font-bold mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Detail your inquiry or proposal..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFC] border border-black/15 text-[#0C0D12] focus:outline-none focus:border-[#C99B3C] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black font-extrabold text-xs uppercase tracking-[0.2em] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Corporate Inquiry</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* 4. LEGAL DOCUMENTS MODAL */}
        {activeModal === 'legal' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5B0D] uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>LEGAL DISCLOSURES</span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#0C0D12] uppercase tracking-tight">
              {modalData?.title || 'Legal Terms'}
            </h3>

            <div className="mt-6 p-6 rounded-2xl bg-[#FAFAFC] border border-black/10 text-xs text-[#50515C] space-y-4 leading-relaxed max-h-[50vh] overflow-y-auto">
              <p>
                <strong>1. Overview:</strong> Bempoh Inc operates as a multi-industry holding company managing subsidiaries across technology, gaming, music, publishing, and digital media.
              </p>
              <p>
                <strong>2. Intellectual Property:</strong> All brand identity assets, logos, trademarks, and publications associated with Bempoh, Bempoh Technologies, Udlivery, Bempoh Games, Bempoh Music, Bempoh Books, and “The Universal Antidote” are protected by applicable trademark and copyright laws.
              </p>
              <p>
                <strong>3. Privacy Standard:</strong> Bempoh respects user privacy and complies with modern data protection guidelines. Personal information collected through inquiries is strictly utilized for corporate communications.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-black/10 text-[#0C0D12] font-bold text-xs uppercase tracking-widest hover:bg-black/20 transition-colors cursor-pointer"
              >
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
