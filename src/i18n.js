// Content shared by both languages
const GITHUB = "https://github.com/sondiedh-sys";
const SECRETS_URL = "https://www.universite-paris-saclay.fr/formation/master/informatique/m2-securite-des-contenus-des-reseaux-des-telecommunications-et-des-systemes-secrets";

export const translations = {
    fr: {
        nav: {
            about: "Parcours",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            role: "Ingénierie logicielle & cybersécurité",
            greeting: "Bonjour, je suis",
            description: "Élève ingénieur à l'ENSIIE (filière Ingénieur Logiciel et Sécurité), en bicursus avec le M2 SECRETS de l'Université Paris-Saclay. J'apprends en construisant de vrais projets en audit, sécurité de l'IA et architecture de sécurité.",
            focus: ["Audit & pentest", "Sécurité de l'IA", "Cloud & architecture"],
            btnProjects: "Voir mes projets",
            btnResume: "CV (PDF)",
            resumePath: "/cv_fr.pdf",
            schoolLinks: { saclay: SECRETS_URL, ensiie: "https://www.ensiie.fr/formation/genie-logiciel-et-securite" }
        },
        about: {
            eyebrow: "Parcours",
            title: "Apprendre en",
            titleHighlight: "construisant",
            description: "Deux ans de classes préparatoires, un cycle ingénieur à l'ENSIIE, un semestre en MSc Cybersecurity à Kuala Lumpur, puis le master SECRETS en bicursus. En parallèle, je monte mes propres projets : une équipe d'agents IA qui audite des applications, un homelab Active Directory attaqué et supervisé, une app iOS conçue sécurité d'abord. Comprendre comment un système casse, pour mieux le défendre.",
            timelineTitle: "Formation",
            experienceTitle: "Expérience",
            seeProject: "Voir le projet",
            schools: [
                {
                    name: "M2 SECRETS — Université Paris-Saclay (UVSQ)",
                    date: "2026 – 2027",
                    logo: "/logo-uvsq.webp",
                    description: "Sécurité des contenus, réseaux, télécoms et systèmes, en bicursus avec l'ENSIIE : cryptographie, sécurité systèmes et réseaux, sécurité web et applicative, détection d'intrusion et réponse à incident."
                },
                {
                    name: "ENSIIE",
                    date: "2024 – 2027",
                    logo: "/logo-ensiie.webp",
                    description: "Diplôme d'ingénieur, filière Ingénieur Logiciel et Sécurité, Évry."
                },
                {
                    name: "Asia Pacific University (APU)",
                    date: "Janv. – mai 2026",
                    logo: "/logo-apu.webp",
                    description: "Semestre d'échange en MSc Cybersecurity, Kuala Lumpur : SOC, architecture de sécurité, menaces."
                },
                {
                    name: "Lycée Michelet",
                    date: "2022 – 2024",
                    logo: "/logo-michelet.webp",
                    description: "CPGE MPSI / PSI, Vanves. Baccalauréat général, mention Très Bien (2022)."
                }
            ],
            experiences: [
                {
                    name: "CNAM — Stage développement web & statistiques",
                    date: "Juin – juillet 2025",
                    logo: "/logo-cnam.webp",
                    description: "Scripts d'analyse de données en Python et application web Flask autour des retards des trains.",
                    projectId: "cnam"
                },
                {
                    name: "Auchan — Employé polyvalent",
                    date: "Avr. 2025 – janv. 2026",
                    description: "CDI à temps partiel en parallèle des études : gestion des stocks, rigueur, organisation."
                }
            ],
            skillsTitle: "Compétences",
            skillsCategories: [
                { name: "Audit & pentest", skills: ["Kali Linux", "nmap", "Hydra / NetExec", "Impacket", "semgrep", "gitleaks", "Wazuh (SIEM)", "OSINT"] },
                { name: "AppSec & sécurité de l'IA", skills: ["OWASP API Top 10", "OWASP LLM Top 10", "ASVS", "MASVS", "CVSS 3.1", "RLS Postgres", "Prompt injection", "Claude Code · agents · MCP"] },
                { name: "Systèmes & réseaux", skills: ["Linux / Shell", "Active Directory", "Kerberos / LDAP", "VLAN / OSPF", "Cisco Packet Tracer", "NetSim", "WatchGuard"] },
                { name: "Méthodes & conformité", skills: ["MITRE ATT&CK", "NIST CSF", "Zero Trust", "Well-Architected (sécurité)", "RGPD", "NIS2", "PKI"] },
                { name: "Développement", skills: ["Python", "C / C++", "Java", "JavaScript", "SwiftUI", "OCaml", "SQL", "PHP"] }
            ]
        },
        projects: {
            eyebrow: "Projets",
            title: "Ce que j'ai",
            highlight: "construit",
            subtitle: "D'abord mes projets personnels en sécurité offensive, AppSec et IA, puis les travaux académiques menés à l'ENSIIE et à APU.",
            otherTitle: "Travaux académiques & autres",
            learnMore: "Code source",
            featured: [
                {
                    id: "ai-team",
                    title: "AI Security Team",
                    category: "Projet personnel · Sécurité IA & AppSec",
                    description: "Une équipe d'agents Claude Code qui audite une application en boîte blanche : analyse statique (semgrep, gitleaks), pentest dynamique sur la stack locale (RLS, IDOR, prompt injection réelle), puis un orchestrateur qui recalcule chaque score CVSS 3.1, vérifie les dires des sous-agents et produit un rapport PDF. Moindre privilège par agent et garde-fou anti-production.",
                    highlights: [
                        "Faille d'autorisation CVSS 8,3 trouvée et exploitée sur une app générée en un seul prompt",
                        "Sur l'app complexe : 19 constats pour l'équipe contre 10 pour un prompt unique",
                        "Dépôt public sous licence MIT, rapports réels inclus"
                    ],
                    tags: ["Claude Code", "OWASP", "CVSS 3.1", "Supabase", "semgrep"],
                    image: "/secteam-audit.webp",
                    srcSet: "/secteam-audit-640.webp 640w, /secteam-audit.webp 1200w",
                    imageSize: [1200, 839],
                    imageAlt: "Terminal : rapport d'audit de l'équipe d'agents et arbre des agents en cours d'exécution",
                    link: `${GITHUB}/ai-security-team`
                },
                {
                    id: "homelab",
                    title: "Homelab Active Directory",
                    category: "Projet personnel · Red Team / Blue Team",
                    description: "Contrôleur de domaine Samba AD DC (Kerberos/LDAP) et SIEM Wazuh sur machines virtuelles, attaqués depuis Kali Linux. Objectif : une architecture sécurisée documentée selon le pilier sécurité du Well-Architected Framework.",
                    highlights: [
                        "Brute force avec chaîne de détection vérifiée de bout en bout (règles de corrélation sur mesure)",
                        "Kerberoasting tenté (compte de service avec SPN préparé) : bloqué par une incompatibilité outil / Samba, encore à résoudre"
                    ],
                    tags: ["Samba AD", "Kerberos", "Wazuh", "Kali", "NetExec"],
                    image: "/homelab-bruteforce.webp",
                    imageSize: [1200, 678],
                    imageAlt: "En haut : brute force SMB avec NetExec depuis Kali. En bas : les alertes correspondantes dans Wazuh, dont la règle de corrélation brute force",
                    mediaBelow: true
                },
                {
                    id: "app-muscu",
                    title: "App_muscu",
                    category: "Projet personnel · iOS & IA, sécurité d'abord",
                    description: "Coach sportif iPhone (SwiftUI, SwiftData hors ligne) adossé à Supabase (Auth, Postgres avec RLS, Edge Functions). L'API Claude n'est appelée que côté serveur, sa sortie est revalidée et l'IA ne décide jamais des charges.",
                    highlights: [
                        "Spec avant code (spec-kit), test d'accès croisé RLS automatisé, JWT revérifié, quotas",
                        "Cible soignée de l'équipe d'agents : 0 constat critique ou élevé"
                    ],
                    tags: ["SwiftUI", "Supabase", "RLS", "LLM"],
                    image: "/app-muscu.webp",
                    imageSize: [480, 917],
                    imageAlt: "Écran d'accueil de l'application App_muscu sur iPhone"
                }
            ],
            list: [
                {
                    title: "SOC — Investigation DNS spoofing & analyse SIEM",
                    category: "APU · Security Operations Center",
                    description: "Investigation d'une attaque de DNS spoofing avec cartographie des TTPs sur MITRE ATT&CK. Analyse d'environ 61 000 événements firewall WatchGuard via MSSGUARD : tentatives DoS, exploits web (CVE-2011-2008, GPON) et corrélation de logs pour reconstruire les incidents.",
                    reports: [{ text: "Rapport", url: "/SOC_DNS_Spoofing.pdf" }]
                },
                {
                    title: "NDP — Conception d'un réseau d'entreprise sécurisé",
                    category: "APU · Network Design & Performance",
                    description: "LAN 3-tier pour un laboratoire de cybersécurité : topologie redondante, segmentation VLAN, WiFi 802.11ac, gestion FCAPS. Simulation NetSim, comparaison OSPF / RIP et AES / XOR / TEA.",
                    reports: [
                        { text: "Task B (design)", url: "/NDP_Network_Design.pdf" },
                        { text: "Task C (performance)", url: "/NDP_TaskC_Performance.pdf" }
                    ]
                },
                {
                    title: "ISD — Brèche Free/Iliad et architecture Zero Trust",
                    category: "APU · Information Security Design",
                    description: "Analyse de la brèche Free (25 millions d'abonnés) : 8 failles structurelles (MFA VPN insuffisant, pas de PAM, pas de SOC, rétention excessive) et proposition d'une architecture Zero Trust alignée NIS2 et RGPD, avec BCP/DRP.",
                    reports: [{ text: "Rapport", url: "/ISD_Free_ZeroTrust.pdf" }]
                },
                {
                    title: "CST — Exploitation noyau Windows (DKOM)",
                    category: "APU · Cyber Security & Threats",
                    description: "Étude d'une technique de Direct Kernel Object Manipulation (masquage EPROCESS) pour cacher des processus. Chaîne d'attaque modélisée avec STRIDE, évaluation de défenses par ML (SVM, CNN, Random Forest).",
                    reports: [{ text: "Rapport", url: "/CST_DKOM_Kernel.pdf" }]
                },
                {
                    title: "ISA — Secrets dans le code source",
                    category: "APU · Information Security Architecture",
                    description: "Revue de 7 études sur l'exposition de credentials dans des dépôts publics (plus de 100 000 repos GitHub, Meli et al. 2019) : persistance dans les artefacts, limites des outils de détection, écart entre pratique et gestion des secrets.",
                    reports: [{ text: "Rapport", url: "/ISA_Secrets_Source_Code.pdf" }]
                },
                {
                    title: "ISA — Revue d'architecture PKI & authentification",
                    category: "APU · Information Security Architecture",
                    description: "PKI traditionnelle, Certificate Transparency et Identity-Based Cryptography : révocation, key escrow, mis-issuance, mis en regard de la triade CIA et du Zero Trust.",
                    reports: [{ text: "Rapport", url: "/ISA_PKI_Review.pdf" }]
                },
                {
                    title: "CTF & autosolveurs",
                    category: "Pratique continue",
                    description: "TryHackMe, Root-Me, OverTheWire. Solveurs automatisés (sockets TCP en Python), lab de blind SQL injection et investigation OSINT sur une affaire fictive (APU).",
                    link: `${GITHUB}/CTF-writeups`
                },
                {
                    title: "Certification OSINT — Security Blue Team",
                    category: "Certification",
                    description: "Recherche en sources ouvertes, techniques d'investigation numérique et analyse de données publiques.",
                    reports: [{ text: "Certificat", url: "/certif_osint.pdf" }]
                },
                {
                    id: "cnam",
                    title: "Ponctualité ferroviaire",
                    category: "Stage CNAM · Python & data",
                    description: "Scripts d'analyse et application web Flask autour des retards des trains, pour évaluer la performance du réseau.",
                    link: `${GITHUB}/Ponctualit-des-TER`,
                    reports: [
                        { text: "Rapport de stage", url: "/rapport-stage.pdf" },
                        { text: "Site en ligne", url: "https://sondiedh.pythonanywhere.com" }
                    ]
                },
                {
                    title: "ASCO — Compilateur C-minus",
                    category: "ENSIIE · OCaml & théorie des langages",
                    description: "Compilateur expérimental d'un sous-ensemble de C : analyse lexicale et syntaxique, construction d'AST, vérification de types.",
                    link: `${GITHUB}/ASCO`
                },
                {
                    title: "Gestion de bureaux multisites",
                    category: "ENSIIE · Conception logicielle Java",
                    description: "Modélisation UML et implémentation orientée objet d'un système de gestion de bureaux sur plusieurs sites.",
                    link: `${GITHUB}/Projet-ing-nieur-logiciel`,
                    reports: [
                        { text: "Sprint 1", url: "/Java_Sprint1.pdf" },
                        { text: "Sprint 2", url: "/Java_Sprint2.pdf" }
                    ]
                },
                {
                    title: "PRFO — Base martienne & éditeur à zippers",
                    category: "ENSIIE · Programmation fonctionnelle",
                    description: "Planification de trajets autonomes (Dijkstra, Maps/Sets fonctionnels) et éditeur de texte fondé sur la structure de zippers.",
                    link: `${GITHUB}/Programmation-fonctionnelle-`
                },
                {
                    title: "PRIM — Traitement d'images en C",
                    category: "ENSIIE · Programmation impérative",
                    description: "Manipulation de pixels bas niveau : contraste, interpolation bilinéaire, masques et fusion d'images.",
                    link: `${GITHUB}/programmation-imp-rative-`
                }
            ]
        },
        contact: {
            eyebrow: "Contact",
            titlePrefix: "Me",
            titleHighlight: "contacter",
            description: "Je recherche un stage de fin d'études en 2027 en audit et pentest, sécurité de l'IA ou architecture de sécurité cloud. Île-de-France en priorité, ouvert à l'international.",
            emailLabel: "Email",
            locationLabel: "Localisation",
            locationValue: "Île-de-France"
        },
        footer: {
            rights: "Tous droits réservés",
            lastUpdated: "Mis à jour",
            date: "octobre 2026"
        }
    },
    en: {
        nav: {
            about: "Background",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            role: "Software engineering & cybersecurity",
            greeting: "Hi, I'm",
            description: "Engineering student at ENSIIE (Software Engineering & Security track), in a dual degree with the SECRETS master's at Université Paris-Saclay. I learn by building real projects in security auditing, AI security and security architecture.",
            focus: ["Audit & pentest", "AI security", "Cloud & architecture"],
            btnProjects: "See my work",
            btnResume: "Resume (PDF)",
            resumePath: "/cv_en.pdf",
            schoolLinks: { saclay: SECRETS_URL, ensiie: "https://www.ensiie.fr/en/formation/genie-logiciel-et-securite" }
        },
        about: {
            eyebrow: "Background",
            title: "Learning by",
            titleHighlight: "building",
            description: "Two years of preparatory classes, an engineering degree at ENSIIE, a semester in an MSc Cybersecurity program in Kuala Lumpur, then the SECRETS master's as a dual degree. Alongside, I build my own projects: a team of AI agents that audits applications, an Active Directory homelab that I attack and monitor, an iOS app designed security-first. Understanding how a system breaks, to defend it better.",
            timelineTitle: "Education",
            experienceTitle: "Experience",
            seeProject: "See the project",
            schools: [
                {
                    name: "M2 SECRETS — Université Paris-Saclay (UVSQ)",
                    date: "2026 – 2027",
                    logo: "/logo-uvsq.webp",
                    description: "Content, network, telecom and systems security, as a dual degree with ENSIIE: cryptography, systems and network security, web and application security, intrusion detection and incident response."
                },
                {
                    name: "ENSIIE",
                    date: "2024 – 2027",
                    logo: "/logo-ensiie.webp",
                    description: "Engineering degree (MSc equivalent), Software Engineering & Security track, Évry."
                },
                {
                    name: "Asia Pacific University (APU)",
                    date: "Jan – May 2026",
                    logo: "/logo-apu.webp",
                    description: "Exchange semester in the MSc Cybersecurity program, Kuala Lumpur: SOC, security architecture, threats."
                },
                {
                    name: "Lycée Michelet",
                    date: "2022 – 2024",
                    logo: "/logo-michelet.webp",
                    description: "Intensive preparatory classes (CPGE MPSI / PSI), Vanves. Baccalauréat with highest honours (2022)."
                }
            ],
            experiences: [
                {
                    name: "CNAM — Web development & statistics intern",
                    date: "Jun – Jul 2025",
                    logo: "/logo-cnam.webp",
                    description: "Python data analysis scripts and a Flask web app built around train delay data.",
                    projectId: "cnam"
                },
                {
                    name: "Auchan — Store associate",
                    date: "Apr 2025 – Jan 2026",
                    description: "Part-time permanent contract alongside my studies: stock management, rigour, organisation."
                }
            ],
            skillsTitle: "Skills",
            skillsCategories: [
                { name: "Audit & pentest", skills: ["Kali Linux", "nmap", "Hydra / NetExec", "Impacket", "semgrep", "gitleaks", "Wazuh (SIEM)", "OSINT"] },
                { name: "AppSec & AI security", skills: ["OWASP API Top 10", "OWASP LLM Top 10", "ASVS", "MASVS", "CVSS 3.1", "Postgres RLS", "Prompt injection", "Claude Code · agents · MCP"] },
                { name: "Systems & networks", skills: ["Linux / Shell", "Active Directory", "Kerberos / LDAP", "VLAN / OSPF", "Cisco Packet Tracer", "NetSim", "WatchGuard"] },
                { name: "Frameworks & compliance", skills: ["MITRE ATT&CK", "NIST CSF", "Zero Trust", "Well-Architected (security)", "GDPR", "NIS2", "PKI"] },
                { name: "Development", skills: ["Python", "C / C++", "Java", "JavaScript", "SwiftUI", "OCaml", "SQL", "PHP"] }
            ]
        },
        projects: {
            eyebrow: "Projects",
            title: "What I've",
            highlight: "built",
            subtitle: "My personal projects in offensive security, AppSec and AI first, then academic work from ENSIIE and APU.",
            otherTitle: "Academic work & more",
            learnMore: "Source code",
            featured: [
                {
                    id: "ai-team",
                    title: "AI Security Team",
                    category: "Personal project · AI security & AppSec",
                    description: "A team of Claude Code agents that runs a white-box audit of an application: static analysis (semgrep, gitleaks), dynamic pentest against the local stack (RLS, IDOR, real prompt injection), then an orchestrator that recomputes every CVSS 3.1 score, checks the sub-agents' claims and produces a PDF report. Least privilege per agent and an anti-production guardrail.",
                    highlights: [
                        "CVSS 8.3 authorization flaw found and exploited in an app generated from a single prompt",
                        "On the complex app: 19 findings for the team versus 10 for a single prompt",
                        "Public MIT-licensed repository, real reports included"
                    ],
                    tags: ["Claude Code", "OWASP", "CVSS 3.1", "Supabase", "semgrep"],
                    image: "/secteam-audit.webp",
                    srcSet: "/secteam-audit-640.webp 640w, /secteam-audit.webp 1200w",
                    imageSize: [1200, 839],
                    imageAlt: "Terminal: the agent team's audit report and the live agent tree",
                    link: `${GITHUB}/ai-security-team`
                },
                {
                    id: "homelab",
                    title: "Active Directory Homelab",
                    category: "Personal project · Red Team / Blue Team",
                    description: "A Samba AD DC domain controller (Kerberos/LDAP) and a Wazuh SIEM on virtual machines, attacked from Kali Linux. Goal: a documented secure architecture following the security pillar of the Well-Architected Framework.",
                    highlights: [
                        "Brute force with an end-to-end verified detection chain (custom correlation rules)",
                        "Kerberoasting attempted (service account with an SPN set up): blocked by a tool / Samba incompatibility, still to solve"
                    ],
                    tags: ["Samba AD", "Kerberos", "Wazuh", "Kali", "NetExec"],
                    image: "/homelab-bruteforce.webp",
                    imageSize: [1200, 678],
                    imageAlt: "Top: SMB brute force with NetExec from Kali. Bottom: the matching Wazuh alerts, including the brute-force correlation rule",
                    mediaBelow: true
                },
                {
                    id: "app-muscu",
                    title: "App_muscu",
                    category: "Personal project · iOS & AI, security-first",
                    description: "iPhone workout coach (SwiftUI, offline SwiftData) backed by Supabase (Auth, Postgres with RLS, Edge Functions). The Claude API is only called server-side, its output is revalidated and the AI never decides loads.",
                    highlights: [
                        "Spec before code (spec-kit), automated cross-account RLS test, re-verified JWT, quotas",
                        "Hardened target for the agent team: 0 critical or high findings"
                    ],
                    tags: ["SwiftUI", "Supabase", "RLS", "LLM"],
                    image: "/app-muscu.webp",
                    imageSize: [480, 917],
                    imageAlt: "App_muscu home screen on iPhone"
                }
            ],
            list: [
                {
                    title: "SOC — DNS spoofing investigation & SIEM analysis",
                    category: "APU · Security Operations Center",
                    description: "Investigation of a DNS spoofing attack with TTPs mapped to MITRE ATT&CK. Analysis of ~61,000 WatchGuard firewall events in MSSGUARD: DoS attempts, web exploits (CVE-2011-2008, GPON) and log correlation to reconstruct incidents.",
                    reports: [{ text: "Report", url: "/SOC_DNS_Spoofing.pdf" }]
                },
                {
                    title: "NDP — Secure enterprise network design",
                    category: "APU · Network Design & Performance",
                    description: "3-tier LAN for a cybersecurity lab: redundant topology, VLAN segmentation, 802.11ac WiFi, FCAPS management. NetSim simulation, OSPF / RIP and AES / XOR / TEA comparisons.",
                    reports: [
                        { text: "Task B (design)", url: "/NDP_Network_Design.pdf" },
                        { text: "Task C (performance)", url: "/NDP_TaskC_Performance.pdf" }
                    ]
                },
                {
                    title: "ISD — Free/Iliad breach and Zero Trust architecture",
                    category: "APU · Information Security Design",
                    description: "Analysis of the Free breach (25 million subscribers): 8 structural weaknesses (weak VPN MFA, no PAM, no SOC, excessive retention) and a Zero Trust architecture aligned with NIS2 and GDPR, with BCP/DRP.",
                    reports: [{ text: "Report", url: "/ISD_Free_ZeroTrust.pdf" }]
                },
                {
                    title: "CST — Windows kernel exploitation (DKOM)",
                    category: "APU · Cyber Security & Threats",
                    description: "Study of a Direct Kernel Object Manipulation technique (EPROCESS hiding) used to conceal processes. Attack chain modelled with STRIDE, evaluation of ML-based defences (SVM, CNN, Random Forest).",
                    reports: [{ text: "Report", url: "/CST_DKOM_Kernel.pdf" }]
                },
                {
                    title: "ISA — Hardcoded secrets in source code",
                    category: "APU · Information Security Architecture",
                    description: "Review of 7 studies on credential exposure in public repositories (over 100,000 GitHub repos, Meli et al. 2019): persistence in artefacts, limits of detection tools, gap between practice and secret management.",
                    reports: [{ text: "Report", url: "/ISA_Secrets_Source_Code.pdf" }]
                },
                {
                    title: "ISA — PKI & authentication architecture review",
                    category: "APU · Information Security Architecture",
                    description: "Traditional PKI, Certificate Transparency and Identity-Based Cryptography: revocation, key escrow, mis-issuance, weighed against the CIA triad and Zero Trust.",
                    reports: [{ text: "Report", url: "/ISA_PKI_Review.pdf" }]
                },
                {
                    title: "CTF & autosolvers",
                    category: "Ongoing practice",
                    description: "TryHackMe, Root-Me, OverTheWire. Automated solvers (Python TCP sockets), a blind SQL injection lab and an OSINT investigation on a fictional case (APU).",
                    link: `${GITHUB}/CTF-writeups`
                },
                {
                    title: "OSINT Certification — Security Blue Team",
                    category: "Certification",
                    description: "Open source intelligence, digital investigation techniques and public data analysis.",
                    reports: [{ text: "Certificate", url: "/certif_osint.pdf" }]
                },
                {
                    id: "cnam",
                    title: "Railway punctuality",
                    category: "CNAM internship · Python & data",
                    description: "Analysis scripts and a Flask web app built around train delay data to assess network performance.",
                    link: `${GITHUB}/Ponctualit-des-TER`,
                    reports: [
                        { text: "Internship report", url: "/rapport-stage.pdf" },
                        { text: "Live site", url: "https://sondiedh.pythonanywhere.com" }
                    ]
                },
                {
                    title: "ASCO — C-minus compiler",
                    category: "ENSIIE · OCaml & language theory",
                    description: "Experimental compiler for a subset of C: lexing and parsing, AST construction, type checking.",
                    link: `${GITHUB}/ASCO`
                },
                {
                    title: "Multi-site office management",
                    category: "ENSIIE · Java software design",
                    description: "UML modelling and object-oriented implementation of an office management system across several sites.",
                    link: `${GITHUB}/Projet-ing-nieur-logiciel`,
                    reports: [
                        { text: "Sprint 1", url: "/Java_Sprint1.pdf" },
                        { text: "Sprint 2", url: "/Java_Sprint2.pdf" }
                    ]
                },
                {
                    title: "PRFO — Martian base & zipper editor",
                    category: "ENSIIE · Functional programming",
                    description: "Autonomous path planning (Dijkstra, functional Maps/Sets) and a text editor built on the zipper data structure.",
                    link: `${GITHUB}/Programmation-fonctionnelle-`
                },
                {
                    title: "PRIM — Image processing in C",
                    category: "ENSIIE · Imperative programming",
                    description: "Low-level pixel manipulation: contrast, bilinear interpolation, masks and image blending.",
                    link: `${GITHUB}/programmation-imp-rative-`
                }
            ]
        },
        contact: {
            eyebrow: "Contact",
            titlePrefix: "Get in",
            titleHighlight: "touch",
            description: "I'm looking for a final-year internship in 2027 in security auditing and pentesting, AI security or cloud security architecture. Île-de-France first, open to opportunities abroad.",
            emailLabel: "Email",
            locationLabel: "Location",
            locationValue: "Île-de-France, France"
        },
        footer: {
            rights: "All rights reserved",
            lastUpdated: "Updated",
            date: "October 2026"
        }
    }
};
