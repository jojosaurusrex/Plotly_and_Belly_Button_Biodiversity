// Sort the cities in descending order of population growth.
var sortedCities = cityGrowths.sort((a,b) => 
b.Increase_from_2016 - a.Increase_from_2016); //descending
console.log(sortedCities);

//  Select only the top five cities in terms of growth.

// what I came up with
// var top5 = cityGrowths.sort((a,b) => 
// b.Increase_from_2016 - a.Increase_from_2016).slice(0,5);

// module below
var top5 = sortedCities.slice(0,5);
console.log(top5);

// Create separate arrays for the city names and their population growths.
// I was almost there, needed to use a for loop and add a function to append it
// I was just trying to create a variable without the for loop

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
// parseInt() converst strings into integers since all of our values that are 
    //numbers are currently stored in a string format
console.log(topFiveCityGrowths);
console.log(topFiveCityNames);

// Use Plotly to create a bar chart with these arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var layout = {
    title: "Highest Population Growths 2016-17",
    xaxis: {title: "City"},
    yaxis: {title: "Increase in Population"}
};

Plotly.newPlot("bar-plot", [trace], layout);

// The trace specifies the type of graph as a bar chart as well as defines the 
    //x- and y-axis data.
// The variable data encloses trace in an array to meet Plotly's format 
    //requirement.
// The variable layout is assigned to an object that specifies the chart's 
    //title and axis labels.
// Finally, the graph is rendered with Plotly.newPlot()