import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextXHRBackend from 'i18next-xhr-backend';
import i18nextLanguageDetector from 'i18next-browser-languagedetector';
import config from '../../config/config';

i18n.use(i18nextXHRBackend)
    .use(i18nextLanguageDetector)
    .use(initReactI18next)
    .init({
        whitelist: ['en', 'de', 'tr'],
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            // it will be load from a CDN
            loadPath: `assets/locales/{{lng}}.{{ns}}.json`,
            customHeaders: {
                'Access-Control-Allow-Origin': '*',
            },
        },
        detection: {
            order: ['querystring', 'cookie'],
            lookupCookie: `${config.appPrefix}-lang`,
            lookupQuerystring: 'lang',
            caches: ['localStorage', 'cookie'],
            cookieMinutes: 10080, // 7 days
        },
    });

export default i18n;
