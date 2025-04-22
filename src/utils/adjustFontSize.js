export function adjustFontSize() {
  const featureTexts = document.querySelectorAll('.feature-card p');
  featureTexts.forEach(text => {
    if (text.scrollWidth > text.offsetWidth) {
      let fontSize = parseFloat(window.getComputedStyle(text).fontSize);
      text.style.fontSize = `${Math.max(fontSize - 2, 8)}px`;
    }
  });
}
