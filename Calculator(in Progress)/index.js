const operacoes = document.querySelectorAll('.operacoes span');
const mostrar = document.querySelector('.show');
operacoes.forEach(item => {
  item.addEventListener('click',changeResult);
})

const clear = document.querySelector('.clear')
function changeResult(e) {
  const target = e.target.innerText;
  if(!isNaN(+target) || target == '+' || target == '-' || target == '*' || target == '÷') {
    if(mostrar.innerText == 0) {
    mostrar.innerText = target;
    } else {
    mostrar.innerHTML += target;
    }
  }


  if(e.target === clear) {
    mostrar.innerHTML = 0;
  }
  if(e.target === resultado) {
    const mostra = mostrar.innerText.split('*').join('');
    console.log(mostra)
  }
}
const resultado = document.querySelector('.resultado')
