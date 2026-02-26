import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import BinaryBackground from './BinaryBackground';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section id="home" className={styles.hero}>
            <BinaryBackground />
            <div className={styles.glowBlob + ' ' + styles.blobPrimary}></div>
            <div className={styles.glowBlob + ' ' + styles.blobSecondary}></div>

            <div className={`container ${styles.content} animate-fade-in`}>
                <div className={styles.profileWrapper}>
                    <img src="/photo.jpg" alt="Soni Diedhiou" className={styles.profileImg} onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Soni+Diedhiou&background=random&size=150' }} />
                </div>

                <div className={styles.label}>{t.hero.role}</div>
                <h1 className={styles.title}>
                    {t.hero.greeting} <span className="text-gradient">Soni Diedhiou</span>
                </h1>

                <div className={styles.schoolLogos}>
                    <img src="/logo-ensiie.png" alt="ENSIIE Logo" className={styles.schoolLogo} />
                    <img src="/logo-imt.webp" alt="Institut Mines-Télécom Logo" className={styles.schoolLogo} />
                </div>

                <p className={styles.subtitle}>
                    {t.hero.description}
                </p>
                <div className={styles.actions}>
                    <a href="#projects" className={`${styles.btn} ${styles.btnPrimary} hover-lift`}>
                        {t.hero.btnProjects}
                    </a>
                    <a href="/CV-SONI-2.pdf" download className={`${styles.btn} ${styles.btnSecondary} hover-lift`}>
                        {t.hero.btnResume}
                    </a>
                    <a href="#contact" className={`${styles.btn} ${styles.btnSecondary} hover-lift`}>
                        {t.hero.btnContact}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
