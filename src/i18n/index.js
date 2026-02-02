import { createI18n } from 'vue-i18n';
import uz from './locales/uz.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

// Get saved language from localStorage or default to Uzbek
const savedLocale = localStorage.getItem('locale') || 'uz';

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: savedLocale,
    fallbackLocale: 'uz',
    messages: {
        uz,
        ru,
        en
    },
    globalInjection: true
});

export default i18n;
