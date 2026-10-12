function Stats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <section className="stats">

      <div className="stat-card">
        <h3>Total Tasks</h3>
        <strong>{totalTasks}</strong>
      </div>

      <div className="stat-card completed-stat">
        <h3>Completed</h3>
        <strong>{completedTasks}</strong>
      </div>

      <div className="stat-card pending-stat">
        <h3>Pending</h3>
        <strong>{pendingTasks}</strong>
      </div>

    </section>
  );
}

export default Stats;