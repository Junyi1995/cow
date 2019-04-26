import React, { Component } from 'react';
import { CowTemperature } from "./CowTemperature";
import { BarnTemperature } from "./BarnTemperature";
import { OutsideTemperature } from "./OutsideTemperature";
//import { Header } from './Main'
import '../styles/App.css';

class App extends Component {
  //state = {isLoggedIn: ture}
  render(){
    return (
      <div className="App">
        <CowTemperature/>
        <BarnTemperature/>
        <OutsideTemperature/>
      </div>
    );
  }
}

export default App;
