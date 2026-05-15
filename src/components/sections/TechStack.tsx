"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/data";
import { itemVariants as item, containerVariants as container } from "@/utils";
import {
  SiTypescript, SiJavascript, SiPython, SiPhp, SiMysql, SiCplusplus, SiC, SiGnubash,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiVuedotjs, SiGreensock,
  SiHtml5, SiCss, SiAngular, SiJquery, SiBootstrap,
  SiNodedotjs, SiHono, SiPrisma, SiLaravel, SiDjango, SiFlask, SiOpenapiinitiative, SiGraphql,
  SiFlutter, SiOpenai,
  SiPostgresql, SiSupabase, SiRedis, SiSqlite, SiSqlalchemy,
  SiVercel, SiDocker, SiGithubactions, SiCloudflare,
} from "react-icons/si";
import { FaDatabase, FaBrain, FaBolt } from "react-icons/fa";

const ICON_MAP: Record<string, React.ElementType> = {
  SiTypescript, SiJavascript, SiPython, SiPhp, SiMysql, SiCplusplus, SiC, SiGnubash,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiVuedotjs, SiGreensock,
  SiHtml5, SiCss, SiAngular, SiJquery, SiBootstrap,
  SiNodedotjs, SiHono, SiPrisma, SiLaravel, SiDjango, SiFlask, SiOpenapiinitiative, SiGraphql,
  SiFlutter, SiOpenai,
  SiGroq: FaBolt, SiPinecone: FaBrain,
  SiPostgresql, SiSupabase, SiRedis, SiSqlite, SiSqlalchemy,
  SiVercel, SiDocker, SiGithubactions, SiCloudflare,
};

const CATEGORIES = Object.keys(SKILLS) as Array<keyof typeof SKILLS>;

export default function TechStack() {
  const [active, setActive] = useState<keyof typeof SKILLS>("Tout");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="stack" className="section-padding bg-[#111111]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={item} className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">Stack Technique</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Les outils avec lesquels je construis</h2>
            <p className="text-[#A1A1AA] mt-3 max-w-xl mx-auto">
              Un ensemble de technologies soigneusement sélectionnées pour construire des produits modernes et scalables.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-[#FF6B00] text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                    : "glass text-[#A1A1AA] hover:text-white border border-white/5 hover:border-[#FF6B00]/20"
                }`}>
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              className={`grid gap-3 ${active === "Tout" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}`}>
              {SKILLS[active].map((skill, i) => {
                const IconComponent = ICON_MAP[skill.icon] ?? FaDatabase;
                return (
                  <motion.div key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="glass glass-hover rounded-xl p-4 border border-white/5 group text-center flex flex-col items-center gap-3 cursor-default">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${skill.color}18`, boxShadow: `0 0 0 1px ${skill.color}22` }}>
                      <IconComponent size={22} style={{ color: skill.color }} />
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-[#FF6B00] transition-colors duration-300 leading-tight">
                      {skill.name}
                    </div>
                    <div className="w-full">
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }} animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: i * 0.05 + 0.2 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }} />
                      </div>
                      <div className="text-xs text-[#A1A1AA] mt-1">{skill.level}%</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
