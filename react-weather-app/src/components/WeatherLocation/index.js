import React, { Component } from 'react'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transform-weather';
import getURLWeatherByCity from './../../services/get-url-weather-by-city';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        const apiWeather = getURLWeatherByCity(this.state.city);

        fetch(apiWeather)
        .then( resolve => resolve.json())
        .then( data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weather-location-cont">
                <Location city={city}></Location>
                {   data ? 
                        <WeatherData data={data}></WeatherData> : 
                        <CircularProgress size={50}></CircularProgress>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
};

export default WeatherLocation;