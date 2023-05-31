
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

const ColorChangingAlert = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['primary', 'warning', 'danger', 'success', 'secondary'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Alert variant={colors[colorIndex]}>
      !OYEE!Este Alerta cambiara de color en 3seg !ATENTO!
    </Alert>
  );
};

export default ColorChangingAlert;