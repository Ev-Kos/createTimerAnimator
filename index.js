const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let interval = null;

function timeFormat(numberOfSec) {
  const numberOfMin = Math.floor(numberOfSec / 60);
  const seconds = numberOfSec % 60;
  const hours = Math.floor(numberOfMin / 60);
  const minutes = numberOfMin % 60;

  return `${hours < 10 ? '0'+ hours : hours}:${minutes < 10 ? '0'+ minutes : minutes}:${seconds < 10 ? '0'+ seconds : seconds}`
};

const createTimerAnimator = () => {
  return (seconds) => {
    let countSec = seconds;

    interval = setInterval(() => {
      timerEl.textContent = timeFormat(countSec);
      if (countSec <= 0) {
        clearInterval(interval);
      }
      countSec--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g,'');
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  if (interval) {
    clearInterval(interval);
  }
  animateTimer(seconds);
  inputEl.value = '';
});
