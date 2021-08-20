function timer(selector, endtime) {

  function calcTime(endtime) {

    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.round(t / (1000 * 60 * 60 * 24)),
          hours = Math.round((t / (1000 * 60 * 60)) % 24),
          minutes = Math.round((t / (1000 * 60)) % 60),
          seconds = Math.round((t / (1000)) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };

  }

  function convertZero (num) {
    if (num >= 0 && num < 10) {
       return `0${num}`;
    }
    else return num;
  }

  function renderTime(selector) {

    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {

      const t = calcTime(endtime);
      days.textContent = convertZero(t.days);
      hours.textContent = convertZero(t.hours);
      minutes.textContent = convertZero(t.minutes);
      seconds.textContent = convertZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  renderTime(selector);

}

export default timer;
