//usser fills out form and types in city
// request data for that city. fetch (url)
// populate data


// variables
var searchformEl = document.getElementById("searchbtn"); console.log(searchbtn)
var cityEl = document.getElementById("city")
var pastSearchesEl = document.getElementById("pastSearches")
var inputEl =document.querySelector("#input"); 
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("wind");
var uvIndexEl = document.querySelector("#uv-index");

//var lat = posotion.coords.latitude
//var long = position.coords.longitutde



// geo code for long/lat
function coordinations () {
    var apiKey = 'bf38ae612140444abef29b253d307bfa';
    var apiUrlG ='api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={apiKey}';
    window.addEventListener("load", () => {
        let long;
        let lat;

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                long = position.coords.longitude;
                lat = position.coords.longitude;
                fetch(apiUrlG)
                    .then((response) =>(
                        response.json()
                    ))})}})}

//var {temp,wind,uvindex} = data.currentForecast (city)
tempEl.textContent = temp;
//windEl.textContent = wind;
//uvIndexEl.textContent = uv-index;



// function for current forecast
function currentForecast(city) {
    var apiKey = 'bf38ae612140444abef29b253d307bfa';
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    console.log(apiUrl)
     fetch(apiUrl)
    .then(function(response) {
       if (response.ok) {
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
}



// function for 5 day forecast forecast
function fiveday(city) {
    var apiKey = 'bf38ae612140444abef29b253d307bfa';
    var apiUrl = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`
    console.log(apiUrl)
     fetch(apiUrl)
    .then(function(response) {
       if (response.ok) {
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
}


//5 day forcast
// var fiveDay = function () {
    //var apiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={53dfc2bbab4daa2b652b8ca5d214155b}"
     

   // fetch(apiUrl)
   // .then(function(response) {
        //request was successful
      //  if (response.ok) {
     //       console.log(response);
   ///         response.json().then(function(data){
 //           //    console.log(data);
          //  });
        //} else {
        //    alert('Error: Weather Not Found');
      //  }
    //})
    //.catch(function(error) {
   //     alert("Unable to display weather");
  // });
//};



// function for current forecast
//function currentForecast(city) {
    //var apiKey = 'bf38ae612140444abef29b253d307bfa';
   // var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    //console.log(apiUrl)



//save city 
var pastSearchesEl = function (){
    localStorage.setItem(city,data);
    JSON.Stringify(data)

};


function searchCity (event) { 
    event.preventDefault()
    currentForecast (inputEl.value)
}


// when search button is clicked 
searchformEl.addEventListener("click",searchCity);


