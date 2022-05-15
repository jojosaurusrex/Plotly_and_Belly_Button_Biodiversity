// starts listening for an event which is a change on the dropdown menu
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // whenever a change of the dropdown menu occurs these variables change the 
        // value of the id = "selectOption"
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
//   console.log(d3.selectAll("#menu").node().id); 
// this prints menu which is the id of the div 
// similar to but not the same as dropdownMenuID
};