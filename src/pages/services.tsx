import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Globe, Search, Share2, MousePointerClick, Gem, CheckCircle2, ArrowRight, Zap, BarChart3, Target, Star } from "lucide-react";
import { Link } from "wouter";

const logoIcon = `${import.meta.env.BASE_URL}Logo2.svg?v=20260416-2`;
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  {
    id: "website-design",
    num: "01",
    icon: Globe,
    title: "Website Design & Development",
    short: "Websites that convert visitors into buyers.",
    description: "Your website is your most powerful sales asset — or your biggest liability. We design and develop high-performance, visually striking websites that build instant trust, guide users effortlessly, and turn clicks into conversions.",
    benefits: [
      "Custom UI/UX Design from scratch",
      "Mobile-first responsive build",
      "Lightning-fast Core Web Vitals",
      "Conversion Rate Optimization (CRO)",
      "CMS integration (WordPress, Webflow)",
      "Ongoing maintenance & support",
    ],
    impact: "Our clients see an average 65% increase in on-site engagement within 30 days of launch.",
    metric: "65%",
    metricLabel: "Avg. engagement lift",
    tags: ["UI/UX", "Development", "CRO", "CMS"],
    color: "from-emerald-950 to-gray-950",
    process: ["Discovery & Strategy", "Wireframes & Design", "Development", "QA & Launch"],
  },
  {
    id: "seo",
    num: "02",
    icon: Search,
    title: "Search Engine Optimization",
    short: "Sustainable organic traffic that compounds over time.",
    description: "Stop renting attention with paid ads. We build a durable organic presence through technical SEO excellence, content strategy rooted in search intent, and authoritative backlink acquisition — so you own your traffic.",
    benefits: [
      "Full technical SEO audit & fix",
      "Keyword research & content mapping",
      "On-page and off-page optimization",
      "Local SEO for Ontario businesses",
      "Google Business Profile management",
      "Monthly reporting & insights",
    ],
    impact: "Most clients reach page 1 for target keywords within 90 days of campaign launch.",
    metric: "90",
    metricLabel: "Days to page 1 (avg.)",
    tags: ["Technical SEO", "Content", "Local SEO", "Link Building"],
    color: "from-green-950 to-gray-950",
    process: ["Audit & Research", "Strategy Build", "On-Page Execution", "Authority Building"],
  },
  {
    id: "paid-ads",
    num: "03",
    icon: MousePointerClick,
    title: "Paid Advertising (PPC)",
    short: "Precision-targeted campaigns with measurable ROI.",
    description: "Stop guessing with your ad budget. We engineer data-driven campaigns across Google, Meta, and LinkedIn — with rigorous A/B testing, advanced attribution, and relentless optimization that turns every dollar into a measurable return.",
    benefits: [
      "Google Search, Display & Shopping",
      "Meta (Facebook & Instagram) Ads",
      "LinkedIn B2B Campaigns",
      "Advanced audience segmentation",
      "Creative A/B testing at scale",
      "Full attribution & ROI reporting",
    ],
    impact: "We achieve an average 3.4× return on ad spend across all client campaigns.",
    metric: "3.4×",
    metricLabel: "Avg. ROAS delivered",
    tags: ["Google Ads", "Meta Ads", "LinkedIn", "Retargeting"],
    color: "from-teal-950 to-gray-950",
    process: ["Audience Research", "Creative Strategy", "Campaign Launch", "Optimize & Scale"],
  },
  {
    id: "social-media",
    num: "04",
    icon: Share2,
    title: "Social Media Marketing",
    short: "Build an audience that advocates for your brand.",
    description: "Consistency wins on social. We handle everything — from content strategy and graphic design to community management and short-form video — so your brand stays top-of-mind and builds a loyal following that converts.",
    benefits: [
      "Monthly content calendar & strategy",
      "Branded graphic design & copywriting",
      "Reels, TikTok & short-form video",
      "Community management & engagement",
      "Influencer & partnership outreach",
      "Monthly analytics & performance review",
    ],
    impact: "Our social clients see 4× higher engagement rates than their industry average.",
    metric: "4×",
    metricLabel: "Higher engagement rate",
    tags: ["Instagram", "LinkedIn", "TikTok", "Content Creation"],
    color: "from-zinc-900 to-gray-950",
    process: ["Brand Audit", "Strategy & Calendar", "Content Production", "Publish & Engage"],
  },
  {
    id: "branding",
    num: "05",
    icon: Gem,
    title: "Brand Identity",
    short: "A brand that commands premium pricing.",
    description: "Your brand is the feeling people get when they hear your name. We build complete brand systems — logo, typography, color, voice, and visual language — that make you instantly recognizable, deeply trusted, and worth more.",
    benefits: [
      "Logo design & brand mark system",
      "Typography & color palette",
      "Full brand guidelines document",
      "Business card & stationery design",
      "Social media visual templates",
      "Brand voice & messaging framework",
    ],
    impact: "Clients who rebrand with us report an average 30% increase in perceived value and pricing power.",
    metric: "30%",
    metricLabel: "Increase in pricing power",
    tags: ["Logo Design", "Visual Identity", "Brand Strategy", "Guidelines"],
    color: "from-slate-900 to-gray-950",
    process: ["Brand Discovery", "Concept Development", "Refinement", "Delivery & Rollout"],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id);
  const active = services.find((s) => s.id === activeService)!;
  const ActiveIcon = active.icon;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(108,192,74,0.10) 0%, transparent 70%)" }} className="absolute inset-0" />
          <div style={{ background: "radial-gradient(ellipse 40% 60% at 85% 30%, rgba(108,192,74,0.06) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div className="absolute left-0 top-0 bottom-0 flex items-center pl-0 select-none pointer-events-none">
            <img src={logoIcon} alt="" style={{ width: "280px", opacity: 0.10, mixBlendMode: "screen" }} />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] font-medium text-sm mb-6">
              What We Do
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Every service built to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">grow your business.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-16">
              We don't offer packages — we build tailored strategies. Every engagement starts with understanding your goals and ends with measurable results.
            </p>
          </motion.div>

          {/* Quick-nav service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-gray-300 hover:border-[#6CC04A]/50 hover:text-[#6CC04A] hover:bg-[#6CC04A]/10 transition-all text-sm font-medium group"
                >
                  <Icon size={15} className="text-[#6CC04A]" />
                  {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Interactive Service Selector ── */}
      <section className="border-y border-white/10 bg-gray-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Sidebar tabs */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 py-6 lg:py-0">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible py-2 lg:py-8 px-0 lg:px-0">
                {services.map((s) => {
                  const Icon = s.icon;
                  const isActive = activeService === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveService(s.id)}
                      className={`flex-none lg:flex items-center gap-4 px-6 py-4 lg:py-5 rounded-2xl text-left transition-all duration-200 group ${
                        isActive
                          ? "bg-[#6CC04A]/10 border border-[#6CC04A]/30 text-white"
                          : "border border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-none transition-all ${isActive ? "bg-[#6CC04A]/20" : "bg-white/5 group-hover:bg-white/10"}`}>
                        <Icon size={18} className={isActive ? "text-[#6CC04A]" : "text-gray-500 group-hover:text-gray-300"} />
                      </div>
                      <div className="hidden lg:block">
                        <div className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${isActive ? "text-[#6CC04A]" : "text-gray-600"}`}>{s.num}</div>
                        <div className="font-semibold text-sm leading-snug">{s.title}</div>
                      </div>
                      {isActive && <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-[#6CC04A]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8 p-6 lg:p-10 flex flex-col justify-center">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#6CC04A]/15 flex items-center justify-center">
                    <ActiveIcon size={26} className="text-[#6CC04A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6CC04A] uppercase tracking-widest mb-1">{active.num}</div>
                    <h2 className="text-2xl font-bold text-white">{active.title}</h2>
                  </div>
                  <div className="ml-auto text-right hidden md:block">
                    <div className="text-3xl font-black text-[#6CC04A]">{active.metric}</div>
                    <div className="text-xs text-gray-500">{active.metricLabel}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-8">{active.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {active.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#6CC04A] mt-0.5 flex-none" />
                      <span className="text-gray-300 text-sm">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tags.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="text-xs text-gray-500 italic flex-1">"{active.impact}"</div>
                  <Link href="/contact">
                    <Button className="flex-none bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full px-6 shadow-[0_0_15px_rgba(108,192,74,0.25)]">
                      Get a Quote <ArrowRight size={15} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Service Cards ── */}
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#6CC04A]/25 transition-all duration-500 bg-gradient-to-br ${service.color}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,192,74,0.07) 0%, transparent 70%)" }} />

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left accent column */}
                  <div className="lg:col-span-3 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#6CC04A]/15 flex items-center justify-center flex-none">
                        <Icon size={22} className="text-[#6CC04A]" />
                      </div>
                      <div className="text-5xl font-black text-white/10 leading-none">{service.num}</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-[#6CC04A] mb-1">{service.metric}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest">{service.metricLabel}</div>
                    </div>

                    {/* Process steps */}
                    <div className="mt-auto">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Our Process</div>
                      <div className="space-y-2">
                        {service.process.map((step, si) => (
                          <div key={si} className="flex items-center gap-2.5">
                            <div className="w-5 h-5 rounded-full border border-[#6CC04A]/40 flex items-center justify-center flex-none">
                              <span className="text-[#6CC04A] text-[9px] font-bold">{si + 1}</span>
                            </div>
                            <span className="text-gray-400 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="lg:col-span-6 p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{service.title}</h2>
                    <p className="text-[#6CC04A] font-semibold mb-5 text-sm">{service.short}</p>
                    <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>

                    <div className="space-y-2.5">
                      {service.benefits.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-3">
                          <CheckCircle2 size={15} className="text-[#6CC04A] mt-0.5 flex-none" />
                          <span className="text-gray-300 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA column */}
                  <div className="lg:col-span-3 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Specialties</div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.tags.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium hover:border-[#6CC04A]/30 hover:text-[#6CC04A] transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Star size={14} className="text-[#6CC04A]" />
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Impact</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed italic">"{service.impact}"</p>
                      </div>
                    </div>

                    <Link href="/contact" className="mt-8 block">
                      <div className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#6CC04A]/10 border border-[#6CC04A]/25 text-[#6CC04A] hover:bg-[#6CC04A]/20 hover:border-[#6CC04A]/50 transition-all cursor-pointer group/btn">
                        <span className="font-semibold text-sm">Start This Service</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Fast Turnaround", desc: "Most projects launch within 4–6 weeks of kickoff, without sacrificing quality." },
              { icon: BarChart3, title: "Results Guaranteed", desc: "We tie our success to yours. No vanity metrics — only measurable business outcomes." },
              { icon: Target, title: "Ontario-Based Team", desc: "A dedicated local team in Ontario, available when you need us, invested in your market." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-gray-900/60 border border-white/10 rounded-2xl p-8 hover:border-[#6CC04A]/25 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#6CC04A]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="relative mt-8 rounded-3xl overflow-hidden border border-[#6CC04A]/25 bg-gradient-to-br from-gray-900 to-gray-950 p-10 md:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(108,192,74,0.07) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <div className="text-[#6CC04A] font-semibold text-sm uppercase tracking-widest mb-4">No long-term lock-ins</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Not sure where to start?</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Book a free 30-minute strategy call. We'll audit your current digital presence and tell you exactly where the biggest opportunities are.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full font-bold shadow-[0_0_30px_rgba(108,192,74,0.35)]">
                  Book a Free Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
