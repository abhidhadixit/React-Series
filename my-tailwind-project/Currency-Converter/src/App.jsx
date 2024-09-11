import React from 'react'
import { useState } from 'react'
import {Input} from '.c/omponents'
import CurrencyConverterinfo from './Hooks/CurrencyConverterinfo'
import './App.css'

function App() {
    const [amount,setAmount]=useState(0)
    const [from ,setFrom]=useState("usd")
    const [to ,setTo]=useState("inr")
    const [convertedAmount,setConvertedAmount]=useState(0)
  return (
    <div>App</div>
  ) 
}

export default App