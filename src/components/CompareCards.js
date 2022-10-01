import React, { useContext } from 'react';
import context from '../context/myContext';
import Card from './Card';
import ChooseAttribute from './ChooseAttribute';

export default function CompareCards() {
  const { playerCard,
    opponentCard,
    attribute,
    playAgain,
    setScore,
    saveAttribute,
    opponentTurn,
    setOpponentTurn,
    convertAttr } = useContext(context);

  if (opponentTurn) {
    const attributes = ['Força', 'Agilidade', 'Inteligência'];
    const randomAttr = attributes[Math.floor(Math.random() * attributes.length)];
    saveAttribute(randomAttr);
  }

  const verifyWinner = (attr) => {
    if (playerCard.superTrunfo === true && opponentCard.superTrunfo === true) {
      return 'Empate';
    }
    if (playerCard[attr] > opponentCard[attr] || playerCard.superTrunfo === true) {
      return 'Você ganhou';
    }
    if (playerCard[attr] < opponentCard[attr] || opponentCard.superTrunfo === true) {
      return 'Você perdeu';
    }
    return 'Empate';
  };

  if (!playerCard) {
    return (<h1>Loading...</h1>);
  }

  if (attribute === '') {
    return (<ChooseAttribute />);
  }

  return (
    <div className="compareContainer">
      <h1>
        {
          verifyWinner(attribute)
        }
      </h1>
      <h3>
        {
          `Atributo comparado: ${convertAttr(attribute)}`
        }
      </h3>
      <div className="compareCard">
        <Card cardInfo={ playerCard } />
        <Card cardInfo={ opponentCard } />
      </div>
      <button
        type="button"
        className="comparePlayAgainBtn"
        onClick={ () => {
          const verify = verifyWinner(attribute);
          setOpponentTurn((prevState) => !prevState);
          if (verify === 'Você ganhou') {
            setScore((prevState) => prevState + 1);
          }
          playAgain(playerCard, opponentCard);
        } }
      >
        Nova rodada
      </button>
    </div>
  );
}
