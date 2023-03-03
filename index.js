// добавляем класс active на форму
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
