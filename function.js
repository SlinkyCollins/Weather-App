const weatherIcon = document.getElementById('weather-icon');

const search = async () => {
  let input = searchInput.value;
  let apiKey = "907df6468ad5fa54a60bacca8533ed0f";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`
  let response = await fetch(url);

  if (response.status == 404) {
    document.getElementById("error").style.display = "block";
    document.getElementById("weather").style.display = "none";
  } else if (input==""){
    result.innerHTML = `Please enter a city name &times;`;
  }else {
    result.innerHTML=""
    searchInput.value = ""
    let data = await response.json();
    console.log(data);
    // document.getElementById("clouds").innerHTML = data.clouds.data;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp-273) + "°C";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
      weatherIcon.src = "Images/humidity.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Images/mist.png";
    }

    // document.getElementById("pressure").innerHTML = data.main.pressure;
    document.getElementById("weatherDesc").innerHTML = data.weather[0].description;
    document.getElementById("country").innerHTML = data.sys.country;

    document.getElementById("weather").style.display = "block";
    document.getElementById("error").style.display = "none";
  }
};



