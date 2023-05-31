import React, { useState, useEffect } from 'react';
import CirculoColor from './assets/components/2/1';
import Texto from './assets/components/2/2';



const App1 = () => {
  const initialColor = [0, 0, 0];
  const [color, setColor] = useState(initialColor);
  const [radio, setRadio] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      const newColor = [...color];
      const newRadio = radio * 2;
      newColor[1] += newRadio;
      newColor[2] += newRadio;
      setColor(newColor);
      setRadio(newRadio);
    }, 2000);

    return () => clearInterval(timer);
  }, [color, radio]);

  return (
    <div>
      <h1>Ejercicio 2</h1>
      <CirculoColor radio={radio} color={color} />
      <Texto color={color} radio={radio} />
    </div>
  );
};

export default App1;

