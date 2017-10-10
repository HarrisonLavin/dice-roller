import React, { Component } from 'react';
import {rollTheDice} from '../dieRollerActions';

class diceInput extends Component {
  
    constructor(){
        super()
        this.state = {
            value: "",
            results: ""
        };
    }


    handleTextEntry = (event)=>{
        let text = event.target.value;
        this.setState({value: text})
    }

    onSubmit = () =>{
        let rollResults;
        this.setState({results: rollResults});
    }


  render() {
    return (
     <div>
        <p>AAAH</p>
        <form onSubmit={this.onSubmit}>
            <label> Number and type of Dice</label>
            <br/>
            <input type="text" onChange={this.handleTextEntry}/>
            <input type="submit" value="Roll"/>
        </form>
        <p>{this.state.results}</p>
     </div>
    );
  }
}

export default diceInput;
