import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAndInvitationProps {
  onOpenBooking: () => void;
}

export const FAQAndInvitation: React.FC<FAQAndInvitationProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Who is LeadLine best suited for?',
      answer:
        'LeadLine is engineered specifically for B2B founders, agency owners, consultants, and enterprise sales teams whose client Lifetime Value (LTV) is at least $3,000+. If one closed customer covers the entire cost of setup and multiple months of service, outbound generates an extraordinary return on investment.',
    },
    {
      id: 'faq-2',
      question: 'How quickly do we start seeing qualified meetings on the calendar?',
      answer:
        'The first 14 days are dedicated to safe domain configuration, DNS records (SPF, DKIM, DMARC), algorithmic warm-up ramp, and laser-targeted ICP list verification. Once outreach campaigns officially fire in Week 3, the first batches of interested replies and booked calls typically arrive within 48 to 72 hours.',
    },
    {
      id: 'faq-3',
      question: 'What tech stack and tools do you configure for me?',
      answer:
        'We use enterprise-grade outbound infrastructure: dedicated Google Workspace or Microsoft 365 sending domains, Smartlead or Instantly for cold deliverability and inbox rotation, Apollo and Sales Navigator for enriched waterfall verification, and custom Webhooks/Zapier to push qualified bookings straight into HubSpot, Pipedrive, or your Google Calendar.',
    },
    {
      id: 'faq-4',
      question: 'Why is ongoing pricing only $400/month when other agencies charge $5,000+?',
      answer:
        'Because I don’t employ high-salaried account managers, fancy downtown offices, or bloated executive layers. After we spend the initial effort building and engineering your infrastructure ($2,000 setup), maintaining inbox health, triaging replies, and testing new copy angles only requires disciplined weekly execution. I pass those massive savings directly to you.',
    },
    {
      id: 'faq-5',
      question: 'Do I own the domains, sequences, and lead lists if I leave?',
      answer:
        'Yes, 100% unconditionally. Unlike traditional agencies that hold your domain assets hostage in their proprietary software, every domain, DNS record, copy sequence, enriched list, and CRM integration is created under your ownership. If you ever pause or leave, you keep everything.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F2EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4552B] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Answered Questions</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1F2A33] tracking-tight">
            Everything you need to know
          </h2>
          <p className="text-sm sm:text-base text-[#1F2A33]/70 mt-3 max-w-xl mx-auto">
            Clear answers about deliverables, ownership, timelines, and how Taj operates your outbound engine.
          </p>
        </div>

        {/* 5 Interactive Accordions */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#1F2A33]/15 overflow-hidden transition-all shadow-sm hover:border-[#1F2A33]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif-display text-xl sm:text-2xl text-[#1F2A33] font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F7F2EA] flex items-center justify-center text-[#1F2A33] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1F2A33] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#1F2A33]/80 leading-relaxed border-t border-[#1F2A33]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Final Invitation Card */}
        <div className="relative rounded-3xl bg-[#1F2A33] text-[#F7F2EA] p-8 sm:p-12 md:p-16 shadow-2xl border border-[#F7F2EA]/15 overflow-hidden text-center">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C4552B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2E5E8C]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4552B]">
              Ready to Fill Your Calendar?
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F7F2EA] leading-tight text-balance">
              Let’s build an outbound pipeline that actually works for you.
            </h2>

            <p className="text-sm sm:text-base text-[#F7F2EA]/80 font-light leading-relaxed">
              Book a 15-minute diagnostic call directly with Taj Khan. We’ll calculate your ideal targets, review your current outreach bottlenecks, and verify if outbound makes economic sense for your business.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#C4552B] hover:bg-[#a6431e] rounded-xl shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <span>Book a 15-Minute Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:leadneedsbytaj@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#F7F2EA] bg-[#F7F2EA]/10 hover:bg-[#F7F2EA]/15 border border-[#F7F2EA]/20 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>leadneedsbytaj@gmail.com</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#F7F2EA]/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                No sales pitch, pure strategy
              </span>
              <span>·</span>
              <span>$2,000 setup · $400/month</span>
              <span>·</span>
              <span>No long-term contracts</span>
            </div>
          </div>
        </div>

        {/* Quiet Clean Footer */}
        <footer className="mt-24 pt-10 border-t border-[#1F2A33]/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#1F2A33]/60">
          <div className="flex items-center gap-2">
            <span className="font-serif-display text-lg font-semibold text-[#1F2A33]">
              LeadLine
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4552B]" />
            <span>Outbound systems engineered by Taj Khan</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#problem" className="hover:text-[#1F2A33] transition">
              The Problem
            </a>
            <a href="#what-i-do" className="hover:text-[#1F2A33] transition">
              What I Do
            </a>
            <a href="#comparison" className="hover:text-[#1F2A33] transition">
              Comparison
            </a>
            <a href="#how-we-start" className="hover:text-[#1F2A33] transition">
              Pricing
            </a>
            <a href="#about-me" className="hover:text-[#1F2A33] transition">
              About
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} LeadLine. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};
