import React, { useContext } from 'react';
import CardsList from './components/CardsList';
import CreateCard from './components/CreateCard';
import FiltrosDeBusca from './components/FiltrosDeBusca';
import Game from './components/Game';
import context from './context/myContext';

function App() {
  const { startGame } = useContext(context);
  return (
    <>
      {
        !startGame && (
          <>
            <CreateCard />
            <FiltrosDeBusca />
            <CardsList />
          </>
        )
      }
      <Game />
    </>
  );
}

export default App;
