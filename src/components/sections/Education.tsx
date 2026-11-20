"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { EDUCATION } from "@/data";
import { itemVariants as item, containerVariants as container } from "@/utils";

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding bg-[#050505]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={item} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">Formation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Mon parcours académique</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B00]/50 via-[#FF6B00]/20 to-transparent hidden md:block" />
            <div className="space-y-8">
              {EDUCATION.map((edu) => (
                <motion.div key={edu.degree} variants={item} className="md:pl-16 relative">
                  <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 items-center justify-center">
                    <GraduationCap size={18} className="text-[#FF6B00]" />
                  </div>
                  <div className="glass glass-hover rounded-2xl border border-white/5 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                        <span className="text-[#FF6B00] font-medium text-sm">{edu.school}</span>
                      </div>
                      <span className="text-xs text-[#A1A1AA] glass px-3 py-1.5 rounded-full border border-white/5 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">{edu.description}</p>
                    {edu.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {edu.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                            <CheckCircle2 size={14} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
