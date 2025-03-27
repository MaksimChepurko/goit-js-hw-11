import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { apiRequest } from './js/pixabay-api';
import { clearGallery, renderRequest } from './js/render-functions';
const userForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const elemLoader = document.querySelector('.loader');
function startLoader() {
  elemLoader.classList.add('active');
}
function stopLoader() {
  elemLoader.classList.remove('active');
}

const formReset = () => userForm.reset();

userForm.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  const userRequest = userForm
    .querySelector('[name="search-text"]')
    .value.trim();
  if (userRequest !== '') {
    startLoader();
    apiRequest(userRequest)
      .then(response => {
        renderRequest(response, gallery);
      })
      .catch(error => {
        iziToast.error({ message: error, position: 'center', timeout: 2000 });
      })
      .finally(() => {
        stopLoader();
        formReset();
      });
  } else {
    iziToast.warning({
      message: 'Field must not be empty!',
      position: 'center',
      timeout: 2000,
    });
    formReset();
    return;
  }
});