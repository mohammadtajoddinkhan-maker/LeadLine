import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import tajPortrait from '../assets/images/taj_khan_portrait_1793553681531.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#2E5E8C]/5 via-[#C4552B]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Promise Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Direct Access Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4552B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4552B]" />
              <span>Outbound Pipeline Architecture</span>
              <span className="text-[#1F2A33]/40">·</span>
              <span className="text-[#1F2A33]/70 font-normal normal-case">Direct 1-on-1 with Taj Khan</span>
            </div>

            {/* Promise Headline in Instrument Serif */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#1F2A33] leading-[1.08] tracking-tight text-balance">
              Predictable, qualified sales meetings on your calendar — without the bloated agency markup.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#1F2A33]/80 leading-relaxed max-w-2xl font-light">
              Most lead gen agencies charge $5,000/month just to hand you off to a junior coordinator. LeadLine is different: I personally build your outbound infrastructure, warm your domains, craft laser-targeted messaging, and deliver confirmed appointments for <strong className="font-semibold text-[#1F2A33]">$2,000 setup and $400/month</strong>.
            </p>

            {/* Unboxed Metadata Trust Markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#1F2A33]/75 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2E5E8C]" />
                100% Owned Assets & Domains
              </span>
              <span className="text-[#1F2A33]/30" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C4552B]" />
                Direct Communication (No Account Managers)
              </span>
              <span className="text-[#1F2A33]/30" aria-hidden="true">·</span>
              <span className="font-medium text-[#1F2A33]">
                Month-to-Month Flexibility
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#C4552B] hover:bg-[#b04720] rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <span>Book a 15-Minute Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#what-i-do"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1F2A33] bg-white hover:bg-[#1F2A33]/5 border border-[#1F2A33]/20 rounded-xl transition-colors"
              >
                <span>How the System Works</span>
                <ChevronDown className="w-4 h-4 text-[#1F2A33]/60" />
              </a>
            </div>

            {/* Micro reassurance */}
            <div className="text-xs text-[#1F2A33]/60 flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>Currently accepting 2 new B2B client pipelines for this quarter</span>
            </div>
          </div>

          {/* Right Column: Arch Portrait with Floating Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative architectural frame */}
              <div className="relative mx-auto w-full aspect-[3/4] rounded-t-[140px] sm:rounded-t-[170px] rounded-b-3xl overflow-hidden border-2 border-[#1F2A33]/15 shadow-2xl bg-[#1F2A33]/5">
                <img
                  src={tajPortrait}
                  alt="Taj Khan, Founder and Pipeline Architect at LeadLine"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle bottom gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1F2A33]/80 via-[#1F2A33]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="font-medium tracking-wide">Taj Khan</span>
                  <span className="text-white/80">leadneedsbytaj@gmail.com</span>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#F7F2EA] text-[#1F2A33] border border-[#1F2A33]/20 rounded-2xl p-4 shadow-xl max-w-[270px] backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2E5E8C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1F2A33] leading-tight">
                      LeadLine Architect
                    </div>
                    <div className="text-[11px] text-[#1F2A33]/70 mt-0.5">
                      Direct WhatsApp & Slack channel with Taj. No junior account managers.
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary corner accent badge */}
              <div className="absolute -top-3 -right-3 bg-[#1F2A33] text-[#F7F2EA] px-3.5 py-1.5 rounded-full text-[11px] font-semibold border border-[#F7F2EA]/20 shadow-md">
                100% Done-For-You
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof / KPI Strip Below Hero */}
        <div className="mt-20 pt-10 border-t border-[#1F2A33]/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="font-serif-display text-3xl sm:text-4xl text-[#1F2A33] tabular-nums">
              8–18
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C4552B]">
              Qualified Demos / Mo
            </div>
            <div className="text-xs text-[#1F2A33]/70">
              Pre-vetted decision makers with immediate budget intent.
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-display text-3xl sm:text-4xl text-[#1F2A33] tabular-nums">
              $2,000 + $400
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2E5E8C]">
              Transparent Pricing
            </div>
            <div className="text-xs text-[#1F2A33]/70">
              One-time infrastructure setup fee, then $400/mo maintenance.
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-display text-3xl sm:text-4xl text-[#1F2A33] tabular-nums">
              &lt; 48h
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C4552B]">
              Lead Response Time
            </div>
            <div className="text-xs text-[#1F2A33]/70">
              Fast, bespoke follow-ups converting interest into bookings.
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-display text-3xl sm:text-4xl text-[#1F2A33] tabular-nums">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2E5E8C]">
              Asset Ownership
            </div>
            <div className="text-xs text-[#1F2A33]/70">
              You own all email domains, warmed inboxes, lists, and copy forever.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
