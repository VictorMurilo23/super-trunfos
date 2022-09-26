import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import context from '../context/myContext';
import Card from './Card';

export default function Deck({ showRemove }) {
  const { deck, removeFromDeck, changeCompare, savePlayerCard } = useContext(context);
  return (
    <div className="playerDeck">
      { deck.length !== 0
    && deck.map((card, index) => (
      <div key={ `${card.imagemDaCarta} ${index}` }>
        <Card cardInfo={ card } />
        {
          showRemove === true ? (
            <button
              type="button"
              onClick={ () => removeFromDeck(card) }
            >
              Remover
            </button>)
            : (
              <button
                type="button"
                onClick={ () => {
                  savePlayerCard(card);
                  changeCompare();
                } }
              >
                Escolher
              </button>)
        }
      </div>
    ))}

    </div>
  );
}

Deck.propTypes = {
  showRemove: PropTypes.bool,
}.isRequired;
