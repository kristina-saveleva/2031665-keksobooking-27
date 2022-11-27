import { getData } from './api.js';
import { activePage } from './form.js';
import { createCard } from './create-card.js';
import { tenCardElements, getFilteredData } from './filter.js';
import { openErrorMessage } from './auxiliary-messages.js';
const fetchURLData = 'https://27.javascript.pages.academy/keksobooking/data';
const COUNTRY_CENTER_LAT = 35.6761919;
const COUNTRY_CENTER_LNG = 139.6503106;
const ZOOM_OF_MAP = 10;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_SETTINGS = [26, 52];
const ICON_SIZE = [40, 40];
const ICON_ANCHOR = [20, 40];
const addressElement = document.querySelector('#address');

export const map = L.map('map-canvas')
  .on('load', () => {
    getData(getFilteredData, openErrorMessage, fetchURLData);
  })
  .setView({
    lat: COUNTRY_CENTER_LAT,
    lng: COUNTRY_CENTER_LNG,
  }, ZOOM_OF_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_SETTINGS,
});

const mainPinMarker = L.marker(
  {
    lat: COUNTRY_CENTER_LAT,
    lng: COUNTRY_CENTER_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const mainMarkerСoordinates = evt.target.getLatLng();
  addressElement.value = `${(mainMarkerСoordinates.lat).toFixed(5)}, ${(mainMarkerСoordinates.lng).toFixed(5)}`;
});

export const resetMarkPosition = function () {
  mainPinMarker.setLatLng({
    lat: COUNTRY_CENTER_LAT,
    lng: COUNTRY_CENTER_LNG,
  });
  map.setView({
    lat: COUNTRY_CENTER_LAT,
    lng: COUNTRY_CENTER_LNG,
  }, ZOOM_OF_MAP);
};

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const markerGroup = L.layerGroup().addTo(map);

export const deleteMarkerGroupLayer = () => {
  markerGroup.clearLayers();
};

export const createMarker = (cards = tenCardElements) => {
  deleteMarkerGroupLayer();
  for (let i = 0; i < cards.length; i++) {
    const { lat, lng } = cards[i].location;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      }
    );
    marker
      .addTo(markerGroup)
      .bindPopup(createCard(cards[i]));
  }
  activePage();
};

export const closePopup = () => {
  map.closePopup();
};
