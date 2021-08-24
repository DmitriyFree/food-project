import '../scss/style.scss';
import calculator from './modules/calculator';
import cards from './modules/cards';
import modal from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';
import form from './modules/form';


window.addEventListener('DOMContentLoaded', () => {

  tabs('.tabheader__item', 'tabheader__item_active', '.tabcontent', 'tabcontent-active');
  timer('.promotion__timer', '2021-08-31');
  modal('.modal', 'show', 'hide', '[data-modal]');
  cards();
  calculator();
  form();
});

