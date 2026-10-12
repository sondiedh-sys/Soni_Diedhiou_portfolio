import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

const Timeline = ({ title, items, seeProject }) => (
    <div className={styles.block} data-reveal>
        <h3 className={styles.blockTitle}>{title}</h3>
        <ol className={styles.timeline}>
            {items.map((item) => (
                <li key={item.name} className={styles.item}>
                    <div className={styles.itemHead}>
                        <h4 className={styles.itemName}>{item.name}</h4>
                        <span className={styles.itemDate}>{item.date}</span>
                    </div>
                    <p className={styles.itemDesc}>{item.description}</p>
                    {item.projectId && (
                        <a href={`#project-${item.projectId}`} className={styles.itemLink}>{seeProject} ↓</a>
                    )}
                    {item.logo && <img src={item.logo} alt="" width="36" height="36" className={styles.logo} loading="lazy" />}
                </li>
            ))}
        </ol>
    </div>
);

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="section">
            <div className="container">
                <div className={styles.intro} data-reveal>
                    <span className="eyebrow">{t.about.eyebrow}</span>
                    <h2 className="section-title">
                        {t.about.title} <span className="serif">{t.about.titleHighlight}</span>
                    </h2>
                    <p className={styles.description}>{t.about.description}</p>
                </div>

                <div className={styles.columns}>
                    <Timeline title={t.about.timelineTitle} items={t.about.schools} />
                    <Timeline title={t.about.experienceTitle} items={t.about.experiences} seeProject={t.about.seeProject} />
                </div>

                <div className={styles.block} data-reveal>
                    <h3 className={styles.blockTitle}>{t.about.skillsTitle}</h3>
                    <div className={styles.skills}>
                        {t.about.skillsCategories.map((cat) => (
                            <div key={cat.name} className={styles.skillCard}>
                                <h4 className={styles.skillName}>{cat.name}</h4>
                                <div className={styles.chips}>
                                    {cat.skills.map((s) => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
