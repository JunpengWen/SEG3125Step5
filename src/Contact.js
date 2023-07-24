import Footer from './Footer';
import { useCollapse } from 'react-collapsed';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation('contactPage');
  // State and handler for each collapsible section
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);

  // Handler for toggling the first collapsible section
  function handleOnClick1() {
    setExpanded1(!isExpanded1);
  }

  // Handler for toggling the second collapsible section
  function handleOnClick2() {
    setExpanded2(!isExpanded2);
  }

  function handleOnClick3() {
    setExpanded3(!isExpanded3);
  }

  const { getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1 } = useCollapse({ isExpanded: isExpanded1 });
  const { getCollapseProps: getCollapseProps2, getToggleProps: getToggleProps2 } = useCollapse({ isExpanded: isExpanded2 });
  const { getCollapseProps: getCollapseProps3, getToggleProps: getToggleProps3 } = useCollapse({ isExpanded: isExpanded3 });

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Message sent successfully!');
  };

  const handleLanguageToggle = () => {
    // Get the current language
    const currentLanguage = i18n.language;

    // Toggle the language between 'en' (English) and 'fr' (French)
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';

    // Change the language using i18n
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="contact">
      <div className="mainContact">
        <br />
        <button onClick={handleLanguageToggle}>
          {i18n.language === 'en' ? 'Français' : 'English'}
        </button>
        <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', fontSize: '2.5em' }}>
          {t('pageTitle')}
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t('form.nameLabel')}</label>
          <input type="text" id="name" required />
          <label htmlFor="email">{t('form.emailLabel')}</label>
          <input type="email" id="email" required />
          <label htmlFor="question">{t('form.questionLabel')}</label>
          <textarea id="question" cols="20" rows="5"></textarea>
          <button type="submit">{t('form.sendButton')}</button>
        </form>
        <br />
      </div>
      <h1 style={{ justifyContent: 'center', display: 'flex' }}>{t('faq.sectionTitle')}</h1>
      <div className="fqa">
        <div className="collapsible">
          <button
            className="header"
            {...getToggleProps1({ onClick: handleOnClick1, 'aria-expanded': isExpanded1 })}
          >
            {t('faq.question1')}
          </button>
          <div {...getCollapseProps1()}>
            <div className="content">
              <p>{t('faq.answer1')}</p>
            </div>
          </div>
        </div>
        <div className="collapsible">
          <button
            className="header"
            {...getToggleProps2({ onClick: handleOnClick2, 'aria-expanded': isExpanded2 })}
          >
            {t('faq.question2')}
          </button>
          <div {...getCollapseProps2()}>
            <div className="content">
              <p>{t('faq.answer2')}</p>
            </div>
          </div>
        </div>
        <div className="collapsible">
          <button
            className="header"
            {...getToggleProps3({ onClick: handleOnClick3, 'aria-expanded': isExpanded3 })}
          >
            {t('faq.question3')}
          </button>
          <div {...getCollapseProps3()}>
            <div className="content">
              <p>{t('faq.answer3')}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
