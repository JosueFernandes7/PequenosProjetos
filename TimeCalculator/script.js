import CountDown from './countDown.js';

const futureDate = document.querySelector('#dataFutura');
const saida = document.querySelector("[data-output]");

futureDate.addEventListener('change',startCount);

let timer = null; // forma para remover o antigo timer
function startCount() {
  clearInterval(timer);
  const futureDate = this.value;
  timer = setInterval(() => {

    let data = new CountDown(futureDate).newCount;

    saida.innerHTML = `${data.days}d ${data.hours}h ${data.minutes}m ${data.seconds}s`
    console.log(data.total);
    if(data.total === 0) clearTimeout(timer);
  },1000);
}
