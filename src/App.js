import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <Form
        cardName=""
        cardDescription=""
        cardAttr1=""
        cardAttr2=""
        cardAttr3=""
        cardImage=""
        cardRare=""
        cardTrunfo
        hasTrunfo
        isSaveButtonDisabled
        onInputChange={ () => {} }
        onSaveButtonClick={ () => {} }
      />
    );
  }
}

export default App;
