import { generateArray } from './data.js';

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var elementsArray = generateArray();
export var createCards = function () {
  var cards = [];
  for (var i = 0; i < elementsArray.length; i++) {
    cards[i] = createCard(elementsArray[i]);
  }
  return cards
}

var createCard = function (product) {
  var listItem = makeElement('article', 'popup');
  var title = makeElement('h3', 'popup__title', product.offer.title);
  listItem.appendChild(title);
  var address = makeElement('p', 'popup__text--address', product.offer.address);
  listItem.appendChild(address);
  var price = makeElement('p', 'popup__text--price', product.offer.price + ' ₽/ночь');
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
  var type = makeElement('h4', 'popup__type', whichType());
  listItem.appendChild(type);
  var sizeRoom = makeElement('p', 'popup__text--capacity', product.offer.rooms + ' комнаты для ' + product.offer.guests + ' гостей');
  listItem.appendChild(sizeRoom);
  var checkTime = makeElement('p', 'popup__text--time', 'Заезд после ' + product.offer.checkin + ', выезд до ' + product.offer.checkout);
  listItem.appendChild(checkTime);
  var features = makeElement('ul', 'popup__features');
  listItem.appendChild(features);
  var featureArray = product.offer.features;
  for (var i = 0; i < featureArray.length; i++) {
    var featuresItem = makeElement('li', 'popup__feature', featureArray[i]);
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
  var description = makeElement('p', 'popup__description', product.offer.description);
  listItem.appendChild(description);
  var photoList = makeElement('div', 'popup__photos');
  listItem.appendChild(photoList);
  let photoArray = product.offer.photo;
  for (var i = 0; i < photoArray.length; i++) {
    var photos = makeElement('img', 'popup__photos', photoArray[i]);
    photoList.appendChild(photos);
  }
  var picture = makeElement('img', 'popup__avatar');
  picture.src = product.author.avatar;
  picture.alt = 'Фото жилья';
  listItem.appendChild(picture);
  return listItem;
};
let firstCard = createCards();
var getCard = function () {
  firstCard;
  for (var i = 0; i < firstCard.length; i++) {
    firstCard = firstCard[i]
  }
  return firstCard
}
firstCard = getCard();
var templateProfile = document.querySelector('#card').content;
var article = templateProfile.querySelector('.popup');
var task = article.cloneNode(true);
task = firstCard;
var containerMessages = document.querySelector('.map__canvas');
containerMessages.appendChild(task);
