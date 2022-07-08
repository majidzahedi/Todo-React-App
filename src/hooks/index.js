import { useEffect, useState } from "react";

const dummytodos = [
  { id: "1", title: "Frist Todo", isDone: false },
  { id: "2", title: "Second Todo", isDone: true },
  { id: "3", title: "Thrid Todo", isDone: false },
];

const useTodo = () => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = { id: todos.length + 1, title, isDone: false };
    setTodos([...todos, newTodo]);
    return newTodo;
  };

  const toggleTodo = (id) => () => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodo);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filterdTodos = todos.filter((todo) =>
    filterBy === "all"
      ? todo
      : filterBy === "active"
      ? todo.isDone === false
      : todo.isDone === true
  );

  return [filterdTodos, { addTodo, removeTodo, toggleTodo }, { setFilterBy }];
};

const saveTodosToLocalStorage = (data) => {
  const codedData = JSON.stringify(data);
  localStorage.setItem("todos", codedData);
};

const getTodosFromLocalStorage = () => {
  const data = localStorage.getItem("todos");
  const parsedData = !!data ? JSON.parse(data) : [];
  return parsedData;
};

export default useTodo;
