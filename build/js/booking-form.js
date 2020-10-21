'use strict';

window.bookingForm = (function () {
  var MIN_NAME_LENGTH = 3;
  var MAX_NAME_LENGTH = 12;
  var MIN_PHONE_LENGTH = 11;
  var MAX_PHONE_LENGTH = 11;

  var form = document.querySelector('.booking__form');
  var nameForm = form.querySelector('#name');
  var phoneForm = form.querySelector('#phone');
  var emailForm = form.querySelector('#email');

  var toCheckTheValidation = function (element) {
    element.addEventListener('invalid', function () {
      if (element.validity.valueMissing) {
        element.setCustomValidity('Обязательное поле для заполнения');
      } else {
        element.setCustomValidity('');
      }
    });
  };

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

  toCheckTheValidation(nameForm);
  toCheckTheValidation(phoneForm);
  toCheckTheValidation(emailForm);

  toCheckTheLength(nameForm, MIN_NAME_LENGTH, MAX_NAME_LENGTH);
  toCheckTheLength(phoneForm, MIN_PHONE_LENGTH, MAX_PHONE_LENGTH);
})();
