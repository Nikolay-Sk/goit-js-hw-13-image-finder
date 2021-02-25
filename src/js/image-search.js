import apiService from './services/apiService.js';
import refs from './refs.js';
import imageGrid from '../templates/imageGrid.hbs';

function searchForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.query;
  apiService.page;
  clearList();
  apiService.resetPage();
  apiService.serchQuery = input.value;
  fetchImages();
  input.value = '';
}

function fetchImages() {
  apiService
    .fetchImages()
    .then(images => {
      insertList(images);
    })
    .catch(error => console.warn(error));
}

function insertList(images) {
  const markup = imageGrid(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearList() {
  refs.gallery.innerHTML = '';
}

function btnHandler() {
  if (apiService.page > 1) {
    apiService.fetchImages().then(images => {
      insertList(images);
      window.scrollTo({
        top: 100000,
        behavior: 'smooth',
      });
    });
  }
}

refs.searchForm.addEventListener('submit', searchForm);
refs.button.addEventListener('click', btnHandler);
