"use strict";

//store all the hours inside an array to be used later.
var form = document.getElementById("form1");
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];

//create a constructor function to store all the data for each store
function Store(min, max, avg, location) {
  //Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy. then place the vaulues into the function above.
  this.minCust= min;
  this.maxCust= max;
  this.avgCookie= avg;
  //the location of the store (not the name apparently)
  this.location= location;
  //empty array used to store the amount of hourly cookies fatties buy.
  this.cookiesPerHour= [];
  stores.push(this);
}

//function to calculate the hourly cookies
Store.prototype.calculateHourlyCookies= function() {
  //emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
  this.cookiesPerHour = [];
  //'as long as "i" = 0 and i is less than 14 add 1 to i'
  for (var i = 0; i < hours.length; i++ ) {
    //'the amount of cookies is equal to the number generated bellow multiplied by the average
    var cookieCalc = this.generateRandomNumber() * this.avgCookie;
    // send the cookieCalc answer above to the empy cookies per hour array and round it up 
    this.cookiesPerHour.push(Math.ceil(cookieCalc));
  }
};
//create a function the generates a random number for customers
Store.prototype.generateRandomNumber= function() {
  //this caluclates random number between min and max customers (inclusive)
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};
  //create a function that renders a row of data to the table
  Store.prototype.renderRow = function () {
  //get the table and store it in the var
  var table = document.getElementById("table1");
  //create a table row 
  var row = document.createElement("tr");
  //put the row in the table
  table.appendChild(row);
  //create a table cell and store it in a var
  var cell = document.createElement("td");
  //put the cell in a row
  row.appendChild(cell);
  //place the location as a string into the cell
  cell.textContent = this.location;
  //create a total for the dailyly cookies sold starting at 0
  var total = 0;
  // as long as times = 0 and is less that the array length add 1
  for(var times = 0; times < hours.length; times++) {
    //the total cookies per day is equal to cookies every hour plus total
    total = total + this.cookiesPerHour[times];
    //create a td cell and store it in the var "cell"
    var cell = document.createElement("td");
    //inside these cells put the time
    cell.textContent = this.cookiesPerHour[times];
    //then put the cells in a row
    row.appendChild(cell);

  }
  //create a td cell and store it in the var "cell"
  var cell = document.createElement("td");
  //put cell in a row
  row.appendChild(cell);
  //and put the calculated total into the cell 
  cell.textContent = total;
};

//create a new store object from our constructor function for all 5 
new Store(23, 65, 6.3,"1st and Pike");
new Store(3, 24, 1.2,"SeaTac Airport");
new Store(11, 38, 3.7,"Seattle Center");
new Store(20, 38, 2.3,"Capitol Hill");
new Store(2, 16, 2.6,"Alki");

//make a render header function
function renderHeader() {
  //grabs the table from html with the ID *table1*.
  var table = document.getElementById("table1");
  //1.create a row
  var row = document.createElement("tr");
  //put the row inside the table
  table.appendChild(row);
  //create a table heading and assign it to a var called cell
  var cell = document.createElement("th");
  //put a cell inside the row
  row.appendChild(cell);
  //write the string "Location" inside cell
  cell.textContent = "Location";
  //loop over each hour 
  for (var times = 0; times < hours.length; times++) {
    //create a table heading in cell
    var cell = document.createElement("th");
    //place the times inside cell
    cell.textContent = hours[times];
    //put the cell inside the row
    row.appendChild(cell);
  }//end for loop
  //create a table heading and assign it to cell
  var cell = document.createElement("th");
  //place the cell inside the row
  row.appendChild(cell);
  //write the string "Total" inside cell
  cell.textContent = "Total";

}
function renderFooter() {
  var table = document.getElementById("table1");
  var row = document.createElement("tr")
  table.appendChild(row)
  var cell = document.createElement("td")
  row.appendChild(cell)
  cell.textContent = "Total";
  var grandTotal = 0;
  for (var currentHour = 0; currentHour < hours.length; currentHour++) {

 
    var total = 0;
    for (var currentStore = 0; currentStore < stores.length; currentStore++) {
      total = total + stores[currentStore].cookiesPerHour[currentHour];
    } 
    var cell = document.createElement("td")
    row.appendChild(cell)
    cell.textContent = total;
    grandTotal += total;
  }
  var cell = document.createElement("td")
    row.appendChild(cell)
    cell.textContent = grandTotal;
}
function renderTable() {
  renderHeader();
  for (var i = 0; i < stores.length; i++) {
    stores[i].calculateHourlyCookies();
     stores[i].renderRow();
  }
  renderFooter();
}
function submitHandler(event) {
  event.preventDefault();
  alert("It Works!")
}
form.addEventListener("submit", submitHandler);
renderTable();