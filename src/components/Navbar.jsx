import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

const SECTION_IDS = ['home', 'about', 'projects', 'contact'];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [progress, setProgress] = useState(0);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll progress
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
            setProgress(scrolledPct);

            // Active section based on viewport center
            const viewportMid = window.scrollY + window.innerHeight / 2;
            let current = 'home';
            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (!el) continue;
                const top = el.offsetTop;
                const bottom = top + el.offsetHeight;
                if (viewportMid >= top && viewportMid < bottom) {
                    current = id;
                    break;
                }
            }
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 'about', label: t.nav.about },
        { id: 'projects', label: t.nav.projects },
        { id: 'contact', label: t.nav.contact },
    ];

    return (
        <>
            <div className={styles.scrollProgress} style={{ width: `${progress}%` }} />
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <nav className={`container ${styles.nav}`}>
                    <div className={styles.logo}>
                        <a href="#home" className={styles.logoLink}>
                            <span className={styles.logoBracket}>&lt;</span>
                            <span className="text-gradient">SD</span>
                            <span className={styles.logoBracket}>/&gt;</span>
                        </a>
                    </div>
                    <ul className={styles.navLinks}>
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`${styles.navLink} ${activeSection === link.id ? styles.navLinkActive : ''}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={toggleLanguage}
                                className={styles.langToggle}
                                aria-label="Toggle language"
                            >
                                {language === 'fr' ? 'EN' : 'FR'}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
