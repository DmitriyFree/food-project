function modal(modalSelector, show, triggerSelector) {
  try {

    const modal = document.querySelector(modalSelector),
          triggers = document.querySelectorAll(triggerSelector);

    function showModal() {
      modal.classList.add(show);
      document.documentElement.style.overflow = 'hidden';
    }

    function hideModal() {
      modal.classList.remove(show);
      document.documentElement.style.overflow = '';
    }

    triggers.forEach(item => {
      item.addEventListener('click', showModal);
    });

    document.addEventListener('keydown', (e) => {
      if (e.code == 'Escape') {
        hideModal();
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == "") {
        hideModal();
      }
    });

  } catch (err) {

  }
}

export default modal;