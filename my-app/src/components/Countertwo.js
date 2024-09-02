import React, { useReducer } from 'react'

const initalState={
    firstCounter:0
}

const reduce=(state,action)=>{
switch (action.type) {

    case 'increment':
        return{firstCounter: state.firstCounter + action.value}
    case 'decrement':
        return{firstCounter: state.firstCounter - action.value}
    case 'Reset':
        return initalState
        
        

    default:
      return state
}
}

function Counter2() {
    const [count,dispatch]=useReducer(reduce,initalState)
  return (
    <div>
        <div>Counter-{count}</div>
    <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
    <button onClick={()=>dispatch({type:'increment',value:5})}>Increment5</button>

    <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
    <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>

    <button onClick={()=>dispatch({type:'Reset'})}> Reset</button>
    </div>
  )
}

export default Counter2