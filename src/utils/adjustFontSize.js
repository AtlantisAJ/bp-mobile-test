export function adjustFontSize() {
    const featureTexts = document.querySelectorAll('.feature-card p');
    // Перебираем каждый найденный текстовый элемент.
    featureTexts.forEach((text) => {
        if (text.scrollWidth > text.offsetWidth) {
            let fontSize = parseFloat(window.getComputedStyle(text).fontSize);
            // Уменьшаем размер шрифта на 2 пикселя, но не делаем его меньше 8 пикселей.
            // Math.max используется для того, чтобы гарантировать, что новый размер шрифта не будет меньше 8.
            text.style.fontSize = `${Math.max(fontSize - 2, 8)}px`;
        }
    });
}
