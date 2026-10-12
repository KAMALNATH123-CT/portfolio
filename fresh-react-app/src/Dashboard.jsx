import {React,  useState } from 'react';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [showAdultsOnly, setShowAdultsOnly] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: 'charlet', age: 30, course: 'cs' }
  ]);

  const handleAddStudent = () => {
    if (!name || !age || !course) return;
    const newStudent = {
      id: Date.now(),
      name: name,
      age: Number(age),
      course: course
    };
    setStudents([...students, newStudent]);
    setName('');
    setAge('');
    setCourse('');
  };
  const handleDeleteStudent = (id) => {
    const freshList = students.filter(student => student.id !== id);
    setStudents(freshList);
  };
  const visibleStudents = showAdultsOnly
    ? students.filter(student => student.age >= 18)
    : students;

  return (
    <div style={{ padding: '30px', background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      </div>
      <div style={{ marginBottom: '25px' }}>
        <button onClick={() => setShowFaq(!showFaq)}>What is React?</button>
        {showFaq && <p style={{ margin: '8px 0 0 0' }}>React is a frontend JavaScript library for building components.</p>}
      </div>
      <div style={{ marginBottom: '25px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Counter: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>{' '}
        <button onClick={() => setCounter(counter - 1)}>-</button>{' '}
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginRight: '5px' }} />
        <input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginRight: '5px' }} />
        <input placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={{ marginRight: '5px' }} />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ cursor: 'pointer' }}>
          <input type="checkbox" checked={showAdultsOnly} onChange={(e) => setShowAdultsOnly(e.target.checked)} />
          {' '}Show Students 18
        </label>
      </div>
      <ul style={{ paddingLeft: '20px' }}>
        {visibleStudents.map(student => (
          <li key={student.id} style={{ marginBottom: '8px' }}>
            {student.name} ({student.age} yrs) - {student.course}{' '}
            <button onClick={() => handleDeleteStudent(student.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}