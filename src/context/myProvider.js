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

  const resetarInfoCarta = () => {
    setCardCustom({
      ...cardInitialState,
    });
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
    resetarInfoCarta();
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
  }, [cardCustom]);

  useEffect(() => {
    verificaSeTemTrunfo();
  }, [savedCards]);

  const contextValue = {
    cardCustom,
    filters,
    salvarCarta,
    handleChange,
    filteredResults,
    deleteCard,
    handleChangeFilters,
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
