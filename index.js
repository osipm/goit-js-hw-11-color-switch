const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

let interval = 0;

start.addEventListener('click', startСhangeBgClBody);
stop.addEventListener('click', stopСhangeBgClBody);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
min = 0;

function randomСolor() {
  body.style.background =
    colors[randomIntegerFromInterval(min, colors.length - 1)];
}
function startСhangeBgClBody() {
  interval = setInterval(randomСolor, 1000);
  start.setAttribute('disabled', 'disabled');
}

function stopСhangeBgClBody() {
  clearInterval(interval);
  start.removeAttribute('disabled');
}
