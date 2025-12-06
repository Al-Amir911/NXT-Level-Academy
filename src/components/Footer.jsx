import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">NXT Level Academy</h2>
                        <p>{t('footer', 'desc')}</p>
                    </div>

                    <div className="footer-links">
                        <h3>{t('footer', 'quickLinks')}</h3>
                        <ul>
                            <li><a href="#hero">{t('nav', 'home')}</a></li>
                            <li><a href="#overview">{t('nav', 'about')}</a></li>
                            <li><a href="#programs">{t('nav', 'programs')}</a></li>
                            <li><a href="#pricing">{t('nav', 'pricing')}</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>{t('footer', 'contact')}</h3>
                        <p>Cairo, Egypt</p>
                        <p>info@nxtlevelacademy.com</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/share/16eKegk7rz/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: '#1877F2', fontSize: '1.5rem' }}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://wa.me/201110202727" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: '#25D366', fontSize: '1.5rem' }}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NXT Level Academy. {t('footer', 'rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
