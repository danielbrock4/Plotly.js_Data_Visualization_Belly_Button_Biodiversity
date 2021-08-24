
// SpaceX API Link
const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

/* API Call using 3.json() allows us to read external JSON files & calls to external web APIs for data. 

Step1: In the first line, the URL to the SpaceX is defined.
Step2: d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console 

The d3.json() returns a JS promise: it places an API call to the URL and executes subsequent lines of code only 
when the API call is complete. Once the data is retrieved, it is assigned the arbitrary parameter name receivedData
by the arrow function and printed in the console. The d3.json().then() method ensures that the data is received 
before executing the arrow function. In summary, a JavaScript promise in this case waits for the data retrieval 
to finish before moving on to the next code.*/

/*Retrive Fullname from first Array
The details of each location, as you have just seen, are enclosed within a JavaScript object. 
Its properties can therefore be accessed with the dot notation. The code to retrieve the full_nameof 
the Vandenberg Air Force*/

d3.json(url).then(spaceXResults  => console.log(spaceXResults[0].full_name));

// Retrieve Data from and Array within an Array (latitude)
d3.json(url).then(spaceXResults  => console.log(spaceXResults[0].location.latitude));

// MAP SKILL DRILL
// spaceXResults.map(coordinates => console.log(coordinates[0].location.latitude, coordinates[0].location.longitude));
// /* */
d3.json(url).then((data) =>
    data.map(location => console.log(location.location))
);