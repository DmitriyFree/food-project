/**
 *
 * @param {String} sliderSelector css selector for slider
 * @param {String} innerSelector css selector for inner
 * @param {String} slideSelector css selector for one slide
 * @param {String} prev
 * @param {String} next
 * @param {String} currentSelector
 * @param {String} totalSelector
 * @param {*} transition
 */
function slider(sliderSelector, innerSelector, slideSelector, prev, next, currentSelector, totalSelector, transition = 0.5) {

  const slides = document.querySelectorAll(slideSelector),
    wrapper = document.querySelector(sliderSelector),
    inner = document.querySelector(innerSelector),
    prevBtn = document.querySelector(prev),
    nextBtn = document.querySelector(next),
    current = document.querySelector(currentSelector),
    total = document.querySelector(totalSelector);

  const size = slides.length;

  let index = 0;

  function init() {
    wrapper.style.overflow = 'hidden';
    inner.style.width = `${100 * size}%`;
    inner.style.display = 'flex';
    inner.style.transition = `${transition}s`;

    renderSlider(index);
    total.textContent = `${formatNumber(size)}`;
    updateCurrent();
  }

  function renderSlider(index) {

    if (index < 0) index = 0;
    if (index > size - 1) index = size - 1;

    inner.style.transform = `translateX(-${(100 / size) * index}%)`;

  }

  function formatNumber(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else return num;
  }

  function updateCurrent() {
    current.textContent = formatNumber(index + 1);
  }

  init();

  prevBtn.addEventListener('click', (e) => {
    index--;
    if (index < 0) index = size - 1;
    renderSlider(index);
    updateCurrent();
  });

  nextBtn.addEventListener('click', (e) => {
    index++;
    if (index >= size) index = 0;
    renderSlider(index);
    updateCurrent();
  });
}

export default slider;