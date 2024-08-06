const apiKey = '7081095e13d9232dc3f971ae065b0126';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

searchBtn.addEventListener('click', ()=>{
 checkWeather(searchBox.value);
})
async function checkWeather(city){
 const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 let data = await response.json();

 console.log(data);

 document.querySelector('.cityName').innerHTML = data.name;
 document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ '℃';
 document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
 document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

checkWeather(city);

