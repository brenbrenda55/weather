//usser fills out form and types in city
// request data for that city. fetch (url)
// populate data

var displayCurrentWeather = function () {
    var apiUrl = ""

    fetch(apiUrl)
    .then(function(response) {
        //request was successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(data){
                console.log(data);
            });
        } else {
            alert('Error: Weather Not Found');
        }
    })
    .catch(function(error) {
        alert("Unable to display weather");
    });
};