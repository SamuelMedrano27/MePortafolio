import React, { useState } from 'react';

const ColorPicker = () => {
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = () => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setBackgroundColor(rgbColor);
  };

  return (
    <div style={{ backgroundColor }}>
      <input
        type="number"
        value={red}
        onChange={(e) => setRed(e.target.value)}
        placeholder="Rojo (1-255)"
      />
      <input
        type="number"
        value={green}
        onChange={(e) => setGreen(e.target.value)}
        placeholder="Verde (1-255)"
      />
      <input
        type="number"
        value={blue}
        onChange={(e) => setBlue(e.target.value)}
        placeholder="Azul (1-255)"
      />
      <button onClick={handleColorChange}>Cambiar color</button>
    </div>
  );
};

export default ColorPicker;