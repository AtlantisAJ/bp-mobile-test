import './styles.css';
import de from './locales/de.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import pt from './locales/pt.json';

// Список доступных переводов
const translations = { de, en, es, fr, ja, pt };
const supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];

// Значения цен для подстановки
const prices = {
  yearly: '$39.99',
  weekly: '$6.99',
  yearly_per_week: '$0.48',
};

// Получение языка из URL или системы
function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && supportedLanguages.includes(langParam)) {
    return langParam;
  }
  const systemLang = navigator.language.split('-')[0];
  return supportedLanguages.includes(systemLang) ? systemLang : 'en';
}

// Замена плейсхолдеров
function replacePlaceholders(str, values) {
  return str.replace(/{{(\w+)}}/g, (_, key) => {
    return values[key] || `{{${key}}}`; // Если ключ не найден, оставляем как есть
  });
}

// Обновление текста на странице
function updateTranslations(translations, lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      let text = translations[key];

      // Заменяем {{price}} на значение из объекта prices
      text = replacePlaceholders(text, {
        price: key.includes("per year") ? prices.yearly : prices.weekly,
      });

      element.innerHTML = text;
    } else {
      console.warn(`Missing translation for key: ${key}`);
    }
  });
}

// Корректировка размера шрифта для длинных текстов
function adjustFontSize() {
  const featureTexts = document.querySelectorAll('.feature-card p');
  featureTexts.forEach(text => {
    if (text.scrollWidth > text.offsetWidth) {
      let fontSize = parseFloat(window.getComputedStyle(text).fontSize);
      text.style.fontSize = `${Math.max(fontSize - 2, 8)}px`;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация языка
  const lang = getLanguage();
  document.documentElement.lang = lang; // Устанавливаем атрибут lang
  const selectedTranslations = translations[lang] || translations.en;
  updateTranslations(selectedTranslations, lang);
  adjustFontSize();

  // Логика модального окна
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');
  const continueBtn = document.getElementById('continueBtn');

  if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  } else {
    console.error('Modal elements not found!');
  }

  // Логика выбора тарифа
  const yearlyOption = document.querySelector('.pricing-option.yearly');
  const weeklyOption = document.querySelector('.pricing-option.weekly');
  const ribbon = yearlyOption ? yearlyOption.querySelector('.ribbon') : null;
  let selectedType = 'yearly';

  function updateSelection(type) {
    selectedType = type;
    if (type === 'yearly') {
      yearlyOption.classList.add('yearly-thrown');
      weeklyOption.classList.remove('weekly-thrown');
      if (ribbon) {
        ribbon.classList.add('ribbon-thrown');
        ribbon.classList.remove('ribbon');
      }
    } else {
      weeklyOption.classList.add('weekly-thrown');
      yearlyOption.classList.remove('yearly-thrown');
      if (ribbon) {
        ribbon.classList.add('ribbon');
        ribbon.classList.remove('ribbon-thrown');
      }
    }
  }

  if (yearlyOption && weeklyOption) {
    yearlyOption.addEventListener('click', (e) => {
      e.preventDefault();
      updateSelection('yearly');
    });

    weeklyOption.addEventListener('click', (e) => {
      e.preventDefault();
      updateSelection('weekly');
    });
  } else {
    console.error('Pricing options not found!');
  }

  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      const url = selectedType === 'yearly' ? 'https://apple.com/' : 'https://google.com/';
      window.location.href = url;
    });
  } else {
    console.error('Continue button not found!');
  }
});
