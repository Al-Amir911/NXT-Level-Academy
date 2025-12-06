import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title fade-in-up">{t('hero', 'title')}</h1>
                <p className="hero-tagline fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {t('hero', 'tagline')}
                </p>
                <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#pricing" className="btn btn-primary">{t('hero', 'enroll')}</a>
                    <a href="#pricing" className="btn btn-secondary">{t('hero', 'recorded')}</a>
                    <a href="#contact" className="btn btn-outline-light">{t('hero', 'placement')}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
