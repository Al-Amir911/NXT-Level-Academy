import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Structure.css';

const Structure = () => {
    const { t } = useLanguage();

    return (
        <section className="section-padding structure-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('structure', 'title')}</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">{t('structure', 'subtitle')}</p>
                </div>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>{t('structure', 'duration')}</h3>
                            <p>{t('structure', 'durationDesc')}</p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>{t('structure', 'online')}</h3>
                            <p>{t('structure', 'onlineDesc')}</p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>{t('structure', 'options')}</h3>
                            <p>{t('structure', 'optionsDesc')}</p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Structure;
