import { useState, useEffect } from "react";
import "./accordion.css";
export default function Accordion({ABC}) {
  const [open, setOpen] = useState(0);
  const data = [
    {
      id:1,
      question: "What is my education?",
      answer: "B.Tech Artificial Intelligence and Data Science.",
    },
    {
      id:2,
      question: "What are my technical skills?",
      answer: "Java, Python, React.js, JavaScript and MongoDB.",
    },
    {
      id:3,
      question: "What are my interests?",
      answer: "Web development, AI and Machine Learning.",
    },
  ];
  return (
    <section className="page">
      <h1>Frequently Asked Questions</h1>
      {data.map((item) => (
        <div className="accordion-item" key={item.id}>
          <button
            className="accordion-question"
            onClick={() => setOpen(open === item.id ? -1 : item.id)}
          >
            {item.question}
            <span>{open === item.id ? "−" : "+"}</span>
          </button>
          {open === item.id && (
            <p className="accordion-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}
