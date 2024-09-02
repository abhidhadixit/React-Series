// UsecontextA.js
import React, { useContext } from 'react';
import { CountContext } from '../App2';

function UsecontextD() {
  const countContext = useContext(CountContext);

  return (
    <div>
      UsecontextA
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default UsecontextD;
