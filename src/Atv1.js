import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';


export default function Atv1() {
  return (
    <>
        <h1>Atividade 1</h1>
        <Relogio />
        <Letreiro />
        <Link to="/">Voltar</Link>
        
    </>
  );
}
