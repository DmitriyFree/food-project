import '../scss/style.scss';
import cards from './modules/cards';
import modal from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {

  tabs('.tabheader__item', 'tabheader__item_active', '.tabcontent', 'tabcontent-active');
  timer('.promotion__timer', '2021-08-31');
  modal('.modal', 'show', '[data-modal]');
  cards();
});

