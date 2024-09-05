import React from 'react';
import TempComponent from './otherhooks/TempComponent.js'
function App(){
  return (
    <>
    <TempComponent />
    </>
  )
}
// // import React from 'react';
// // import ComponentC from './components/ComponentC';
// import Hooktypeone from './components/Hooktypeone';  
// // import Hooktypetwo from './components/Hooktypetwo';
// // import Hooktypethree from './components/Hooktypethree';
// // import Hooktypefour from './components/Hooktypefour';
// // import Mousehook from './components/Mousehook';
// // import UseEffectone from './components/UseEffecttwo';
// // import UseEffecttwo from './components/UseEffecttwo';
// // import Datafetching from './components/Datafetching';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// import React from 'react';
// import Rcounterone from './components/Rcounterone';

// function App() {
//   return (
//     <>
//       <Rcounterone />
//       {/* Uncomment the following lines if needed */}
      // <Hooktypeone />
      {/* <Hooktypetwo /> */}
      {/* <Hooktypethree /> */}
//       {/* <Hooktypefour /> */}
//       {/* <UseEffectone /> */}
//       {/* <UseEffecttwo /> */}
//       {/* <Mousehook /> */}
//       {/* <Datafetching/> */}
      
//       {/* <UserContext.Provider value={'sona'}>
//         <ChannelContext.Provider value={'YouTube'}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider> */}
//     </>
//   );
// }

 
// import React, { useReducer,createContext } from 'react';
// // import Counterone from './components/Counterone'; 
// // import Countertwo from './components/Countertwo'
// import UsecontextA from './components/UsecontextA'
// import UsecontextB from './components/UsecontextB'
// import UsecontextC from './components/UsecontextC'
// export const CountContext=createContext();
// const initalState=0
// const reducer=(state,action)=>{
//   switch (action) {
  
//       case 'increment':
//           return state +1
//       case 'decrement':
//           return state -1
//       case 'Reset':
//           return initalState
//       default:
//         return state
//   }
//   };
// function App() {
//   const [count,dispatch]=useReducer(reducer,initalState)
//   return (
//     // <div className='App'>
//       <>
//       <CountContext.Provider value ={{countstate:count,countdispatch:dispatch }}>
//       {/* <h1>Counter App</h1> */}
//       {/* <Counterone /> */}
//       {/* <Countertwo /> */}
//       <div className='App'>
//       Count -{count}
//       <UsecontextA />
//       <UsecontextB />
//       <UsecontextC />
//       </div>
//       </CountContext.Provider>
//       </>
    // </div>
    
//   );
// }
export default App;

