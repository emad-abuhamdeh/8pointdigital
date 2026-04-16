import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";

const logoImg = "/logo.svg";

/* Magnetic button wrapper */
function MagneticBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: dx * 0.32, y: dy * 0.32 });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 14 }}
      whileTap={{ scale: 0.94 }}
      data-cursor-label="Open"
      className="relative bg-[#6CC04A] text-white font-bold rounded-full px-6 py-2 text-sm overflow-hidden group"
      style={{ boxShadow: "0 0 16px rgba(108,192,74,0.35)" }}
    >
      {/* Shimmer on hover */}
      <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

/* Nav link with animated underline */
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}>
      <span
        className="relative text-sm font-medium block py-0.5"
        style={{ color: active ? "#6CC04A" : "rgba(255,255,255,0.75)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-px rounded-full"
          style={{ background: "#6CC04A", transformOrigin: "left" }}
          initial={false}
          animate={{ scaleX: active ? 1 : hovered ? 1 : 0, opacity: active ? 0.8 : hovered ? 0.6 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Letter glow on hover */}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "#6CC04A", filter: "blur(8px)", zIndex: -1 }}
        >
          {label}
        </motion.span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-gray-950/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <motion.img
            src={logoImg}
            alt="8Point Digital Services"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ mixBlendMode: "screen" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} label={link.name} active={location === link.href} />
          ))}
          <MagneticBtn onClick={openModal}>Get Started</MagneticBtn>
        </nav>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.88 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={24} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={24} /></motion.span>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden absolute top-full left-0 right-0 bg-gray-950/98 border-b border-white/10 shadow-lg backdrop-blur-md"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={link.href} onClick={() => setMobileMenuOpen(false)}
                    className={`block text-base font-medium py-3 px-2 rounded-lg transition-all duration-200 hover:bg-white/5 hover:text-[#6CC04A] hover:pl-4 ${location === link.href ? "text-[#6CC04A]" : "text-white/80"}`}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-3">
                <button onClick={() => { setMobileMenuOpen(false); openModal(); }}
                  className="w-full py-3 rounded-full bg-[#6CC04A] text-white font-bold hover:bg-[#5aab3b] active:scale-95 transition-all shadow-[0_0_20px_rgba(108,192,74,0.3)]">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
