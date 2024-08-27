import React,{useState} from 'react';
function Hookcounter3(){
  const [name,setname]=useState({firstname:'',lastname:''})
  return (
    <form>
        <input type='text' value={name.firstname} onChange={e=>setname({firstname:e.target.value})}></input>
        <input type='text' value={name.lastname} onChange={e=>setname({lastname:e.target.value})}></input>
         
         <h2> Your First Name-{name.firstname}</h2>
         <h2>Yout Last Name-{name.lastname}</h2>
    </form>
  )
}
export default Hookcounter3;