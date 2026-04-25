export const translations = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            role: "Étudiant en Informatique & Cybersécurité",
            greeting: "Bonjour, je suis",
            description: "Étudiant en 2ème année à l'ENSIIE (Filière Ingénierie Logicielle), actuellement en semestre d'échange à Asia Pacific University (Kuala Lumpur) en Master of Science in Cybersecurity. Passionné par la protection des systèmes et des réseaux.",
            btnProjects: "Voir mes projets",
            btnResume: "Télécharger mon CV",
            resumePath: "/cv_fr.pdf",
            btnContact: "Me Contacter"
        },
        about: {
            title: "À propos de",
            subtitle: "Mon parcours et mes compétences techniques.",
            description1: "Actuellement en deuxième année de cycle ingénieur à l'ENSIIE (filière Ingénierie Logicielle) après deux ans de classes préparatoires intensives (MPSI puis PSI). Animé par les défis techniques, mon ambition véritable est de forger une carrière en cybersécurité pour devenir l'un des remparts de demain, garantissant l'intégrité et la résilience des systèmes d'information critiques.",
            timelineTitle: "Parcours Académique",
            experienceTitle: "Expérience Professionnelle",
            experiences: [
                {
                    name: "CNAM (Conservatoire National des Arts et Métiers)",
                    date: "Été 2025",
                    description: "Développement de scripts d'analyse de données avec Python et conception technique d'une application web Flask autour des données de retards des trains. (Retrouvez le code, le rapport et le site web dans la section Projets ci-dessous)."
                }
            ],
            schools: [
                {
                    name: "Asia Pacific University (APU)",
                    date: "Actuel",
                    description: "Semestre d'échange. Suivi du programme Master of Science in Cybersecurity."
                },
                {
                    name: "ENSIIE",
                    date: "2024 - Présent",
                    description: "Cycle Ingénieur (Filière Ingénierie Logicielle), Évry."
                },
                {
                    name: "Lycée Michelet",
                    date: "2022 - 2024",
                    description: "Classes Préparatoires aux Grandes Écoles (CPGE MPSI / PSI), Vanves."
                }
            ],
            skillsTitle: "Domaines & Compétences Techniques",
            skillsCategories: [
                { name: "💻 Développement", skills: ["Python", "C/C++", "Java", "JavaScript", "OCaml", "PHP", "SQL"] },
                { name: "🛡️ Cybersécurité", skills: ["SIEM (Splunk)", "MSSGUARD", "MITRE ATT&CK", "NIST CSF", "Zero Trust", "OSINT", "Analyse de Logs", "Analyse de Risque"] },
                { name: "🌐 Systèmes & Réseaux", skills: ["Linux/Shell", "Cisco Packet Tracer", "NetSim", "VLAN / OSPF", "Firewall (WatchGuard)"] },
                { name: "📜 Conformité & Gouvernance", skills: ["RGPD", "NIS2", "PKI", "BCP/DRP", "Politiques de Sécurité"] }
            ]
        },
        projects: {
            title: "Projets",
            highlight: "Développés",
            subtitle: "Du développement logiciel à la sécurité des systèmes : projets ENSIIE et études de cas cybersécurité réalisés à APU.",
            learnMore: "En savoir plus ↗",
            list: [
                {
                    title: "SOC — Investigation DNS Spoofing & Analyse SIEM",
                    category: "Security Operations Center (APU)",
                    description: "Investigation d'une attaque de DNS spoofing avec cartographie des TTPs sur la matrice MITRE ATT&CK. Analyse d'environ 61 000 événements firewall WatchGuard via la plateforme MSSGUARD : détection de tentatives DoS, d'exploits web (CVE-2011-2008, GPON) et corrélation de logs pour reconstruction d'incidents.",
                    reports: [
                        { text: "Rapport SOC Challenge 1", url: "/SOC_DNS_Spoofing.pdf" }
                    ]
                },
                {
                    title: "NDP — Conception d'un Réseau d'Entreprise Sécurisé",
                    category: "Network Design & Performance (APU)",
                    description: "Conception d'une infrastructure LAN 3-tier pour un laboratoire de cybersécurité universitaire : topologie redondante, segmentation VLAN, standards WiFi 802.11ac, gestion FCAPS. Simulation NetSim et évaluation comparative de protocoles de routage (OSPF vs RIP) et d'algorithmes de chiffrement (AES/XOR/TEA).",
                    reports: [
                        { text: "Rapport NDP", url: "/NDP_Network_Design.pdf" }
                    ]
                },
                {
                    title: "ISD — Étude de Cas Brèche Free/Iliad (Zero Trust)",
                    category: "Information Security Design (APU)",
                    description: "Analyse approfondie de la brèche Free ayant impacté 25 millions d'abonnés. Identification de 8 failles structurelles (MFA VPN insuffisant, PAM absent, absence de SOC, rétention excessive de données) et proposition d'une architecture Zero Trust alignée sur les exigences NIS2 et RGPD, incluant BCP/DRP et stratégies de recovery.",
                    reports: [
                        { text: "Rapport ISD Free", url: "/ISD_Free_ZeroTrust.pdf" }
                    ]
                },
                {
                    title: "CST — Exploitation Noyau Windows (DKOM)",
                    category: "Cyber Security & Threats (APU)",
                    description: "Étude offensive d'une technique de Direct Kernel Object Manipulation (EPROCESS hiding) utilisée pour dissimuler des processus malveillants. Modélisation de la chaîne d'attaque avec STRIDE et évaluation de défenses basées sur ML (SVM, CNN, Random Forest) pour la détection d'anomalies kernel.",
                    reports: [
                        { text: "Rapport DKOM", url: "/CST_DKOM_Kernel.pdf" }
                    ]
                },
                {
                    title: "ISA — Revue d'Architecture PKI & Authentification",
                    category: "Information Security Architecture (APU)",
                    description: "Revue critique de littérature académique sur la PKI traditionnelle, le Certificate Transparency et l'Identity-Based Cryptography. Identification des faiblesses (problèmes de révocation, key escrow, mis-issuance) mappées aux principes fondamentaux (CIA Triad, Zero Trust Architecture).",
                    reports: [
                        { text: "Rapport ISA PKI", url: "/ISA_PKI_Review.pdf" }
                    ]
                },
                {
                    title: "ASCO : Compilateur C-minus",
                    category: "OCaml & Théorie des Langages (ENSIIE)",
                    description: "Développement d'un compilateur expérimental d'un sous-ensemble du langage C (C-minus) incluant générateurs lexicaux/syntaxiques, construction d'AST, et vérificateurs de types en OCaml.",
                    link: "https://github.com/sondiedh-sys/ASCO"
                },
                {
                    title: "PRFO : Base Martienne",
                    category: "Programmation Fonctionnelle (ENSIIE)",
                    description: "Implémentation d'algorithmes d'optimisation avancés (Dijkstra, structures fonctionnelles natives avec Maps/Sets) appliqués à la simulation dynamique de planification de trajets autonomes.",
                    link: "https://github.com/sondiedh-sys/Programmation-fonctionnelle-"
                },
                {
                    title: "PRIM : Outil de Traitement d'Images",
                    category: "Programmation Impérative (ENSIIE)",
                    description: "Développement bas niveau en C d'algorithmes manipulant les pixels d'images. Gestions du contraste, interpolations bilinéaires, application de masques et algorithmes de fusion.",
                    link: "https://github.com/sondiedh-sys/programmation-imp-rative-"
                },
                {
                    title: "Éditeur de Texte Zippers",
                    category: "OCaml & Algorithmie (ENSIIE)",
                    description: "Conception d'un éditeur de texte minimaliste et interactif basé sur la puissante structure de données Zippers pour des performances d'insertion et de navigation optimales.",
                    link: "https://github.com/sondiedh-sys/Programmation-fonctionnelle-"
                },
                {
                    title: "Analyse de la Ponctualité Ferroviaire",
                    category: "Python & Data (Stage CNAM)",
                    description: "Développement de scripts d'analyse et conception technique d'une application web Flask autour des données de retards des trains afin d'évaluer les performances globales du réseau.",
                    link: "https://github.com/sondiedh-sys/Ponctualit-des-TER",
                    reports: [
                        { text: "Rapport de Stage", url: "/rapport-stage.pdf" },
                        { text: "Site Web Live", url: "https://sondiedh.pythonanywhere.com" }
                    ]
                },
                {
                    title: "Multi-site Office Management System",
                    category: "Conception Logicielle Java (ENSIIE)",
                    description: "Développement d'un système complet de gestion de bureaux multisites. Focus sur la modélisation UML et l'implémentation robuste en Java orienté objet.",
                    link: "https://github.com/sondiedh-sys/Projet-ing-nieur-logiciel",
                    reports: [
                        { text: "Rapport Sprint 1", url: "/Java_Sprint1.pdf" },
                        { text: "Rapport Sprint 2", url: "/Java_Sprint2.pdf" }
                    ]
                },
                {
                    title: "Cyber-Sécurité & CTF Autosolvers",
                    category: "Sécurité Réseau (Python/Bash)",
                    description: "Pratique régulière sur TryHackMe, Root-Me, OverTheWire. Rétro-ingénierie et automatisation de résolution de CTF (ex : solveurs TCP programmés via Sockets Python). Inclut également un lab de blind SQL injection et une investigation OSINT sur une affaire criminelle fictive (APU).",
                    link: "https://github.com/sondiedh-sys/CTF-writeups"
                },
                {
                    title: "Certification OSINT — Security Blue Team",
                    category: "Cybersécurité & Renseignement",
                    description: "Certification attestant de compétences avancées en recherche d'informations en sources ouvertes (OSINT), techniques d'investigation numérique et analyse de données publiques.",
                    reports: [
                        { text: "Voir la Certification", url: "/certif_osint.pdf" }
                    ]
                }
            ]
        },
        contact: {
            titlePrefix: "Me",
            titleHighlight: "Contacter",
            description: "À la recherche d'un stage (début juin à début septembre) en Sécurité des Systèmes d'Information, je suis ouvert aux opportunités et aux discussions.",
            emailLabel: "Email",
            locationLabel: "Localisation",
            locationValue: "Île-de-France"
        },
        footer: {
            rights: "Tous droits réservés",
            builtWith: "Construit avec React & Vite",
            lastUpdated: "Dernière mise à jour",
            date: "Avril 2026"
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            role: "Computer Science & Cybersecurity Student",
            greeting: "Hi, I'm",
            description: "Second-year Software Engineering student at ENSIIE, currently on exchange at Asia Pacific University (Kuala Lumpur) in the Master of Science in Cybersecurity program. Passionate about systems and network protection.",
            btnProjects: "View my work",
            btnResume: "Download Resume",
            resumePath: "/cv_en.pdf",
            btnContact: "Contact Me"
        },
        about: {
            title: "About",
            subtitle: "My background and technical skills.",
            description1: "Currently in my second year of the Software Engineering program at ENSIIE following two years of intensive prep classes (MPSI/PSI). Driven by technical challenges, my true ambition is to build a career in cybersecurity—aiming to become part of tomorrow's shield, ensuring the integrity and resilience of critical information systems.",
            timelineTitle: "Academic Background",
            experienceTitle: "Professional Experience",
            experiences: [
                {
                    name: "CNAM (Conservatoire National des Arts et Métiers)",
                    date: "Summer 2025",
                    description: "Developed data analysis scripts with Python and technically designed a Flask web app to analyze train delay data. (Find the code, report, and live website in the Projects section below)."
                }
            ],
            schools: [
                {
                    name: "Asia Pacific University (APU)",
                    date: "Current",
                    description: "Exchange Semester. Attended the Master of Science in Cybersecurity program."
                },
                {
                    name: "ENSIIE",
                    date: "2024 - Present",
                    description: "Software Engineering Master's Degree, Évry."
                },
                {
                    name: "Lycée Michelet",
                    date: "2022 - 2024",
                    description: "Intensive Preparatory Classes (CPGE MPSI / PSI), Vanves."
                }
            ],
            skillsTitle: "Technical Domains & Skills",
            skillsCategories: [
                { name: "💻 Development", skills: ["Python", "C/C++", "Java", "JavaScript", "OCaml", "PHP", "SQL"] },
                { name: "🛡️ Cybersecurity", skills: ["SIEM (Splunk)", "MSSGUARD", "MITRE ATT&CK", "NIST CSF", "Zero Trust", "OSINT", "Log Analysis", "Risk Analysis"] },
                { name: "🌐 Systems & Network", skills: ["Linux/Shell", "Cisco Packet Tracer", "NetSim", "VLAN / OSPF", "Firewall (WatchGuard)"] },
                { name: "📜 Compliance & Governance", skills: ["GDPR", "NIS2", "PKI", "BCP/DRP", "Security Policies"] }
            ]
        },
        projects: {
            title: "Featured",
            highlight: "Projects",
            subtitle: "From software engineering to systems security: ENSIIE projects and cybersecurity case studies completed at APU.",
            learnMore: "Learn more ↗",
            list: [
                {
                    title: "SOC — DNS Spoofing Investigation & SIEM Analysis",
                    category: "Security Operations Center (APU)",
                    description: "Investigation of a DNS spoofing attack with adversary TTPs mapped to the MITRE ATT&CK matrix. Analysis of ~61,000 WatchGuard firewall events via the MSSGUARD platform: DoS detection, web exploits (CVE-2011-2008, GPON) and log correlation for incident reconstruction.",
                    reports: [
                        { text: "SOC Challenge 1 Report", url: "/SOC_DNS_Spoofing.pdf" }
                    ]
                },
                {
                    title: "NDP — Secure Enterprise Network Design",
                    category: "Network Design & Performance (APU)",
                    description: "Design of a 3-tier LAN infrastructure for a university cybersecurity lab: redundant topology, VLAN segmentation, 802.11ac WiFi standards, FCAPS management. NetSim simulation and comparative evaluation of routing protocols (OSPF vs RIP) and encryption algorithms (AES/XOR/TEA).",
                    reports: [
                        { text: "NDP Report", url: "/NDP_Network_Design.pdf" }
                    ]
                },
                {
                    title: "ISD — Free/Iliad Breach Case Study (Zero Trust)",
                    category: "Information Security Design (APU)",
                    description: "In-depth analysis of the Free breach impacting 25 million subscribers. Identification of 8 structural weaknesses (insufficient VPN MFA, no PAM, no SOC, excessive data retention) and proposal of a Zero Trust Architecture aligned with NIS2 and GDPR, including BCP/DRP and recovery strategies.",
                    reports: [
                        { text: "ISD Free Report", url: "/ISD_Free_ZeroTrust.pdf" }
                    ]
                },
                {
                    title: "CST — Windows Kernel Exploitation (DKOM)",
                    category: "Cyber Security & Threats (APU)",
                    description: "Offensive study of a Direct Kernel Object Manipulation technique (EPROCESS hiding) used to conceal malicious processes. Attack chain modeling with STRIDE and evaluation of ML-based defenses (SVM, CNN, Random Forest) for kernel anomaly detection.",
                    reports: [
                        { text: "DKOM Report", url: "/CST_DKOM_Kernel.pdf" }
                    ]
                },
                {
                    title: "ISA — PKI & Authentication Architecture Review",
                    category: "Information Security Architecture (APU)",
                    description: "Critical review of academic literature on traditional PKI, Certificate Transparency and Identity-Based Cryptography. Identification of weaknesses (revocation issues, key escrow, mis-issuance) mapped to core principles (CIA Triad, Zero Trust Architecture).",
                    reports: [
                        { text: "ISA PKI Report", url: "/ISA_PKI_Review.pdf" }
                    ]
                },
                {
                    title: "ASCO: C-minus Compiler",
                    category: "OCaml & Language Theory (ENSIIE)",
                    description: "Development of an experimental compiler for a subset of C (C-minus) including lexical/syntax generators, AST construction, and type checking in OCaml.",
                    link: "https://github.com/sondiedh-sys/ASCO"
                },
                {
                    title: "PRFO: Martian Base",
                    category: "Functional Programming (ENSIIE)",
                    description: "Implementation of advanced optimization algorithms (Dijkstra, native functional structures with Maps/Sets) applied to dynamic autonomous path planning simulation.",
                    link: "https://github.com/sondiedh-sys/Programmation-fonctionnelle-"
                },
                {
                    title: "PRIM: Image Processing Tool",
                    category: "Imperative Programming (ENSIIE)",
                    description: "Low-level C development of image pixel manipulation algorithms. Contrast management, bilinear interpolations, masking, and blending algorithms.",
                    link: "https://github.com/sondiedh-sys/programmation-imp-rative-"
                },
                {
                    title: "Zippers Text Editor",
                    category: "OCaml & Algorithms (ENSIIE)",
                    description: "Design of a minimalist and interactive text editor based on the powerful Zippers data structure for optimal insertion and navigation performance.",
                    link: "https://github.com/sondiedh-sys/Programmation-fonctionnelle-"
                },
                {
                    title: "Railway Punctuality Analysis",
                    category: "Python & Data (CNAM Internship)",
                    description: "Development of analysis scripts and technical design of a Flask web app around train delay data to evaluate the overall performance of the network.",
                    link: "https://github.com/sondiedh-sys/Ponctualit-des-TER",
                    reports: [
                        { text: "Internship Report", url: "/rapport-stage.pdf" },
                        { text: "Live Website", url: "https://sondiedh.pythonanywhere.com" }
                    ]
                },
                {
                    title: "Multi-site Office Management System",
                    category: "Software Design Java (ENSIIE)",
                    description: "Development of a comprehensive multi-site office management system. Focus on UML modeling and robust object-oriented Java implementation.",
                    link: "https://github.com/sondiedh-sys/Projet-ing-nieur-logiciel",
                    reports: [
                        { text: "Sprint 1 Report", url: "/Java_Sprint1.pdf" },
                        { text: "Sprint 2 Report", url: "/Java_Sprint2.pdf" }
                    ]
                },
                {
                    title: "Cyber-Security & CTF Autosolvers",
                    category: "Network Security (Python/Bash)",
                    description: "Regular practice on TryHackMe, Root-Me, OverTheWire. Reverse engineering and automated CTF resolution (e.g., programmed TCP solvers via Python Sockets). Also includes a blind SQL injection lab and an OSINT investigation on a fictional criminal case (APU).",
                    link: "https://github.com/sondiedh-sys/CTF-writeups"
                },
                {
                    title: "OSINT Certification — Security Blue Team",
                    category: "Cybersecurity & Intelligence",
                    description: "Certification demonstrating advanced skills in Open Source Intelligence (OSINT), digital investigation techniques, and public data analysis.",
                    reports: [
                        { text: "View Certification", url: "/certif_osint.pdf" }
                    ]
                }
            ]
        },
        contact: {
            titlePrefix: "Get in",
            titleHighlight: "Touch",
            description: "Looking for an internship (early June to early September) in Information Systems Security. I am open to new opportunities and discussions.",
            emailLabel: "Email",
            locationLabel: "Location",
            locationValue: "Île-de-France, France"
        },
        footer: {
            rights: "All rights reserved",
            builtWith: "Built with React & Vite",
            lastUpdated: "Last updated",
            date: "April 2026"
        }
    }
};
