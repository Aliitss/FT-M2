import React from 'react';

import Card from './Card';
import stylesDos from './temps.module.css';


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return  (<div className={stylesDos.cardsRow}> {props.cities.map((city) => <Card
  max={city.main.temp_max}
  min={city.main.temp_min}
  name={city.name}
  img={city.weather[0].icon}
  onClose={() => alert(city.name)}
  key = {city.id}
  />)} </div>
  );

};