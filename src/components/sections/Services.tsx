"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Smartphone, Layers, Brain, Zap, Palette } from "lucide-react";
import { SERVICES } from "@/data";
import { itemVariants as item, containerVariants as container } from "@/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Smartphone, Layers, Brain, Zap, Palette,
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="services" className="section-padding bg-[#050505]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={item} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Ce que je peux construire pour vous</h2>
            <p className="text-[#A1A1AA] mt-3 max-w-xl mx-auto">
              Du concept à la production — je gère tout le stack technique.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? Code2;
              return (
                <motion.div key={service.title} variants={item}
                  className="group glass glass-hover rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,107,0,0.06) 0%, transparent 70%)" }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF6B00]/20 group-hover:border-[#FF6B00]/40 transition-all duration-300">
                      <Icon size={22} className="text-[#FF6B00]" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF6B00] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-[#A1A1AA] border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
