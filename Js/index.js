const cardContainer = document.getElementById("new-cards")

function createCards(arraydata) {
  let cards = ''
  if (arraydata.length != 0) {
    for (const newEvent of arraydata) {
      cards += `<div class="card my=2 mx=2" style="width: 18rem;">
        <img src="${newEvent.image}"..." height="150">
        <div class="card-body">
          <h5 class="card-title text-center">${newEvent.name}</h5>
          <p class="card-text">${newEvent.description}</p>
          <div class="row">
            <p class="col text-center my-0">price:$${newEvent.price}</p>
            <a href="./details.html?id=${newEvent._id}" class="btn btn-secondary col">More Info</a>
          </div>
        </div>
      </div>
    `  }
    return cards
  }
  else return '<img src="./assets/noEncontrado.png" alt="" id="img-noencontrado1">'

}
let elementscard = createCards(data)
cardContainer.innerHTML = elementscard
// console.log(elementscard)


// checkbox
const boxCategories = document.getElementById("container-category")
const search = document.getElementById("my-Search")
let categoriesFilter = data.map((event => event.category))
// console.log("categorias filtradas", categoriesFilter);
let categoryOfEvent = categoriesFilter.reduce((category, event) => {
   if (!category.includes(event)) {
     category.push(event);
   }
   return category;
 }, []);
 console.log(categoryOfEvent);
     //search 
     let listener = ""
     search.addEventListener("input", (listen) => {
       listener = listen.target.value.toUpperCase();
       render();
     });

 //funciones 

 //funcion crear categorias(checkbox)
 function createCategory(arraydata) {
  let eventCategory = ''
    for (let cx of arraydata) {
      eventCategory += `<div class= "col-6 col-md-4 col-lg-2 col-xl-2">
               <label for="">
                 <input type="checkbox" name="${cx}" id="${cx}" 
                 value="${cx}" class="mx1">
                 <span>${cx}</span></label>
             </div>`
         }
         boxCategories.innerHTML = eventCategory;
        }
        createCategory(categoryOfEvent)

    let listCategoryChecked = []
    boxCategories.addEventListener("click", (event)=>{
      if (event.target.checked) {
        listCategoryChecked.push(event.target.value)        
      }
      else{
        listCategoryChecked =listCategoryChecked.filter((notcheck)=> notcheck !== event.target.value)
      }
      // console.log(listCategoryChecked);
      render()
    })

// funcion  rederizador (cruzado)
    function render(){
      let filterCheck = data.filter((cate)=> listCategoryChecked.includes(cate.category))
      // console.log(filterCheck);
      let filterSearch = data.filter((search)=> 
      search.category.toUpperCase().includes(listener)||
      search.name.toUpperCase().includes(listener)
      )
      // console.log(filterSearch);
      if (filterSearch.length > 0) {
        cardContainer.innerHTML = createCards(filterSearch)
        let controller = filterSearch.filter((filter)=>
        filter.category.includes(listCategoryChecked.toString()))
        cardContainer.innerHTML = createCards(controller)
      }
      else if (filterSearch.length == 0){
        cardContainer.innerHTML = '<img src="./assets/noEncontrado.png" alt="" id="img-noencontrado1">'
      }
      if (filterCheck.length > 0){
        cardContainer.innerHTML = createCards(filterCheck)
        let categoriesToRender = filterCheck.filter((filter)=> filter.name.toUpperCase().includes(listener.toString()))
        cardContainer.innerHTML = createCards(categoriesToRender)
      }
    }
render()



//filter y search en progreso (no anda al 100%)
// // Category
// let categoriesfilter = data.map((events) => events.category);
// // console.log("categorias filtradas", categoriesfilter);
// let categoryOfEvent = categoriesfilter.reduce((category, event) => {
//   if (!category.includes(event)) {
//     category.push(event);
//   }
//   return category;
// }, []);
// // console.log(categoryOfEvent);
// function createCategory(arraydata) {
//   let categories = ''
//   for (let cx of arraydata) {
//     categories += `<div class= "col-6 col-md-4 col-lg-2 col-xl-2">
//         <label for="">
//           <input type="checkbox" name="${cx}" id="${cx}" 
//           value:"${cx}" class="mx1">
//           <span>${cx}</span></label>
//       </div>`
//   }
//   return categories
// }

// let categoriesSeccion = createCategory(categoryOfEvent)
// const categoryContainer = document.getElementById("container-category")
// categoryContainer.innerHTML = categoriesSeccion

// // checkbox 
// let listCategories = document.querySelectorAll("label input[type='checkbox']");
// // console.log("estas en la lista de categorias",listCategories);
// listCategories.forEach(categoria => {
//   categoria.onclick = () => {
//     let boxOfEventsforcategories = "";
//     console.log("que paso aqui",boxOfEventsforcategories);
//     let catchecked = [];
//     for (cates of listCategories) {
//       if (cates.checked) {
//         catchecked.push(cates.value);
//       }
//     }
//     console.log(catchecked);
//     if (catchecked.length > 0) {  
//       data.filter(event => catchecked.includes(event.category)).forEach
//           ((event) => {
//            boxOfEventsforcategories += createCards(event);
//             cardContainer.innerHTML = boxOfEventsforcategories
//           });
//     } else {
//       cardContainer.innerHTML = elementscard
//     }
//   }
// });


// // Search
// const mySearch = document.getElementById("my-Search")
// mySearch.addEventListener("input", () => {
//   let arrayFilter = filterEvents(data, mySearch.value)

//   cardContainer.innerHTML = createCards(arrayFilter)

//   // console.log(createCards(arrayFilter));
// })

// function filterEvents(arraydata, dataFilter) {
//   let eventFilters = arraydata.filter((event) => event.name.toUpperCase().includes(dataFilter.toUpperCase()))
//   // console.log(eventFilters);
//   return eventFilters
// }
