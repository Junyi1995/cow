import React, { Component } from 'react';
import { CowTemperature } from "./CowTemperature";
//import { Header } from './Main'
import '../styles/App.css';

class App extends Component {
  //state = {isLoggedIn: ture}
  render(){
    return (
      <div className="App">
        <CowTemperature/>
      </div>
    );
  }
}

export default App;
