import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY } from './../constants/weathers';

const stateColumnName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        default:
            return 'sleet';
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateColumnName(weatherState)} size="2x" />);
};
const WeatherTemperature = ({ temperature, weatherState }) => 
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} °C`}</span>
    </div>
;

export default WeatherTemperature;