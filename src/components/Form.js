import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome:
          <input
            value={ cardName }
            type="text"
            name="nomeDaCarta"
            id="nomeDaCarta"
            required
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricaoDaCarta">
          Descrição:
          <textarea
            value={ cardDescription }
            name="descricaoDaCarta"
            id="descricaoDaCarta"
            required
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atributo1">
          Atributo1:
          <input
            value={ cardAttr1 }
            type="number"
            name="atributo1"
            id="atributo1"
            required
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atributo2">
          Atributo2:
          <input
            value={ cardAttr2 }
            type="number"
            name="atributo2"
            id="atributo2"
            required
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atributo3">
          Atributo3:
          <input
            value={ cardAttr3 }
            type="number"
            name="atributo3"
            id="atributo3"
            required
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imagemDaCarta">
          Imagem:
          <input
            value={ cardImage }
            type="text"
            id="imagemDaCarta"
            name="imagemDaCarta"
            required
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="raridade">
          Raridade:
          <select
            value={ cardRare }
            name="raridade"
            id="raridade"
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          É um super trunfo?
          <input
            checked={ cardTrunfo }
            type="checkbox"
            name="superTrunfo"
            id="superTrunfo"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>

        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: 'Carta',
  cardDescription: 'Descrição',
  cardAttr1: 'Atributo 1',
  cardAttr2: 'Atributo 2',
  cardAttr3: 'Atributo 3',
  cardImage: 'Imagem',
  cardRare: 'Raridade',
  cardTrunfo: true,
  isSaveButtonDisabled: true,
  onInputChange: () => { console.log(oi); },
  onSaveButtonClick: () => { console.log(oi); },
};

export default Form;
