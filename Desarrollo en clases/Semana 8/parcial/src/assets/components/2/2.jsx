import React, { useState, useEffect } from 'react';

const Texto = ({ color, radio }) => {
  let textColor = 'black';

  const sum = color[0] + color[1] + color[2];
  if (sum <= 170) {
    textColor = 'red';
  } else if (sum <= 340) {
    textColor = 'green';
  } else {
    textColor = 'blue';
  }

  const estilo = {
    border: '1px solid',
    color: textColor,
  };

  const limitedColor = color.map((value) => Math.min(value, 266));
  const colorRGB = `rgb(${limitedColor[0]}, ${limitedColor[1]}, ${limitedColor[2]})`;

  return (
    <div className="texto" style={estilo}>
      <p>Color: {colorRGB}</p>
      <p>Radio: {radio}</p>
    </div>
  );
};

export default Texto;
