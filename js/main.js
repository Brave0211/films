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

      newSpan.textContent = `id: ${cinema.id}`
      newTitle.textContent = `title: ${cinema.title}`
      newImg.src = `${cinema.poster}`;
      newImg.setAttribute("alt", "Template img");
      newImg.setAttribute("width", "100%");
      newImg.setAttribute("height", "200");
      newDesc.textContent = `overview: ${cinema.overview}`
      newDate.textContent = `release_date: ${cinema.release_date}`
      newGen.textContent = `genres: ${cinema.genres}`
      
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