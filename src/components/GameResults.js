import React, { useContext } from 'react';
import context from '../context/myContext';

export default function GameResults() {
  const winCondition = 3;
  const { score, resetGame } = useContext(context);
  return (
    <div className="gameResults">
      {
        score >= winCondition ? <h1>Você ganhou!!!</h1> : <h1>Que pena, você perdeu.</h1>
      }
      <button
        type="button"
        onClick={ () => {
          resetGame();
        } }
      >
        Jogar novamente
      </button>
    </div>
  );
}
