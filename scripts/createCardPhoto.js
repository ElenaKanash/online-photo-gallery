import { createElem } from "./createElem.js";

// функция для создания картинок, которые будут загружаться в Masonry с заданными параметрами
const loadImg = (url, description) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.width = 200;
    img.src = url;
    img.alt = description;
    img.addEventListener('load', () => { // получаем картинку после ее полной загрузки
      resolve(img) // ответ в виде промисса передается в вызов функции(40 стр.)
    });
    img.addEventListener('load', (err) => {
      reject(new Error(err))
    });

  });
}
// создаем карточки с фото
export const createCardPhoto = async (data) => { // делаем ассинхронный вызов функции, которая возращает промисс (card) и извлекаем мх него данные в renderGallery.js

  /* const card = document.createElement('li');
  card.className = 'card'; */
  const card = createElem('li', {
    className: 'card',
  });

  const cardItem = createElem('a', {
    className: 'grid-item',
    id: data.id,
    href: `page.html?photo=${data.id}`,
  });

  /* переделаем в функцию loadImg
  const photo = new Image();
  photo.width = '200';
  photo.src = data.urls.small;
  photo.alt = data.alt_description; */

  const photo = await loadImg(data.urls.small, data.alt_description); // делаем ассинхронный вызов функции

  const author = createElem('a', {
    className: 'card__author',
    href: data.links.html,
  });

  const avatarAuthor = new Image();
  avatarAuthor.className = 'author__photo';
  avatarAuthor.src = data.user.profile_image.medium;
  avatarAuthor.width = '32';
  avatarAuthor.height = '32';
  avatarAuthor.alt = data.user.bio;
  avatarAuthor.title = data.user.username;

  author.append(avatarAuthor);

  const btnLike = createElem('button', {
    className: 'card__photo-like',
    textContent: data.likes,
  });


  const downloadLink = createElem('a', {
    className: 'card__download',
    href: 'data.links.download',
    download: 'true',
    target: '_blank',
  });

  cardItem.append(photo, author, btnLike, downloadLink);
  card.append(cardItem);

  return card
}