d3.json("samples.json").then(function(data){
    console.log(data);
    console.log("Hello World!")
});

// grabs and outputs an array of the wfreq for each person
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

d3.json("samples.json").then(function(data){
    first = data.metadata[0];
    Object.entries(first).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});
