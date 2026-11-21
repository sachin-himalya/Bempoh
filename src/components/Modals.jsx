import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { X, Send, ArrowUpRight, CheckCircle2, Mail, Globe, AlertCircle } from 'lucide-react';

export default function Modals({
  activeModal,
  modalData,
  onClose,
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [contactData, setContactData] = useState({ name: '', email: '', message: '', venture: 'General' });

  const handleClose = () => {
    setErrorMessage('');
    onClose();
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeModal) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeModal]);

  if (!activeModal) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = contactData.name.trim();
    const trimmedEmail = contactData.email.trim();
    const trimmedMessage = contactData.message.trim();

    // Validation
    if (!trimmedName) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!trimmedEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!trimmedMessage) {
      setErrorMessage('Please enter your message.');
      return;
    }

    const subject = `New Inquiry from Bempoh Website – ${trimmedName}`;
    const body = `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`;
    const toEmail = 'bempohllc@gmail.com';

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Detect mobile vs desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Mobile: mailto link
      const mailtoUrl = `mailto:${toEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoUrl;
    } else {
      // Desktop: Gmail compose in a new tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodedSubject}&body=${encodedBody}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }

    setFormSubmitted(true);
    setContactData({ name: '', email: '', message: '', venture: 'General' });

    setTimeout(() => {
      setFormSubmitted(false);
      handleClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={handleClose}
    >
      {/* Modal Surface */}
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0E0F14] border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-[#0C0D12] dark:text-white overflow-hidden max-h-[90vh] overflow-y-auto transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 hover:bg-black/10 dark:hover:bg-white/20 text-[#0C0D12] dark:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. VENTURE DETAIL MODAL */}
        {activeModal === 'venture' && modalData && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C5B0D] dark:text-[#E2C268] font-bold font-mono">
                VENTURE {modalData.number}
              </span>
              <span className={`text-[10px] uppercase font-bold px-3 py-0.5 rounded-full border ${modalData.statusColor}`}>
                {modalData.status}
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#0C0D12] dark:text-white tracking-tight uppercase transition-colors duration-300">
              {modalData.title}
            </h3>

            <p className="mt-4 text-base text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed transition-colors duration-300">
              {modalData.description}
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/10 dark:border-white/10 space-y-4 transition-colors duration-300">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8C5B0D] dark:text-[#E2C268]">
                Ecosystem Integration &amp; Scope
              </h4>
              {modalData.scopeText ? (
                <p className="text-sm text-[#0C0D12] dark:text-zinc-200 font-medium leading-relaxed">
                  {modalData.scopeText}
                </p>
              ) : (
                <>
                  {console.warn(`Missing scopeText for venture: ${modalData.title}`)}
                  <p className="text-sm text-[#50515C] dark:text-zinc-400 italic">
                    Details coming soon.
                  </p>
                </>
              )}
              {modalData.scopePillText && (
                <div className="mt-4 flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-semibold flex items-center gap-1.5 cursor-not-allowed">
                    {modalData.scopePillText}
                  </span>
                </div>
              )}
              {modalData.scopePillText2 && (
                <div className="mt-4 flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs uppercase tracking-wider text-[#50515C] dark:text-zinc-400 font-semibold flex items-center gap-1.5 cursor-not-allowed">
                    {modalData.scopePillText2}
                  </span>
                </div>
              )}
              {modalData.scopeLink && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={modalData.scopeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D4A338] transition-colors cursor-pointer"
                  >
                    <span>{modalData.scopeLinkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  {modalData.scopeLink2 && (
                    <a
                      href={modalData.scopeLink2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D4A338] transition-colors cursor-pointer"
                    >
                      <span>{modalData.scopeLinkText2}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {modalData.scopeLink3 && (
                    <a
                      href={modalData.scopeLink3}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#0C0D12] dark:text-white border border-black/15 dark:border-white/15 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-[#C99B3C] transition-colors cursor-pointer"
                    >
                      <span>{modalData.scopeLinkText3}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
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
            <div className="w-16 h-16 rounded-2xl bg-[#C99B3C]/10 dark:bg-[#C99B3C]/20 border border-[#C99B3C]/40 mx-auto flex items-center justify-center text-[#8C5B0D] dark:text-[#E2C268] mb-6">
              <Globe className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black text-[#0C0D12] dark:text-white uppercase tracking-tight transition-colors duration-300">
              UDLIVERY APP DOWNLOAD
            </h3>

            <p className="mt-3 text-sm text-[#50515C] dark:text-zinc-400 font-normal max-w-md mx-auto transition-colors duration-300">
              Udlivery is available publicly through mobile app platforms. Download from the official store listings below.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/udlivery/id6443650358"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#D4A338] transition-all flex items-center justify-center gap-2"
              >
                <span>Apple App Store</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://play.google.com/store/apps/dev?id=7747807589744614244&hl=en_SG"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#C99B3C] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#D4A338] transition-all flex items-center justify-center gap-2"
              >
                <span>Google Play Store</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* 3. CONTACT FORM MODAL */}
        {activeModal === 'contact' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5B0D] dark:text-[#E2C268] uppercase tracking-widest mb-2">
              <Mail className="w-4 h-4" />
              <span>DIRECT INQUIRIES</span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#0C0D12] dark:text-white uppercase tracking-tight transition-colors duration-300">
              CONNECT WITH BEMPOH INC
            </h3>

            <p className="text-xs text-[#50515C] dark:text-zinc-400 mt-1 transition-colors duration-300">
              For corporate ventures, strategic partnerships, media inquiries, or institutional collaboration.
            </p>

            {formSubmitted ? (
              <div className="my-10 p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#0C0D12] dark:text-white uppercase">Opening your email app…</h4>
                <p className="text-xs text-[#50515C] dark:text-zinc-400 mt-1">Directing you to compose your message to bempohllc@gmail.com.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium flex items-start gap-2.5 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                    <span className="flex-1 leading-relaxed">{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#50515C] dark:text-zinc-400 font-bold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => {
                      if (errorMessage) setErrorMessage('');
                      setContactData({ ...contactData, name: e.target.value });
                    }}
                    placeholder="E.g. Alexander Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/15 dark:border-white/15 text-[#0C0D12] dark:text-white placeholder:text-[#50515C]/60 dark:placeholder:text-zinc-500 focus:outline-none focus:border-[#C99B3C] text-sm transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#50515C] dark:text-zinc-400 font-bold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => {
                      if (errorMessage) setErrorMessage('');
                      setContactData({ ...contactData, email: e.target.value });
                    }}
                    placeholder="alexander@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/15 dark:border-white/15 text-[#0C0D12] dark:text-white placeholder:text-[#50515C]/60 dark:placeholder:text-zinc-500 focus:outline-none focus:border-[#C99B3C] text-sm transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#50515C] dark:text-zinc-400 font-bold mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => {
                      if (errorMessage) setErrorMessage('');
                      setContactData({ ...contactData, message: e.target.value });
                    }}
                    placeholder="Detail your inquiry or proposal..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFC] dark:bg-[#15161E] border border-black/15 dark:border-white/15 text-[#0C0D12] dark:text-white placeholder:text-[#50515C]/60 dark:placeholder:text-zinc-500 focus:outline-none focus:border-[#C99B3C] text-sm transition-colors duration-300 resize-none"
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
      </div>
    </div>
  );
}
