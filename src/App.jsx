//Importada a lib React e a funcionalidade especifica/Hook useState
import React from 'react';
import './App.css';


//Função do componente principaldo App
//É renderizada pelo Componente Main
function App() {

  //Criadas duas variaveis pra armazenar nome e sobrenome
  const inNome = 'Romulo'
  const inSobrenome = 'Rosa'

  //É o retorno da função App
  return (
    //É o que será renderizado dentro de main e que será inserido na index.html
    <>
      <p>NOME: {inNome}</p>
      <p>SOBRENOME: {inSobrenome}</p>
    </>
  )
}


//Exporta a função App
//Assim a função pode ser usada por outro(s) componente(s)
export default App
