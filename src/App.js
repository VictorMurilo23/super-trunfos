import React from 'react';
import CardsList from './components/CardsList';
import CreateCard from './components/CreateCard';
import FiltrosDeBusca from './components/FiltrosDeBusca';
import Game from './components/Game';
import Provider from './context/myProvider';

function App() {
  return (
    <Provider>
      <>
        <CreateCard />
        <FiltrosDeBusca />
        <CardsList />
        <Game />
      </>
    </Provider>
  );
}

export default App;
