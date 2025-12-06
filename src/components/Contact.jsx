import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = ({ selectedPlan }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        childName: '',
        age: '',
        weaknesses: '',
        parentName: '',
        countryCode: '+20',
        whatsapp: '',
        time: 'Morning (10am - 1pm)'
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const dataToSubmit = {
            ...formData,
            whatsapp: `${formData.countryCode} ${formData.whatsapp}`,
            // Add aliases for potential script key matches
            name: formData.childName,
            'Child Name': formData.childName,
            Age: formData.age,

            selectedPlan: selectedPlan || 'Not Selected',
            date: new Date().toISOString()
        };

        try {
            console.log('Submitting form data:', dataToSubmit); // Debugging log
            await fetch('https://script.google.com/macros/s/AKfycbxE6JHC08zayd4D7T0pfDfHnwCp6WMPonglEPdmtNL7Kdd7ymw2T4JoslJp7ndObE4v/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(dataToSubmit)
            });

            setStatus('success');
            setFormData({
                childName: '',
                age: '',
                weaknesses: '',
                weaknesses: '',
                parentName: '',
                countryCode: '+20',
                whatsapp: '',
                time: 'Morning (10am - 1pm)'
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title text-white">{t('contact', 'title')}</h2>
                        <p className="text-white-opacity">
                            {t('contact', 'subtitle')}
                        </p>
                        <div className="info-item">
                            <a href="https://wa.me/201110202727" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1.5rem', color: '#25D366' }} />
                                <p dir="ltr" style={{ margin: 0 }}>+20 111 020 2727</p>
                            </a>
                        </div>
                        <div className="info-item">
                            <span className="icon">📧</span>
                            <p>admissions@nxtlevel.com</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3>{t('contact', 'formTitle')}</h3>
                        {status === 'success' ? (
                            <div className="success-message">
                                <h4>Thank you!</h4>
                                <p>Your request has been received. We will contact you shortly.</p>
                                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {selectedPlan && (
                                    <div className="form-group selected-plan-group">
                                        <label>{t('contact', 'selectedPlan')}</label>
                                        <div className="selected-plan-display">{selectedPlan}</div>
                                    </div>
                                )}
                                <div className="form-group">
                                    <label>{t('contact', 'childName')}</label>
                                    <input
                                        type="text"
                                        name="childName"
                                        value={formData.childName}
                                        onChange={handleChange}
                                        placeholder={t('contact', 'childName')}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('contact', 'age')}</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder={t('contact', 'age')}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('contact', 'weaknesses')}</label>
                                    <textarea
                                        name="weaknesses"
                                        value={formData.weaknesses}
                                        onChange={handleChange}
                                        placeholder={t('contact', 'weaknessesPlaceholder')}
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>{t('contact', 'parentName')}</label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        placeholder={t('contact', 'parentName')}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('contact', 'whatsapp')}</label>
                                    <div className="phone-input-group">
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            className="country-select"
                                        >
                                            <option value="+20">🇪🇬 +20</option>
                                            <option value="+966">🇸🇦 +966</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+965">🇰🇼 +965</option>
                                            <option value="+974">🇶🇦 +974</option>
                                            <option value="+973">🇧🇭 +973</option>
                                            <option value="+968">🇴🇲 +968</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+44">🇬🇧 +44</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder={t('contact', 'whatsapp')}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>{t('contact', 'time')}</label>
                                    <select name="time" value={formData.time} onChange={handleChange}>
                                        <option value="Morning">{t('contact', 'times').morning}</option>
                                        <option value="Afternoon">{t('contact', 'times').afternoon}</option>
                                        <option value="Evening">{t('contact', 'times').evening}</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : t('contact', 'submit')}
                                </button>
                                {status === 'error' && <p className="error-text">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
