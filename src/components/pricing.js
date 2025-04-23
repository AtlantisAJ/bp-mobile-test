export function initializePricing() {
  const yearlyOption = document.querySelector('.pricing-option.yearly');
  const weeklyOption = document.querySelector('.pricing-option.weekly');
  const ribbon = yearlyOption ? yearlyOption.querySelector('.ribbon') : null;
  const continueBtn = document.getElementById('continueBtn');
  let selectedType = null;

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
    // Убираем ошибки при выборе тарифа
    continueBtn.classList.remove('shake', 'error');
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
      if (!selectedType) {
        continueBtn.classList.add('shake', 'error');
      } else {
        const url =
          selectedType === 'yearly'
            ? 'https://apple.com/'
            : 'https://google.com/';
        window.location.href = url;
      }
    });
  } else {
    console.error('Continue button not found!');
  }
}
