import { baseURL, apiKey } from './../constants/api-urls'

const getURLWeatherByCity = city => {
    return `${baseURL}?q=${city}&appid=${apiKey}`;
};

export default getURLWeatherByCity;