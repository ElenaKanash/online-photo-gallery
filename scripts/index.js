import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";

const init = async ({selectorGalleryWrapper, selectorPhotoWrapper}) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoWrapper);

  if (galleryWrapper) {
    const photos = await getData('data.json'); //получаем данные из data.json
    renderGallery(galleryWrapper, photos); // создаем карточки с фото в галерее
  }

  if (photoWrapper) {
    const url = new URL(location.href);
  /*   console.log('url: ', url);
    console.log(url.searchParams.get('photo')); */

    const photo = await getData('photo.json');
    renderPhoto(photoWrapper, photo);

  }
};

init( {
  selectorGalleryWrapper: '.gallery__wrapper',
  selectorPhotoWrapper: '.photo__wrapper'
}
  );