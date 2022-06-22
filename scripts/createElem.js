// создание элементов
export const createElem = (tags, attrs) => {
  const elem = document.createElement(tags);
  Object.assign(elem, attrs); // копируем свойства  элемента и свойства  аттрибутов в элемент

  return elem;
}


