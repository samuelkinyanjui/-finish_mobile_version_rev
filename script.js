/* Dcoments editted by samuel  */
function changeIcon(icon) {
  icon.classList.toggle('bi-x');
  const HeaderMenu = document.querySelector('.header-menu');
  HeaderMenu.classList.toggle('active');
  const mainHeader = document.querySelector('.main-header');
  mainHeader.classList.toggle('active');
  const iconX = document.querySelector('.bi-list');
  iconX.classList.toggle('active');
}
function chanageMenu() {
  const HeaderMenu = document.querySelector('.header-menu');
  /* used selector querySlector instaeda id getelemntbyid */
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
changeIcon();