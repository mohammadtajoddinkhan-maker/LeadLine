import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { WhatIDo } from './components/WhatIDo';
import { BeforeAfter } from './components/BeforeAfter';
import { HowWeStart } from './components/HowWeStart';
import { AboutMe } from './components/AboutMe';
import { FAQAndInvitation } from './components/FAQAndInvitation';
import { MobileBookingBar } from './components/MobileBookingBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#1F2A33] selection:bg-[#2E5E8C] selection:text-[#F7F2EA] pb-16 lg:pb-0 font-sans">
      {/* Dynamic Top Bar */}
      <TopBar
        onOpenBooking={openBooking}
        isOverDarkSection={isOverDarkSection}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={openBooking} />

        {/* The Problem Section with Scroll-Driven Word Illumination */}
        <TheProblem onIntersectDark={setIsOverDarkSection} />

        {/* What I Do: 5-Stage Pipeline Slider */}
        <WhatIDo />

        {/* Before and After Crossfade Comparison */}
        <BeforeAfter />

        {/* How We Start: Timeline & $2,000 + $400/mo Pricing */}
        <HowWeStart onOpenBooking={openBooking} />

        {/* About Me: Personal Note & Handwritten Signature */}
        <AboutMe />

        {/* Accordion FAQ & Final Invitation */}
        <FAQAndInvitation onOpenBooking={openBooking} />
      </main>

      {/* Sticky Bottom Booking Bar for Mobile */}
      <MobileBookingBar onOpenBooking={openBooking} />

      {/* 15-Minute Blueprint Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
      />
    </div>
  );
}
