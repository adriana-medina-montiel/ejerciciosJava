const UrlBase="https://api.openweathermap.org/data/2.5/weather";
const ApiKey="44a44c989633f62250e075b029bd53d5";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');


const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat,lon, apiKey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${ apiKey }`;
    const clima = await fetchApi(url);
    console.log(clima)
    const temperature = (clima.main.temp -273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    pintaTemp(temperature);
    pintaFondo(temperature);
    
}

async function getClimaByCity(city, apiKey){
    const url = ` ${UrlBase}?q=${ city}&appid=${ apiKey }`;
    const clima = await fetchApi(url);
    console.log(clima)
    const temperature = (clima.main.temp -273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    pintaTemp(temperature);
    pintaFondo(temperature);

}

function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if ( temp <10){
        h3.innerHTML =` ${ temp} °c ⛄`
    }else if (temp <23){
        h3.innerHTML = ` ${ temp } °c 🌥🌥`
    }else {
        h3.innerHTML = `${ temp } °c ☀🌞`
    }
}

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp <10 ){
        fondo.style.background = '#a8f3da';
    }else if (temp < 22){
        fondo.style.background='yellow';
    } else{
        fondo.style.background = 'rgb(255, 189, 127)';
    }
}

navigator.geolocation.getCurrentPosition(
    possiton=>{
        const lat = possiton.coords.latitude;
        const lon = possiton.coords.longitude;
        getClima(lat, lon, ApiKey);
    }
)

btnCiudad.addEventListener('click', () =>{
    const city = inputCity.value;
    if(city){
        getClimaByCity(city, ApiKey);
    }
})