import { createCardPhoto } from "./createCardPhoto.js";
import { getData } from "./getData.js";

// бесконечная прокрутка галлереи
export const scrollLoad = (gallery, grid, endElem) => {
  //отслеживаем endElem - последний добавленный элемент
  const observer = new IntersectionObserver (
    async (enrties) => {
      if (enrties[0].isIntersecting) {
       // console.log ('enrties: ', enrties);
       const photos = await getData(); //получаем данные из data.json
       const cards = photos.map(createCardPhoto) //проходим массив map и в каждый item передаем функцию создания карточки

       Promise.all(cards).then (cards => { // достаем данные из всех промисов
        gallery.append(...cards); // спред оператор извлекает из массива отдельные карточки и вставляет их в галлерею
        grid.appended(cards); // инициализируем слои Masonry
        });
      }
    },
    {
      rootMargin: '150px'
    }
  );

observer.observe(endElem);

}