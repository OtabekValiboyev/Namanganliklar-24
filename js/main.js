let modifiers = {
  elModalOpen: 'modal--open'
};

const elModal = document.querySelector('.modal');
const elModalOpen = document.querySelector('.js-modal-open');
const elModalClose = elModal.querySelector('.js-modal-close');

elModalOpen.addEventListener('click', function () {
  elModal.classList.add(modifiers.elModalOpen);
});


elModalClose.addEventListener('click', function () {
  elModal.classList.remove(modifiers.elModalOpen);
});