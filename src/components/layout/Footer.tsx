import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const logoImg = `${import.meta.env.BASE_URL}logo.svg?v=20260416-2`;

const footerLinks = {
  Services: [
    "Website Design", "SEO Optimization", "Paid Advertising", "Social Media", "Brand Identity",
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(108,192,74,0.05) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex mb-6 group">
              <motion.img
                src={logoImg}
                alt="8Point Digital Services"
                className="h-12 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium digital marketing agency driving growth through data, design, and strategy.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.25, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-[#6CC04A] hover:border-[#6CC04A]/30 hover:bg-[#6CC04A]/8 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <Link href="/services"
                    className="text-gray-500 text-sm hover:text-[#6CC04A] transition-colors duration-200 link-lift inline-block">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href}
                    className="text-gray-500 text-sm hover:text-[#6CC04A] transition-colors duration-200 link-lift inline-block">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-widest mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-[#6CC04A]/10 flex items-center justify-center flex-none mt-0.5 group-hover:bg-[#6CC04A]/20 transition-colors">
                  <MapPin size={13} className="text-[#6CC04A]" />
                </div>
                <span className="text-gray-500 text-sm">Ontario, Canada</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-[#6CC04A]/10 flex items-center justify-center flex-none group-hover:bg-[#6CC04A]/20 transition-colors">
                  <Phone size={13} className="text-[#6CC04A]" />
                </div>
                <a href="tel:+13828800039" className="text-gray-500 text-sm hover:text-[#6CC04A] transition-colors link-lift inline-block">
                  +1 382-880-0039
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-[#6CC04A]/10 flex items-center justify-center flex-none group-hover:bg-[#6CC04A]/20 transition-colors">
                  <Mail size={13} className="text-[#6CC04A]" />
                </div>
                <a href="mailto:info@8pointdigital.com" className="text-gray-500 text-sm hover:text-[#6CC04A] transition-colors link-lift inline-block">
                  info@8pointdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} 8Point Digital Services. All rights reserved. Ontario, Canada.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-[#6CC04A] transition-colors link-lift inline-block">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-[#6CC04A] transition-colors link-lift inline-block">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
