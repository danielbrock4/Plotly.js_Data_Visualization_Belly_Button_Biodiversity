d3.json("samples.json").then(data => console.log(data))

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    
    var sampleNames = data.names;
    
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
    let samples = data.samples;
    
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    
    //  5. Create a variable that holds the first sample in the array.
    let samplesResult = samplesArray[0];
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otu_ids = samplesResult.otu_ids
    let otu_labels = samplesResult.otu_labels
    let sample_values = samplesResult.sample_values

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids & map them in descending order so the otu_ids with the most bacteria are last.
    let otu_idsBar = samplesResult.otu_ids.slice(0, 10).map(outId => `OTU: ${outId}`).reverse();
    let otu_labelsBar = samplesResult.otu_labels.slice(0, 10).reverse();
    let sample_valuesBar = samplesResult.sample_values.slice(0, 10).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [
      trace = {
        x: sample_valuesBar, 
        y: otu_idsBar,
        text: otu_labelsBar,
        type: "bar",
        orientation: "h",
        marker: {color: [
          "#daedff",
          '#c7e3ff',
          '#9fcfff',
          '#8cc5ff',
          '#65b1ff',
          '#3d9eff',
          '#168aff', 
          '#0076ee',
          '#0063c7',
          '#004f9f']}
        }   
    ];

    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: {
        text: "Top 10 Bacteria Cultures Found<br> in Subject: " + sample,
        font: {
          size: 22,
          color: "#002851",
          weight: 100
        }
      }, 
      xaxis: {title: "Sample Sizes"},
      font:  {family: "Gill Sans, sans-serif"}
    };

    //10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      trace = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        type: "scatter",
        mode: "markers",
        marker: { 
          size: sample_values,
          color: otu_ids,
          colorscale: "RdBu"
        } 
      }
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
        title: {
          text: "Bacteria Cultures Per Sample in Subject: " + sample,
          font: {
            size: 22,
            color: "#002851",
            weight: 100
          }
        },
        xaxis: {title: "OTU (Operational Taxonomic Unit) ID"},
        yaxis: {title: "Sample Sizes"},
        font:  {family: "Gill Sans, sans-serif"},
    };

   
    
    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    // // 4. Create the trace for the gauge chart.
    let metaDataResult = data.metadata.filter(sampleObj => sampleObj.id == sample)[0].wfreq;

    var gaugeData = [
      trace = {
        domain: { x: [0, 1], y: [0, 1] },
        value: metaDataResult,
        type: "indicator",
        mode: "gauge+number" ,
        gauge: {
          axis: { range: [0, 10] },
          
          bar: { 
            color: "rgba(205 , 69, 0, .8)"
          },
          steps: [
            { range: [0, 1], color: "#eef6ff" },
            { range: [1, 2], color: '#c7e3ff'},
            { range: [2, 3], color: '#9fcfff' },
            { range: [3, 4], color: '#8cc5ff' },
            { range: [4, 5], color: '#65b1ff' },
            { range: [5, 6], color: '#3d9eff' },
            { range: [6, 7], color: '#168aff' },
            { range: [7, 8], color: '#0076ee' },
            { range: [8, 9], color: '#0063c7' },
            { range: [9, 10], color: '#004f9f' },
          ]},
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: {
        text: 'Belly Button Washing Frequency<br>Scrubs per Week',
        font: {
          size: 22,
          color: "#002851",
          weight: 100
        }
      },
      font:  {family: "Gill Sans, sans-serif"}
    
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout); 
  });  
}    
