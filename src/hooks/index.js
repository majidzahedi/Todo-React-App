import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("toggle dark mode triggerd!");
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("class", isDarkMode ? "dark" : "");
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

const useTodo = () => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const [filterBy, setFilter] = useState("all");

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const title = e.target[1].value;
    const newTodo = { id: todos.length + 1, title, isDone: false };
    if (title === "") {
      return;
    }
    setTodos([...todos, newTodo]);
    e.target[1].value = "";
    return newTodo;
  };

  const toggleTodo = (id) => () => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodo);
  };

  const removeTodo = (id) => () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const setFilterBy = (status) => () => {
    setFilter(status);
  };

  const filterdTodos = todos.filter((todo) =>
    filterBy === "all"
      ? todo
      : filterBy === "active"
      ? todo.isDone === false
      : todo.isDone === true
  );

  const clearCompleted = () => {
    const updatedTodo = todos.filter((todo) => todo.isDone !== true);
    setTodos(updatedTodo);
  };

  return [
    filterdTodos,
    { addTodo, removeTodo, toggleTodo, clearCompleted },
    { todos, filterBy, setFilterBy },
  ];
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
