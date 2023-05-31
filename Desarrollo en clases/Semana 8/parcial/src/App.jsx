import React from 'react';
import ComponentGeneral from './assets/components/1/1';
import ListaEditable from './assets/components/1/2';


 // Importar el archivo CSS con los estilos

const App = () => {
  const listLength = 5; // Coloca aquí la longitud actual del array

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <ComponentGeneral />
      <ListaEditable length={listLength} />
    </div>
  );
};

export default App;