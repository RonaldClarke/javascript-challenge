// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var dateButton = d3.select("#filter-btn-date");
var inputFilterDate = d3.select("#datetime");
var dateForm = d3.select("date-form");
var cityButton = d3.select("#filter-btn-city");
var inputFilterCity = d3.select("#cityname");
var cityForm = d3.select("city-form");
var stateButton = d3.select("#filter-btn-state");
var inputFilterState = d3.select("#statename");
var stateForm = d3.select("state-form");
data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
dateButton.on("click", runFilter);
dateForm.on("submit", runFilter);
cityButton.on("click", runFilter);
cityForm.on("submit", runFilter);
stateButton.on("click", runFilter);
stateForm.on("submit", runFilter);
function runFilter() {
    d3.event.preventDefault();
    tbody.html("");
    var inputDate = inputFilterDate.property("value");
    var inputCity = inputFilterCity.property("value");
    var inputState = inputFilterState.property("value");
    var FilteredData = tableData;
    if (inputDate) {
        FilteredData = FilteredData.filter(sighting => sighting.datetime === inputDate)
    }
    if (inputCity) {
        FilteredData = FilteredData.filter(sighting => sighting.city === inputCity)
    }
    if(inputState) {
        FilteredData = FilteredData.filter
    }

    
    FilteredData.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

