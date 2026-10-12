import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const getdata = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
    axios.get('https://dummyjson.com/c/2288-714b-4b04-b8d7')
    .then((res)=>setdata(res.data))
    },[])
  return (
    <div>
        {<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>location</th>
                        <th>contact</th>
                        <th>role</th>
                    </tr>
                    <tbody>
            {data.map((i)=>{
                return(
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.username}</td>
                            <td>{i.Email}</td>
                            <td>{i.location}</td>
                            <td>{i.contact}</td>
                            <td>{i.role}</td>
                        </tr>
                )
            })}
                    </tbody>
                </thead>
            </table>}
    </div>
  )
}

export default getdata