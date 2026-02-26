export const translations = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            role: "Étudiant en Informatique & Sécurité SI",
            greeting: "Bonjour, je suis",
            description: "Étudiant en deuxième année à l'ENSIIE (Filière Ingénierie Logicielle). Passionné par l'informatique, je me spécialise en cybersécurité pour sécuriser les systèmes de demain.",
            btnProjects: "Voir mes projets",
            btnResume: "Télécharger mon CV",
            btnContact: "Me Contacter"
        },
        about: {
            title: "À propos de",
            subtitle: "Mon parcours et mes compétences techniques.",
            description1: "Actuellement en deuxième année de cycle ingénieur (filière Ingénierie Logicielle) à l'ENSIIE (École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise) après deux ans de classes préparatoires (MPSI puis PSI). Mon objectif est d'obtenir le Master SECRETS en double diplôme lors de ma 3ème année afin d'approfondir mes compétences en sécurité IT.",
            description2: "J'aime résoudre des problèmes complexes, que ce soit en optimisant des algorithmes en OCaml, en développant des applications complètes en Java, ou en automatisant la résolution de CTF sur Root-Me.",
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
                { name: "💻 Développement", skills: ["Python", "C/C++", "Java", "JavaScript", "PHP", "SQL"] },
                { name: "🛡️ Cybersécurité", skills: ["Sécurité SI", "Analyse de Logs", "Analyse de Risque", "MSSGUARD", "Event Viewer"] },
                { name: "🌐 Systèmes & Réseaux", skills: ["Linux", "Shell", "Cisco Packet Tracer", "NetSim"] }
            ]
        },
        projects: {
            title: "Projets",
            highlight: "Développés",
            subtitle: "Plongez au cœur de mes réalisations techniques avec OCaml, C, Python et Java.",
            learnMore: "En savoir plus ↗",
            list: [
                {
                    title: "ASCO : Compilateur C-minus",
                    category: "OCaml & Théorie des Langages",
                    description: "Développement d'un compilateur expérimental d'un sous-ensemble du langage C (C-minus) incluant générateurs lexicaux/syntaxiques, construction d'AST, et vérificateurs de types en OCaml."
                },
                {
                    title: "PRFO : Base Martienne",
                    category: "Programmation Fonctionnelle",
                    description: "Implémentation d'algorithmes d'optimisation avancés (Dijkstra, structures fonctionnelles natives avec Maps/Sets) appliqués à la simulation dynamique de planification de trajets autonomes."
                },
                {
                    title: "PRIM : Outil de Traitement d'Images",
                    category: "Programmation Impérative (C)",
                    description: "Développement bas niveau en C d'algorithmes manipulant les pixels d'images. Gestions du contraste, interpolations bilinéaires, application de masques et algorithmes de fusion."
                },
                {
                    title: "Éditeur de Texte Zippers",
                    category: "OCaml & Algorithmie",
                    description: "Conception d'un éditeur de texte minimaliste et interactif basé sur la puissante structure de données Zippers pour des performances d'insertion et de navigation optimales."
                },
                {
                    title: "Analyse de la Ponctualité Ferroviaire",
                    category: "Python & Data (Stage)",
                    description: "Développement de scripts d'analyse et conception technique d'une application web Flask autour des données de retards des trains afin d'évaluer les performances globales du réseau.",
                    reports: [
                        { text: "Rapport de Stage", url: "/rapport-stage.pdf" },
                        { text: "Site Web Live", url: "https://sondiedh.pythonanywhere.com" }
                    ]
                },
                {
                    title: "Multi-site Office Management System",
                    category: "Conception Logicielle (Java)",
                    description: "Développement d'un système complet de gestion de bureaux multisites. Focus sur la modélisation UML et l'implémentation robuste en Java orienté objet.",
                    reports: [
                        { text: "Rapport Sprint 1", url: "/Java_Sprint1.pdf" },
                        { text: "Rapport Sprint 2", url: "/Java_Sprint2.pdf" }
                    ]
                },
                {
                    title: "Cyber-Sécurité & CTF Autosolvers",
                    category: "Sécurité Réseau (Python/Bash)",
                    description: "Pratique régulière sur TryHackMe, Root-Me. Rétro-ingénierie et automatisation de résolution de CTF (ex: Solveurs TCP programmés via Sockets Python)."
                }
            ]
        },
        contact: {
            titlePrefix: "Me",
            titleHighlight: "Contacter",
            description: "À la recherche d'un stage (mai-septembre) en Sécurité des Systèmes d'Information, je suis ouvert aux opportunités et aux discussions.",
            emailLabel: "Email",
            locationLabel: "Localisation",
            locationValue: "Île-de-France"
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            role: "Computer Science & IT Security Student",
            greeting: "Hi, I'm",
            description: "Second-year Software Engineering student at ENSIIE. Passionate about computer science, my goal is to specialize in cybersecurity to secure the systems of tomorrow.",
            btnProjects: "View my work",
            btnResume: "Download Resume",
            btnContact: "Contact Me"
        },
        about: {
            title: "About",
            subtitle: "My background and technical skills.",
            description1: "Currently in my second year of the Software Engineering program at ENSIIE (École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise) after two years of intensive prep classes (MPSI then PSI). My goal is to pursue a double degree in the specialized SECRETS Master's program for my third year to deepen my cybersecurity skills.",
            description2: "I enjoy solving complex problems, whether it's optimizing algorithms in OCaml, developing full-stack Java applications, or automating CTF resolutions on Root-Me.",
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
                { name: "💻 Development", skills: ["Python", "C/C++", "Java", "JavaScript", "PHP", "SQL"] },
                { name: "🛡️ Cybersecurity", skills: ["IT Security", "Log Analysis", "Risk Analysis", "MSSGUARD", "Event Viewer"] },
                { name: "🌐 Systems & Network", skills: ["Linux", "Shell", "Cisco Packet Tracer", "NetSim"] }
            ]
        },
        projects: {
            title: "Featured",
            highlight: "Projects",
            subtitle: "Dive into my technical achievements using OCaml, C, Python, and Java.",
            learnMore: "Learn more ↗",
            list: [
                {
                    title: "ASCO: C-minus Compiler",
                    category: "OCaml & Language Theory",
                    description: "Development of an experimental compiler for a subset of C (C-minus) including lexical/syntax generators, AST construction, and type checking in OCaml."
                },
                {
                    title: "PRFO: Martian Base",
                    category: "Functional Programming",
                    description: "Implementation of advanced optimization algorithms (Dijkstra, native functional structures with Maps/Sets) applied to dynamic autonomous path planning simulation."
                },
                {
                    title: "PRIM: Image Processing Tool",
                    category: "Imperative Programming (C)",
                    description: "Low-level C development of image pixel manipulation algorithms. Contrast management, bilinear interpolations, masking, and blending algorithms."
                },
                {
                    title: "Zippers Text Editor",
                    category: "OCaml & Algorithms",
                    description: "Design of a minimalist and interactive text editor based on the powerful Zippers data structure for optimal insertion and navigation performance."
                },
                {
                    title: "Railway Punctuality Analysis",
                    category: "Python & Data (Internship)",
                    description: "Development of analysis scripts and technical design of a Flask web app around train delay data to evaluate the overall performance of the network.",
                    reports: [
                        { text: "Internship Report", url: "/rapport-stage.pdf" },
                        { text: "Live Website", url: "https://sondiedh.pythonanywhere.com" }
                    ]
                },
                {
                    title: "Multi-site Office Management System",
                    category: "Software Design (Java)",
                    description: "Development of a comprehensive multi-site office management system. Focus on UML modeling and robust object-oriented Java implementation.",
                    reports: [
                        { text: "Sprint 1 Report", url: "/Java_Sprint1.pdf" },
                        { text: "Sprint 2 Report", url: "/Java_Sprint2.pdf" }
                    ]
                },
                {
                    title: "Cyber-Security & CTF Autosolvers",
                    category: "Network Security (Python/Bash)",
                    description: "Regular practice on TryHackMe, Root-Me. Reverse engineering and automated CTF resolution (e.g., programmed TCP solvers via Python Sockets)."
                }
            ]
        },
        contact: {
            titlePrefix: "Get in",
            titleHighlight: "Touch",
            description: "Looking for an internship (May-September) in Information Systems Security. I am open to new opportunities and discussions.",
            emailLabel: "Email",
            locationLabel: "Location",
            locationValue: "Île-de-France, France"
        }
    }
};
