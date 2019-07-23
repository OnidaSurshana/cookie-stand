"use strict";
// set up a VAR for each store  that details The minimum number of customers per hour, The maximum number of customers per hour, The average number of cookies purchased per customer.

//store all the hours inside an array to be used later.
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create an object litteral to store all the info for one store
function Store(min, max, avg, location) {
//Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy.
  this.minCust= min;
  this.maxCust= max;
  this.avgCookie= avg;
//the location of the store (not the name apparently)
  this.location= location;
//empty array used to store the amount of hourly cookies fatties buy.
  this.cookiesPerHour= [];
//function to calculate the hourly cookies
  this.calculateHourlyCookies= function() {
//emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
    this.cookiesPerHour = [];
//'as long as "i" = 0 and i is less than 14 add 1 to i'
    for (var i = 0; i < hours.length; i++ ) {
//'the amount of cookies is equal to the number generated bellow multiplied by 6.3'
      var cookieCalc = this.generateRandomNumber() * this.avgCookie;
// send the cookieCalc answer above to the empy cookies per hour array and round it up 
      this.cookiesPerHour.push(Math.ceil(cookieCalc));
    }
  };
  this.generateRandomNumber= function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  this.renderList= function(id) {
    var list = document.getElementById(id);
     //create a var to store total and initialize to 0
    var total = 0;
    //pull an object from the array and put it in the Li
    for (var i = 0; i < hours.length; i++) {
      var li1 = document.createElement("li");
      var cookiesSold = this.cookiesPerHour[i];
      //sum previous total and cookies sold and store the result in total
      total = total + cookiesSold;
      li1.textContent = `${hours[i]}: ${cookiesSold} cookies`;
      list.appendChild(li1);
    } 
    var totalLi = document.createElement("li");
    totalLi.textContent = `Total: ${total} cookies`;
    list.appendChild(totalLi);
  } 
}

function renderHeader() {
  //grabs the table from html with the ID *table1*.
var table = document.getElementById("table1");
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
 
  // renderHeader();
  //create a new store object from our constructor function
var store1 = new Store(23, 65, 6.3,"1st and Pike");
var store2 = new Store(3, 24, 1.2,"SeaTac Airport");
var store3 = new Store(11, 38, 3.7,"Seattle Center");
var store4 = new Store(20, 38, 2.3,"Capitol Hill");
var store5 = new Store(2, 16, 2.6,"Alki");
store1.calculateHourlyCookies();
store1.renderList("list1");

store2.calculateHourlyCookies();
store2.renderList("list2");

store3.calculateHourlyCookies();
store3.renderList("list3");

store4.calculateHourlyCookies();
store4.renderList("list4");

store5.calculateHourlyCookies();
store5.renderList("list5");



