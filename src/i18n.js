import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./locales/en.json";
import translationMK from "./locales/mk.json"
import translationALB from "./locales/alb.json"

const resources = {
    en: { translation: translationEN },
    mk: { translation: translationMK },
    alb:{translation: translationALB}
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            // This enables language persistence
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
