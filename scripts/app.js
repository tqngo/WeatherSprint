let locName = document.getElementById("locName");
let currentTemp = document.getElementById("currentTemp");
let feelsLike = document.getElementById("feelsLike");
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");
let windSpeed = document.getElementById("windSpeed");
let dayOne = document.getElementById("dayOne");
let dayTwo = document.getElementById("dayTwo");
let dayThree = document.getElementById("dayThree");
let dayFour = document.getElementById("dayFour");
let dayFive = document.getElementById("dayFive");
let tempHigh = document.getElementById("tempHigh");
let tempLow = document.getElementById("tempLow");



navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}
function errorFunc(error){
    console.log(error.message);
}



async function GetLocation(){
    const promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.961632&lon=-121.275604&units=imperial&appid=6323ec9d5f95a74e8be8d2dcf21d1e02')
    const data = await promise.json();


    


}

GetLocation();




async function GetWeather(){
    const promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.961632&lon=-121.275604&units=imperial&appid=6323ec9d5f95a74e8be8d2dcf21d1e02');
    const data = await promise.json();

    locName.innerText = data.name
    currentTemp.innerText = Math.round(data.main.temp) + "°";;
    weatherCon.innerText = data.weather[0].description;
    feelsLike.innerText = Math.round(data.main.feels_like) + "°";;
    maxTemp.innerText = Math.round(data.main.temp_max) + "°";;
    minTemp.innerText = Math.round(data.main.temp_min) + "°";;
    windSpeed.innerText = data.wind.speed;
    weatherIcon = data.weather[0].icon;
    


}

GetWeather();

async function GetForecast(){
    const promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=37.961632&lon=121.275604&units=imperial&appid=6323ec9d5f95a74e8be8d2dcf21d1e02')
    const data = await promise.json();


    dayOne.innerText = data.list[0].dt_txt
    dayTwo.innerText = data.list[9].dt_txt;
    dayThree.innerText = data.list[17].dt_txt;
    dayFour.innerText = data.list[25].dt_txt;
    dayFive.innerText = data.list[33].dt_txt;
    
    tempHigh.innerText = data.list[0].main.temp_max;
    tempLow.innerText = data.list[0].main.temp_min;

    tempHigh2.innerText = data.list[0].main.temp_max;
    tempLow2.innerText = data.list[0].main.temp_min;
    tempHigh3.innerText = data.list[0].main.temp_max;
    tempLow3.innerText = data.list[0].main.temp_min;
    tempHigh4.innerText = data.list[0].main.temp_max;
    tempLow4.innerText = data.list[0].main.temp_min;
    tempHigh5.innerText = data.list[0].main.temp_max;
    tempLow5.innerText = data.list[0].main.temp_min;


    console.log(data)


}

GetForecast();