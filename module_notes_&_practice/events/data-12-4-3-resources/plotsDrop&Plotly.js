/* CREATE A DYNAMIC Plotly Chart 
    Create a dashboard in which her volunteers can select their anonymized ID from a dropdown menu 
    in the browser in order to display information about their belly button critters. */


/* Step1:  First function to execute is init(), which renders the initial visualization
In this part of the code, a simple line chart, with x and y axes, is rendered with Plotly.newPlot().  */
function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]}];
    Plotly.newPlot("plot", data);
};

/* Step 2: d3.selectAll().on("change", ); creates an event listener that triggers the custom function every time a 
         change takes place to the HTML element specified by selectAll().
         When an event occurs on the page, such as selection of a dropdown menu option, 
         the updatePlotly() function is triggers*/
d3.selectAll("#dropdownMenu").on("change", updatePlotly);

/* Step 3: This is the function that is called when a user creates an event—in this case, 
           selecting a dropdown menu option.

        3.a) The x-axis values, or xData, remain the same. However, the y-axis values, or yData, depend on which dropdown menu option 
        was selected. yData is initially a blank array.
        3.b) If the value of the dropdown menu option is 'dataset1', yData is assigned an array of integers. If 'dataset2' is chosen,
        another array of integers is assigned to yData.
        3.c) The xData and yData arrays are assembled inside the trace object. Unlike the Plotly.newPlot() method, thePlotly.restyle()
         method defaults to accepting an object (trace in this case) as its data argument, rather than an array.
        3.d) The Plotly.restyle() method is used to re-render the page on the browser. This method is more efficient than calling the 
        Plotly.newPlot() method, as it does not create a brand new chart from scratch, but instead modifies the previously 
        displayed chart with the updated information.*/
function updatePlotly() {
    let dropdownMenu = d3.select("#dropdownMenu");
    let dataset = dropdownMenu.property("value");

    let xData = [1, 2, 3, 4, 5];
    let yData = []; 

    if (dataset === "dataset1") {
        yData = [1, 2, 4, 8, 16];
    };

    if (dataset === "dataset2") {
        yData = [1, 10, 100, 1000, 10000];
    };

    var trace = {
        x: [xData],
        y: [yData]
    };
    // 1st argument, “plot”, refers to the HTML div, and the 2nd argument, trace, refers to a JS object that contains the data.
    Plotly.restyle("plot", trace);
};

/* Step4: When the user first loads the page, init() is called, and the initial plot is rendered. 
However, when the user selects a dropdown menu option, the updatePlotly() function is called: Specifically, through the 
d3.selectAll() function, when a change takes place to the HTML DOM element with the id of dropdownMenu, the upDatePlotly() 
function is triggered.*/
init();


/* */

/*
1)
2)
3)
4)
5)
6)
7) */