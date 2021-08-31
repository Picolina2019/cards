import React, { useState } from 'react';
import Card from './Card';

function Box({ card, moveCard }) {
  const [isOver, setIsOver] = useState(false);

  function handleDragOver(e) {
    if (e.dataTransfer.types[0] === 'text/plain') {
      setIsOver(true);
      e.preventDefault();
    }
  }
  console.log(card);
  function handleDrop(e) {
    const dataJSON = e.dataTransfer.getData('text/plain');
    let data;
    try {
      data = JSON.parse(dataJSON);
    } catch {}

    if (data && data.type === 'card') {
      moveCard();
    }
  }

  function handleDragLeave() {
    setIsOver(false);
  }

  return (
    <div
      className='box'
      style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12)' }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}>
      {card ? <Card /> : 'Box'}
    </div>
  );
}

export default Box;
