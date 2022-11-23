import { openErrorMessage } from './auxiliaryMessages.js';

export const getData = (onSuccess) => {
    fetch('https://27.javascript.pages.academy/keksobooking/data')
        .then((response) => response.json())
        .then((cards) => {
            onSuccess(cards);
        });
};

export const sendData = (onSuccess, onFail, body) => {
    fetch(
        'https://27.javascript.pages.academy/keksobooking/data',
        {
            method: 'POST',
            body,
        },
    )
        .then((response) => {
            if (response.ok) {
                onSuccess();
            } else {
                onFail();
            }
        })
        .catch(() => {
            openErrorMessage();
        });
};