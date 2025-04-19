import './styles.css';
console.log('Hello World!',)

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  // Открыть модальное окно
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  // Закрыть модальное окно
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Закрыть модальное окно при клике на полупрозрачный фон
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});
