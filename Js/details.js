function createCategory(arraydata) {
  let categories = ''
  arraydata.forEach(eventcategory => {
      if (!categories.includes(eventcategory.category)) {
          categories += `<div class= "col-6 col-md-4 col-lg-2 col-xl-2">
          <label for="${eventcategory.category}">
            <input type="checkbox" name="${eventcategory.category}" id="${eventcategory.category}" value:"${eventcategory.category}" class="mx1">
            <span>${eventcategory.category}</span></label>
        </div>`
      }
  })
  return categories
}
let categoriesSeccion =  createCategory(data)
const categoryContainer = document.getElementById("container-category")
categoryContainer.innerHTML = categoriesSeccion


// console.log([document])
const queryString = location.search
// console.log(document.location.search)
const params = new URLSearchParams(queryString)
// console.log(params)
const id = params.get('id')
// console.log(params.get('id'))
// console.log(listEvents.events.find(card => card._id == id))
const cardDetail = data.find(card => card._id == id)
const cardCont = document.getElementById("cards-details")
// console.log(cardCont)

cardCont.innerHTML = `<div class="col-12 col-sm-6 col-md-4">
<img src="${cardDetail.image}" alt="${cardDetail.image}" width="250" height="150">
</div>
<div class="col-12 col-sm-6 col-md-8">
<h3>Name: ${cardDetail.name}</h3>
<p>date: ${cardDetail.date}</p>
<p>${cardDetail.description}</p>
<p>category: ${cardDetail.category}</p>
<p>capacity: ${cardDetail.capacity}</p>
<p>assistance for estimate: ${cardDetail.estimate}</p>
<p>price: ${cardDetail.price}</p>
<a href="./index.html" class="btn btn-secondary col">Encontrar mas eventos</a>
</div>
`
console.log([document])


 