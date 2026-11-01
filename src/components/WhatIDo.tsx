import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Server, 
  Mail, 
  Filter, 
  CalendarCheck,
  Check,
  Layers
} from 'lucide-react';
import { PipelineStage } from '../types';

export const WhatIDo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const stages: PipelineStage[] = [
    {
      id: 'sourcing',
      number: '01',
      title: 'Precision ICP & Data Enrichment',
      subtitle: 'Target Only Real Decision Makers',
      description:
        'We map your Total Addressable Market and run multi-source waterfall enrichment across Apollo, Sales Navigator, and verified direct dials. No generic info@ addresses or dead companies.',
      deliverables: [
        'Custom ICP definition with company size & tech stack filters',
        'Verified direct B2B work emails (97%+ delivery rate)',
        'Cleaned, scrubbed, and deduplicated target accounts list',
        'Custom intent signals & job change triggers',
      ],
      metric: '97%+ Delivery Rate',
      iconName: 'target',
    },
    {
      id: 'infrastructure',
      number: '02',
      title: 'Secondary Domain & Inbox Warming',
      subtitle: 'Protect Your Primary Brand Domain',
      description:
        'We purchase and configure 3–5 secondary domains with custom SPF, DKIM, DMARC, and MX records. We run a gradual 14-day warm-up cycle so your emails land in the primary inbox, never spam.',
      deliverables: [
        '3 to 5 isolated secondary sending domains',
        'Strict SPF, DKIM, DMARC, and MX record hardening',
        'Custom tracking domain setup for zero spam triggers',
        '14-day progressive algorithmic warm-up ramp',
      ],
      metric: '0 Spam Flags',
      iconName: 'server',
    },
    {
      id: 'copywriting',
      number: '03',
      title: 'High-Conversion Outbound Messaging',
      subtitle: 'Pain-Oriented Copy That Prospects Reply To',
      description:
        'No AI robot slop. Taj personally writes 3-to-4 step conversational sequences based on your unique value proposition, case studies, and exact prospect objections.',
      deliverables: [
        'Bespoke 4-step sequence angles tested in parallel',
        'Soft-CTA conversational hooks that start discussions',
        'Personalized dynamic variables (recent company news, hiring)',
        'Continuous A/B testing of subject lines & value propositions',
      ],
      metric: '4–8% Reply Rate',
      iconName: 'mail',
    },
    {
      id: 'qualification',
      number: '04',
      title: 'Fast Lead Triage & Qualification',
      subtitle: 'Never Let a Warm Lead Go Cold',
      description:
        'Speed to lead is everything. When an interested prospect replies, Taj triages the response within 2 hours, handles objections, and filters out non-qualifiers before scheduling.',
      deliverables: [
        '< 2 hour response time during business hours',
        'Pre-qualification questioning (revenue, team size, urgency)',
        'Objection handling scripts tailored to your offer',
        'Automatic routing to your sales team with meeting notes',
      ],
      metric: '< 2h Response Time',
      iconName: 'filter',
    },
    {
      id: 'booking',
      number: '05',
      title: 'Direct Calendar Placement & CRM Sync',
      subtitle: 'Qualified Calls Booked on Your Calendar',
      description:
        'Prospects pick a time on your calendar. You receive a calendar invite complete with company context, LinkedIn profiles, and verified pain points so you can close.',
      deliverables: [
        'Direct synchronization with Google Calendar & Outlook',
        'Automatic pre-meeting reminder sequences to prevent no-shows',
        'Prospect dossier with title, company, and key conversation notes',
        'Full Zapier / Make integration into HubSpot, Pipedrive, or Notion',
      ],
      metric: '85%+ Show-up Rate',
      iconName: 'calendar',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
  };

  const currentStage = stages[activeIndex];

  const getIcon = (name: string) => {
    switch (name) {
      case 'target':
        return <Target className="w-6 h-6 text-[#C4552B]" />;
      case 'server':
        return <Server className="w-6 h-6 text-[#2E5E8C]" />;
      case 'mail':
        return <Mail className="w-6 h-6 text-[#C4552B]" />;
      case 'filter':
        return <Filter className="w-6 h-6 text-[#2E5E8C]" />;
      case 'calendar':
        return <CalendarCheck className="w-6 h-6 text-[#C4552B]" />;
      default:
        return <Layers className="w-6 h-6 text-[#2E5E8C]" />;
    }
  };

  return (
    <section id="what-i-do" className="py-24 md:py-32 bg-[#F7F2EA] border-b border-[#1F2A33]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4552B] mb-2">
              <Layers className="w-4 h-4" />
              <span>The Outbound Engine</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1F2A33] tracking-tight">
              What I build for you, step by step
            </h2>
            <p className="text-sm sm:text-base text-[#1F2A33]/70 mt-2 max-w-xl">
              A battle-tested 5-stage pipeline engineered to put verified decision-makers on your calendar every single week.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-[#1F2A33]/60 mr-2">
              <strong className="text-[#1F2A33] font-bold">{activeIndex + 1}</strong> of {stages.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous pipeline stage"
              className="p-3 rounded-full border border-[#1F2A33]/20 bg-white text-[#1F2A33] hover:bg-[#1F2A33] hover:text-[#F7F2EA] transition-all cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next pipeline stage"
              className="p-3 rounded-full border border-[#1F2A33]/20 bg-white text-[#1F2A33] hover:bg-[#1F2A33] hover:text-[#F7F2EA] transition-all cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Tabs Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeIndex === idx
                  ? 'bg-[#1F2A33] text-[#F7F2EA] shadow-md'
                  : 'bg-white text-[#1F2A33]/70 border border-[#1F2A33]/15 hover:border-[#1F2A33]/40'
              }`}
            >
              <span className={`text-[10px] font-mono ${activeIndex === idx ? 'text-[#C4552B]' : 'text-[#1F2A33]/40'}`}>
                {stage.number}
              </span>
              <span>{stage.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Card Showcase */}
        <div className="relative" ref={sliderRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white border border-[#1F2A33]/15 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F7F2EA] rounded-2xl border border-[#1F2A33]/10">
                    {getIcon(currentStage.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#C4552B] tracking-wider">
                      PHASE {currentStage.number}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1F2A33]">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#2E5E8C]">
                  {currentStage.subtitle}
                </div>

                <p className="text-sm sm:text-base text-[#1F2A33]/80 leading-relaxed">
                  {currentStage.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-[#1F2A33] uppercase tracking-wider">
                    Included Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1F2A33]/85">
                        <Check className="w-4 h-4 text-[#C4552B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Diagnostic Box */}
              <div className="lg:col-span-5 bg-[#F7F2EA] rounded-2xl p-6 sm:p-8 border border-[#1F2A33]/10 space-y-5">
                <div className="flex items-center justify-between border-b border-[#1F2A33]/10 pb-4">
                  <span className="text-xs font-semibold text-[#1F2A33]/60 uppercase tracking-wider">
                    Benchmark Metric
                  </span>
                  <span className="font-serif-display text-xl text-[#2E5E8C] font-semibold tabular-nums">
                    {currentStage.metric}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-[#1F2A33]/80">
                  <div className="font-semibold text-[#1F2A33]">Architect's Note:</div>
                  <p className="leading-relaxed italic">
                    "Most people fail at this phase because they cut corners on technical hygiene or buy generic scraped lists. We inspect every record and ensure 100% domain isolation before sending the first message."
                  </p>
                  <div className="pt-2 text-[11px] text-[#1F2A33]/60">
                    — Taj Khan, LeadLine
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1F2A33]/10 flex items-center justify-between text-xs">
                  <span className="text-[#1F2A33]/70">Infrastructure Status</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Production Ready
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Horizontal Quick Scroller */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-3">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeIndex === idx
                  ? 'bg-[#1F2A33] text-[#F7F2EA] border-[#1F2A33] shadow-md scale-102'
                  : 'bg-white text-[#1F2A33] border-[#1F2A33]/10 hover:border-[#1F2A33]/30'
              }`}
            >
              <div className={`text-xs font-mono font-bold ${activeIndex === idx ? 'text-[#C4552B]' : 'text-[#1F2A33]/50'}`}>
                {stage.number}
              </div>
              <div className="text-xs font-semibold mt-1 line-clamp-1">
                {stage.title}
              </div>
              <div className={`text-[11px] mt-0.5 line-clamp-1 ${activeIndex === idx ? 'text-[#F7F2EA]/70' : 'text-[#1F2A33]/60'}`}>
                {stage.metric}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
