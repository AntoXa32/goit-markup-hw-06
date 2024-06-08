document.addEventListener('DOMContentLoaded', function () {
  const modalBackdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.menu-btn');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  function openModal(event) {
    event.preventDefault();
    modalBackdrop.classList.add('is-open');
    modal.classList.add('is-open');
  }

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    modal.classList.remove('is-open');
  }

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
});
