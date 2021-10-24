import '../scss/style.scss';
import calculator from './modules/calculator';
import cards from './modules/cards';
import modal from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';
import form from './modules/form';
import slider from './modules/slider';
import preloader from './modules/preloader';

window.addEventListener('load', () => {

  preloader();
  tabs('.tabheader__item', 'tabheader__item_active', '.tabcontent', 'tabcontent-active');
  timer('.promotion__timer', '2021-11-30');
  modal('.modal', 'show', 'hide', '[data-modal]');
  cards();
  calculator();
  form();
  slider('.offer__slider-wrapper', '.offer__slider-inner', '.offer__slide', '.offer__slider-prev', '.offer__slider-next', '#current', '#total');
});