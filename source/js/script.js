'use strict';
var pageHeaderList = document.querySelector('.page-header__list');
var headerNavToggle = document.querySelector('.page-header__toggle');

pageHeaderList.classList.remove('page-header__list--nojs');
headerNavToggle.classList.remove('page-header__toggle--nojs');

headerNavToggle.addEventListener('click', function () {
  headerNavToggle.classList.toggle('page-header__toggle--closed');

  if (pageHeaderList.classList.contains('page-header__list--closed')) {
    pageHeaderList.classList.remove('page-header__list--closed');
    pageHeaderList.classList.add('page-header__list--opened');

  } else {
    pageHeaderList.classList.add('page-header__list--closed');
    pageHeaderList.classList.remove('page-header__list--opened');
    
  }
});
