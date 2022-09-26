import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/myContext';

function FiltrosDeBusca() {
  const { handleChangeFilters, filters } = useContext(context);
  const { procurandoPorTrunfo } = filters;
  return (
    <div className="filtersContainer">
      <h2>Todas as cartas</h2>
      <div className="filters">
        <input
          name="buscarPorNome"
          className="filterInput"
          type="text"
          placeholder="Nome da carta"
          disabled={ procurandoPorTrunfo }
          data-testid="name-filter"
          onChange={ handleChangeFilters }
        />
        <select
          name="buscarPorRaridade"
          className="filterInput"
          onChange={ handleChangeFilters }
          disabled={ procurandoPorTrunfo }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="filtroSuperTrunfo" className="filtroSuperTrunfo trunfo">
          <input
            onChange={ handleChangeFilters }
            type="checkbox"
            id="filtroSuperTrunfo"
            data-testid="trunfo-filter"
            name="procurandoPorTrunfo"
          />
          <span>Super Trunfo</span>
        </label>
      </div>
    </div>
  );
}

FiltrosDeBusca.propTypes = {
  buscaSuperTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default FiltrosDeBusca;
