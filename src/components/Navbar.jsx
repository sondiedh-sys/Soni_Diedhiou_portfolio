import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          <a href="#" className="text-gradient hover-lift">Soni</a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.navLink}>{t.nav.about}</a></li>
          <li><a href="#projects" className={styles.navLink}>{t.nav.projects}</a></li>
          <li><a href="#contact" className={styles.navLink}>{t.nav.contact}</a></li>
          <li>
            <button onClick={toggleLanguage} style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--text-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', cursor: 'pointer', marginLeft: '1rem', fontSize: '0.8rem' }} className="hover-lift">
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
