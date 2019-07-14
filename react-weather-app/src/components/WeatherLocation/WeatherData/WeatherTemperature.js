import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SUN, RAIN, SNOW, DRIZZLE, THUNDER } from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers",
    [THUNDER]: "day-thunderstore",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    
    if (icon){
        return (<WeatherIcons className="wicon"  name={icon} size={sizeIcon} />);
    } 
    return (<WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />);
};

const WeatherTemperature = ({ temperature, weatherState }) => 
    <div className="weather-temperature-cont">
        { getWeatherIcon(weatherState) }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperature-type" >{`°C`}</span>
    </div>
;

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemperature;