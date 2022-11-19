const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const slider = adForm.querySelector('.ad-form__slider');

export const inactivPage = function() {
  adForm.classList.add('ad-form--disabled');
  adFormElement.forEach((element) => element.classList.add('disabled'));
  mapFilters.classList.add('ad-form--disabled');
  slider.classList.add('disabled');
};

const activePage = function() {
  adForm.classList.remove('ad-form--disabled');
  adFormElement.forEach((element) => element.classList.remove('disabled'));
  mapFilters.classList.remove('ad-form--disabled');
  slider.classList.remove('disabled');
};

inactivPage();
activePage();
