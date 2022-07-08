const main = document.querySelector('.main');


main.addEventListener('mouseover',mouseOver)

function mouseOver(element) {

  const newBox = document.createElement('div');
  newBox.innerText = "Bloco Vermelho";
  newBox.classList.add('tooltip')
  document.body.appendChild(newBox);


  mouseMove.newBox = newBox;

  mouseLeave.element = this;
  mouseLeave.newBox = newBox;

  this.addEventListener('mouseleave',mouseLeave);
  this.addEventListener('mousemove',mouseMove);

}
const mouseLeave = {
  
  handleEvent() {
      
    this.newBox.remove();
    this.element.removeEventListener('mouseleave',mouseLeave);
    this.element.removeEventListener('mousemove',mouseMove);

  }
}
const mouseMove = {

  handleEvent(element) {
    this.newBox.style.top = element.pageY +20+ 'px';
    this.newBox.style.left = element.pageX +20+'px';

  }
}