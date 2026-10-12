import {React,useEffect,useState } from 'react'

const counter = () => {
    const [count,setcount]=useState(0)
    // useEffect(()=>{console.log(count)},[])
    // useEffect(()=>{console.log(count)},[count+1])
    // useEffect(()=>{console.log(count)})
    // function timeout(){
    //     setTimeout(
    //         ()=>{
    //             console.log("test")
    //         },[1000]
    //     )
    // }
    // function timeint(){
    //     setInterval(
    //         ()=>{
    //             console.log("test")
    //         },[0.1]
    //     )
    // }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setcount(count + 1)}>+</button>
        <button onClick={()=>setcount(count - 1)}>-</button>
        <button onClick={()=>setcount(0)}>reset</button>
        <button onClick={timeout}>resetnnh</button>
        <button onClick={timeint}>reseth</button>
    </div>
  )
}
      
export default counter