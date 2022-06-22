import { createElem } from "./createElem.js";

// создаем карточки с фото
export const createCardPhoto = (data) => {

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

  const photo = new Image();
  photo.width = '200';
  photo.src = data.urls.small;
  photo.alt = data.alt_description;

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