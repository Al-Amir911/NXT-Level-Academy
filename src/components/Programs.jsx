import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Programs.css';

const Programs = () => {
    const { t } = useLanguage();

    const programs = [
        { title: t('programs', 'reading'), icon: "📖", desc: t('programs', 'readingDesc') },
        { title: t('programs', 'phonics'), icon: "🔤", desc: t('programs', 'phonicsDesc') },
        { title: t('programs', 'speaking'), icon: "🗣️", desc: t('programs', 'speakingDesc') },
        { title: t('programs', 'grammar'), icon: "✍️", desc: t('programs', 'grammarDesc') },
        { title: t('programs', 'writing'), icon: "📝", desc: t('programs', 'writingDesc') },
    ];

    return (
        <section id="programs" className="section-padding programs-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('programs', 'title')}</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">{t('programs', 'subtitle')}</p>
                </div>

                <div className="programs-container">
                    {programs.map((prog, index) => (
                        <div className="program-card" key={index}>
                            <div className="program-icon">{prog.icon}</div>
                            <h3>{prog.title}</h3>
                            <p>{prog.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
