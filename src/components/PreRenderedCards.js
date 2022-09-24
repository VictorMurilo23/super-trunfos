import React from 'react';
import Card from './Card';
import cards from '../data/cards';

export default function PreRenderedCards() {
  return (
    cards.map((carta) => (
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
      </div>))
  );
}
