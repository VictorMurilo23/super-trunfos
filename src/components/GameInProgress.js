import React, { useContext, useEffect } from 'react';
import context from '../context/myContext';
import CompareCards from './CompareCards';
import Deck from './Deck';

export default function GameInProgress() {
  const { createOpponentDeck, opponentDeck, compare, finishGame } = useContext(context);

  useEffect(() => {
    createOpponentDeck();
  }, []);

  if (!opponentDeck[0] && !finishGame) {
    return (<h1>Loading...</h1>);
  }

  if (compare) {
    return (<CompareCards />);
  }

  return (
    <div className="chooseCard">
      <h2>Escolha uma carta</h2>
      <Deck showRemove={ false } />
    </div>
  );
}
