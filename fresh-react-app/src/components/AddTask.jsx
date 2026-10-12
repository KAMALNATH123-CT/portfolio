import { useState } from "react";

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      alert("Please enter a task name");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: priority,
      completed: false,
    };

    addTask(newTask);

    setTaskName("");
    setPriority("Medium");
  };

  return (
    <section className="add-task">

      <h2>Add New Task</h2>

      <div className="form">

        <input
          type="text"
          placeholder="Enter task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button onClick={handleAddTask}>
          + Add Task
        </button>

      </div>

    </section>
  );
}

export default AddTask;