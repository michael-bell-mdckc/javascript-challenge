// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

// console.log the ufo data from data.js
console.log(tableData);

// table append
tableData.forEach(ufoData => {
    var row = tbody.append("tr");
    Object.values(ufoData).forEach(sighting => {
        row.append("td").text(sighting);
    });
});

// get a reference to the button on the page with the id property set to `filter-btn`
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {

    d3.event.preventDefault();

    // get a reference to the input element on the page with the id property set to 'datetime'
    var inputField = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputField.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    d3.select("tbody").remove();

    d3.select("table").append("tbody");

    var tbody = d3.select("tbody");

    // table append filtered data
    filteredData.forEach(selectUfodata => {
        var row = tbody.append("tr");
        Object.values(selectUfodata).forEach(selectSighting => {
            row.append("td").text(selectSighting);
        });
    });
});

// get a reference to the button on the page with the id property set to `reset-btn`
var resetButton = d3.select("#reset-btn");

resetButton.on("click", function () {

    d3.select("tbody").remove();

    d3.select("table").append("tbody");

    var tbody = d3.select("tbody");

    // table append
    tableData.forEach(ufoData => {
        var row = tbody.append("tr");
        Object.values(ufoData).forEach(sighting => {
            row.append("td").text(sighting);
        });
    });
});