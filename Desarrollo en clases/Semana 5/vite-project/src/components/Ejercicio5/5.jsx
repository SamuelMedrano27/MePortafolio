
import React, { useState } from 'react';

const ListGenerator = () => {
  const [numItems, setNumItems] = useState(0);
  const [listItems, setListItems] = useState([]);

  const handleGenerateList = () => {
    const items = [];

    for (let i = 1; i <= numItems; i++) {
      items.push(<li key={i}>Elemento {i}</li>);
    }

    setListItems(items);
  };

  return (
    <div>
      <input
        type="number"
        value={numItems}
        onChange={(e) => setNumItems(parseInt(e.target.value))}
      />
      <button onClick={handleGenerateList}>Generar Lista</button>

      <ol>{listItems}</ol>
    </div>
  );
};

export default ListGenerator;