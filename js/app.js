"use strict";
// set up a VAR for each store  that details The minimum number of customers per hour, The maximum number of customers per hour, The average number of cookies purchased per customer.

//store all the hours inside an array to be used later.
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create an object litteral to store all the info for one store
var store1 = {
//Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy.
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
//the location of the store (not the name apparently)
  location: "1st and Pike",
//empty array used to store the amount of hourly cookies fatties buy.
  cookiesPerHour: [],
//function to calculate the hourly cookies
  calculateHourlyCookies: function() {
//emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
    this.cookiesPerHour = [];
//'as long as "i" = 0 and i is less than 14 add 1 to i'
    for (var i = 0; i < hours.length; i++ ) {
//'the amount of cookies is equal to the number generated bellow multiplied by 6.3'
      var cookieCalc = this.generateRandomNumber() * this.avgCookie;
// send the cookieCalc answer above to the empy cookies per hour array and round it up 
      this.cookiesPerHour.push(Math.ceil(cookieCalc));
    }
  },
  generateRandomNumber: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  renderList: function() {
    var list = document.getElementById("list1");
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

var store2 = {
  //Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy.
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
  //the location of the store (not the name apparently)
    location: "SeaTac Airport",
  //empty array used to store the amount of hourly cookies fatties buy.
    cookiesPerHour: [],
  //function to calculate the hourly cookies
    calculateHourlyCookies: function() {
  //emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
      this.cookiesPerHour = [];
  //'as long as "i" = 0 and i is less than 14 add 1 to i'
      for (var i = 0; i < hours.length; i++ ) {
  //'the amount of cookies is equal to the number generated bellow multiplied by 6.3'
        var cookieCalc = this.generateRandomNumber() * this.avgCookie;
  // send the cookieCalc answer above to the empy cookies per hour array and round it up 
        this.cookiesPerHour.push(Math.ceil(cookieCalc));
      }
    },
    generateRandomNumber: function() {
      var min = Math.ceil(this.minCust);
      var max = Math.floor(this.maxCust);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    renderList: function() {
      var list = document.getElementById("list2");
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

  var store3 = {
    //Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy.
      minCust: 11,
      maxCust: 38,
      avgCookie: 3.7,
    //the location of the store (not the name apparently)
      location: "Seatle Center",
    //empty array used to store the amount of hourly cookies fatties buy.
      cookiesPerHour: [],
    //function to calculate the hourly cookies
      calculateHourlyCookies: function() {
    //emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
        this.cookiesPerHour = [];
    //'as long as "i" = 0 and i is less than 14 add 1 to i'
        for (var i = 0; i < hours.length; i++ ) {
    //'the amount of cookies is equal to the number generated bellow multiplied by 6.3'
          var cookieCalc = this.generateRandomNumber() * this.avgCookie;
    // send the cookieCalc answer above to the empy cookies per hour array and round it up 
          this.cookiesPerHour.push(Math.ceil(cookieCalc));
        }
      },
      generateRandomNumber: function() {
        var min = Math.ceil(this.minCust);
        var max = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      renderList: function() {
        var list = document.getElementById("list3");
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

    var store4 = {
      //Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy.
        minCust: 20,
        maxCust: 38,
        avgCookie: 2.3,
      //the location of the store (not the name apparently)
        location: "Capital Hill",
      //empty array used to store the amount of hourly cookies fatties buy.
        cookiesPerHour: [],
      //function to calculate the hourly cookies
        calculateHourlyCookies: function() {
      //emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
          this.cookiesPerHour = [];
      //'as long as "i" = 0 and i is less than 14 add 1 to i'
          for (var i = 0; i < hours.length; i++ ) {
      //'the amount of cookies is equal to the number generated bellow multiplied by 6.3'
            var cookieCalc = this.generateRandomNumber() * this.avgCookie;
      // send the cookieCalc answer above to the empy cookies per hour array and round it up 
            this.cookiesPerHour.push(Math.ceil(cookieCalc));
          }
        },
        generateRandomNumber: function() {
          var min = Math.ceil(this.minCust);
          var max = Math.floor(this.maxCust);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        renderList: function() {
          var list = document.getElementById("list4");
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
      var store5 = {
        //Set the minimum and maximum amount of lickrish people you get per hour as well as the average amount of cookies the fatties buy.
          minCust: 2,
          maxCust: 16,
          avgCookie: 4.6,
        //the location of the store (not the name apparently)
          location: "Alki",
        //empty array used to store the amount of hourly cookies fatties buy.
          cookiesPerHour: [],
        //function to calculate the hourly cookies
          calculateHourlyCookies: function() {
        //emties out the array so that if you calculate it twice two answers arent pushed to the array (even though i dont get why this isnt after the calculation)
            this.cookiesPerHour = [];
        //'as long as "i" = 0 and i is less than 14 add 1 to i'
            for (var i = 0; i < hours.length; i++ ) {
        //'the amount of cookies is equal to the number generated bellow multiplied by 6.3'
              var cookieCalc = this.generateRandomNumber() * this.avgCookie;
        // send the cookieCalc answer above to the empy cookies per hour array and round it up 
              this.cookiesPerHour.push(Math.ceil(cookieCalc));
            }
          },
          generateRandomNumber: function() {
            var min = Math.ceil(this.minCust);
            var max = Math.floor(this.maxCust);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          },
          renderList: function() {
            var list = document.getElementById("list5");
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
store1.calculateHourlyCookies();
store1.renderList();

store2.calculateHourlyCookies();
store2.renderList();

store3.calculateHourlyCookies();
store3.renderList();

store4.calculateHourlyCookies();
store4.renderList();

store5.calculateHourlyCookies();
store5.renderList();



