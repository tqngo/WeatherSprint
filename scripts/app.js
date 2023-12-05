// let locName = document.getElementById("locName");
// let currentTemp = document.getElementById("currentTemp");
// let feelsLike = document.getElementById("feelsLike")
// let maxTemp = document.getElementById("maxTemp");
// let windSpeed = document.getElementById("windSpeed")

navigator.geolocation.getCurrentPosition(success, errorFunc);


function success(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}
function errorFunc(error){
    console.log(error.message);
}




async function getWeather(){
    const promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.961632&lon=-121.275604&units=imperial&appid=6323ec9d5f95a74e8be8d2dcf21d1e02');
    const data = await promise.json();

    locName.innerText = data.name
    currentTemp.innerText = Math.round(data.main.temp)
    weatherCon.innerText = data.weather[0].description
    feelsLike.innerText = Math.round(data.main.feels_like)
    maxTemp.innerText = Math.round(data.main.temp_max)
    minTemp.innerText = Math.round(data.main.temp_min)
    windSpeed.innerText = Math.round(data.wind.speed)


}

getWeather();


