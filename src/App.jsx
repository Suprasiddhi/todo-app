import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
    { id: 3, text: "Deploy the App", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [searchText, setSearchText] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar onSearch={setSearchText} />
      <AddTodoForm onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleComplete}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
