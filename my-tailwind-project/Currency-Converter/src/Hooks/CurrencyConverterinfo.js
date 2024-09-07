import {useEffect,useState} from 'react'

function CurrencyConverterinfo(currency) {
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[setdata]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
    
}

export default CurrencyConverterinfo