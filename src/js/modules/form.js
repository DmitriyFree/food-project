import resetErrorText from "./resetErrorText";
import server from "./server";

function form() {

  const forms = document.querySelectorAll('form');

  /**
   *
   * @param {HTMLFormElement} form
   */
  function handlerPostData(form) {

    form.addEventListener('submit', (e) =>{
      e.preventDefault();

      // const statusMessage = document.createElement('img');
      // statusMessage.src = 'src/img/spinner.svg';
      // form.append(statusMessage);
      const spinners = document.querySelectorAll('.btn-wrapper .spinner');
      spinners.forEach(spinner => {
        spinner.classList.add('active');
      });

      const formData = new FormData(form);

      const [name, phone] = formData;

      if (!checkData(name[1], phone[1])) return;

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      server.postData('https://foodmyproject.herokuapp.com/requests', json)
      .then (data => {
        showThanksModal('Спасибо, скоро мы с вами свяжемся');
        form.reset();
      })
      .catch(()=>{
        showThanksModal('Что-то пошло не так!!!');
      })
      .finally(() => {
        form.reset();
        spinners.forEach(spinner => {
          spinner.classList.remove('active');
        });
      });
    });
  }

  function checkData(name, phone) {

    const nameError = document.querySelector('.form-error #name');
    const phoneError = document.querySelector('.form-error #phone');

    resetErrorText();

    if (name.length < 4 || name.length > 20) {
      nameError.textContent = 'enter name from 4 to 20 characters';
      return false;
    }

    if (isNaN(phone)) {
      phoneError.textContent = 'phone number can not be string';
      return false;
    }
    if (phone.length != 10) {
      phoneError.textContent = 'phone number must be 10';
      return false;
    }
    return true;
  }
  function showThanksModal(message) {

    const prevModalDialog = document.querySelector('.modal__dialog');

    console.log(prevModalDialog);

    prevModalDialog.classList.add('hide');

    const modal = document.querySelector('.modal');

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.documentElement.style.overflow = 'hidden';

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class='modal__content'>
        <div class='modal__close' data-close>x</div>
        <div class='modal__title'>${message}</div>
      </div>
    `;
    modal.append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.remove('hide');

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.documentElement.style.overflow = '';
    }, 3000);

  }



  forms.forEach(form => {
    handlerPostData(form);
  });
}

export default form;