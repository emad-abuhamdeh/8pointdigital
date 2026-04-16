import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

type CursorState = "default" | "hover" | "text" | "clicking";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState("");

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springCfg = { stiffness: 130, damping: 18, mass: 0.6 };
  const ringX = useSpring(mouseX, springCfg);
  const ringY = useSpring(mouseY, springCfg);

  useEffect(() => {
    let rafId: number;

    const moveDot = (x: number, y: number) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }
    };

    const onMove = (e: MouseEvent) => {
      setHidden(false);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      moveDot(e.clientX, e.clientY);

      const el = (e.target as HTMLElement).closest(
        "a, button, [data-cursor], input, textarea, select"
      ) as HTMLElement | null;

      if (el) {
        const tag = el.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea") {
          setState("text");
          setLabel("");
        } else {
          setState("hover");
          setLabel(el.dataset.cursorLabel || "");
        }
      } else {
        setState("default");
        setLabel("");
      }
    };

    const onDown = () => setState((s) => (s === "hover" ? "clicking" : s));
    const onUp = () => setState((s) => (s === "clicking" ? "hover" : s));
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const isHover = state === "hover" || state === "clicking";
  const isText = state === "text";
  const isClick = state === "clicking";

  return (
    <>
      {/* ── Trailing ring ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: ringX, y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 999999,
        }}
        animate={{
          width:  isText ? 2    : isClick ? 22 : isHover ? 52 : 32,
          height: isText ? 28   : isClick ? 22 : isHover ? 52 : 32,
          borderRadius: isText ? "2px" : "50%",
          borderColor: isHover
            ? "rgba(108,192,74,0.85)"
            : "rgba(108,192,74,0.45)",
          backgroundColor: isHover
            ? "rgba(108,192,74,0.08)"
            : "transparent",
          opacity: hidden ? 0 : 1,
          scale: isClick ? 0.85 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="border"
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[#6CC04A] uppercase tracking-widest whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* ── Crisp dot ── */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: isText || isHover ? 0 : 6,
          height: isText || isHover ? 0 : 6,
          background: "#6CC04A",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999999,
          opacity: hidden ? 0 : 1,
          transition: "width 0.15s, height 0.15s, opacity 0.15s",
          boxShadow: "0 0 8px rgba(108,192,74,0.9)",
          willChange: "transform",
        }}
      />
    </>
  );
}
