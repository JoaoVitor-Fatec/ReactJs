import React, { useState, useEffect } from 'react';


function Relogio() {
  const [horarioAtual, setHorarioAtual] = useState('');

  useEffect(() => {
    const updateHorario = () => {
      const dataAtual = new Date();
      const hour = formatValor(dataAtual.getHours());
      const minutes = formatValor(dataAtual.getMinutes());
      const seconds = formatValor(dataAtual.getSeconds());

      setHorarioAtual(`Hora atual: ${hour}:${minutes}:${seconds}`);
    };

    const formatValor = (valor) => {
      return valor < 10 ? "0" + valor : valor;
    };

    const intervalId = setInterval(updateHorario, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p id="horarioAtual">{horarioAtual}</p>
    </div>
  );
}

export default Relogio;
