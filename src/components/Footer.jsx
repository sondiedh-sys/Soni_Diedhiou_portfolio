import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <span className="text-gradient">Soni Diedhiou</span>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {currentYear} Soni Diedhiou. {t.footer.rights}.</p>
                    <p>{t.footer.builtWith}</p>
                </div>

                <div className={styles.update}>
                    <span className={styles.pulse}></span>
                    {t.footer.lastUpdated}: {t.footer.date}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
