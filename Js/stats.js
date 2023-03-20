let arrayassistance = data.filter((event) => event.assistance)
let categorias = data.filter((event)=> event.category)
// console.log(categorias);
// console.log(arrayassistance);
let arrayestimate = data.filter((event) => event.estimate)
// console.log(arrayestimate);
let arraypercentage = []
// console.log(arraypercentage);
arrayassistance.forEach(event => {
   let assistancepercentage = {}
   assistancepercentage.id = event._id
   assistancepercentage.name = event.name
   assistancepercentage.price = event.price
   assistancepercentage.capacity = event.capacity
   assistancepercentage.percentage = (100 * event.assistance) / event.capacity
   arraypercentage.push(assistancepercentage)
});
// top 3 eventos con mayor porcentaje de asistencia / max percentage of attendance
let highestpercentageattendance = arraypercentage.sort((a, b) => (b.percentage) - (a.percentage));
let top3maxpercentage = highestpercentageattendance.slice(0, 3);
// console.log(top3maxpercentage);

// top 3 eventos con menor porcentaje de asistencia / min percentage of attendance
let lowpercentageattendance = arraypercentage.sort((a, b) => (a.percentage) - (b.percentage));
let top3minpercentage = lowpercentageattendance.slice(0, 3);
// console.log(top3minpercentage);
// top 3 eventos con mayor capacidad / max capacity
let Eventslargecapacity = arrayassistance.sort((a, b) => (b.capacity) - (a.capacity));
top3maxcapacity = Eventslargecapacity.slice(0, 3);
// console.log(top3maxcapacity)

const EventsEstatistics = document.getElementById("table-container1")
EventsEstatistics.innerHTML = `<tr>
<td>Events with the highest percentage of attendance</td>
<td>Events with the lowest percentage of attendance</td>
<td>Events with large capacity</td>
</tr>
<tr>
<td>${top3maxpercentage[0].name}: ${top3maxpercentage[0].percentage.toFixed(2)}%</td>
<td>${top3minpercentage[0].name}: ${top3minpercentage[0].percentage.toFixed(2)}%</td>
<td>${top3maxcapacity[0].name}: ${top3maxcapacity[0].capacity}</td>
</tr>
<tr>
<td>${top3maxpercentage[1].name}: ${top3maxpercentage[1].percentage.toFixed(2)}%</td>
<td>${top3minpercentage[1].name}: ${top3minpercentage[1].percentage.toFixed(2)}%</td>
<td>${top3maxcapacity[1].name}: ${top3maxcapacity[1].capacity}</td>
</tr>
<tr>
<td>${top3maxpercentage[2].name}: ${top3maxpercentage[2].percentage.toFixed(2)}%</td>
<td>${top3minpercentage[2].name}: ${top3minpercentage[2].percentage.toFixed(2)}%</td>
<td>${top3maxcapacity[2].name}: ${top3maxcapacity[2].capacity}</td>
</tr>
`
//categories past
let pastE = []
for (let i of arrayassistance) {
   if (!pastE.includes(i.category))
   pastE.push(i.category);
}
// console.log(pastE);
let pastESort = pastE.sort()
// console.log(pastESort);
//categories upcoming
let upE = []
for (let j of arrayestimate) {
   if (!upE.includes(j.category))
   upE.push(j.category);
}
let upESort = upE.sort()
// console.log(upE);


// table upcoming events

let tableBody = "";
upESort.forEach(category => {
   let filteredEvents = getEventByCategory(arrayestimate, category);
   let Revenues = getRevenues(filteredEvents);
   // console.log(filteredEvents);
   // console.log("Categoya: "+ categoria)
   // console.log("Revenues: $" + Revenues);
   let percentageAsist = getPercentage(filteredEvents);
   console.log("Percentage: " + percentageAsist + "%");
   tableBody +=  `<tr>
   <td>${category}</td>
   <td>${"$" + Revenues}</td>
   <td>${"Attendance: " + percentageAsist + "%"}</td>
</tr>`
});
// console.log(tableBodyHTML);
function getEventByCategory(events, category){
   let EventsbyCategory = [];
   for (let event of events){
      if(event.category == category){
         EventsbyCategory.push(event);
      }
   }
   return EventsbyCategory;
}

function getRevenues(filteredEvents){
   let Revenues = 0;
   filteredEvents.forEach(event =>{
      Revenues+=event.estimate*event.price;
   });
   return Revenues;
}

function getPercentage(filteredEvents){
   let percentage= ""
   let sumEstimate = 0
   let sumCapacity = 0
   filteredEvents.forEach( event => {
      sumEstimate += event.estimate
      sumCapacity += event.capacity
      percentage = ((sumEstimate *100) / sumCapacity).toFixed(2)
})
// console.log(percentage);
   return percentage;
   
}


let statsContainer = document.getElementById("containerStats")
statsContainer.innerHTML =  tableBody


// table 2 past events
let tableBodyPE = "";
pastESort.forEach(category => {
   let filteredEvents = getEventByCategory(arrayassistance, category);
   let Revenues = getRevenuesPE(filteredEvents);
   // console.log(filteredEvents);
   // console.log("Category: "+ category)
   // console.log("Ingresos: $" + ingresos);
   let percentageAsist = getPercentagePE(filteredEvents);
   // console.log("Percentage: " + percentageAsist + "%");
   tableBodyPE +=  `<tr>
   <td>${category}</td>
   <td>${"$" + Revenues}</td>
   <td>${"Attendance: " + percentageAsist + "%"}</td>
</tr>`
});

function getRevenuesPE(filteredEvents){
   let Revenues = 0;
   filteredEvents.forEach(event =>{
      Revenues+=event.assistance*event.price;
   });
   return Revenues;
}
function getPercentagePE(filteredEvents){
   let percentage= ""
   let sumassistance = 0
   let sumCapacity = 0
   filteredEvents.forEach( event => {
      sumassistance += event.assistance
      sumCapacity += event.capacity
      percentage = ((sumassistance *100) / sumCapacity).toFixed(2)
})
console.log(percentage);
   return percentage;
   
}
let statsContainerPE = document.getElementById("containerStatsPE")
statsContainerPE.innerHTML =  tableBodyPE












// //array of category past event
// let arrayBooks = arrayassistance.filter(event => event.category.includes("Books"))
// // console.log(arrayBooks);
// let arrayCinema = arrayassistance.filter(event => event.category.includes("Cinema"))
// let arrayConcert = arrayassistance.filter(event => event.category.includes("Concert"))
// let arrayFood = arrayassistance.filter(event => event.category.includes("Food"))
// let arrayMuseum = arrayassistance.filter(event => event.category.includes("Museum"))
// let arrayParty = arrayassistance.filter(event => event.category.includes("Party"))
// let arrayRace = arrayassistance.filter(event => event.category.includes("Race"))


// //array of category Upcoming event
// let arrayupBooks = arrayestimate.filter(event => event.category.includes("Books"))
// // console.log(arrayupBooks);
// let arrayupConcert = arrayestimate.filter(event => event.category.includes("Concert"))
// let arrayupFood = arrayestimate.filter(event => event.category.includes("Food"))
// let arrayupMuseum = arrayestimate.filter(event => event.category.includes("Museum"))
// let arrayupParty = arrayestimate.filter(event => event.category.includes("Party"))
// let arrayupRace = arrayestimate.filter(event => event.category.includes("Race"))

