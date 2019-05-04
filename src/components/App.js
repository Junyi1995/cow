import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  Main  from './Main';
import  Metric  from "./metric";
//import { Header } from './Main'
import '../styles/App.css';

class App extends Component {
  //state = {isLoggedIn: ture}
  render(){
    return (

      <div className="app">
        <Switch>
          <Route path="/loaderio-780e704a35ef881a24df1fd93fe75962/" component = {Metric}/>
          <Route path="/dashboard" component = { Main } />
        </Switch>
      </div>
    );
  }
}

export default App;
