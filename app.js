const images = [
  "./images/london-bridge-street.jpg",
  "./images/paris-france.jpg",
  "./images/rhode-island-us.jpg",
  "./images/food-1.jpg",
  "./images/food-2.jpg",
  "./images/img.jpg",
  "./images/italy.jpg",
  "./images/restaurant-2.jpg",
  "./images/restaurant-1.jpg"
]

const image = document.querySelector('.image');

let i = 0;
setInterval(()=> {
  image.style.backgroundImage = `url( ${images[i]} )`;
  i++;
  if(i >= images.length) {
    i = 0;
  }
}, 1000);

