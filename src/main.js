
import {
  fetchImages
} from './js/pixabay-api';
import {
  clearGallery,
  displayImages,
  showLoading,
  hideLoading,
  notFoundMessage,
  endOfListMessage,
  errorMessage,
  showLoadMoreButton, 
  hideLoadMoreButton
} from './js/render-functions.js';

let query = "sert";
let currentPage = 1;
const perPage = 3;

document.getElementById('searchButton').addEventListener('click', async () => {
  currentPage = 1;
  query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    return;
  }
  showLoading();
  clearGallery();

  try {
    const { images, totalImages } = await fetchImages(query, currentPage, perPage);
    if (images.length === 0) {
      notFoundMessage();
    } else {
      displayImages(images);
      showLoadMoreButton()
    }

    if (currentPage * perPage >= totalImages) {
      hideLoadMoreButton();
      endOfListMessage();
    }

  } catch (error) {  
    errorMessage(error);
  } finally {
    hideLoading();
  }
});

document.getElementById('loadMoreButton').addEventListener('click', async () => {
  currentPage++;
  showLoading();

  try {
    const { images, totalImages } = await fetchImages(query, currentPage, perPage);
    if (images.length === 0) {
      showNoResultsMessage();
    } else {
      displayImages(images);

      if (currentPage * perPage >= totalImages) {
        hideLoadMoreButton();
        endOfListMessage();
      }
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    hideLoading();
  }
});