import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../public/locales/en.json';
import af from '../../public/locales/af.json';
import xh from '../../public/locales/xh.json';
import zu from '../../public/locales/zu.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            af: { translation: af },
            xh: { translation: xh },
            zu: { translation: zu },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already safe from XSS
        },
    });

export default i18n;
