import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import context from './myContext';
import cards from '../data/cards';

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function Provider({ children }) {
  const cardInitialState = {
    nomeDaCarta: '',
    descricaoDaCarta: '',
    atributo1: '0',
    atributo2: '0',
    atributo3: '0',
    imagemDaCarta: '',
    raridade: 'normal',
    superTrunfo: false,
  };

  const filtersInitialState = {
    temTrunfo: false,
    oBotaoEstaDesabilitado: true,
    buscarPorNome: '',
    buscarPorRaridade: '',
    procurandoPorTrunfo: false,
  };

  const [cardCustom, setCardCustom] = useState(cardInitialState);
  const [filters, setFilters] = useState(filtersInitialState);
  const [savedCards, setSavedCards] = useState([...cards]);
  const [deck, setDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
  const [playerCard, setPlayerCard] = useState({});
  const [opponentCard, setOpponentCard] = useState({});
  const [compare, setCompare] = useState(false);
  const [attribute, setAttribute] = useState('');
  const [score, setScore] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [finishGame, setFinishGame] = useState(false);
  const [opponentTurn, setOpponentTurn] = useState(false);
  const deckMaxLength = 5;

  const resetGame = () => {
    setScore(0);
    setStartGame(false);
    setFinishGame(false);
    setOpponentTurn(false);
  };

  const playAgain = (player, opponent) => {
    const filterPlayer = deck
      .filter((element) => element.id !== player.id);
    setDeck(filterPlayer);
    const filterOpponent = opponentDeck
      .filter((element) => element.nomeDaCarta !== opponent.nomeDaCarta);
    setOpponentDeck(filterOpponent);
    if (deck.length === 1) {
      setFinishGame(true);
    }
    setPlayerCard({});
    setOpponentCard({});
    setAttribute('');
    setCompare((prevState) => !prevState);
  };

  const saveAttribute = (string) => {
    switch (string) {
    case 'Força':
      setAttribute('atributo1');
      break;
    case 'Agilidade':
      setAttribute('atributo2');
      break;
    default:
      setAttribute('atributo3');
    }
  };

  const savePlayerCard = (obj) => {
    setPlayerCard(obj);
    const randElement = opponentDeck[Math.floor(Math.random() * opponentDeck.length)];
    setOpponentCard(randElement);
  };

  const createOpponentDeck = () => {
    const random = 0.5;
    const shuffled = [...savedCards].sort(() => Math.random() - random);
    setOpponentDeck([shuffled[0], shuffled[1], shuffled[2], shuffled[3], shuffled[4]]);
  };

  const addCardToDeck = (card) => {
    if (deck.length < deckMaxLength) {
      const { nomeDaCarta,
        descricaoDaCarta,
        atributo1,
        atributo2,
        atributo3,
        imagemDaCarta,
        raridade,
        superTrunfo } = card;

      const cardObj = {
        nomeDaCarta,
        descricaoDaCarta,
        atributo1,
        atributo2,
        atributo3,
        imagemDaCarta,
        raridade,
        superTrunfo,
      };
      setDeck((prevState) => [...prevState, cardObj]);
    }
  };

  const guidGenerator = () => {
    const sixteen = 16;
    const magicNumber = 0x10000;
    const S4 = () => (((1 + Math.random()) * magicNumber) || 0)
      .toString(sixteen)
      .substring(1);
    return (`${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
  };

  const giveIdToDeckCards = () => {
    const cardsIfId = deck.reduce((acc, cur) => {
      cur.id = guidGenerator();
      acc.push(cur);
      return acc;
    }, []);
    setDeck(cardsIfId);
  };

  const removeFromDeck = (card) => {
    const fi = deck.filter((element) => element.nomeDaCarta !== card.nomeDaCarta);
    setDeck(fi);
  };

  const verificaSeTemTrunfo = () => {
    const trun = savedCards.some((element) => element.superTrunfo === true);
    setFilters((prevState) => ({ ...prevState, temTrunfo: trun }));
  };

  const salvarCarta = (event) => {
    event.preventDefault();
    const {
      nomeDaCarta, descricaoDaCarta, atributo1, atributo2, atributo3, imagemDaCarta,
      raridade, superTrunfo } = cardCustom;
    const infoCartaSalva = {
      nomeDaCarta,
      descricaoDaCarta,
      atributo1,
      atributo2,
      atributo3,
      imagemDaCarta,
      raridade,
      superTrunfo,
    };

    setSavedCards((prevState) => [...prevState, infoCartaSalva]);
    setCardCustom({
      ...cardInitialState,
    });
  };

  const handleChangeFilters = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const verificaDescricaoNomeImagem = () => {
    const { nomeDaCarta, descricaoDaCarta, imagemDaCarta } = cardCustom;
    if (nomeDaCarta.split(' ')[0] !== '' && descricaoDaCarta.split(' ')[0] !== ''
      && imagemDaCarta.split(' ')[0] !== '') {
      setFilters((prevState) => ({ ...prevState, oBotaoEstaDesabilitado: false }));
    } else {
      setFilters((prevState) => ({ ...prevState, oBotaoEstaDesabilitado: true }));
    }
  };

  const verificaAtributos = () => {
    const { atributo1, atributo2, atributo3 } = cardCustom;
    const max = 90;
    if (atributo1 > max || atributo2 > max || atributo3 > max) {
      setFilters((prevState) => ({ ...prevState, oBotaoEstaDesabilitado: true }));
    }
    if (atributo1 < 0 || atributo2 < 0 || atributo3 < 0) {
      setFilters((prevState) => ({ ...prevState, oBotaoEstaDesabilitado: true }));
    }
  };

  const verificaTudo = () => {
    verificaDescricaoNomeImagem();
    verificaAtributos();
    verificaSeTemTrunfo();
  };

  const verificaTotalAtributos = () => {
    const { atributo1, atributo2, atributo3 } = cardCustom;
    const max = 210;
    const somaAtributos = Number(atributo1) + Number(atributo2) + Number(atributo3);
    if (somaAtributos > max) {
      setFilters((prevState) => ({ ...prevState, oBotaoEstaDesabilitado: true }));
    } else {
      setFilters((prevState) => ({ ...prevState, oBotaoEstaDesabilitado: false }));
      verificaTudo();
    }
  };

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setCardCustom((prevState) => ({ ...prevState, [name]: value }));
  };

  const deleteCard = (index) => {
    const removeCard = savedCards
      .filter((_card, cardIndex) => cardIndex !== index);
    setSavedCards(removeCard);
  };

  const convertAttr = (attr) => {
    switch (attr) {
    case 'atributo1':
      return 'Força';
    case 'atributo2':
      return 'Agilidade';
    default:
      return 'Inteligência';
    }
  };

  const { procurandoPorTrunfo, buscarPorNome, buscarPorRaridade } = filters;
  const filteredResults = procurandoPorTrunfo === false ? savedCards
    .filter((carta) => {
      if (buscarPorNome === '') {
        return carta;
      }
      return carta.nomeDaCarta.toLowerCase().includes(buscarPorNome.toLowerCase());
    })
    .filter((carta) => {
      if (buscarPorRaridade === 'todas' || buscarPorRaridade === '') {
        return carta;
      }
      return carta.raridade === buscarPorRaridade;
    }) : savedCards.filter((carta) => carta.superTrunfo === true);

  useEffect(() => {
    verificaTotalAtributos();
  }, [cardCustom]); // eslint-disable-next-line max-lines

  useEffect(() => {
    verificaSeTemTrunfo();
  }, [savedCards]);

  const contextValue = {
    cardCustom,
    filters,
    deck,
    playerCard,
    opponentCard,
    compare,
    opponentDeck,
    filteredResults,
    attribute,
    score,
    startGame,
    finishGame,
    opponentTurn,
    salvarCarta,
    handleChange,
    setOpponentTurn,
    savePlayerCard,
    giveIdToDeckCards,
    setStartGame,
    resetGame,
    deleteCard,
    handleChangeFilters,
    addCardToDeck,
    removeFromDeck,
    createOpponentDeck,
    setCompare,
    convertAttr,
    saveAttribute,
    setScore,
    playAgain,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
