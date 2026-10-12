import TaskCard from "./TaskCard";

function TaskList({ tasks, onComplete, onDelete }) {
  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <section className="tasks">

      <div className="task-heading">
        <h2>My Tasks</h2>
        <span>{pendingTasks} pending</span>
      </div>

      {tasks.length === 0 ? (
        <div className="empty">
          No tasks available.
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))
      )}

    </section>
  );
}

export default TaskList;