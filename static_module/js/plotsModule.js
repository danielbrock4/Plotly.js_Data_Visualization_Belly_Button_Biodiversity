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
d3.json("samples1.json").then(data => console.log(data));
/*
1) Extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array 
2) Sort the wfreq array in descending order
3) Delete null values from the sorted wfreq array*/

d3.json("samples1.json").then(function(data){
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
d3.json("samples1.json").then((data) =>
    Object.entries(data.metadata[0]).forEach(([key, value]) => console.log(key + " : " + value))
);
/*Dynamically Generate Dropdown Menu Items
    1) All the code is enclosed inside the init() function, which is called on the last line
    2) Insideinit(), the d3.select() method is used to select the dropdown menu, which has an id of #selDataset. 
       The dropdown menu is assigned to the variable selector.
    3) The d3.json() method is used to read the data from samples.json. 
       The data from the entire JSON file is assigned the (arbitrary) argument name data.
    4) Inside the data object, the names array, as seen from console.log(data), 
       contains the ID numbers of all the study participants. The variable sampleNames is assigned to this array.
    5) forEach() method is called on the sampleNames array. As the forEach() method iterates over the first element 
        of the array, a menu option is appended to the dropdown menu. It is then given the text (the text seen in the
        dropdown menu) "940", and its property is also assigned "940". The forEach() method will perform the same tasks 
        for the next element of the array, "941".
            a) For each element in the array, a dropdown menu option is appended. 
            b) The text of each dropdown menu option is the ID
            c) Its value property is also assigned the ID. */
function init() {
    let selector = d3.select("#selDataset");

    d3.json("samples1.json").then(data => { 
        console.log(data);
        let samplesNames = data.names;
        samplesNames.forEach(sample => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    });
};

init();

/* Create function to pair with HTML code <select id="selDataset" onchange="optionChanged(this.value)"></select>
This function is called when a change takes place in the dropdown menu in the browser, e.g., 
a user selects a menu option. The value of the menu option is passed in as the function’s argument.
    1) This function is declared in plots.js, but it is never called in plots.js. 
       It's instead called by the onchange attribute of the dropdown menu in index.html. Compare this to the init() 
       function, which is both declared and called inplots.js.
    2) The argument name newSample refers to the value of the selected menu option. 
       In index.html, onchange=optionChanged(this.value)passes the selected menu option's value to the optionChanged()
       function. This function gives this information the argument name newSample. In other words,this.value and 
       newSample are equivalent.*/

// function optionChanged(newSample) {
//     console.log(newSample);
// };

// Print Information to the Demographic Info
    /* Two Tasks with seperate functions need to be done to do do the following
    1) The demographic information panel is populated with a specific volunteer's information.
    2) The volunteer's data is visualized in a separate div?
 Recall that optionChanged() is called from the HTML document and, in turn, calls buildMetadata() and buildCharts().
 The argument, newSample, is the volunteer ID number that is passed to both of these functions. These two functions 
 will use the ID number to create that specific individual's information panel and charts, respectively   */

function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
};

/*
1) The  function buildMetadata() takes in sample, or an ID number, as its argument. That is, when a dropdown menu 
    option is selected, the ID number is passed in as sample.
2) Then d3.json() pulls in the entire dataset contained in samples.json. The dataset is read in is referred to as data.
3) The metadata array in the dataset (data.metadata) is assigned the variable metadata.
4) Then the filter() method is called on the metadata array to filter for an object in the array whose id property
    matches the ID number passed into buildMetadata() as sample. Recall that each object in the metadata array 
    contains information about one person.
5) Because the results of the filter() method are returned as an array, the first item in the array (resultArray[0]) 
    is selected and assigned the variable result.
6) The id of the Demographic Info panel is sample-metadata. The d3.select() method is used to select this <div>, 
    and the variable PANEL is assigned to it.
7) PANEL.html("") ensures that the contents of the panel are cleared when another ID number is chosen 
    from the dropdown menu.
8) Finally, the append() and text() methods are chained to append a H6 heading to the panel and print the 
    location of the volunteer to the panel, respectively.*/
function buildMetadata(sample) {
    d3.json("samples1.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
        
        PANEL.html("");

        // PANEL.append("h6").text(result.location);
        
        // PANEL.append("h6").text(result.id);
        // PANEL.append("h6").text(`ID: ${result.id}`);
        // PANEL.append("h6").text(`ETHNICITY: ${result.ethnicity}`);
        // PANEL.append("h6").text(`GENDER: ${result.gender}`);
        // PANEL.append("h6").text(`AGE: ${result.age}`);
        // PANEL.append("h6").text(`LOCATION: ${result.location}`);
        // PANEL.append("h6").text(`BBTYPE: ${result.bbtype}`);
        // PANEL.append("h6").text(`WFREQ: ${result.wfreq}`);

        Object.entries(result).forEach(([key, value]) => PANEL.append("h6").text(`${key.toUpperCase()} : ${value} `))
    });
};

/* */
/*
1)
2)
3)
4)
5)
6)
7) */
/*
a)
b)
c)
d)
*/