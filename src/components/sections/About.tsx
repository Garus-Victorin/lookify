"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Coffee, Rocket, Code2 } from "lucide-react";
import { itemVariants as item, containerVariants as container } from "@/utils";

const HIGHLIGHTS = [
  { icon: Code2, label: "4+ ans", sub: "À construire des produits" },
  { icon: Rocket, label: "20+ projets", sub: "Livrés en production" },
  { icon: Coffee, label: "Full-Stack", sub: "Frontend jusqu'au DevOps" },
  { icon: MapPin, label: "Remote", sub: "Disponible partout" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-[#050505]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div variants={item}>
              <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">À propos</span>
            </motion.div>

            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              Je n&apos;écris pas juste du code.
              <br />
              <span className="gradient-orange">Je construis des produits.</span>
            </motion.h2>

            <motion.div variants={item} className="space-y-4 text-[#A1A1AA] leading-relaxed">
              <p>
                Je suis un développeur Full-Stack &amp; IA autodidacte qui construit des produits scalables et prêts pour la production de A à Z. Je pense comme un ingénieur produit — en obsédant simultanément l&apos;architecture, la performance et l&apos;expérience utilisateur.
              </p>
              <p>
                Mon expertise couvre tout le stack : de la création d&apos;interfaces React pixel-perfect à l&apos;architecture de backends Node.js, en passant par le développement d&apos;apps Flutter et l&apos;intégration de systèmes IA avec RAG, recherche vectorielle et orchestration LLM.
              </p>
              <p>
                Je suis passionné par l&apos;intersection entre{" "}
                <span className="text-white font-medium">l&apos;excellence technique</span> et la{" "}
                <span className="text-white font-medium">vision produit</span>. Chaque ligne de code que j&apos;écris est intentionnelle, scalable et conçue pour durer.
              </p>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#FF6B00]/90 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300">
                Travaillons ensemble
              </button>
            </motion.div>
          </div>

          <motion.div variants={container} className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
              <motion.div key={label} variants={item} className="glass glass-hover rounded-2xl p-6 border border-white/5 group">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                  <Icon size={20} className="text-[#FF6B00]" />
                </div>
                <div className="text-lg font-bold text-white mb-1">{label}</div>
                <div className="text-sm text-[#A1A1AA]">{sub}</div>
              </motion.div>
            ))}

            <motion.div variants={item} className="col-span-2 glass rounded-2xl p-6 border border-[#FF6B00]/10 relative overflow-hidden">
              <div className="absolute inset-0 shimmer pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm text-[#A1A1AA] mb-2">Actuellement focalisé sur</div>
                <div className="flex flex-wrap gap-2">
                  {["IA SaaS", "Systèmes RAG", "Next.js 16", "Flutter", "LangChain"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
