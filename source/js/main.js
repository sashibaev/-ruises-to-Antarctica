'use strict';

window.main = (function () {
  var menu = document.querySelector('.page-header');
  var button = menu.querySelector('.page-header__toggle-close');
  var mainNav = menu.querySelector('.page-header__nav');
  var logoCloseMenu = document.querySelector('.page-header__logo-svg');
  var logoOpenMenu = document.querySelector('.page-header__logo-menu');

  if (button) {
    button.classList.add('page-header__toggle-open');
  }

  if (mainNav) {
    mainNav.classList.add('page-header__nav--hidden');
  }

  if (menu) {
    menu.classList.add('page-header__close');
  }

  if (logoCloseMenu) {
    logoCloseMenu.classList.add('page-header__logo-svg-open');
  }

  if (logoOpenMenu) {
    logoOpenMenu.classList.add('page-header__logo-menu-close');
  }

  button.addEventListener('click', function () {
    button.classList.toggle('page-header__toggle-open');
    mainNav.classList.toggle('page-header__nav--hidden');
    menu.classList.toggle('page-header__close');
    logoCloseMenu.classList.toggle('page-header__logo-svg-open');
    logoOpenMenu.classList.toggle('page-header__logo-menu-close');
  });
})();
