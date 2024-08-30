import React,{useState,useEffect} from 'react'
function UseEffectone(){
    const [count,setcount]=useState(0)
    // const [name,setname]=useState('')
    useEffect(()=>{
        document.title=`you clicked ${count} times`

    })
    return (
        <div>
            {/* <input type='text' value={name} onChange={e=>setname.name}></input> */}
         <button onClick={()=>setcount(count+1)}>you clicked {count} times</button>
        </div>
    )
}
 export default UseEffectone;
