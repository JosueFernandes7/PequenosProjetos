const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".restart");
const timerText = document.querySelector(".timer-text");

let i = 0;
let seg, min, h;
let timer;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
restart.addEventListener("click", restartTimer);

function startTimer() {
  console.log(!timerText.hasAttribute("on"));
  if (!timerText.hasAttribute("on")) {
    timer = setInterval(() => {
      h = Math.floor(i / 3600);
      let gasto = i - h * 3600; 
      min = Math.floor((gasto) / 60);
      seg = Math.floor((gasto) % 60);

      if (i <= 9) seg = "0" + i;
      if (min <= 9) min = "0" + min;
      if (h <= 9) h = "0" + h;

      timerText.innerText = `${h}:${min}:${seg}`;
      i++;
    }, 1000);
  }
  timerText.setAttribute("on", "");
}
function stopTimer() {
  timerText.removeAttribute("on");
  clearInterval(timer);
}
function restartTimer() {
  i = 0;
  timerText.innerText = "00:00:00";
}
