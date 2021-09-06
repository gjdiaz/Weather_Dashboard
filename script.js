// borrowed from activity 9 Demo Dynamic
// reference https://w3collective.com/fetch-display-api-data-javascript/
// var weatherContainer = document.getElementById('weather');
var fetchButton = document.getElementById('submit');

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.715&lon=-117.1625&appid=b07cfedc5a378ff86010f8868a197741';

    fetch(requestUrl, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        });
}
fetchButton.addEventListener('click', getApi);

