import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

const SECTION_IDS = ['about', 'projects', 'contact'];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        // Active link = section crossing the middle of the viewport
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
        }, { rootMargin: '-50% 0px -50% 0px' });
        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) io.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
            io.disconnect();
        };
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={`container ${styles.nav}`} aria-label="Navigation principale">
                <a href="#home" className={styles.logo}>
                    <span className={styles.muted}>~/</span>soni
                </a>
                <ul className={styles.navLinks}>
                    {SECTION_IDS.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                                aria-current={activeSection === id ? 'true' : undefined}
                            >
                                {t.nav[id]}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleLanguage}
                            className={styles.langToggle}
                            aria-label={language === 'fr' ? 'EN, switch to English' : 'FR, passer en français'}
                        >
                            {language === 'fr' ? 'EN' : 'FR'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
