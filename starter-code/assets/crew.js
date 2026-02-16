const crewoneEl = document.getElementById('crewOne');
const crewtwoEl = document.getElementById('crewTwo');
const crewthreeEl = document.getElementById('crewThree');
const crewfourEl = document.getElementById('crewFour');
const titleEl = document.getElementById('role');
const nameEl = document.getElementById('name');
const bioEl = document.getElementById('bio');
const crewImageEl = document.getElementById('crewImage');


async function fetchData() {
  try {
    const response = await fetch("/starter-code/data.json");
    const data = await response.json();
    let crewData = data.crew;
    console.log(crewData);

    let crew1Data = crewData[0];
    let crew2Data = crewData[1];
    let crew3Data = crewData[2];
    let crew4Data = crewData[3];
    console.log(crew4Data);

    
     titleEl.textContent = crew1Data.role;
        nameEl.textContent = crew1Data.name; 
        bioEl.textContent = crew1Data.bio;
        crewImageEl.src = crew1Data.images.png;
    
    crewoneEl.addEventListener("click", () => {
        titleEl.textContent = crew1Data.role;
        nameEl.textContent = crew1Data.name; 
        bioEl.textContent = crew1Data.bio;
        crewImageEl.src = crew1Data.images.png;
      })

      crewtwoEl.addEventListener("click", () => {
        titleEl.textContent = crew2Data.role;
        nameEl.textContent = crew2Data.name; 
        bioEl.textContent = crew2Data.bio;
        crewImageEl.src = crew2Data.images.png;
      })

      crewthreeEl.addEventListener("click", () => {
        titleEl.textContent = crew3Data.role;
        nameEl.textContent = crew3Data.name; 
        bioEl.textContent = crew3Data.bio;
        crewImageEl.src = crew3Data.images.png;
      })

      crewfourEl.addEventListener("click", () => {
        titleEl.textContent = crew4Data.role;
        nameEl.textContent = crew4Data.name; 
        bioEl.textContent = crew4Data.bio;
        crewImageEl.src = crew4Data.images.png;
      })









    } catch (error) {
    console.error(error);
  }
}
fetchData();
    
