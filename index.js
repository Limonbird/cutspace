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
меню открывается при клике на кнопку, закрывается при клике на кнопку, клику по ссылке (это может быть якорь)
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
// end

// развернуть | свернуть список ссылок в блоках в футере
const footerUnitAll = document.querySelectorAll('.footer-unit');
const footerUnitTitleAll = document.querySelectorAll('.footer-unit__title');
const footerUnitListAll = document.querySelectorAll('.footer-unit__list');

footerUnitTitleAll.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (window.innerWidth < 576) {
      footerUnitAll[index].classList.toggle('footer-unit--expanded');

      // развернуть список ссылок на его высоту (по умолчанию в css height: 0)
      const list = footerUnitListAll[index];
      if (!list.style.height || list.style.height === '0px') {
        list.style.height = list.scrollHeight + 'px';
      } else {
        list.style.height = '0px';
      }
    }
  });
});

const removeFooterStyles = () => {
  footerUnitListAll.forEach((item) => {
    item.style.removeProperty('height');
  });

  footerUnitTitleAll.forEach((item) => {
    item.classList.remove('footer-unit--expanded');
  });
};
// end

// обработка события resize
// при переходе в десктоп - закрыть бургер меню и убрать инлайн стили height для блоков ссылок в футере
const debounce = (callback, delay = 250) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
};

const handleResize = () => {
  if (window.innerWidth >= 992) {
    closeMenu();
  }

  if (window.innerWidth >= 576) {
    removeFooterStyles();
  }
};

window.addEventListener('resize', debounce(handleResize));
// end
