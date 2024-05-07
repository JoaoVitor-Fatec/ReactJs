import React, { useState } from 'react';
import girlImg from './girl.png';
import boyImg from './boy.png';

function Contador() {
  const [totalHomens, setTotalHomens] = useState(0);
  const [totalMulheres, setTotalMulheres] = useState(0);

  const addHomem = () => {
    setTotalHomens(totalHomens + 1);
  };

  const removeHomem = () => {
    if (totalHomens > 0) {
      setTotalHomens(totalHomens - 1);
    }
  };

  const addMulher = () => {
    setTotalMulheres(totalMulheres + 1);
  };

  const removeMulher = () => {
    if (totalMulheres > 0) {
      setTotalMulheres(totalMulheres - 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px', border: '2px solid #333', borderRadius: '10px', padding: '20px', width: '300px', margin: '0 auto' }}>
      <div>
        <img src={boyImg} alt="Imagem de homem" width="200" />
        <div>
          <h3>Homens: {totalHomens}</h3>
          <button onClick={addHomem} style={{ padding: '5px 10px', margin: '5px' }}>Adicionar Homem</button>
          <button onClick={removeHomem} style={{ padding: '5px 10px', margin: '5px' }}>Remover Homem</button>
        </div>
      </div>
      <div>
        <img src={girlImg} alt="Imagem de mulher" width="200" />
        <div>
          <h3>Mulheres: {totalMulheres}</h3>
          <button onClick={addMulher} style={{ padding: '5px 10px', margin: '5px' }}>Adicionar Mulher</button>
          <button onClick={removeMulher} style={{ padding: '5px 10px', margin: '5px' }}>Remover Mulher</button>
        </div>
      </div>
      <div>
        <h3>Total: {totalHomens + totalMulheres}</h3>
      </div>
    </div>
  );
}

export default Contador;
