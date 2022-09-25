import React from 'react';
import PropTypes from 'prop-types';
import semPersonagem from '../images/semPersonagem.png';

function Card({ cardInfo }) {
  const { nomeDaCarta,
    descricaoDaCarta,
    atributo1,
    atributo2,
    atributo3,
    imagemDaCarta,
    raridade,
    superTrunfo } = cardInfo;

  return (
    <div className="carta">
      <div className="nomeCartaContainer">
        <h1 data-testid="name-card">{ nomeDaCarta }</h1>
      </div>
      <div className="imagemCartaContainer">
        <img
          src={ imagemDaCarta }
          alt={ nomeDaCarta }
          onError={ (event) => {
            event.target.src = semPersonagem;
          } }
          data-testid="image-card"
        />
      </div>
      <div className="cardDescContainer">
        <p data-testid="description-card" className="cardDesc">{descricaoDaCarta}</p>
      </div>
      <div className="cardAttrContaineer">
        <p data-testid="attr1-card" className="atributo1">
          {`Força: ${atributo1}`}
        </p>
        <p data-testid="attr2-card" className="atributo2">
          {`Agilidade: ${atributo2}`}
        </p>
        <p data-testid="attr3-card" className="atributo3">
          {`Inteligência: ${atributo3}`}
        </p>
      </div>
      {
        superTrunfo
           && <p data-testid="trunfo-card" className="superTrunfo">Super Trunfo</p>
      }
      <p data-testid="rare-card" className="raridade">{raridade}</p>
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.shape({
    atributo1: PropTypes.string,
    atributo2: PropTypes.string,
    atributo3: PropTypes.string,
    descricaoDaCarta: PropTypes.string,
    imagemDaCarta: PropTypes.string,
    nomeDaCarta: PropTypes.string,
    raridade: PropTypes.string,
    superTrunfo: PropTypes.bool,
  }),
}.isRequired;

export default Card;
