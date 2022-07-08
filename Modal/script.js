const entrar = document.querySelector('[data-modal="entrar"]');
const container = document.querySelector('[data-modal="container"]');
const sair = document.querySelector('[data-modal="sair"]');
const enviar = document.querySelector('[data-modal="enviar"]');

entrar.addEventListener('click',toggleModal);
enviar.addEventListener('click',toggleModal);
sair.addEventListener('click',toggleModal);
container.addEventListener('click',removeModal);


function toggleModal() {
  container.classList.toggle('ativo');
}
function removeModal(element) {
  if(element.target == container) container.classList.remove('ativo');
  
}