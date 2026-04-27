import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

// Maps a project category string to a course-color CSS modifier class
const getCourseClass = (category) => {
    const c = (category || '').toUpperCase();
    if (c.includes('SOC') || c.includes('SECURITY OPERATIONS')) return styles.courseSOC;
    if (c.includes('NDP') || c.includes('NETWORK DESIGN')) return styles.courseNDP;
    if (c.includes('ISD') || c.includes('INFORMATION SECURITY DESIGN')) return styles.courseISD;
    if (c.includes('CST') || c.includes('CYBER SECURITY & THREATS')) return styles.courseCST;
    if (c.includes('ISA') || c.includes('INFORMATION SECURITY ARCHITECTURE')) return styles.courseISA;
    if (c.includes('CNAM') || c.includes('INTERNSHIP') || c.includes('STAGE')) return styles.courseSTAGE;
    if (c.includes('CERTIFICATION') || c.includes('OSINT')) return styles.courseCERT;
    if (c.includes('ENSIIE') || c.includes('ENGINEERING') || c.includes('PROGRAMMING') || c.includes('OCAML') || c.includes('JAVA') || c.includes('IMPERATIVE') || c.includes('FUNCTIONAL') || c.includes('ALGORITHM') || c.includes('LANGUAGE')) return styles.courseENSIIE;
    return '';
};

const Projects = () => {
    const { t } = useLanguage();

    const projects = t.projects.list;

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>// PROJECTS</span>
                    <h2 className={styles.title}>
                        {t.projects.title} <span className="text-gradient">{t.projects.highlight}</span>
                    </h2>
                    <p className={styles.subtitle}>
                        {t.projects.subtitle}
                    </p>
                </div>

                <div className={styles.list}>
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            id={"project-" + index}
                            className={`${styles.projectItem} ${getCourseClass(project.category)}`}
                        >
                            <div className={styles.projectInfo}>
                                <div className={styles.categoryRow}>
                                    <span className={styles.category}>{project.category}</span>
                                    <span className={styles.indexNum}>
                                        {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>

                                <div className={styles.actionRow}>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                            {t.projects.learnMore}
                                        </a>
                                    )}
                                    {project.reports && project.reports.length > 0 && (
                                        <div className={styles.projectReports}>
                                            {project.reports.map((report, i) => (
                                                <a
                                                    key={i}
                                                    href={report.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.reportLink}
                                                >
                                                    {report.text}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
