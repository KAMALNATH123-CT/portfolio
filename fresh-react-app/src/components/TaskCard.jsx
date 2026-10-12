function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>

      <div>
        <h3>{task.name}</h3>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-actions">

        {!task.completed && (
          <button onClick={() => onComplete(task.id)}>
            ✓ Complete
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;