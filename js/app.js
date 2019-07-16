
// set up a VAR for each store  that details The minimum number of customers per hour, The maximum number of customers per hour, The average number of cookies purchased per customer.

var hours = [ "6am",
"7am",
"8am",
"9am",
"10am",
"11am",
"12am",
"1pm",
"2pm",
"3pm",
"4pm",
"5pm",
"6pm",
"7pm",
"8pm",
]
var masterBranch = {
  location: "Christ Church, Oistins",
  customersPHR: randomNum,
  salesPP: customerPHR + randomNum
  
}

var secondBranch = {
  location: "BridgeTown",
  customersPHR: randomNum,
  salesPP: customerPHR + randomNum
}

var thirdBranch = {
  location: "HoleTown",
  customersPHR: randomNum,
  salesPP: customerPHR + randomNum
}

var fourthBranch = {
  location: "Marvin Gardens",
  customersPHR: randomNum,
  salesPP: customerPHR + randomNum
}

var fithBranch = {
  location: "Massy Stores",
  customersPHR: randomNum,
  salesPP: customerPHR + randomNum
}


// create a number randomizer for the amount of hourly customers
var randomNum = Math.floor(Math.random());


//find the average amount of cookies bought per hour 
// var SALES = the amount of people x1-3 (??)
// calculate the amount of money made from the sales per hour
//then add the sum and compare it to the min money needed to keep the business afloat

var salesPC = Math.floor(Math.random());

//store the info for each store using an array 

//display the values as an <ul> in the browser 

// provided example: Calculating the sum of these hourly totals; your output for each location should look like this:

    // 1st and Pike
    // - 6am: 16 cookies
    // - 7am: 20 cookies
    // - 8am: 35 cookies
    // - 9am: 48 cookies
    // - 10am: 56 cookies
    // - 11am: 77 cookies
    // - 12pm: 93 cookies
    // - 1pm: 144 cookies
    // - 2pm: 119 cookies
    // - 3pm: 84 cookies
    // - 4pm: 61 cookies
    // - 5pm: 23 cookies
    // - 6pm: 42 cookies
    // - 7pm: 57 cookies
    // - 8pm: 29 cookies
    // - Total: 657 cookies