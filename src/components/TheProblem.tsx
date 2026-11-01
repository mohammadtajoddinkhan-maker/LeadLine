import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Flame, Users, FileSpreadsheet } from 'lucide-react';

interface TheProblemProps {
  onIntersectDark?: (isDark: boolean) => void;
}

export const TheProblem: React.FC<TheProblemProps> = ({ onIntersectDark }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Full statement text split into words
  const statementWords = [
    { text: 'Most', highlight: false },
    { text: 'outbound', highlight: false },
    { text: 'agencies', highlight: false },
    { text: 'charge', highlight: false },
    { text: 'you', highlight: false },
    { text: '$5,000', highlight: true },
    { text: 'a', highlight: true },
    { text: 'month', highlight: true },
    { text: 'to', highlight: false },
    { text: 'pass', highlight: false },
    { text: 'you', highlight: false },
    { text: 'off', highlight: false },
    { text: 'to', highlight: false },
    { text: 'a', highlight: false },
    { text: 'junior', highlight: true },
    { text: 'intern,', highlight: true },
    { text: 'burn', highlight: true },
    { text: 'through', highlight: true },
    { text: 'your', highlight: false },
    { text: 'reputation,', highlight: true },
    { text: 'and', highlight: false },
    { text: 'deliver', highlight: false },
    { text: 'a', highlight: false },
    { text: 'spreadsheet', highlight: false },
    { text: 'of', highlight: false },
    { text: 'unresponsive', highlight: false },
    { text: 'leads', highlight: false },
    { text: 'who', highlight: false },
    { text: 'never', highlight: true },
    { text: 'pick', highlight: true },
    { text: 'up', highlight: true },
    { text: 'the', highlight: true },
    { text: 'phone.', highlight: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Dark section intersection for TopBar:
      // When the top of the section is near the topbar and bottom is still visible
      const isVisibleUnderTopBar = rect.top <= 72 && rect.bottom >= 72;
      if (onIntersectDark) {
        onIntersectDark(isVisibleUnderTopBar);
      }

      // Calculate progress of reading through this section
      // Starts illuminating when top reaches 80% of viewport, finishes when top reaches 20%
      const start = windowHeight * 0.75;
      const end = windowHeight * 0.2;
      const current = rect.top;

      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onIntersectDark]);

  const illuminatedCount = Math.floor(scrollProgress * statementWords.length);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative bg-[#1F2A33] text-[#F7F2EA] py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors"
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C4552B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section kicker */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C4552B]">
            The Industry Reality
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F7F2EA] mt-1">
            Why traditional lead gen feels like throwing cash into a furnace
          </h2>
        </div>

        {/* Scroll-Driven Lighting Up Sentence */}
        <div className="bg-[#263440]/60 border border-[#F7F2EA]/10 rounded-3xl p-8 sm:p-12 md:p-16 my-8 shadow-2xl backdrop-blur-sm">
          <p className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-balance">
            {statementWords.map((word, index) => {
              const isLit = index <= illuminatedCount || scrollProgress >= 0.95;
              const isHighlightWord = word.highlight;

              return (
                <span
                  key={index}
                  className={`inline-block mr-2.5 transition-all duration-300 ${
                    isLit
                      ? isHighlightWord
                        ? 'text-[#C4552B] font-semibold drop-shadow-[0_0_12px_rgba(196,85,43,0.35)]'
                        : 'text-[#F7F2EA] drop-shadow-[0_0_8px_rgba(247,242,234,0.25)]'
                      : 'text-[#465766] opacity-40'
                  }`}
                >
                  {word.text}
                </span>
              );
            })}
          </p>

          {/* Interactive lighting scrubber / controller */}
          <div className="mt-10 pt-6 border-t border-[#F7F2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F2EA]/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C4552B]" />
              <span>Scroll down or scrub slider to reveal the sentence</span>
            </div>
            <div className="w-full sm:w-64 flex items-center gap-3">
              <span className="text-[11px] font-mono tabular-nums">
                {Math.round(scrollProgress * 100)}%
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.02"
                value={scrollProgress}
                onChange={(e) => setScrollProgress(parseFloat(e.target.value))}
                aria-label="Sentence illumination slider"
                className="w-full h-1.5 bg-[#1F2A33] rounded-lg appearance-none cursor-pointer accent-[#C4552B]"
              />
              <button
                type="button"
                onClick={() => setScrollProgress(1)}
                className="text-xs text-[#F7F2EA] hover:text-[#C4552B] underline whitespace-nowrap"
              >
                Reveal All
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Agency Failure Modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-[#24303B] border border-[#F7F2EA]/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C4552B]/15 text-[#C4552B] flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-xl text-[#F7F2EA]">
              The $5k Retainer Black Hole
            </h3>
            <p className="text-xs text-[#F7F2EA]/75 leading-relaxed">
              Agencies demand $4,000–$7,000/mo upfront before sending a single email. After 3 months, you’ve spent $15,000 and have nothing tangible to show for it.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#24303B] border border-[#F7F2EA]/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E5E8C]/25 text-[#73A6D6] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-xl text-[#F7F2EA]">
              The Junior Handoff
            </h3>
            <p className="text-xs text-[#F7F2EA]/75 leading-relaxed">
              The charismatic founder signs your contract, then immediately delegates your high-stakes outreach to junior interns who copy-paste robotic ChatGPT templates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#24303B] border border-[#F7F2EA]/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C4552B]/15 text-[#C4552B] flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-xl text-[#F7F2EA]">
              Zero Asset Ownership
            </h3>
            <p className="text-xs text-[#F7F2EA]/75 leading-relaxed">
              When you inevitably cancel, they turn off the switch. You leave with no domains, no warmed email infrastructure, no sequence data, and no pipeline assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
