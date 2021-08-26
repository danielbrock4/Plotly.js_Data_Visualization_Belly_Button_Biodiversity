// LINE CHART

Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotArea2", [{x:[5, 10, 15, 20], y: [3, 6, 9, 12]}]);

// Plotly.newPlot() creates new in the div id="name" in the HTML. There is an outer array that wraps around 
// the object. The object has two keys: x and y. The corresponding value for each key is an array of numbers.
    // 1st argument in Plotly,newPlot() is "plotArea". Recall that this corresponds to the ID of the <div>
        // tag in the HTML document.
    // 2nd argument is an array, as indicated by the square brackets. Inside the array is an object, 
        // as notated by the curly brackets, in which values of x and y are specified. 
        // The x and y values are contained inside arrays as well.

// BAR CHART        

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: 'bar'
};
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Options"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea3", [trace], layout);

// The data is no longer contained inside the Plotly.newPlot(). The object that contains the x and y arrays 
// is instead assigned to the variable "trace." This variable, trace, is the 2nd argument of the newPlot(). 
// However, that the contents of the variable have been enclosed inside an array. The effect is still the 
// same: an object contained inside an array.
// The trace object now specifies the chart as a bar chart with type: "bar". 
// There is an object assigned to the variable layout. It contains the key: title & value: "Luncheon Survey".
// Plotly.newPlot()now has a third argument: layout, which refers to the object.
// In the same layout object, two key-value pairs have been added. The first key, xaxis, denotes the axis label 
// for the x-axis. Its value, {title: "Food Option"}, is itself an object whose key is title and
// whose value is Food Option. The same format holds for the y-axis label.

var trace2 = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];
var layout2 = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
};
Plotly.newPlot("plotArea4", trace2, layout2);
// Unlike the example above, the data object is no longer enclosed in an array in the function call, 
// but it is still enclosed inside an array in the variable assignment.

// PIE CHART
var trace3 = [{
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
}];
var layout3 = {
    title: "Pie Chart"
};
Plotly.newPlot("plotArea5", trace3, layout3);
// Pie charts do not have  the data arrays have x and y keys: This causes a problem because a pie chart does not have x and y axes. 
// Different keys should be used. Instead of x and y, they are labels and values.

// LINE AND SCATTER PLOT
var trace4= {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
    type: "scatter"
  };
  var trace5 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: "lines",
    type: "scatter"
  };
  var trace6 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines+markers",
    type: "scatter"
  };
  var data2 = [trace4, trace5, trace6];
  Plotly.newPlot("plotArea6", data2);

  
// FUNCNTIONAL JAVA SCRIPT - be able to manipulate the data
  // MAP() METHOD -  applies a transformation to each element in an array. 
  // like a for loop, it can perform an operation to every element of an array.
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(num => num * 2 );
// var doubled = numbers.map(function(num){
    // return num * 2;
// });
console.log(numbers);
console.log(doubled);
// step1: The numbers array calls the map()method.
// step2: Inside map(), there is another function. 
    //This function is anonymous meaning the function does not have a name. 
    // When map() is called, it in turn calls this anonymous function.
// step3: The anonymous function takes a parameter, named num, and returns the number multiplied by 2. 
    // Its sole task is to perform this single action.
    // In the anonymous function inside the map()method, the parameter name num is arbitrary.
    // It could have been named anything else, such as integer or carPrice.
// step4: For every element in the array, the map() method calls the anonymous function, 
    //which doubles the value of the element.
// step5: The map()method returns an array of doubled values, which is assigned the variable doubled.   
var numbers2 = [0,2,4,6,8];
var doubled2 = numbers2.map(function(num) {
    return num * 2
});
console.log(numbers2);
console.log(doubled2);
//In this example,map() is used to extract a specific property from each object in an array.
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
var cityNames = cities.map((city => city.City));
var stateNames = cities.map((state => state.State));
console.log(cityNames);
console.log(stateNames);
// 1) cities is an array of objects. Each object has multiple properties, such as Rank, City, and State.
// 2) map() method is used to extract only the City property of each object, i.e., San Antonio, Phoenix, and Dallas. 
    // During each iteration, the anonymous function inside map() returns only that property of each object.
// 3) cityNames is an array of only these city names.

//Have you noticed that the syntax for the map() method is far cleaner and involves fewer variables than a for loop?
// Additionally, whereas a for loop gives specific instructions on start and end points of the loop, map() does not.
// A for loop is imperative, meaning that its code is more detailed on the specific operations involved in it. 
// The map() method, on the other hand, is more abstract, and does not specify things such as stop and end points.
// However, the map() method does something that a for loop does not always do: it calls another function. 
// These are some of the features of the functional programming paradigm,
//  which as we have seen, may lead to fewer errors and complications.

// FILTER METHOD() -
// Like map(), filter() performs an operation on every element in the original array.
// Unlike map(), however, filter()does not return an array whose length is the same as the original array.
// The map() method transforms every element of the original array, 
// and so the size of the transformed array is the same as that of the original array.
//The filter() method, on the other hand, returns an array of values that meet certain criteria. 
// Values in the original array that do not fulfill the condition are filtered out.

var numbers3 = [13, 22, 36, 54, 55];
var evenNumbers = numbers3.filter(num => num % 2 == 0);
console.log(evenNumbers);

var numbers4 = [1,2,3,4,5];
var larger = numbers4.filter(function(num) {
    return num > 1;
});
console.log(larger);
/* The filter()method operates on each element of the numbers array
1. The numbers array uses the filter() method.
2. The filter() method, in turn, takes an anonymous function as its argument. 
The anonymous function's sole task is to take in a parameter, called num.*/

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sWords = words.filter((animal) => animal[0] === "s" );
console.log(sWords);

// SORT() METHOD

var familyAge = [3,2,39,37,9];
var sortedAgeAcending = familyAge.sort((a,b) => a - b);
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -anotherElement);
console.log(sortedAgeAcending);

/*During each iteration, the anonymous function, an arrow function in this case, compares one element 
of the array (a) with another element in the array (b). From a, it subtracts b. 
If the result is negative (i.e., b is larger than a) then it stays put. 
If the result of the subtraction is positive, the order of the two elements is reversed.
1.The variables a and b are replaced by anElement and anotherElement.
2. The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, 
and anotherElement to 2.
3. The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
4. Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
5. The sort()method compares another pair of elements in the array, for example 37 and 39.
6. Since 37 - 39 is a negative number, their ordering is kept.
7. The process is repeated until the array is sorted.
*/
var familyAge = [3,2,39,37,9];
sortedAgeDecending = familyAge.sort((a,b) => b - a);
console.log(sortedAgeDecending);

// SLICE() METHOD
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0, 2);
console.log(slice1);
/* In this example, the slice()method returns the first two elements of the integer array: [0,1]. 
The first argument is the position of where to begin the selection. Here, it is at index position 0. 
The next argument, 2, denotes the position of the array where the slicing ceases. 
In other words, the slice()method begins selecting the array at index position 0, and stops right before 
reaching index position 2. So here, it returns elements at index positions 0 and 1, but not 2. */

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(3, );
console.log(slice2); 