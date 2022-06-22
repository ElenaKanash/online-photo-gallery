// создаем галлерею с карточками с фото
import { createCardPhoto } from "./createCardPhoto.js";

export const renderGallery = (photos) => {
  //console.log('photos: ', photos);
  const gallery = document.querySelector('.grid');
  const cards = photos.map(createCardPhoto) //проходим массив map и в каждый item передаем функцию создания карточки
  gallery.append(...cards) // спред оператор извлекает из массива отдельные карточки и вставляет их в галлерею
}