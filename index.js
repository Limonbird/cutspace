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

// бургер-меню для мобайла: скрывается при клику по ссылке, резайзу до десктопа
const headerCheckbox = document.querySelector('.header__checkbox');
const headerLinkList = document.querySelectorAll('.header__link');
const siteBody = document.querySelector('body');

const closeMenu = () => {
  headerCheckbox.checked = false;
  const changeEvent = new Event('change');
  headerCheckbox.dispatchEvent(changeEvent);
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

headerCheckbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    siteBody.classList.add('body--menu-opened');
    addMenuClose();
  } else {
    siteBody.classList.remove('body--menu-opened');
    removeMenuClose();
  }
});

const debounceForMenu = (func, delay = 250) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.innerWidth >= 992 && headerCheckbox.checked) {
        func();
      }
    }, delay);
  };
};

window.addEventListener('resize', debounceForMenu(closeMenu));
// end
