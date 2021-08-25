/* EVENT LISTENERS
1) d3.selectAll() method to create an event listener
    1.a) d3.selectAll().on("change", ); creates an event listener that triggers the custom function every time a 
         change takes place to the HTML element specified by selectAll().
    2.b) When an event occurs on the page, such as selection of a dropdown menu option, 
         the updatePage() function is triggered  */

d3.selectAll("body").on("change", updatePage);

/*
1) d3.selectAll() to select the dropdown menu, which has an id of selectOption.
2) The id of the dropdown menu, selectOption, is assigned the variable dropdownMenuID.
3) Whenever a dropdown menu option is selected, its value is assigned the variable selectedOption. 
    Note that selectOption is the id value of the dropdown menu, while selectedOption is the option that 
    is chosen by the user.
4) Each time updatePage() is triggered, the id value of the dropdown menu, as well as the value of the 
   chosen menu option, are printed to the browser console.
5)
6)
7) */
function updatePage() {
    let drowDownMenu = d3.selectAll("#selectOption").node();
    let drowDownMenuID = drowDownMenu.id;
    let selectedOption = drowDownMenu.value;

    console.log(drowDownMenuID);
    console.log(selectedOption);
};

// It will print menu, which is the id of the div that contains the dropdown menu. 
// The div is selected by the d3.selectAll() method, and its id property is printed to the console
console.log(d3.selectAll("#menu").node().id);
/* */

/*
1)
2)
3)
4)
5)
6)
7) */