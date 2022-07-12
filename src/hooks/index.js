import { useEffect, useState } from "react";

const dummyTodos = [
  { id: 1, title: "complete online JavaScript course", isDone: true },
  { id: 2, title: "Jog around the park 3x", isDone: false },
  { id: 3, title: "10 minutes meditation", isDone: false },
  { id: 4, title: "Read for 1 hour", isDone: false },
  { id: 5, title: "Pick up groceries", isDone: false },
  { id: 6, title: "Complete Todo app on Frontend Mentor", isDone: false },
];

export const useRtl = () => {
  const [isRTL, setIsRtl] = useState(false);

  useEffect(() => {
    document.querySelector("body").setAttribute("dir", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  const toggleRTL = () => setIsRtl(!isRTL);

  return [isRTL, toggleRTL];
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
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
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title,
      isDone: false,
    };
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
  const parsedData = !!data ? JSON.parse(data) : dummyTodos;
  return parsedData;
};

export default useTodo;
