const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const restart = document.querySelector('.restart');
const timerText = document.querySelector('.timer-text');

let i = 0;
let timer;

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
restart.addEventListener('click', restartTimer);

function startTimer() {
  console.log(!timerText.hasAttribute('on'))
  if(!timerText.hasAttribute('on')){
    timer = setInterval(() => {
      timerText.innerText = i++ + "s";
    },1000)
  }
  timerText.setAttribute('on', '');
}
function stopTimer() {
  timerText.removeAttribute('on');
  clearInterval(timer);
}
function restartTimer() {

  i=0;
  timerText.innerText = 0;
}