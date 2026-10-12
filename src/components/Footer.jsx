import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p>&copy; {new Date().getFullYear()} Soni Diedhiou. {t.footer.rights}.</p>
                <p className="mono">{t.footer.lastUpdated} : {t.footer.date}</p>
            </div>
        </footer>
    );
};

export default Footer;
