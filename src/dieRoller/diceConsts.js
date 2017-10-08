export const  threat="TH";
export const  failure="FA";
export const  despair="DR";
export const  success="SU";
export const  triumph="TR";
export const  advantage="AD";
export const  blank=" ";
export const  setback="S";
export const  difficulty="D";
export const  challenge="C";
export const  boost="B";
export const  ability="A";
export const  proficiency="P";
export const  force="F";
export const  lightSide="LS";
export const  darkSide="DS";

     
export const proficiencyDie = [
    `${triumph}`,
    `${success,success}`,
    `${success}`,
    `${advantage, advantage}`,
    `${advantage, success}`,
    `${advantage}`,
    `${advantage, success}`,
    `${advantage, success}`,
    `${success, success}`,
    `${success}`,
    `${advantage,advantage}`,
    `${blank}` 

]
export const abilityDie=[ 
    `${blank}`,
    `${advantage}`,
    `${success}`,
    `${advantage,advantage}`,
    `${advantage}`,
    `${success}`,
    `${advantage,success}`,
    `${success,success}` 
]

export const challengeDie=[ 
    `${blank}`,
    `${despair}`,
    `${failure,threat}`,
    `${threat,threat}`,
    `${threat}`,
    `${failure,failure}`,
    `${failure}`,
    `${failure, failure}`,
    `${threat}`,
    `${failure}`,
    `${threat,failure}`,
    `${threat,threat}` 
]

 export const difficultyDie=[ 
    `${blank}`,
    `${threat}`,
    `${failure,failure}`,
    `${threat,failure}`,
    `${threat}`,
    `${threat}`,
    `${threat,threat}`,
    `${failure}` 
 ]

 export const boostDie=[ 
    `${blank}`,
    `${blank}`,
    `${advantage}`,
    `${success}`,
    `${success,advantage}`,
    `${advantage,advantage}` 
 ]

 export const setbackDie=[ 
    `${blank}`,
    `${blank}`,
    `${threat}`,
    `${threat}`,
    `${failure}`,
    `${failure}` 
 ]

 export const forceDie=[ 
    `${darkSide}`,
    `${darkSide}`,
    `${darkSide}`,
    `${darkSide,darkSide}`,
    `${lightSide, lightSide}`,
    `${lightSide}`,
    `${lightSide}`,
    `${lightSide,lightSide}`,
    `${lightSide,lightSide}`,
    `${darkSide}`,
    `${darkSide}`,
    `${darkSide}` 
]

export const listOfDice = {
    P: proficiencyDie,
    A: abilityDie,
    S: setbackDie,
    D: difficultyDie,
    C: challengeDie,
    B: boostDie,
    F: forceDie
}
