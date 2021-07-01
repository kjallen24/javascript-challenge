// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

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

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");

  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
  });
});

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

//BONUS: Refactor to use Arrow Functions!
data.forEach((ufoSightings) => {
 var row = tbody.append("tr");
 Object.entries(ufoSightings).forEach(([key, value]) => {
   var cell = row.append("td");
   cell.text(value);
 });
});
