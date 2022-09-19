'use strict'

// Отключение перехода по неактивным ссылкам
const buttonsLink = document.querySelectorAll('a');

buttonsLink.forEach((button) => {
  if (button.classList.contains('button--disabled')) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
  }
})

// Пагинация


// Доделать закрывание с кнопки и по области
const sort = document.querySelector('.sort');
const sortSelectButton = sort.querySelector('.sort__select');
const sortList = sort.querySelector('.sort__list');
const sortLinks = sortList.querySelectorAll('.sort__link');

// сортировка
sortSelectButton.addEventListener('click', () => {
  sortList.classList.toggle('sort__list--open');
  sortSelectButton.classList.toggle('sort__select--open');
});

sortList.addEventListener('click', (evt) => {
  evt.preventDefault();
  const sortSelectType = evt.target;

  sortLinks.forEach((link) => {
    link.classList.remove('sort__link--current');
  });

  sortSelectType.classList.add('sort__link--current');
  sortList.classList.remove('show-sort-list');
  sortSelectButton.classList.remove('show-sort-list');
  sortSelectButton.textContent = sortSelectType.textContent;
});


// бургер
const mainSiteList = document.querySelector('.site-list');
const navToggle = document.querySelector('.main-nav__toggle-menu');

mainSiteList.classList.remove('site-list--nojs');
navToggle.classList.remove('main-nav__toggle-menu--nojs');

if (!mainSiteList.classList.contains('site-list--closed')) {
  mainSiteList.classList.add('site-list--closed');
}

navToggle.addEventListener('click', () => {
  mainSiteList.classList.toggle('site-list--closed');
  navToggle.classList.toggle('main-nav__toggle-menu--opened');
  navToggle.classList.toggle('main-nav__toggle-menu--closed');
});


// слайдер
const mainSlider = document.querySelector('.main-slider__wrapper');
mainSlider.classList.remove('main-slider__wrapper--nojs');

const swiper = new Swiper('.main-slider__container', {
  navigation: {
    nextEl: '.main-slider__button-next',
    prevEl: '.main-slider__button-prev',
  },

  breakpoints: {
    1380: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },
    },
  }
});

// Карта
const map = L.map('map');

map.setView({
  lat: 59.968322,
  lng: 30.317359,
}, 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/map/map_pin.svg',
  iconSize: [38, 50],
  iconAnchor: [0, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968322,
    lng: 30.317359,
  },
  {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

// window.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();

//     if (popup.classList.contains('modal--show')) {
//       popup.classList.remove('modal--show');
//       popup.classList.remove('modal--error');
//     }
//   }
// });
