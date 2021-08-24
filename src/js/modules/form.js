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

  forms.forEach(form => {
    handlerPostData(form);
  });
}

export default form;