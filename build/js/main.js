'use strict';

window.main = (function () {
  var MIN_PHONE_LENGTH = 11;
  var MAX_PHONE_LENGTH = 11;

  var menu = document.querySelector('.page-header');
  var button = menu.querySelector('.page-header__toggle-close');
  var mainNav = menu.querySelector('.page-header__nav');
  var numbersFillSvg = document.querySelectorAll('.sprite-svg__path');
  var form = document.querySelector('.booking__form');
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
    item.classList.add('sprite-svg__logo-close');
  };

  var toChangeFill = function (item) {
    item.classList.toggle('sprite-svg__logo-close');

  };

  if (button) {
    button.classList.remove('page-header__toggle-close');
    button.classList.add('page-header__toggle-open');
  }

  if (mainNav) {
    mainNav.classList.add('page-header__nav--hidden');
  }

  if (menu) {
    menu.classList.add('page-header__close');
  }

  if (numbersFillSvg) {
    numbersFillSvg.forEach(addFill);
  }

  if (phoneForm) {
    toCheckTheLength(phoneForm, MIN_PHONE_LENGTH, MAX_PHONE_LENGTH);
  }

  button.addEventListener('click', function () {
    button.classList.toggle('page-header__toggle-close');
    button.classList.toggle('page-header__toggle-open');
    mainNav.classList.toggle('page-header__nav--hidden');
    menu.classList.toggle('page-header__close');
    numbersFillSvg.forEach(toChangeFill);
  });
})();
