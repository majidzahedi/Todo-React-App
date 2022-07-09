import TodoItem from "./TodoItem";
const TodoList = ({
  todos,
  setFilterBy,
  filterBy,
  toggleTodo,
  removeTodo,
  clearCompleted,
  numberOfActiveTodos,
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow dark:bg-veryDarkDesaturatedBlue">
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <h3 className="border-b border-lightGrayishBlue px-8 py-6 text-center text-veryDarkBlue dark:border-darkGrayishBlue1 dark:text-veryLightGrayishBlue">
          You&apos;ve Got Nothing TODO! 🥳
        </h3>
      )}
      <div className="flex items-center  justify-between py-4 px-8">
        <p className="w-1/3 text-sm text-gray-400">
          {numberOfActiveTodos} Itmes left
        </p>
        <div className=" flex w-1/3 items-center  justify-between  ">
          <button
            onClick={setFilterBy("all")}
            className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
              filterBy === "all" && "text-blue-500"
            }`}
          >
            All
          </button>
          <button
            onClick={setFilterBy("active")}
            className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
              filterBy === "active" && "text-blue-500"
            }`}
          >
            Active
          </button>
          <button
            onClick={setFilterBy("completed")}
            className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
              filterBy === "completed" && "text-blue-500"
            }`}
          >
            Completed
          </button>
        </div>
        <button
          onClick={clearCompleted}
          className="w-1/3 text-right  text-sm text-gray-400"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
