import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Santiago del Estero,ar",
  "San Francisco,us",
  "Bogota,col",
];

class App extends Component { //Class component
  render() { //es lo que permite dibujar este componente
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
