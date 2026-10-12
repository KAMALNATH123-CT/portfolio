import { React,useState } from "react";
function demo() {
    const student=[{
        id:1,
        name:"kamal",
        age:19,
        dept:"aids"
    },{
        id:2,
        name:"kamalnath",
        age:18,
        dept:"aids"
    }]
    const data=student.map((datas)=>{
        return(
            <><div key={datas.id}>
            {datas.name}
            {datas.age}
            {datas.id}
            </div>
            </>
        )
    })
    console.log(data)
    const count=[1,2,3,4,5,6]
    const ag=student.filter((i)=>i.age>18)
    console.log(count.pop(),count)
    console.log(count.push(9),count)
    console.log(count.shift(),count)
    console.log(count.unshift(0),count)
    const names=["kamal","kk","ss","mm"]
    const snames=names.slice(1,3)
    console.log(names)
    console.log(snames)
    const spnames=["kamal","kk","ss","mm"]
    const ssnames=spnames.splice(1,2,"add")
    console.log(spnames)
    console.log(ssnames)

    return(
        <div>
            {/* <h1>{student[0].name}</h1>
            <h1>{student[1].name}</h1>
            <h1>{student[0].dept}</h1>
            <h1>{student[1].dept}</h1> */}
            <h1>{data}</h1>
            {<table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>dept</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((i)=>{
                        return(
                        <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.dept}</td>
                        </tr>)
                    })}
                </tbody>
                    {count.filter((i)=>i>2)}
            </table>}
       </div>
    )
}

export default demo;
