const url = "https://api.spacexdata.com/v2/launchpads";

data = d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));



// Use map() to print only the latitude and longitude coordinates of each 
    //SpaceX launch station.

// var topFiveCityNames = cityGrowths.map(city => city.City);

// this only selects latitude for a singular object, how do I write it more 
    //general so I can let map() run through the rest of the code?

// var lats = d3.json(url).then(lat => lat[0].location.latitude);

// var lats = data.map(lat => lat[0].location.latitude); 
    //^would only grab the first location

// var lats = d3.json(url).then(function(data){
//     lat = data.map(loc => loc.location.latitude);
//     console.log(lat);
// });

// console.log(lats);

var lngs = d3.json(url).then(function(data){
    lat = data.map(loc => loc.location.latitude);
    lng = data.map(loc => loc.location.longitude);
        // use temporary variable for any numbered keys. for example:
            // in this code I typed loc for the 0th key so loc is now taking the
            // place of all the numbered keys and allowing me to use the map()
            // appropriately 
            // I was even able to combine them into one map()
    console.log(lat, lng);
});