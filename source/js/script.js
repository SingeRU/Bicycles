'use strict';
var pageHeaderList = document.querySelector('.page-header__list');
var headerNavToggle = document.querySelector('.page-header__toggle');

pageHeaderList.classList.remove('page-header__list--nojs');
headerNavToggle.classList.remove('page-header__toggle--nojs');

headerNavToggle.addEventListener('click', function () {
  if(headerNavToggle.classList.contains('page-header__toggle--closed')) {
    headerNavToggle.classList.remove('page-header__toggle--closed');
  } else {
    headerNavToggle.classList.add('page-header__toggle--closed');
  }
  if (pageHeaderList.classList.contains('page-header__list--closed')) {
    pageHeaderList.classList.remove('page-header__list--closed');
    pageHeaderList.classList.add('page-header__list--opened');
  } else {
    pageHeaderList.classList.add('page-header__list--closed');
    pageHeaderList.classList.remove('page-header__list--opened');
  }});

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (pageHeaderList.classList.contains('page-header__list--opened')) {
      evt.preventDefault();
      pageHeaderList.classList.remove('page-header__list--opened');
    }
    if(headerNavToggle.classList.contains('page-header__toggle--closed')) {
      headerNavToggle.classList.remove('page-header__toggle--closed');
    } else {
      headerNavToggle.classList.add('page-header__toggle--closed');
    }
  }
});
