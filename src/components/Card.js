import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h2 data-testid="description-card">{cardDescription}</h2>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo === true
            ? <p data-testid="trunfo-card">Super Trunfo</p>
            : <p>Não é um Super Trunfo</p>
        }
      </div>
    );
  }
}

export default Card;
