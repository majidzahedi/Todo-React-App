import create from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

const dummyTodos = [
  { id: 1, title: "complete online JavaScript course", isDone: true },
  { id: 2, title: "Jog around the park 3x", isDone: false },
  { id: 3, title: "10 minutes meditation", isDone: false },
  { id: 4, title: "Read for 1 hour", isDone: false },
  { id: 5, title: "Pick up groceries", isDone: false },
  { id: 6, title: "Complete Todo app on Frontend Mentor", isDone: false },
];

const useStore = create(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        todos: dummyTodos,
        darkMode: true,
        status: "all",
        addTodo: (payload) =>
          set((state) =>
            state.todos.push({
              id: Math.floor(Math.random() * 1000),
              title: payload.title,
              isDone: payload.isDone,
            })
          ),
        toggleTodo: (id) =>
          set((state) => {
            state.todos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            );
          }),
        removeTodo: (id) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== id);
          });
        },
        activeTodosCount: () =>
          get().todos.filter((todo) => !todo.isDone).length,
        removeCompleted: () => {
          set((state) => {
            state.todos = state.todos.filter((todo) => !todo.isDone);
          });
        },
        setFilter: (string) => {
          set((state) => {
            state.status = string;
          });
        },
        toggleDarkMode: () => {
          set((state) => {
            state.darkMode = !state.darkMode;
          });
        },
      }),
      {
        name: "todos",
        getStorage: () => sessionStorage,
      }
    )
  )
);

useStore.subscribe(
  (state) => state.darkMode,
  (state) =>
    document
      .querySelector("body")
      .setAttribute("class", state ? "dark" : "light"),
  { fireImmediately: true }
);

export default useStore;
