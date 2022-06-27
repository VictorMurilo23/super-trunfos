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
      temTrunfo: false,
      oBotaoEstaDesabilitado: true,
      cartasSalvadas: [],
      buscarPorNome: '',
      buscarPorRaridade: '',
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
      raridade, superTrunfo, oBotaoEstaDesabilitado, temTrunfo, cartasSalvadas,
    } = this.state;

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
          <h2>Filtros de busca</h2>
          <input
            type="text"
            placeholder="Nome da carta"
            data-testid="name-filter"
            onChange={ (event) => {
              this.setState({
                buscarPorNome: event.target.value,
              });
            } }
          />

          <select
            onChange={ (event) => {
              this.setState({
                buscarPorRaridade: event.target.value,
              });
            } }
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

        </div>

        <div className="listaDeCartas">
          {
            cartasSalvadas
              .filter((carta) => {
                const { buscarPorNome } = this.state;
                if (buscarPorNome === '') {
                  return carta;
                }
                return carta.nome.toLowerCase().includes(buscarPorNome.toLowerCase());
              })
              .filter((carta) => {
                const { buscarPorRaridade } = this.state;
                if (buscarPorRaridade === 'todas' || buscarPorRaridade === '') {
                  return carta;
                }
                return carta.rari === buscarPorRaridade;
              })
              .map((carta, index) => (
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
