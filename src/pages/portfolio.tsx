import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Search, Megaphone, Globe, Palette } from "lucide-react";
import { Link } from "wouter";

const logoIcon = `${import.meta.env.BASE_URL}logo.svg`;
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Nexus Tech Solutions",
    industry: "B2B SaaS",
    tag: "Web Design + Paid Ads",
    icon: Globe,
    gradient: "from-emerald-950 via-gray-900 to-gray-950",
    accent: "#6CC04A",
    metric: "210%",
    metricLabel: "More Qualified Demos",
    timeframe: "in 60 days",
    challenge: "A fast-growing SaaS company with a high bounce rate on landing pages and a broken lead qualification pipeline — losing thousands in monthly revenue to competitors.",
    solution: "Complete website redesign with conversion-optimized landing pages, automated demo booking flow, and hyper-targeted LinkedIn ad campaigns directed at C-suite decision makers.",
    services: ["Website Redesign", "CRO", "LinkedIn Ads", "Marketing Automation"],
    stats: [
      { value: "210%", label: "Demo Requests" },
      { value: "68%", label: "Bounce Rate Drop" },
      { value: "3.2×", label: "Lead Quality Score" },
    ],
  },
  {
    id: 2,
    title: "Verdant Retail",
    industry: "E-Commerce",
    tag: "SEO + Meta Ads",
    icon: TrendingUp,
    gradient: "from-green-950 via-gray-900 to-gray-950",
    accent: "#6CC04A",
    metric: "145%",
    metricLabel: "Return on Ad Spend",
    timeframe: "over 90 days",
    challenge: "A sustainable lifestyle brand stuck at $40K/month in revenue, scaling only through organic social media with a 78% cart abandonment rate draining potential sales.",
    solution: "Shopify performance optimization, rigorous checkout flow redesign, multi-channel Meta retargeting campaigns, and email lifecycle automation that recovered abandoned carts.",
    services: ["E-Commerce Optimization", "Meta Ads", "Email Marketing", "CRO"],
    stats: [
      { value: "145%", label: "ROAS Improvement" },
      { value: "40%", label: "Less Abandonment" },
      { value: "$120K", label: "Monthly Revenue" },
    ],
  },
  {
    id: 3,
    title: "Pinnacle Health",
    industry: "Healthcare",
    tag: "Local SEO + Branding",
    icon: Search,
    gradient: "from-teal-950 via-gray-900 to-gray-950",
    accent: "#6CC04A",
    metric: "#1",
    metricLabel: "Local Search Rankings",
    timeframe: "for 15 target keywords",
    challenge: "A multi-location physiotherapy clinic losing local patients to competitors with stronger online presence, outdated branding, and no digital patient acquisition strategy.",
    solution: "Comprehensive local SEO overhaul across all locations, modern brand identity system refresh, new patient portal UX, and Google Business Profile optimization.",
    services: ["Local SEO", "Brand Identity", "UX Design", "Google Ads"],
    stats: [
      { value: "#1", label: "Local Rankings" },
      { value: "85%", label: "More Bookings" },
      { value: "15", label: "Keywords Ranked" },
    ],
  },
  {
    id: 4,
    title: "Apex Real Estate Group",
    industry: "Real Estate",
    tag: "Brand Identity + Social",
    icon: Palette,
    gradient: "from-zinc-900 via-gray-900 to-gray-950",
    accent: "#6CC04A",
    metric: "4.8×",
    metricLabel: "Social Engagement",
    timeframe: "within 45 days",
    challenge: "A luxury real estate brokerage with a generic, forgettable brand identity struggling to differentiate in a saturated Ontario market, posting inconsistently on social media.",
    solution: "Premium brand identity rebrand including logo, typography, and visual language. Consistent social media content strategy with cinematic listing videos and client story reels.",
    services: ["Brand Identity", "Social Media", "Content Creation", "Video"],
    stats: [
      { value: "4.8×", label: "Engagement Lift" },
      { value: "22K", label: "New Followers" },
      { value: "38%", label: "More Referrals" },
    ],
  },
  {
    id: 5,
    title: "Solace Mental Health",
    industry: "Healthcare / Wellness",
    tag: "Web Design + SEO",
    icon: Users,
    gradient: "from-emerald-950 via-slate-900 to-gray-950",
    accent: "#6CC04A",
    metric: "320%",
    metricLabel: "Organic Traffic Growth",
    timeframe: "in 6 months",
    challenge: "A mental health services provider with zero organic presence, a website built on a free template, and no way for patients to find or contact them online.",
    solution: "Compassionate, trust-first website redesign with AODA accessibility compliance, a robust SEO content strategy targeting high-intent mental health keywords across Ontario.",
    services: ["Web Design", "SEO Strategy", "Content Writing", "Accessibility"],
    stats: [
      { value: "320%", label: "Organic Traffic" },
      { value: "1st", label: "Page Rankings" },
      { value: "60%", label: "More Inquiries" },
    ],
  },
];

const filters = ["All", "Web Design", "SEO", "Paid Ads", "Branding", "Social"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(108,192,74,0.10) 0%, transparent 70%)" }} className="absolute inset-0" />
          <div style={{ background: "radial-gradient(ellipse 40% 60% at 10% 70%, rgba(108,192,74,0.06) 0%, transparent 60%)" }} className="absolute inset-0" />
          {/* Watermark 8 */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-16 select-none pointer-events-none">
            <img src={logoIcon} alt="" style={{ width: "460px", opacity: 0.12, mixBlendMode: "screen" }} />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] font-medium text-sm mb-6">
              Our Work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Results that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">speak for themselves.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Every project we take on is a partnership built on measurable outcomes. Here's a look at what we've built, and what it delivered.
            </p>
          </motion.div>

          {/* Aggregate stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "180%", label: "Avg. Traffic Growth" },
              { value: "3.4×", label: "Avg. ROAS Achieved" },
              { value: "98%", label: "Client Retention Rate" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-[#6CC04A] mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="border-y border-white/10 bg-gray-900/50 backdrop-blur-sm sticky top-[72px] z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-none px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-[#6CC04A] text-white shadow-[0_0_12px_rgba(108,192,74,0.4)]"
                    : "border border-white/15 text-gray-400 hover:border-[#6CC04A]/50 hover:text-[#6CC04A]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Case Studies ── */}
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#6CC04A]/30 transition-all duration-500 bg-gradient-to-br ${project.gradient}`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(108,192,74,0.08) 0%, transparent 70%)" }} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left: Meta + Metric */}
                  <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center">
                          <Icon size={18} className="text-[#6CC04A]" />
                        </div>
                        <span className="text-[#6CC04A] text-sm font-semibold">{project.industry}</span>
                      </div>
                      <div className="text-6xl md:text-7xl font-black text-white mb-2 leading-none">
                        {project.metric}
                      </div>
                      <div className="text-[#6CC04A] font-semibold text-lg mb-1">{project.metricLabel}</div>
                      <div className="text-gray-500 text-sm">{project.timeframe}</div>
                    </div>

                    {/* Mini stat pills */}
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {project.stats.map((s, si) => (
                        <div key={si} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                          <div className="text-white font-bold text-sm">{s.value}</div>
                          <div className="text-gray-500 text-xs mt-0.5 leading-tight">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="lg:col-span-8 p-8 md:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/25 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-medium mb-3">
                          {project.tag}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                      </div>
                      <div className="flex-none w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 group-hover:border-[#6CC04A]/50 group-hover:text-[#6CC04A] transition-all duration-300 mt-1">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">The Challenge</div>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Our Approach</div>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Service tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium hover:border-[#6CC04A]/40 hover:text-[#6CC04A] transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 mt-20"
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#6CC04A]/25 bg-gradient-to-br from-gray-900 to-gray-950 p-10 md:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(108,192,74,0.07) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <div className="text-[#6CC04A] font-semibold text-sm uppercase tracking-widest mb-4">Ready to be next?</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build your success story.</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Every case study above started with one conversation. Yours could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 text-lg bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full font-bold shadow-[0_0_30px_rgba(108,192,74,0.35)]">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white/10">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
