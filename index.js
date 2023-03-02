// добавляем класс active на форму
const introForm = document.querySelector('.intro-form');
const introFormInput = introForm.querySelector('.intro-form__input');

introFormInput.addEventListener('focus', () => {
  introForm.classList.add('intro-form--active');
})

introFormInput.addEventListener('blur', () => {
  introForm.classList.remove('intro-form--active');
})