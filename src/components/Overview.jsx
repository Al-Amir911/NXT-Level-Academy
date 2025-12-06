import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Overview.css';
import cambridgeLogo from '../assets/cambridge-logo.png';
import oxfordLogo from '../assets/oxford-logo.png';

const Overview = () => {
    const { t } = useLanguage();

    return (
        <section id="overview" className="section-padding overview-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('overview', 'title')}</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        {t('overview', 'subtitle')}
                    </p>
                </div>

                <div className="curriculum-grid">
                    <div className="curriculum-card cambridge">
                        <img src={cambridgeLogo} alt="Cambridge Curriculum" className="curriculum-logo" />
                        <h3>{t('overview', 'cambridge')}</h3>
                        <p className="age-group">{t('overview', 'juniors')}</p>
                        <p>
                            {t('overview', 'cambridgeDesc')}
                        </p>
                    </div>

                    <div className="curriculum-card oxford">
                        <img src={oxfordLogo} alt="Oxford Curriculum" className="curriculum-logo" />
                        <h3>{t('overview', 'oxford')}</h3>
                        <p className="age-group">{t('overview', 'highLevel')}</p>
                        <p>
                            {t('overview', 'oxfordDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
