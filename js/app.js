"use strict";
// set up a VAR for each store  that details The minimum number of customers per hour, The maximum number of customers per hour, The average number of cookies purchased per customer.

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//grabs the table from html.
var table = document.getElementById("table1");
var masterBranch = {
  location: "Christ Church, Oistins",
  customersPHR: randomNum,
  salesPP: [],
  getSalesPP: function() {
      for (var i = 0; i < hours.length; i++ ) {

      }
  }
  
}

function renderHeader() {
//1.create a row
var row = document.createElement("tr");
table.appendChild(row);
var cell = document.createElement("th");
row.appendChild(cell);
cell.textContent = "location";
//2.rend to table
//3. create table headers
//4. name the headers
for(var times = 0; times < hours.length; times++) {
console.log(times);
var cell = document.createElement("th");
cell.textContent = hours[times];
row.appendChild(cell);

}
//5.push times to the cell
}
  renderHeader();



