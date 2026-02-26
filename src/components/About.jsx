import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.container}`}>
                <div className={styles.textContent}>
                    <h2 className={styles.sectionTitle}>
                        {t.about.title} <span className="text-gradient">Soni</span>
                    </h2>
                    <p className={styles.description}>
                        {t.about.description1}<br /><br />
                        {t.about.description2}
                    </p>

                    <div className={styles.timeline}>
                        <h3 className={styles.timelineTitle}>{t.about.timelineTitle}</h3>
                        <div className={styles.timelineList}>
                            {t.about.schools.map((school, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.timelineContent}>
                                        <div className={styles.timelineHeader}>
                                            <h4 className={styles.timelineName}>{school.name}</h4>
                                            <span className={styles.timelineDate}>{school.date}</span>
                                        </div>
                                        <p className={styles.timelineDesc}>{school.description}</p>
                                    </div>
                                    {school.name === "ENSIIE" && (
                                        <img src="/logo-ensiie.png" alt="ENSIIE Logo" className={styles.timelineLogo} />
                                    )}
                                    {school.name === "Lycée Michelet" && (
                                        <img src="/logo-michelet.jpg" alt="Michelet Logo" className={styles.timelineLogo} />
                                    )}
                                    {school.name.includes("APU") && (
                                        <img src="/logo-apu.png" alt="APU Logo" className={styles.timelineLogo} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.timeline}>
                        <h3 className={styles.timelineTitle}>{t.about.experienceTitle}</h3>
                        <div className={styles.timelineList}>
                            {t.about.experiences.map((exp, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.timelineContent}>
                                        <div className={styles.timelineHeader}>
                                            <h4 className={styles.timelineName}>{exp.name}</h4>
                                            <span className={styles.timelineDate}>{exp.date}</span>
                                        </div>
                                        <p className={styles.timelineDesc}>{exp.description}</p>
                                        {exp.reportLink && (
                                            <a href={exp.reportLink} target="_blank" rel="noopener noreferrer" className={styles.reportLink}>
                                                {exp.reportText}
                                            </a>
                                        )}
                                        {exp.name.includes("CNAM") && (
                                            <a href="#project-4" className={styles.reportLink} style={{ marginTop: '1rem', display: 'inline-block' }}>
                                                Voir le Projet ↘
                                            </a>
                                        )}
                                    </div>
                                    {exp.name.includes("CNAM") && (
                                        <img src="/logo-cnam.jpg" alt="CNAM Logo" className={styles.timelineLogo} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillsSection}>
                        <h3 className={styles.timelineTitle}>{t.about.skillsTitle}</h3>
                        <div className={styles.skillsGrid}>
                            {t.about.skillsCategories.map((cat, index) => (
                                <div key={index} className={styles.skillCategoryBlock}>
                                    <h4 className={styles.skillCategoryName}>{cat.name}</h4>
                                    <div className={styles.skillChips}>
                                        {cat.skills.map((skillItem, i) => (
                                            <span key={i} className={styles.skillChip}>{skillItem}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
