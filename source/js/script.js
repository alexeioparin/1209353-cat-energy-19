  var pageHeaderTop = document.querySelector(".page-header__top");
  var pageHeaderButton = document.querySelector(".page-header__menu-button");
  var pageNav = document.querySelector(".page-nav");

  pageHeaderTop.classList.remove("page-header__top--nojs");
  pageHeaderButton.classList.remove("page-header__menu-button--nojs");
  pageNav.classList.remove("page-nav--nojs");
  pageHeaderButton.addEventListener("click", function() {
    if (pageHeaderButton.classList.contains("page-header__menu-button--closed")) {
      pageHeaderButton.classList.remove("page-header__menu-button--closed");
      pageHeaderButton.classList.add("page-header__menu-button--opened");
      pageNav.classList.add("page-nav--nojs");
    }
    else {
      pageHeaderButton.classList.remove("page-header__menu-button--opened");
      pageHeaderButton.classList.add("page-header__menu-button--closed");
      pageNav.classList.remove("page-nav--nojs");
    }
  });
