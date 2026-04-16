import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── Particle config ─── */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  angle: (i / 24) * 360,
  radius: 180 + (i % 3) * 50,
  size: i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
  duration: 3 + (i % 5) * 0.6,
  delay: (i / 24) * 2,
  opacity: 0.3 + (i % 4) * 0.18,
}));

const TITLE = "8POINT DIGITAL SERVICES";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"load" | "burst" | "exit">("load");

  useEffect(() => {
    /* Simulate loading progress */
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        const step = p < 60 ? 2.5 : p < 85 ? 1.5 : 0.8;
        return Math.min(p + step, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase("burst"), 200);
      setTimeout(() => setPhase("exit"), 900);
      setTimeout(() => onComplete(), 1700);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#030712" }}
        >
          {/* ── Deep background glow ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={phase === "burst"
              ? { opacity: [0.08, 0.6, 0] }
              : { opacity: [0.04, 0.12, 0.04] }}
            transition={phase === "burst"
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(108,192,74,1) 0%, transparent 70%)" }}
          />

          {/* ── Grid lines (subtle depth) ── */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(108,192,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,192,74,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          {/* ── Orbiting particles ── */}
          <div className="absolute" style={{ width: 0, height: 0 }}>
            {PARTICLES.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * p.radius;
              const y = Math.sin(rad) * p.radius;
              return (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full"
                  style={{
                    width: p.size, height: p.size,
                    background: "#6CC04A",
                    left: x, top: y,
                    boxShadow: `0 0 ${p.size * 3}px rgba(108,192,74,0.9)`,
                  }}
                  animate={{
                    opacity: [0, p.opacity, 0],
                    scale: [0, 1, 0],
                    x: [x, x + Math.cos(rad) * 20, x],
                    y: [y, y + Math.sin(rad) * 20, y],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>

          {/* ── Burst ring ── */}
          {phase === "burst" && (
            <motion.div
              className="absolute rounded-full border border-[#6CC04A]"
              initial={{ width: 200, height: 200, opacity: 1 }}
              animate={{ width: 900, height: 900, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ boxShadow: "0 0 40px rgba(108,192,74,0.6), inset 0 0 40px rgba(108,192,74,0.3)" }}
            />
          )}
          {phase === "burst" && (
            <motion.div
              className="absolute rounded-full border border-[#6CC04A]/40"
              initial={{ width: 200, height: 200, opacity: 0.7 }}
              animate={{ width: 1300, height: 1300, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            />
          )}

          {/* ── 3D "8" SVG ── */}
          <motion.div
            animate={phase === "burst"
              ? { scale: [1, 1.5, 0.8], opacity: [1, 1, 0] }
              : {
                  rotateY: [0, 15, 0, -15, 0],
                  rotateX: [0, 5, 0, -5, 0],
                  y: [0, -12, 0, 12, 0],
                }}
            transition={phase === "burst"
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            className="relative z-10"
          >
            {/* Outer glow ring — pulses */}
            <motion.div
              className="absolute -inset-16 rounded-full pointer-events-none"
              animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "radial-gradient(ellipse at center, rgba(108,192,74,0.30) 0%, transparent 70%)" }}
            />

            <svg
              viewBox="0 0 200 360"
              style={{
                width: 160,
                height: 290,
                filter: "drop-shadow(0 0 30px rgba(108,192,74,0.9)) drop-shadow(0 0 70px rgba(108,192,74,0.5)) drop-shadow(0 0 120px rgba(108,192,74,0.2))",
              }}
            >
              <defs>
                <linearGradient id="pl-green" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C4F09A" />
                  <stop offset="30%" stopColor="#9EE07A" />
                  <stop offset="70%" stopColor="#6CC04A" />
                  <stop offset="100%" stopColor="#2E6A14" />
                </linearGradient>
                <linearGradient id="pl-green2" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#C4F09A" />
                  <stop offset="40%" stopColor="#6CC04A" />
                  <stop offset="100%" stopColor="#1E4A0A" />
                </linearGradient>
                <linearGradient id="pl-shine" x1="0%" y1="0%" x2="60%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="pl-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="black" stopOpacity="0" />
                  <stop offset="100%" stopColor="black" stopOpacity="0.4" />
                </linearGradient>
                <filter id="pl-glow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* TOP LOOP — 3D layered */}
              {/* Shadow layer (depth illusion) */}
              <path d="M 100,22 C 142,22 174,45 174,83 C 174,123 142,158 100,178 C 58,158 26,123 26,83 C 26,45 58,22 100,22 Z"
                fill="#0A1A04" opacity="0.9" transform="translate(4,4)" />
              {/* Main fill */}
              <path d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z"
                fill="url(#pl-green)" filter="url(#pl-glow)" />
              {/* Highlight shine */}
              <path d="M 100,24 C 133,24 158,44 161,76 C 138,52 110,40 100,24 Z"
                fill="url(#pl-shine)" opacity="0.8" />
              {/* Side shadow for 3D */}
              <path d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z"
                fill="url(#pl-shadow)" opacity="0.3" />
              {/* Inner cutout */}
              <path d="M 100,42 C 128,42 148,58 148,80 C 148,102 128,120 100,128 C 72,120 52,102 52,80 C 52,58 72,42 100,42 Z"
                fill="#030712" />
              {/* Inner cutout rim light */}
              <path d="M 100,42 C 128,42 148,58 148,80 C 148,102 128,120 100,128 C 72,120 52,102 52,80 C 52,58 72,42 100,42 Z"
                fill="none" stroke="rgba(108,192,74,0.3)" strokeWidth="1" />
              {/* Animated scan line */}
              <motion.path
                d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z"
                fill="none" stroke="#9EE07A" strokeWidth="1.5" strokeDasharray="380"
                animate={{ strokeDashoffset: [380, 0, -380] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                opacity="0.9"
              />

              {/* BOTTOM LOOP — larger, 3D */}
              <path d="M 100,179 C 150,179 189,210 189,258 C 189,308 150,346 100,346 C 50,346 11,308 11,258 C 11,210 50,179 100,179 Z"
                fill="#0A1A04" opacity="0.9" transform="translate(4,4)" />
              <path d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z"
                fill="url(#pl-green2)" filter="url(#pl-glow)" />
              <path d="M 100,181 C 140,183 172,207 177,240 C 155,210 128,192 100,181 Z"
                fill="url(#pl-shine)" opacity="0.7" />
              <path d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z"
                fill="url(#pl-shadow)" opacity="0.25" />
              <path d="M 100,200 C 138,200 162,222 162,255 C 162,288 138,312 100,318 C 62,312 38,288 38,255 C 38,222 62,200 100,200 Z"
                fill="#030712" />
              <path d="M 100,200 C 138,200 162,222 162,255 C 162,288 138,312 100,318 C 62,312 38,288 38,255 C 38,222 62,200 100,200 Z"
                fill="none" stroke="rgba(108,192,74,0.3)" strokeWidth="1" />
              <motion.path
                d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z"
                fill="none" stroke="#9EE07A" strokeWidth="1.5" strokeDasharray="480"
                animate={{ strokeDashoffset: [-480, 0, 480] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                opacity="0.9"
              />
            </svg>
          </motion.div>

          {/* ── Title ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative z-10 mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-[3px]">
              {TITLE.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                  className={`text-sm font-bold tracking-[0.25em] select-none ${
                    ch === " " ? "w-3" :
                    i < 6 ? "text-[#6CC04A]" : "text-white/60"
                  }`}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative w-52 h-px bg-white/10 overflow-visible mt-4">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #3A8020, #9EE07A)",
                  boxShadow: "0 0 12px rgba(108,192,74,0.8)",
                  transition: "width 0.08s linear",
                }}
              />
              {/* Glow head */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#9EE07A]"
                style={{
                  left: `${progress}%`,
                  boxShadow: "0 0 10px 3px rgba(158,224,122,0.9)",
                  transition: "left 0.08s linear",
                  marginLeft: "-4px",
                }}
              />
            </div>

            <motion.div
              className="text-[#6CC04A]/60 text-[10px] font-mono tracking-widest mt-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        /* ── Exit: two-panel curtain reveal ── */
        <motion.div key="exit" className="fixed inset-0 z-[9999] pointer-events-none">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2"
            style={{ background: "#030712", originY: 0 }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{ background: "#030712", originY: 1 }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
