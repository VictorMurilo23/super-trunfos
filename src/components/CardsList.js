import React, { useContext } from 'react';
import context from '../context/myContext';
import Card from './Card';

export default function CardsList() {
  const { filteredResults, deleteCard, addCardToDeck, deck } = useContext(context);
  const five = 5;
  return (
    <div className="listaDeCartas">
      {
        filteredResults.map((card, index) => (
          <div key={ `${card.nomeDaCarta}, ${index}` } className="cartaContainer">
            <Card cardInfo={ card } />
            {
              !card.indeletavel
                  && (
                    <div className="deleteBtnContainer">
                      <button
                        type="button"
                        data-testid="delete-button"
                        className="deleteBtn"
                        onClick={ () => {
                          deleteCard(index);
                        } }
                      >
                        X
                      </button>
                    </div>)
            }
            <button
              type="button"
              className="addDeckBtn"
              onClick={ () => addCardToDeck(card) }
              disabled={ deck.length === five }
            >
              Adicionar ao deck
            </button>
          </div>))
      }
    </div>
  );
}
