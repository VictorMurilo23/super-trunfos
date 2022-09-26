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
    return (<h1>Loadindawdjwaig...</h1>);
  }

  if (compare) {
    return (<CompareCards />);
  }

  return (
    <div>
      <h2>Escolha uma carta</h2>
      <Deck showRemove={ false } />
    </div>
  );
}
/*
1 - Verificar de quem é a vez
2 - Cada um pega uma carta
3 - O jogador da vez escolhe um atributo
4 - Compara os atributos e quem tiver o maior ganha.
5 - Remove a carta usada do deck
6 - Volta pro passo um e o jogo acaba quando não tiver mais cartas.
*/
