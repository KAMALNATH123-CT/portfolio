import { useState, useEffect } from "react";
import './about.css'

export default function About({ABC}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="page">
      <h1>About Me</h1>
      {/* {ABC.map((i)=>{
        return(
          <p>{i.about}</p>
        )
      })} */}
      <p>I'm Kamalnath CT, a B.Tech Artificial Intelligence and Data Science student at Muthayammal Engineering College.</p>
      <p>I am interested in web development, AI, Machine Learning,and creating useful software applications.</p>
      {showMore && (
        <p>My technical skills include Java, Python, JavaScript, React.js, MongoDB, HTML, CSS and Java Script.</p>
      )}
      <button className="btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}
