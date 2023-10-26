import React, { useState } from 'react';
import getWeatherData from '../service/weather.js'


export default function Header() {
  const [weatherData, setWeatherData] = useState({});
  const[city , setCity] = useState("London");

    const fetchweatherdata = async ()=>{
       const data= await getWeatherData('weather' , {q:"London"});
        setWeatherData(data);
        console.log(data);
        console.log(weatherData);
      }
  return (
    <div>
        <div>
      <div></div>
      <div></div>
      <form>
        <input
       type="text"
        name="" 
        id="" 
        
        onChange={(e)=>{
          setCity(e.target.value);
        }}
        />
        <button onClick={(e)=>{
          e.preventDefault();
          fetchweatherdata();
        }}>submit</button>
      </form>
      </div>
    </div>
  )
}
