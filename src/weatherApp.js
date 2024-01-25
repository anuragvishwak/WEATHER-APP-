import React, { useState } from 'react'
import './weatherApp.css'
import { FaSearchLocation } from "react-icons/fa";
import  axios from 'axios'
import ShowTemp from './temp';

function WeatherApp() {
    
     const [city, setCity] = useState('')
     const [data, setData] = useState({
        intially:'enter the location',
        name:'',
        description: '',
        humidity: null,
        pressure: null,
        sea_level: null,
        temp: null,
        temp_max: null,
        country: ''
         
}) 

     const handleClick = ()=>{
         axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f23b56e8dcad8299bf4e5a2a3fc932b`)     
         .then((response)=>{
            console.log(response.data)
            setData({description: response.data.weather[0],
            humidity:response.data.main.humidity,
            pressure: response.data.main.pressure,
            temp: response.data.main.temp,
            temp_max: response.data.main.temp_max,
            country: response.data.sys.country,
            name: response.data.name })
         })
     }

  return (
    <>
    <div className='parentDiv'>
        <h1>WEATHER APP USING API </h1>
        <input 
        onChange={(event)=>{setCity(event.target.value)}} 
        value={city} className='designingInput' 
        placeholder='enter location to see...'>
        </input>

        <button     
        type='submit'
        onClick={handleClick} 
        className='designingButton'>
        <FaSearchLocation/>
        </button>
        <h2>{data.intially}</h2>
        <h3>TEMPERATURE: {Math.round(data.temp-273.15)} </h3>
        <h3>CITY: {data.name}</h3>
        <h4>COUNTRY: {data.country}</h4>
        <h4> HUMIDITY: {data.humidity}</h4>
    </div>
     
    </>

  )
}

export default WeatherApp