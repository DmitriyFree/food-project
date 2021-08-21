import '../scss/style.scss';
import tabs from './modules/tabs';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {

  tabs('.tabheader__itemss', 'tabheader__item_active', '.tabcontent', 'tabcontent-active');
  timer('.promotion__timer', '2021-08-31');
});

