import React, { useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }


  const decrementar = () => {
    setContador(contador - 1);
  }

  return (
    <>
      <p>Vc clicou {contador} vezes</p>

      <button onClick={incrementar}>+</button>

      <button onClick={decrementar}>-</button>
    </>
  )
}

export default App
