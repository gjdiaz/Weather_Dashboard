var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.715&lon=-117.1625&appid=b07cfedc5a378ff86010f8868a197741&units=imperial';

var cityEl = document.getElementById('city');
var dateEl = document.getElementById('date');
var conditionsEl = document.getElementById('conditions');
var tempEl = document.getElementById('temp');
var humidEl = document.getElementById('humidity');
var windEl = document.getElementById('wind');
var uvEl = document.getElementById('uv');

var dateDayOne = document.getElementById('date-dayOne')
var descrDayOne = document.getElementById('descr-dayOne')
var tempDayOne = document.getElementById('temp-dayOne')
var humidDayOne = document.getElementById('humid-dayOne')
var windDayOne = document.getElementById('wind-dayOne')
var uviDayOne = document.getElementById('uvi-dayOne')

var fetchButton = document.getElementById('submit')

function getApi() {
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);    
        //cityEl.innerHTML = data.alerts[0].sender_name;
        //dateEl.innerHTML = data.alerts[0].start;
        conditionsEl.innerHTML = data.current.weather[0].description;
        tempEl.innerHTML = data.current.temp;
        humidEl.innerHTML = data.current.humidity;
        windEl.innerHTML = data.current.wind_speed;
        uvEl.innerHTML = data.current.uvi;

        // create for loop for days 1-5
        dateDayOne.innerHTML = data.daily[0].dt;
        descrDayOne.innerHTML = data.daily[0].weather[0].description;
        tempDayOne.innerHTML = data.daily[0].temp.day;
        humidDayOne.innerHTML = data.daily[0].humidity;
        windDayOne.innerHTML = data.daily[0].weather.wind_speed;
        uviDayOne.innerHTML = data.daily[0].uvi;
        }); 

}
    fetchButton.addEventListener('click', function(e) {
    e.preventDefault();
    getApi();
});

// convert date using moment.js
moment().format('MMMM Do YYYY, h:mm:ss a')