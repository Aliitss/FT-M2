import React from 'react';
import estilos from './city.module.css';
import style from './temps.module.css';


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return <div className={estilos.estiloCard}>
    <button className={estilos.estiloDeBoton} onClick={onClose}> x </button>
    <div> 
      <h2> {name} </h2>  
      </div>
      <div className={style.temp}>
    <div>
      <span>Min </span>
      <span>{min}</span>
      </div>
    <div>
      <span>Max </span>
      <span>{max}</span>
    </div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>
    </div>
    <div>
    </div>
  </div>
};