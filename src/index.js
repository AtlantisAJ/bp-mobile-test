import './styles.css';
console.log('Hello World!')

document.addEventListener("DOMContentLoaded", () => {
  // --- Логика модального окна (оставляем как есть) ---
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  if (openModalBtn && modal && closeModalBtn) {
    // Открыть модальное окно
    openModalBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });

    // Закрыть модальное окно по кнопке
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    // Закрыть модальное окно при клике на фон
    modal.addEventListener("click", (event) => {
      // Закрываем только если клик был непосредственно по фону (modal),
      // а не по его содержимому (modal-content или его дочерним элементам)
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  } else {
    console.error("Modal elements not found!");
  }

  // --- Логика выбора тарифа ---
  const yearlyOption = document.querySelector('.pricing-option.yearly');
  const weeklyOption = document.querySelector('.pricing-option.weekly');
  const ribbon = yearlyOption ? yearlyOption.querySelector('.ribbon') : null; // Находим ленту ВНУТРИ yearlyOption

  // Функция для обновления состояния кнопок
  function updateSelection(selectedType) {
    if (selectedType === 'yearly') {
      // Выбран Yearly
      yearlyOption.classList.add('yearly-thrown');
      ribbon.classList.remove('ribbon');
      ribbon.classList.add('ribbon-thrown');
      weeklyOption.classList.remove('weekly-thrown'); // Убираем у другого
    } else if (selectedType === 'weekly') {
      // Выбран Weekly
      weeklyOption.classList.add('weekly-thrown');
      yearlyOption.classList.remove('yearly-thrown'); // Убираем у другого
      ribbon.classList.remove('ribbon-thrown');      // Убираем у ленты
      ribbon.classList.add('ribbon');
    }
  }

  // Добавляем слушатели кликов
  yearlyOption.addEventListener('click', function() {
    updateSelection('yearly');
  });

  weeklyOption.addEventListener('click', function() {
    updateSelection('weekly');
  });
});
