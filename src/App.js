import React from 'react';
import CardsList from './components/CardsList';
import CreateCard from './components/CreateCard';
import FiltrosDeBusca from './components/FiltrosDeBusca';
import Provider from './context/myProvider';

function App() {
  return (
    <Provider>
      <>
        <CreateCard />
        <FiltrosDeBusca />
        <CardsList />
      </>
    </Provider>
  );
}

export default App;
