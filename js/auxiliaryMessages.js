import { isEscapeKey } from './util.js'

const body = document.querySelector('body');
const sucsessMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const closeAuxiliaryMessage = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeSuccessMessage();
        closeErrorMessage();
    }
};

const sucsessMessage = sucsessMessageTemplate.cloneNode(true);
sucsessMessage.classList.add('hidden');
body.appendChild(sucsessMessage);

const errorMessage = errorMessageTemplate.cloneNode(true);
errorMessage.classList.add('hidden');
body.appendChild(errorMessage);

export const openSuccessMessage = () => {
    sucsessMessage.classList.remove('hidden');
    document.addEventListener('keydown', closeAuxiliaryMessage);
};

export const openErrorMessage = () => {
    errorMessage.classList.remove('hidden');
    document.addEventListener('keydown', closeAuxiliaryMessage);
};

export const closeSuccessMessage = () => {
    sucsessMessage.classList.add('hidden');
    document.addEventListener('keydown', closeAuxiliaryMessage);
};

const closeErrorMessage = () => {
    errorMessage.classList.add('hidden');
    document.addEventListener('keydown', closeAuxiliaryMessage);
};

sucsessMessage.addEventListener('click', () => {
    closeSuccessMessage();
});

errorMessage.addEventListener('click', () => {
    closeErrorMessage();
});