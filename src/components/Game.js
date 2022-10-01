import React, { useContext } from 'react';
import Deck from './Deck';
import GameInProgress from './GameInProgress';
import context from '../context/myContext';
import GameResults from './GameResults';

export default function Game() {
  const five = 5;
  const {
    deck, finishGame, setStartGame, startGame, giveIdToDeckCards,
  } = useContext(context);

  if (finishGame) {
    return <GameResults />;
  }

  if (startGame) {
    return <GameInProgress />;
  }
  return (
    <div className="deckContainer">
      <h1 className="deckTitle">Seu deck</h1>
      <Deck showRemove />
      <div className="playBtnContainer">
        <button
          type="button"
          className="playBtn"
          onClick={ () => {
            giveIdToDeckCards();
            setStartGame(true);
          } }
          disabled={ deck.length < five }
        >
          Jogar
        </button>
      </div>
    </div>
  );
}
