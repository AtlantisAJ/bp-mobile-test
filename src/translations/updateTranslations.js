import { replacePlaceholders } from '../utils/replacePlaceholders.js';

export function updateTranslations(translations, prices) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[key]; // Получаем перевод один раз

    if (translation) {
      let text = translation; // По умолчанию используем найденный перевод

      // Проверяем, есть ли в ключе плейсхолдер {{price}}
      if (key.includes('{{price}}')) {
        let priceToUse = null; // Какую цену использовать?

        // Определяем цену на основе ключа И/ИЛИ родительского элемента
        if (key.includes('per year')) {
          priceToUse = prices.yearly;
        } else if (key.includes('per week')) {
          // Находим ближайший родительский элемент <button>
          const parentButton = element.closest('button');
          if (parentButton) {
            const buttonType = parentButton.dataset.type; // Получаем 'yearly' или 'weekly'

            if (buttonType === 'yearly') {
              priceToUse = prices.yearly_per_week;
            } else if (buttonType === 'weekly') {
              priceToUse = prices.weekly;
            }
          } else {
            // Не смогли найти родительскую кнопку, возможно, стоит вывести предупреждение
            console.warn(`Could not find parent button for element with key: ${key}`, element);
            // Можно установить значение по умолчанию или оставить null
            // priceToUse = prices.default_price; // Если есть цена по умолчанию
          }
        }
        // Если цена была определена, заменяем плейсхолдер
        if (priceToUse !== null) {
          text = replacePlaceholders(translation, { price: priceToUse });
        } else {
          // Не смогли определить цену для этого ключа с {{price}}
          console.warn(`Could not determine price for key: ${key}`, element);
          // Можно оставить исходный текст с плейсхолдером или очистить
          // text = text.replace('{{price}}', 'N/A');
        }
      }
      // Обновляем содержимое элемента
      element.innerHTML = text;

    } else {
      console.warn(`Missing translation for key: ${key}`);
    }
  });
}
