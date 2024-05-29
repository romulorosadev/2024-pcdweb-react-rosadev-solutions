//Importada a lib React e a funcionalidade especifica/Hook useState
import React, { useState } from 'react';
import './App.css';


//Função do componente principaldo App
//É renderizada pelo Componente Main
function App() {

  //contador - Valor inicial, já que informo que o stado inicial de contador tem valor 0
  //setContador - Valor de transição. Modifica o valor de contador através do parametro passado em sua chamada
  const [contador, setContador] = useState(0);

  //incrementar é uma função anônima
  const incrementar = () => {
    //Ela chama a função setContador e passa o seu parametro
    setContador(contador + 1);
  }

  //decrementar é uma função anônima
  const decrementar = () => {
    //Ela chama a função setContador e passa o seu parametro
    setContador(contador - 1);
  }


  //É o retorno da função App
  return (
    //É o que será renderizado dentro de main e que será inserido na index.html
    <>
      <p>Vc clicou {contador} vezes</p>

      <button onClick={incrementar}>+</button>

      <button onClick={decrementar}>-</button>
    </>
  )
}


//Exporta a função App
//Assim a função pode ser usada por outro(s) componente(s)
export default App
