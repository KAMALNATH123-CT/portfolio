import { useState, useEffect } from "react";
import "./skills.css";
export default function Skills({ABC}) {
  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "MongoDB",
    "Machine Learning",
  ]);
  const [newSkill, setNewSkill] = useState("");
  function addSkill() {
    const value = newSkill.trim();
    if (
      value &&
      !skills.some(
        (skill) => skill.toLowerCase() === value.toLowerCase()
      )
    ) {
      setSkills([...skills, value]);
      setNewSkill("");
    }
  }
  return (
    <section className="page">
      <h1>My Skills</h1>
      <div className="skill-input">
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter a skill"
        />
        <button className="btn" onClick={addSkill}>
          Add Skill
        </button>
      </div>
      <div className="skill-list">
        {ABC.map((skill) => (
          <span className="skill" key={skill}>
            <p style={{margin:'10px'}}>{skill.skills}</p>
          </span>
        ))}
      </div>
    </section>
  );
}
