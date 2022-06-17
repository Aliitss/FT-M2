import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';

  //const APIKEY = process.env.REACT_APP_WEATHER_API_KEI;

export default function App() {
  const [cities, setCities] = useState([]);

const apiKey = "4ae2636d8dfbdc3044bede63951a019b"; // esta es la easy way pero puede generar errores y hackeos (creo) por eso usamos la siguiente forma...

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if (cities.find((c) => c.id === ciudad.id)) {
            alert("La ciudad ya esta en la lista");
          } else {
          setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
  

  return (<div className='fondo'>  
    <div className="App">
      <Nav onSearch={onSearch} />
        
        <Cards cities={cities} onClose={onClose} />
    </div>
    </div>);
}
