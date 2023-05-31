
import React from 'react';
import ChildComponent from './2hijo';

const ParentComponent = () => {
  const numbersArray = Array.from({ length: 100 }, (_, i) => i + 1);

  return <ChildComponent numbers={numbersArray} filter="odd" />;
};

export default ParentComponent;