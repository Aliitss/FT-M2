import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiKey = 'aa47f2630712405ff6f99647f072e781';

export default function Ciudad() {
  const { ciudadId } = useParams();

  const [city, setCity] = useState();

  useEffect (() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${apiKey}&units=metric`
    )
    .then((response)=> {
      console.log(response.data);
      const ciudad = {
        min: Math.round(response.data.main.temp_min),
        max: Math.round(response.data.main.temp_max),
        img: response.data.weather[0].icon,
        id: response.data.id,
        wind: response.data.wind.speed,
        temp: response.data.main.temp,
        name: response.data.name,
        weather: response.data.weather[0].main,
        clouds: response.data.clouds.all,
        latitud: response.data.coord.lat,
        longitud: response.data.coord.lon
      };
      setCity(ciudad);
    }).catch(()=> {
      setCity(null);
    });
  }, [ciudadId])

    return (
      <div className="ciudad">
          {city === undefined ? (
          <div className="container">
            <h1> Cargando... </h1>
          </div>
          ) : city === null ? (
          <div className="container">
            <h1> No se encontró la ciudad </h1>
          </div>
          ) : (         
          <div className="container">
            <h2>{city.name}</h2>
          <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
          </div>
        </div>)}
      </div>
  )
}

