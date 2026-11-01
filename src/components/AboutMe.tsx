import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, Shield, HeartHandshake } from 'lucide-react';
import tajPortrait from '../assets/images/taj_khan_portrait_1793553681531.jpg';

export const AboutMe: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'leadneedsbytaj@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about-me" className="py-24 md:py-32 bg-[#F7F2EA] border-b border-[#1F2A33]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#1F2A33]/15 shadow-xl relative overflow-hidden">
          {/* Subtle brand badge */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4552B] mb-6">
            <HeartHandshake className="w-4 h-4" />
            <span>A Personal Note from the Founder</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Letter / Story Column */}
            <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-[#1F2A33]/85 leading-relaxed font-light">
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1F2A33] font-normal leading-tight">
                "I started LeadLine because I watched too many great founders get burned by empty promises."
              </h2>

              <p>
                A few years ago, I saw the dirty secret of the agency world firsthand: agency founders pitch you with charismatic slides, charge you a $5,000/month retainer, and immediately hand your business over to an intern who just graduated college and learned cold email from a YouTube thread yesterday.
              </p>

              <p>
                The results are always predictable: burned domains, spam folder jail, pissed-off prospects, and thousands of dollars down the drain. When you ask why meetings aren't booking, they blame your offer, the market, or the algorithm.
              </p>

              <p className="font-normal text-[#1F2A33]">
                I built LeadLine with one simple principle: <strong className="font-semibold text-[#1F2A33]">Direct craftsmanship.</strong> When you partner with LeadLine, you don't speak to an account manager. You speak directly with me. I research your niche, write your sequences, audit your secondary domains, and monitor your inboxes every morning.
              </p>

              <p>
                I charge a reasonable $2,000 setup fee to engineer your infrastructure properly, and $400/month to keep the machine humming. No bloated overhead, no junior staff, and no locked doors on your assets.
              </p>

              {/* Handwritten Signature in Caveat */}
              <div className="pt-6 border-t border-[#1F2A33]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="font-signature text-4xl sm:text-5xl text-[#C4552B] -rotate-2 select-none">
                    Taj Khan
                  </div>
                  <div className="text-xs font-semibold text-[#1F2A33] mt-1">
                    Taj Khan
                  </div>
                  <div className="text-[11px] text-[#1F2A33]/60">
                    Founder & Pipeline Architect · LeadLine
                  </div>
                </div>

                {/* Direct email box */}
                <div className="bg-[#F7F2EA] border border-[#1F2A33]/15 rounded-xl p-3 sm:p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2E5E8C] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="text-[10px] text-[#1F2A33]/60 uppercase tracking-wider font-semibold">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-[#1F2A33] hover:text-[#C4552B] transition"
                    >
                      {email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-white border border-[#1F2A33]/10 hover:bg-[#1F2A33]/5 text-[#1F2A33] transition"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#1F2A33]/60" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Side Portrait Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden border border-[#1F2A33]/15 shadow-md bg-[#1F2A33]/5 relative group">
                <img
                  src={tajPortrait}
                  alt="Taj Khan, Founder of LeadLine"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#1F2A33]/90 via-[#1F2A33]/40 to-transparent text-white text-[11px]">
                  <span className="font-semibold">Taj Khan</span> · Available for Q4/Q1 Engagements
                </div>
              </div>

              <div className="w-full max-w-xs mt-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#1F2A33]/10 text-[11px] text-[#1F2A33]/70 space-y-1.5">
                <div className="font-semibold text-[#1F2A33] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#2E5E8C]" />
                  Taj's Guarantee
                </div>
                <p>
                  If you aren't 100% satisfied with the quality of outbound messages or setup in the first 30 days, I'll refund your monthly maintenance fee immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
