import { useState, useEffect } from "react";
import "./login.css";
export default function Login({ABC}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    setMessage(
      "Demo login only. Backend authentication is required."
    );
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h1 style={{color: '#0284c7',margin:'0'}}>Login</h1>
        <h3>Welcome back!</h3>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}




// import React from 'react'
// import './login.css'
// const login = () => {
//   return (
//     <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'4%'}}>
//     <div className='login'>
//         <div className='wel' style={{width:'500px'}}>
//           <h2>Welcome Back</h2>
//           <p>Please log in using your personal information to stay connected with us.</p>
//         </div>
//         <form className='wel' style={{width:'500px'}}>
//             <p style={{position:'absolute',top:'10px',margin:'10px',padding:'0px 0px 0px 250px'}}>X</p>
//           <div>
//             <h1>Hello Again!</h1>
//             <p>Welcome back you've been missed!</p>
//             <input type='type' placeholder='Email or Phone no'/>
//             <input type='password' placeholder='********'/><br></br>
//             <a href='#'>Forget Password?</a><br></br>
//             <button>LoginIn</button>
//           </div>
//         </form>
//     </div>
//       </div>
//   )
// }

// export default login