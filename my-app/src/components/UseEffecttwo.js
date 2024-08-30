import React,{useState,useEffect} from 'react'
function UseEffecttwo(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logmouseposition=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useeffect')
    window.addEventListener('mousemove',logmouseposition)
    return ()=>{
     
    }
})
    return (
    <div>
        <button>Toggle Display</button>
     hook X-{x} Y-{y}
    </div>
    )
}
export default UseEffecttwo;