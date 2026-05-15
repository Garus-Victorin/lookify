"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PERSONAL } from "@/data";
import { itemVariants as item, containerVariants as container } from "@/utils";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const text = `Bonjour Garus 👋\n\n*Nom :* ${form.name}\n*Email :* ${form.email}\n\n*Message :*\n${form.message}`;
    const url = `https://wa.me/22953631367?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-[#050505]">
      <div className="container-custom px-6">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={item} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Construisons quelque chose ensemble</h2>
            <p className="text-[#A1A1AA] mt-3 max-w-xl mx-auto">
              Vous avez un projet en tête ? Je suis disponible pour du freelance et des opportunités à temps plein.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div variants={item} className="space-y-6">
              <div className="glass rounded-2xl border border-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-sm text-[#A1A1AA]">Disponible pour de nouveaux projets</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Prêt à collaborer</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  Que vous ayez besoin d&apos;une application full-stack, d&apos;une intégration IA ou d&apos;une app mobile — je suis là pour vous aider à le construire correctement.
                </p>
              </div>

              <div className="space-y-3">
                <a href={`mailto:${PERSONAL.email}`}
                  className="flex items-center gap-3 glass glass-hover rounded-xl border border-white/5 p-4 group">
                  <Mail size={18} className="text-[#FF6B00]" />
                  <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors">{PERSONAL.email}</span>
                </a>
                {[
                  { icon: SiWhatsapp, label: "WhatsApp", href: PERSONAL.whatsapp, color: "#25D366" },
                  { icon: FaLinkedin, label: "LinkedIn", href: PERSONAL.linkedin, color: "#0A66C2" },
                  { icon: SiGithub, label: "GitHub", href: PERSONAL.github, color: "#FFFFFF" },
                ].map(({ icon: Icon, label, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 glass glass-hover rounded-xl border border-white/5 p-4 group">
                    <Icon size={18} style={{ color }} className="transition-opacity group-hover:opacity-100 opacity-70" />
                    <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form variants={item} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#A1A1AA] mb-2 font-medium">Nom</label>
                <input type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full glass rounded-xl border border-white/5 px-4 py-3 text-sm text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#FF6B00]/40 transition-colors duration-300 bg-transparent" />
              </div>
              <div>
                <label className="block text-xs text-[#A1A1AA] mb-2 font-medium">Email</label>
                <input type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="votre@email.com"
                  className="w-full glass rounded-xl border border-white/5 px-4 py-3 text-sm text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#FF6B00]/40 transition-colors duration-300 bg-transparent" />
              </div>
              <div>
                <label className="block text-xs text-[#A1A1AA] mb-2 font-medium">Message</label>
                <textarea required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full glass rounded-xl border border-white/5 px-4 py-3 text-sm text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#FF6B00]/40 transition-colors duration-300 bg-transparent resize-none" />
              </div>

              <button type="submit" disabled={status !== "idle"}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#25D366]/90 hover:shadow-[0_0_30px_rgba(37,211,102,0.35)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                {status === "sent" ? (
                  <><CheckCircle2 size={18} /> Message envoyé sur WhatsApp !</>
                ) : status === "sending" ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Ouverture WhatsApp...</>
                ) : (
                  <><SiWhatsapp size={16} /> Envoyer via WhatsApp</>
                )}
              </button>

              <p className="text-xs text-[#A1A1AA]/60 text-center">
                Le formulaire ouvrira WhatsApp avec votre message pré-rempli.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
