export function initializeContinueButton() {
  const continueBtn = document.getElementById('continueBtn');
  const modal = document.getElementById('modal');

  if (continueBtn && modal) {
    continueBtn.addEventListener('click', () => {
      const selectedOption = document.querySelector('.pricing-option.active');
      if (selectedOption) {
        const selectedType = selectedOption.getAttribute('data-type');
        console.log(`Proceeding with: ${selectedType}`);
      } else {
        alert('Please select a pricing option before continuing.');
      }
    });
  } else {
    console.error('Continue button or modal not found in the DOM.');
  }
}
