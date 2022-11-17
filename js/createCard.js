import { generateArray } from './data.js';

let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

let elementsArray = generateArray();
export let createCards = function () {
  let cards = [];
  for (let i = 0; i < elementsArray.length; i++) {
    cards[i] = createCard(elementsArray[i]);
  }
  return cards
}

let createCard = function (product) {
  let listItem = makeElement('article', 'popup');
  let title = makeElement('h3', 'popup__title', product.offer.title);
  listItem.appendChild(title);
  let address = makeElement('p', 'popup__text--address', product.offer.address);
  listItem.appendChild(address);
  let price = makeElement('p', 'popup__text--price', product.offer.price + ' ₽/ночь');
  listItem.appendChild(price);
  function whichType() {
    let typeOfHouse = product.offer.type;
    if (typeOfHouse === 'flat') {
      return 'Квартира'
    } else if (typeOfHouse === 'bungalow') {
      return 'Бунгало'
    } else if (typeOfHouse === 'house') {
      return 'Дом'
    } else if (typeOfHouse === 'palace') {
      return 'Дворец'
    } else if (typeOfHouse === 'hotelra') {
      return 'Отель'
    }
  }
  let type = makeElement('h4', 'popup__type', whichType());
  listItem.appendChild(type);
  let sizeRoom = makeElement('p', 'popup__text--capacity', product.offer.rooms + ' комнаты для ' + product.offer.guests + ' гостей');
  listItem.appendChild(sizeRoom);
  let checkTime = makeElement('p', 'popup__text--time', 'Заезд после ' + product.offer.checkin + ', выезд до ' + product.offer.checkout);
  listItem.appendChild(checkTime);
  let features = makeElement('ul', 'popup__features');
  listItem.appendChild(features);
  let featureArray = product.offer.features;
  for (let i = 0; i < featureArray.length; i++) {
    let featuresItem = makeElement('li', 'popup__feature', featureArray[i]);
    let featuresItemOne = featureArray[i];
    if (featuresItemOne === 'wifi') {
      featuresItem.classList.add('popup__feature--wifi')
    } else if (featuresItemOne === 'dishwasher') {
      featuresItem.classList.add('popup__feature--dishwasher')
    } else if (featuresItemOne === 'parking') {
      featuresItem.classList.add('popup__feature--parking')
    } else if (featuresItemOne === 'washer') {
      featuresItem.classList.add('popup__feature--washer')
    } else if (featuresItemOne === 'elevator') {
      featuresItem.classList.add('popup__feature--elevator')
    } else if (featuresItemOne === 'conditioner') {
      featuresItem.classList.add('popup__feature--conditioner')
    }
    features.appendChild(featuresItem);
  }
  let description = makeElement('p', 'popup__description', product.offer.description);
  listItem.appendChild(description);
  let photoList = makeElement('div', 'popup__photos');
  listItem.appendChild(photoList);
  let photoArray = product.offer.photo;
  for (let i = 0; i < photoArray.length; i++) {
    let photos = makeElement('img', 'popup__photos', photoArray[i]);
    photoList.appendChild(photos);
  }
  let picture = makeElement('img', 'popup__avatar');
  picture.src = product.author.avatar;
  picture.alt = 'Фото жилья';
  listItem.appendChild(picture);
  return listItem;
};
let firstCard = createCards();
let getCard = function () {
  firstCard;
  for (let i = 0; i < firstCard.length; i++) {
    firstCard = firstCard[i]
  }
  return firstCard
}
firstCard = getCard();
let templateProfile = document.querySelector('#card').content;
let article = templateProfile.querySelector('.popup');
let task = article.cloneNode(true);
task = firstCard;
let containerMessages = document.querySelector('.map__canvas');
containerMessages.appendChild(task);
