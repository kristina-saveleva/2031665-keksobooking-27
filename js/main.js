const description = [
  'Лучшее',
  'Красивое',
  'Уютное',
  'Приятное',
  'Милое',
  'Удивительное',
  'Популярное',
  'Сказочное'
];

const place = [
  'место',
  'гнездышко',
  'предложение',
  'приключение',
  'пристанище',
  'жилье',
  'укрытие',
  'прибежище'
];

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkin = [
  '12:00',
  '13:00',
  '14:00'
];

const checkout = [
  '12:00',
  '13:00',
  '14:00'
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const MAX_IMAGE_INDEX = 10;
const LATITUDE = 90;
const LONGITUDE = 180;
const MAX_PRICE_FOR_ROOM = 14000;
const MAX_NUMBER_GUESTS = 8;
const MAX_NUMBER_ROOMS = 14;
const MIN_LAT_LOCATION_VALUE = 35.65000;
const MAX_LAT_LOCATION_VALUE = 35.70000;
const MIN_LNG_LOCATION_VALUE = 139.70000;
const MAX_LNG_LOCATION_VALUE = 139.80000;

function getRandom(min, max) {
  if (min >= max || min <= 0) {
    return NaN;
  } else {
    return Math.random() * (max - min + 1) + min;
  }
}

function getRandomNumber(min, max) {
  return Math.round(getRandom(min, max));
}

function getRandomNumberDot(min, max, dot) {
  return getRandom(min, max).toFixed(dot);
}

getRandom();
getRandomNumber();
getRandomNumberDot();

function getRandomArrayElement(elements) {
  const random = (getRandomNumber(1, elements.length - 1)) - 1;
  return elements[random];
}

const createPlaceTitle = function () {
  return `${getRandomArrayElement(description)} ${getRandomArrayElement(place)}`;
};

const getImageByIndex = function (i) {
  if (i < MAX_IMAGE_INDEX) {
    return `img/avatar/user0${i}.png`;
  } else {
    return `img/avatar/user${i}.png`;
  }
};

const getMapAddress = function () {
  return `lat: ${getRandomNumberDot(1, LATITUDE, 3)}, lng:${getRandomNumberDot(1, LONGITUDE, 3)}`;
};

const generateArray = function () {
  const result = [];
  for (let i = 1; i <= MAX_IMAGE_INDEX; i++) {
    const objectResult = {
      author: {
        avatar: getImageByIndex(i)
      },
      offer: {
        title: createPlaceTitle(description, place),
        address: getMapAddress(),
        price: getRandomNumber(1, MAX_PRICE_FOR_ROOM),
        type: getRandomArrayElement(type),
        rooms: getRandomNumber(1, MAX_NUMBER_ROOMS),
        guests: getRandomNumber(1, MAX_NUMBER_GUESTS),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: getFeatures(features),
        description: 'Апарт-отель Urban Serviced Apartments с рестораном и баром расположен в 1 км от Музейного квартала. Осуществляется доставка еды и напитков в апартаменты.',
        photo: getRandomLength(photos)
      },
      location: {
        lat: getRandomNumberDot(MIN_LAT_LOCATION_VALUE, MAX_LAT_LOCATION_VALUE, 5),
        lng: getRandomNumberDot(MIN_LNG_LOCATION_VALUE, MAX_LNG_LOCATION_VALUE, 5)
      }
    };
    result[i - 1] = objectResult;
  }
  return result;
};

function getRandomLength(arr) {
  return arr.slice(0, getRandomNumber(1, features.length));
}

function getFeatures(arr) {
  let newArray = [];
  for (let i = 0; i <= features.length; i++) {
    newArray = arr.sort(() => Math.random() - 0.5);
    newArray = getRandomLength(newArray);
  }
  return newArray;
}

generateArray();
