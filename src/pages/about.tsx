import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Heart, Lightbulb, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const logoIcon = `${import.meta.env.BASE_URL}logo.svg`;

const values = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Results First",
    desc: "We are obsessed with measurable outcomes. Vanity metrics don't pay your bills — real ROI does. Every strategy we build is tied to a number that matters.",
  },
  {
    num: "02",
    icon: Heart,
    title: "Radical Transparency",
    desc: "You'll always know exactly where your money is going and what it's producing. We share real numbers, honest timelines, and straight talk — even when it's uncomfortable.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Design Excellence",
    desc: "Aesthetics aren't optional — they're strategic. Beautiful, purposeful design builds instant trust and guides users toward action faster than any copywriting alone.",
  },
  {
    num: "04",
    icon: Clock,
    title: "Continuous Iteration",
    desc: "The digital landscape never rests, and neither do we. We test, learn, adapt, and improve every campaign, every month, for the entire life of the engagement.",
  },
  {
    num: "05",
    icon: Users,
    title: "True Partnership",
    desc: "We don't take orders — we partner. We push back when we disagree, bring ideas you didn't ask for, and celebrate your wins as loudly as our own.",
  },
  {
    num: "06",
    icon: Award,
    title: "Local Expertise",
    desc: "We live and work in Ontario. We understand the Canadian market, the regional nuances, and the competitive landscape your business operates in every day.",
  },
];

const timeline = [
  { year: "2018", title: "Founded in Ontario", desc: "Started with a clear mission: bring enterprise-level digital strategy to ambitious small and mid-size businesses." },
  { year: "2019", title: "First 10 Clients", desc: "Quickly earned a reputation for high-quality delivery and honest communication — referrals became our primary growth engine." },
  { year: "2021", title: "Full-Service Expansion", desc: "Grew from web design and SEO into a full-service digital agency — adding paid media, social, and brand identity to our capabilities." },
  { year: "2023", title: "50+ Brands Served", desc: "Crossed the milestone of 50 active client partnerships across healthcare, retail, tech, and real estate." },
  { year: "2024", title: "Ontario's Go-To Agency", desc: "Recognized as a top digital agency in the region, with a 98% client retention rate and a growing portfolio of transformative results." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 55% 55% at 60% 40%, rgba(108,192,74,0.10) 0%, transparent 70%)" }} className="absolute inset-0" />
          <div style={{ background: "radial-gradient(ellipse 40% 50% at 5% 70%, rgba(108,192,74,0.06) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-0 select-none pointer-events-none">
            <img src={logoIcon} alt="" style={{ width: "480px", opacity: 0.12, mixBlendMode: "screen" }} />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] font-medium text-sm mb-6">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Built in Ontario.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">Designed to grow you.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12">
              We are a digital marketing agency founded on the belief that precision strategy and creative brilliance aren't mutually exclusive — they're essential together.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
          >
            {[
              { value: "2018", label: "Year Founded" },
              { value: "50+", label: "Brands Served" },
              { value: "98%", label: "Client Retention" },
              { value: "Ontario", label: "Proudly Local" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-[#6CC04A] mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── The Vision Behind "8" ── */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Visual "8" composition */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 aspect-square max-w-md mx-auto lg:mx-0 flex items-center justify-center">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(108,192,74,0.12) 0%, transparent 70%)" }} />
                <div style={{
                  fontSize: "18rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #9EE07A 0%, #6CC04A 40%, #3A8020 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 40px rgba(108,192,74,0.4))",
                  userSelect: "none",
                }}>
                  8
                </div>
                {/* Floating labels */}
                <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2">
                  <span className="text-[#6CC04A] text-xs font-bold uppercase tracking-widest">Infinity</span>
                </div>
                <div className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2">
                  <span className="text-[#6CC04A] text-xs font-bold uppercase tracking-widest">Balance</span>
                </div>
                <div className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2">
                  <span className="text-[#6CC04A] text-xs font-bold uppercase tracking-widest">Flow</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-6">
                Why "8"
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The number that defines how we think.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                The number 8 represents infinity, balance, and continuous flow. Rotate it 90 degrees and it becomes the infinity symbol — a reminder that growth is not a destination, but a perpetual cycle.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At 8Point, we see digital marketing as an infinite loop: strategy flows into execution, execution into data, data into insight, and insight back into a sharper strategy. We don't just launch campaigns — we cultivate digital ecosystems that compound over time.
              </p>
              <div className="space-y-3">
                {["We measure everything that matters", "We optimize every cycle", "We grow alongside your business"].map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#6CC04A] flex-none" />
                    <span className="text-gray-300 text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 border-t border-white/10 bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Six years of building results.</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6CC04A]/50 via-[#6CC04A]/20 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#6CC04A] bg-gray-950 z-10" />

                  {/* Year label (desktop) */}
                  <div className={`hidden md:flex w-1/2 items-start ${i % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"} pt-4`}>
                    <span className="text-5xl font-black text-[#6CC04A]/20">{item.year}</span>
                  </div>

                  {/* Card */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 hover:border-[#6CC04A]/25 transition-colors">
                      <div className="text-[#6CC04A] font-black text-xl mb-1 md:hidden">{item.year}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-4">
              What We Stand For
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
              The principles that guide every decision we make.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative bg-gray-900/60 border border-white/10 rounded-2xl p-8 hover:border-[#6CC04A]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,192,74,0.06) 0%, transparent 70%)" }} />
                  <div className="absolute top-6 right-6 text-4xl font-black text-white/5 leading-none">{v.num}</div>
                  <div className="w-11 h-11 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#6CC04A]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 px-4 md:px-6"
      >
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-[#6CC04A]/25 bg-gradient-to-br from-gray-900 to-gray-950 p-10 md:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(108,192,74,0.07) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Ready to partner with us?</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Let's get on a call, understand your business, and tell you exactly what we'd do differently. No pitch, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 text-lg bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full font-bold shadow-[0_0_30px_rgba(108,192,74,0.35)]">
                    Book a Free Call <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white/10">
                    See Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="h-12" />
      <Footer />
    </div>
  );
}
