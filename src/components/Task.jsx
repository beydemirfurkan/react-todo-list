const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ' '}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <span className="deleteTask" onClick={() => onDelete(task.id)}>
        X
      </span>
    </div>
  );
};

export default Task;
