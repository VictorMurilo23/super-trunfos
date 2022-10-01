import React, { useContext } from 'react';
import context from '../context/myContext';

export default function ChooseAttribute() {
  const { saveAttribute } = useContext(context);
  const attributes = ['Força', 'Agilidade', 'Inteligência'];
  return (
    <div className="attrChoose">
      <h1>Escolha um atributo</h1>
      <div className="btnsContainer">
        {
          attributes.map((attr) => (
            <button
              key={ attr }
              type="button"
              onClick={ () => saveAttribute(attr) }
            >
              {attr}
            </button>
          ))
        }
      </div>
    </div>
  );
}
