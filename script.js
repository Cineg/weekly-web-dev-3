let nav = document.getElementById('topnav');
window.onscroll = function(){
  if(pageYOffset>60){
    console.log(nav);
    nav.classList.add('nav-sticky');
  }

  if(pageYOffset < 60)
  nav.classList.remove('nav-sticky');
}

let navlist = document.getElementById('nav-list');
let burger = document.getElementById('hamburger');
burger.addEventListener('click', toggleBurger);


function toggleBurger(){
    burger.classList.toggle('hamburger-closed');
    burger.classList.toggle('hamburger-open');
    navlist.classList.toggle('nav-open');
}
