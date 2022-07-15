const menuDrop = document.querySelector('[data-menu]');


menuDrop.addEventListener('click',addMenu);
function addMenu() {
  menuDrop.classList.add('active');
  cliqueFora(menuDrop)
}

function cliqueFora(element) {
    html = document.documentElement;
    if(!element.hasAttribute('outside')) {
     setTimeout(() => html.addEventListener('click',verificaClique)) ;
    }
    element.setAttribute('outside','')
    function verificaClique(e) {
      if(!element.contains(e.target)){
        console.log(element.contains(e.target))
        element.classList.remove('active');
        element.removeAttribute('outside');
        html.removeEventListener('click',verificaClique);
      }
  }
  }
  