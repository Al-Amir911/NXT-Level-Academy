import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Features.css';

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: "👩‍🏫",
            title: t('features', 'native'),
            desc: t('features', 'nativeDesc')
        },
        {
            icon: "📘",
            title: t('features', 'curriculum'),
            desc: t('features', 'curriculumDesc')
        },
        {
            icon: "💰",
            title: t('features', 'affordable'),
            desc: t('features', 'affordableDesc')
        },
        {
            icon: "💬",
            title: t('features', 'friendly'),
            desc: t('features', 'friendlyDesc')
        },
        {
            icon: "📊",
            title: t('features', 'reports'),
            desc: t('features', 'reportsDesc')
        }
    ];

    return (
        <section className="section-padding features-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('features', 'title')}</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-item" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="feature-text">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
