import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Megaphone, Target, CheckCircle2, Share2, Gem, Search, Star, Quote, TrendingUp, Users, Zap, MousePointerClick } from "lucide-react";
import { Link } from "wouter";
import { useRef, useState, useEffect } from "react";

const logoIcon = `${import.meta.env.BASE_URL}Logo2.svg?v=20260416-2`;

/* ═══════════════════════════════════════════
   Animated 3D "8" — hero visual (UNCHANGED)
═══════════════════════════════════════════ */
const AnimatedEight = () => (
  <div className="relative w-72 h-[28rem] md:w-[26rem] md:h-[38rem] flex items-center justify-center">
    <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(108,192,74,0.2) 0%, transparent 70%)" }} />
    <div className="absolute inset-8 rounded-[3rem] bg-black/10 backdrop-blur-sm border border-white/10" />
    <motion.div animate={{ rotateY: [0, 8, 0, -8, 0], rotateX: [0, 3, 0, -3, 0], y: [0, -8, 0, 8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ perspective: "1000px", transformStyle: "preserve-3d" }} className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 360" className="w-full h-full" style={{ filter: "drop-shadow(0 0 40px rgba(108,192,74,0.7)) drop-shadow(0 0 80px rgba(108,192,74,0.3))" }}>
        <defs>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#9EE07A" /><stop offset="40%" stopColor="#6CC04A" /><stop offset="100%" stopColor="#3A8020" /></linearGradient>
          <linearGradient id="greenGradReverse" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#9EE07A" /><stop offset="60%" stopColor="#6CC04A" /><stop offset="100%" stopColor="#3A8020" /></linearGradient>
          <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="white" stopOpacity="0.8" /><stop offset="100%" stopColor="white" stopOpacity="0.0" /></linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z" fill="url(#greenGrad)" opacity="0.85"/>
        <path d="M 100,24 C 130,24 155,42 158,72 C 135,50 108,42 100,24 Z" fill="url(#glassShine)" opacity="0.6"/>
        <path d="M 100,42 C 128,42 148,58 148,80 C 148,102 128,120 100,128 C 72,120 52,102 52,80 C 52,58 72,42 100,42 Z" fill="white" opacity="0.08"/>
        <path d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z" fill="none" stroke="url(#greenGrad)" strokeWidth="3" filter="url(#glow)"/>
        <motion.path d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z" fill="none" stroke="#9EE07A" strokeWidth="1.5" strokeDasharray="400" animate={{ strokeDashoffset: [400, 0, -400] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} opacity="0.7"/>
        <path d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z" fill="url(#greenGradReverse)" opacity="0.85"/>
        <path d="M 100,181 C 138,183 170,205 175,235 C 155,208 128,190 100,181 Z" fill="url(#glassShine)" opacity="0.5"/>
        <path d="M 100,200 C 138,200 162,222 162,255 C 162,288 138,312 100,318 C 62,312 38,288 38,255 C 38,222 62,200 100,200 Z" fill="white" opacity="0.06"/>
        <path d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z" fill="none" stroke="url(#greenGradReverse)" strokeWidth="3" filter="url(#glow)"/>
        <motion.path d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z" fill="none" stroke="#9EE07A" strokeWidth="1.5" strokeDasharray="500" animate={{ strokeDashoffset: [-500, 0, 500] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} opacity="0.7"/>
      </svg>
    </motion.div>
    {[{ x: "10%", y: "15%", delay: 0 }, { x: "85%", y: "20%", delay: 1 }, { x: "5%", y: "75%", delay: 2 }, { x: "90%", y: "70%", delay: 0.5 }, { x: "50%", y: "5%", delay: 1.5 }, { x: "50%", y: "95%", delay: 2.5 }].map((p, i) => (
      <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#6CC04A]" style={{ left: p.x, top: p.y }} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}/>
    ))}
  </div>
);

/* ═══════════════════════════════════════════
   3D Tilt Card with Spotlight
═══════════════════════════════════════════ */
function TiltCard({ children, className = "", spotlight = true }: { children: React.ReactNode; className?: string; spotlight?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 14;
    setTilt({ x, y });
    if (spotlight) {
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current.style.setProperty("--mx", `${mx}%`);
      ref.current.style.setProperty("--my", `${my}%`);
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${spotlight ? "spotlight-card" : ""}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.03 : 1})`,
        transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        willChange: "transform",
      }}
    >
      {spotlight && <div className="spotlight" />}
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Magnetic CTA Button
═══════════════════════════════════════════ */
function MagneticCTA({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: dx * 0.28, y: dy * 0.28 });
  };

  const addRipple = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onClick={addRipple}
      whileTap={{ scale: 0.95 }}
      className={`ripple-btn btn-shimmer glow-pulse inline-flex items-center gap-2 ${className}`}
    >
      {children}
    </motion.a>
  );
}

/* ═══════════════════════════════════════════
   3D Flip Counter
═══════════════════════════════════════════ */
function FlipCounter({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(eased * target);
      setDisplayed(next);
      if (progress < 1) requestAnimationFrame(step);
    };
    setFlipping(true);
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ perspective: "300px" }}>
      <motion.div
        key={Math.floor(displayed / 10)}
        initial={{ rotateX: -60, opacity: 0, y: -20 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-black text-white"
        style={{ transformOrigin: "50% 100%", display: "inline-block" }}
      >
        {displayed}{suffix}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Infinite Marquee
═══════════════════════════════════════════ */
const CAPABILITIES = [
  "Website Design", "SEO Strategy", "Google Ads", "Meta Ads", "LinkedIn Campaigns",
  "Brand Identity", "Logo Design", "CRO", "Email Marketing", "Social Media", "Shopify",
  "WordPress", "Content Strategy", "Analytics", "Retargeting", "Local SEO",
];
function Marquee() {
  const doubled = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #030712 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, #030712 0%, transparent 100%)" }} />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((cap, i) => (
          <div key={i} className="flex-none px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm font-medium whitespace-nowrap hover:border-[#6CC04A]/40 hover:text-[#6CC04A] transition-colors">
            {cap}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   3D Flip Card (portfolio)
═══════════════════════════════════════════ */
function FlipCard({ front, back }: {
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative cursor-pointer" style={{ perspective: "1000px", height: "240px" }}
      onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          {back}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Orbit Rings SVG
═══════════════════════════════════════════ */
function OrbitRings() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {[{ r: 180, duration: 14, opacity: 0.15, dash: "8 12" },
        { r: 240, duration: 20, opacity: 0.10, dash: "4 20" },
        { r: 310, duration: 28, opacity: 0.07, dash: "2 30" }].map((ring, i) => (
        <motion.svg key={i} className="absolute" width={ring.r * 2 + 40} height={ring.r * 2 + 40}
          style={{ opacity: ring.opacity }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}>
          <circle cx={ring.r + 20} cy={ring.r + 20} r={ring.r} fill="none" stroke="#6CC04A" strokeWidth="1" strokeDasharray={ring.dash} />
          {/* Dot rider */}
          <circle cx={ring.r + 20 + ring.r} cy={ring.r + 20} r="4" fill="#6CC04A" style={{ filter: "drop-shadow(0 0 6px rgba(108,192,74,1))" }} />
        </motion.svg>
      ))}
    </div>
  );
}

const services = [
  { icon: Globe, title: "Website Design & Dev", desc: "High-performance websites that convert visitors into buyers from the first impression.", stat: "65%", statLabel: "Engagement lift", color: "from-emerald-950 to-gray-900" },
  { icon: Search, title: "SEO Optimization", desc: "Sustainable organic traffic that compounds — own your rankings, stop renting attention.", stat: "90d", statLabel: "To page 1 (avg.)", color: "from-green-950 to-gray-900" },
  { icon: MousePointerClick, title: "Paid Advertising", desc: "Precision-targeted campaigns on Google & Meta engineered for measurable ROI.", stat: "3.4×", statLabel: "Avg. ROAS", color: "from-teal-950 to-gray-900" },
  { icon: Share2, title: "Social Media", desc: "Content strategy, production, and community management that builds loyal audiences.", stat: "4×", statLabel: "Engagement rate", color: "from-zinc-900 to-gray-900" },
  { icon: Megaphone, title: "Brand Identity", desc: "Complete brand systems that make you instantly recognizable and command premium pricing.", stat: "30%", statLabel: "Pricing power", color: "from-slate-900 to-gray-900" },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Data-driven conversion optimisation that squeezes more revenue from your existing traffic.", stat: "2.1×", statLabel: "Conversion boost", color: "from-gray-900 to-gray-950" },
];

const process = [
  { num: "01", title: "Discovery & Audit", desc: "We dig deep into your business, competitors, and current digital footprint to find the highest-leverage opportunities." },
  { num: "02", title: "Strategy Build", desc: "A bespoke 90-day roadmap tailored to your goals, budget, and market. No templates, no guesswork." },
  { num: "03", title: "Creative Execution", desc: "Our team builds, launches, and iterates fast — design, copy, and code working in lock-step." },
  { num: "04", title: "Measure & Scale", desc: "We track every metric that matters, double down on what works, and cut what doesn't. Relentlessly." },
];

const testimonials = [
  { quote: "8Point completely transformed our online presence. Our organic traffic is up 200% in six months. The team understands what actually moves the needle.", author: "Sarah Jenkins", role: "CMO, TechFlow", rating: 5 },
  { quote: "The design quality is unlike anything we've seen from a Canadian agency at this price point. It's worth every dollar — our brand perception has never been stronger.", author: "Marcus Thorne", role: "Founder, Apex Real Estate", rating: 5 },
  { quote: "Finally, an agency that obsesses over real ROI. The paid ad campaigns returned 4.2× in 90 days. Best business decision we made this year.", author: "Elena Rodriguez", role: "Director of Growth, Solace Health", rating: 5 },
];

const portfolio = [
  {
    client: "Nexus Tech", industry: "B2B SaaS", metric: "210%", metricLabel: "More Demo Bookings", tag: "Website + LinkedIn Ads", gradient: "from-emerald-950 to-gray-950",
    stats: [{ v: "210%", l: "Demo Requests" }, { v: "68%", l: "Bounce Rate ↓" }, { v: "3.2×", l: "Lead Quality" }],
    detail: "Redesigned site + LinkedIn ad funnel targeting C-suite decision makers. Conversion-optimised landing pages with automated demo booking.",
  },
  {
    client: "Verdant Retail", industry: "E-Commerce", metric: "3×", metricLabel: "Revenue in 90 Days", tag: "SEO + Meta Ads", gradient: "from-green-950 to-gray-950",
    stats: [{ v: "145%", l: "ROAS Improvement" }, { v: "40%", l: "Less Abandonment" }, { v: "$120K", l: "Monthly Revenue" }],
    detail: "Shopify optimisation, checkout redesign, multi-channel Meta retargeting, and email lifecycle automation that recovered abandoned carts.",
  },
  {
    client: "Pinnacle Health", industry: "Healthcare", metric: "#1", metricLabel: "Local Search Rankings", tag: "Local SEO + Branding", gradient: "from-teal-950 to-gray-950",
    stats: [{ v: "#1", l: "Google Rankings" }, { v: "320%", l: "Local Traffic" }, { v: "4.9★", l: "Review Score" }],
    detail: "Full local SEO overhaul, Google Business Profile management, and a rebrand that positioned them as the premium provider in their region.",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      {/* ══ HERO — UNCHANGED ══ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(108,192,74,0.12) 0%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 20% 30%, rgba(108,192,74,0.06) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/0 via-gray-950/50 to-gray-950" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC04A]/40 bg-[#6CC04A]/10 text-[#6CC04A] font-medium text-sm mb-6">Ontario's Premium Digital Agency</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
                We Grow Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">Business Digitally.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">Data-driven strategies, breathtaking design, and relentless execution to scale your brand in the modern digital landscape.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"><Button size="lg" className="h-14 px-8 text-lg bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full w-full sm:w-auto shadow-[0_0_30px_rgba(108,192,74,0.4)]">Get Started <ArrowRight className="ml-2" /></Button></Link>
                <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-white/20 text-white hover:bg-white/10">Book a Free Consultation</Button></Link>
              </div>
              {/* Hero floating micro-badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { label: "50+ Brands Scaled", icon: "🚀" },
                  { label: "Ontario-Based", icon: "📍" },
                  { label: "98% Retention", icon: "⭐" },
                ].map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.15 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                    <span>{b.icon}</span>{b.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="flex justify-center lg:justify-end" style={{ y: heroY }}>
              <AnimatedEight />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ STATS — 3D Flip Counters ══ */}
      <section className="border-y border-white/10 bg-gray-900/60 py-0 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(108,192,74,0.03) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { target: 50, suffix: "+", label: "Brands Scaled", icon: Users },
              { target: 98, suffix: "%", label: "Client Retention", icon: Star },
              { target: 180, suffix: "%", label: "Avg. Traffic Growth", icon: TrendingUp },
              { target: 34, suffix: "×", label: "Avg. ROAS (÷10)", icon: Zap },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col items-center justify-center py-12 gap-2 group">
                  <Icon size={16} className="text-[#6CC04A] mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <FlipCounter target={s.target} suffix={s.suffix} duration={1600 + i * 200} />
                  <div className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES MARQUEE ══ */}
      <section className="py-8 bg-gray-950 overflow-hidden">
        <Marquee />
      </section>

      {/* ══ SERVICES — 3D Tilt Cards with depth entrance ══ */}
      <section className="py-28 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(108,192,74,0.05) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-4">What We Do</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Six ways we grow your business.</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">End-to-end digital services that drive measurable results — not vanity metrics.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 60, z: -100, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, z: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ perspective: "600px" }}
                >
                  <TiltCard className={`relative rounded-2xl bg-gradient-to-br ${s.color} border border-white/10 hover:border-[#6CC04A]/30 p-7 h-full flex flex-col overflow-hidden group cursor-default`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)" }} />
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: "radial-gradient(circle, #6CC04A, transparent)" }} />
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#6CC04A]/15 flex items-center justify-center group-hover:bg-[#6CC04A]/25 transition-colors">
                        <Icon size={22} className="text-[#6CC04A]" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-[#6CC04A]">{s.stat}</div>
                        <div className="text-[10px] text-gray-600 uppercase tracking-widest leading-tight">{s.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <Link href="/services" className="mt-5 flex items-center gap-1.5 text-[#6CC04A] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      Learn more <ArrowRight size={14} />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6CC04A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 text-white hover:bg-white/10">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PROCESS — 3D perspective timeline ══ */}
      <section className="py-28 border-t border-white/10 bg-gray-900/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={logoIcon} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04]" style={{ width: "240px", mixBlendMode: "screen" }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-4">How We Work</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">From discovery to scale — in four steps.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#6CC04A]/30 to-transparent" />
            {process.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                style={{ perspective: "500px" }}
              >
                <TiltCard className="relative bg-gray-950/80 border border-white/10 hover:border-[#6CC04A]/25 rounded-2xl p-7 h-full group cursor-default">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,192,74,0.08) 0%, transparent 70%)" }} />
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-[#6CC04A]/40 group-hover:border-[#6CC04A] transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full group-hover:bg-[#6CC04A]/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-[#6CC04A] font-black text-sm">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US — Orbit rings + 3D metrics ══ */}
      <section className="py-28 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 70% at 0% 50%, rgba(108,192,74,0.04) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — 3D metrics panel with orbit rings */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative flex items-center justify-center min-h-[440px]">
              <OrbitRings />
              <TiltCard className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 p-10 overflow-hidden cursor-default w-full max-w-md z-10">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(108,192,74,0.10) 0%, transparent 70%)" }} />
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { val: "+200%", lbl: "Organic Traffic", green: true },
                    { val: "4.2×", lbl: "Return on Ads", green: true },
                    { val: "98%", lbl: "Client Retention", green: false },
                    { val: "50+", lbl: "Brands Served", green: false },
                  ].map((m, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#6CC04A]/30 transition-colors"
                      style={{ perspective: "400px" }}
                    >
                      <div className={`text-3xl font-black mb-1 ${m.green ? "text-[#6CC04A]" : "text-white"}`}>{m.val}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest">{m.lbl}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-[#6CC04A]/10 border border-[#6CC04A]/25 rounded-2xl px-5 py-4">
                  <div className="text-[#6CC04A] font-bold text-sm mb-1">Average Client Result</div>
                  <div className="text-gray-300 text-sm">Within the first 6 months, our clients see a measurable, compounding return on every dollar invested.</div>
                </div>
              </TiltCard>

              {/* Floating badge */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 md:right-4 bg-gray-950 border border-[#6CC04A]/30 rounded-2xl px-5 py-3 shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6CC04A]/20 flex items-center justify-center">
                    <Star size={14} className="text-[#6CC04A]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Ontario's Agency</div>
                    <div className="text-gray-500 text-xs">Est. 2018 · 50+ clients</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right copy */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-6">Why 8Point</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">We treat your business like it's our own.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">We're not an order-taker agency. We challenge your assumptions, bring fresh ideas, and hold ourselves accountable to numbers that actually matter.</p>
              <div className="space-y-4">
                {[
                  { title: "Results, not reports", desc: "Every strategy is tied to a business outcome. We measure what moves revenue." },
                  { title: "Radical transparency", desc: "You always know what we're doing, why, and what it produced." },
                  { title: "Senior talent only", desc: "No juniors running your account. Your business gets our best, every time." },
                  { title: "Ontario-rooted team", desc: "We know your market, your competition, and your customers intimately." },
                ].map((p, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#6CC04A]/20 transition-colors"
                  >
                    <CheckCircle2 size={18} className="text-[#6CC04A] flex-none mt-0.5" />
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{p.title}</div>
                      <div className="text-gray-500 text-sm">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/about">
                <Button className="mt-10 h-12 px-8 rounded-full border border-white/20 bg-transparent hover:bg-white/10 text-white">
                  Our Story <ArrowRight size={15} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS — 3D depth stack carousel ══ */}
      <section className="py-28 border-t border-white/10 bg-gray-900/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(108,192,74,0.05) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-4">Client Stories</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Hear it from the brands we've scaled.</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Depth shadow cards behind */}
            <div className="relative" style={{ perspective: "1000px" }}>
              <div className="absolute inset-x-8 -bottom-3 h-full rounded-2xl bg-gray-900 border border-white/5 scale-[0.96]" style={{ zIndex: 1 }} />
              <div className="absolute inset-x-4 -bottom-1.5 h-full rounded-2xl bg-gray-900/60 border border-white/5 scale-[0.98]" style={{ zIndex: 2 }} />

              {/* Active card with AnimatePresence */}
              <div className="relative" style={{ zIndex: 10 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20, rotateX: -8 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -15, rotateX: 8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl bg-gray-950 border border-white/10 p-8 md:p-10 flex flex-col gap-6"
                    style={{
                      background: "linear-gradient(135deg, #111827 0%, #030712 100%)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,192,74,0.08)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(108,192,74,0.06) 0%, transparent 70%)" }} />
                    <div className="absolute top-0 left-1/4 right-1/4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(108,192,74,0.4), transparent)" }} />

                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, si) => (
                        <Star key={si} size={15} className="text-[#6CC04A] fill-[#6CC04A]" />
                      ))}
                    </div>
                    <div className="flex items-start gap-4">
                      <Quote size={28} className="text-[#6CC04A]/30 flex-none mt-1" />
                      <p className="text-gray-100 text-lg md:text-xl leading-relaxed italic">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                      <div className="w-11 h-11 rounded-full bg-[#6CC04A]/15 border border-[#6CC04A]/30 flex items-center justify-center text-[#6CC04A] font-bold text-base flex-none">
                        {testimonials[activeTestimonial].author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonials[activeTestimonial].author}</div>
                        <div className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dot nav */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-[#6CC04A]" : "w-1.5 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO — 3D Flip Cards ══ */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-[#6CC04A] text-xs font-semibold uppercase tracking-wider mb-4">Results Speak Louder</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Recent wins.</h2>
              <p className="text-gray-500 text-sm mt-2">Hover a card to see the full breakdown.</p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="h-11 px-7 rounded-full border-white/20 text-white hover:bg-white/10 flex-none">
                Full Portfolio <ArrowRight size={15} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {portfolio.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <FlipCard
                  front={
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${p.gradient} border border-white/10 p-8 flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">{p.tag}</span>
                          <span className="text-gray-600 text-xs">{p.industry}</span>
                        </div>
                        <div className="text-6xl font-black text-[#6CC04A] mb-1">{p.metric}</div>
                        <div className="text-gray-400 text-sm">{p.metricLabel}</div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{p.client}</div>
                        <div className="text-[#6CC04A] text-xs mt-1 flex items-center gap-1">Hover to see results <ArrowRight size={10} /></div>
                      </div>
                    </div>
                  }
                  back={
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${p.gradient} border border-[#6CC04A]/30 p-8 flex flex-col justify-between`}
                      style={{ background: "linear-gradient(135deg, #0f2a0a 0%, #030712 100%)" }}>
                      <div>
                        <div className="text-[#6CC04A] font-bold text-xs uppercase tracking-widest mb-4">{p.client} · Results</div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {p.stats.map((s, si) => (
                            <div key={si} className="text-center">
                              <div className="text-xl font-black text-[#6CC04A]">{s.v}</div>
                              <div className="text-[9px] text-gray-500 uppercase tracking-wide leading-tight mt-0.5">{s.l}</div>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">{p.detail}</p>
                      </div>
                      <Link href="/portfolio" className="text-[#6CC04A] text-xs font-semibold flex items-center gap-1 mt-3">
                        Full case study <ArrowRight size={10} />
                      </Link>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="py-12 px-4 md:px-6 border-t border-white/10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-[#6CC04A]/25 bg-gradient-to-br from-gray-900 to-gray-950 p-10 md:p-20 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(108,192,74,0.09) 0%, transparent 70%)" }} />
            <img src={logoIcon} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]" style={{ width: "220px", mixBlendMode: "screen" }} />
            <div className="relative z-10">
              <div className="text-[#6CC04A] text-sm font-semibold uppercase tracking-widest mb-4">Free strategy session</div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to scale your brand?</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Book a free 30-minute call. We'll audit your digital presence and show you exactly where the biggest opportunities are hiding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-12 text-lg bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full font-bold shadow-[0_0_40px_rgba(108,192,74,0.40)]">
                    Book a Free Call <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white/10">See Our Work</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="h-12" />
      </section>

      <Footer />
    </div>
  );
}
