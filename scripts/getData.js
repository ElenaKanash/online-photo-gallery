// получаем данные из файла data.json
export const getData = (url) => {
  //return fetch ('photo.json')
  return fetch (url) //получаем промисс
    .then((data)=>{
      return data.json()  //получаем промисс с результатом - массив данных
    })
}