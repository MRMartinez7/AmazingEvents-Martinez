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
  