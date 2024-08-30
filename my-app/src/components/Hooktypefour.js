import React,{useState} from 'react'
function Hooktypefour(){
    const [items,setItems]=useState([])
    const additem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10+1)

        }])
    }
    return (
       <div>
        <button onClick={additem}>add a number</button>
         <ul>
            {
                items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                ))}
         </ul>
        
        </div>
    )
}
export default Hooktypefour;
