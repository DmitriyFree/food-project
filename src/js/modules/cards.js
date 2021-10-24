import server from "./server";

class Card {
  constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27;
    this.parseToUAN();
  }

  parseToUAN() {
    this.price = this.price * this.transfer;
  }

  render() {

    const cardItem = document.createElement('div');

    if (this.classes.length == 0) {
      cardItem.classList.add('menu__item');
    } else {
      this.classes.forEach(item => cardItem.classList.add(item));
    }

    cardItem.innerHTML=`
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
    `;
    this.parent.append(cardItem);

  }

}

function cards() {
  server.getData('https://foodmyproject.herokuapp.com/menu')
.then(data => {
  data.forEach(({img, altimg, title, descr, price}) => {
    new Card(img, altimg, title, descr, price, '.menu .container').render();
  });
});
}

export default cards;
