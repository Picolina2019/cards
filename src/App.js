import { useState } from 'react';
import './App.css';
import Box from './Box';

function App() {
  const [index, setIndex] = useState(1);

  function moveCard(el) {
    setIndex(el);
  }
  const indexes = [1, 2, 3];
  return (
    <div className='app'>
      {indexes.map((i, indx) => {
        return (
          <Box key={indx} card={index === i} moveCard={() => moveCard(i)} />
        );
      })}
    </div>
  );
}

export default App;
