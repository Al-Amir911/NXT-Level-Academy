import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">

                    <span className="logo-text">NXT Level <span className="logo-accent">Academy</span></span>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setMobileMenuOpen(false)}>{t('nav', 'home')}</a>
                    <a href="#overview" onClick={() => setMobileMenuOpen(false)}>{t('nav', 'about')}</a>
                    <a href="#programs" onClick={() => setMobileMenuOpen(false)}>{t('nav', 'programs')}</a>
                    <a href="#methodology" onClick={() => setMobileMenuOpen(false)}>{t('nav', 'methodology')}</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>{t('nav', 'pricing')}</a>
                    <a href="#pricing" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav', 'enroll')}</a>
                    <a href="https://www.facebook.com/share/16eKegk7rz/" target="_blank" rel="noopener noreferrer" className="nav-facebook" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', color: '#1877F2', marginRight: '5px' }}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://wa.me/201110202727" target="_blank" rel="noopener noreferrer" className="nav-whatsapp" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', color: '#25D366' }}>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        {language === 'en' ? 'العربية' : 'English'}
                    </button>
                </div>

                <button className="lang-toggle mobile-lang-toggle" onClick={toggleLanguage}>
                    {language === 'en' ? 'العربية' : 'English'}
                </button>

                <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
