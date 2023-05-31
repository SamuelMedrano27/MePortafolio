import React, { useState, useEffect } from 'react';

const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });
  const formattedDate = time.toLocaleDateString();

  return (
    <div>
      <h1>{formattedTime}</h1>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Reloj;
