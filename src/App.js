import Contact from './Contact';
import Games from './Games';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import GameInfo from './GameInfo'
import NotFound from './NotFound';
import CheckOut from './CheckOut';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Load translation files
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    lng: 'en', // Set the default language to English
    fallbackLng: 'en', // Use English as a fallback language
    interpolation: {
      escapeValue: false,
    },
  });

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={
            <I18nextProvider i18n={i18n}>
              <Contact />
            </I18nextProvider>}
          />
          <Route path="/gameinfo/:id" element={<GameInfo />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>


      </div>
    </div>
  );
}

export default App;
