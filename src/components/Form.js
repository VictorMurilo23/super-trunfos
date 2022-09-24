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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    let exibeTrunfoOuNao;
    if (hasTrunfo === false) {
      exibeTrunfoOuNao = (
        <div className="superTrunfoCheckbox">
          <label htmlFor="superTrunfo">
            <input
              checked={ cardTrunfo }
              type="checkbox"
              name="superTrunfo"
              id="superTrunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
            É um super trunfo?
          </label>
        </div>);
    } else {
      exibeTrunfoOuNao = <p>Você já tem um Super Trunfo em seu baralho</p>;
    }
    const maximo = 210;
    return (
      <form>
        <div className="nomeCartaInput">
          <label htmlFor="nomeDaCarta">
            Nome:
            <br />
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
        </div>

        <div className="descricaoCartaInput">
          <label htmlFor="descricaoDaCarta">
            Descrição:
            <br />
            <textarea
              value={ cardDescription }
              name="descricaoDaCarta"
              id="descricaoDaCarta"
              required
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="pontos">
          <label htmlFor="atributo1">
            Força:
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
            Agilidade:
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
            inteligência:
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
          <p>
            {
              `Pontos restante: ${maximo - (Number(cardAttr1)
              + Number(cardAttr2)
              + Number(cardAttr3))}`
            }
          </p>
        </div>

        <div className="imagemCartaInput">
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
        </div>

        <div className="raridadeCartaInput">
          <label htmlFor="raridade">
            Raridade:
            <br />
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
        </div>

        {exibeTrunfoOuNao}

        <button
          className="botaoSalvar"
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
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
