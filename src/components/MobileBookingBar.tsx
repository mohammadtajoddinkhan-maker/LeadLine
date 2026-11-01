import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface MobileBookingBarProps {
  onOpenBooking: () => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile booking action"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#1F2A33] text-[#F7F2EA] border-t border-[#F7F2EA]/15 shadow-2xl px-4 py-2.5 h-15 flex items-center justify-between gap-3 safe-bottom"
    >
      <div className="flex flex-col justify-center">
        <span className="text-[10px] uppercase tracking-wider text-[#C4552B] font-semibold leading-none">
          LeadLine with Taj
        </span>
        <span className="text-xs font-semibold text-white tracking-tight mt-0.5">
          $2,000 <span className="font-normal text-[#F7F2EA]/70">setup</span> · $400<span className="font-normal text-[#F7F2EA]/70">/mo</span>
        </span>
      </div>

      <button
        type="button"
        onClick={onOpenBooking}
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#C4552B] hover:bg-[#af4720] rounded-lg shadow-sm transition-transform active:scale-95 shrink-0"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Call</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
