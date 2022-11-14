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

const maxImageIndex = 10;
const latitude = 90;
const longitude = 180;
const maxPriceForRoom = 14000;
const maxNumberGuests = 8;
const maxNumberRooms = 14;
const minLatLocationValue = 35.65000;
const maxLatLocationValue = 35.70000;
const minLngLocationValue = 139.70000;
const maxLngLocationValue = 139.80000;

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
  if (i < maxImageIndex) {
    return `img/avatar/user0${i}.png`;
  } else {
    return `img/avatar/user${i}.png`;
  }
};

const getMapAddress = function () {
  return `lat: ${getRandomNumberDot(1, latitude, 3)}, lng:${getRandomNumberDot(1, longitude, 3)}`;
};

const generateArray = function () {
  const result = [];
  for (let i = 1; i <= maxImageIndex; i++) {
    const objectResult = {
      author: {
        avatar: getImageByIndex(i)
      },
      offer: {
        title: createPlaceTitle(description, place),
        address: getMapAddress(),
        price: getRandomNumber(1, maxPriceForRoom),
        type: getRandomArrayElement(type),
        rooms: getRandomNumber(1, maxNumberRooms),
        guests: getRandomNumber(1, maxNumberGuests),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: getFeatures(features),
        description: 'Апарт-отель Urban Serviced Apartments с рестораном и баром расположен в 1 км от Музейного квартала. Осуществляется доставка еды и напитков в апартаменты.',
        photo: getRandomLength(photos)
      },
      location: {
        lat: getRandomNumberDot(minLatLocationValue, maxLatLocationValue, 5),
        lng: getRandomNumberDot(minLngLocationValue, maxLngLocationValue, 5)
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

console.log(generateArray());
