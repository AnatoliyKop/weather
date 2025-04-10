import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {
    const message=useSelector(state=>state.message)
    const weather=useSelector(state=>state.weatherInfo)
    if(message){
        return (<div className={'infoWeath'}>{message}</div>)
    }

    return (
        <div className={'infoWeath'} >
            <p>Location: {weather.country}, {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure:{weather.pressure}</p>
            <p>Sunset: {new Date(weather.sunset*1000).toLocaleTimeString()}</p>
        </div>
    );
};

export default Weather;