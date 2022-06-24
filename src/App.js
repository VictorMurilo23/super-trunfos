import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nomeDaCarta: '',
      descricaoDaCarta: '',
      atributo1: '',
      atributo2: '',
      atributo3: '',
      imagemDaCarta: '',
      raridade: 'normal',
      superTrunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nomeDaCarta,
      descricaoDaCarta,
      atributo1,
      atributo2,
      atributo3,
      imagemDaCarta,
      raridade,
      superTrunfo,
    } = this.state;

    return (
      <>
        <Form
          cardName={ nomeDaCarta }
          cardDescription={ descricaoDaCarta }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagemDaCarta }
          cardRare={ raridade }
          cardTrunfo={ superTrunfo }
          hasTrunfo
          isSaveButtonDisabled
          onInputChange={ this.handleChange }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName={ nomeDaCarta }
          cardDescription={ descricaoDaCarta }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagemDaCarta }
          cardRare={ raridade }
          cardTrunfo={ superTrunfo }
        />
      </>
    );
  }
}

export default App;
