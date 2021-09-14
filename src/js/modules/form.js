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

      const formData = new FormData(form);

      const [name, phone] = formData;

      if (!checkData(name[1], phone[1])) return;

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      server.postData('http://localhost:3000/requests', json)
      .then (data => {
        console.log(data);
      })
      .catch(()=>{
        console.log('error');
      })
      .finally(() => {
        form.reset();
      });
    });
  }

  function checkData(name, phone) {

    const nameError = document.querySelector('.form-error #name');
    const phoneError = document.querySelector('.form-error #phone');

    if (name.length < 4 || name.length > 20) {
      nameError.textContent = 'enter name from 4 to 20 characters';
      return false;
    } else resetTextContent(nameError);

    if (isNaN(phone)) {
      phoneError.textContent = 'phone number can not be string';
      return false;
    } else resetTextContent(phoneError);
    if (phone.length != 10) {
      phoneError.textContent = 'phone number must be 10';
      return false;
    } else resetTextContent(phoneError);
    return true;
  }
  function resetTextContent(elem) {
    elem.textContent = '';
  }

  forms.forEach(form => {
    handlerPostData(form);
  });
}

export default form;