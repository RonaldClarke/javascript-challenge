// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFilterDate = d3.select("#datetime")
var form = d3.select("form")
data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
button.on("click", runFilter);
form.on("submit", runFilter);
function runFilter() {
    d3.event.preventDefault();
    var inputDate = inputFilterDate.property("value");
    var FilteredData = tableData.filter(sighting => sighting.datetime === inputDate);
    tbody.html("");
    console.log(FilteredData)
    FilteredData.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};