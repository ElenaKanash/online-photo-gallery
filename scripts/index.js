import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";

const init = async () => {
  const photos = await getData(); //получаем данные из data.json
  renderGallery(photos); // создаем карточки с фото в галерее

}
init();