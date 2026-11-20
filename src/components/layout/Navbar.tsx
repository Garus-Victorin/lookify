"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/utils";
import { PERSONAL } from "@/data";

const NAV_LINKS = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Projets", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#050505] border-b border-white/5 py-3"
        )}>
        <div className="container-custom px-6 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-shadow duration-300">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">
              Garus<span className="text-[#FF6B00]">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-[#FF6B00] transition-colors duration-200 rounded-lg hover:bg-[#FF6B00]/5">
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`mailto:${PERSONAL.email}`}
              className="px-4 py-2 text-sm font-medium bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300">
              Me contacter
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors" aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 glass border-b border-white/5 p-6 md:hidden">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button key={link.href} onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-[#A1A1AA] hover:text-[#FF6B00] hover:bg-[#FF6B00]/5 rounded-lg transition-all duration-200">
                  {link.label}
                </button>
              ))}
              <a href={`mailto:${PERSONAL.email}`}
                className="mt-2 px-4 py-3 text-center font-medium bg-[#FF6B00] text-white rounded-lg">
                Me contacter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
