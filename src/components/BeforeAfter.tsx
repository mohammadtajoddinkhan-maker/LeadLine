import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  Database,
  ArrowRight
} from 'lucide-react';
import { ComparisonItem } from '../types';

export const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  const comparisonData: ComparisonItem[] = [
    {
      id: 'routine',
      category: 'Morning Routine',
      before: {
        title: 'Empty Calendars & Anxiety',
        description:
          'You open your calendar hoping for pipeline, find zero new discovery calls, and spend hours manually browsing LinkedIn trying to think of who to message.',
        sentiment: 'negative',
      },
      after: {
        title: 'Pre-Briefed Calls on Autopilot',
        description:
          'You sip your morning coffee and find 2–3 new calendar bookings with pre-verified company details, prospect pain points, and budget confirmation.',
        sentiment: 'positive',
      },
    },
    {
      id: 'cost',
      category: 'Cost & Transparency',
      before: {
        title: '$5,000/mo Retainers + Ad Spend',
        description:
          'You commit to $15,000 over a 3-month contract plus ad spend. If it doesn’t work, the agency shrugs and claims "it takes 6 months to see momentum."',
        sentiment: 'negative',
      },
      after: {
        title: '$2,000 Setup + $400/mo Flat',
        description:
          'You pay a one-time fee to engineer your entire infrastructure, followed by a flat $400/month for inbox monitoring and optimization. Zero hidden fees, cancel anytime.',
        sentiment: 'positive',
      },
    },
    {
      id: 'communication',
      category: 'Team & Communication',
      before: {
        title: 'Junior Account Reps & Delays',
        description:
          'You get shuffled to a 22-year-old account coordinator who forwards your questions to a ticketing queue and takes 4 business days to reply.',
        sentiment: 'negative',
      },
      after: {
        title: 'Direct Line to Founder Taj Khan',
        description:
          'You have a dedicated Slack or WhatsApp channel directly with Taj. You speak with the expert architect who actually writes the code and copy.',
        sentiment: 'positive',
      },
    },
    {
      id: 'ownership',
      category: 'Asset Ownership',
      before: {
        title: 'Held Hostage by Agency Lock-in',
        description:
          'The agency runs everything under their private software. When you leave, they cut access. You take nothing with you.',
        sentiment: 'negative',
      },
      after: {
        title: '100% Client-Owned Infrastructure',
        description:
          'All secondary domains, DNS records, warmed inboxes, lead databases, and bespoke copywriting sequences belong to you permanently.',
        sentiment: 'positive',
      },
    },
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 bg-[#F7F2EA] border-b border-[#1F2A33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4552B] mb-2">
            <span>Direct Contrast</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1F2A33] tracking-tight">
            How your day shifts with LeadLine
          </h2>
          <p className="text-sm sm:text-base text-[#1F2A33]/70 mt-3">
            Compare the friction of traditional agencies and DIY outreach with the streamlined reality of an automated outbound pipeline.
          </p>

          {/* Interactive Toggle Control */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-[#EAE2D5] rounded-xl border border-[#1F2A33]/10 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-[#1F2A33] text-white shadow-sm'
                  : 'text-[#1F2A33]/70 hover:text-[#1F2A33]'
              }`}
            >
              <XCircle className="w-4 h-4 text-[#C4552B]" />
              <span>The Old Way (Agency / DIY)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('after')}
              className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-[#2E5E8C] text-white shadow-sm'
                  : 'text-[#1F2A33]/70 hover:text-[#1F2A33]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>The LeadLine Way (Taj Khan)</span>
            </button>
          </div>
        </div>

        {/* Crossfade Comparison Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 'before' ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {comparisonData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#EFE9DF] border border-red-300/40 rounded-2xl p-6 shadow-sm space-y-3 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-red-700/80">
                        {item.category}
                      </span>
                      <XCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <h3 className="font-serif-display text-xl text-[#1F2A33]">
                      {item.before.title}
                    </h3>
                    <p className="text-xs text-[#1F2A33]/75 leading-relaxed">
                      {item.before.description}
                    </p>
                    <div className="pt-2 text-[11px] font-medium text-red-700 flex items-center gap-1">
                      <span>Result: High churn & wasted capital</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {comparisonData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-[#2E5E8C]/20 rounded-2xl p-6 shadow-md space-y-3 relative overflow-hidden group hover:border-[#2E5E8C] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2E5E8C]">
                        {item.category}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="font-serif-display text-xl text-[#1F2A33]">
                      {item.after.title}
                    </h3>
                    <p className="text-xs text-[#1F2A33]/80 leading-relaxed">
                      {item.after.description}
                    </p>
                    <div className="pt-2 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
                      <span>Outcome: Consistent booked revenue</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Side-by-Side Summary Bar */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-[#1F2A33]/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C4552B]">
              The Bottom Line
            </div>
            <div className="font-serif-display text-xl sm:text-2xl text-[#1F2A33]">
              Stop paying retainer tax. Build an asset you own forever.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'before' ? 'after' : 'before')}
              className="px-4 py-2 text-xs font-semibold text-[#1F2A33] border border-[#1F2A33]/20 rounded-lg hover:bg-[#1F2A33]/5 transition"
            >
              Toggle View ({activeTab === 'before' ? 'Switch to LeadLine' : 'View Old Way'})
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
