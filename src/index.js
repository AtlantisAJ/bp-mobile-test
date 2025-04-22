import './assets/styles/main.css';
import { getLanguage } from './utils/getLanguage.js';
import { adjustFontSize } from './utils/adjustFontSize.js';
import { updateTranslations } from './translations/updateTranslations.js';
import { initializeModal } from './components/modal.js';
import { initializePricing } from './components/pricing.js';
import { initializeContinueButton } from './components/continueButton.js';
import de from './locales/de.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import pt from './locales/pt.json';

const translations = { de, en, es, fr, ja, pt };
const prices = {
  yearly: '$39.99',
  weekly: '$6.99',
  yearly_per_week: '$0.48',
};

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  const selectedTranslations = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  updateTranslations(selectedTranslations, prices);
  adjustFontSize();
  initializeModal();
  initializePricing(prices);
  initializeContinueButton();
});
