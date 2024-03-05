import React, { useState, useEffect } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png'; 
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
    const [diceValue, setDiceValue] = useState(emptyDice);
  
    const handleClick = () => {
      setDiceValue(emptyDice);
      setTimeout(() => {
        const diceImages = [dice1, dice2,dice3,dice4,dice5,dice6];
        const randomIndex = Math.floor(Math.random() * diceImages.length);
        setDiceValue(diceImages[randomIndex]);
      }, 1000);
    };
  
    return (
      <img
        src={diceValue}
        alt="Dice"
        onClick={handleClick}
        className="small-dice" 
      />
    );
  };
  
  export default Dice;