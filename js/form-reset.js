import { resetPristine } from './form.js';
import { resetMarkPosition, closePopup } from './map.js';
import { createMarker } from './map.js';
import { resetSlider } from './slider.js';

const buttonReset = document.querySelector('.ad-form__reset');
const adForm = document.querySelector('.ad-form');

export const resetFormForAllElements = function(){
  adForm.reset();
  resetPristine();
  resetMarkPosition();
  closePopup();
  createMarker();
  resetSlider();
};

buttonReset.addEventListener('click', () => {
  resetFormForAllElements();
});
