import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main }  from './Main';
import { Metrics } from "./metric";
//import { Header } from './Main'
import '../styles/App.css';

class App extends Component {
  //state = {isLoggedIn: ture}
  render(){
    return (

      <div className="app">
        <Switch>
          <Route path="/loaderio-550f528da6fcd0b0932f051693285a05" component = {Metrics}/>
          <Route path="/dashboard" component = { Main } />
        </Switch>
      </div>
    );
  }
}

export default App;
