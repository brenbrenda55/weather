//usser fills out form and types in city
// request data for that city. fetch (url)
// populate data


// variables
var searchformEl = document.querySelector("#searchbtn")

var displayCurrentWeather = function () {
    var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={53dfc2bbab4daa2b652b8ca5d214155b" 

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

// when search button is clicked 
searchformEl.addEventListener("submit", formSubmitHandler);




