import * as diceConsts from './diceConsts'
import {listOfDice} from './diceConsts'

export const rollTheDice = (numberOfDice,typeOfDie)=>{
    if(typeOfDie in listOfDice){
      let results = []
      if(numberOfDice > 0){
        results.push(typeOfDie[Math.floor(Math.random()*typeOfDie.length)])
        rollTheDice(numberOfDice - 1, typeOfDie)
      } else {
        return results;
      }
    } else{
      console.log("Invalid die: " + typeOfDie);
    }  
  }