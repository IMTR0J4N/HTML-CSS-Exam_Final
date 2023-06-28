import "../css/style.css";
import "../css/reset.css";

const cardList = document.getElementById("card-list");
const data = [
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "6",
  },
  {
    title_day: "mar",
    title_date: "21",
    icon: "smoke.png",
    temp_max: "8",
    temp_min: "1",
  },
  {
    title_day: "mer",
    title_date: "22",
    icon: "blizzard.png",
    temp_max: "6",
    temp_min: "-6",
  },
  {
    title_day: "jeu",
    title_date: "23",
    icon: "snow.png",
    temp_max: "4",
    temp_min: "-2",
  },
  {
    title_day: "ven",
    title_date: "24",
    icon: "sunny.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "sam",
    title_date: "25",
    icon: "thunder-storm.png",
    temp_max: "16",
    temp_min: "12",
  },
  {
    title_day: "dim",
    title_date: "26",
    icon: "fog.png",
    temp_max: "8",
    temp_min: "5",
  },
  {
    title_day: "lun",
    title_date: "27",
    icon: "wind.png",
    temp_max: "4",
    temp_min: "-3",
  },
];

const genNewCard = (day, date, icon, max, min) => {
    const newLi = document.createElement('li');
    newLi.classList.add('card');
    
    newLi.innerHTML = `
    <h3 class="card-title">${day}</h3>
    <strong class="card-date">${date}</strong>
    <img src="./assets/img/${icon}" alt="Illustration de la météo du jour indiqué" class="card-img">
    <span><strong class="card-max">${max}</strong> | <strong class="card-min">${min}</strong></span>
    `;
    
    cardList.appendChild(newLi)
}

for (const cardData of data) {
    genNewCard(cardData.title_day, cardData.title_date, cardData.icon, cardData.temp_max, cardData.temp_min)
}