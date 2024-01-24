const apiKey = "53302ce11789e3b2ee960b1b6954dd67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");
const weatherImg = document.querySelector(".img");
const container = document.querySelector(".container");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".center").style.display = "block";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".degree").innerHTML = Math.round(data.main.temp); //yuvarlama
    document.querySelector(".percent").innerHTML = data.main.humidity;
    document.querySelector(".speed").innerHTML = data.wind.speed;

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png"
        container.removeAttribute('class');
        container.classList.add("container","bg-clouds");
    }
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png"
        container.removeAttribute('class');
        container.classList.add("container","bg-clear");
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rainy.png"
        container.removeAttribute('class');
        container.classList.add("container","bg-rainy");
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png"
        container.removeAttribute('class');
        container.classList.add("container","bg-drizzle");
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png"
        container.removeAttribute('class');
        container.classList.add("container","bg-mist");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".center").style.display = "none";
    }

    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
checkWeather();

//https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=53302ce11789e3b2ee960b1b6954dd67&units=metric