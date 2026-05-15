import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — Étude de cas`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors mb-10 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        <div className="relative rounded-2xl overflow-hidden mb-10 h-64 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)`, border: `1px solid ${project.color}20` }}>
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative z-10 text-center">
            <div className="text-6xl font-black tracking-tighter mb-2" style={{ color: project.color }}>
              {project.title}
            </div>
            <div className="text-[#A1A1AA]">{project.tagline}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full border text-[#A1A1AA]"
              style={{ borderColor: `${project.color}30`, background: `${project.color}08` }}>
              {tag}
            </span>
          ))}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-[#A1A1AA] hover:text-white transition-colors">
            <GitBranch size={14} /> GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm text-white font-medium"
            style={{ background: project.color }}>
            <ExternalLink size={14} /> Démo live
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {project.metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl border border-white/5 p-5 text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: project.color }}>{m.value}</div>
              <div className="text-xs text-[#A1A1AA]">{m.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Vue d&apos;ensemble</h2>
          <p className="text-[#A1A1AA] leading-relaxed">{project.longDescription}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Architecture</h2>
          <div className="glass rounded-xl border border-white/5 p-6">
            <p className="text-[#A1A1AA] leading-relaxed">{project.architecture}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Stack technique</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg glass border border-white/5 text-sm text-white">{tech}</span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Défis techniques</h2>
          <ul className="space-y-3">
            {project.challenges.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[#A1A1AA]">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex gap-4 pt-8 border-t border-white/5">
          <Link href="/#projects"
            className="flex items-center gap-2 px-6 py-3 glass rounded-xl border border-white/10 text-sm text-[#A1A1AA] hover:text-white transition-colors">
            <ArrowLeft size={16} /> Tous les projets
          </Link>
          <Link href="/#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-white font-medium hover:opacity-90 transition-opacity"
            style={{ background: project.color }}>
            Me recruter pour un projet similaire
          </Link>
        </div>
      </div>
    </main>
  );
}
