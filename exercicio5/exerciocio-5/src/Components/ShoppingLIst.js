import React, { useState } from 'react';

function ShoppingList() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Item: ${item} - Quantidade: ${quantity}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item:
        <input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
      </label>
      <br />
      <label>
        Quantidade:
        <input type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      </label>
      <br />
      <button type="submit">Adicionar item</button>
    </form>
  );
}

export default ShoppingList;
