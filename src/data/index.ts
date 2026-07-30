export const PERSONAL = {
  name: "Garus Victorin",
  title: "Développeur Full-Stack & IA",
  tagline: "Je construis des produits web, mobile & IA scalables.",
  subtitle:
    "Développeur Full-Stack & IA spécialisé dans les plateformes SaaS, les applications mobiles et les systèmes intelligents.",
  email: "garusvictorin@gmail.com",
  github: "https://github.com/Garus-Victorin",
  linkedin: "https://www.linkedin.com/in/garus-dognon/",
  whatsapp: "https://wa.me/22953631367",
  twitter: "https://twitter.com/garusvictorin",
  location: "Remote — Monde entier",
  available: true,
  stats: [
    { label: "Projets livrés", value: "10+", suffix: "" },
    { label: "Années d'expérience", value: "4+", suffix: "" },
    { label: "Technologies maîtrisées", value: "30+", suffix: "" },
    { label: "Repos publics", value: "12+", suffix: "" },
  ],
};

export const PROJECTS = [
  {
    id: "chatify",
    title: "Chatify",
    tagline: "Plateforme de chat IA Full-Stack avec RAG & agent ReAct",
    description:
      "Application web de chat IA full-stack propulsée par LLaMA 3.3 70B via Groq. Pipeline RAG hybride, mémoire vectorielle longue durée, recherche web temps réel (Tavily), système de plugins et agent ReAct. Auth JWT, rate limiting, quotas par rôle.",
    longDescription:
      "Chatify est une plateforme IA full-stack construite avec Next.js 16 App Router. Elle intègre un pipeline RAG hybride complet : détection d'intention de recherche via LLM, embeddings 384 dims stockés en PostgreSQL, multi-query retrieval avec reranking cross-encoder, et fallback sur Tavily pour la recherche web. Le LLM Router orchestre Groq → OpenAI → Mistral avec retry exponentiel. L'agent ReAct (Thought → Action → Observation) supporte jusqu'à 4 itérations autonomes. Authentification JWT HS256 avec RBAC user/admin, rate limiting sliding window, quotas journaliers, et résumé automatique de conversation au-delà de 20 messages.",
    stack: ["Next.js 16", "TypeScript", "Groq", "PostgreSQL", "Prisma", "Zustand", "Tailwind CSS"],
    tags: ["IA", "RAG", "Full-Stack", "Agent"],
    color: "#FF6B00",
    gradient: "from-orange-500/20 to-red-500/10",
    featured: true,
    live: "https://chatifybot.vercel.app/",
    github: "https://github.com/Garus-Victorin/chatify",
    metrics: [
      { label: "LLM principal", value: "LLaMA 3.3 70B" },
      { label: "Plugins", value: "4" },
      { label: "Personnalités IA", value: "5" },
    ],
    challenges: [
      "Pipeline RAG hybride : vecteur + web avec budget de contexte de 6000 chars",
      "LLM Router multi-provider avec retry exponentiel et cache LRU",
      "Agent ReAct autonome avec rollback et injection d'erreur dans le prompt",
    ],
    architecture:
      "Next.js 16 App Router, Groq (LLaMA 3.3 70B + 3.1 8B), PostgreSQL + Prisma pour embeddings et sessions, Zustand pour le state client, Tavily pour la recherche web, streaming SSE, middleware JWT + RBAC.",
  },
  {
    id: "qodify",
    title: "Qodify",
    tagline: "Extension VS Code — Assistant IA développeur local-first",
    description:
      "Extension VS Code qui apporte un assistant IA complet directement dans l'éditeur. Comparable à GitHub Copilot mais local-first, open et entièrement personnalisable. Comprend la codebase via AST réel, recherche sémantique et graphe de dépendances.",
    longDescription:
      "Qodify est une extension VS Code TypeScript qui intègre un assistant IA de niveau production dans l'éditeur. Elle parse l'AST réel via ts-morph, construit un index de symboles et un graphe de dépendances pour comprendre la codebase en profondeur. L'agent autonome /dev peut planifier, écrire et valider des changements multi-fichiers avec diff GitHub-style. Le système de règles auto-apprenantes stocke les patterns en .qodify/rules/ et s'améliore de session en session. Multi-provider : Groq (LLaMA 3.3 70B) → OpenAI-compatible → Ollama en local, sans login requis.",
    stack: ["TypeScript", "VS Code API", "Groq", "Ollama", "ts-morph", "React", "Vitest"],
    tags: ["IA", "DevTools", "VS Code", "Agent"],
    color: "#8B5CF6",
    gradient: "from-violet-500/20 to-purple-500/10",
    featured: true,
    live: "https://github.com/Garus-Victorin/Qodify",
    github: "https://github.com/Garus-Victorin/Qodify",
    metrics: [
      { label: "Slash commands", value: "8+" },
      { label: "Providers LLM", value: "3" },
      { label: "Mode agent", value: "/dev" },
    ],
    challenges: [
      "Parsing AST réel via ts-morph pour l'analyse sémantique de la codebase",
      "Agent autonome multi-fichiers avec validation tsc et rollback par étape",
      "Système de règles auto-apprenantes avec scoring et détection de conflits",
    ],
    architecture:
      "Extension VS Code TypeScript, webview React pour l'UI, ts-morph pour l'AST, embeddings via Groq → Ollama → TF-IDF fallback, agent ReAct avec build validation, SecretStorage pour les clés API.",
  },
  {
    id: "first-class-auto",
    title: "First Class Auto",
    tagline: "Plateforme automobile premium — catalogue & expérience cinématique",
    description:
      "Plateforme web premium pour la présentation et la vente de véhicules haut de gamme. Catalogue dynamique avec filtres avancés, fiches détaillées, interface glassmorphism et expérience utilisateur cinématique. Déployé sur Vercel.",
    longDescription:
      "First Class Auto est une plateforme e-commerce automobile construite avec Next.js et TypeScript. Elle propose un catalogue filtrable avec critères multiples, des pages véhicules avec galeries haute résolution optimisées, une interface glassmorphism dark premium et une navigation fluide. Architecture Next.js App Router avec SSG pour les pages statiques, optimisation automatique des images via next/image, et déploiement Vercel avec CDN global.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["E-commerce", "UI/UX", "Premium", "Full-Stack"],
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-yellow-500/10",
    featured: true,
    live: "https://firstclass-auto.vercel.app",
    github: "https://github.com/Garus-Victorin/first-class-auto",
    metrics: [
      { label: "Lighthouse", value: "95+" },
      { label: "Chargement", value: "<1s" },
      { label: "Core Web Vitals", value: "A+" },
    ],
    challenges: [
      "Catalogue dynamique avec filtres multi-critères sans rechargement de page",
      "Optimisation des images haute résolution de véhicules via next/image",
      "Design premium glassmorphism responsive sur tous les breakpoints",
    ],
    architecture:
      "Next.js App Router avec SSG, Tailwind CSS pour le design system, next/image pour l'optimisation automatique, déploiement Vercel avec CDN global.",
  },
  {
    id: "bookify",
    title: "Bookify",
    tagline: "Plateforme de blog full-stack — auth, CMS & gestion de contenu",
    description:
      "Application web de blog complète développée avec Flask et Python. Authentification sécurisée avec hachage bcrypt et protection CSRF, système de rôles admin/user, gestion de posts, likes, commentaires et tableau de bord admin.",
    longDescription:
      "Bookify est une plateforme de blogging full-stack construite avec Flask, SQLAlchemy et SQLite. Elle intègre un système d'authentification complet (bcrypt, CSRF via Flask-WTF, sessions sécurisées, déconnexion automatique après 60min d'inactivité pour les admins), un modèle de rôles user/admin, la gestion complète de posts (CRUD), les likes, les commentaires, et un dashboard administrateur. Architecture MVC propre avec SQLAlchemy comme ORM.",
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "Bootstrap", "Jinja2"],
    tags: ["Full-Stack", "CMS", "Auth", "Blog"],
    color: "#10B981",
    gradient: "from-emerald-500/20 to-green-500/10",
    featured: false,
    live: "https://bookify-alpha-lake.vercel.app",
    github: "https://github.com/Garus-Victorin/bookify",
    metrics: [
      { label: "Auth", value: "CSRF + bcrypt" },
      { label: "Rôles", value: "user / admin" },
      { label: "Features", value: "Posts, Likes, Comments" },
    ],
    challenges: [
      "Système d'authentification sécurisé avec protection CSRF et hachage bcrypt",
      "Gestion des sessions avec déconnexion automatique par inactivité",
      "Architecture MVC propre avec SQLAlchemy et migrations",
    ],
    architecture:
      "Flask MVC, SQLAlchemy ORM avec SQLite, Flask-WTF pour la protection CSRF, sessions serveur, Jinja2 templates, Bootstrap pour le design responsive.",
  },
  {
    id: "firstclass-design",
    title: "FirstClass Design",
    tagline: "Site vitrine d'agence créative — animations premium & portfolio",
    description:
      "Site vitrine d'agence de design premium avec animations cinématiques Framer Motion, portfolio interactif et identité visuelle forte. Interface dark futuriste avec micro-interactions et transitions fluides.",
    longDescription:
      "FirstClass Design est un site vitrine d'agence créative construit avec Next.js et TypeScript. Il présente un design system dark premium avec glassmorphism, des animations Framer Motion soignées, un portfolio projet interactif et une présentation de services haut de gamme. Déployé sur Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tags: ["Design", "Agence", "UI/UX", "Animation"],
    color: "#A855F7",
    gradient: "from-purple-500/20 to-pink-500/10",
    featured: false,
    live: "https://firstclass-design.vercel.app",
    github: "https://github.com/Garus-Victorin/firstclass-design",
    metrics: [
      { label: "Animations", value: "60fps" },
      { label: "Lighthouse", value: "95+" },
      { label: "Mobile", value: "A+" },
    ],
    challenges: [
      "Animations Framer Motion fluides à 60fps sans dégradation des performances",
      "Design system glassmorphism cohérent et réutilisable",
      "Expérience immersive et tactile sur mobile",
    ],
    architecture:
      "Next.js avec Framer Motion pour les animations, Tailwind CSS pour le design system, déploiement Vercel.",
  },
  {
    id: "netswitch",
    title: "NetSwitch",
    tagline: "App Android de monitoring réseau — data mobile, Wi-Fi & règles automatisées",
    description:
      "Application Flutter Android de monitoring réseau en temps réel. Suivi consommation data mobile + Wi-Fi par application, règles de limitation avec alertes/blocages, foreground service Kotlin en arrière-plan, graphiques 7 jours et historique des événements réseau.",
    longDescription:
      "NetSwitch est une application Flutter Android de monitoring réseau. Elle accède aux données natives via NetworkStatsManager et UsageStatsManager (Kotlin MethodChannel) pour tracker la consommation par application. Un foreground service Kotlin tourne en permanence (cycle 15 min) pour collecter les données même app fermée, évaluer les règles configurées et envoyer des notifications locales. SQLite est partagé entre Flutter (sqflite) et le service Kotlin. Architecture GetX avec controllers observables, dashboard analytique avec fl_chart, et thème clair/sombre.",
    stack: ["Flutter", "Dart", "Kotlin", "SQLite", "GetX", "fl_chart"],
    tags: ["Mobile", "Android", "Réseau", "Analytics"],
    color: "#39D3BB",
    gradient: "from-cyan-500/20 to-teal-500/10",
    featured: true,
    live: "https://github.com/Garus-Victorin/Netswitch-dev",
    github: "https://github.com/Garus-Victorin/Netswitch-dev",
    metrics: [
      { label: "Cycle background", value: "15 min" },
      { label: "Graphiques", value: "7 jours" },
      { label: "Permissions", value: "9 Android" },
    ],
    challenges: [
      "Bridge Flutter↔Kotlin via MethodChannel pour NetworkStatsManager et UsageStatsManager",
      "SQLite partagé entre Flutter (sqflite) et le foreground service Kotlin natif",
      "Foreground service Android START_STICKY avec BootReceiver pour restart après reboot",
    ],
    architecture:
      "Flutter + GetX, Kotlin natif pour NetworkStatsManager/UsageStatsManager, SQLite partagé Flutter↔Kotlin, foreground service Android cycle 15min, notifications locales multi-canaux (alert/block/service).",
  },
  {
    id: "explorify",
    title: "Explorify",
    tagline: "Navigateur web desktop open-source — Python, PyQt6 & Chromium",
    description:
      "Navigateur web desktop complet construit avec Python 3, PyQt6 et QtWebEngine (Chromium). Onglets Chrome-like, omnibox intelligente, navigation privée isolée, adblock, gestionnaire de mots de passe AES-256, système d'extensions compatible manifest Chrome et mode application .cedapp.",
    longDescription:
      "Explorify est un navigateur web desktop open-source construit avec Python 3 et PyQt6 (QtWebEngine/Chromium). Interface Chrome-like complète : TabBar avec favicons, omnibox multi-sources (historique FTS, favoris, web), navigation privée off-the-record, suspension automatique des onglets inactifs. Sécurité : adblock AdGuard DNS async, Safe Browsing avec détection homoglyphes/phishing, sandbox Chromium par onglet. Services : historique SQLite FTS avec ranking fréquence×récence, session auto-sauvegardée toutes les 30s, mots de passe AES-256 (Fernet), extensions manifest Chrome v2. Distribuable en .exe via PyInstaller.",
    stack: ["Python 3", "PyQt6", "QtWebEngine", "SQLite", "PyInstaller", "Chromium"],
    tags: ["Desktop", "Navigateur", "Python", "Open-Source"],
    color: "#6366F1",
    gradient: "from-indigo-500/20 to-violet-500/10",
    featured: true,
    live: "https://github.com/Garus-Victorin/Explorify",
    github: "https://github.com/Garus-Victorin/Explorify",
    metrics: [
      { label: "Moteurs de recherche", value: "8" },
      { label: "Pages internes", value: "8" },
      { label: "Chiffrement", value: "AES-256" },
    ],
    challenges: [
      "Isolation complète des profils Chromium (cookies, cache, stockage séparés)",
      "Système d'extensions compatible manifest Chrome v2 avec injection content scripts",
      "Pont JS↔Python via QWebChannel pour les pages internes explorify://",
    ],
    architecture:
      "Python 3 + PyQt6, QtWebEngine (Chromium) isolé par onglet, SQLite pour historique/favoris/mots de passe, chiffrement AES-256 (Fernet), adblock async AdGuard DNS, build .exe PyInstaller.",
  },
  {
    id: "wadoutasty",
    title: "Wadou Tasty",
    tagline: "Application web restaurant — menu, réservation & UI premium",
    description:
      "Application web moderne pour un restaurant avec menu interactif, système de réservation en ligne, page de contact et design premium. Construite avec React, Vite et Tailwind CSS.",
    longDescription:
      "Wadou Tasty est une application web restaurant construite avec React, Vite et TypeScript. Elle propose un menu dynamique, un formulaire de réservation en ligne, une page de contact, et un design premium responsive. Shadcn/ui pour les composants, Tailwind CSS pour le style, avec une attention particulière à l'expérience mobile.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI"],
    tags: ["Restaurant", "UI/UX", "Full-Stack", "React"],
    color: "#EF4444",
    gradient: "from-red-500/20 to-orange-500/10",
    featured: false,
    live: "https://wadou-tasty.vercel.app/",
    github: "https://github.com/Garus-Victorin/wadoutasty",
    metrics: [
      { label: "Pages", value: "4+" },
      { label: "Composants", value: "Shadcn" },
      { label: "Mobile", value: "Responsive" },
    ],
    challenges: [
      "Design premium restaurant responsive sur tous les devices",
      "Formulaire de réservation avec validation des champs",
      "Intégration Shadcn/ui avec design system custom",
    ],
    architecture:
      "React 18 + Vite pour le bundling, TypeScript strict, Tailwind CSS + Shadcn/ui pour les composants, déploiement Vercel.",
  },
  {
    id: "local-chat",
    title: "Local Chat",
    tagline: "Messagerie réseau local TCP/UDP — peer-to-peer sans cloud",
    description:
      "Application de messagerie locale en Python permettant la communication en réseau local (LAN) via deux modes : TCP avec interface graphique Tkinter et UDP broadcast peer-to-peer. Zéro dépendance externe.",
    longDescription:
      "Local Chat est une application de messagerie LAN construite en Python pur avec uniquement les bibliothèques standard. Mode TCP : interface graphique Tkinter pour communication directe serveur/client sur le port 5000. Mode UDP : découverte automatique des pairs par broadcast, messages envoyés à tous les pairs du sous-réseau. Zéro dépendance externe, fonctionne hors ligne.",
    stack: ["Python", "Tkinter", "TCP/IP", "UDP", "Sockets"],
    tags: ["Réseau", "Python", "LAN", "P2P"],
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-blue-500/10",
    featured: false,
    live: "https://github.com/Garus-Victorin/Local-Chat",
    github: "https://github.com/Garus-Victorin/Local-Chat",
    metrics: [
      { label: "Dépendances", value: "0" },
      { label: "Modes", value: "TCP + UDP" },
      { label: "Latence réseau", value: "LAN" },
    ],
    challenges: [
      "Communication bidirectionnelle TCP avec threading pour la concurrence",
      "Découverte automatique des pairs via broadcast UDP sur le sous-réseau",
      "Interface graphique Tkinter réactive avec threads de réception non-bloquants",
    ],
    architecture:
      "Python stdlib uniquement : socket, threading, tkinter. Mode TCP sur port 5000, mode UDP broadcast sur port 50000.",
  },
  {
    id: "presentify",
    title: "Presentify",
    tagline: "Outil de création de présentations web — éditeur WYSIWYG",
    description:
      "Application PHP de création et gestion de présentations web interactives. Interface d'édition WYSIWYG avec rendu en temps réel, sauvegarde en base de données MySQL et export web.",
    longDescription:
      "Presentify est un outil web de création de présentations développé en PHP natif avec MySQL. Il permet de créer, éditer et présenter des slides directement dans le navigateur avec une interface d'édition légère, sans framework lourd. Rendu cohérent entre le mode édition et la présentation finale.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    tags: ["Outil", "PHP", "WYSIWYG", "Full-Stack"],
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-cyan-500/10",
    featured: false,
    live: "https://github.com/Garus-Victorin/presentify",
    github: "https://github.com/Garus-Victorin/presentify",
    metrics: [
      { label: "Slides", value: "Illimités" },
      { label: "Sauvegarde", value: "MySQL" },
      { label: "Dépendances", value: "Zéro JS lib" },
    ],
    challenges: [
      "Éditeur WYSIWYG léger en JavaScript vanilla sans librairie externe",
      "Rendu pixel-perfect cohérent entre édition et présentation",
      "Sauvegarde automatique asynchrone en base de données",
    ],
    architecture:
      "PHP natif avec MySQL, JavaScript vanilla pour l'interactivité, CSS custom pour le rendu des slides.",
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
  ],
  Frontend: [
    { name: "HTML", level: 98, icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS", level: 95, icon: "SiCss", color: "#1572B6" },
    { name: "React", level: 95, icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", level: 95, icon: "SiNextdotjs", color: "#FFFFFF" },
    { name: "Vue.js", level: 75, icon: "SiVuedotjs", color: "#4FC08D" },
    { name: "Tailwind CSS", level: 95, icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Bootstrap", level: 85, icon: "SiBootstrap", color: "#7952B3" },
    { name: "Framer Motion", level: 85, icon: "SiFramer", color: "#0055FF" },
    { name: "GSAP", level: 80, icon: "SiGreensock", color: "#88CE02" },
  ],
  Backend: [
    { name: "Node.js", level: 90, icon: "SiNodedotjs", color: "#339933" },
    { name: "Flask", level: 80, icon: "SiFlask", color: "#FFFFFF" },
    { name: "Django", level: 70, icon: "SiDjango", color: "#092E20" },
    { name: "Laravel", level: 75, icon: "SiLaravel", color: "#FF2D20" },
    { name: "Prisma", level: 90, icon: "SiPrisma", color: "#2D3748" },
    { name: "REST API", level: 95, icon: "SiOpenapiinitiative", color: "#6BA539" },
    { name: "GraphQL", level: 75, icon: "SiGraphql", color: "#E10098" },
  ],
  Mobile: [
    { name: "Flutter", level: 80, icon: "SiFlutter", color: "#02569B" },
    { name: "React Native", level: 70, icon: "SiReact", color: "#61DAFB" },
  ],
  "IA & ML": [
    { name: "Groq", level: 90, icon: "SiGroq", color: "#F55036" },
    { name: "OpenAI", level: 85, icon: "SiOpenai", color: "#FFFFFF" },
    { name: "Ollama", level: 80, icon: "SiOpenai", color: "#A855F7" },
    { name: "RAG / LangChain", level: 80, icon: "SiOpenai", color: "#F59E0B" },
  ],
  "Base de données": [
    { name: "PostgreSQL", level: 90, icon: "SiPostgresql", color: "#4169E1" },
    { name: "MySQL", level: 85, icon: "SiMysql", color: "#4479A1" },
    { name: "SQLite", level: 85, icon: "SiSqlite", color: "#003B57" },
    { name: "Supabase", level: 85, icon: "SiSupabase", color: "#3ECF8E" },
    { name: "Redis", level: 75, icon: "SiRedis", color: "#DC382D" },
  ],
  DevOps: [
    { name: "Vercel", level: 95, icon: "SiVercel", color: "#FFFFFF" },
    { name: "Docker", level: 75, icon: "SiDocker", color: "#2496ED" },
    { name: "GitHub Actions", level: 80, icon: "SiGithubactions", color: "#2088FF" },
    { name: "Cloudflare", level: 75, icon: "SiCloudflare", color: "#F38020" },
  ],
};

const allSkills = Object.values(SKILLS_BY_CATEGORY).flat();
const uniqueAll = Array.from(
  new Map(allSkills.map((s) => [s.name, s])).values()
);

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
      "Plateformes SaaS scalables avec authentification, facturation, tableaux de bord et architecture multi-tenant.",
    tags: ["SaaS", "Supabase", "Prisma", "Auth"],
  },
  {
    icon: "Brain",
    title: "Intégration IA",
    description:
      "Systèmes intelligents avec LLMs, architectures RAG, pipelines d'embeddings, agents autonomes et inférence Groq.",
    tags: ["Groq", "RAG", "Ollama", "Agents"],
  },
  {
    icon: "Zap",
    title: "Développement API",
    description:
      "APIs REST haute performance avec authentification JWT, rate limiting, RBAC et documentation OpenAPI.",
    tags: ["REST", "JWT", "Node.js", "OpenAPI"],
  },
  {
    icon: "Palette",
    title: "Ingénierie UI/UX",
    description:
      "Interfaces premium avec motion design cinématique, accessibilité et implémentation pixel-perfect.",
    tags: ["Framer Motion", "GSAP", "Tailwind", "Shadcn"],
  },
];

export const EXPERIENCE = [
  {
    role: "Développeur Full-Stack & IA",
    company: "Freelance",
    period: "2022 — Présent",
    description:
      "Conception et développement de produits SaaS, intégrations IA et applications full-stack pour des clients. Spécialisé en Next.js, React, Node.js et systèmes propulsés par l'IA.",
    highlights: [
      "Livraison de 10+ applications en production déployées sur Vercel",
      "Construction de plateformes IA avec pipeline RAG hybride et agent ReAct",
      "Développement d'extensions VS Code avec analyse AST et LLM multi-provider",
      "Architecture de systèmes backend scalables avec Node.js, Flask & Prisma",
    ],
  },
  {
    role: "Ingénieur Produit",
    company: "Projets Personnels",
    period: "2020 — Présent",
    description:
      "Conception et développement de produits full-stack du concept à la production, avec focus sur les intégrations IA, les outils développeur et les interfaces premium.",
    highlights: [
      "Chatify — plateforme IA avec RAG hybride, agent ReAct et 5 personnalités IA",
      "Qodify — extension VS Code IA comparable à GitHub Copilot, local-first",
      "First Class Auto — plateforme automobile premium, Lighthouse 95+",
      "Bookify — blog full-stack Flask avec auth CSRF, RBAC et CMS",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Kolade Ahounou",
    role: "Fondateur, AgriTech Bénin",
    avatar: "KA",
    content:
      "J'avais une idée mais zéro technique. Garus a transformé ça en une vraie appli en moins de 3 semaines. Il n'attendait pas qu'on lui dise quoi faire — il proposait, il anticipait. Le résultat m'a bluffé.",
    rating: 5,
  },
  {
    name: "Fifamè Dossou",
    role: "Directrice, Cabinet Conseil Cotonou",
    avatar: "FD",
    content:
      "Ce qui m'a frappée c'est qu'il posait les bonnes questions avant même de coder. Il a compris notre métier rapidement et livré quelque chose qu'on utilise vraiment au quotidien. Sérieux et fiable.",
    rating: 5,
  },
  {
    name: "Romuald Hounwanou",
    role: "Développeur Senior, Dakar",
    avatar: "RH",
    content:
      "J'ai revu son code sur le projet Chatify — architecture propre, pas de dette technique, vraiment pensé pour scaler. C'est rare de voir ça chez quelqu'un d'aussi jeune. Il a le niveau.",
    rating: 5,
  },
  {
    name: "Adjoa Kpade",
    role: "Étudiante en Master, Université d'Abomey-Calavi",
    avatar: "AK",
    content:
      "Garus m'a aidée sur mon projet de fin d'études. Patient, pédagogue, il expliquait chaque choix technique sans condescendance. En deux sessions j'avais compris des trucs que je bloquais depuis des mois.",
    rating: 5,
  },
  {
    name: "Sèdami Agossou",
    role: "CEO, Startup Logistique Porto-Novo",
    avatar: "SA",
    content:
      "On cherchait quelqu'un pour refaire notre dashboard interne. Garus a livré en avance, avec des animations qu'on n'avait même pas demandées. L'équipe a adoré. On repart sur un deuxième projet avec lui.",
    rating: 5,
  },
];
