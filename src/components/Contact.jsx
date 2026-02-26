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

                    <div className={styles.socials} style={{ alignItems: 'center', gap: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://github.com/sondiedh-sys" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.868 20.17 8.837 21.48C9.337 21.57 9.52 21.26 9.52 21.01C9.52 20.78 9.51 20.01 9.505 19.16C6.723 19.76 6.137 17.91 6.137 17.91C5.682 16.76 5.026 16.45 5.026 16.45C4.12 15.83 5.094 15.84 5.094 15.84C6.095 15.91 6.621 16.87 6.621 16.87C7.51 18.39 8.955 17.95 9.531 17.7C9.622 17.04 9.889 16.6 10.183 16.34C7.962 16.08 5.632 15.22 5.632 11.45C5.632 10.37 6.015 9.49 6.637 8.81C6.537 8.56 6.198 7.55 6.732 6.19C6.732 6.19 7.548 5.93 9.49 7.24C10.264 7.02 11.088 6.91 11.91 6.91C12.732 6.91 13.556 7.02 14.331 7.24C16.273 5.93 17.087 6.19 17.087 6.19C17.623 7.55 17.284 8.56 17.184 8.81C17.808 9.49 18.19 10.37 18.19 11.45C18.19 15.23 15.858 16.08 13.633 16.33C14.001 16.65 14.331 17.28 14.331 18.25C14.331 19.64 14.318 20.77 14.318 21.01C14.318 21.27 14.5 21.58 15.008 21.48C18.974 20.17 21.84 16.42 21.84 12C21.84 6.477 17.363 2 12 2Z" />
                            </svg>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/soni-diedhiou-30b291348" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM7.12 20.452H3.558V9H7.12V20.452ZM5.339 7.433C4.195 7.433 3.268 6.505 3.268 5.361C3.268 4.218 4.195 3.289 5.339 3.289C6.483 3.289 7.41 4.218 7.41 5.361C7.41 6.505 6.483 7.433 5.339 7.433ZM20.452 20.452H16.89V14.881C16.89 13.553 16.865 11.846 15.045 11.846C13.2 11.846 12.917 13.285 12.917 14.787V20.452H9.356V9H12.775V10.569H12.823C13.3 9.664 14.468 8.715 16.193 8.715C19.799 8.715 20.452 11.088 20.452 14.167V20.452Z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a href="https://tryhackme.com/p/doudouu" target="_blank" rel="noopener noreferrer" className={styles.badgeLink} aria-label="TryHackMe Profile" style={{ alignSelf: 'center' }}>
                            <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3689123" style={{ border: 'none', pointerEvents: 'none', width: '330px', height: '100px', borderRadius: '10px', display: 'block' }} title="TryHackMe Badge"></iframe>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
