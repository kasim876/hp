const MENU_HIDDEN_CLASS = 'header-mobile-menu__nav--hidden';

const burgerNode = document.querySelector('.js-burger');
const menuNode = document.querySelector('.js-menu');
const blackoutHeaderNode = document.querySelector('.js-header-blackout');

function toggleMenu() {
  menuNode.classList.toggle(MENU_HIDDEN_CLASS);
}

burgerNode.addEventListener('click', toggleMenu);
blackoutHeaderNode.addEventListener('click', toggleMenu);
