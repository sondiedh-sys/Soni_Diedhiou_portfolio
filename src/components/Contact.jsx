import styles from './Contact.module.css';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className={styles.contact}>
            <div className={`container ${styles.container}`} style={{ justifyContent: 'center' }}>
                <div className={styles.info} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className={styles.title}>
                        {t.contact.titlePrefix} <span className="text-gradient">{t.contact.titleHighlight}</span>
                    </h2>
                    <p className={styles.description} style={{ margin: '0 auto 2rem auto', maxWidth: '500px' }}>
                        {t.contact.description}
                    </p>
                    <div className={styles.contactDetails} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <div className={styles.detailItem} style={{ flexDirection: 'column', textAlign: 'center' }}>
                            <span className={styles.detailIcon} style={{ fontSize: '2rem', marginBottom: '1rem', width: 'auto', height: 'auto', background: 'none' }}>✉️</span>
                            <div>
                                <span className={styles.detailLabel} style={{ display: 'block', marginBottom: '0.5rem' }}>{t.contact.emailLabel}</span>
                                <a href="mailto:sondiedh@gmail.com" className={styles.detailLink}>sondiedh@gmail.com</a>
                            </div>
                        </div>
                        <div className={styles.detailItem} style={{ flexDirection: 'column', textAlign: 'center' }}>
                            <span className={styles.detailIcon} style={{ fontSize: '2rem', marginBottom: '1rem', width: 'auto', height: 'auto', background: 'none' }}>📍</span>
                            <div>
                                <span className={styles.detailLabel} style={{ display: 'block', marginBottom: '0.5rem' }}>{t.contact.locationLabel}</span>
                                <span className={styles.detailText}>{t.contact.locationValue}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socials} style={{ alignItems: 'center' }}>
                        <a href="https://www.linkedin.com/in/soni-diedhiou-30b291348" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            🔗 LinkedIn
                        </a>
                        <a href="https://tryhackme.com/p/doudouu" target="_blank" rel="noopener noreferrer" className={styles.badgeLink} aria-label="TryHackMe Profile">
                            <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3689123" style={{ border: 'none', pointerEvents: 'none', width: '330px', height: '100px', borderRadius: '10px' }} title="TryHackMe Badge"></iframe>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
