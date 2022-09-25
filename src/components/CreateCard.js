import React, { useContext } from 'react';
import Form from './Form';
import Card from './Card';
import context from '../context/myContext';

export default function CreateCard() {
  const { cardCustom } = useContext(context);
  return (
    <div className="criacaoDaCarta">
      <div className="formulario">
        <h1>Adicione uma nova carta</h1>
        <Form />
      </div>
      <Card cardInfo={ cardCustom } />
    </div>
  );
}
