function menuMobile() {
  const menu = document.getElementById('menu');
  const ul = document.querySelector('.menu-info');
  
    function activeMobile() {
      ul.classList.toggle('active');
      menu.classList.toggle('active');
      
    }
    
    menu.addEventListener('click',activeMobile)
  
  
}
menuMobile();