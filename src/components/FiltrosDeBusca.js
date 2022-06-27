import React from 'react';
import PropTypes from 'prop-types';

class FiltrosDeBusca extends React.Component {
  render() {
    const { buscaSuperTrunfo, onInputChange } = this.props;
    return (
      <>
        <h2>Filtros de busca</h2>
        <input
          name="buscarPorNome"
          type="text"
          placeholder="Nome da carta"
          disabled={ buscaSuperTrunfo }
          data-testid="name-filter"
          onChange={ onInputChange }
        />

        <select
          name="buscarPorRaridade"
          onChange={ onInputChange }
          disabled={ buscaSuperTrunfo }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="filtroSuperTrunfo">
          <input
            onChange={ onInputChange }
            type="checkbox"
            id="filtroSuperTrunfo"
            data-testid="trunfo-filter"
            name="procurandoPorTrunfo"
          />
          Super Trunfo
        </label>
      </>
    );
  }
}

FiltrosDeBusca.propTypes = {
  buscaSuperTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
};

FiltrosDeBusca.defaultProps = {
  buscaSuperTrunfo: false,
  onInputChange: () => { console.log('oi'); },
};

export default FiltrosDeBusca;
