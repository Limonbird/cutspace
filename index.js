// добавить класс active на форму
const introForm = document.querySelector('.intro-form');
const introFormInput = introForm.querySelector('.intro-form__input');
const introFormButton = introForm.querySelector('.intro-form__button');
const introElementList = [introFormInput, introFormButton];

introElementList.forEach((item) => {
  item.addEventListener('focus', () => {
    introForm.classList.add('intro-form--active');
  });
});

introElementList.forEach((item) => {
  item.addEventListener('blur', () => {
    introForm.classList.remove('intro-form--active');
  });
});
// end

/*
бургер-меню для мобайла
запрет скролла body при открытом меню
меню открывается при клике на кнопку, закрывается при клике на кнопку, клику по ссылке (это может быть якорь), резайзу окна
*/
const siteBody = document.querySelector('body');
const headerLinkList = document.querySelectorAll('.header__link');
const menuButton = document.querySelector('.header__toggler');

const closeMenu = () => {
  siteBody.classList.remove('body--menu-opened');
};

const addMenuClose = () => {
  headerLinkList.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
};

const removeMenuClose = () => {
  headerLinkList.forEach((item) => {
    item.removeEventListener('click', closeMenu);
  });
};

menuButton.addEventListener('click', () => {
  siteBody.classList.toggle('body--menu-opened') ? addMenuClose() : removeMenuClose();
});

const debounceForMenu = (callback, delay = 250) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.innerWidth >= 992) {
        callback();
      }
    }, delay);
  };
};

window.addEventListener('resize', debounceForMenu(closeMenu));
// end
