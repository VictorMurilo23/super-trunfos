import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nomeDaCarta: '',
      descricaoDaCarta: '',
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      imagemDaCarta: '',
      raridade: 'normal',
      superTrunfo: false,
      oBotaoEstaDesabilitado: true,
      // cartasSalvadas: [],
    };
  }

  resetarInfoCarta = () => {
    this.setState({
      nomeDaCarta: '',
      descricaoDaCarta: '',
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      imagemDaCarta: '',
      raridade: 'normal',
    });
  }

  verificaAtributos = () => {
    const { atributo1, atributo2, atributo3 } = this.state;
    const maximoCada = 90;
    if (atributo1 > maximoCada || atributo2 > maximoCada || atributo3 > maximoCada) {
      this.setState({
        oBotaoEstaDesabilitado: true,
      });
    }
    if (atributo1 < 0 || atributo2 < 0 || atributo3 < 0) {
      this.setState({
        oBotaoEstaDesabilitado: true,
      });
    }
  }

  verificaTotalAtributos = () => {
    const { atributo1, atributo2, atributo3 } = this.state;
    const mafximo = 210;
    const somaAtributos = Number(atributo1) + Number(atributo2) + Number(atributo3);
    if (somaAtributos > mafximo) {
      this.setState({
        oBotaoEstaDesabilitado: true,
      });
    } else {
      this.setState({
        oBotaoEstaDesabilitado: false,
      }, () => { this.verificaTudo(); });
    }
  }

  verificaDescricaoNomeImagem = () => {
    const { nomeDaCarta, descricaoDaCarta, imagemDaCarta } = this.state;
    if (nomeDaCarta.split(' ')[0] !== ''
      && descricaoDaCarta.split(' ')[0] !== ''
      && imagemDaCarta.split(' ')[0] !== '') {
      this.setState({
        oBotaoEstaDesabilitado: false,
      });
    } else {
      this.setState({
        oBotaoEstaDesabilitado: true,
      });
    }
  }

  verificaTudo = () => {
    this.verificaDescricaoNomeImagem();
    this.verificaAtributos();
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.verificaTotalAtributos();
    });
  }

  salvarCarta = (event) => {
    event.preventDefault();
    // const {
    //   nomeDaCarta,
    //   descricaoDaCarta,
    //   atributo1,
    //   atributo2,
    //   atributo3,
    //   imagemDaCarta,
    //   raridade,
    //   superTrunfo,
    // } = this.state;

    // const obj = {
    //   nome: nomeDaCarta,
    //   desc: descricaoDaCarta,
    //   atr1: atributo1,
    //   atr2: atributo2,
    //   atr3: atributo3,
    //   img: imagemDaCarta,
    //   rari: raridade,
    //   superTrun: superTrunfo,
    // };
    // this.setState({
    //   cartasSalvar: [obj],
    // });
    this.resetarInfoCarta();
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
      oBotaoEstaDesabilitado,
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
          isSaveButtonDisabled={ oBotaoEstaDesabilitado }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.salvarCarta }
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
