import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.ambient} aria-hidden="true" />

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <p className={styles.prompt}>
                        <span className={styles.arrow}>$</span> whoami
                    </p>
                    <h1 className={styles.title}>
                        <span className={styles.greeting}>{t.hero.greeting}</span>
                        Soni <span className="serif">Diedhiou</span><span className={styles.cursor} aria-hidden="true">_</span>
                    </h1>
                    <p className={styles.role}>{t.hero.role}</p>
                    <p className={styles.subtitle}>{t.hero.description}</p>

                    <ul className={styles.focus}>
                        {t.hero.focus.map((f) => <li key={f}>{f}</li>)}
                    </ul>

                    <div className={styles.actions}>
                        <a href="#projects" className="btn btn-primary">{t.hero.btnProjects} →</a>
                        <a href={t.hero.resumePath} target="_blank" rel="noopener noreferrer" className="btn">{t.hero.btnResume} ↗</a>
                    </div>
                </div>

                <div className={styles.side}>
                    <img src="/photo.webp" alt="Soni Diedhiou" width="240" height="222" className={styles.photo} fetchPriority="high" />
                    <div className={styles.logos}>
                        <a href={t.hero.schoolLinks.saclay} target="_blank" rel="noopener noreferrer">
                            <img src="/logo-uvsq.webp" alt="Université Paris-Saclay (UVSQ)" width="38" height="40" />
                        </a>
                        <a href={t.hero.schoolLinks.ensiie} target="_blank" rel="noopener noreferrer">
                            <img src="/logo-ensiie.webp" alt="ENSIIE" width="107" height="32" />
                        </a>
                        <a href="https://www.imt.fr" target="_blank" rel="noopener noreferrer">
                            <img src="/logo-imt.webp" alt="Institut Mines-Télécom" width="78" height="32" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
