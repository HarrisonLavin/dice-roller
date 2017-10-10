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
        let rollResults="DICE ROLLED";
        this.setState({results: rollResults});
    }


  render() {
    return (
     <div>
        <p>AAAH</p>
            <label> Number and type of Dice</label>
            <br/>
            <input type="text" onChange={this.handleTextEntry}/>
            <input type="button" value="Roll" onClick={this.onSubmit}/>
        <p>{this.state.results} {this.state.value}</p>
     </div>
    );
  }
}

export default diceInput;
