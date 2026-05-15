"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PERSONAL } from "@/data";
import { itemVariants, containerVariants } from "@/utils";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 0, ${p.opacity})`; ctx.fill();
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 107, 0, ${0.06 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050505, transparent)" }} aria-hidden="true" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible"
        className="relative z-10 container-custom px-6 text-center">

        <motion.div variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FF6B00]/20 text-sm text-[#FF6B00] mb-8">
          <Sparkles size={14} className="animate-pulse" />
          <span>Disponible pour de nouveaux projets</span>
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
        </motion.div>

        <motion.h1 variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Je construis des produits</span><br />
          <span className="gradient-orange">web, mobile</span><br />
          <span className="text-white">&amp; IA scalables.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {PERSONAL.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-3.5 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#FF6B00]/90 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 flex items-center gap-2">
            Voir mes projets
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          <a href={PERSONAL.whatsapp} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 glass border border-[#25D366]/30 text-white font-semibold rounded-xl hover:border-[#25D366]/60 hover:bg-[#25D366]/5 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)] transition-all duration-300 flex items-center gap-2">
            <SiWhatsapp size={16} style={{ color: "#25D366" }} /> Me contacter
          </a>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl hover:border-[#FF6B00]/30 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
            <SiGithub size={16} /> GitHub
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl hover:border-[#0A66C2]/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
            <FaLinkedin size={16} style={{ color: "#0A66C2" }} /> LinkedIn
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {PERSONAL.stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 border border-white/5 hover:border-[#FF6B00]/20 transition-colors duration-300">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-[#A1A1AA]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[#A1A1AA] tracking-widest uppercase">Défiler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#FF6B00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
