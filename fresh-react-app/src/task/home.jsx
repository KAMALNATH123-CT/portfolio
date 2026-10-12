import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Accordion from "./accordion";
import Contact from "./contact";
import Login from "./login";
import Project from "./project";
import Skills from "./skills";
import axios from 'axios'
import './home.css'

export default function home() {
  const [name, setName] = useState("Kamalnath CT");
  const [data,setdata]=useState([])
    useEffect(()=>{
    axios.get('https://dummyjson.com/c/2288-714b-4b04-b8d7')
    .then((res)=>setdata(res.data))
    },[])


  useEffect(() => {
    document.title = "Kamal Portfolio";
  }, []);
  
  const datas = [
    {
      id: "79",
      name: "Kamalnath CT",
      username: "kamalchinna",
      email: "kamalchinna198@gmail.com",
      location: "Salem",
      about: "",
      project: [
        {
          title: "",
          description: ""
        }
      ],
      social: {
        LinkedIn: "https://www.linkedin.com/in/kamalnath2007/",
        GitHub: "https://github.com/KAMALNATH123-CT"
      },
      accordion: [],
      skills: [
        "Java",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Basic MERN"
      ],
      contact: "8248898004",
      role: "Student"
    }
  ];
  return (
    <>
      <nav className="navbar">
        <h2>Portfolio.ko</h2>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/accordion">Accordion</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/project">Project</Link>
          <Link to="/skills">Skills</Link>
          <button style={{height:'30px',width:'100px',color:'white',background:'blue',borderRadius:'2px',border:'1px solid white'}}>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <section className="home">
              <p>WELCOME TO MY PORTFOLIO</p>
              {data.map((i)=>{
                return(
                  <h1>Hi, I'm {i.name}</h1>
                )
              })}
              <h2>AI & Data Science Student</h2>
              {data.map((i)=>{
                return(
                  <p>{i.skills}</p>
                )
              })}
              <div className="home-buttons">
                <Link className="btn" to="/project">View Projects</Link>
                <Link className="btn secondary" to="/contact">Contact Me</Link>
              </div>
            </section>
          }
        />

        <Route path="/about" element={<About ABC={datas}/>} />
        <Route path="/accordion" element={<Accordion ABC={datas}/>} />
        <Route path="/contact" element={<Contact ABC={datas}/>} />
        <Route path="/login" element={<Login ABC={datas}/>} />
        <Route path="/project" element={<Project ABC={datas}/>} />
        <Route path="/skills" element={<Skills ABC={datas}/>} />
      </Routes>
    </>
  );
}











// import React from 'react';
// import Login from './login';
// import Project from './project';
// import Skills from './skills';
// import Contact from './contact';
// import About from './about';
// import { Routes, Route, Link } from 'react-router-dom';
// import './home.css'

// const Home = () => {
//   const datas = [
//     {
//       id: "79",
//       name: "Kamalnath CT",
//       username: "kamalchinna",
//       email: "kamalchinna198@gmail.com",
//       location: "Salem",
//       about: "",
//       project: [
//         {
//           title: "",
//           description: ""
//         }
//       ],
//       social: {
//         LinkedIn: "https://www.linkedin.com/in/kamalnath2007/",
//         GitHub: "https://github.com/KAMALNATH123-CT"
//       },
//       accordion: [],
//       skills: [
//         "Java",
//         "Python",
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "MongoDB",
//         "Basic MERN"
//       ],
//       contact: "8248898004",
//       role: "Student"
//     }
//   ];

//   return (
//     <div>
//       <div className='navbar'>
//       <h1>portfoliobox</h1>
//       <nav>
//         <Link className="llas" to="/">Home</Link>
//         <Link className="llas" to="/project">Project</Link>
//         <Link className="llas" to="/skills">Skills</Link>
//         <Link className="llas" to="/contact">Contact</Link>
//         <Link className="llas" to="/about">About</Link>
//         <button>
//         <Link className="llas" to="/login">Login</Link></button>
//       </nav>

//       </div>
//       <Routes >
//         <Route path="/" element={<div>Welcome to my portfolio!</div>} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>

//       {/* <Login /> */}
//     </div>
//   );
// };

// export default Home;