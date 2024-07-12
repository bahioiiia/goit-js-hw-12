
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

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    return;
  }
  showLoading();
  clearGallery();
  const perPage = 15;
  const currentPage = 1;
  try {
    const { images, totalImages } = await fetchImages(query, currentPage, perPage);
      console.log(images);
      console.log(totalImages);
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