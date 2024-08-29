import React,{useState} from 'react'
function useEffect1(){
    const [count,setcount]=useState(0)
    return (
        <div>
         <button onClick={()=>setcount(count+1)}>you clicked {count} times</button>
        </div>
    )
}
 export default useEffect1;
