/*For securities reasons, we cannot access indexPlots and read the samples.JSON by simply opening htmlPlots. 
When reading an external data file such as a CSV or JSON file into a script, you must run a server. 
You cannot directly open index.htmlwith your browser.
Therefore, it must be open through local:8000. To get this:
    Open bash or Gitbash and type: python -m http.server
    It will display: Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
    Put this into your webbrowser to access the files and run the code below:*/

// Read in the "samples.json" file
    // metadata array contains objects, each of which contains details of a volunteerlocation, ethnicity, ID number etc
    // names = names is simply an array of the ID numbers of the volunteers 
    // Samples:
        // The id key identifies the ID number.
        // otu_ids property is an array of the ID numbers of all the bacteria found in this person's navel.
        // sample_values array contains the corresponding species name for each bacterial ID number. 
        // Some bacterial species have different ID numbers, but are clumped together under the same otu_label
d3.json("samples.json").then(data => console.log(data));
/*
1) Extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array 
2) Sort the wfreq array in descending order
3) Delete null values from the sorted wfreq array*/

d3.json("samples.json").then(function(data){
     //map() is used to extract the wfreq property from each “person” in the data.metadata array
     //sort() b - a returns  results in descending order. a - b would return the results in ascending order
     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    // delete null values from the sorted wfreq array
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(wfreq);
});

/*  Viewing One Object in Multline Array:
    1) Read in json file and retrieve the string data as an argument
    2) then() method ensures that all the data requested from the API is received before executing the next part of code.
    3) Create a function and assign the variable to reflect data being pulled
    4) Object.entries() method allows access to both an object's keys and values. It returns each key-value pair as an array.
        4.) Read in the metadata Array for item in the array [0]
    5) forEach() method iterates through each element in an array. In this case, there are smaller arrays, each including 
    two elements, inside an outer array. To access these elements, the argument ([first, second]) is used, 
    where first and second are arbitrarily chosen for convenience. They could have been named ([x, y]) or ([key, value]).
    */
d3.json("samples.json").then((data) =>
    Object.entries(data.metadata[0]).forEach(([key, value]) => console.log(key + " : " + value))
);
/*Dynamically Generate Dropdown Menu Items*/

function init() {
    let selector = d3.select("#selDataset");

    d3.json("samples.json").then(data => { 
        console.log(data);
        let samplesNames = data.names;
        samplesNames.forEach(sample => {
            selector.append("option").text(sample).property("value", sample);
        });
    });
};

init();
/* */

// function init() {
//     var selector = d3.select("#selDataset");
  
//     d3.json("samples.json").then((data) => {
//       console.log(data);
//       var sampleNames = data.names;
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
//   })}
  
//   init();