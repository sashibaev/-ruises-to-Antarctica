'use strict';

window.pageHeader = (function () {
  var menu = document.querySelector('.page-header');
  var button = menu.querySelector('.page-header__toggle-close');
  var mainNav = menu.querySelector('.page-header__nav');
  var numbersFillSvg = menu.querySelectorAll('.page-header__path');

  var addFill = function (item) {
    item.classList.add('page-header__logo-close');
  };

  var toChangeFill = function (item) {
    item.classList.toggle('page-header__logo-close');
  };

  button.classList.remove('page-header__toggle-close');
  button.classList.add('page-header__toggle-open');
  mainNav.classList.add('page-header__wrapper--hidden');
  menu.classList.add('page-header__close');
  numbersFillSvg.forEach(addFill);

  button.addEventListener('click', function () {
    button.classList.toggle('page-header__toggle-close');
    button.classList.toggle('page-header__toggle-open');
    mainNav.classList.toggle('page-header__wrapper--hidden');
    menu.classList.toggle('page-header__close');
    numbersFillSvg.forEach(toChangeFill);
  });
})();
