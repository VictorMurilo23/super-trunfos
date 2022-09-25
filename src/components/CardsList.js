import React, { useContext } from 'react';
import context from '../context/myContext';
import Card from './Card';

export default function CardsList() {
  const { filteredResults, deleteCard } = useContext(context);
  return (
    <div className="listaDeCartas">
      {
        filteredResults.map((carta, index) => (
          <div key={ `${carta.nomeDaCarta}, ${index}` } className="cartaContainer">
            <Card cardInfo={ carta } />
            {
              !carta.indeletavel
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
          </div>))
      }
    </div>
  );
}
