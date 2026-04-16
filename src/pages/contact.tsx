import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Instagram, Linkedin, Twitter, ArrowRight, MessageSquare, Calendar, Send } from "lucide-react";
import { useState } from "react";

const logoIcon = `${import.meta.env.BASE_URL}Logo2.svg`;
import { useToast } from "@/hooks/use-toast";

const services = [
  "Website Design & Development",
  "Search Engine Optimization (SEO)",
  "Paid Advertising (Google / Meta)",
  "Social Media Marketing",
  "Brand Identity",
  "Not sure yet — let's talk",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message received!", description: "We'll be in touch within one business day." });
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
      setSelectedService(null);
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 50% 60% at 75% 40%, rgba(108,192,74,0.10) 0%, transparent 70%)" }} className="absolute inset-0" />
          <div style={{ background: "radial-gradient(ellipse 40% 50% at 10% 60%, rgba(108,192,74,0.06) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-0 select-none pointer-events-none">
            <img src={logoIcon} alt="" style={{ width: "460px", opacity: 0.12, mixBlendMode: "screen" }} />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] font-medium text-sm mb-6">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Let's build something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">great together.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Tell us about your business and goals. We'll come back with a clear picture of what we'd do and what you can expect.
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            {[
              { icon: Clock, label: "Reply within 24 hours" },
              { icon: CheckCircle2, label: "Free initial consultation" },
              { icon: MessageSquare, label: "No obligation, no pressure" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <Icon size={15} className="text-[#6CC04A]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Main Grid ── */}
      <section className="flex-1 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-4 space-y-5"
            >
              {/* Contact details card */}
              <div className="bg-gray-900/60 border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-xl mb-7">Contact Details</h3>
                <div className="space-y-6">
                  <a href="tel:+13828800039" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center flex-none group-hover:bg-[#6CC04A]/25 transition-colors">
                      <Phone size={18} className="text-[#6CC04A]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Phone</div>
                      <div className="text-white font-semibold group-hover:text-[#6CC04A] transition-colors">+1 382-880-0039</div>
                    </div>
                  </a>

                  <a href="mailto:info@8pointdigital.com" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center flex-none group-hover:bg-[#6CC04A]/25 transition-colors">
                      <Mail size={18} className="text-[#6CC04A]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Email</div>
                      <div className="text-white font-semibold group-hover:text-[#6CC04A] transition-colors">info@8pointdigital.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center flex-none">
                      <MapPin size={18} className="text-[#6CC04A]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Location</div>
                      <div className="text-white font-semibold">Ontario, Canada</div>
                      <div className="text-gray-500 text-sm">Serving businesses across Canada & globally</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center flex-none">
                      <Clock size={18} className="text-[#6CC04A]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Office Hours</div>
                      <div className="text-white font-semibold">Mon – Fri, 9am – 6pm ET</div>
                      <div className="text-gray-500 text-sm">Weekend replies within 4 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links card */}
              <div className="bg-gray-900/60 border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-lg mb-5">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter / X" },
                  ].map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a key={i} href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:border-[#6CC04A]/40 hover:text-[#6CC04A] transition-all text-sm font-medium">
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* What happens next card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-[#6CC04A]/20 rounded-3xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar size={16} className="text-[#6CC04A]" />
                  <h3 className="text-white font-bold text-lg">What Happens Next</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { step: "1", title: "We review your message", desc: "Within one business day, a senior strategist reviews your submission." },
                    { step: "2", title: "Discovery call booked", desc: "We'll suggest a 30-min call to understand your goals and current situation." },
                    { step: "3", title: "Custom strategy sent", desc: "You receive a clear, tailored recommendation — no fluff, no hard sell." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full border border-[#6CC04A]/50 flex items-center justify-center flex-none mt-0.5">
                        <span className="text-[#6CC04A] text-xs font-bold">{item.step}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                        <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-gray-900/60 border border-white/10 rounded-3xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-8">All fields marked with * are required.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Jane Smith"
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#6CC04A]/50 focus:bg-white/8 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="jane@company.com"
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#6CC04A]/50 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Company + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company Name</label>
                      <input
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        placeholder="Acme Corp"
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#6CC04A]/50 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Monthly Budget</label>
                      <select
                        value={form.budget}
                        onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                        className="w-full h-12 px-4 rounded-xl bg-gray-900 border border-white/10 text-gray-400 focus:outline-none focus:border-[#6CC04A]/50 transition-all text-sm appearance-none"
                      >
                        <option value="" disabled>Select a range</option>
                        <option>Under $1,000 / mo</option>
                        <option>$1,000 – $3,000 / mo</option>
                        <option>$3,000 – $7,500 / mo</option>
                        <option>$7,500 – $15,000 / mo</option>
                        <option>$15,000+ / mo</option>
                      </select>
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">I'm interested in *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setSelectedService(s)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${
                            selectedService === s
                              ? "border-[#6CC04A]/60 bg-[#6CC04A]/10 text-[#6CC04A]"
                              : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border-2 flex-none transition-all ${selectedService === s ? "border-[#6CC04A] bg-[#6CC04A]" : "border-gray-600"}`}>
                            {selectedService === s && <div className="w-full h-full rounded-full" />}
                          </div>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tell us about your project *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Share your goals, current challenges, and anything else you'd like us to know..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#6CC04A]/50 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-5">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-14 px-10 text-base font-bold rounded-full bg-[#6CC04A] hover:bg-[#5aab3b] text-white shadow-[0_0_25px_rgba(108,192,74,0.35)] disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <Send size={16} />
                        </span>
                      )}
                    </Button>
                    <p className="text-gray-600 text-xs leading-snug">
                      We respond to every message within one business day.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section className="border-t border-white/10 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Common Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { q: "How quickly do you start?", a: "Most projects kick off within 1–2 weeks of signing. We'll set a clear timeline on your discovery call." },
              { q: "Do you work with small businesses?", a: "Absolutely. We tailor our approach to your budget and stage, whether you're an early-stage startup or an established SMB." },
              { q: "Is there a minimum commitment?", a: "Project work has no minimums. Retainer-based services (SEO, Ads, Social) start at 3 months for meaningful results." },
              { q: "What does the onboarding look like?", a: "We run a structured onboarding: goals workshop, brand audit, and a 90-day roadmap — all before any execution begins." },
              { q: "Do you offer reporting?", a: "Yes. Every client gets a monthly performance report with the metrics that matter — no vanity stats, just business impact." },
              { q: "Can you work with my existing team?", a: "We work seamlessly alongside in-house teams, agencies, and freelancers. Collaboration is a strength, not an obstacle." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 hover:border-[#6CC04A]/25 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <ArrowRight size={14} className="text-[#6CC04A] mt-1 flex-none" />
                  <h3 className="text-white font-semibold text-sm">{item.q}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
