import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as diceConsts from './components/dieComponents/diceConsts'
import {listOfDice} from './components/dieComponents/diceConsts'
import {rollTheDice} from './components/dieComponents/dieRoller'

class App extends Component {
  

  render() {
    console.log(diceConsts.dice)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
