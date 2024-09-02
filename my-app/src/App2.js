import React, { useReducer,createContext } from 'react';
// import Counterone from './components/Counterone'; 
// import Countertwo from './components/Countertwo'
import UsecontextA from './components/UsecontextA'
import UsecontextB from './components/UsecontextB'
import UsecontextC from './components/UsecontextC'
export const CountContext=createContext();
const initalState=0
const reducer=(state,action)=>{
  switch (action) {
  
      case 'increment':
          return state +1
      case 'decrement':
          return state -1
      case 'Reset':
          return initalState
      default:
        return state
  }
  };
function App2() {
  const [count,dispatch]=useReducer(reducer,initalState)
  return (
    // <div className='App'>
      <>
      <CountContext.Provider value ={{countstate:count,countdispatch:dispatch }}>
      {/* <h1>Counter App</h1> */}
      {/* <Counterone /> */}
      {/* <Countertwo /> */}
      <div className='App'>
      Count -{count}
      <UsecontextA />
      <UsecontextB />
      <UsecontextC />
      </div>
      </CountContext.Provider>
      </>
    // </div>
    
  );
}

export default App2;
