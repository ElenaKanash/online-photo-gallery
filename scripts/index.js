import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";

const init = async (selectorWrapper) => {
  const wrapper = document.querySelector(selectorWrapper); // передаем не .gallery__wrapper, а переменную, чтобы функцию можно было использовать в др. проекте
  const photos = await getData(); //получаем данные из data.json
  renderGallery(wrapper, photos); // создаем карточки с фото в галерее

}
init('.gallery__wrapper');