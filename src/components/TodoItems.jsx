function TodoItems({ todos, onToggle, onDelete }) {
  const { id, text, completed } = todos;
  return (
    <li className={completed ? "completed" : ""}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span>{text}</span>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default TodoItems;
