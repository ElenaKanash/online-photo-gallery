// получаем данные из файла data.json
export const getData = () => {
  return fetch ('data.json') //получаем промисс
    .then((data)=>{
      return data.json()  //получаем промисс с результатом - массив данных
    })
}