import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: { welcome: 'Bienvenue' },
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: Localization.locale,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
