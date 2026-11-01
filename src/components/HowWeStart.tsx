import React from 'react';
import { 
  PhoneCall, 
  Wrench, 
  Rocket, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { TimelineStep } from '../types';

interface HowWeStartProps {
  onOpenBooking: () => void;
}

export const HowWeStart: React.FC<HowWeStartProps> = ({ onOpenBooking }) => {
  const steps: TimelineStep[] = [
    {
      step: '01',
      title: 'The 15-Minute Blueprint Call',
      duration: 'Day 1',
      description:
        'We jump on a quick 15-minute call to unpack your target customer profile, average contract value, best client wins, and current pipeline bottlenecks. No pitch deck, just real math.',
      milestones: [
        'Define Ideal Customer Profile (ICP) & decision-maker titles',
        'Identify your unique hook, case studies, and proof points',
        'Calculate target monthly appointment requirements',
      ],
    },
    {
      step: '02',
      title: 'Infrastructure & Sequence Build',
      duration: 'Days 2–14',
      description:
        'Taj acquires secondary domains, configures bulletproof SPF/DKIM/DMARC records, writes custom multi-step outbound sequences, and sets up automated CRM routing.',
      milestones: [
        '3–5 isolated secondary domains registered and warmed',
        '1,000+ verified decision-maker records enriched and verified',
        '3 bespoke messaging sequences with pain-based value hooks',
        'Automated calendar scheduling & CRM sync fully integrated',
      ],
    },
    {
      step: '03',
      title: 'Launch & First Booked Calls',
      duration: 'Days 15+',
      description:
        'We fire the warmed campaigns. As replies come in, Taj personally triages interested prospects, handles objections, and schedules qualified discovery calls right onto your calendar.',
      milestones: [
        'First batch of outbound messages safely dispatched',
        'Replies triaged and qualified within 2 business hours',
        'Calendar invites delivered with prospect background dossier',
        'Weekly optimization sync to double down on winning angles',
      ],
    },
  ];

  return (
    <section id="how-we-start" className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#1F2A33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4552B] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Clear, Predictable Onboarding</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1F2A33] tracking-tight">
            How we go from zero to booked calls
          </h2>
          <p className="text-sm sm:text-base text-[#1F2A33]/70 mt-3">
            A simple, vertical onboarding sequence that gets your outbound machine live in 14 days without pulling you away from running your business.
          </p>
        </div>

        {/* Timeline & Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Vertical Timeline with Filled Accent Line */}
          <div className="lg:col-span-7 relative">
            {/* The Vertical Accent Line */}
            <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#C4552B] via-[#2E5E8C] to-[#1F2A33]" />

            <div className="space-y-10 relative">
              {steps.map((item, idx) => (
                <div key={item.step} className="flex items-start gap-4 sm:gap-6 group">
                  {/* Step Node */}
                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#F7F2EA] border-2 border-[#1F2A33] text-[#1F2A33] flex items-center justify-center font-serif-display text-xl sm:text-2xl font-bold shrink-0 shadow-md group-hover:border-[#C4552B] group-hover:text-[#C4552B] transition-colors">
                    {item.step}
                  </div>

                  {/* Step Body */}
                  <div className="flex-1 bg-white border border-[#1F2A33]/15 rounded-2xl p-6 sm:p-7 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif-display text-xl sm:text-2xl text-[#1F2A33]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#F7F2EA] text-[#2E5E8C] rounded-md border border-[#1F2A33]/10">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1F2A33]/80 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-[#1F2A33]/10 space-y-2">
                      {item.milestones.map((milestone, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#1F2A33]/80">
                          <Check className="w-3.5 h-3.5 text-[#C4552B] shrink-0 mt-0.5" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Card: $2,000 Setup + $400/month */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#1F2A33] text-[#F7F2EA] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#F7F2EA]/15 relative overflow-hidden">
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-[#C4552B] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-sm">
                Transparent Pricing
              </div>

              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C4552B]">
                  The Complete Package
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#F7F2EA]">
                  One clear price. Zero agency bloat.
                </h3>
                <p className="text-xs text-[#F7F2EA]/75 leading-relaxed">
                  Everything you need to launch, warm, and scale an outbound appointment engine. No percentage of revenue games or surprise add-ons.
                </p>
              </div>

              {/* Price Figures */}
              <div className="my-8 py-6 border-y border-[#F7F2EA]/15 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-[#F7F2EA]/70">Full Setup & Architecture</span>
                  <span className="font-serif-display text-3xl font-bold text-[#F7F2EA] tabular-nums">
                    $2,000 <span className="text-xs font-sans font-normal text-[#F7F2EA]/60">one-time</span>
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-[#F7F2EA]/70">Monthly Maintenance & Triage</span>
                  <span className="font-serif-display text-3xl font-bold text-[#C4552B] tabular-nums">
                    $400 <span className="text-xs font-sans font-normal text-[#F7F2EA]/60">/ month</span>
                  </span>
                </div>

                <div className="text-[11px] text-[#F7F2EA]/60 italic">
                  * Month-to-month. Cancel anytime with 14 days notice. You keep 100% of all assets.
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-2.5 text-xs text-[#F7F2EA]/90 mb-8">
                <div className="font-semibold text-white tracking-wide uppercase text-[11px] mb-1">
                  What is included:
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                  <span>3–5 secondary sending domains + full DNS setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                  <span>14-day progressive algorithmic warm-up ramp</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                  <span>Bespoke 3-angle cold outreach copy sequences</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                  <span>1,000+ enriched decision-maker accounts</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                  <span>Daily reply triage, objection handling & booking</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                  <span>Direct WhatsApp or Slack channel with Taj Khan</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-4 text-center text-sm font-semibold text-white bg-[#C4552B] hover:bg-[#a8441f] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer transform active:scale-98"
              >
                <span>Book a 15-Minute Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 text-center text-[11px] text-[#F7F2EA]/60 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligation · Direct talk with Taj</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
