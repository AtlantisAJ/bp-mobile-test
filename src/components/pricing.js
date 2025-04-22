export function initializePricing() {
    // Находим HTML элемент, представляющий годовой вариант подписки, используя его CSS класс.
    const yearlyOption = document.querySelector('.pricing-option.yearly');
    // Находим HTML элемент, представляющий недельный вариант подписки, используя его CSS класс.
    const weeklyOption = document.querySelector('.pricing-option.weekly');
    // Пытаемся найти элемент "ribbon" (ленточку) внутри годового варианта.
    // Если yearlyOption существует, то ищем внутри него элемент с классом 'ribbon', иначе ribbon будет null.
    const ribbon = yearlyOption ? yearlyOption.querySelector('.ribbon') : null;
    // Находим HTML элемент кнопки "Продолжить" по его ID.
    const continueBtn = document.getElementById('continueBtn');
    // Объявляем переменную для хранения выбранного типа подписки. По умолчанию устанавливаем 'yearly' (годовой).
    let selectedType = 'yearly';

    // Функция для обновления визуального состояния выбранного варианта подписки.
    function updateSelection(type) {
        // Обновляем значение переменной selectedType на переданный тип.
        selectedType = type;
        // Если выбран годовой вариант ('yearly'):
        if (type === 'yearly') {
            // Добавляем класс 'yearly-thrown' к годовому варианту, вероятно, для визуального эффекта.
            yearlyOption.classList.add('yearly-thrown');
            // Удаляем класс 'weekly-thrown' у недельного варианта, возвращая его к обычному состоянию.
            weeklyOption.classList.remove('weekly-thrown');
            // Если элемент ribbon существует:
            if (ribbon) {
                // Добавляем класс 'ribbon-thrown' к ленточке, вероятно, скрывая или перемещая ее.
                ribbon.classList.add('ribbon-thrown');
                // Удаляем класс 'ribbon' у ленточки.
                ribbon.classList.remove('ribbon');
            }
        } else {
            // Если выбран недельный вариант ('weekly'):
            // Добавляем класс 'weekly-thrown' к недельному варианту для визуального эффекта.
            weeklyOption.classList.add('weekly-thrown');
            // Удаляем класс 'yearly-thrown' у годового варианта.
            yearlyOption.classList.remove('yearly-thrown');
            // Если элемент ribbon существует:
            if (ribbon) {
                // Добавляем класс 'ribbon' к ленточке, вероятно, показывая ее.
                ribbon.classList.add('ribbon');
                // Удаляем класс 'ribbon-thrown' у ленточки.
                ribbon.classList.remove('ribbon-thrown');
            }
        }
    }

    // Проверяем, существуют ли на странице элементы годового и недельного вариантов.
    if (yearlyOption && weeklyOption) {
        // Добавляем обработчик события 'click' на годовой вариант.
        yearlyOption.addEventListener('click', (e) => {
            // Предотвращаем стандартное действие ссылки (если элемент является ссылкой).
            e.preventDefault();
            // Вызываем функцию updateSelection с аргументом 'yearly', чтобы обновить выбор на годовой вариант.
            updateSelection('yearly');
        });

        // Добавляем обработчик события 'click' на недельный вариант.
        weeklyOption.addEventListener('click', (e) => {
            // Предотвращаем стандартное действие ссылки.
            e.preventDefault();
            // Вызываем функцию updateSelection с аргументом 'weekly', чтобы обновить выбор на недельный вариант.
            updateSelection('weekly');
        });
    } else {
        // Если один из вариантов подписки не найден на странице, выводим сообщение об ошибке в консоль.
        console.error('Pricing options not found!');
    }

    // Проверяем, существует ли на странице кнопка "Продолжить".
    if (continueBtn) {
        // Добавляем обработчик события 'click' на кнопку "Продолжить".
        continueBtn.addEventListener('click', () => {
            // Определяем URL в зависимости от выбранного типа подписки.
            // Если выбран годовой вариант, URL будет 'https://apple.com/', иначе 'https://google.com/'.
            const url =
                selectedType === 'yearly'
                    ? 'https://apple.com/'
                    : 'https://google.com/';
            // Перенаправляем пользователя на определенный URL.
            window.location.href = url;
        });
    } else {
        // Если кнопка "Продолжить" не найдена на странице, выводим сообщение об ошибке в консоль.
        console.error('Continue button not found!');
    }
}
