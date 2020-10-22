'use strict';

window.main = (function () {
  var MIN_NAME_LENGTH = 5;
  var MAX_NAME_LENGTH = 12;
  var MIN_PHONE_LENGTH = 11;
  var MAX_PHONE_LENGTH = 11;

  var menu = document.querySelector('.page-header');
  var button = menu.querySelector('.page-header__toggle-close');
  var mainNav = menu.querySelector('.page-header__nav');
  var numbersFillSvg = document.querySelectorAll('.page-header__path');
  var form = document.querySelector('.booking__form');
  var nameForm = form.querySelector('#name');
  var phoneForm = form.querySelector('#phone');

  var toCheckTheLength = function (element, minNumber, maxNumber) {
    element.addEventListener('input', function () {
      var valueLength = element.value.length;

      if (valueLength < minNumber) {
        element.setCustomValidity('Ещё ' + (minNumber - valueLength) + ' симв.');
      } else if (valueLength > maxNumber) {
        element.setCustomValidity('Удалите лишнии символы ' + (valueLength - maxNumber) + ' симв.');
      } else {
        element.setCustomValidity('');
      }
    });
  };

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

  toCheckTheLength(nameForm, MIN_NAME_LENGTH, MAX_NAME_LENGTH);
  toCheckTheLength(phoneForm, MIN_PHONE_LENGTH, MAX_PHONE_LENGTH);
})();
