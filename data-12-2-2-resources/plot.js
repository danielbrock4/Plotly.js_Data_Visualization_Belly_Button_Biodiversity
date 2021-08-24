// Confirm Object is pulling correctly in the console first
// console.log(cityGrowths);

// Step1: Sort the cities in descending order of population growth.
var sortedCities = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities); 

/* sort() method takes in a and b as arguments and subtracts the Increase_from_2016 property to sort the cities. 
Remember that a and b are arbitrarily named. Here, a is one city in the dataset, and b is the next city that is 
listed in the dataset.*/

// Step2: Select only the top five cities in terms of growth.

var topFiveCities = sortedCities.slice(0, 7);
console.log(topFiveCities); 

/*The slicing operation begins and includes the element at index position 0, and 
stops before the element at index position 5.?*/

// Step3: Create separate arrays for the city names and their population growths.
var topFiveCityNames = topFiveCities.map((names) => names.City);
var topFiveCityGrowths = topFiveCities.map((growths) => parseInt(growths.Increase_from_2016));
console.log(topFiveCityNames); 
console.log(topFiveCityGrowths); 

/*Did you notice the parseInt()method used above? You might have also noticed that all values in the dataset are 
strings. For example, in this object, the numerical values are formatted as strings, as indicated by the quotation 
marks, rather than integers.That is whyparseInt(city.Increase_from_2016)converts strings into integers.*/

// Step4: Use Plotly to create a bar chart with these arrays.

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);