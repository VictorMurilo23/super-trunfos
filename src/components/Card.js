import React from 'react';
import PropTypes from 'prop-types';
import semPersonagem from '../images/semPersonagem.png';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="carta">
        <div className="nomeCartaContainer">
          <h1 data-testid="name-card">{cardName}</h1>
        </div>
        <div className="imagemCartaContainer">
          <img
            src={ cardImage }
            alt={ cardName }
            onError={ (event) => {
              event.target.src = semPersonagem;
            } }
            data-testid="image-card"
          />
        </div>
        <p data-testid="description-card" className="descricao">{cardDescription}</p>
        <p data-testid="attr1-card" className="atributo1">
          {`Força: ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card" className="atributo2">
          {`Agilidade: ${cardAttr2}`}
        </p>
        <p data-testid="attr3-card" className="atributo3">
          {`Inteligência: ${cardAttr3}`}
        </p>
        {
          cardTrunfo === true
            ? <p data-testid="trunfo-card" className="superTrunfo">Super Trunfo</p>
            : <p />
        }
        <p data-testid="rare-card" className="raridade">{cardRare}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: 'Carta',
  cardDescription: 'Descrição',
  cardAttr1: 'Atributo 1',
  cardAttr2: 'Atributo 2',
  cardAttr3: 'Atributo 3',
  cardImage: 'Imagem',
  cardRare: 'Raridade',
  cardTrunfo: true,
};

export default Card;
