import React, { useState, useEffect } from 'react';

function Letreiro() {
  const [texto, setTexto] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const drawTexto = () => {
      const textoComp = 'Conheça a Fatec!';
      if (index < textoComp.length) {
        setTexto(texto + textoComp[index]);
        setIndex(index + 1);
      } else {
        setTexto('');
        setIndex(0);
      }
    };

    const timerID = setInterval(() => {
      drawTexto();
    }, 100);

    return () => clearInterval(timerID);
  }, [index, texto]);

  return <div>{texto}</div>;
}

export default Letreiro;




