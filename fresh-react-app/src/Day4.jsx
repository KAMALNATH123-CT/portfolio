import React, { useState } from 'react'
function Day4({data}){
    console.log(data)
    const [Value,setValue]=useState({
        name:"",
        email:"",
        age:0
    })
    const [error,seterror]=useState({
        nameError:"",
        emailError:"",
        ageError:0
    })
    function change(event){
        setValue({
            ...Value,
            [event.target.name]:event.target.value
        })
    }
    function submitData(event){
        event.preventDefault();
        if(Value.name == ""){
            seterror({...error,nameError: "fill"})
        }
        else if(Value.name.length <=3){
            seterror({...error,nameError: "more than 3"})
        }
    }
  return (
    <div>
        <form onSubmit={submitData}>
            <input type='text' placeholder='Name' name='name' onChange={change}/><br></br>
            <span>{error.nameError}</span>
            <input type='email' placeholder='abc@gmail.com' name='email' onChange={change}/><br></br>
            <input type='number' placeholder='Age' name='age' onChange={change}/><br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default Day4