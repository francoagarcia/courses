import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//functional component
const Location = ({ city }) => { //destructuring //const { city } = props; 
    return (
        <div className="location-cont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;