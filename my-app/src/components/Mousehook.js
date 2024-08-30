import React,{useState,useEffect} from 'react'

function Mousehook() {
  const [x,setX]=useState(0)
  const [y,setY]=useState(0)
  const [display,setdisplay]=useState()
   const mouseposition=(e)=>{
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
   }
  useEffect(()=>{
   console.log('useEffect called')
   window.addEventListener('mousemove',mouseposition)
  return ()=>{
    console.log('component unmount ')
    window.removeEventListener('mousemove',mouseposition)
  };
  },[])
  return (
    <div>
    <button onClick={()=>setdisplay(!display)}>Toggle  Display </button>
    {display &&(
      <div>
    hook X-{x} Y-{y}
    </div>
    )}
    </div>
  );
}

export default Mousehook