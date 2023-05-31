
import React from 'react';

const ChildComponent = ({ numbers, filter }) => {
  let filteredNumbers;

  if (filter === 'odd') {
    filteredNumbers = numbers.filter((number) => number % 2 !== 0);
  } else if (filter === 'even') {
    filteredNumbers = numbers.filter((number) => number % 2 === 0);
  } else {
    filteredNumbers = numbers;
  }

  return (
    <div>
      {filteredNumbers.map((number) => (
        <span key={number}>{number} </span>
      ))}
    </div>
  );
};

export default ChildComponent;
