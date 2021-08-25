d3.selectAll("body").on("change", updatePage);

function updatePage() {
    dropDownMenu = d3.selectAll("#selectOption").node();
    dropDownMenuID = dropDownMenu.id;
    selectedOptionValue = dropDownMenu.value;

    console.log(dropDownMenuID);
    console.log(selectedOptionValue);
};