
import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleOperation = () => {
    const parsedNumber1 = parseFloat(number1);
    const parsedNumber2 = parseFloat(number2);

    let operationResult = null;

    switch (operation) {
      case 'sum':
        operationResult = parsedNumber1 + parsedNumber2;
        break;
      case 'subtract':
        operationResult = parsedNumber1 - parsedNumber2;
        break;
      case 'multiply':
        operationResult = parsedNumber1 * parsedNumber2;
        break;
      case 'divide':
        operationResult = parsedNumber1 / parsedNumber2;
        break;
      default:
        break;
    }

    setResult(operationResult);
  };

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Coloca el Número 1"
      />

      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Coloca el Número 2"
      />

      <select onChange={(e) => setOperation(e.target.value)}>
        <option value="sum">Sumar</option>
        <option value="subtract">Restar</option>
        <option value="multiply">Multiplicar</option>
        <option value="divide">Dividir</option>
      </select>

      <button onClick={handleOperation}>Calcular</button>

      {result && <p>El resultado es: {result}</p>}
    </div>
  );
};

export default Calculator;
