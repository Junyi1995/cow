import React, { Component } from 'react';
import { CowTemperature } from "./CowTemperature";
import { BarnTemperature } from "./BarnTemperature";
import { OutsideTemperature } from "./OutsideTemperature";
import { Route } from 'react-router-dom';
import  Metric  from "./metric";
//import { Header } from './Main'
import '../styles/App.css';

class App extends Component {
  //state = {isLoggedIn: ture}
  render(){
    return (
      <div className="wrapper">
        <div className="header">
          <img src="../../assets/images/cow.png"
               alt=""
          />
          <div className="date-range">06/05/2018-07/05/2018</div>
        </div>
        <div className="split-bar">Overview</div>
        {/*data cube*/}
        <div className="data-wrapper">
          <CowTemperature/>
          <BarnTemperature/>
          <OutsideTemperature/>
        </div>
        <div className="route">
          <Route path="/loaderio-780e704a35ef881a24df1fd93fe75962" component = {Metric}/>
        </div>
      </div>
    );
  }
}

export default App;
