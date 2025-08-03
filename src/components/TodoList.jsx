import TodoItems from "./TodoItems";
import "./TodoList.css";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todos={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
export default TodoList;
