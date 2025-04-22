import { replacePlaceholders } from '../utils/replacePlaceholders.js';

export function updateTranslations(translations, prices) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      let text = replacePlaceholders(translations[key], {
        price: key.includes('per year') ? prices.yearly : prices.weekly,
      });
      element.innerHTML = text;
    } else {
      console.warn(`Missing translation for key: ${key}`);
    }
  });
}
