import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

const Pricing = ({ onChoosePlan }) => {
    const { t } = useLanguage();

    const groupFeatures = t('pricing', 'features').group;
    const oneFeatures = t('pricing', 'features').one;
    const freeFeatures = t('pricing', 'features').free;

    return (
        <section id="pricing" className="section-padding pricing-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('pricing', 'title')}</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">{t('pricing', 'subtitle')}</p>
                </div>

                <div className="pricing-grid">
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>{t('pricing', 'freeLesson')}</h3>
                            <div className="price">
                                <span className="currency">EGP</span>
                                <span className="amount">0</span>
                                <span className="period">{t('pricing', 'month')}</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                {freeFeatures && freeFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#contact" className="btn btn-outline" onClick={() => onChoosePlan('Free Lesson')}>{t('pricing', 'choose')}</a>
                        </div>
                    </div>

                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>{t('pricing', 'smallGroup')}</h3>
                            <div className="price">
                                <span className="currency">EGP</span>
                                <span className="amount">600</span>
                                <span className="period">{t('pricing', 'month')}</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                {groupFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#contact" className="btn btn-outline" onClick={() => onChoosePlan('Small Group')}>{t('pricing', 'choose')}</a>
                        </div>
                    </div>

                    <div className="pricing-card featured">
                        <div className="popular-tag">{t('pricing', 'popular')}</div>
                        <div className="pricing-header">
                            <h3>{t('pricing', 'oneOnOne')}</h3>
                            <div className="price">
                                <span className="currency">EGP</span>
                                <span className="amount">1500</span>
                                <span className="period">{t('pricing', 'month')}</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                {oneFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#contact" className="btn btn-primary" onClick={() => onChoosePlan('Private')}>{t('pricing', 'choose')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
