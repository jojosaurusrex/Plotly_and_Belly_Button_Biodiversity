// Plotly.newPlot("abc", [{x: [5, 10, 15, 20], y: [10, 20, 30, 40]}]);


var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

var numbers = [1,2,3,4,5];

// var doubled = numbers.map(function(num){
//     return num * 2;
// });

// var doubled = numbers.map(function(integer) {
//     return integer * 2;
//     });

// var doubled = numbers.map(function(carPrice) {
//     return carPrice * 2;
//     });    

// ^^^ these all do the same thing just using different variables within the 
    // function that is within the map (similar to forEach input and output 
    // is an array of the same length)

// converting into arrow function
var doubled = numbers.map(num => num * 2);
console.log(doubled);

var plus5 = doubled.map(function(num){
    return num+5;
});

console.log(plus5);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// cities is an array of objects. Each object has multiple properties, such as 
    //Rank, City, and State.
// The map() method is used to extract only the City property of each 
    //object, i.e., San Antonio, Phoenix, and Dallas. During each iteration, 
    //the anonymous function inside map() returns only that property of each 
    //object.
// cityNames is an array of only these city names.

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startingS = words.filter(function(startS){
    return startS.charAt(0) == 's'; //charAt()  allows us  to select a specific 
                                        //character w/in a string
    //link: https://www.freecodecamp.org/news/how-to-capitalize-the-first-letter-of-a-string-in-javascript/#:~:text=You%20should%20use%20the%20charAt,first%20character%20of%20the%20string.&text=NOTE%3A%20charAt%20is%20preferable%20than,in%20case%20of%20''%5B0%5D%20.
});
console.log(startingS);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement); // ascending order 
// switch anElement and anotherElement after the arrow for descending order

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

var slice2 = words.slice(0,3); //returns 1st 3 elements
console.log(slice2);

var slice3 = words.slice(3, ); //returns last 2 elements, so position 3 onward, -2 will also give us the same result
console.log(slice3);