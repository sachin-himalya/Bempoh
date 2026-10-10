import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Bempoh?',
      answer:
        'Bempoh is a multi-industry holdings company building ventures, digital products, and creative experiences across technology, gaming, music, publishing, and the industries of tomorrow. Guided by the philosophy "From Heaven to Earth. From Future to Now."',
    },
    {
      question: 'What is the vision behind Bempoh?',
      answer:
        'Guided by the principles "We don\'t wait for the future. We build toward it," Bempoh brings possibility into reality. The vision is to build an interconnected ecosystem that continues expanding across generations and future markets.',
    },
    {
      question: 'What is the Bempoh ecosystem?',
      answer:
        'The Bempoh ecosystem is a multi-sector constellation of interconnected ventures operating under one ambition: creating what comes next. It encompasses divisions such as Bempoh Technologies, Bempoh Games, Bempoh Music, Bempoh Books, Bempoh Ringtones, and Bempoh Entertainment.',
    },
    {
      question: 'What industries does Bempoh focus on?',
      answer:
        'Bempoh focuses on technology, interactive gaming, music production and global audio distribution, book publishing, digital media networks, and frontier incubations in emerging technologies.',
    },
    {
      question: 'How can I explore Bempoh companies?',
      answer:
        'You can explore Bempoh companies by browsing the Bempoh Ecosystem grid or navigating the interactive Industry Orbit section on this website, where you can inspect individual venture details and statuses.',
    },
    {
      question: 'How can I connect with Bempoh?',
      answer:
        'You can connect with Bempoh by opening the Contact inquiry modal from the website footer, or by engaging with Bempoh content across official streaming channels including YouTube, Spotify, and Apple Music.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-white dark:bg-[#070709] py-28 sm:py-36 px-6 border-t border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99B3C]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Eyebrow & Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99B3C]/10 border border-[#C99B3C]/30 mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-[#8C5B0D] dark:text-[#E2C268]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#8C5B0D] dark:text-[#E2C268] uppercase">
              GOT QUESTIONS?
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C0D12] dark:text-white tracking-tight leading-none uppercase transition-colors duration-300">
            FREQUENTLY ASKED{' '}
            <span className="text-gold-gradient font-serif-display italic font-normal text-5xl sm:text-7xl block sm:inline">
              QUESTIONS
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50515C] dark:text-zinc-400 font-normal tracking-wide transition-colors duration-300">
            Everything you need to know about Bempoh.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group rounded-2xl bg-white dark:bg-[#0E0F14] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#C99B3C]/60 dark:border-[#C99B3C]/70 shadow-[0_10px_30px_rgba(201,155,60,0.12)] dark:shadow-[0_10px_30px_rgba(201,155,60,0.2)]'
                    : 'border-black/[0.08] dark:border-white/10 hover:border-[#C99B3C]/40 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg md:text-xl font-bold transition-colors ${
                      isOpen
                        ? 'text-[#8C5B0D] dark:text-[#E2C268]'
                        : 'text-[#0C0D12] dark:text-white group-hover:text-[#8C5B0D] dark:group-hover:text-[#E2C268]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#F4DE84] via-[#C99B3C] to-[#A97622] text-black border-[#F4DE84] shadow-[0_0_15px_rgba(201,155,60,0.5)]'
                        : 'bg-black/5 dark:bg-white/10 text-[#8C5B0D] dark:text-[#E2C268] border-black/10 dark:border-white/15 group-hover:bg-[#C99B3C] group-hover:text-black'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-black stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Answer Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 sm:pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden px-6 sm:px-8">
                    <p className="text-sm sm:text-base text-[#50515C] dark:text-zinc-400 font-normal leading-relaxed border-t border-black/[0.06] dark:border-white/10 pt-4 transition-colors duration-300">
                      {faq.answer}
                    </p>
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
