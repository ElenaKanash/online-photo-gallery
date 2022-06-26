// создаем галлерею с карточками с фото
import { createCardPhoto } from "./createCardPhoto.js";
import { createElem } from "./createElem.js";
import { scrollLoad } from "./scrollLoad.js";

export const renderGallery = (wrapper, photos) => {
  //console.log('photos: ', photos);
  const gallery = createElem('ul', {
    className: 'grid'
  });

  const endElem = createElem('div') // последний элеиент в галлерее, после которого начнется бесконечная прокрутка фотокарточек

  wrapper.append(gallery);

  // инициализируем Masonry для вставки карточек в галлерею
  const grid = new Masonry ( gallery, {
    gutter: 10,
    itemSelector: '.card',
    columnWidth: 200,
    isFitWidth: true // по центру
  })

  const cards = photos.map(createCardPhoto) //проходим массив map и в каждый item передаем функцию создания карточки

  Promise.all(cards).then (cards => { // достаем данные из всех промисов
    gallery.append(...cards); // спред оператор извлекает из массива отдельные карточки и вставляет их в галлерею
    grid.appended(cards); // инициализируем слои Masonry
    wrapper.append(endElem);
    scrollLoad(gallery, grid, endElem)
    });

};