import React, { useContext } from 'react';
import context from '../context/myContext';

function Form() {
  const maximo = 210;
  const { cardCustom, filters, salvarCarta, handleChange } = useContext(context);
  const {
    nomeDaCarta,
    descricaoDaCarta,
    atributo1,
    atributo2,
    atributo3,
    imagemDaCarta,
    raridade,
    superTrunfo } = cardCustom;
  const { oBotaoEstaDesabilitado, temTrunfo } = filters;

  const exibeTrunfoOuNao = () => {
    if (temTrunfo === false) {
      return (
        <div className="superTrunfoCheckbox">
          <label htmlFor="superTrunfo" className="trunfo">
            <input
              checked={ superTrunfo }
              type="checkbox"
              name="superTrunfo"
              id="superTrunfo"
              data-testid="trunfo-input"
              onChange={ handleChange }
            />
            <span>É um super trunfo?</span>
          </label>
        </div>);
    }
    return (<p>Você já tem um Super Trunfo em seu baralho</p>);
  };

  return (
    <form>
      <div className="nomeCartaInput">
        <label htmlFor="nomeDaCarta">
          <p>Nome:</p>
          <input
            value={ nomeDaCarta }
            type="text"
            name="nomeDaCarta"
            id="nomeDaCarta"
            required
            className="formInput"
            data-testid="name-input"
            onChange={ handleChange }
          />
        </label>
      </div>

      <div className="descricaoCartaInput">
        <label htmlFor="descricaoDaCarta">
          <p>Descrição:</p>
          <textarea
            value={ descricaoDaCarta }
            className="formInput"
            name="descricaoDaCarta"
            id="descricaoDaCarta"
            required
            data-testid="description-input"
            onChange={ handleChange }
          />
        </label>
      </div>

      <div className="pontos">
        <label htmlFor="atributo1">
          <p>Força:</p>
          <input
            className="formInput"
            value={ atributo1 }
            type="number"
            name="atributo1"
            id="atributo1"
            required
            data-testid="attr1-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="atributo2">
          <p>Agilidade:</p>
          <input
            value={ atributo2 }
            className="formInput"
            type="number"
            name="atributo2"
            id="atributo2"
            required
            data-testid="attr2-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="atributo3">
          <p>Inteligência:</p>
          <input
            value={ atributo3 }
            type="number"
            className="formInput"
            name="atributo3"
            id="atributo3"
            required
            data-testid="attr3-input"
            onChange={ handleChange }
          />
        </label>
        <p className="pointsQuant">
          {
            `Pontos restante: ${maximo - (Number(atributo1)
          + Number(atributo2)
          + Number(atributo3))}`
          }
        </p>
      </div>

      <div className="imagemCartaInput">
        <label htmlFor="imagemDaCarta">
          <p>Imagem:</p>
          <input
            value={ imagemDaCarta }
            className="formInput"
            type="text"
            id="imagemDaCarta"
            name="imagemDaCarta"
            required
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </div>

      <div className="raridadeCartaInput">
        <label htmlFor="raridade">
          <p>Raridade:</p>
          <select
            value={ raridade }
            name="raridade"
            className="formInput"
            id="raridade"
            data-testid="rare-input"
            onChange={ handleChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>

      {exibeTrunfoOuNao()}

      <button
        className="botaoSalvar"
        type="submit"
        disabled={ oBotaoEstaDesabilitado }
        data-testid="save-button"
        onClick={ salvarCarta }
      >
        Salvar
      </button>
    </form>
  );
}

export default Form;
