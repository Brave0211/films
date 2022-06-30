const elList = document.querySelector('.js-list');

function domgaChiqarator(array, node) {
   for(cinema of array) {
      let newItem = document.createElement('li')
      newItem.setAttribute("class", "item");
      let newSpan = document.createElement('span')
      let newTitle = document.createElement('h3')
      let newImg = document.createElement('img')
      newImg.setAttribute("class", "img");
      let newDesc = document.createElement('p')
      let newDate = document.createElement('span')
      let newGen = document.createElement('p')

      newSpan.textContent = `ID: ${cinema.id}`
      newTitle.textContent = `TITLE: ${cinema.title}`
      newImg.src = `${cinema.poster}`;
      newImg.setAttribute("alt", "Template img");
      newImg.setAttribute("width", "100%");
      newImg.setAttribute("height", "300");
      newDesc.textContent = `OVERVIEW: ${cinema.overview}`
      newDate.textContent = `RELEASE_DATE: ${cinema.release_date}`
      newGen.textContent = `GENRES: ${cinema.genres}`
      
      newItem.appendChild(newSpan)
      newItem.appendChild(newTitle)
      newItem.appendChild(newImg)
      newItem.appendChild(newDesc)
      newItem.appendChild(newDate)
      newItem.appendChild(newGen)
      node.appendChild(newItem)
   }
}

domgaChiqarator(films, elList)

const elSel = document.querySelector(".js-select");
let result = [];

elSel.addEventListener("change", function () {
  elList.innerHTML = "";
  result = [];
  selVal = elSel.value;
  films.forEach((film) => {
    if (film.genres.includes(selVal)) {
      result.push(film);
    }
  });
  
  domgaChiqarator(result, elList);
});

const optionsList = new Set();

const optionList = [];

films.forEach((element) => {
	element.genres.forEach((el) => optionsList.add(el));
})  
	
optionsList.forEach((genres) => {
	let newOption = document.createElement('option');
	newOption.textContent = genres;
	newOption.value = genres;
	elSel.appendChild(newOption);
})