import React, { useState, useEffect } from 'react';

const CirculoColor = ({ color }) => {
  const [circleColor, setCircleColor] = useState([0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCircleColor(color);
    }, 2000);

    return () => clearTimeout(timer);
  }, [color]);

  const circleStyle = {
    borderRadius: '50%',
    border: `2px solid rgb(${circleColor[0]}, ${circleColor[1]}, ${circleColor[2]})`,
    width: '100px',
    height: '100px',
  };

  return <div className="circulo-color" style={circleStyle}></div>;
};

export default CirculoColor;


// import React, { useState, useEffect } from 'react';

// const CirculoColor = ({ color, radio }) => {
//   const [circleColor, setCircleColor] = useState([0, 0, 0]);
//   const [circleSize, setCircleSize] = useState(100);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCircleColor(color);
//       setCircleSize(radio * 2);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [color, radio]);

//   const circleStyle = {
//     borderRadius: '50%',
//     border: `2px solid rgb(${circleColor[0]}, ${circleColor[1]}, ${circleColor[2]})`,
//     width: `${circleSize}px`,
//     height: `${circleSize}px`,
//   };

//   return <div className="circulo-color" style={circleStyle}></div>;
// };

// export default CirculoColor;



