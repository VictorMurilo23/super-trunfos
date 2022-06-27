import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FiltrosDeBusca from './components/FiltrosDeBusca';

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
      temTrunfo: false,
      oBotaoEstaDesabilitado: true,
      cartasSalvadas: [],
      buscarPorNome: '',
      buscarPorRaridade: '',
      procurandoPorTrunfo: false,
    };
  }

  verificaSeTemTrunfo = () => {
    const { cartasSalvadas } = this.state;
    const trun = cartasSalvadas.some((element) => element.superTrun === true);
    this.setState({
      temTrunfo: trun,
    });
  }

  resetarInfoCarta = () => {
    this.setState({ nomeDaCarta: '',
      descricaoDaCarta: '',
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      imagemDaCarta: '',
      raridade: 'normal',
      superTrunfo: false,
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

  handleChangeFilters = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  salvarCarta = (event) => {
    event.preventDefault();
    const {
      nomeDaCarta, descricaoDaCarta, atributo1, atributo2, atributo3, imagemDaCarta,
      raridade, superTrunfo, cartasSalvadas } = this.state;

    const infoCartaSalva = {
      nome: nomeDaCarta,
      desc: descricaoDaCarta,
      atr1: atributo1,
      atr2: atributo2,
      atr3: atributo3,
      img: imagemDaCarta,
      rari: raridade,
      superTrun: superTrunfo,
    };

    this.setState({
      cartasSalvadas: [...cartasSalvadas, infoCartaSalva],
    }, () => { this.verificaSeTemTrunfo(); });

    this.resetarInfoCarta();
  }

  render() {
    const {
      nomeDaCarta, descricaoDaCarta, atributo1, atributo2, atributo3, imagemDaCarta,
      raridade, superTrunfo, oBotaoEstaDesabilitado,
      temTrunfo, cartasSalvadas, buscarPorNome, buscarPorRaridade, procurandoPorTrunfo,
    } = this.state;

    const filtro = procurandoPorTrunfo === false ? cartasSalvadas
      .filter((carta) => {
        if (buscarPorNome === '') {
          return carta;
        }
        return carta.nome.toLowerCase().includes(buscarPorNome.toLowerCase());
      })
      .filter((carta) => {
        if (buscarPorRaridade === 'todas' || buscarPorRaridade === '') {
          return carta;
        }
        return carta.rari === buscarPorRaridade;
      }) : cartasSalvadas.filter((carta) => carta.superTrun === true);

    return (
      <>
        <div className="criacaoDaCarta">
          <div className="formulario">
            <Form
              cardName={ nomeDaCarta }
              cardDescription={ descricaoDaCarta }
              cardAttr1={ atributo1 }
              cardAttr2={ atributo2 }
              cardAttr3={ atributo3 }
              cardImage={ imagemDaCarta }
              cardRare={ raridade }
              cardTrunfo={ superTrunfo }
              hasTrunfo={ temTrunfo }
              isSaveButtonDisabled={ oBotaoEstaDesabilitado }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.salvarCarta }
            />
          </div>
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
        </div>

        <div className="listaDeCartasTitulo">
          <h1>Lista de cartas</h1>
        </div>

        <div>
          <FiltrosDeBusca
            onInputChange={ this.handleChangeFilters }
            buscaSuperTrunfo={ procurandoPorTrunfo }
          />
        </div>

        <div className="listaDeCartas">
          {
            filtro.map((carta, index) => (
              <div key={ carta.nome } className="cartaContainer">
                <Card
                  cardName={ carta.nome }
                  cardDescription={ carta.desc }
                  cardAttr1={ carta.atr1 }
                  cardAttr2={ carta.atr2 }
                  cardAttr3={ carta.atr3 }
                  cardImage={ carta.img }
                  cardRare={ carta.rari }
                  cardTrunfo={ carta.superTrun }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => {
                    cartasSalvadas.splice(index, 1);
                    this.verificaSeTemTrunfo();
                  } }
                >
                  Deletar
                </button>
              </div>))
          }
        </div>
      </>
    );
  }
}

export default App;
