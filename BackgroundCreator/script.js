const cores = document.getElementById('rgb')
cores.addEventListener('change',changeBG)

function atualizaCor() {
  let cor = {
    red: cores.red.value,
    green: cores.green.value,
    blue: cores.blue.value
  }
  return cor
}

function changeBG() {

  let cor = atualizaCor();
  document.querySelector('#red').style.backgroundColor = `rgb(${cor['red']},0,0)`;
  document.querySelector('#green').style.backgroundColor = `rgb(0,${cor['green']},0)`;
  document.querySelector('#blue').style.backgroundColor = `rgb(0,0,${cor['blue']})`;
}

const button = document.getElementById('btn');

button.addEventListener('click',() => {
  cor = atualizaCor();
  document.body.style.backgroundColor = `rgb(${cor['red']},${cor['green']},${cor['blue']})`
})

