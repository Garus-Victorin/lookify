import { Zap, Mail } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PERSONAL } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="container-custom px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FF6B00] flex items-center justify-center">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="font-semibold text-white">
              Garus<span className="text-[#FF6B00]">.</span>
            </span>
          </div>

          <p className="text-[#A1A1AA] text-sm text-center">
            © {year} Garus Victorin. Construit avec ❤️
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: SiGithub, href: PERSONAL.github, label: "GitHub", color: "#FFFFFF" },
              { icon: FaLinkedin, href: PERSONAL.linkedin, label: "LinkedIn", color: "#0A66C2" },
              { icon: SiWhatsapp, href: PERSONAL.whatsapp, label: "WhatsApp", color: "#25D366" },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email", color: "#FF6B00" },
            ].map(({ icon: Icon, href, label, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#FF6B00]/30 transition-all duration-300 group">
                <Icon size={16} className="group-hover:opacity-100 opacity-60 transition-opacity" style={{ color }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
