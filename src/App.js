import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as diceConsts from './diceConsts'
import {rollDie, listOfDice} from './diceConsts'

class App extends Component {
  
  rollTheDice(numberOfDice,typeOfDie){
    if(typeOfDie in listOfDice){
      let results = []
      if(numberOfDice > 0){
        results.push(typeOfDie[Math.floor(Math.random()*typeOfDie.length)])
        rollTheDice(numberOfDice - 1, typeOfDie)
      } else {
        return results;
      }
    } else{
      console.log("Invalid die: " + type);
    }  
  }

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
