"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data";
import { itemVariants as item, containerVariants as container } from "@/utils";

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-[#111111]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={item} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Ce que disent les clients</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={item}
                className="glass glass-hover rounded-2xl border border-white/5 p-6 relative overflow-hidden group">
                <Quote size={40} className="absolute top-4 right-4 text-[#FF6B00]/10 group-hover:text-[#FF6B00]/20 transition-colors duration-300" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#FF6B00] fill-[#FF6B00]" />
                  ))}
                </div>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/30 flex items-center justify-center text-sm font-bold text-[#FF6B00]">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-[#A1A1AA]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
