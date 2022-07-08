import { useState } from "react";
import useTodo from "./hooks";

function App() {
  const [todos, { addTodo, toggleTodo }, { setFilterBy }] = useTodo();

  const handleFilter = (status) => () => {
    setFilterBy(status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target[0].value);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <h1 className="animate-pulse text-center text-6xl text-rose-500 duration-700">
        Todo App
      </h1>
      <div className="flex max-w-3xl flex-col rounded-lg bg-gray-100 shadow shadow-gray-100">
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type=""
            placeholder="Add Todos ..."
            className="w-full"
            name="input"
          />
          <button>+</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center">
            <input
              checked={todo.isDone}
              type="checkbox"
              className="px-3"
              onChange={toggleTodo(todo.id)}
            />
            <h3 className="text-sm">{todo.title}</h3>
          </div>
        ))}
      </div>
      <button className="visited:text-3xl" onClick={handleFilter("all")}>
        all
      </button>
      <button onClick={handleFilter("active")}>active</button>
      <button onClick={handleFilter("completed")}>completed</button>
    </div>
  );
}

export default App;
