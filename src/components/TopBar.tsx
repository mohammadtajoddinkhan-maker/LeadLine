import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface TopBarProps {
  onOpenBooking: () => void;
  isOverDarkSection: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenBooking, isOverDarkSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'What I Do', href: '#what-i-do' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'How We Start', href: '#how-we-start' },
    { label: 'About Me', href: '#about-me' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ease-in-out ${
          isOverDarkSection
            ? 'bg-[#1F2A33] text-[#F7F2EA] border-b border-[#F7F2EA]/10 shadow-lg'
            : isScrolled
            ? 'bg-[#F7F2EA]/95 backdrop-blur-md text-[#1F2A33] border-b border-[#1F2A33]/10 shadow-sm'
            : 'bg-transparent text-[#1F2A33]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Brand Zone */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              className={`transition-all duration-300 flex items-center gap-1.5 ${
                isOverDarkSection
                  ? 'bg-[#F7F2EA] text-[#1F2A33] px-3 py-1.5 rounded-lg shadow-sm font-semibold tracking-tight'
                  : 'font-semibold tracking-tight text-[#1F2A33]'
              }`}
            >
              <span className="font-serif-display text-2xl tracking-tight">LeadLine</span>
              <span className="w-2 h-2 rounded-full bg-[#C4552B]" aria-hidden="true" />
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 ${
                  isOverDarkSection
                    ? 'text-[#F7F2EA]/80 hover:text-white'
                    : 'text-[#1F2A33]/80 hover:text-[#1F2A33]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 transform active:scale-95 whitespace-nowrap shrink-0 shadow-sm ${
                isOverDarkSection
                  ? 'bg-[#C4552B] text-white hover:bg-[#d86134]'
                  : 'bg-[#1F2A33] text-[#F7F2EA] hover:bg-[#2E5E8C]'
              }`}
            >
              <span>Book a 15-Min Intro</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isOverDarkSection
                  ? 'text-[#F7F2EA] hover:bg-[#F7F2EA]/10'
                  : 'text-[#1F2A33] hover:bg-[#1F2A33]/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden pt-20 bg-[#F7F2EA] text-[#1F2A33] px-6 py-8 flex flex-col justify-between border-b border-[#1F2A33]/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C4552B] mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-serif-display text-[#1F2A33] py-2 border-b border-[#1F2A33]/10 hover:text-[#2E5E8C] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold text-white bg-[#C4552B] hover:bg-[#b04a24] rounded-xl shadow-md transition"
            >
              Book a 15-Min Intro Call
            </button>
            <div className="mt-4 text-center text-xs text-[#1F2A33]/60">
              Direct with Taj Khan · Zero Account Managers
            </div>
          </div>
        </div>
      )}
    </>
  );
};
