const techoneEl = document.getElementById('tech-one');
const techtwoEl = document.getElementById('tech-two');
const techthreeEl = document.getElementById('tech-three');
const titleEl = document.getElementById('title');
const nameEl = document.getElementById('name');
const descriptionEl = document.getElementById('description');
const techImageEl = document.getElementById('techImage');


const navMenus = document.querySelectorAll('.menu');

navMenus.forEach(navMenu => {
navMenu.addEventListener('click', () =>{
  navMenu.classList.add('active')
})
navMenus.forEach(navMenu => {
  navMenu.addEventListener('click', () => 
  {
    navMenu.classList.remove('active')
  })
})
})
console.log(navMenus);


async function fetchData() {
  try {
    const response = await fetch("/starter-code/data.json");
    const data = await response.json();
    let technologyData = data.technology;
    console.log(technologyData);
    let tech1Data = technologyData[0];
    console.log(tech1Data);
    let tech2Data = technologyData[1];
    let tech3Data = technologyData[2];
      console.log(tech3Data);

      nameEl.textContent = tech1Data.name; 
        descriptionEl.textContent = tech1Data.description;
        techImageEl.src = tech1Data.images.portrait;

      techoneEl.addEventListener("click", () => {
        nameEl.textContent = tech1Data.name; 
        descriptionEl.textContent = tech1Data.description;
        techImageEl.src = tech1Data.images.portrait;
      })

      techtwoEl.addEventListener("click", () => {
        nameEl.textContent = tech2Data.name; 
        descriptionEl.textContent = tech2Data.description;
        techImageEl.src = tech2Data.images.portrait;
      })

      techthreeEl.addEventListener("click", () => {
        nameEl.textContent = tech3Data.name; 
        descriptionEl.textContent = tech3Data.description;
        techImageEl.src = tech3Data.images.portrait;
      })


    






    } catch (error) {
    console.error(error);
  }
}
fetchData();