// from data.js
const tableData = data;

// Get a reference to the table body
const tbody = d3.select("tbody");

function buildOrgtable()
{
    tbody.html("");
// Loop Through `data` and console.log each ufo sighting
data.forEach(function(ufoSightings) {
  //console.log(ufoSightings);
});

// Using d3 to append one table row `tr` for each ufo sighting
data.forEach(function(ufoSightings) {
  //console.log(ufoSightings);
  var row = tbody.append("tr");
});

//Using `Object.entries` to console.log each sighting
data.forEach(function(ufoSightings) {
//  console.log(ufoSightings);
 var row = tbody.append("tr");

  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
 });
});

data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
   });
}


// Event handler function for the form
function runEnter() {
    tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var dateInput = inputElement.property("value");

  console.log(dateInput); //logging date input
  //console.log(tableData); //logging return

  var filteredData = tableData.filter(tableData => tableData.datetime === dateInput);//filtering the table for only the date inputted

  console.log(filteredData);//logging the input date

  filteredData.forEach((filteredDatarow) => {
    var row1 = tbody.append("tr");
    Object.values(filteredDatarow).forEach((value) => {
      var cell = row1.append("td");
      cell.text(value);
    });
   });

}

var button = d3.selectAll("#filter-btn");

// Select the form
//var form = d3.select("#form");

// Creating event handlers 
button.on("click", runEnter);
//form.on("submit",runEnter);

buildOrgtable();