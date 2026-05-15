export const PERSONAL = {
  name: "Garus Victorin",
  title: "Développeur Full-Stack & IA",
  tagline: "Je construis des produits web, mobile & IA scalables.",
  subtitle:
    "Développeur Full-Stack & IA spécialisé dans les plateformes SaaS, les applications mobiles et les systèmes intelligents.",
  email: "contact@garusvictorin.dev",
  github: "https://github.com/Garus-Victorin",
  linkedin: "https://www.linkedin.com/in/garus-dognon/",
  whatsapp: "https://wa.me/22953631367",
  twitter: "https://twitter.com/garusvictorin",
  location: "Remote — Monde entier",
  available: true,
  stats: [
    { label: "Projets livrés", value: "20+", suffix: "" },
    { label: "Années d'expérience", value: "4+", suffix: "" },
    { label: "Technologies maîtrisées", value: "30+", suffix: "" },
    { label: "Clients satisfaits", value: "15+", suffix: "" },
  ],
};

export const PROJECTS = [
  {
    id: "chatify",
    title: "Chatify",
    tagline: "Plateforme de chat IA Full-Stack",
    description:
      "Une plateforme de chat IA de niveau production avec mémoire vectorielle, architecture RAG, recherche web en temps réel, système de plugins et routage multi-modèles. Conçue pour scaler.",
    longDescription:
      "Chatify est une plateforme IA full-stack qui combine la puissance de plusieurs fournisseurs LLM avec une architecture RAG sophistiquée. Elle intègre une mémoire vectorielle persistante, la recherche web en temps réel, un écosystème de plugins et un routage intelligent qui sélectionne le modèle optimal par requête.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Pinecone"],
    tags: ["IA", "SaaS", "Full-Stack", "RAG"],
    color: "#FF6B00",
    gradient: "from-orange-500/20 to-red-500/10",
    featured: true,
    live: "https://chatify-psi-eight.vercel.app",
    github: "https://github.com/Garus-Victorin/chatify",
    metrics: [
      { label: "Temps de réponse", value: "<200ms" },
      { label: "Disponibilité", value: "99.9%" },
      { label: "Modèles supportés", value: "8+" },
    ],
    challenges: [
      "Recherche de similarité vectorielle efficace à grande échelle",
      "Routage multi-fournisseurs IA avec logique de fallback",
      "Streaming temps réel avec les edge functions",
    ],
    architecture:
      "Microservices avec routes API optimisées edge, base vectorielle Pinecone, Supabase pour l'auth/stockage, réponses SSE en streaming.",
  },
  {
    id: "local-chat",
    title: "Local Chat",
    tagline: "Chat IA local avec modèles Ollama",
    description:
      "Application de chat IA 100% locale propulsée par Ollama. Aucune donnée envoyée dans le cloud — confidentialité totale, modèles LLM tournant directement sur la machine.",
    longDescription:
      "Local Chat est une interface de chat IA qui tourne entièrement en local grâce à Ollama. Elle permet d'utiliser des modèles LLM open-source (Llama, Mistral, etc.) sans aucune connexion cloud, garantissant une confidentialité totale des données.",
    stack: ["Python", "Ollama", "Flask", "HTML", "CSS", "JavaScript"],
    tags: ["IA", "Local", "Privacy", "LLM"],
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-blue-500/10",
    featured: true,
    live: "https://github.com/Garus-Victorin/Local-Chat",
    github: "https://github.com/Garus-Victorin/Local-Chat",
    metrics: [
      { label: "Latence réseau", value: "0ms" },
      { label: "Confidentialité", value: "100%" },
      { label: "Modèles supportés", value: "10+" },
    ],
    challenges: [
      "Intégration de l'API Ollama pour le streaming local",
      "Interface responsive sans framework lourd",
      "Gestion du contexte de conversation en mémoire",
    ],
    architecture:
      "Backend Flask servant l'interface web, communication avec Ollama via API locale, streaming des réponses en SSE.",
  },
  {
    id: "first-class-auto",
    title: "First Class Auto",
    tagline: "Plateforme de vente automobile premium",
    description:
      "Plateforme web premium pour la vente et la présentation de véhicules haut de gamme. Interface moderne avec catalogue dynamique, filtres avancés et expérience utilisateur cinématique.",
    longDescription:
      "First Class Auto est une plateforme e-commerce automobile premium construite avec Next.js et TypeScript. Elle propose un catalogue de véhicules avec filtres avancés, des fiches détaillées, une interface glassmorphism et une expérience utilisateur premium.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["E-commerce", "Full-Stack", "Premium", "UI/UX"],
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-yellow-500/10",
    featured: true,
    live: "https://firstclass-auto.vercel.app",
    github: "https://github.com/Garus-Victorin/first-class-auto",
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Temps de chargement", value: "<1s" },
      { label: "Core Web Vitals", value: "A+" },
    ],
    challenges: [
      "Catalogue dynamique avec filtres multi-critères performants",
      "Design premium responsive sur tous les devices",
      "Optimisation des images de véhicules haute résolution",
    ],
    architecture:
      "Next.js App Router avec SSG pour les pages catalogue, Tailwind CSS pour le design system, déploiement Vercel avec CDN global.",
  },
  {
    id: "firstclass-design",
    title: "FirstClass Design",
    tagline: "Agence de design & branding premium",
    description:
      "Site vitrine d'agence de design premium avec animations cinématiques, portfolio interactif et présentation de services haut de gamme.",
    longDescription:
      "FirstClass Design est un site vitrine d'agence créative construit avec Next.js et TypeScript. Il présente des animations premium, un portfolio interactif et une identité visuelle forte pour attirer des clients haut de gamme.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tags: ["Design", "Agence", "UI/UX", "Animation"],
    color: "#8B5CF6",
    gradient: "from-violet-500/20 to-purple-500/10",
    featured: false,
    live: "https://firstclass-design.vercel.app",
    github: "https://github.com/Garus-Victorin/firstclass-design",
    metrics: [
      { label: "Animations", value: "60fps" },
      { label: "Lighthouse", value: "95+" },
      { label: "Mobile Score", value: "A+" },
    ],
    challenges: [
      "Animations fluides sans impact sur les performances",
      "Design system cohérent et réutilisable",
      "Expérience immersive sur mobile",
    ],
    architecture:
      "Next.js avec Framer Motion pour les animations, Tailwind CSS pour le design system, déploiement Vercel.",
  },
  {
    id: "bilangue",
    title: "Bilangue",
    tagline: "Plateforme d'apprentissage bilingue",
    description:
      "Application web d'apprentissage des langues avec contenu bilingue, exercices interactifs et suivi de progression. Construite avec Laravel et Blade.",
    longDescription:
      "Bilangue est une plateforme éducative bilingue développée avec Laravel. Elle propose des exercices d'apprentissage des langues, un système de progression, et une interface intuitive pour les apprenants.",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    tags: ["EdTech", "Full-Stack", "Laravel", "Bilingue"],
    color: "#10B981",
    gradient: "from-emerald-500/20 to-green-500/10",
    featured: false,
    live: "https://github.com/Garus-Victorin/bilangue",
    github: "https://github.com/Garus-Victorin/bilangue",
    metrics: [
      { label: "Langues supportées", value: "2+" },
      { label: "Exercices", value: "50+" },
      { label: "Progression", value: "Trackée" },
    ],
    challenges: [
      "Système de progression et scoring en temps réel",
      "Architecture MVC propre avec Laravel",
      "Interface intuitive pour tous niveaux",
    ],
    architecture:
      "Laravel MVC avec Blade templates, MySQL pour la persistance, Bootstrap pour le design responsive.",
  },
  {
    id: "presentify",
    title: "Presentify",
    tagline: "Outil de création de présentations web",
    description:
      "Application PHP de création et gestion de présentations web interactives. Interface d'édition intuitive avec rendu en temps réel.",
    longDescription:
      "Presentify est un outil web de création de présentations développé en PHP. Il permet de créer, éditer et présenter des slides directement dans le navigateur avec une interface d'édition intuitive.",
    stack: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    tags: ["Outil", "Full-Stack", "PHP", "Présentation"],
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-cyan-500/10",
    featured: false,
    live: "https://github.com/Garus-Victorin/presentify",
    github: "https://github.com/Garus-Victorin/presentify",
    metrics: [
      { label: "Slides", value: "Illimités" },
      { label: "Export", value: "Web" },
      { label: "Édition", value: "Temps réel" },
    ],
    challenges: [
      "Éditeur WYSIWYG léger sans dépendances lourdes",
      "Rendu cohérent entre édition et présentation",
      "Sauvegarde automatique en base de données",
    ],
    architecture:
      "PHP natif avec MySQL, JavaScript vanilla pour l'interactivité, CSS custom pour le rendu des slides.",
  },
  {
    id: "qodify",
    title: "Qodify",
    tagline: "Assistant IA pour développeurs & automatisation de code",
    description:
      "Plateforme d'outils développeur intelligente avec génération de code IA, workflows intelligents, pipelines d'automatisation et expérience développeur axée productivité.",
    longDescription:
      "Qodify est un assistant développeur propulsé par l'IA qui accélère le développement logiciel grâce à la génération de code intelligente, le refactoring automatisé, l'orchestration de workflows et les suggestions contextuelles.",
    stack: ["Next.js", "TypeScript", "Groq", "Prisma", "Redis"],
    tags: ["IA", "Outils Dev", "Automatisation", "Productivité"],
    color: "#8B5CF6",
    gradient: "from-violet-500/20 to-purple-500/10",
    featured: true,
    live: "https://github.com/Garus-Victorin/Qodify",
    github: "https://github.com/Garus-Victorin/Qodify",
    metrics: [
      { label: "Vitesse génération", value: "10x" },
      { label: "Précision", value: "94%" },
      { label: "Langages supportés", value: "15+" },
    ],
    challenges: [
      "Génération de code contextuelle sur de grandes bases de code",
      "Orchestration d'agents IA pour des tâches complexes",
      "Streaming basse latence avec Groq",
    ],
    architecture:
      "Frontend Next.js, agents IA avec inférence Groq, Prisma + PostgreSQL, cache Redis pour les fenêtres de contexte.",
  },
  {
    id: "bookify",
    title: "Bookify",
    tagline: "Application de blog moderne orientée SEO",
    description:
      "Application CMS et blog complète avec optimisation SEO avancée, authentification, gestion de contenu et workflows éditoriaux.",
    longDescription:
      "Bookify est une application de blog moderne construite avec le SEO comme priorité absolue. Elle intègre une architecture CMS headless, une gestion avancée des métadonnées, l'authentification, l'édition de contenu riche et un scoring SEO automatisé.",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"],
    tags: ["CMS", "SEO", "Full-Stack", "Blog"],
    color: "#10B981",
    gradient: "from-emerald-500/20 to-green-500/10",
    featured: false,
    live: "#",
    github: "#",
    metrics: [
      { label: "Score SEO Lighthouse", value: "100" },
      { label: "Temps de chargement", value: "<1s" },
      { label: "Core Web Vitals", value: "A+" },
    ],
    challenges: [
      "Génération d'images OG dynamiques à l'edge",
      "Recherche plein texte avec classement",
      "Stratégie de rendu hybride ISR + SSG",
    ],
    architecture:
      "Next.js App Router avec ISR, Supabase pour auth/BDD, images OG rendues à l'edge, génération automatique de sitemap.",
  },
  {
    id: "taskify",
    title: "Taskify",
    tagline: "SaaS de gestion de tâches avec supervision d'équipe",
    description:
      "Plateforme SaaS collaborative de gestion de tâches avec supervision en temps réel, tableaux de bord avancés, analytics et gestion d'équipe.",
    longDescription:
      "Taskify est une plateforme SaaS collaborative pour la productivité d'équipe. Elle intègre des mises à jour de tâches en temps réel, des vues Kanban/Gantt, des tableaux de bord analytiques avancés, un contrôle d'accès basé sur les rôles et des outils de supervision.",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma", "Framer Motion"],
    tags: ["SaaS", "Productivité", "Temps réel", "Analytics"],
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-yellow-500/10",
    featured: false,
    live: "#",
    github: "#",
    metrics: [
      { label: "Latence temps réel", value: "<50ms" },
      { label: "Utilisateurs actifs", value: "500+" },
      { label: "Tâches complétées", value: "+35%" },
    ],
    challenges: [
      "Gestion d'état collaboratif en temps réel",
      "Système de permissions RBAC complexe",
      "Performance avec de grands volumes de données",
    ],
    architecture:
      "Next.js avec Supabase Realtime, Prisma ORM, sécurité au niveau des lignes, mises à jour UI optimistes.",
  },
  {
    id: "netswitch",
    title: "NetSwitch",
    tagline: "Plateforme d'optimisation réseau intelligente",
    description:
      "Système intelligent de monitoring et d'optimisation réseau avec analytics WiFi/mobile, moteur d'automatisation et tableaux de bord de performance en temps réel.",
    longDescription:
      "NetSwitch est une plateforme de gestion réseau intelligente qui surveille les connexions WiFi et mobiles en temps réel, applique des règles d'optimisation automatisées et fournit des tableaux de bord analytiques détaillés pour les performances réseau.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "WebSockets", "Docker"],
    tags: ["Mobile", "Analytics", "Automatisation", "IoT"],
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-cyan-500/10",
    featured: false,
    live: "#",
    github: "#",
    metrics: [
      { label: "Réduction latence", value: "40%" },
      { label: "Appareils surveillés", value: "100+" },
      { label: "Disponibilité", value: "99.8%" },
    ],
    challenges: [
      "Analyse de paquets réseau en temps réel",
      "Performance mobile cross-platform",
      "Algorithmes d'optimisation automatisés",
    ],
    architecture:
      "Application mobile Flutter avec backend Node.js, mises à jour temps réel WebSocket, données time-series PostgreSQL, déploiement Docker.",
  },
];

const SKILLS_BY_CATEGORY = {
  Langages: [
    { name: "Python", level: 85, icon: "SiPython", color: "#3776AB" },
    { name: "JavaScript", level: 95, icon: "SiJavascript", color: "#F7DF1E" },
    { name: "TypeScript", level: 95, icon: "SiTypescript", color: "#3178C6" },
    { name: "PHP", level: 75, icon: "SiPhp", color: "#777BB4" },
    { name: "SQL", level: 85, icon: "SiMysql", color: "#4479A1" },
    { name: "C", level: 65, icon: "SiC", color: "#A8B9CC" },
    { name: "C++", level: 65, icon: "SiCplusplus", color: "#00599C" },
    { name: "Bash", level: 70, icon: "SiGnubash", color: "#4EAA25" },
    { name: "PowerShell", level: 60, icon: "SiGnubash", color: "#5391FE" },
  ],
  Frontend: [
    { name: "HTML", level: 98, icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS", level: 95, icon: "SiCss", color: "#1572B6" },
    { name: "React", level: 95, icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", level: 95, icon: "SiNextdotjs", color: "#FFFFFF" },
    { name: "Vue.js", level: 75, icon: "SiVuedotjs", color: "#4FC08D" },
    { name: "AngularJS", level: 65, icon: "SiAngular", color: "#DD0031" },
    { name: "jQuery", level: 80, icon: "SiJquery", color: "#0769AD" },
    { name: "Tailwind CSS", level: 95, icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Bootstrap", level: 85, icon: "SiBootstrap", color: "#7952B3" },
    { name: "Framer Motion", level: 85, icon: "SiFramer", color: "#0055FF" },
    { name: "GSAP", level: 80, icon: "SiGreensock", color: "#88CE02" },
  ],
  Backend: [
    { name: "Node.js", level: 90, icon: "SiNodedotjs", color: "#339933" },
    { name: "Laravel", level: 80, icon: "SiLaravel", color: "#FF2D20" },
    { name: "Django", level: 75, icon: "SiDjango", color: "#092E20" },
    { name: "Flask", level: 75, icon: "SiFlask", color: "#FFFFFF" },
    { name: "Prisma", level: 90, icon: "SiPrisma", color: "#2D3748" },
    { name: "REST API", level: 95, icon: "SiOpenapiinitiative", color: "#6BA539" },
    { name: "GraphQL", level: 80, icon: "SiGraphql", color: "#E10098" },
    { name: "Ajax", level: 85, icon: "SiJavascript", color: "#F7DF1E" },
  ],
  Mobile: [
    { name: "Flutter", level: 85, icon: "SiFlutter", color: "#02569B" },
    { name: "React Native", level: 75, icon: "SiReact", color: "#61DAFB" },
  ],
  "IA & ML": [
    { name: "OpenAI", level: 90, icon: "SiOpenai", color: "#FFFFFF" },
    { name: "Groq", level: 85, icon: "SiGroq", color: "#F55036" },
    { name: "RAG Systems", level: 80, icon: "SiOpenai", color: "#A855F7" },
  ],
  "Base de données": [
    { name: "PostgreSQL", level: 90, icon: "SiPostgresql", color: "#4169E1" },
    { name: "MySQL", level: 85, icon: "SiMysql", color: "#4479A1" },
    { name: "SQLite", level: 85, icon: "SiSqlite", color: "#003B57" },
    { name: "SQLAlchemy", level: 75, icon: "SiSqlalchemy", color: "#D71F00" },
    { name: "Supabase", level: 90, icon: "SiSupabase", color: "#3ECF8E" },
    { name: "Redis", level: 75, icon: "SiRedis", color: "#DC382D" },
  ],
  DevOps: [
    { name: "Vercel", level: 95, icon: "SiVercel", color: "#FFFFFF" },
    { name: "Docker", level: 80, icon: "SiDocker", color: "#2496ED" },
    { name: "GitHub Actions", level: 85, icon: "SiGithubactions", color: "#2088FF" },
    { name: "Cloudflare", level: 80, icon: "SiCloudflare", color: "#F38020" },
  ],
};

const allSkills = Object.values(SKILLS_BY_CATEGORY).flat();
const seen = new Set<string>();
const uniqueAll = allSkills.filter((s) => {
  if (seen.has(s.name)) return false;
  seen.add(s.name);
  return true;
});

export const SKILLS: Record<string, { name: string; level: number; icon: string; color: string }[]> = {
  Tout: uniqueAll,
  ...SKILLS_BY_CATEGORY,
};

export const SERVICES = [
  {
    icon: "Code2",
    title: "Développement Full-Stack",
    description:
      "Applications web de bout en bout avec Next.js, React, Node.js et des architectures backend modernes.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: "Smartphone",
    title: "Développement Mobile",
    description:
      "Applications mobiles cross-platform avec Flutter et React Native offrant des performances natives sur iOS et Android.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    icon: "Layers",
    title: "Développement SaaS",
    description:
      "Plateformes SaaS scalables avec authentification, facturation, tableaux de bord et multi-tenant.",
    tags: ["SaaS", "Supabase", "Stripe", "Prisma"],
  },
  {
    icon: "Brain",
    title: "Intégration IA",
    description:
      "Systèmes intelligents avec LLMs, architectures RAG, inférence Groq et workflows propulsés par l'IA.",
    tags: ["OpenAI", "Groq", "RAG", "Ollama"],
  },
  {
    icon: "Zap",
    title: "Développement API",
    description:
      "APIs REST et GraphQL haute performance avec authentification, rate limiting et documentation.",
    tags: ["REST", "GraphQL", "Node.js", "OpenAPI"],
  },
  {
    icon: "Palette",
    title: "Ingénierie UI/UX",
    description:
      "Interfaces premium avec motion design, accessibilité et implémentation pixel-perfect.",
    tags: ["Framer Motion", "GSAP", "Tailwind", "Shadcn"],
  },
];

export const EXPERIENCE = [
  {
    role: "Développeur Full-Stack & IA",
    company: "Freelance",
    period: "2022 — Présent",
    description:
      "Conception et développement de produits SaaS, intégrations IA et applications full-stack pour des clients du monde entier. Spécialisé en Next.js, React, Node.js et systèmes propulsés par l'IA.",
    highlights: [
      "Livraison de 15+ applications en production",
      "Construction de plateformes SaaS IA avec architecture RAG",
      "Développement d'applications mobiles cross-platform avec Flutter & React Native",
      "Architecture de systèmes backend scalables avec Node.js & Supabase",
    ],
  },
  {
    role: "Ingénieur Produit",
    company: "Projets Personnels",
    period: "2020 — Présent",
    description:
      "Conception et développement de produits full-stack du concept à la production, avec focus sur les intégrations IA, les outils développeur et les plateformes SaaS.",
    highlights: [
      "Lancement de Chatify — plateforme de chat IA avec RAG",
      "Développement de Local Chat — chat IA local avec Ollama",
      "Création de First Class Auto — plateforme automobile premium",
      "Développement de Qodify — assistant IA pour développeurs",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Alex Chen",
    role: "CTO, TechStartup",
    avatar: "AC",
    content:
      "Garus a livré une plateforme IA exceptionnelle qui a dépassé nos attentes. L'architecture est propre, scalable, et l'interface est absolument premium.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager, SaaS Co.",
    avatar: "SM",
    content:
      "Travailler avec Garus a tout changé. Il pense comme un ingénieur produit, pas seulement comme un développeur. L'attention aux détails et l'optimisation des performances sont remarquables.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Fondateur, AI Startup",
    avatar: "MJ",
    content:
      "Le système RAG que Garus a construit pour nous gère des milliers de requêtes quotidiennes avec des temps de réponse inférieurs à 200ms. Une ingénierie vraiment senior.",
    rating: 5,
  },
];
