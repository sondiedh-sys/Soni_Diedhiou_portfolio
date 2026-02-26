import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const links = [
        'https://github.com/sondiedh-sys/ASCO',
        'https://github.com/sondiedh-sys/Programmation-fonctionnelle-',
        'https://github.com/sondiedh-sys/programmation-imp-rative-',
        'https://github.com/sondiedh-sys/Programmation-fonctionnelle-',
        'https://github.com/sondiedh-sys/Ponctualit-des-TER',
        'https://github.com/sondiedh-sys/Projet-ing-nieur-logiciel',
        'https://github.com/sondiedh-sys/CTF-writeups'
    ];

    const projects = t.projects.list.map((proj, index) => ({
        ...proj,
        link: links[index]
    }));

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {t.projects.title} <span className="text-gradient">{t.projects.highlight}</span>
                    </h2>
                    <p className={styles.subtitle}>
                        {t.projects.subtitle}
                    </p>
                </div>

                <div className={styles.list}>
                    {projects.map((project, index) => (
                        <div key={index} id={"project-" + index} className={styles.projectItem}>
                            <div className={styles.projectInfo}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <a href={project.link} className={styles.projectLink}>{t.projects.learnMore}</a>
                                {project.reports && project.reports.length > 0 && (
                                    <div className={styles.projectReports}>
                                        {project.reports.map((report, i) => (
                                            <a key={i} href={report.url} target="_blank" rel="noopener noreferrer" className={styles.reportLink}>
                                                {report.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
