// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// const getdata = () => {
//     const [data,setdata]=useState([])
//     useEffect(()=>{
//     axios.get('http://localhost:1234')
//     .then((res)=>setdata(res.data))
//     },[])
//   return (
//     <div>
//         {<table>
//                 <thead>
//                     <tr>
//                         <th>NAME</th>
//                         <th>AGE</th>
//                         <th>DEPT</th>
//                     </tr>
//                     <tbody>
//             {data.map((i)=>{
//                 return(
//                         <tr key={i.id}>
//                             <td>{i.name}</td>
//                             <td>{i.age}</td>
//                             <td>{i.dept}</td>
//                         </tr>
//                 )
//             })}
//                     </tbody>
//                 </thead>
//             </table>}
//     </div>
//   )
// }

// export default getdata