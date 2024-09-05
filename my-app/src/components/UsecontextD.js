import React, { useContext } from 'react';
import { countContext } from '../App';

function UsecontextD() {
  const CountContext = useContext(CountContext);

  return (
    <div>
      
      <button onClick={() => countContext.countdispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countdispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countdispatch('reset')}>Reset</button>
    </div>
  );
}

export default UsecontextD;

