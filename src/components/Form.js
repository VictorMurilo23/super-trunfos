import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome:
          <input
            type="text"
            name="nomeDaCarta"
            id="nomeDaCarta"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="descricaoDaCarta">
          Descrição:
          <textarea
            name="descricaoDaCarta"
            id="descricaoDaCarta"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="atributo1">
          Atributo1:
          <input
            type="number"
            name="atributo1"
            id="atributo1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="atributo2">
          Atributo2:
          <input
            type="number"
            name="atributo2"
            id="atributo2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="atributo3">
          Atributo3:
          <input
            type="number"
            name="atributo3"
            id="atributo3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imagemDaCarta">
          Imagem:
          <input
            type="text"
            id="imagemDaCarta"
            name="imagemDaCarta"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="raridade">
          Raridade:
          <select name="raridade" id="raridade" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          <input
            type="checkbox"
            name="superTrunfo"
            id="superTrunfo"
            data-testid="trunfo-input"
          />
          É um super trunfo?
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
