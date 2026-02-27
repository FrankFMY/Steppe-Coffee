"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#locations", label: "Кофейни" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-brown-dark" : "text-cream"
          }`}
        >
          Steppe Coffee
        </a>

        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
            scrolled ? "text-brown" : "text-cream/90"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-terracotta transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-brown-dark" : "text-cream"
          }`}
          aria-label="Открыть меню"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-t border-sand"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-brown-dark font-medium text-sm uppercase tracking-wide hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
