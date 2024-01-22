let input = document.querySelector("input")
let input_button = document.querySelector("button")
let city_name = document.querySelector(".city")
let temp = document.querySelector(".temp")
let sky_condition = document.querySelector(".sky_condition")
let humidity = document.querySelector(".moisture")
let wind_speed = document.querySelector(".Air_speed")
let img = document.querySelector(".condition")



input_button.addEventListener("click" , function(){ 
    weather(input.value)
})
function weather(city) {
const api = new XMLHttpRequest();
api_key = "44baee82b64c09284b8e60aacc646647"
base_url = "http://api.openweathermap.org/data/2.5/weather?"
// city = "Bahawalnagar"
complete_url = base_url + "appid=" + api_key + "&q=" + city
api.open("GET" , complete_url)
api.onreadystatechange = function(){
console.log(api.readyState);
    if (api.readyState === 4) {
        console.log(this.responseText);
        const Api_data = JSON.parse(this.responseText)
        temp.innerHTML = (Math.round(Api_data.main.temp - 273.15)) + "°C"
        sky_condition.innerHTML = Api_data.weather[0].main
        humidity.innerHTML = Api_data.main.humidity
        wind_speed.innerHTML = Api_data.wind.speed
        city_name.innerHTML = Api_data.name
        if (Api_data.weather[0].main === "Clear") {
            img.style.backgroundImage = "url('./images/clear.png')"
        }
        else if (Api_data.weather[0].main === "Clouds") {
            img.style.backgroundImage = "url('./images/clouds.png')"
        }
        else if (Api_data.weather[0].main === "Rain") {
            img.style.backgroundImage = "url('./images/rain.png')"
        }
        else if (Api_data.weather[0].main === "Drizzle") {
            img.style.backgroundImage = "url('./images/dizzle.png')"
        }
        else if (Api_data.weather[0].main === "Mist") {
            img.style.backgroundImage = "url('./images/mist.png')"
        }
        else if (Api_data.weather[0].main === "Snow") {
            img.style.backgroundImage = "url('./images/snow.png')"
        }
    }
}
api.send()
}