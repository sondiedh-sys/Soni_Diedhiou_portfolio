import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

const Links = ({ project, learnMore }) => (
    <div className={styles.links}>
        {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.mainLink}>
                {learnMore} ↗
            </a>
        )}
        {project.reports?.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className={styles.reportLink}>
                {r.text} ↗
            </a>
        ))}
    </div>
);

const Projects = () => {
    const { t } = useLanguage();
    const { featured, list } = t.projects;

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className={styles.header} data-reveal>
                    <span className="eyebrow">{t.projects.eyebrow}</span>
                    <h2 className="section-title">
                        {t.projects.title} <span className="serif">{t.projects.highlight}</span>
                    </h2>
                    <p className="section-lead">{t.projects.subtitle}</p>
                </div>

                <div className={styles.featured}>
                    {featured.map((p, i) => (
                        <article
                            key={p.id}
                            id={`project-${p.id}`}
                            className={`${styles.feature} ${i === 0 ? styles.wide : ''} ${p.image ? styles.withMedia : ''}`}
                            data-reveal
                        >
                            <div className={styles.body}>
                                <span className={styles.category}>{p.category}</span>
                                <h3 className={styles.featureTitle}>{p.title}</h3>
                                <p className={styles.desc}>{p.description}</p>
                                <ul className={styles.highlights}>
                                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                                </ul>
                                <div className={styles.tags}>
                                    {p.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <Links project={p} learnMore={t.projects.learnMore} />
                            </div>
                            {p.image && (
                                <div className={styles.media}>
                                    <img src={p.image} srcSet={p.srcSet} sizes={p.srcSet ? "(max-width: 860px) 100vw, 560px" : undefined} alt={p.imageAlt} width={p.imageSize[0]} height={p.imageSize[1]} loading="lazy" decoding="async" />
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                <h3 className={styles.otherTitle} data-reveal>{t.projects.otherTitle}</h3>
                <div className={styles.grid}>
                    {list.map((p) => (
                        <article key={p.title} id={p.id ? `project-${p.id}` : undefined} className={styles.card}>
                            <span className={styles.category}>{p.category}</span>
                            <h4 className={styles.cardTitle}>{p.title}</h4>
                            <p className={styles.cardDesc}>{p.description}</p>
                            <Links project={p} learnMore={t.projects.learnMore} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
