
/*Dcoments editted by samuel and shows the use of document.getElementById() and quaryselector
const p = document.getElementById('message');    message is the id
console.log(p);
constant p=document.querySelector ('.mesage')   message is the class

let elements = document.getElementsByName(name);

 This java script is being called/invokded as the last itmes in the body so that all the dom elements are declared fiest before calling them*/
 function changeIcon(icon) {
  icon.classList.toggle('bi-x');

  const HeaderMenu = document.querySelector('.header-menu');
  HeaderMenu.classList.toggle('active');

  const mainHeader = document.querySelector('.main-header');
  mainHeader.classList.toggle('active');

  const iconX = document.querySelector('.bi-list');
  iconX.classList.toggle('active');
}

changeIcon();

function chanageMenu() {
  const HeaderMenu = document.querySelector('.header-menu');
  /* used selector querySlector instaeda id getelemntbyid*/
  /* wel commented   */
  const listIcon = document.querySelector('.bi-list');
  const mainHeader = document.querySelector('.main-header');
  const iconX = document.querySelector('.bi-list');

  HeaderMenu.classList.remove('active');
  listIcon.classList.remove('bi-x');
  mainHeader.classList.remove('active');
  iconX.classList.remove('active');
}
chanageMenu();
