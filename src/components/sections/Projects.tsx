"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { PROJECTS } from "@/data";
import { itemVariants as item, containerVariants as container } from "@/utils";

export default function Projects() {
  const [activeId, setActiveId] = useState<string>(PROJECTS.filter((p) => p.featured)[0].id);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const active = featured.find((p) => p.id === activeId)!;

  return (
    <section id="projects" className="section-padding bg-[#050505]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>

          {/* Header */}
          <motion.div variants={item} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">Projets phares</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Les produits que j&apos;ai construits</h2>
            <p className="text-[#A1A1AA] mt-3 max-w-xl mx-auto">
              Des applications réelles construites avec une architecture de niveau production, performance et scalabilité au cœur.
            </p>
          </motion.div>

          {/* Featured — split layout */}
          <motion.div variants={item} className="mb-6">
            <div className="grid lg:grid-cols-[1fr_420px] gap-4 items-stretch">

              {/* Left — active project showcase */}
              <AnimatePresence mode="wait">
                <motion.div key={activeId}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-2xl overflow-hidden border border-white/5 min-h-[420px] flex flex-col justify-end"
                  style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${active.color}08 100%)` }}>

                  {/* Grid bg */}
                  <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

                  {/* Glow orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${active.color}18 0%, transparent 70%)` }} />

                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${active.color}, transparent)` }} />

                  {/* Big title watermark */}
                  <div className="absolute top-8 left-8 right-8 pointer-events-none select-none">
                    <div className="text-[80px] md:text-[100px] font-black leading-none tracking-tighter opacity-[0.04] text-white">
                      {active.title}
                    </div>
                  </div>

                  {/* Floating metrics */}
                  <div className="absolute top-8 right-8 flex flex-col gap-2">
                    {active.metrics.map((m, i) => (
                      <motion.div key={m.label}
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="glass rounded-xl px-3 py-2 border border-white/5 text-right">
                        <div className="text-sm font-bold" style={{ color: active.color }}>{m.value}</div>
                        <div className="text-[10px] text-[#A1A1AA]">{m.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 p-8">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {active.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full font-medium"
                          style={{ background: `${active.color}15`, color: active.color, border: `1px solid ${active.color}25` }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">{active.title}</h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 max-w-lg">{active.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {active.stack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/70 border border-white/8">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a href={active.live !== "#" ? active.live : undefined}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                        style={{ background: active.color, boxShadow: `0 0 20px ${active.color}40` }}>
                        <ExternalLink size={14} /> Voir le projet
                      </a>
                      <a href={active.github !== "#" ? active.github : undefined}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white glass border border-white/10 hover:border-white/20 transition-all duration-300">
                        <SiGithub size={14} /> GitHub
                      </a>
                      <Link href={`/projects/${active.id}`}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-300">
                        Case study <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right — project selector list */}
              <div className="flex flex-col gap-3">
                {featured.map((project, i) => (
                  <motion.button key={project.id}
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setActiveId(project.id)}
                    className={`group relative text-left rounded-2xl border p-5 transition-all duration-300 overflow-hidden ${
                      activeId === project.id
                        ? "border-white/10 bg-white/3"
                        : "border-white/5 hover:border-white/8 bg-transparent hover:bg-white/2"
                    }`}>

                    {/* Active indicator */}
                    {activeId === project.id && (
                      <motion.div layoutId="activeBar"
                        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                        style={{ background: project.color }} />
                    )}

                    <div className="flex items-start gap-4">
                      {/* Color dot + number */}
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300"
                        style={{
                          background: activeId === project.id ? `${project.color}20` : "rgba(255,255,255,0.04)",
                          color: activeId === project.id ? project.color : "#A1A1AA",
                          border: `1px solid ${activeId === project.id ? project.color + "30" : "rgba(255,255,255,0.06)"}`,
                        }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-bold text-sm transition-colors duration-300 ${activeId === project.id ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                            {project.title}
                          </h4>
                          <ArrowUpRight size={14} className={`transition-all duration-300 ${activeId === project.id ? "opacity-100 rotate-0" : "opacity-0 -rotate-45 group-hover:opacity-60"}`}
                            style={{ color: project.color }} />
                        </div>
                        <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">{project.tagline}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-1.5 py-0.5 text-[10px] rounded bg-white/5 text-white/40">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other projects */}
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-xs font-semibold tracking-widest text-[#A1A1AA] uppercase">Autres projets</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rest.map((project, i) => (
                <motion.div key={project.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group glass glass-hover rounded-xl border border-white/5 p-5 relative overflow-hidden hover:border-white/10 transition-all duration-300">

                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.color}50, transparent)` }} />

                  <div className="flex items-start justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
                      style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}20` }}>
                      {project.title[0]}
                    </div>
                    <div className="flex gap-1.5">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg glass flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors border border-white/5">
                          <SiGithub size={12} />
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg glass flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors border border-white/5">
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-[#FF6B00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed mb-3">{project.tagline}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 text-white/50 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 text-white/30">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
