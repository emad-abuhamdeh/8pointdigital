import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SERVICES = [
  "Website Design & Dev",
  "SEO Optimization",
  "Paid Advertising",
  "Social Media",
  "Brand Identity",
  "Not sure yet",
];

const BUDGETS = ["< $1,000", "$1k–$3k", "$3k–$7k", "$7k–$15k", "$15k+"];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: Props) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const overlayRef = useRef<HTMLDivElement>(null);

  /* reset on close */
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1); setSubmitted(false);
        setSelectedService(null); setSelectedBudget(null);
        setForm({ name: "", email: "", company: "", message: "" });
      }, 400);
    }
  }, [open]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({ title: "Message sent!", description: "We'll be in touch within one business day." });
    }, 1600);
  };

  const canStep1 = form.name.trim() && form.email.trim() && selectedService;
  const canStep2 = selectedBudget;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            ref={overlayRef}
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(14px)" }}
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
          >
            {/* ── Panel ── */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.88, rotateX: -18, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, rotateX: 18, y: 30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: "1200px", transformStyle: "preserve-3d", maxWidth: 620, width: "100%" }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(108,192,74,0.08)]"
                style={{ background: "linear-gradient(135deg, #111827 0%, #030712 100%)" }}>

                {/* Top green glow strip */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #6CC04A, transparent)" }} />
                <div className="absolute top-0 left-1/4 right-1/4 h-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(108,192,74,0.12) 0%, transparent 80%)" }} />

                {/* Close button */}
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                  <X size={16} />
                </button>

                {!submitted ? (
                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-3">
                        Free Consultation
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">great together.</span>
                      </h2>
                      <p className="text-gray-400 text-sm mt-2">We reply within one business day — no pressure, no obligation.</p>
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-8">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold border transition-all duration-300 ${
                            s < step ? "bg-[#6CC04A] border-[#6CC04A] text-white" :
                            s === step ? "border-[#6CC04A] text-[#6CC04A] bg-[#6CC04A]/10" :
                            "border-white/20 text-gray-600"
                          }`}>
                            {s < step ? <CheckCircle2 size={13} /> : s}
                          </div>
                          {s < 3 && <div className={`h-px w-10 transition-colors duration-300 ${s < step ? "bg-[#6CC04A]" : "bg-white/10"}`} />}
                        </div>
                      ))}
                      <span className="text-gray-500 text-xs ml-2">
                        {step === 1 ? "Your info" : step === 2 ? "Budget" : "Message"}
                      </span>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* ── Step 1 ── */}
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5 block">Full Name *</label>
                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                  placeholder="John Smith"
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm input-glow" />
                              </div>
                              <div>
                                <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5 block">Email *</label>
                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                  placeholder="john@company.com"
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm input-glow" />
                              </div>
                            </div>
                            <div>
                              <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5 block">Company</label>
                              <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                                placeholder="Your company name (optional)"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm input-glow" />
                            </div>
                            <div>
                              <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3 block">I need help with *</label>
                              <div className="flex flex-wrap gap-2">
                                {SERVICES.map((s) => (
                                  <button key={s} type="button" onClick={() => setSelectedService(s)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                                      selectedService === s
                                        ? "bg-[#6CC04A]/20 border-[#6CC04A] text-[#6CC04A] shadow-[0_0_12px_rgba(108,192,74,0.25)]"
                                        : "border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                                    }`}>
                                    {s}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <button type="button" disabled={!canStep1} onClick={() => setStep(2)}
                              className="w-full mt-2 h-12 rounded-xl bg-[#6CC04A] hover:bg-[#5aab3b] disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition-all flex items-center justify-center gap-2 btn-shimmer">
                              Next Step <ArrowRight size={16} />
                            </button>
                          </motion.div>
                        )}

                        {/* ── Step 2 ── */}
                        {step === 2 && (
                          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-6">
                            <div>
                              <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4 block">What's your monthly budget? *</label>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {BUDGETS.map((b) => (
                                  <button key={b} type="button" onClick={() => setSelectedBudget(b)}
                                    className={`py-4 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                                      selectedBudget === b
                                        ? "bg-[#6CC04A]/20 border-[#6CC04A] text-[#6CC04A] shadow-[0_0_16px_rgba(108,192,74,0.25)]"
                                        : "border-white/10 bg-white/3 text-gray-400 hover:border-white/20 hover:text-white"
                                    }`}>
                                    {b}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <button type="button" onClick={() => setStep(1)}
                                className="flex-1 h-12 rounded-xl border border-white/15 text-gray-400 hover:text-white hover:border-white/30 font-semibold transition-colors">
                                ← Back
                              </button>
                              <button type="button" disabled={!canStep2} onClick={() => setStep(3)}
                                className="flex-[2] h-12 rounded-xl bg-[#6CC04A] hover:bg-[#5aab3b] disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(108,192,74,0.35)]">
                                Next Step <ArrowRight size={16} />
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* ── Step 3 ── */}
                        {step === 3 && (
                          <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-4">
                            <div>
                              <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5 block">Tell us about your project</label>
                              <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                placeholder="What are your goals? What challenges are you facing? The more detail, the better we can prepare..."
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 focus:border-[#6CC04A]/60 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors resize-none" />
                            </div>

                            {/* Summary */}
                            <div className="rounded-xl border border-[#6CC04A]/20 bg-[#6CC04A]/5 px-4 py-3 text-sm text-gray-400 space-y-1">
                              <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#6CC04A]" /> <span>{form.name} · {form.email}</span></div>
                              <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#6CC04A]" /> <span>{selectedService} · {selectedBudget}</span></div>
                            </div>

                            <div className="flex gap-3">
                              <button type="button" onClick={() => setStep(2)}
                                className="flex-1 h-12 rounded-xl border border-white/15 text-gray-400 hover:text-white hover:border-white/30 font-semibold transition-colors">
                                ← Back
                              </button>
                              <button type="submit" disabled={isSubmitting}
                                className="flex-[2] h-12 rounded-xl bg-[#6CC04A] hover:bg-[#5aab3b] text-white font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(108,192,74,0.35)] disabled:opacity-60">
                                {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={15} /> Send Message</>}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </div>
                ) : (
                  /* ── Success state ── */
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                    className="p-10 md:p-14 flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-[#6CC04A]/20 border-2 border-[#6CC04A] flex items-center justify-center mb-6"
                      style={{ boxShadow: "0 0 40px rgba(108,192,74,0.4)" }}>
                      <CheckCircle2 size={36} className="text-[#6CC04A]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message received!</h3>
                    <p className="text-gray-400 text-base mb-8 max-w-xs">We'll review your project and get back to you within one business day.</p>
                    <button onClick={onClose} className="h-11 px-8 rounded-full border border-white/20 text-white hover:bg-white/10 font-semibold transition-colors text-sm">
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
