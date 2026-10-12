import { useState, useEffect } from "react";
import "./project.css";
export default function Project({ABC}) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: "AI",
        tech: "Python, OpenCV, MediaPipe",
        description: "Draw using hand gestures.",
      },
      {
        id: 2,
        name: "SafeGuide V4",
        tech: "Python, ML, MongoDB",
        description: "Safety application with emergency alerts.",
      },
      {
        id: 3,
        name: "Task Dashboard",
        tech: "React.js, CSS",
        description: "Manage and track daily tasks.",
      },
    ]);
  }, []);
  return (
    <section className="page">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
