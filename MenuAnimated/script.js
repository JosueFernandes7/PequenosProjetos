  const sections = document.querySelectorAll('.section')
animatedScroll(sections,'ativo');

function animatedScroll(element,classe) {

  element[0].classList.add(classe);
  const alturaTela = +window.innerHeight * 0.6;

  window.addEventListener('scroll',showItem)

  function showItem() {

    element.forEach((item)=> {
      
      alturaElement = item.getBoundingClientRect().top;
      let visible = alturaElement <= alturaTela ;

      if(visible) {
        item.classList.add(classe);
      } else if(item.classList.contains(classe)) {
        item.classList.remove(classe);

      }
    })
  }
}


