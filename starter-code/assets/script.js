const moonEl = document.getElementById("moon");
const marsEl = document.getElementById("mars");
const europaEl = document.getElementById("europa");
const titanEl = document.getElementById("titan");
const planetImageEl = document.getElementById("planetImage");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const distanceEl = document.getElementById("distance");
const timeEl = document.getElementById("time");


const navMenus = document.querySelectorAll('.menu');
navMenus.forEach(navMenu => {
navMenu.addEventListener('click', () =>{
  navMenus.forEach(navMenu => {
  navMenu.classList.remove('active')
});
navMenu.classList.add  ('active')
})
})
console.log(navMenus);


async function fetchData() {
  try {
    const response = await fetch("/starter-code/data.json");
    const data = await response.json();
    let destinationData = data.destinations;
    let moonData = destinationData[0];
    console.log(moonData);

    let marsData = destinationData[1];
    // console.log(marsData);

    let europaData = destinationData[2];
    // console.log(europaData);

    let titanData = destinationData[3];

    planetImageEl.src = moonData.images.webp;
    titleEl.textContent = moonData.name;
    descEl.textContent = moonData.description;
    distanceEl.textContent = moonData.distance;
    timeEl.textContent = moonData.travel;

    moonEl.addEventListener("click", () => {
      planetImageEl.src = moonData.images.png;
      titleEl.textContent = moonData.name;
      descEl.textContent = moonData.description;
      distanceEl.textContent = moonData.distance;
      timeEl.textContent = moonData.travel;
    });

     marsEl.addEventListener("click", () => {
      planetImageEl.src = marsData.images.png;
      titleEl.textContent = marsData.name;
      descEl.textContent = marsData.description;
      distanceEl.textContent = marsData.distance;
      timeEl.textContent = marsData.travel;
    });

     europaEl.addEventListener("click", () => {
      planetImageEl.src = europaData.images.png;
      titleEl.textContent = europaData.name;
      descEl.textContent = europaData.description;
      distanceEl.textContent = europaData.distance;
      timeEl.textContent = europaData.travel;
    });

     titanEl.addEventListener("click", () => {
      planetImageEl.src = titanData.images.png;
      titleEl.textContent = titanData.name;
      descEl.textContent = titanData.description;
      distanceEl.textContent = titanData.distance;
      timeEl.textContent = titanData.travel;
    });

  } catch (error) {
    console.error(error);
  }
}

fetchData();
