import React, { useContext } from 'react';
import context from '../context/myContext';
import Card from './Card';
import ChooseAttribute from './ChooseAttribute';

export default function CompareCards() {
  const { playerCard,
    opponentCard,
    attribute,
    playAgain,
    updateScore } = useContext(context);

  const verifyWinner = (attr) => {
    if (playerCard[attr] > opponentCard[attr]) {
      return 'Você ganhou';
    }
    if (playerCard[attr] < opponentCard[attr]) {
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
    <div>
      <h1>
        {
          verifyWinner(attribute)
        }
      </h1>
      <Card cardInfo={ playerCard } />
      <Card cardInfo={ opponentCard } />
      <button
        type="button"
        onClick={ () => {
          const verify = verifyWinner(attribute);
          if (verify === 'Você ganhou') {
            updateScore();
          }
          playAgain(playerCard, opponentCard);
        } }
      >
        Nova rodada
      </button>
    </div>
  );
}
