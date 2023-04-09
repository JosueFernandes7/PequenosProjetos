let painel = document.querySelectorAll('.painel');

painel.forEach(painel => {
  painel.addEventListener('click', () => {
    removerAtivo();
    painel.classList.toggle('ativo');
  })
})

function removerAtivo() {
  painel.forEach(painel => {
  painel.classList.remove('ativo');
    
  })
}