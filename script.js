
const searchBtn = document.getElementById('searchBTN');

async function getData() {
    const searchArea = document.querySelector('input').value;
    // console.log(searchArea);

    const key = '9d9fe92f1e0c4998868102947242711';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchArea}&days=7&aqi=no&alerts=no`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    document.querySelector('.hero-section-1').innerHTML = `
        <div style="margin-block:30px">
            <p style="font-size:20px"><strong>${data.location.name}, ${data.location.region}, ${data.location.country}</strong></p>
        </div>
    <div style="display:flex; margin-block:15px">
        <div style="display:flex; flex-direction:column;  margin-right:17px; align-items:center; justify-content:center; height:90px;">
            <p><strong>${data.current.condition.text}</strong> </p>
            <img src=${data.current.condition.icon}>
        </div>
        <div>
            <p><strong>Temperature (ºC / ºF) : </strong>${data.current.temp_c} / ${data.current.temp_f}</p>
            <p><strong>Wind : </strong>${data.current.wind_mph} mph ${data.current.wind_dir}</p>
            <p><strong>Humidity : </strong>${data.current.humidity}</p>
        </div>
    </div>
            `
    document.querySelector('.hero-section-2').innerHTML = `
        <div>
            <br>
            <br>
            <br>
            <br>
            <p><strong>Condition </strong></p>
            <p><strong>Min/Max(ºC) </strong></p>
            <p><strong>Date </strong></p>
        </div>
        <div>
            <img src=${data.forecast.forecastday[1].day.condition.icon} >
            <p>${data.forecast.forecastday[1].day.condition.text}</p>
            <p>${data.forecast.forecastday[1].day.mintemp_c} / ${data.forecast.forecastday[1].day.maxtemp_c}</p>
            <p>Tommorow</p>
        </div>
        <div>
            <img src=${data.forecast.forecastday[2].day.condition.icon} >
            <p>${data.forecast.forecastday[2].day.condition.text}</p>
            <p>${data.forecast.forecastday[2].day.mintemp_c} / ${data.forecast.forecastday[2].day.maxtemp_c}</p>
            <p>${data.forecast.forecastday[2].date}</p>
        </div>
        <div>
            <img src=${data.forecast.forecastday[3].day.condition.icon} >
            <p>${data.forecast.forecastday[3].day.condition.text}</p>
            <p>${data.forecast.forecastday[3].day.mintemp_c} / ${data.forecast.forecastday[3].day.maxtemp_c}</p>
            <p>${data.forecast.forecastday[3].date}</p>
        </div>
        <div>
            <img src=${data.forecast.forecastday[4].day.condition.icon} >
            <p>${data.forecast.forecastday[4].day.condition.text}</p>
            <p>${data.forecast.forecastday[4].day.mintemp_c} / ${data.forecast.forecastday[4].day.maxtemp_c}</p>
            <p>${data.forecast.forecastday[4].date}</p>
        </div>
        <div>
            <img src=${data.forecast.forecastday[5].day.condition.icon} >
            <p>${data.forecast.forecastday[5].day.condition.text}</p>
            <p>${data.forecast.forecastday[5].day.mintemp_c} / ${data.forecast.forecastday[5].day.maxtemp_c}</p>
            <p>${data.forecast.forecastday[5].date}</p>
        </div>
        <div>
            <img src=${data.forecast.forecastday[6].day.condition.icon} >
            <p>${data.forecast.forecastday[6].day.condition.text}</p>
            <p>${data.forecast.forecastday[6].day.mintemp_c} / ${data.forecast.forecastday[6].day.maxtemp_c}</p>
            <p>${data.forecast.forecastday[6].date}</p>
        </div>
            `
}



