import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Methodology.css';
import methodologyImage from '../assets/methodology.png';

const Methodology = () => {
    const { t } = useLanguage();

    const methods = [
        t('methodology', 'games'),
        t('methodology', 'videos'),
        t('methodology', 'phonics'),
        t('methodology', 'stories'),
        t('methodology', 'speaking'),
        t('methodology', 'worksheets'),
        t('methodology', 'interactive')
    ];

    return (
        <section id="methodology" className="section-padding methodology-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('methodology', 'title')}</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">{t('methodology', 'subtitle')}</p>
                </div>

                <div className="method-grid">
                    <div className="method-image">
                        <img src={methodologyImage} alt="Interactive Learning" className="method-img" />
                    </div>
                    <div className="method-list">
                        <ul>
                            {methods.map((item, index) => (
                                <li key={index} className="method-item">
                                    <span className="check-icon">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
