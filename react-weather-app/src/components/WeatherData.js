import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { SLEET } from './../constants/weathers';

const WeatherData = () => 
    <div>
        Weather Data
        <WeatherTemperature temperature={20} weatherState={SLEET}/>
        <WeatherExtraInfo humidity={80} wind={'10m/s'} />
    </div>
;

export default WeatherData;