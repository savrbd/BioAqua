export const category = [
    { "_id": "67rdca3eeb7f6fgeed471818", "name": "Уход за кожей лица" },
    { "_id": "67rdca3eeb7f6fgeed471819", "name": "Очищение/Маски" },
    { "_id": "67rdca3eeb7f6fgeed471820", "name": "Уход за телом" },
    { "_id": "67rdca3eeb7f6fgeed471821", "name": "Для волос" }
  ];
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(category);
    }, 1000);
  });
const prt = { fetchAll }

export default prt;
