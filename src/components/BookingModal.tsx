import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Send, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    targetNiche: '',
    preferredDate: '',
    preferredTime: '10:00 AM EST',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous booking coordination
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 700);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('form');
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        targetNiche: '',
        preferredDate: '',
        preferredTime: '10:00 AM EST',
        notes: '',
      });
    }, 300);
  };

  // Quick dates for next 3 business days
  const today = new Date();
  const dateOptions = [1, 2, 3, 4, 5].map((offset) => {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    if (d.getDay() === 6) d.setDate(d.getDate() + 2);
    return {
      iso: d.toISOString().split('T')[0],
      label: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    };
  }).filter((v, i, a) => a.findIndex(t => t.iso === v.iso) === i).slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#1F2A33]/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#F7F2EA] text-[#1F2A33] rounded-2xl shadow-2xl border border-[#1F2A33]/15 overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2A33]/10 bg-[#FAF7F2]">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#C4552B]">
                  Direct Founder Access
                </span>
                <h3 className="font-serif-display text-2xl font-normal text-[#1F2A33] mt-0.5">
                  15-Minute Blueprint Call
                </h3>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close modal"
                className="p-2 text-[#1F2A33]/60 hover:text-[#1F2A33] rounded-full hover:bg-[#1F2A33]/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {step === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-[#1F2A33]/80 leading-relaxed">
                    No pressure, no sales reps. You speak directly with Taj Khan to diagnose your outbound acquisition channels and calculate your expected appointment volume.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2A33]/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#1F2A33]/20 rounded-lg text-sm text-[#1F2A33] placeholder-[#1F2A33]/40 focus:outline-none focus:ring-2 focus:ring-[#2E5E8C] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2A33]/70 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@yourcompany.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#1F2A33]/20 rounded-lg text-sm text-[#1F2A33] placeholder-[#1F2A33]/40 focus:outline-none focus:ring-2 focus:ring-[#2E5E8C] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2A33]/70 mb-1.5">
                        Company / Agency *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Growth Inc."
                        className="w-full px-3.5 py-2.5 bg-white border border-[#1F2A33]/20 rounded-lg text-sm text-[#1F2A33] placeholder-[#1F2A33]/40 focus:outline-none focus:ring-2 focus:ring-[#2E5E8C] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2A33]/70 mb-1.5">
                        Website or LinkedIn
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://acme.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#1F2A33]/20 rounded-lg text-sm text-[#1F2A33] placeholder-[#1F2A33]/40 focus:outline-none focus:ring-2 focus:ring-[#2E5E8C] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Date & Time selection */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2A33]/70 mb-1.5">
                      Preferred Day
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {dateOptions.map((opt) => (
                        <button
                          key={opt.iso}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredDate: opt.iso })}
                          className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-center ${
                            formData.preferredDate === opt.iso
                              ? 'bg-[#1F2A33] text-white border-[#1F2A33] shadow-sm'
                              : 'bg-white text-[#1F2A33] border-[#1F2A33]/20 hover:border-[#1F2A33]/50'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2A33]/70 mb-1.5">
                      Target ICP or Current Challenge (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Selling B2B software to HR Directors, need 10 qualified demos/mo"
                      className="w-full px-3.5 py-2 bg-white border border-[#1F2A33]/20 rounded-lg text-sm text-[#1F2A33] placeholder-[#1F2A33]/40 focus:outline-none focus:ring-2 focus:ring-[#2E5E8C] focus:border-transparent transition resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <span className="text-xs text-[#1F2A33]/60 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C4552B]" />
                      15 min · Google Meet
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#C4552B] hover:bg-[#a6431e] rounded-lg shadow-sm transition-all transform active:scale-95 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Confirming...
                        </>
                      ) : (
                        <>
                          Lock In 15-Min Blueprint
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-2xl font-normal text-[#1F2A33]">
                      Call Request Confirmed
                    </h4>
                    <p className="text-sm text-[#1F2A33]/80 mt-1 max-w-sm mx-auto">
                      Thanks {formData.name || 'there'}! Taj has received your details and will send a calendar invite directly to <strong className="text-[#1F2A33]">{formData.email || 'your email'}</strong> within 2 business hours.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#1F2A33]/15 text-left text-xs text-[#1F2A33]/80 space-y-1.5">
                    <div className="font-semibold text-[#1F2A33] text-sm">Meeting Snapshot:</div>
                    <div>Host: Taj Khan (Founder, LeadLine)</div>
                    <div>Duration: 15 Minutes</div>
                    <div>Direct Contact: leadneedsbytaj@gmail.com</div>
                    <div>Setup terms: $2,000 setup · $400/month · No long-term lock-in</div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:leadneedsbytaj@gmail.com?subject=15-Min Blueprint Call - ${encodeURIComponent(formData.company || formData.name)}&body=Hi Taj,%0D%0A%0D%0AI just scheduled a blueprint call for ${encodeURIComponent(formData.company)}. Looking forward to speaking.%0D%0A%0D%0AName: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1F2A33] bg-white border border-[#1F2A33]/20 hover:bg-[#1F2A33]/5 rounded-lg transition"
                    >
                      <Send className="w-3.5 h-3.5 text-[#2E5E8C]" />
                      Email Taj Directly
                    </a>
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#1F2A33] hover:bg-[#2C3B47] rounded-lg transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
