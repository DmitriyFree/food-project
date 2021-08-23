function modal(modalSelector, showClass, hideClass, triggersSelector) {
  try {

    const modal = document.querySelector(modalSelector),
          triggers = document.querySelectorAll(triggerSelector);

    function showModal() {
      modal.classList.add(showClass);
      modal.classList.remove(hideClass);
      document.documentElement.style.overflow = 'hidden';
      clearTimeout(showModalTimer);
    }

    function hideModal() {
      modal.classList.add(hideClass);
      modal.classList.remove(showClass);
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

    const showModalTimer = setTimeout(showModal, 50000);

    function scrollShowModal() {

      if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
        showModal();
        document.removeEventListener('scroll', scrollShowModal);
      }
    }
    document.addEventListener('scroll', scrollShowModal);

  } catch (err) {

  }
}

export default modal;