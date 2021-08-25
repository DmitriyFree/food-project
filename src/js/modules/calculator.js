function calculator() {

  try {

    const result = document.querySelector('.calculating__result span');

    let gender, height, weight, age, ratio;

    if (localStorage.getItem('gender')) {
      gender = localStorage.getItem('gender');
    } else {
      gender = 'female';
      localStorage.setItem('gender', gender);
    }

    if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
    } else {
      ratio = '1.375';
      localStorage.setItem('ratio', ratio);
    }

    function initLocalSetting(selector, activeClass) {

      const elements = document.querySelectorAll(selector);

      elements.forEach(item => {


        item.classList.remove(activeClass);

        if (item.getAttribute('id') === localStorage.getItem('gender')) {
          item.classList.add(activeClass);
        }
        if(item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
          item.classList.add(activeClass);
        }
      });
    }

    initLocalSetting('#gender div', 'calculating__choose-item_active');
    initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active');


    function caclTotal() {

      if (!gender || !height || !weight || !age || !ratio) {
        result.innerHTML = '_____';
        return;
      }

      if (gender == 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }
    }

    caclTotal();

    function getStaticInfo(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(item => {
        item.addEventListener('click', (e) => {

          if (e.target.getAttribute('data-ratio')) {
            ratio = e.target.getAttribute('data-ratio');
            localStorage.setItem('ratio', ratio);
          } else {
            gender = e.target.getAttribute('id');
            localStorage.setItem('gender', gender);
          }

          elements.forEach(item => {
            item.classList.remove(activeClass);
          });
          e.target.classList.add(activeClass);
          caclTotal();
        });
      });
    }

    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');


    function getDunamicInfo(selector) {

      const input = document.querySelector(selector);

      input.addEventListener('input', () => {

        if (input.value.match(/\D/g)) {
          input.style.border = '1px solid red';
        } else {
          input.style.border = 'none';
        }

        switch(input.getAttribute('id')) {
          case 'height': {
            height = +input.value;
            break;
          }
          case 'weight': {
            weight = +input.value;
            break;
          }
          case 'age': {
            age = +input.value;
            break;
          }
        }

        caclTotal();
      });

    }

    getDunamicInfo('#height');
    getDunamicInfo('#weight');
    getDunamicInfo('#age');

  } catch (err) {
      console.log('error in caclulator');
  }


}
export default calculator;