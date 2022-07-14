import TodoItem from "./TodoItem";
import TodoListFooter from "./TodoListFooter";

import useStore from "../store";

const TodoList = () => {
  const { todos, status } = useStore();

  const filterdTodos =
    status === "all"
      ? todos
      : todos.filter((todo) => (status ? !todo.isDone : todo.isDone));

  return (
    <div className="flex flex-col rounded-lg bg-white shadow dark:bg-veryDarkDesaturatedBlue">
      {filterdTodos.length !== 0 ? (
        filterdTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <h3 className="border-b border-lightGrayishBlue px-8 py-6 text-center text-veryDarkBlue dark:border-darkGrayishBlue1 dark:text-veryLightGrayishBlue">
          You've Got Nothing TODO! 🥳
        </h3>
      )}
      <TodoListFooter />
    </div>
  );
};

export default TodoList;
