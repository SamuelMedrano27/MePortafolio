import React, { useState } from 'react';

const ListaEditable = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (index) => {
    const newList = [...list];
    newList[index] = <input type="text" defaultValue={list[index]} />;
    setList(newList);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      const newList = [...list];
      newList.splice(index + 1, 0, <input type="text" />);
      setList(newList);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = () => {
    const newList = [...list];
    newList.push(inputValue);
    setList(newList);
    setInputValue('');
  };

  return (
    <div className={`list-container ${list.length > 5 ? 'scrollable' : ''}`}>
      <div className="list">
        {list.map((item, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            {React.isValidElement(item) ? (
              <input type="text" defaultValue={item.props.defaultValue} />
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="add-value-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrese un valor"
        />
        <button onClick={handleAddValue}>Agregar</button>
      </div>
    </div>
  );
};

export default ListaEditable;
