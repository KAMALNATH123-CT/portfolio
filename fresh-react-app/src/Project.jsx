import { useState } from "react";
import React from "react";

function Project(){
    const [Data,setData]=useState(0);
    const [Datas,setDatas]=useState("name:");
    const [Value,setValue]=useState(true);
    const [hide,sethide]=useState(false);
    const [data,setdata]=useState([
        {name:"kamal",age:"19",dept:"AIDS"},
        {name:"sakthivel",age:"19",dept:"IT"},
        {name:"thirumaran",age:"19",dept:"IT"}
    ]);
    function inc(){
        setValue(!Value)
    }

  return (
    <div style={{ backgroundColor:(!Value)?"#000000":"#ffffff",color:(!Value)?"#ffffff":"#000000"}}>
        <h1>{Data}</h1>
        <button onClick={()=>setData(Data+1)}> +1 </button>
        <button onClick={()=>setData(Data-1)}> -1 </button>
        {data.map((i)=>{
            return(
                <>
                <p>{i.name}</p>
                <p>{i.age}</p>
                <p>{i.dept}</p>
                </>
            )
        })}
        <button onClick={()=>sethide(!hide)}>hide</button>
        {hide && <p>kamal</p>}
        <button onClick={inc}>{Value?"☀":"🎑"}</button>
        <form>
            <fieldset>
                <legend>Regester</legend>
                <legend>Name:</legend>
                <input onChange={(e)=>{setDatas(e.target.value)}}></input>
            </fieldset>
            <h1>{Datas}</h1>
        </form>
    </div>
  )
}

export default Project;