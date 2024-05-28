document.addEventListener('DOMContentLoaded', function () {
  // Отримати елементи модального вікна та кнопки закриття
  const modalBackdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.footer-form-btn');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  // Функція для відкриття модального вікна
  function openModal(event) {
    event.preventDefault(); // Зупинити дію за замовчуванням (відправку форми)
    modalBackdrop.classList.add('is-open');
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
  }

  // Функція для закриття модального вікна
  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
  }

  // Обробники подій для відкриття та закриття модального вікна
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // Закрити модальне вікно при кліку на фон поза вікном
  modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
});
