import { replacePlaceholders } from '../utils/replacePlaceholders.js';

export function updateTranslations(translations, prices) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[key];

    if (translation) {
      let text = translation;

      // Проверяем, есть ли в ключе плейсхолдер {{price}}
      if (key.includes('{{price}}')) {
        let priceToUse = null;

        if (key.includes('per year')) {
          priceToUse = prices.yearly;
        } else if (key.includes('per week')) {
          const parentButton = element.closest('button');
          if (parentButton) {
            const buttonType = parentButton.dataset.type; // Получаем 'yearly' или 'weekly'

            if (buttonType === 'yearly') {
              priceToUse = prices.yearly_per_week;
            } else if (buttonType === 'weekly') {
              priceToUse = prices.weekly;
            }
          } else {
            console.warn(`Could not find parent button for element with key: ${key}`, element);
          }
        }
        // Если цена была определена, заменяем плейсхолдер
        if (priceToUse !== null) {
          text = replacePlaceholders(translation, { price: priceToUse });
        } else {
          console.warn(`Could not determine price for key: ${key}`, element);
        }
      }
      // Обновляем содержимое элемента
      element.innerHTML = text;

    } else {
      console.warn(`Missing translation for key: ${key}`);
    }
  });
}
