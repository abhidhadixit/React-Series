import React,{useState} from 'react';

function Hooktypetwo() {
    const inialcount=0;
    const [count,setCount]=useState(inialcount);
    const incrementfive=()=>{
      for(let i=0;i<5;i++){
        setCount(prevCount=>prevCount+2);
      }
    }
  return (
    <div>
      count:{
        count
      }
        <button onClick={()=>setCount(inialcount)}>reset</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>incrementfive()}>increment 5</button>
    </div>
  );
}
export default Hooktypetwo;
